import React,{ useState } from 'react'
import './Form.css'

function Form() {
    const [user, setUser] = useState({
        email:" ",
        password : " "
    })

    const handleInput = (event) =>{
        setUser({
            ...user,
            [event.target.id]:event.target.value
        })
    }

    const submitData = (event) =>{
        event.preventDefault();
        console.log(user)
    }
    return (
        <div className="form">
            <div className="form__container">
                <div className="form__logoContainer">
                <img className="form__logo" src="/img/logo.png" alt=""/><p className="form__domain">.com</p>
                </div>
                <form onSubmit={submitData} className="form__mainContainer">
                    <p className="form__heading">Sign-In</p>
                    <div className="form__input">
                    <label>Email or mobile phone number</label>
                    <input id="email" value={user.email} onChange={handleInput} name="email"  maxLength="128"/> 
                    </div>
                    <div className="form__input">
                    <label>PassWord</label>
                    <input  type="password" id="password" value={user.password} onChange={handleInput} name="email"  maxLength="128"/> 
                    </div>
                    <button>Submit</button>
                </form>
                <div className="form__divider">
                    <p>New To RO Bharat?</p>
                </div>
                <button>Create your RO Bharat account</button>
            </div>
        </div>
    )
}

export default Form
