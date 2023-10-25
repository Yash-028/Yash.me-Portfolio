import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [activeFilter, setActiveFilter] = useState("All");
  const [filterSkill, setFilterSkill] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
      setFilterSkill(data);
    });
  }, []);

  const handleSkillFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterSkill(skills);
      } else {
        setFilterSkill(
          skills.filter((skill) => skill.tags && skill.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <div className="app__skills__tab ">
          <div className="app__skills-filter">
            {[
              "All",
              "Frontend",
              "Backend",
              "Library",
              "Framework",
              "Programming-Languages",
              "Machine-Learning",
            ].map((item, index) => (
              <div
                key={index}
                onClick={() => handleSkillFilter(item)}
                className={`app__skills-filter-item p-text ${
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
          >
            {filterSkill.length > 0 && (
              <>
                {filterSkill.map((skill, index) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-item app__flex"
                    key={skill.name}
                  >
                    <div
                      className="app__flex"
                      style={{ backgroundColor: skill.bgColor }}
                    >
                      <img src={urlFor(skill.icon)} alt={skill.name} />
                    </div>
                    <p className="p-text">{skill.name}</p>
                  </motion.div>
                ))}
              </>
            )}
          </motion.div>
        </div>

        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, item) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={item}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    {/* <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip> */}
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
