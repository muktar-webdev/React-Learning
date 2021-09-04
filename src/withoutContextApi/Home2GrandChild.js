import React from 'react';
import Home2AncesterChild from './Home2AncesterChild';

const Home2GrandChild = ({count}) => {
    return (
        <div>
            <h1>Home's GrandChild</h1>
            <p>Counter : {count}</p>
            <Home2AncesterChild count={count}/>
        </div>
    );
};

export default Home2GrandChild;