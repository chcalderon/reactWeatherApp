import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import transformWeather from '../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import "./styles.css";




/*const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"Santiago"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);*/
class WeatherLocation extends Component {
    
    constructor(props) {
        super(props);
        const { city } = props;

        this.state = {
            city,
            data: null,
        }
    }
    getCountry = weather_data => {
        return weather_data.name;
    }

    componentDidMount = () => {
        this.handleUpdateClick();
    }
    

    componentDidUpdate(prevProps, prevState) {
        
    }
    

    handleUpdateClick = () => {
        fetch(getUrlWeatherByCity(this.state.city)).then( resolve => {
            return resolve.json();
        }).then (response => {
            const newWeather = transformWeather(response);
            //console.log(newWeather);
            //debugger;
            this.setState({
                city: this.getCountry(response),
                data: newWeather
            });
            
        });
        
    }
    
    render () {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
            <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> :
                        <CircularProgress size={50}/>
                }
            </div>
        );
    }
}
WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;