import React, {useState} from "react";
import { useRef } from "react";
import './form.css'
import emailjs from "emailjs-com";

const Form = ()=>{

    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredMessage, setEnteredMessage] = useState("");

    const formData = useRef();

    const submitHandler = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_4stajoa', 'template_7wq26j9', formData.current, 'vjOyuqRW-3SOIc7eq')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setEnteredName("");
        setEnteredEmail("");
        setEnteredMessage("");
    }
    return(
        <form ref={formData} className="form" onSubmit={submitHandler}>
            <div className="form__input">
                <input type="text" placeholder="Your Name" value={enteredName} onChange={e=>
                setEnteredName(e.target.value)} name="name" required/>
            </div>
            <div className="form__input">
                <input type="email" placeholder="Your Email" value={enteredEmail} onChange={e=>
                setEnteredEmail(e.target.value)} name="email" required/>
            </div>
            <div className="form__input">
                <textarea rows='10' placeholder="Write Message" value={enteredMessage} onChange={e=>
                setEnteredMessage(e.target.value)} name="message" required></textarea>
            </div>
            <button className="submit__btn" type="submit">
                Submit
            </button>
        </form>
    )
}

export default Form