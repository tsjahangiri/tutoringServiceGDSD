// @flow
import React, { useState } from "react";
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
    {
      id: 4,
      pictureUrl: "logo512.png",
      name: "Prem Sagar",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat placerat consequat. Mauris ornare, mi ac aliquet condimentum, quam nibh fringilla dui, sed lobortis ligula metus eget eros. Mauris facilisis lectus tortor, et malesuada urna accumsan vitae. Nullam dignissim, arcu sit amet placerat feugiat.",
      rating: 4.9,
      rate: 32,
      teaches: ["Maths", "English"],
    },
    {
      id: 5,
      pictureUrl: "logo512.png",
      name: "Prem Sagar",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat placerat consequat. Mauris ornare, mi ac aliquet condimentum, quam nibh fringilla dui, sed lobortis ligula metus eget eros. Mauris facilisis lectus tortor, et malesuada urna accumsan vitae. Nullam dignissim, arcu sit amet placerat feugiat.",
      rating: 4.9,
      rate: 32,
      teaches: ["Maths", "English"],
    },
    {
      id: 6,
      pictureUrl: "logo512.png",
      name: "Prem Sagar",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat placerat consequat. Mauris ornare, mi ac aliquet condimentum, quam nibh fringilla dui, sed lobortis ligula metus eget eros. Mauris facilisis lectus tortor, et malesuada urna accumsan vitae. Nullam dignissim, arcu sit amet placerat feugiat.",
      rating: 4.9,
      rate: 32,
      teaches: ["Maths", "English"],
    },
  ];

  const [active, toggleActive] = useState(1);
  if (data === undefined) {
    return <div></div>;
  }

  const pageSize = 5;
  const start = active * pageSize - pageSize;
  const end = start + pageSize;

  return (
    <div>
      <ListGroup>
        {data.slice(start, end).map((item, i) => {
          return <TutorItem key={i} item={item} />;
        })}
      </ListGroup>
      <br />
      <Paging
        className="float-end"
        active={active}
        toggleActive={toggleActive}
        pageSize={pageSize}
        itemCount={data.length}
      />
    </div>
  );
}

