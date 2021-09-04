import React from 'react';
import Home2GrandChild from './Home2GrandChild';


const Home2Child = ({count}) => {
    return (
        <div>
            <h1>Home's Child Component</h1>
            <p>Counter : {count}</p>
            <Home2GrandChild count={count}/>
        </div>
    );
};

export default Home2Child;