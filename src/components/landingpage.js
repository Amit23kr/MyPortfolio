import React from "react";
import { Grid, Cell } from "react-mdl";

class landingpage extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://imas-sa.co.za/wp-content/uploads/2018/01/male-profile-avatar.jpg"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />
              <p>
                JAVASCRIPT | REACT.JS | NODE.JS | EXPRESS.JS | MONGODB | PYTHON
                | MACHINE LEARNING(BEGINNER)
              </p>
              <div className="social-links">
                {/**LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/amit-sah-1b875196"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/**Github */}
                <a
                  href="https://github.com/Amit23kr"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default landingpage;
