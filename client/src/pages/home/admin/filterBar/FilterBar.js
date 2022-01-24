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

    var fNameControl = useRef(null);
    var lNameControl = useRef(null);
    var emailControl = useRef(null);

    const [filters, setFilters] = useState({
        fName: undefined,
        lName: undefined,
        email: undefined,
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
      fName: fNameControl.current.value,
      lName: lNameControl.current.value,
      email: emailControl.current.value,
    };
    console.log(newFilters)
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
                        <Form.Control size="sm" ref={fNameControl} type="text" />
                    </Col>
                    <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control size="sm" ref={lNameControl} type="text" />
                    </Col>
                    <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control size="sm" ref={emailControl} type="text" />
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
