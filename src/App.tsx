import React, {useState} from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import SearchPage from './components/SearchPage/SearchPage';

const App = () => {
    const [firstName, setFirstName] = useState('');

    return (
        <>
            {firstName == '' ?
                <LandingPage setFirstName={setFirstName} /> :
                <SearchPage firstName={firstName} />
            }
        </>
    );
}

export default App;
