import React, { useEffect,useState } from "react";
import "./Row.css";
import axios from "./axios";

const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({title,fetchUrl,isLargeRow}) {
    const[movies,setMovies]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            console.log(request.data.results)
            return request;
        }
        fetchData();
        },[fetchUrl])

  return (
    <div className="row">
        {title}
        <div className="row_posters">
            {
                movies.map(movie=>(
<img
             className={`row_poster ${isLargeRow && "row_posterLarge"}`}
             src={`${baseUrl}${isLargeRow?movies.
            poster_path: movie.backgrop_path}`}
            alt={movie.name}
            />
                ))}
            
            
        </div>
    </div>
  );
}

export default Row;