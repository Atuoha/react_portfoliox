import React, { Component } from 'react'


class Experiences extends Component{
    render(){
        return(
            <div>
                <section className="section experiences-section">
                    <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiences</h2>      
                    {this.props.resume.experiences.map(experience=>
                        <div className="item">
                            <div className="meta">
                                <div className="upper-row">
                                    <h3 className="job-title">{experience.title}</h3>
                                    <div className="time">{experience.period}</div>
                                </div>
                                <div className="company"><a href={experience.companyURL} rel="noreferrer">{experience.company}</a></div>
                            </div>
                            <div className="details">
                                <p>{experience.details}</p>
                            </div>
                    </div>
                    )}
                </section>
            </div>
        )
    }
}

export default Experiences