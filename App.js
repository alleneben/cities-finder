import React, { useState,useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';


import Tabs from './src';

const App = () => {
  const [cities, setcities] = useState([])
  
  
  useEffect(()=>{
    console.log(cities);
  },[cities])

  const addcity = (city) => {
    let allcities = cities;
    allcities.push(city) 
    setcities(allcities)
  }

  return( 
    <Tabs screenProps={{ cities: cities, addcity: addcity }} />
  )
};



export default App;