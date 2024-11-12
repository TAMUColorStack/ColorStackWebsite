import './contact.css'; 


export default function Contact() {
    return (
        <>  
            <div class="container narrow-container mt-3">
                <h1 id="contactUsText">Contact Us</h1>
                <h5 id="subContactUsText">We'll get back to you shortly.</h5>
            </div>
            <form className="container narrow-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-floating mb-3 mt-3">  
                            <input type="text" className="form-control" id="floatingFirstName" placeholder="First name"/>
                            <label htmlFor="floatingFirstName">First name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3 mt-3">
                            <input type="text" className="form-control" id="floatingLastName" placeholder="Last name"/>
                            <label htmlFor="floatingLastName">Last name</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"/>
                            <label htmlFor="floatingEmail">Email address</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating mb-5">
                            <textarea className="form-control" id="floatingMessage" placeholder="Leave us a message..." style={{ height: '100px' }}></textarea>
                            <label htmlFor="floatingMessage">Leave us a message...</label>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}