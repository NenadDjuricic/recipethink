import React, {useState,useRef} from 'react'

const Contact = ()=>{
    const btn = useRef(null);
    const [name,setName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [text,setText] = useState('');
    const changeName = ({target}) =>{
        setName(target.value)
    }
    const changeLastName = ({target}) =>{
        setLastName(target.value)
    }
    const changeEmail = ({target}) =>{
        setEmail(target.value)
    }
    const changeText = ({target}) =>{
        setText(target.value)
    }
    const saveData = (e) =>{
        
        e.preventDefault();
        localStorage.setItem("name", name); 
        localStorage.setItem("lastName", lastName); 
        localStorage.setItem("email", email); 
        localStorage.setItem("text", text); 
        setTimeout(()=>{btn.current.firstChild.textContent = "Uspesno je poslata poruka"},
        500)
    }
    return (
        <React.Fragment>
      <div className="container"  id="contact">

<div className="row">
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center">                        
      <h2 className="form-title">Contact</h2>
    </div>
</div>

<div className="row">

    <div className="col-12 col-sm-12 col-md-12 col-lg-6 offset-lg-3  mb-4">

        <form id="contact-form" name="myForm" className="form " autoComplete='off' onSubmit={saveData} >

            <div className="form-group">
                <label className="form-label" id="nameLabel" htmlFor="name"></label>
                <input type="text" value={name} onChange={changeName} className="form-control" id="name" name="name" placeholder="First name" tabIndex="1"/>
            </div>
            <div className="form-group">
                <label className="form-label" id="nameLabel" htmlFor="name"></label>
                <input type="text" value={lastName} onChange={changeLastName} className="form-control" id="lastName" name="lastName" placeholder="Last name" tabIndex="1"/>
            </div>
            <div className="form-group">
                <label className="form-label" id="emailLabel" htmlFor="email"></label>
                <input type="email"  value={email} onChange={changeEmail} className="form-control" id="email" name="email" placeholder="Your Email" tabIndex="2"/>
            </div>


            <div className="form-group">
                <label className="form-label" id="messageLabel" htmlFor="message"></label>
                <textarea rows="6" cols="60" value={text} onChange={changeText} name="message" className="form-control" id="message" placeholder="Message" tabIndex="4"></textarea>                                 
            </div>

            <div className="text-center margin-top-25">
                <button type="submit" className="btn btn-info mt-2 btn-border btn-large" ref={btn}>Send Message</button>
            </div>

        </form>
      
    </div>

</div>

</div>

    </React.Fragment>
    )
}
   


export default Contact
