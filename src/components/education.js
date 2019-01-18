import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.schoolName}</h4>
          <p>{this.props.discription}</p>
          <h6>{this.props.cgpa}</h6>
          <h6>{this.props.percentage}</h6>
        </Cell>
      </Grid>
    );
  }
}

export default Education;