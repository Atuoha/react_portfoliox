import React, { Component } from 'react'


class Contact extends Component{
    render(){
        return(
            <div>
                 <div className="contact-container container-block">
                    <ul className="list-unstyled contact-list">
                        <li className="email"><i className="fas fa-envelope"></i><a href="mailto: yourname@email.com">{this.props.resume.email}</a></li>
                        <li className="phone"><i className="fas fa-phone"></i><a href="tel:0123 456 789">{this.props.resume.phone}</a></li>
                        <li className="website"><i className="fas fa-globe"></i><a href={this.props.resume.website} >{this.props.resume.website}</a></li>
                        <li className="linkedin"><i className="fab fa-linkedin-in"></i><a href={this.props.resume.linkedinURL} >{this.props.resume.linkedin}</a></li>
                        <li className="github"><i className="fab fa-github"></i><a  href={this.props.resume.githubURL}>{this.props.resume.github}</a></li>
                        <li className="twitter"><i className="fab fa-twitter"></i><a href={this.props.resume.twitterURL} >{this.props.resume.twitter}</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Contact