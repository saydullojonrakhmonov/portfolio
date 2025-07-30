import React from 'react'
import Header from '../components/header/Header'
import Info from '../components/info/Info'
import MyProjects from '../components/works/Works'
import Footer from '../components/footer/footer'
import TechStack from '../components/skills/Skills'

function Body() {
  return (
    <div>
      <Header/>
      <Info/>
      <MyProjects/>
      <TechStack/>
      <Footer/>
    </div>
  )
}

export default Body
