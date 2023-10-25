import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: "easeInOut",
//     },
//   },
// };

const Header = () => (
  <div className="app__header app__flex">
    <div className="app__flex__in">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hi there, I'm</p>
              <h1 className="head-text">YASH</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p style={{ textAlign: "center" }} className="p-text">
              Full-Stack Developer
            </p>
            <p style={{ textAlign: "center" }} className="p-text">
              Software Engineer
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-text"
      >
        <p className="header__text">
          I have experience in building websites and web applications using
          modern JavaScript frameworks such as React, Redux, and Angular.
        </p>
        <p className="header__text">
          I am a Front-End Developer based in California.
        </p>
      </motion.div>

      {/* <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div> */}
    </div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" className="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
