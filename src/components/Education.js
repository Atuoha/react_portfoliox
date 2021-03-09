import React, { Component } from 'react'


class Education extends Component{
    render(){
        return(
            <div>
                <div className="education-container container-block">
                    <h2 className="container-block-title">Education</h2>
                    {this.props.resume.education.map(edu=>
                    <div className="item">
                        <h4 className="degree">{edu.degree}</h4>
                        <h5 className="meta">{edu.university}</h5>
                        <div className="time">{edu.period}</div>
                    </div>
                    )}          
                </div>
            
            </div>
        )
    }
}

export default Education