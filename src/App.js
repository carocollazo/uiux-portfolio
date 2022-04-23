import "./App.css";
import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import xkcd from "./xkcd.png";
import ss1 from "./ss1.png";
import ss2 from "./ss2.png";
import ss3 from "./ss3.png";
import ss4 from "./ss4.jpg";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="header-container">
          <a className="title" href="/">
            Caro Collazo
          </a>
          <Nav className="nav">
            <Nav.Item>
              <Nav.Link href="/" className="nav-link">
                WORK
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="http://linkedin.com/in/carocollazo/"
                className="nav-link"
              >
                ABOUT
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <div className="top-container">
          <div className="main-text-container">
            <h1>Hola - I'm Caro!</h1>
            <h2>
              Whenever my code is compiling, <br />I like skateboarding,
              crocheting, painting and going in long walks with my puppy.
            </h2>
            <i>
              currently a software engineer @ <b>Microsoft</b>
            </i>
          </div>
          <a href="http://xkcd.com">
            <img src={xkcd} alt="compiling meme" />
          </a>
        </div>
        <div className="works-container">
          <a href="https://uiux-personas.herokuapp.com/" className="work-item">
            <div className="image-container">
              <img src={ss4} className="item-image" alt="persona analysis" />
              <h2>Personas</h2>
              <p>
                <i>Stepping into a user’s shoes</i>
              </p>
              <p>
                Observed real users interacting with an interface, interviewed
                these individuals about their experiences, created personas
                based on these users, and illustrated a storyboard for one of
                the personas.
              </p>
            </div>
          </a>
          <a href="https://resp-redesign.herokuapp.com/" className="work-item">
            <div className="image-container">
              <img
                src={ss1}
                className="item-image"
                alt="simple interface redesign screenshot"
              />
              <h2>Responsive Redesign</h2>
              <p>
                <i>Workflow of redesigning a simple website</i>
              </p>
              <p>
                Analyzed and identified flaws in an existing interface, created
                low-fidelity and high-fidelity prototypes for various screen
                sizes, and builded a responsive website based on those
                prototypes.
              </p>
            </div>
          </a>
          <a href="https://uiux-abtesting.herokuapp.com/" className="work-item">
            <div className="image-container">
              <img
                src={ss3}
                className="item-image"
                alt="A/B testing metrics screenshot"
              />
              <h2>A/B Testing</h2>
              <p>
                <i>Data collection for user testing</i>
              </p>
              <p>
                Performed an A/B test and statistical analysis to gather insight
                into two different UI designs.
              </p>
            </div>
          </a>

          <a href="https://carocollazo.github.io/uiux-development/" className="work-item">
            <div className="image-container">
              <img
                src={ss2}
                className="item-image"
                alt="dynamic interface screenshot"
              />
              <h2>Development</h2>
              <p>
                <i>Creating React Components</i>
              </p>
              <p>
                Created a list interface. Added aggregating, filtering, and
                sorting functionality.
              </p>
            </div>
          </a>
        </div>
        <h3 className="bottom-container">
          Thank you for visiting my portfolio! <br />
          Happy to connect on{" "}
          <a className="link" href="http://linkedin.com/in/carocollazo/">
            <b>Linkedin</b>
          </a>{" "}
          or{" "}
          <a className="link" href="mailto:carolina_collazo@brown.edu">
            <b>email</b>
          </a>{" "}
          (:
        </h3>
      </div>
    );
  }
}
