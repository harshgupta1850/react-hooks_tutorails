import React, { Component } from 'react';
import NewApp from './NewApp';
import App from './App';

 function Parent(props) {
    return(
        <div>
            <App/>
            <NewApp/>
        </div>
    )
}

export default Parent


