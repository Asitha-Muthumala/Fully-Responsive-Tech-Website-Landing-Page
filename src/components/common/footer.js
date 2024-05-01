import React from "react";

import { BackTop } from 'antd';

function AppFooter() {
    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="logo">
                    <i class="fas fa-ship"></i>
                    <a href="https://www.google.com/maps/place/Lagoon+Squad/@5.9948713,80.7367705,18z/data=!4m6!3m5!1s0x3ae14b03b5eb4ca3:0x1417a4455a81c0be!8m2!3d5.9948182!4d80.7372268!16s%2Fg%2F11sv34smpb?entry=ttu">Lagoon Squad</a>
                </div>
                <ul className="socials">
                    <li><a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.tiktok.com/"><i class="fa-brands fa-tiktok"></i></a></li>
                    <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://www.youtube.com/watch?v=HnB3K_ygPH0&list=RD5Y5RJen_d0g&index=7"><i class="fa-brands fa-youtube"></i></a></li>
                    <li><a href="https://www.google.com/maps/place/Lagoon+Squad/@5.9948713,80.7367705,18z/data=!4m6!3m5!1s0x3ae14b03b5eb4ca3:0x1417a4455a81c0be!8m2!3d5.9948182!4d80.7372268!16s%2Fg%2F11sv34smpb?entry=ttu"><i class="fa-solid fa-location-dot"></i></a></li>
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