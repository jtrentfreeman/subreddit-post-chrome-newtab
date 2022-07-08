import React from 'react';
import ReactDOM from 'react-dom';

import { Image } from 'react-bootstrap';

import './index.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageURL: null
        };
    }

    componentDidMount() {
        this.fetchImage();
        console.log(this.state.imageURL);
    }

    fetchImage = (subreddit) => {

        let imageURL;

        fetch('https://old.reddit.com/r/dalle2/random/.json', {
            method: 'GET',
            cache: 'no-cache'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let media_metadata  = data[0].data.children[0].data.url;
            // let ids = Object.keys(media_metadata);
            let url = `https://i.redd.it/${MediaMetadata}.png`;
            imageURL = media_metadata;
            this.setState({imageURL: media_metadata});
        });
    }

    displayImage = () => {
        return (
            <React.Fragment>
                <h2>This is up next</h2>
                <Image className='mainImage' src={this.state.imageURL}/>
                <h3> image should be above</h3>
            </React.Fragment>
        )
    }

    render() {
        return (
            <div className="App">
                <h1> Hello, reactttt</h1>
                {this.displayImage()}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))