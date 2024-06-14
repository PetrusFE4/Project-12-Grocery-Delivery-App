import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreProduct from '../../components/ExploreProduct/ExploreProduct';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {


const [category,setCategory] = useState("All");
  return (
    <div>
        <Header/>
        <ExploreProduct category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  );
}

export default Home;
