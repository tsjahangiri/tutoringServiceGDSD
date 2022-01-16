import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import StudentShow from "./StudentShow";
import { getStudentShowList } from "../../../../core/selectors/studentShow";
import Paging from "../../../../components/paging/Paging";
import Page from "../../../../components/page/Page";
import FilterBar from "../filterBar/FilterBar";
import { fetchStudentShowList } from "../../../../core/actionCreators/studentShow";

function StudentList(props) {
    // var data = useSelector(getTutorList); //TODO: Change var to const

    // TODO: Remove this code
    var data = [
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
            <Page></Page>
            <FilterBar fetchStudentShowList={fetchStudentShowList} />
            <br />
            <ListGroup>
                {data.map((item, i) => {
                    return <StudentShow key={i} item={item} />;
                })}
            </ListGroup>
            <br />
            <Paging className="float-end" itemCount={data.length} />
        </div>
    );
}

export default StudentList;