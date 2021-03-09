import React, { Component } from 'react'
import resume from './resume.json';
import Profile from './components/Profile'
import Contact from './components/Contact'
import Education from './components/Education'
import Languages from './components/Languages'
import Interest from './components/Interest'
import Career from './components/Career'
import Experiences from './components/Experiences'
import Projects from './components/Projects';
import Skill from './components/Skill';
import Footer from './components/Footer';


class App extends Component{
  render(){
    console.log(resume)
    return(
      <div>
        <div className="wrapper">
        <div className="sidebar-wrapper">
            <Profile resume={resume} />
            <Contact resume={resume} />
            <Education resume={resume} />
            <Languages resume={resume} />
            <Interest resume={resume} />     
        </div>
        
        <div className="main-wrapper">
          <Career resume={resume} />  
          <Experiences resume={resume} />
          <Projects resume={resume} /> 
          <Skill resume={resume} />   
   
        </div>
    </div>
 
    <Footer />       
    </div>  
    )
  }
}

export default App
