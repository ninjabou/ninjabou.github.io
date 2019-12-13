import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Particles from 'react-particles-js';
import {Animated} from 'react-animated-css';
import { BackgroundLayer, Engine } from 'earthbound-battle-backgrounds';

const potentialLayers = [
  {
    layer1: 260,
    layer2: 0
  },
  {
    layer1: 6,
    layer2: 0
  },
  {
    layer1: 81,
    layer2: 0
  },
  {
    layer1: 180,
    layer2: 179
  },
  {
    layer1: 219,
    layer2: 218
  },
  {
    layer1: 156,
    layer2: 0
  },
  {
    layer1: 20,
    layer2: 0
  },
  {
    layer1: 199,
    layer2: 0
  },
  {
    layer1: 270,
    layer2: 0
  },
]

class Home extends React.Component {
  componentDidMount() {
    const canvas = this.refs.background;
    const ctx = canvas.getContext("2d");
    var layer1 = new BackgroundLayer(potentialLayers[Math.floor(Math.random() * potentialLayers.length)].layer1);
    var layer2 = new BackgroundLayer(potentialLayers[Math.floor(Math.random() * potentialLayers.length)].layer2);
    const engine = new Engine([layer1, layer2], {
      canvas: canvas
    });
    engine.animate();
  }
  
  render() {
    return(
      <div>
        <Head>
          <title>Ninjabou's Treasure Cave</title>
          <link rel="icon" href='../public/favicon.ico' />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        </Head>

        <canvas style={{position: 'absolute', height: '100%', width: '100%', zIndex: '1'}} ref='background'>
          {/* <Particles
            params={{
              particles: {
                number: {
                  value: 50
                },
                size: {
                  value: 3
                },
                color: {
                  value: '#000000'
                },
                line_linked: {
                  color: '#000000',
                  distance: '200'
                }
              }
            }}
          /> */}

        </canvas>
        <div className="hero" style={{position: 'absolute', zIndex: '2'}}>
          <Animated animationIn="fadeInUp">
            <div style={{backgroundColor: '#fff', border: '5px solid #0d0d0d', boxShadow: "5px 5px 0px #0d0d0d", width: '35%', height: '50%', margin: 'auto', marginTop: '12%'}}>
              <div style={{display: 'flex', flexDirection: 'row', margin: '0 auto'}}>
                <img src='https://pbs.twimg.com/profile_images/1096893530671321091/H_2cS88j_400x400.png' style={{margin: '10px', width: '10%', height: '10%', borderRadius: '100%', border: '5px solid #0d0d0d'}}/>
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '5px'}}>
                  <p style={{textAlign: 'left', fontSize: '24px', marginBottom: '0px'}}>
                    <b>
                      Ninjabou's Secret Treasure Cave
                    </b>
                  </p>
                  <p style={{textAlign: 'left', marginTop: '0px'}}>
                    Host to the neighbor's cat when no one knows where it is
                  </p>
                </div>
              </div>
              <p style={{textAlign: 'left', marginLeft: '25%', marginRight: '25%'}}>
                Hobbyist programmer/digital artist. Currently creating a number of small projects. Here's some links:
              </p>
              <a href='https://twitter.com/ninjabou1' style={{textDecoration: 'none', color: '#fc03f8'}}>
                <p style={{textAlign: 'center'}}>
                  <b>
                    Twitter
                  </b>
                </p>
              </a>
              <a href='https://top.gg/bot/618575214938423306' style={{textDecoration: 'none', color: '#fc03f8'}}>
                <p style={{textAlign: 'center'}}>
                  <b>
                    TimeZone Bot
                  </b>
                </p>
              </a>
            </div>
          </Animated>
        </div>

        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
          .hero {
            width: 100%;
            color: #000;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            width: 50%;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            margin-top: 25%;
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
            background-color: #ffffff;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
      </div>
    );
  }
}

export default Home
