import {useState} from "react";
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState(0);
  const [showInvalidWarning, setShowInvalidWarning] = useState(false);

  const options = {
    0: "I would describe my user type as",
    1: "Developer",
    2: "Business Associate"
  }

  const toggleShowPassword = () => {
    const formPassword = document.getElementById("form-password");
    formPassword.type = (formPassword.type === "password") ? "text" : "password";
  }

  const validateEmail = (emailId) => {
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return (emailId.match(emailRegex) || emailId === "") ? true : false;
  }

  const checkAndSetEmail = (emailId) => {
    const isEmailValid = validateEmail(emailId);
    !isEmailValid ? setShowInvalidWarning(true) : setShowInvalidWarning(false);
    setEmail(emailId);
  }

  return (
    <div className="app">
      {/* left side form */}
      <div className="app__left">
        <div className="steps">
          <span>Step 1 of 3</span>
          <span className="circle-icon"></span>
          <span className="circle-icon"></span>
          <span className="circle-icon"></span>
        </div>

        <div className="details">
          <div className="details__contents">
            <h2>Let's set up your account</h2>
            <p className="signin-info">Already have an account? <a className="highlight-links" href="/signin">Sign in</a></p>

            <form action="">
              <div className="label-group">
                {name!== "" && <label>Your Name</label>}
                <input className="form-input" type="text" placeholder="Your Name" onChange={(e) => {setName(e.target.value)}} value={name} />
              </div>

              <div className={`label-group ${showInvalidWarning ? "error-border" : ""}`}>
                {email!== "" && <label className={`${showInvalidWarning ? "error-message" : ""}`}>Email address</label>}
                <input className="form-input" type="text" placeholder="Email address" onChange={(e) => {checkAndSetEmail(e.target.value)}} value={email} />
              </div>

              {showInvalidWarning && <p className="error-message">Please enter a valid email address</p>}
              
              <div className="select-wrapper">
                <select className="form-select" value={userType} onChange={(e) => {setUserType(Number(e.target.value))}}>
                  <option value={0}>{options[0]}</option>
                  <option value={1}>{options[1]}</option>
                  <option value={2}>{options[2]}</option>
                </select>
                <img className="arrow-icon" src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png" alt="arrow-icon" />
              </div>

              <div className="label-group">
                <img className="eye-icon" onClick={toggleShowPassword} src="https://img.icons8.com/ios-glyphs/30/000000/visible--v1.png" alt="eye-icon" />

                {password!=="" && <label>Password</label>}
                <input className="form-input" id="form-password" type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} value={password} />
              </div>

              <p className="password-min">Minimum 8 characters</p>
              <button type="submit" disabled={(name !== "" && email !== "" && password !== "" && userType !== 0 && !showInvalidWarning) ? false : true}>Next</button>
            </form>
            <p className="disclaimer">By clicking the "Next" button, you agree to creating a free account, and to <a href="/terms_of_service" className="highlight-links">Terms of Service</a> and <a href="/privacy_policy" className="highlight-links">Privacy Policy</a>.</p>
          </div>
        </div>
      </div>
      
      {/* right side details */}
      <div className="app__right">
        <h2>Dummy Heading</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum.</p>
      </div>
    </div>
  );
}

export default App;
