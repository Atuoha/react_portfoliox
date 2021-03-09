import React, { Component } from 'react'


class Career extends Component{
    render(){
        return(
            <div>
                <section className="section summary-section">
                    <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Career Profile</h2>
                    <div className="summary">
                        <p>{this.props.resume['career-summary']}</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Career