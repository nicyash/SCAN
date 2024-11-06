import React, { useEffect, useState } from 'react'
import "../styles/Main.css";
import RecipFiltr from "./RecipFiltr.jsx";


function Main() {
    const [data, setData] = useState([])
    const [id, setId] = useState([])
    const url = `http://127.0.0.1:8000/api/category/?format=json`

    useEffect(() => {
        fetch(url)
            .catch(err => console.log(err))
            .then(response => response.json())
            .then(result => setData(result));
    }, []);

    function categoryClick(id){
        // console.log(id);
        setId(id);
    }

    return (
        <>
        {data.map(obj =>{
                return(
                    <div className="category" key={obj.id}>
                        <button className="category buth" onClick={() => categoryClick(obj.id)}>{ obj.category }</button>
                    </div>
                );
            })}
        <RecipFiltr category={id}/>
        </>
    );
}

export default Main;

