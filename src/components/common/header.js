import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';

import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function AppHeader() {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    }

    const onClose = () => {
        setVisible(false);
    }

    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    {/* <i className="fas fa-bolt"></i>
                    <a href="http://google.com">Lagoon Squad</a> */}
                    <img src={logo} width="150vw" alt='' />
                </div>
                <div className='mobileHidden'>
                    <Button type="link" className='link-button' href="#hero">Home</Button>
                    <Button type="link" className='link-button' href="#about">About</Button>
                    <Button type="link" className='link-button' href="#feature">Galary</Button>
                    <Button type="link" className='link-button' href="#works">Feedback</Button>
                    <Button type="link" className='link-button' href="#package">Packages</Button>
                    <Button type="link" className='link-button' href="#faq">FAQ</Button>
                    <Button type="link" className='link-button' href="#contact">Contact Us</Button>
                </div>
                <div className='mobileVisible'>
                    <Button type='primary' onClick={showDrawer}>
                        <i className='fas fa-bars'></i>
                    </Button>
                    <Drawer
                        title="Header Menu"
                        placement='right'
                        closable={true}
                        onClose={onClose}
                        visible={visible}
                    >
                        <Anchor targetOffset="65">
                            <Link href="#hero" title="Home" />
                            <Link href="#about" title="About" />
                            <Link href="#feature" title="Galary" />
                            <Link href="#works" title="Feedback" />
                            <Link href="#faq" title="FAQ" />
                            <Link href="#package" title="Packages" />
                            <Link href="#contact" title="Contact" />
                        </Anchor>
                    </Drawer>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;