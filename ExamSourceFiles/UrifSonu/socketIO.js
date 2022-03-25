const socketIO = require("socket.io");
const util = require("util");
const db = require("../database");

const executeQuery = util.promisify(db.query).bind(db);

module.exports = function (server) {
  var io = socketIO(server, {
    cors: {
      origin: "*",
    },
  });

  let connectedUsers = [];

  const addConnectedUser = (userId, socketId) => {
    var index = connectedUsers.findIndex((user) => user.userId === userId);
    if (index === -1) connectedUsers.push({ userId, socketId });
    else connectedUsers[index] = { userId, socketId };
  };

  const removeConnectedUserBySocketId = (socketId) => {
    connectedUsers = connectedUsers.filter(
      (user) => user.socketId !== socketId
    );
  };

  const getConnectedUserById = (userId) => {
    return connectedUsers.find((user) => user.userId === userId);
  };

  io.on("connection", (socket) => {
    console.log("client connected");

    socket.on("connectUser", async (payload) => {
      const { userId } = payload;

      if (userId === undefined || (await fetchUser(userId)) === undefined)
        return;

      addConnectedUser(userId, socket.id);

      // emit previous texts
      socket.emit("userTextsFetched", await fetchUserTexts(userId));
    });

    socket.on("sendText", async (payload) => {
      const { from, to, text } = payload;

      if (from === undefined || to === undefined) return;

      const fromUser = await fetchUser(from);

      const toUser = await fetchUser(to);

      if (fromUser === undefined || toUser === undefined) return;

      const date = new Date().toISOString().slice(0, 10);

      const textID = await insertUserText(from, to, text, date);

      const toConnectedUser = getConnectedUserById(to);
      const fromConnectedUser = getConnectedUserById(from);

      // If toUser is connected
      if (toConnectedUser !== undefined) {
        socket.to(toConnectedUser.socketId).emit("textReceived", {
          userID: fromUser.id,
          userName: fromUser.userName,
          id: textID,
          date: date,
          text: text,
        });
      }

      // If fromUser is connected
      if (fromConnectedUser !== undefined) {
        socket.emit("textSent", {
          userID: toUser.id,
          userName: toUser.userName,
          id: textID,
          date: date,
          text: text,
        });
      }
      /**
       * userID: int,
       * userName: string,
       * id: int
       * date: date,
       * text: string,
       */
    });

    // When client disconnect this method is called.
    socket.on("disconnect", () => {
      removeConnectedUserBySocketId(socket.id);
    });
  });

  async function fetchUser(userID) {
    const query =
      "SELECT user.*, CONCAT(user.firstName, ' ', user.lastName) as userName FROM hm_user user WHERE user.id = ?";
    const queryParams = [userID];
    var result = await executeQuery(query, queryParams);
    return result.length !== 0 ? result[0] : undefined;
  }

  async function insertUserText(fromUserId, toUserId, text, date) {
    const query =
      "INSERT INTO hm_chat (fromUserId, toUserId, text, createdDate, msgStatus) VALUES (?, ?, ?, ?, ?)";
    const queryParams = [fromUserId, toUserId, text, date, 1];

    var { affectedRows, insertId } = await executeQuery(query, queryParams);
    return insertId;
  }

  async function fetchUserTexts(userID) {
    const query = `SELECT
            chat.*,
            CONCAT(toUser.firstName, ' ', toUser.lastName) as toUserName,
            CONCAT(fromUser.firstName, ' ', fromUser.lastName) as fromUserName
      FROM  hm_chat chat
            left join  hm_user toUser on (chat.toUserId = toUser.id)
            left join  hm_user fromUser on (chat.fromUserId = fromUser.id)
      WHERE fromUserId = ? OR toUserId = ? ORDER BY chat.id`;
    const queryParams = [userID, userID];
    var result = await executeQuery(query, queryParams);

    // If not texts found
    if (result === undefined || result.length === 0) return [];

    // Transform data structure
    var texts = [];

    result.forEach((row) => {
      var outbound = row.fromUserId == userID ? true : false;

      // Find in texts array
      var text = texts.find((item) =>
        outbound ? item.userID == row.toUserId : item.userID == row.fromUserId
      );

      // If not in texts array
      if (text === undefined) {
        texts.push({
          userID: outbound ? row.toUserId : row.fromUserId,
          userName: outbound ? row.toUserName : row.fromUserName,
          texts: [
            {
              id: row.id,
              text: row.text,
              date: row.createdDate,
              inbox: !outbound,
            },
          ],
        });
      } else {
        text.texts.push({
          id: row.id,
          text: row.text,
          date: row.createdDate,
          inbox: !outbound,
        });
      }
    });

    return texts;
  }
};
