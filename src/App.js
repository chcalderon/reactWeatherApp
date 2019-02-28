import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import { MuiThemeProvider , createMuiTheme , withTheme } from '@material-ui/core/styles';
import './App.css';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Santiago,chi',
  'Madrid,es',
  'Ciudad de México,mx',
  'Washington,us',
  'Lima,pe',
]

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  // palette: {
  //   type: 'dark',
  // },
});


class App extends Component {
  
  state = {
    city: null,
  }

  handleSelectedLocation = (city => {
    //console.log(`handleSelectedLocation ${city}`);
    this.setState({ city });
  });
  render() {
    //const {city} = this.state;
    return (
      
      <div className="App">
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <MuiThemeProvider theme={theme}>
              <LocationList cities={cities}
              onSelectedLocation={this.handleSelectedLocation}></LocationList>
            </MuiThemeProvider>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {/* { !this.state.city ? 
                /*<h1>Seleccione ciudad</h1>*//* null:
                <ForecastExtended city={this.state.city}/>
              } */
              this.state.city && <ForecastExtended city={this.state.city}/>
              
              }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
      </div>
      
    );
  }
}

/* class App extends Component {

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  };
  render() {
    return (
      <div className="App">
        <LocationList cities={cities}
        onSelectedLocation= {this.handleSelectedLocation}></LocationList>
      </div>
    );
  }
}
 */
//export default App;

export default withTheme()(App);
