import React from "react";
import { Button, Carousel } from 'antd';

// const items = [
//     {
//         key: '1',
//         title: 'Web and mobike payments for developers',
//         content: 'A plain text file that contains unformatted text. It is popular due to wide range of compatibility. Below you will find a selection of sample'
//     },
//     {
//         key: '2',
//         title: 'Work better together. Schedule meetings',
//         content: 'A plain text file that contains unformatted text. It is popular due to wide range of compatibility. Below you will find a selection of sample'
//     },
//     {
//         key: '3',
//         title: 'Work better together. Schedule bl bla',
//         content: 'A plain text file that contains unformatted text. It is popular due to wide range of compatibility. Below you will find a selection of sample'
//     }
// ]

const items = [
    {
      key: '1',
      title: 'Lagoon Paradise',
      content: 'Explore the breathtaking beauty of our lagoon paradise. Crystal-clear waters, sandy beaches, and lush greenery await you.'
    },
    {
      key: '2',
      title: 'Nature Trails',
      content: 'Embark on nature trails that wind through pristine forests, revealing the wonders of local flora and fauna.'
    },
    {
      key: '3',
      title: 'Sunset Serenity',
      content: 'Experience the magical serenity of sunset over the lagoon. Watch as the sky bursts into hues of orange, pink, and purple.'
    }
  ];
  

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
                                    <Button size="large"><i className="fas fa-desktop"></i>Watch More</Button>
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