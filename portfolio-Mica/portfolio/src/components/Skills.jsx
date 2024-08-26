/* From Uiverse.io by akshat-patel28 */
import React from "react";

const Skills = () => {
  return (
    <>
      <div className="centroo">
        <div className="container">
          <div className="skill-box">
            <span className="title">HTML</span>

            <div className="skill-bar">
              <span className="skill-per html">
                <span className="tooltip">50%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">CSS</span>

            <div className="skill-bar">
              <span className="skill-per css">
                <span className="tooltip">70%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">JavaScript</span>

            <div className="skill-bar">
              <span className="skill-per javascript">
                <span className="tooltip">50%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">NodeJS</span>

            <div className="skill-bar">
              <span className="skill-per nodejs">
                <span className="tooltip">30%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
