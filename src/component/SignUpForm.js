import React,{useState} from 'react'
import "./SignUpForm.css"
function SignUpForm() {
    const [user, setUser] = useState({
        name: " ",
        number: " ",
        email:" ",
        password : " ",
        address : " "
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
        <div className="registerForm">
            <div className="form__container">
                <div className="form__logoContainer">
                <img className="form__logo" src="/img/logo.png" alt=""/><p className="form__domain">.com</p>
                </div>
                <form onSubmit={submitData} className="form__mainContainer">
                    <p className="form__heading">Sign-Up</p>
                    <div className="form__input">
                    <label>Name</label>
                    <input type="text" id="name" value={user.name} onChange={handleInput} name="name"  maxLength="128"/> 
                    </div>
                    <div className="form__input">
                    <label>Mobile number</label>
                    <input type="number" id="number" value={user.number} onChange={handleInput} name="number"  maxLength="128"/> 
                    </div>
                    <div className="form__input">
                    <label>Email </label>
                    <input type="email" id="email" value={user.email} onChange={handleInput} name="email"  maxLength="128"/> 
                    </div>
                    <div className="form__input">
                    <label>Password</label>
                    <input  type="password" id="password" value={user.password} onChange={handleInput} name="email"  maxLength="128"/> 
                    </div>
                    <div className="form__input">
                    <label>Address</label>
                    <textarea id="address" value={user.address} onChange={handleInput} name="address"  maxLength="100"/> 
                    </div>
                    <button>Create Your Account</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm
