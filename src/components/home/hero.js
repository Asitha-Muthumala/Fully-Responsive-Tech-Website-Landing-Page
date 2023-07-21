import React from "react";
import { Button, Carousel } from 'antd';

const items = [
    {
        key: '1',
        title: 'Web and mobike payments for developers',
        content: 'A plain text file that contains unformatted text. It is popular due to wide range of compatibility. Below you will find a selection of sample'
    },
    {
        key: '2',
        title: 'Work better together. Schedule meetings',
        content: 'A plain text file that contains unformatted text. It is popular due to wide range of compatibility. Below you will find a selection of sample'
    },
    {
        key: '3',
        title: 'Work better together. Schedule bl bla',
        content: 'A plain text file that contains unformatted text. It is popular due to wide range of compatibility. Below you will find a selection of sample'
    }
]

function AppHero() {
    return(
        <div id="hero" className="heroBlock">
            <Carousel>
                {items.map(item => {
                    return(
                        <div className="container-fluid" key={item.key}>
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className="btnHolder">
                                    <Button type="primary" size="large">Learn More</Button>
                                    <Button size="large"><i className="fas fa-desktop"></i>watch a Demo</Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default AppHero;