import React, { useState } from 'react';
import axios from '../../api/axios';
import './SearchPage.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import SearchMain from '../../components/SearchComponents/SearchMain';
export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const {searchId} = useParams()

  useEffect(()=> {
    axios.get(`/search?part=snippet&maxResults=10&q=${searchId}`)
      .then(response => {
        console.log(response.data)
        const responsedata = response.data.items
        setSearchResults(responsedata)
      })
      .catch(error =>{
        console.error(error);
      });
  },[])
   
  
  return (
    <div>
      <SearchMain items={searchResults}/>
    </div>
  );
  }