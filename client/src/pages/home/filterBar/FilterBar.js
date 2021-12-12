// @flow
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

type Props = {
    loadTutorList: Function,
}

export default function FilterBar(props: Props) {

    const dispatch = useDispatch();
    
    var keywordControl = useRef(null);

    const [filters, setFilters] = useState({
        keyword: ''
    });

    React.useEffect(() => {
        dispatch(props.loadTutorList({ filters }));
    });

    const onSubmit = () => {
        var newFilters = {
            ... filters,
            keyword: keywordControl.current.value
        };
        setFilters(newFilters);
    };

    return (
        <div style={{ display: 'block', width: 700, padding: 30 }}>
            <Form.Control size="sm" ref={keywordControl} type="text" placeholder="..." />
            <br/ >
            <Button variant="primary" type="submit" onClick={onSubmit}>Search</Button>
        </div>
    );
}