import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather';
const defaults = {
    icon: 'CLEAR_DAY',
    color: 'white',
    size: 100,
    animate: true
};

const WeatherInfo = (props) => {
    var weatherIcon;
    switch(props.weatherName){
    
        case "Rain":
            weatherIcon = 'RAIN';
            break;
        case "Thunderstorm":
            weatherIcon = 'WIND';
            break;
        case "Clouds":
            weatherIcon = 'CLOUDY';
            break;
        case "Snow":
            weatherIcon = 'SNOW';
            break;
        case "Haze":
            weatherIcon = 'PARTLY_CLOUDY_DAY';
            break;
        default:
            weatherIcon = 'CLEAR_DAY'
    }
    return (
        <>
            <div className=" side-bg text-center">
                <ReactAnimatedWeather
                    icon={weatherIcon}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                />
                <h2 className="text-white py-2">{props.weatherName}</h2>
                <div className="d-flex flex-wrap">
                    <div className="d-flex col-12 py-4">
                        <div className="text-white "><strong>Humidity</strong></div>
                        <div className="text-white ml-auto">{props.humidity}%</div>
                    </div>
                    <div className="d-flex col-12 py-4">
                        <div className="text-white"><strong>Visibility</strong></div>
                        <div className="text-white ml-auto">{props.visiblity} mi</div>
                    </div>
                    <div className="d-flex col-12 py-4">
                        <div className="text-white"><strong>Wind Speed</strong></div>
                        <div className="text-white ml-auto">{props.windSpeed} Km/h</div>
                    </div>
                    <div className="d-flex col-12 py-4">
                        <div className="text-white"><strong>Feels Like</strong></div>
                        <div className="text-white ml-auto">{props.feelsLike}°C</div>
                    </div>
                    <div className="d-flex col-12 py-4">
                        <div className="text-white"><strong>Max Temp</strong></div>
                        <div className="text-white ml-auto">{props.maxTemp}°C</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherInfo
