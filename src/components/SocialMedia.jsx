import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsMailbox2 } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://www.linkedin.com/in/yashchauhan0228/"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <BsLinkedin />
      </div>
    </a>
    <a href="mailto:Yashchauhan0228@gmail.com" target="_blank" rel="noreferrer">
      <div>
        <BsMailbox2 />
      </div>
    </a>
    <a href="https://github.com/Yash-028" target="_blank" rel="noreferrer">
      <div>
        <BsGithub />
      </div>
    </a>
    <a
      href="https://www.instagram.com/yashface_/"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <BsInstagram />
      </div>
    </a>
  </div>
);

export default SocialMedia;
