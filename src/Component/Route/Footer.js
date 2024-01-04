import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faFacebook, faInstagram, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (

    <footer>
      <div id='footercontainer'>
        <div id='head'>
          <h1>The Siren</h1>
        </div>
        <div id='link'>
          <div id='linkone'>
            <a href='/'>Home</a><br></br>
            <a href='/bollywood'>Bollywood</a><br></br>
            <a href='/hollywood'>Hollywood</a>
          </div>
          <div id='linktwo'>
            <a href='/food'>Food</a><br></br>
            <a href='/fitness'>Fitness</a><br></br>
            <a href='/technology'>Technology</a>
          </div>
          
        </div>
        <div id='logo'>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faWhatsapp}/>
          <FontAwesomeIcon icon={faTelegram}/>
          <FontAwesomeIcon icon={faTwitter}/>
          <FontAwesomeIcon icon={faInstagram}/>
          </div>

        <p>Copyrights &copy:2023</p>
      </div>
    </footer>
  )
}

export default Footer