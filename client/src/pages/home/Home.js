// @flow
import React from 'react';
import TutorList from './tutorList/TutorList';
import FilterBar from './filterBar/FilterBar';
import Header from '../../components/Header/Header';
import { getTutorList } from './actionCreators';

// 1. dispatch -> actionCreator (getTutorList) -> reducer (GET_TUTOR_LIST)    -> saga (GET_TUTOR_LIST)
// 2. reducer (GET_TUTOR_LIST_SUCCESS) <- actionCreator (getTutorListSuccess)  <- saga (getTutorListSuccess)

function Home() {
    return (
        <div>
            <Header />
            <br />
            <FilterBar loadTutorList={getTutorList} />
            <TutorList />
        </div>
    );
}
  
export default Home;