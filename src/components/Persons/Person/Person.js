import React from 'react';
import './Person.css';

//无状态组件
const Person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.myclick}>this is {props.name} react-app di {props.count}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name}/>
            <p>{props.children}</p>
        </div>
    )
}

export default Person;