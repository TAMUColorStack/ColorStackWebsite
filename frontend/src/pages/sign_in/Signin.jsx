import './Signin.css'

export default function Signin(){

    return (
        <>
            <div className="signin-container">
                <h1 className="signin-header">Sign In</h1>
                <form className="signin-form">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required></input>
                    <button type = "submit" className ="signin-button">Log In</button>
                </form>
            </div>
        </>
    )
}