import React from 'react';
import { useSelector } from 'react-redux';
import HomeComponent from '../../components/organism/HomeComponent';
import { selectUser } from '../../store/authSlice';


const HomeContainer = () => {
    const user = useSelector(selectUser);


  return (
    <HomeComponent user={user} />
);
};

export default HomeContainer; 