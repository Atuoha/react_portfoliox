import React, { Component } from 'react'


class Profile extends Component{
    render(){
        return(
            <div>
                <div className="profile-container">
                <img className="profile rounded-circle" src={this.props.resume.image} width="100" alt="" />
                <h1 className="name">{this.props.resume.name}</h1>
                <h3 className="tagline">{this.props.resume.role}</h3>
                </div>
            </div>
        )
    }
}

export default Profile