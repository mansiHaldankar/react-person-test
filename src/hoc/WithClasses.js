import React from 'react';
const withClasses = (props) => {
    return <div className = {props.classes}>
                {props.child}
            </div>
}

export default withClasses;