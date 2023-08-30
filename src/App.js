
import axios from 'axios';
import './App.css';
import { useState } from 'react';
import Weather from './Weather';

function App() {

const api_key = 'f8bfd2bfa0b3493dba092448230907';

const [city, setCity] = useState();
const [celsius, setCelsius] = useState();
const [icon, setIcon] = useState();
const [name, setName] = useState();
const [region, setRegion] = useState();
const [timezone, setTimezone] = useState();
// const [load, setLoad] = useState(true);


const handleChange = (e) => {
  console.log(e.target.value);
  setCity(e.target.value);
}


const fetchData = async () => {
    var result = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`);
    console.log('data' , result);
    console.log('icon' , result.data.location.name);
    setCelsius(result.data.current.feelslike_c);
    setIcon(result.data.current.condition.icon);
    setName(result.data.location.name);
    setRegion(result.data.location.region);
    setTimezone(result.data.location.tz_id);
}

const handleClick = (e) => {
  e.preventDefault();
  fetchData();
}

  return (
    <>
          { celsius == null ? 
                <div className='container_fluid'>
                    <h1 className='title'>Pluto - weather</h1>
                    <div className='card'>
                    <img className='img-ml' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeEPa-xphg4T0r9VKuwijrzS81UTMTIqYGGA&usqp=CAU' alt=''/>
                      <div className='container'>
                        <form>
                        <div class="form__group field">
                          <input className="form__field" placeholder="Name" name="name" id='name'  value={city} onChange={handleChange}/>
                          <label className="form__label">Location</label>
                        </div>
                        <br/>
                        <button className='button1' onClick={handleClick}>Find</button>
                        </form>
                      </div>
                    </div>
                </div>
            :
            <>
              <Weather name={name} icon={icon} celsius={celsius} region={region} timezone={timezone} setCelcius={setCelsius} />
            </>
          }
    </> 
  );
}


export default App;
