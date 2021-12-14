// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import { getTutorListData } from '../selectors';

export default function ItemList() {
    
    const data = useSelector(getTutorListData);

    return (
        <div style={{ display: 'block', width: 700, padding: 30 }}>
            <ListGroup>
                {
                    data.map((value, index) => {
                        return (<ListGroup.Item key={index}>{value.anime_name}</ListGroup.Item>)
                    })
                }
            </ListGroup>
        </div>
    );
}