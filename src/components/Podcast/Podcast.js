import React from "react";
import "./podcast.css";
import { Link } from "react-router-dom";
import ContentImage from "../assets/podcast-content.jpg";
const Podcast = () => {
  return (
    <>
      <div className="tagLine-bg">
        <div className="tagLine">
          A show for a individuals to looks as a personality
        </div>
      </div>
      <div className="podcastButtons">
        <div className="createPodcast">
          <Link to="../PostPodcast"> create a Podcast</Link>
        </div>
        <div className="viewPodcast">
          <Link to="../ViewPodcast"> View Podcasts</Link>
        </div>
      </div>
      <div className="PodcastContainer">
        <div className="PodcastContent">
          <ul>
            <li>Create your account when you want to post a podcast.</li>
            <li>While posting, a video and voice must be clear.</li>
            <li>Topic Must be Clear.</li>
          </ul>
        </div>
        <div className="ContentImage">
          <img src={ContentImage} alt="contentimage" />
        </div>
      </div>
    </>
  );
};

export default Podcast;
