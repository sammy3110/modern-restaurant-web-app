import React from "react";
import { Title } from "./styled/Title.styled";

const Support = () => {
  const addSubsriber = (e) => {
    e.preventDefault();
  };
  return (
    <div id="contact" className="support-container">
      <div className="support-top">
        <div className="support-top-info">
          <Title>
            <h1>
              <span>St</span>ill You Need Our Support ?
            </h1>
          </Title>
          <p>
            Don’t wait make a smart &amp; logical quote here. Its pretty easy.
          </p>
        </div>
        <div className="support-top-subscribe">
          <form onSubmit={addSubsriber}>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              id="email"
            />
            <button type="">Subscribe Now</button>
          </form>
        </div>
      </div>
      <div className="support-bottom">
        <div className="support-bottom-about support-div">
          <h4>About Us.</h4>
          <p className="support-about-info">
            orporate clients and leisure travelers has been relying on
            Groundlink for dependab safe, and professional chauffeured car
            service in major cities across World.
          </p>
          <div className="support-bottom-about-hours">
            <img src="images/post/clock.png" alt="clock" />
            <div className="support-hours-info">
                <h5>Opening Hours</h5>
                <p>Mon - Sat(8.00 - 6.00)</p>
                <p>Sunday - Closed</p>
            </div>
          </div>
        </div>
        <div className="support-bottom-links support-div">
          <h4>Useful Links</h4>
          <ul>
            <li>About</li>
            <li>News</li>
            <li>Partners</li>
            <li>Team</li>
            <li>Menu</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="support-bottom-help support-div">
          <h4>Help?</h4>
          <ul>
            <li>FAQ</li>
            <li>Term &amp; Conditions</li>
            <li>Reporting</li>
            <li>Documentation</li>
            <li>Support Policy</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="support-bottom-recent support-div">
          <h4>Recent Posts</h4>
          <div className="support-recent-posts-list">
            <div className="support-recent-post">
                <img src="images/post/recent-post-image1.png" alt="recent-post" />
                <div className="recent-post-info">
                    <p>20 Feb 2022</p>
                    <p>Keep Your Business</p>
                </div>
            </div>
            <div className="support-recent-post">
                <img src="images/post/recent-post-image2.png" alt="recent-post" />
                <div className="recent-post-info">
                    <p>20 Feb 2022</p>
                    <p>Keep Your Business</p>
                </div>
            </div>
            <div className="support-recent-post">
                <img src="images/post/recent-post-image3.png" alt="recent-post" />
                <div className="recent-post-info">
                    <p>20 Feb 2022</p>
                    <p>Keep Your Business</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
