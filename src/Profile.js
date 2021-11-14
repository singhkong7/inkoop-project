import React from 'react'

function Profile(props) {
    return (
        <div className="col-3" style={{margin:"2%"}}>
            <img src={props.image} className="img-thumbnail" alt="..." id="profile"/>
            <h6 style={{color:"white"}}>{props.title}</h6>
        </div>
    )
}

export default Profile
