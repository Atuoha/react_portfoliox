import React, { Component } from 'react'


class Projects extends Component{
    render(){
        return(
            <div>
                <section className="section projects-section">
                    <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Few Projects</h2>
                    <div className="intro">
                        <p>You can list your side projects or open source libraries in this section.</p>
                    </div>
                    {this.props.resume.projects.map(project=>
                        <div className="item">
                            <span className="project-title"><a href={project.url} >{project.name}</a></span> - <span className="project-tagline">{project.detail}. </span>         
                        </div>
                    )}
                </section>
            </div>
        )
    }
}

export default Projects