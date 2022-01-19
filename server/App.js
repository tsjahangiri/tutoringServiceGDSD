const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const app = express();
let mysqlConnction = require("./database");

//chat- socket IO server instance
const http = require('http');
const socketIO = require("socket.io");
const server = http.Server(app);
var io = socketIO(server);

const port = 9090;
require("dotenv").config();

var jsonParser = bodyParser.json();

app.use(cors());
app.use(jsonParser);
app.use(cors());
app.use("/api/", routes);
// app.use(function (req, res, next) {
//   next(createError(404));
// });

//cors policy added
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

server.listen(port, () => {
  console.log(`Help Me Learn API listensssing at http://localhost:${port}`);
});

// app.listen(port, () => {
//   console.log(`Help Me Learn API listening at http://localhost:${port}`);
// });

// chat system start here.

var users = new Array();
var user_tabs = new Array();

io.on('connection', function (socket) {
  console.log('connection with socket.io, completed');

  // here we defined user is joni a room
  if (socket.handshake.query.admin_id != undefined) {
    socket.join(socket.handshake.query.admin_id);

    if (user_tabs[socket.handshake.query.admin_id] == undefined) {
      user_tabs[socket.handshake.query.admin_id] = 1;
    } else {
      user_tabs[socket.handshake.query.admin_id]++;
    }
  }

  if (users[socket.handshake.query.admin_id] != undefined) {
    var new_length = users[socket.handshake.query.admin_id].length;
    users[socket.handshake.query.admin_id][new_length] = socket;
  } else {
    users[socket.handshake.query.admin_id] = new Array();
    users[socket.handshake.query.admin_id][0] = socket;
  }

  // admin_id is defined so then login status update here
  if (socket.handshake.query.admin_id != undefined) {
    // var index = user_tabs[socket.handshake.query.admin_id];
    // console.log(index);
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getUTCFullYear();
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var c_date = year + '-' + month + '-' + date + ' ' + h + ':' + m + ':' + s;
    console.log(c_date);
    var sql = " update `register_user` set `user_status`=1, `status_active_time`=" + "'" + c_date + "'" + " where `user_id`=" + socket.handshake.query.admin_id;
    mysqlConnction.query(sql, (error) => {
      if (!error) {
        var all_user = "select * from `register_user` where `user_id`!=" + "'" + socket.handshake.query.admin_id + "'";
        mysqlConnction.query(all_user, (error, rows) => {
          login = new Array();
          login.push({ 'id': socket.handshake.query.admin_id, 'msg': "login", 'user_detail': rows });
          rows.forEach(function (ids) {
            // io.to(socket.handshake.query.admin_id).emit('admin_online', login);
            io.to(ids.user_id).emit('admin_online', login);
          });
          // console.log(login);
        });
        socket.emit('admin_online', 'login_successfully')
      }
    });

    socket.on('online', function (data) {
      var all_user = "select * from `register_user` where `user_id`!=" + "'" + socket.handshake.query.admin_id + "'";
      mysqlConnction.query(all_user, (error, rows) => {
        login = new Array();
        login.push({ 'id': socket.handshake.query.admin_id, 'msg': "login", 'user_detail': rows });
        rows.forEach(function (ids) {
          io.to(socket.handshake.query.admin_id).emit('admin_re_online', login);
          io.to(ids.user_id).emit('admin_re_online', login);
        });
        // console.log(login);
      });
    });

    socket.on('click_id', function (click_id) {
      var admin_id = socket.handshake.query.admin_id;
      // console.log(click_id);
      // console.log(chat_data_limit);
      var start = 0;
      var end = 10;
      // socket.handshake.session.click_id = click_id;
      // socket.handshake.session.save();
      var response = new Array();
      var condition = "(`from_id`=" + admin_id + " and `to_id`=" + click_id + " or `to_id`=" + admin_id + " and `from_id`=" + click_id + ")";
      // var sql = "select * from `chat` where "+condition+ "  ORDER BY `chat_id` DESC LIMIT "+start+","+end;
      var sql = "select * from ( select * from `chat` where " + condition + " ORDER BY `chat_id` desc LIMIT " + start + "," + end + ") sub ORDER BY `chat_id` ASC";
      console.log(sql);
      mysqlConnction.query(sql, (error, msg_rows) => {
        if (msg_rows) {
          var login_status = "select * from `register_user` where `user_id`=" + click_id;
          // console.log(login_status);
          mysqlConnction.query(login_status, (error, res_rows) => {
            if (res_rows) {
              response.push({ 'click_log_status': res_rows, 'each_msg': msg_rows });
              socket.emit('click_id_res', response);
              // console.log('not empty');
            }
          });
        } else {
          var login_status = "select * from `register_user` where `user_id`=" + click_id + " or `user_id`=" + admin_id;
          mysqlConnction.query(login_status, (res_rows) => {
            if (res_rows) {
              response.push({ 'click_log_status': res_rows, 'each_msg': msg_rows });
              socket.emit('click_id_res', response);
              // console.log('empty');
            }
          });
        }
      })
      // io.to(socket.handshake.query.admin_id).emit('click_id_res', res);
    });

    socket.on('scroll_more_data', function (click_id, limit) {
      // console.log(click_id+' '+limit);
      var admin_id = socket.handshake.query.admin_id;
      var end = 5;
      var start = end * (parseInt(limit) - 1);
      // console.log(start);
      var response = new Array();
      var condition = "(`from_id`=" + admin_id + " and `to_id`=" + click_id + " or `to_id`=" + admin_id + " and `from_id`=" + click_id + ")";
      // var sql = "select * from `chat` where "+condition+ "  ORDER BY `chat_id` DESC LIMIT "+start+","+end;
      var sql = "select * from ( select * from `chat` where " + condition + " ORDER BY `chat_id` desc LIMIT " + start + "," + end + ") sub ORDER BY `chat_id` ASC";
      // console.log(sql);
      mysqlConnction.query(sql, (error, msg_rows) => {
        if (msg_rows) {
          var login_status = "select * from `register_user` where `user_id`=" + click_id;
          // console.log(login_status);
          mysqlConnction.query(login_status, (error, res_rows) => {
            if (res_rows) {
              response.push({ 'click_log_status': res_rows, 'each_msg': msg_rows });
              socket.emit('scroll_more_data_on', response);
              // console.log('not empty');
            }
          });
        } else {
          var login_status = "select * from `register_user` where `user_id`=" + click_id + " or `user_id`=" + admin_id;
          mysqlConnction.query(login_status, (res_rows) => {
            if (res_rows) {
              response.push({ 'click_log_status': res_rows, 'each_msg': msg_rows });
              socket.emit('scroll_more_data_on', response);
              // console.log('empty');
            }
          });
        }
      })
    });

    socket.on('chat_data', function (data) {
      var admin_id = socket.handshake.query.admin_id;
      data.forEach(function (chats) {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getUTCFullYear();
        var h = new Date().getHours();
        var m = new Date().getMinutes();
        var s = new Date().getSeconds();
        var c_date = year + '-' + month + '-' + date + ' ' + h + ':' + m + ':' + s;
        // console.log(year+'-'+month+'-'+date+' '+h+':'+m+':'+s);
        var res_data = new Array();
        var login_status = "select * from `register_user` where `user_id`=" + chats.to;
        // console.log(login_status);
        mysqlConnction.query(login_status, function (error, status) {
          if (!error) {
            // console.log(status[0]);
            var insert_chat_data = "INSERT INTO `chat`(`from_id`, `to_id`, `msg_status`, `txt_msg`, `date_time`) VALUES (" + chats.from + ", " + chats.to + ", 0," + "'" + chats.msg_data + "'" + ", " + "'" + c_date + "'" + ")";
            mysqlConnction.query(insert_chat_data, function (error) {
              if (!error) {
                // var condition = "(`from_id`="+chats.from+" and `to_id`= "+chats.to+" or `from_id`="+chats.to+" and `to_id`="+chats.from+")";
                // var sql = "select * from chat where "+condition;
                var start = 0;
                var end = 10;
                var sql = "select * from (select * from `chat` ORDER by `chat_id` desc LIMIT " + start + "," + end + ") sub ORDER by `chat_id` ASC";
                console.log(sql);
                mysqlConnction.query(sql, function (error, rows) {
                  if (!error) {
                    res_data.push({ 'user_profile': status, 'msg': rows });
                    io.to(admin_id).emit('chat_data_response', res_data);
                    io.to(chats.to).emit('chat_data_response', res_data);
                    // io.sockets.emit('chat_data_response', res_data);
                  } else {
                    console.log(error);
                  }
                });
              } else {
                console.log(error);
              }
            });
          }
        });
      });
    });

    // msg status
    socket.on('msg_status_1', function (data) {
      var admin_id = socket.handshake.query.admin_id;
      data.forEach(function (status) {
        // console.log(status);
        var sql = "select `user_id` from register_user where user_id != " + status.admin_id;
        // console.log(sql);
        mysqlConnction.query(sql, function (error, rows) {
          if (!error) {
            // console.log(rows);
            rows.forEach(function (data) {
              // console.log(data.user_id);
              var condition = "(`from_id`=" + data.user_id + " and `to_id`=" + status.admin_id + ")";
              var unread_msg = "select `chat_id` from `chat` where " + condition + " and `msg_status`=0";
              // console.log(unread_msg);
              mysqlConnction.query(unread_msg, function (error, rows) {
                if (!error) {
                  io.to(admin_id).emit('update', data.user_id, rows.length);
                  io.to(data.user_id).emit('update', data.user_id, rows.length);
                }
              });
            });
          }
        });
      });
    });

    socket.on('click_id_msg_status', function (data) {
      var admin_id = socket.handshake.query.admin_id;
      data.forEach(function (status) {
        var update = "update `chat` set `msg_status`=1 where `from_id`=" + status.click_id + " and `to_id`=" + status.admin_id;
        // console.log(update);
        mysqlConnction.query(update, function (error) {
          if (!error) {
            var sql = "select `user_id` from register_user where user_id != " + status.admin_id;
            // console.log(sql);
            mysqlConnction.query(sql, function (error, rows) {
              if (!error) {
                // console.log(rows);
                rows.forEach(function (data) {
                  // console.log(data);
                  var condition = "(`from_id`=" + data.user_id + " and `to_id`=" + status.admin_id + ")";
                  var unread_msg = "select `chat_id` from `chat` where " + condition + " and `msg_status`=0";
                  // console.log(unread_msg);
                  mysqlConnction.query(unread_msg, function (error, rows) {
                    if (!error) {
                      io.to(admin_id).emit('click_id_msg_status_update', data.user_id, rows.length);
                      io.to(status.click_id).emit('click_id_msg_status_update', data.user_id, rows.length);
                    }
                  });
                });
              }
            });
          } else {
            console.log(error);
          }
        });
      });
    });

    socket.on('read_unread', function (data) {
      var admin_id = socket.handshake.query.admin_id;
      var sql = "select `user_id` from register_user where user_id != " + admin_id;
      // console.log(sql);
      mysqlConnction.query(sql, function (error, rows) {
        if (!error) {
          // console.log(rows);
          rows.forEach(function (data) {
            // console.log(data);
            var condition = "(`from_id`=" + admin_id + " and `to_id`=" + data.user_id + ")";
            var unread_msg = "select `chat_id` from `chat` where " + condition + " and `msg_status`=0";
            // console.log(unread_msg);
            mysqlConnction.query(unread_msg, function (error, rows) {
              if (!error) {
                io.to(admin_id).emit('read_unread_update', data.user_id, rows.length);
                io.to(data.user_id).emit('read_unread_update', data.user_id, rows.length);
              }
            });
          });
        }
      });
    });

    socket.on('header_menu', function (data) {
      if (data) {
        var admin_id = socket.handshake.query.admin_id;
        var all_user = "select * from `register_user` where `user_id`!=" + admin_id;
        mysqlConnction.query(all_user, function (error, rows) {
          if (!error) {
            rows.forEach(function (data) {
              var condition = "(`from_id`=" + data.user_id + " and `to_id`=" + admin_id + ")";
              var msg_count = "select * from `chat` where " + condition + " and `msg_status`=0";
              // console.log(msg_count);
              mysqlConnction.query(msg_count, function (error, res_data) {
                if (res_data.length > 0) {
                  io.to(admin_id).emit('header_response', data, res_data.length);
                  // io.to(data.user_id).emit('header_response', data, res_data.length);
                }
              });
            });
          }
        });
        // console.log(data);
      }
    });

  }

  // disconnect module start here
  socket.on('disconnect', function () {
    if (socket.handshake.query.admin_id != undefined) {
      user_tabs[socket.handshake.query.admin_id]--;
      if (user_tabs[socket.handshake.query.admin_id] == 0) {

        var all_user = "select * from `register_user` where `user_id`!=" + "'" + socket.handshake.query.admin_id + "'";
        mysqlConnction.query(all_user, (error, rows) => {
          rows.forEach(function (ids) {
            // io.to(socket.handshake.query.admin_id).emit('admin_offline', 'offline'+"'"+socket.handshake.query.admin_id+"'");
            io.to(ids.user_id).emit('admin_offline', 'offline' + "'" + socket.handshake.query.admin_id + "'");
          });
        });
        auto_logout(socket.handshake.query.admin_id);
      }
    } else {
      mysqlConnction.query(" update `register_user` set `user_status`=1 where `user_id`=" + socket.handshake.query.admin_id);
    }
  });

  function auto_logout(handshake_admin_id) {

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getUTCFullYear();
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var c_date = year + '-' + month + '-' + date + ' ' + h + ':' + m + ':' + s;
    console.log(c_date);
    mysqlConnction.query(" update `register_user` set `user_status`=0, `status_active_time`=" + "'" + c_date + "'" + " where `user_id`=" + socket.handshake.query.admin_id);
  }
  // end of disconnect
});
// chat system end here.