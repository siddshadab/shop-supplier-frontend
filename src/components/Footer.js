import React from 'react'
import logo from '../images/olx-logo.png'
import '../styles/footer.css'

const Footer = (props) => {
    return(
        <div className="footerContainer">
            <div className="container containerWrapper">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="pull-left">
                            <img src={logo} className="logoStyle" alt="OLX.com.pk - OLX Pakistan"/>
                        </div>
                        <div className="pull-left">
                            <ul className="unOrderList">
                                <li>Local Map</li>
                                <li>Popular Searches</li>
                                <li>Archive</li>
                                <li>Sitemap</li>
                            </ul>
                        </div>
                        <div className="pull-left">
                            <ul className="unOrderList">
                                <li>Terms of Use</li>
                                <li>Help & Contact Us</li>
                            </ul>
                        </div>
                        <div className="pull-left">
                            <ul className="unOrderList">
                                <li>Who We Are</li>
                                <li>Join OLX</li>
                                <li>Happy OLXers</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pull-right">
                            <h4><strong>Contact Us</strong></h4>
                            <div className="contactUsWrapper">
                                <div className="email">
                                    <i className="fa fa-envelope-o"></i> &nbsp;
                                    <a>help@olx.com.pk</a>
                                </div>
                                <div className="phone">
                                    <i className="fa fa-phone"></i> &nbsp;
                                    <strong>080010101</strong> <br/>
                                    <small>(9:30am to 6:30pm)</small>
                                </div>
                                <div className="business-package"> 
                                <i className="fa fa-building-o"></i> &nbsp;
                                <strong>Business Packages</strong> <br/>
                                <small>(featured ads, advertising)</small>
                                <br/>
                                <a>click here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;