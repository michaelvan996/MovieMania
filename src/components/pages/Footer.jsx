import React from 'react';
import "./footer.css";
import fb from './Socials/fb.png';
import insta from './Socials/insta.png';
import linkedin from './Socials/linkedin.png';
import twitter from './Socials/twitter.png';

const Footer = () => {
  return (
    <div className="footer">
        <div className="sb__footer section__padding">
            <div className="sb__footer-links">
                <div className="sb__footer-links_div">
                    <h4>Action Genre</h4>
                    <a href="/HeroicBloodshed">
                        <p>Heroic Bloodshed</p>
                    </a>
                    <a href="/MilitaryAction">
                        <p>Military Action</p>
                    </a>
                    <a href="/Espionage">
                        <p>Espionage</p>
                    </a>
                    <a href="/WuxiaAction">
                        <p>Wuxia Action</p>
                    </a>
                    <a href="/Disaster">
                        <p>Disaster</p>
                    </a>
                    <a href="/Adventure">
                        <p>Adventure</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Animation Genre</h4>
                    <a href="/traditional">
                        <p>Traditional</p>
                    </a>
                    <a href="/stopMotion">
                        <p>Stop Motion</p>
                    </a>
                    <a href="/claymation">
                        <p>Claymation</p>
                    </a>
                    <a href="/Cutout">
                        <p>Cutout</p>
                    </a>
                    <a href="/Puppetry">
                        <p>Puppetry</p>
                    </a>
                    <a href="/Live-Action">
                        <p>Live-Action</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Comedy Genre</h4>
                    <a href="/Action-Comedy">
                        <p>Action-Comedy</p>
                    </a>
                    <a href="/DarkComedy">
                        <p>Dark Comedy</p>
                    </a>
                    <a href="/RomanticComedy">
                        <p>Romantic Comedy</p>
                    </a>
                    <a href="/BuddyComedy">
                        <p>Buddy Comedy</p>
                    </a>
                    <a href="/RoadComedy">
                        <p>Road Comedy</p>
                    </a>
                    <a href="/SlapstickComedy">
                        <p>Slapstick Comedy</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Crime Genre</h4>
                    <a href="/Caper">
                        <p>Caper</p>
                    </a>
                    <a href="/Heist">
                        <p>Heist</p>
                    </a>
                    <a href="/Gangster">
                        <p>Gangster</p>
                    </a>
                    <a href="/Courtroom">
                        <p>Courtroom</p>
                    </a>
                    <a href="/Procedural">
                        <p>Procedural</p>
                    </a>
                    <a href="/Detective">
                        <p>Detective</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Partners</h4>
                    <a href="/partner">
                        <p>Duck Toyz</p>
                    </a>
                    <a href="/Netflix">
                        <p>Netflix</p>
                    </a>
                    <a href="/Amazon">
                        <p>Amazon</p>
                    </a>
                    <a href="/T-mobile">
                        <p>T-mobile</p>
                    </a>
                    <a href="/HBO">
                        <p>HBO</p>
                    </a>
                    <a href="/Disney">
                        <p>Disney</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>MovieMania</h4>
                    <a href="/home">
                        <p>Home</p>
                    </a>
                    <a href="/about">
                        <p>About</p>
                    </a>
                    <a href="/contact">
                        <p>Contact</p>
                    </a>
                    <a href="/search">
                        <p>Search</p>
                    </a>
                    <a href="/Generator">
                        <p>Generator</p>
                    </a>
                    <a href="/meme">
                        <p>Meme</p>
                    </a>
                    <a href="/chat">
                        <p>Chat</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Featured movies on</h4>
                    <div className="socialmedia">
                        <p><img className="socialIcon" src={fb} alt="" /></p>
                        <p><img className="socialIcon" src={twitter} alt="" /></p>
                        <p><img className="socialIcon" src={linkedin} alt="" /></p>
                        <p><img className="socialIcon" src={insta} alt="" /></p>
                    </div>
                </div>
            </div>

        <hr></hr>

        <div className="sb__footer-below">
            <div className="sb__footer-copyright">
                <p>
                    @{new Date().getFullYear()} MovieMania. All right reserved.
                </p>
            </div>
            <div className="sb__footer-below-links">
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
                <a href="/security"><div><p>Security</p></div></a>
                <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
            </div>
        </div>

        </div>
    </div>
  );
};

export default Footer;
