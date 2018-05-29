import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import DateInput from './components/date_input';

const API_KEY = 'AIzaSyDS4rxJAQkvA7uJv8J7RmES11XZpf6Hrn0';

// create new component, should produce html
const App = () => {
    return (
        <div>
            <SearchBar />
            {/* <DateInput /> */}
        </div>
    );
};

// shove component's generated html in DOM
ReactDOM.render(<App />, document.querySelector('.container'));