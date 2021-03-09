import React, { Component } from 'react'


class Skill extends Component{
    render(){
        return(
            <div>
                <section className="skills-section section">
                    <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                    <div className="skillset">   
                    {this.props.resume.skills.map(skill=>
                        <div className="item">
                            <h3 className="level-title">{skill.name}</h3>
                            <div className="progress level-bar">
                            <div className="progress-bar theme-progress-bar" style={{width: skill.percent}} role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">
                            </div>
                            </div>                               
                        </div>
                    )}                          
                    </div>  
                </section>
            </div>
        )
    }
}

export default Skill