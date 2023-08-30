import React from 'react';
import './Weather.css';

function Weather({name, celsius, icon, region, timezone, setCelcius }) {
  return (
        <div className='container_fluid'>
            <h1 className='title'>Pluto - weather</h1>
                <div className='card2'>
                    <div className='card-body'>
                        <img className='imgg-data' src={icon}></img>
                        <h1>{name}</h1>
                        <h3>{region}</h3>
                        <h5>{timezone}</h5>
                        <p>Celsius : {celsius}</p>
                        <button className='button2' style={{ marginTop: "10px", marginBottom: "20px" }} onClick={() => setCelcius(null)}>Back</button>
                    </div>
                </div>
        </div>
  )
}

export default Weather;
