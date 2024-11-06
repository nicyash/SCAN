import React, { useEffect, useState } from 'react'
import "../styles/Recips.css";
import Recip from "./Recip.jsx";


function RecipFiltr(props) {
    const [data, setData] = useState([])
    const [id, setId] = useState([])
    const url = `http://127.0.0.1:8000/api/recips/?format=json`

    useEffect(() => {
        fetch(url)
            .catch(err => console.log(err))
            .then(response => response.json())
            .then(result => setData(result));
    }, []);

    function recipClick(id){
        console.log(id);
        setId(id);
    }

    return (
        <>
        {data.map(obj =>{
            return((props.category == obj.category) && (
                <div className="recip" key={obj.id}>
                    <button className="recip title" onClick={() => recipClick(obj.id)}>{obj.title}</button>
                    {/*<div className="recip title">{obj.title}</div>*/}
                </div>
            ));
        })}
        <Recip id={id}/>
        </>
    );
}

export default RecipFiltr;