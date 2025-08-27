import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
function Login() {
  return (
    <div>


      <Nav />
      <main>

        <div className="bg-img">
          <form action="index.html" className="container">
            <h1 id="abc">LOGIN</h1>
            <h2>Username</h2>
            <input type="text" placeholder="Enter your username" name="username" required />
            <h2>Password</h2>
            <input type="password"
              placeholder="Enter your password"
              name="password" required />
            <div className="remember-forgot">
              <label>
                
                Remember Me
              </label>
              <br />

              <a href="#">Forgot password?</a>
            </div>

            <div className="register-link">
              <p>Don't have an Account?  <a href="#">Register Here..</a></p>
            </div>


            <button type="submit" className="button">Login</button>
          </form>
        </div>
      </main>
      <Footer />

    </div>
  )
}

export default Login