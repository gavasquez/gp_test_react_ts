import React, { useEffect } from 'react';
import { People } from '../../data';
import { useDispatch, useSelector } from 'react-redux';
import {  addPeople } from '../../redux/states';
import  { AppStore } from '../../redux/store';
import { PeopleTable } from './components/PeopleTable';

export type HomeProps = {
	// types...
}

const Home: React.FC<HomeProps>  = ({}) => {

  const people = useSelector((state: AppStore) => state.people);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);
  
	return (
		<>
      <PeopleTable people={people}/>
    </>
	);
};


export default Home;
