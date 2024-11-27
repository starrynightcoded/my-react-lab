import React from 'react';
import '../styles/LandingPage.css'; // Import CSS file

function LandingPage() {
    return (
        <div className="landing-container" style={{ backgroundImage: "url(/images/image.png)" }}>
            <div className='mainsec'>
                <h1 className="landing-title">Welcome to Avatar Fan club!!</h1>
                <p className="landing-subtitle">
                    Discover amazing fanfics or upload your fanarts! As we pave our way to restore Zuko's honor by capturing the Avatar!
                </p>
                <button className="landing-button">
                    Learn More
                </button>


            </div>
            <div className='form'>
                <h3>Want to register? Fill the form below!!</h3>
                <label >Name:<span></span></label>
                <input type="text" required placeholder='Enter your name' />
                <br></br>

                <label >Email:<span></span></label>
                <input placeholder='abc@example.com' type="text" required />
                <br></br>

                <label >Phone number:<span></span></label>

                <input placeholder='+92xxxxxxxxx' type="text" required />

                <button>Submit</button>
            </div>

            <footer>

                <h3>ATLA Fan Club</h3>
                <p>Rediscover the epic journey of Aang and his friends!</p>
                <div class="social-links">
                    <a href="https://facebook.com" target="_blank">Facebook</a><br></br>
                    <a href="https://twitter.com" target="_blank">Twitter</a> <br></br>
                    <a href="https://instagram.com" target="_blank">Instagram</a>
                </div>
                <small>&copy; 2024 ATLA Fan Club. All rights reserved.</small>


            </footer>


        </div>




    );
}
export default LandingPage;