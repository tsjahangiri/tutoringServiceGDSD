// @flow
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

type Props = {
    loadTutorList: Function,
}

export default function FilterBar(props: Props) {

    const dispatch = useDispatch();
    
    var subjectControl = useRef(null);

    const [filters, setFilters] = useState({
        subjectName: ''
    });

    React.useEffect(() => {
        dispatch(props.loadTutorList({ filters }));
    });

    const onSubmit = () => {
        var newFilters = {
            ... filters,
            subjectName: subjectControl.current.value
        };
        setFilters(newFilters);
    };

    return (
        <div style={{ padding: 10 }}>
            <Container>
                <Row>
                    <Col>
                        <Form.Control size="sm" ref={subjectControl} type="text" placeholder="Subject Name" />
                    </Col>
                    {/*
                    <Col>
                        <Form.Select size="sm" defaultValue="Any">
                            <option>Any</option>
                            <option>Undergraduate</option>
                            <option>Graduate</option>
                        </Form.Select>
                    </Col>
                    */}
                    <Col>
                        <Button size="sm" variant="primary" type="submit" onClick={onSubmit}>Search</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}