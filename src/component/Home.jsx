import React, { Component } from 'react'
import Contact from './Contact.jsx'
export class Home extends Component {
  render() {
    return (
      <div className='container-first'>
        <div className='rectangle'>
            <div className='div-class-edit'>
            <p className='center-title'>Send me a message</p>
            <p className='text-large'>Feel free to get in touch with me with anything related to CODINGSPACE or you can just say hi. I will get back to you as soon as I can.</p>
            <Contact />
            </div>
        </div>
      </div>
    )
  }
}

export default Home