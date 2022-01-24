import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import PendingTutorShow from "./PendingTutorShow";
import { pendingTutorShowList } from "../../../../core/selectors/PendingTutorShow";
import Paging from "../../../../components/paging/Paging";
import Page from "../../../../components/page/Page";
import FilterBar from "../filterBar/FilterBar";
import { fetchPendingTutorShowList } from "../../../../core/actionCreators/PendingTutorShow";

function PendingTutor(props) {
    const data = useSelector(pendingTutorShowList); //TODO: Change var to const

    // TODO: Remove this code
    const [active, toggleActive] = useState(1);
    if (data === undefined) {
        return <div></div>;
    }

    const pageSize = 5;
    const start = active * pageSize - pageSize;
    const end = start + pageSize;

    return (
        <div>
            <Page></Page>
            
            <br />
            <ListGroup>
                {data.slice(start, end).map((item, i) => {
                    return <PendingTutorShow key={i} item={item} />;
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

export default PendingTutor;

/*
//<FilterBar fetchPendingTutorShowList={fetchPendingTutorShowList} />
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


*/
