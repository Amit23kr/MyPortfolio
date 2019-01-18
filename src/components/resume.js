import React from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://securi-tek.co.uk/images/2018/07/11/avatar-business-man-graphic-vector-9646150.jpg"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "1em" }}>Amit Kumar Sah</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ border: "3px solid #833fb2", width: "50%" }} />
            <p>
              A software engineering graduate who is seeking to find the
              opportunity to work in a fun and challenging working environment
              that will encourage me to improve and learn new and necessary
              skills.
            </p>
            <hr style={{ border: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Btm 2nd stage bangalore, karnataka (560076)</p>
            <h5>Phone</h5>
            <p>7631076811</p>
            <h5>Email</h5>
            <p>amitsah2393@gmail.com</p>
            <hr style={{ border: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2015}
              endYear={2018}
              schoolName="National Institute of Technology Surathkal  Karnataka (NIT)"
              discription="Master of Computer Application (MCA)"
              cgpa={7.03}
            />

            <Education
              startYear={2012}
              endYear={2015}
              schoolName="L.B.S.M College Karandih , Jamshedpur"
              discription="Bachelor of Science (Computer Application)"
              percentage={76.58}
            />
            <hr style={{ border: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear="20.01.2018"
              endYear="27.06.2018"
              jobName="Ocular Technology koramangala, bangalore"
              discription="Internship"
            />
            <hr style={{ border: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={70} />
            <Skills skill="React" progress={60} />
            <Skills skill="Node.js" progress={60} />
            <Skills skill="Express.js" progress={50} />
            <Skills skill="Python" progress={40} />
            <Skills skill="ML" progress={20} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
