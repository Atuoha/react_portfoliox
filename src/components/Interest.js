import React, { Component } from 'react'


class Profile extends Component{
    render(){
        return(
            <div>
                <div className="interests-container container-block">
                    <h2 className="container-block-title">Interests</h2>
                    <ul className="list-unstyled interests-list">
                        {this.props.resume.interests.map(interest=>
                        <li>{interest}</li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Profile