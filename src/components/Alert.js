import React from 'react'

function Alert(props) {
    const capitalize =(msg)=>{
        return msg.charAt(0).toUpperCase() + msg.slice(1);
    }
    
    return (
        props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
            <button type="button" className="btn" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert
