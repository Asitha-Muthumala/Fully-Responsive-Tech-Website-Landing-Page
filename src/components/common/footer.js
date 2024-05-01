import React from "react";
import logo from '../../assets/images/logo.png';

import { BackTop } from 'antd';

function AppFooter() {
    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="logo">
                    {/* <i className="fas fa-bolt"></i> */}
                    <i class="fas fa-ship"></i>
                    <a href="hrrp://www.google.com">Lagoon Squad</a>
                    {/* <img src={logo} width="250px" alt="" /> */}
                </div>
                <ul className="socials">
                    <li><a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
                    <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                </ul>
                <div className="copyright">
                    Copyright &copy; 2024 Lagoon Squad
                </div>
                <BackTop>
                    <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
                </BackTop>
            </div>
        </div>
    );
}

export default AppFooter;