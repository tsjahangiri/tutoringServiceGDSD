// @flow
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTutorList } from './actionCreators';
import ItemList from './itemList/ItemList';

// 1. dispatch -> actionCreator (getTutorList) -> reducer (GET_TUTOR_LIST)    -> saga (GET_TUTOR_LIST)
// 2. reducer (GET_TUTOR_LIST_SUCCESS) <- actionCreator (getTutorListSuccess) <- saga (getTutorListSuccess)

function Home() {
    
    const dispatch = useDispatch();
    
    var filters = {
        keyword: ''
    }

    React.useEffect(() => {
        dispatch(getTutorList(filters));
    });

    return (
        <ItemList />
    );
}
  
export default Home;