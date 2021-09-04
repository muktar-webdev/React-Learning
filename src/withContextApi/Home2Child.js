import React,{useContext} from 'react';
import Home2GrandChild from './Home2GrandChild';

import {ContextApi} from '../App';

const Home2Child = () => {
 //--useContext -//
 const count = useContext(ContextApi);
    return (
        <div>
            <h1>Home's Child Component</h1>
            <p>Counter : {count}</p>
            <Home2GrandChild/>
        </div>
    );
};

export default Home2Child;