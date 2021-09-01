import React from 'react';

const GrandChild = (props) => {
    return (
        <div>
            <p><span style={{border:"1px solid red",textAlign: 'center'}}>From GrandChild Component</span> : {props.name}</p>
        </div>
    );
};

export default GrandChild;