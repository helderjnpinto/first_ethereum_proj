import React from 'react'
import ReactDOM from 'react-dom';

// youtube v3 api key
const API_KEY = 'AIzaSyA9UK5jP3C872g9hT4Unm7jru7QYzAC7GM';

// Create a new component. This component should produce
// some HTML

const App = () => {
    return <div>hi!</div>;
}

// Take this component's generated HTML and put it 
// on the page (in the DOM )

ReactDOM.render(<App />, document.getElementById('app'));