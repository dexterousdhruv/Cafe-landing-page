import React from "react";
import fb from "../assets/facebook.png";
import ig from "../assets/instagram.png";
import yt from "../assets/youtube.png";
import pin from "../assets/pinterest.png";
import SocialBox from "../components/SocialBox";

const SocialRow = () => {
  return (
    <section className="max-container flex flex-col flex-wrap s-600:flex-row">
      <SocialBox bgURL="bg-col1" iconURL={fb} />
      <SocialBox bgURL="bg-col2" iconURL={ig} />
      <SocialBox bgURL="bg-col3" iconURL={yt} />
      <SocialBox bgURL="bg-col4" iconURL={pin} />
    </section>
  );
};

export default SocialRow;
