// @flow
import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import TutorItem from "./TutorItem";
import { getTutorList } from "../../../../core/selectors/tutor";
import Paging from "../../../../components/paging/Paging";

export default function TutorList() {
  var data = useSelector(getTutorList); //TODO: Change var to const

  // TODO: Remove this code
  data = [
    {
      id: 1,
      pictureUrl: "logo512.png",
      name: "Rohat Sagar",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat placerat consequat. Mauris ornare, mi ac aliquet condimentum, quam nibh fringilla dui, sed lobortis ligula metus eget eros. Mauris facilisis lectus tortor, et malesuada urna accumsan vitae. Nullam dignissim, arcu sit amet placerat feugiat.",
      rating: 4.9,
      rate: 32,
      teaches: ["Maths", "English"],
    },
    {
      id: 2,
      pictureUrl: "logo512.png",
      name: "Nisha Devi",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat placerat consequat. Mauris ornare, mi ac aliquet condimentum, quam nibh fringilla dui, sed lobortis ligula metus eget eros. Mauris facilisis lectus tortor, et malesuada urna accumsan vitae. Nullam dignissim, arcu sit amet placerat feugiat.",
      rating: 4.9,
      rate: 32,
      teaches: ["Maths", "English"],
    },
    {
      id: 3,
      pictureUrl: "logo512.png",
      name: "Prem Sagar",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat placerat consequat. Mauris ornare, mi ac aliquet condimentum, quam nibh fringilla dui, sed lobortis ligula metus eget eros. Mauris facilisis lectus tortor, et malesuada urna accumsan vitae. Nullam dignissim, arcu sit amet placerat feugiat.",
      rating: 4.9,
      rate: 32,
      teaches: ["Maths", "English"],
    },
  ];

  if (data === undefined) {
    return <div></div>;
  }

  return (
    <div>
      <ListGroup>
        {data.map((item, i) => {
          return <TutorItem key={i} item={item} />;
        })}
      </ListGroup>
      <br />
      <Paging className="float-end" itemCount={data.length} />
    </div>
  );
}
/** */
/**
 * 
 * 
 * <ListGroup>
        {
            data.map((value, index) => {
                return (<ListGroup.Item key={index}>{value.anime_name}</ListGroup.Item>)
            })
        }
    </ListGroup>
    <br />

 */
/**
 * 
 * <Row>
          <Col>
            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Subject</th>
                  <th>Level</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>{value.id}</td>
                      <td>{value.first_name}</td>
                      <td>{value.last_name}</td>
                      <td>{value.subject}</td>
                      <td>{value.level}</td>
                      <td>{value.rating}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>

 */
