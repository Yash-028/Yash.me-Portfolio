import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        Passionately crafting <span>digital products </span> <br />
        and <span>experiences</span> that people love.
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>

      {abouts.length && (
        <div className="app__profiles app__smallprofile">
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={abouts[currentIndex].title}
          >
            <img
              src={urlFor(abouts[currentIndex].imgUrl)}
              alt={abouts[currentIndex].title}
            />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {abouts[currentIndex].title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {abouts[currentIndex].description}
            </p>
          </motion.div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0 ? abouts.length - 1 : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === abouts.length - 1 ? 0 : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
