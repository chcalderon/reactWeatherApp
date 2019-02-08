import React, { Component } from 'react';
import LocationList from './components/LocationList';
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import './App.css';

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
});


class App extends Component {

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  };
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className="App">
        <LocationList cities={cities}
        onSelectedLocation= {this.handleSelectedLocation}></LocationList>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
