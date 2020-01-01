import React, { useEffect } from 'react';
import Radium, { StyleRoot } from 'radium';

import './Cockpit.css';

const Cockpit = (props) => {

    useEffect(() => {
        console.log("In Cockpit.js")
        setTimeout(() => {
            alert("Saved data");
        },1000);
        return () => {
            console.log("useEffect1 cleanup");
        }
    }, [])

    useEffect(() => {
        console.log("2nd Cockpit");
        return () => {
            console.log("use effect 2 cleanup");
        }
    })

    const style = {
        backgroundColor : 'green',
        color : 'white',
        font : 'inherit',
        border : '1px solid #000',
        padding : '8px',
        cursor : 'pointer',
        margin : '10px',
        ':hover' : {
            backgroundColor : 'blue',
            color : 'red'
        } 
    };

    const classes = [];
    if(props.personsLength <= 2){
      classes.push('red');
    }
    if(props.personsLength <= 1){
      classes.push('bold');
    }

    if(props.showPersons) {
        style.backgroundColor = 'red';
        style[':hover'] = {
        backgroundColor : 'pink',
        color : 'black'
      }
    }

    return (
        <StyleRoot>
            <div>
                <div className = {classes.join(' ')}>Working...!!!!</div>
                <button 
                    onClick = {props.clicked}
                    style={style}> 
                    Toggle Person
                </button>
            </div>
        </StyleRoot>
    );
}

export default Radium(Cockpit);