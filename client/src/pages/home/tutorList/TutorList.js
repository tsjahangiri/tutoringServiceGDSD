// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TutorItem from './TutorItem';
import { getTutorListData } from '../selectors';

export default function TutorList() {
    
    const data = useSelector(getTutorListData);
    
    if(data === undefined) {
        return (
            <div>
            </div>
        );
    }

    return (
        <div style={{ padding: 10 }}>
            <Container>
                <Row>
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
                            {
                                data.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{value.id}</td>
                                            <td>{value.first_name}</td>
                                            <td>{value.last_name}</td>
                                            <td>{value.subject}</td>
                                            <td>{value.level}</td>
                                            <td>{value.rating}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

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