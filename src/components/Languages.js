import React, { Component } from 'react'


class Languages extends Component{
    render(){
        return(
            <div>
                <div className="languages-container container-block">
                    <h2 className="container-block-title">Languages</h2>
                    <ul className="list-unstyled interests-list">
                    {this.props.resume.languages.map(lang=>
                    <li>{lang.name} <span className="lang-desc">({lang.details})</span></li>
                    )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Languages