import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Particles from 'react-particles-js';

const Home = () => (
  <div>
    <Head>
      <title>Ninjabou's Treasure Cave</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div style={{position: 'absolute', height: '100%', width: '100%', zIndex: '1'}}>
      <Particles
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
      />
    </div>
    <div className="hero" style={{position: 'absolute', zIndex: '2'}}>
      <h1 className="title">Ninjabou's Secret Treasure Cave</h1>
      <p className="description">
        Host to the neighbor's cat when no one knows where it is
      </p>

      <div className="row">
        <a href="https://nextjs.org/docs" className="card">
          <h3>Documentation &rarr;</h3>
          <p>Learn more about Next.js in the documentation.</p>
        </a>
        <a href="https://nextjs.org/learn" className="card">
          <h3>Next.js Learn &rarr;</h3>
          <p>Learn about Next.js by following an interactive tutorial!</p>
        </a>
        <a
          href="https://github.com/zeit/next.js/tree/master/examples"
          className="card"
        >
          <h3>Examples &rarr;</h3>
          <p>Find other example boilerplates on the Next.js GitHub.</p>
        </a>
      </div>
    </div>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      .hero {
        width: 100%;
        color: #333;
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
)

export default Home
