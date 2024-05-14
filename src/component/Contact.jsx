import React from 'react'
import Swal from 'sweetalert2'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "deb6eccc-f162-4b71-a2ed-19acd06a77c1");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                icon: "success",
                title: "Enviado",
                text: "Enviado de manera exitosa!",
                footer: '<a href="#">another question?</a>'
            })
            event.target.reset();
        } else {
            console.log("Error", data);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
            })
        }

    }
    return (
        <div className='div-contact'>
            <form onSubmit={onSubmit}>
                <Row>
                    <Col className='col-class'><input className='row-css' type="text" name='name' placeholder='Your Name' required /></Col>
                    <Col className='col-class'><input className='row-css' type="text" name='email' placeholder='Your Adress' required /></Col>
                    <Col className='col-class'><input className='row-css' type="text" name='subjet' placeholder='Subjet' required /></Col>
                    <Col className='col-class'><textarea className='message-class' name="message" placeholder='Message' required></textarea></Col>
                </Row>
                <div className='div-button'>
                <Col className='col-class-button'><button className='class-btn' type='submit'>Send</button></Col>
                </div>
            </form>
        </div>
    )
}
export default Contact