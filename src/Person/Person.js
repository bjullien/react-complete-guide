import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} !</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;

/**
 * props: can be named something else, but it is a convention
 * 
 * children: 
 *     anything, any elements (including <string>) 
 *     between opening and closing tags of an element.
 */