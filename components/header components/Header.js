 import React from 'react'
 import { useEffect } from 'react'
 import axios, { Axios } from 'axios'
 
 const Header = () => {

  const getMovies = async () => {
    try{
      const data = await axios.get("https://moviesdatabase.p.rapidapi.com/titles/x/upcoming");
      console.log(data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  },[])

   return (
    <span className='header'>The Movie I Move📺</span>

   )
 }
 
 export default Header