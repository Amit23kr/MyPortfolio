import React from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png) center/cover"
              }}
            >
              WEATHER FINDER #1
            </CardTitle>
            <CardText style={{ color: "black" }}>
              An online web Application which gives you weather detail based on
              city name and country name
            </CardText>
            <CardActions border>
              {/* <button colored>Github</button> */}
              <a
                href="https://github.com/Amit23kr"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button>Github</button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png) center/cover"
              }}
            >
              PORTFOLIO #2
            </CardTitle>
            <CardText style={{ color: "black" }}>
              An online web Application which gives you weather detail based on
              city name and country name
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/Amit23kr"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button>Github</button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "400", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FF6347",
                height: "176px",
                background:
                  "url(https://cdn0.iconfinder.com/data/icons/control-pad-shortcuts/100/Item-List_02-512.png) center/cover"
              }}
            >
              TODO ITEM LIST #1
            </CardTitle>
            <CardText style={{ color: "black" }}>
              Using this application we can manage our daily routine. Where
              student can manage their time slot. We can manage office schedule
            </CardText>
            <CardActions border>
              {/* <button colored>Github</button> */}
              <a
                href="https://github.com/Amit23kr"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button>Github</button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FF6347",
                height: "176px",
                background:
                  "url(https://sg.fiverrcdn.com/photos/117926393/original/22c6002b2350192497e51f62d42f066dc808295f.jpg?1538250543) center/cover"
              }}
            >
              CRUD OPERATION #2
            </CardTitle>
            <CardText style={{ color: "black" }}>
              This is a basic RestFull API where we can perforn create , read,
              update and delete event from the database
            </CardText>
            <CardActions border>
              {/* <button colored>Github</button> */}
              <a
                href="https://github.com/Amit23kr"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button>Github</button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                height: "176px",
                background:
                  "url(https://static.thenounproject.com/png/986812-200.png) center/cover"
              }}
            />
            <CardText style={{ color: "black" }}>
              Develop a module where you can predict what salary should give
              based on experience.Develop a module where you can predict
              house/flat actual price based on square feet, how old it is.
            </CardText>
            <CardActions border>
              {/* <button colored>Github</button> */}
              <a
                href="https://github.com/Amit23kr"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button>Github</button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>REACT</Tab>
          <Tab>NODEJS</Tab>
          <Tab>MACHINE LEARNING</Tab>
        </Tabs>

        <Grid>
          <Cell col={6}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
