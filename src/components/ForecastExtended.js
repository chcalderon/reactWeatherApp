import React, { Component } from 'react';
import PropTypes from 'prop-types';
import transformForecast from './../services/transformForecast';
import './styles.css';
import ForecastItem from './ForecastItem';
import { url_forecast_weather, api_key } from './../constants/api_url';
/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Sabado',
    'Domingo'
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal'
};
*/

class ForecastExtended extends Component {

    state = {
        forecastData: null
    }

    extendedCall = (city) =>{
        const url_forecast= `${url_forecast_weather}?q=${city}&appid=${api_key}`;
        console.log(url_forecast);
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log("forecastdata");
                console.log(forecastData);
                this.setState({
                    forecastData
                })
            }
        )
    }

    componentDidMount() {
        //fetch o axios (cobertura mas antigua pero mas completa)
        this.extendedCall(this.props.city);        
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city){
            this.setState({forecastData: null})
            this.extendedCall(nextProps.city); 
        }
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map( forecast => <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}/>)
    }

    renderProgress = () => {
        return <h3>Cargando Pronostico extendido...</h3>;
    }

    render() { 
        const {city} = this.props;
        const { forecastData } = this.state;
        return ( 
        <div>
            <h2 className='forecast-title'>Pronostico extendido para {city}</h2>
            {forecastData ? this.renderForecastItemDays(forecastData): this.renderProgress()}
            </div> );
    }
}

ForecastExtended.propTypes ={
    city: PropTypes.string.isRequired,
}
 
export default ForecastExtended;