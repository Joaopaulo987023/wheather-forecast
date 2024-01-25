
import styles from './AppWeather.module.css'
import React, { useState } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet, faLocationDot, faMagnifyingGlass, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons'
import Loading from '../Loading/Loading';
import { useNavigate } from "react-router-dom";

export default function AppWeather() {
  const api = {
    key: "ffb3fe4b259eaef8d052d8fd790a6de0",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [isLoading,setIsLoading]=useState(false);

  const navigate = useNavigate();
  
  const searchPressed = (e) => {
      e.preventDefault();
      setIsLoading(true);
      fetch(`${api.base}weather?q=${search}&appid=${api.key}&units=metric&lang=pt_br`)
      .then((res) => res.json())
      .then((result) => {
        if(result.cod === 200){
          setWeather(result);
          setIsLoading(false);
        }else{
          setWeather(null);
          setIsLoading(false);
          navigate('./PagErro');
        }
       
      });
      setSearch("")
  };
  
  
  return (
<div className={styles.container}>
            <form className={styles.form} >
              <FontAwesomeIcon icon={faLocationDot} />
              <input type="search" placeholder='Buscar cidade' required value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
              <button disabled={!search} onClick={searchPressed} >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button >
            </form>
      {isLoading ? (<Loading/>) : weather &&(
      <div className={weather ?"weatherOpen":"weather" }>
        <div className={styles.headerWeather}>
          <h1 className={styles.weatherTitle}>{weather.name}</h1>
          <img 
            className={styles.ImgFlag} 
            src={`https://flagsapi.com/${weather.sys.country}/flat/64.png`}
          />
        </div>


        <div className={styles.infos}>
          <div className={styles.temp}>
            <img className={styles.tempImg} src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
            <div>
                <p className={styles.tempValue}>
                  {Math.floor(weather.main.temp)}<sup>°C</sup>
                </p>
                <p className={styles.tempDescription}>
                    {weather.weather[0].description}
                </p>
            </div>
        </div>


          <div className={styles.otherInfos}>
              
              <div className={styles.info}>
                  <FontAwesomeIcon className={styles.tempMaxIcon} icon={faTemperatureHigh}/>
                  <div>
                    <h2>Temp. max</h2>
                    <p className={styles.tempMax}>
                    {Math.floor(weather.main.temp_max)} <sup>°C</sup>
                    </p>
                  </div>
              </div>
              <div className={styles.info}>
                  <FontAwesomeIcon className={styles.tempMinIcon} icon={faTemperatureLow}/>
                  <div>
                    <h2>Temp. min</h2>
                    <p className={styles.tempMin}>
                    {Math.floor(weather.main.temp_min)} <sup>°C</sup>
                    </p>
                  </div>
              </div>
                <div className={styles.info}>
                  <FontAwesomeIcon className={styles.humidityIcon} icon={faDroplet}/>
                  <div>
                    <h2>Humidade</h2>
                    <p className={styles.humidity}>
                    {Math.floor(weather.main.humidity)}%
                    </p>
                  </div>
              </div>
              <div className={styles.info}>
                  <FontAwesomeIcon className={styles.windIcon} icon={faWind}/>
                  <div>
                    <h2>Vento</h2>
                    <p className={styles.wind}>
                      {Math.floor(weather.wind.speed)} km/h
                    </p>
                  </div>
              </div>
          </div>
      </div>

    
    </div>)}
        
</div>
  )
}
