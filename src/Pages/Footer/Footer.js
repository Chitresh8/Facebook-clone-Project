import React, { Fragment } from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <Fragment>
      <div className="footerdata">
        <div className="languages">
          <ul>
            <p>English (UK)</p>
            <p>हिंदी</p>
            <p>اردو</p>
            <p>தமிழ்</p>
            <p>বাংলা</p>
            <p>मराठी</p>
            <p>తెలుగు</p>
            <p>ગુજરાતી</p>
            <p>ಕನ್ನಡ</p>
            <p>മലയാളം</p>
            <p>Español</p>
            <button className="plusbtn">+</button>
          </ul>
        </div>
        <div className="others">
          <ul>
            <p>Sign Up</p>
            <p>Login</p>
            <p>Messenger</p>
            <p>Facebook Lite</p>
            <p>Watch</p>
            <p>Places</p>
            <p>Games</p>
            <p>Marketplace</p>
            <p>Meta Pay</p>
            <p>Meta Store</p>
            <p>Meta Quest</p>
            <p>Instagram</p>
            <p>Fundraisers</p>
            <p>Services</p>
            <p>Voting Information Centre</p>
            <p>Privacy Policy</p>
            <p>Privacy Centre</p>
            <p>Groups</p>
            <p>About</p>
            <p>Create ad</p>
            <p>Create Page</p>
            <p>Developers</p>
            <p>Careers</p>
            <p>Cookies</p>
            <p>Ad Choices</p>
            <p>Terms</p>
            <p>Help</p>
            <p>Contact uploading and non-users</p>
          </ul>
        </div>
        <div className="tagline">
          <span>Meta ©️ 2023</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
