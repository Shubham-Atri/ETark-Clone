import React from 'react';
import {Header} from './mycomponent/Header';
import {Body} from './mycomponent/Body';

let bStyle = {
    padding:'0',
    boxSizing:'border-box',
    margin:'0',
    fontSize: '18px'
}

const App = () => {
    return (
        <div style={bStyle}>
            <Header/>
            <Body />
        </div>
    )
}

export default App;