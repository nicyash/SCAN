import React, { useEffect, useState } from 'react'
import "../styles/Recips.css";


function Recip(props) {
    const [data, setData] = useState([])
    const url = `http://127.0.0.1:8000/api/recips/?format=json`

    useEffect(() => {
        fetch(url)
            .catch(err => console.log(err))
            .then(response => response.json())
            .then(result => setData(result));
    }, []);



    return (
        <>
        {data.map(obj =>{
            return((props.id == obj.id) && (
                <div className="recip" key={obj.id}>
                    <div className="recip title">{obj.title}</div>
                    <div className="recip text">{obj.text}</div>
                </div>
            ));
        })}
        </>
    );
}

export default Recip;