import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contacts extends React.Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Amit Kumar Sah</h2>
            <img
              src="https://securi-tek.co.uk/images/2018/07/11/avatar-business-man-graphic-vector-9646150.jpg"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "73%", margin: "auto", paddingTop: "1em" }}>
              A software engineering graduate who is seeking to find the
              opportunity to work in a fun and challenging working environment
              that will encourage me to improve and learn new and necessary
              skills.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i class="fa fa-mobile" aria-hidden="true" />
                    (+91) 7631076811 , 8210991578
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i class="fa fa-envelope" aria-hidden="true" />
                    amitsah2393@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i class="fa fa-skype" aria-hidden="true" />{" "}
                    live:call2amitsah
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contacts;
