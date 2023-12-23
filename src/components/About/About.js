import Card from "./Card";
import "./about.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="container">
        <div className="title">Tech is &nbsp;</div>
        <span className="text">@ Social community for</span>
      </div>
      <div className="card-container">
        <Card
          title="Gaming"
          content="Play games to focus on tactics."
          button={
            
            <Link to="./Gaming">
              Visit
            </Link>
          }
        />
        <Card
          title="Clubs"
          content="Team where everyone can lead."
          button={
            <Link to="./Clubs">
              Visit
            </Link>
          }
        />
        <Card
          title="Programs"
          content="Places to attend great minds"
          button={
            <Link to="./Workshop">
              Visit
            </Link>
          }
        />
        <Card
          title="Podcast"
          content="A show for individuals to look as a personality"
          button={
            <Link to="./Podcast">
              Visit
            </Link>
          }

        />
        <Card
        title="Hackathons"
        content="Place for competition among minds"
        button={
          <Link to="./practice">
            Visit
          </Link>
        }
      /><Card
      title="Group Discussion"
      content="Making communication better with languages"
      button={
        <Link to="./clubs">
          Visit
        </Link>
      }
    />
        
      </div>
    </>
  );
};

export default About;
