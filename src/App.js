import React, { Component } from 'react';
import LocationList from './components/LocationList';
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { MuiThemeProvider , createMuiTheme , withTheme } from '@material-ui/core/styles';
//import { MuiThemeProvider , withTheme } from '@material-ui/core/styles';
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
  // palette: {
  //   type: 'dark',
  // },
});


class App extends Component {

  handleSelectedLocation = (city => {
    console.log(`handleSelectedLocation ${city}`);
  });
  render() {
    return (
      
      <div className="App">
      <MuiThemeProvider theme={theme}>
        <LocationList cities={cities}
        onSelectedLocation={this.handleSelectedLocation}></LocationList>
      </MuiThemeProvider>
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
