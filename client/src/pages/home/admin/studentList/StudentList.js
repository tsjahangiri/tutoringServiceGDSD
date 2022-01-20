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
    const data = useSelector(getStudentShowList); //TODO: Change var to const
    
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