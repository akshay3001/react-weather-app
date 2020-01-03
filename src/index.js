// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

// Create class component
class App extends React.Component {
    state = {
        lat: null,
        errMessage: '',
        loaderMessage: 'Allow the website to use location'
    }
    year = new Date()

    componentDidMount() {
        // Get user location
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, errMessage: '' }),
            err => this.setState({ errMessage: err.message })
        );
    }

    // Render function
    render() {
        // Conditional - if geolocation api has error
        if (this.state.errMessage) {
            return (
                <div>
                    <h2>Error: {this.state.errMessage}</h2>
                </div>
            );
        }
        // Conditional - if geolocation api receives latitude
        if (this.state.lat) {
            return (
                <div>
                    <section style={{minHeight:'100vh', margin: '0 auto -60px'}}>
                        <SeasonDisplay lat={this.state.lat} />
                    </section>
                </div>
            );
        }

        // Loading screen till geolocation API receives response
        return <Loader />

    }
}

// Render
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)