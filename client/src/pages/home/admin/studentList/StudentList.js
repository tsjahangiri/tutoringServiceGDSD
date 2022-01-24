import React, { useState} from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import StudentShow from "./StudentShow";
import { getStudentShowList } from "../../../../core/selectors/studentShow";
import Paging from "../../../../components/paging/Paging";
import Page from "../../../../components/page/Page";
import FilterBar from "../filterBar/FilterBar";
import { fetchStudentShowList } from "../../../../core/actionCreators/studentShow";

function StudentList(props) {
    const data = useSelector(getStudentShowList); //TODO: Change var to const

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
            <FilterBar fetchStudentShowList={fetchStudentShowList} />
            <br />
            <ListGroup>
                {data.slice(start, end).map((item, i) => {
                    return <StudentShow key={i} item={item} />;
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

export default StudentList;