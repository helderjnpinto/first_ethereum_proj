import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
// youtube v3 api key
const API_KEY = 'AIzaSyAoSijfREWBpLW_5aU1VHujGb3-GqtJ3BA';

class App extends Component {
    constructor(props) {
        super(props); 

        this.state = { videos: [] };
        this.videoSearch('surfboards');
    }
    videoSearch(term) {
        YTSearch({ key: API_KEY,  term }, (videos) => {
            this.setState({ 
                videos, 
                selectedVideo: videos[0] 
            });
        });
    }
    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term);
        }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={ this.state.selectedVideo }/>
                <VideoList 
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    videos={ this.state.videos }
                /> 
                </div>
            );
        }
  
}



// Take this component's generated HTML and put it 
// on the page (in the DOM )

ReactDOM.render(<App />, document.getElementById('app'));