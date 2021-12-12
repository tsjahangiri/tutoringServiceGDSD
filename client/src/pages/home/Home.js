// @flow
import React from 'react';
import ItemList from './itemList/ItemList';
import FilterBar from './filterBar/FilterBar';
import { getTutorList } from './actionCreators';

// 1. dispatch -> actionCreator (getTutorList) -> reducer (GET_TUTOR_LIST)    -> saga (GET_TUTOR_LIST)
// 2. reducer (GET_TUTOR_LIST_SUCCESS) <- actionCreator (getTutorListSuccess)  <- saga (getTutorListSuccess)

function Home() {
    return (
        <div>
            <FilterBar loadTutorList={getTutorList} />
            <ItemList />
        </div>
    );
}
  
export default Home;