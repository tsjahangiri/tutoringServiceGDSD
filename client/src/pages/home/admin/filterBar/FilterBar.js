// @flow
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

type Props = {
    fetchTutorList: Function,
    fetchStudentShowList: Function,
    fetchPendingTutorShowList: Function,
};

export default function FilterBar(props: Props) {
    const dispatch = useDispatch();

    var subjectControl = useRef(null);

    const [filters, setFilters] = useState({
        subjectName: "",
    });

    React.useEffect(() => {
        if(props.fetchTutorList)
            dispatch(props.fetchTutorList({ filters }));
        else if(props.fetchStudentShowList){
            dispatch(props.fetchStudentShowList({ filters }));
        } else {
            dispatch(props.fetchPendingTutorShowList({ filters }));
        }
    });

    const filterTutors = () => {
        var newFilters = {
            ...filters,
            subjectName: subjectControl.current.value,
        };
        setFilters(newFilters);
    };

return (
        <div>
            <Container
                style={{ borderColor: "#808080" }}
                className="p-3 border border-1 rounded"
            >
                <Row>
                    <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control size="sm" ref={subjectControl} type="text" />
                    </Col>
                    <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control size="sm" ref={subjectControl} type="text" />
                    </Col>
                    <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control size="sm" ref={subjectControl} type="text" />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Button
                            className="float-end"
                            variant="primary"
                            type="submit"
                            onClick={filterTutors}
                        >
                            Search
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
