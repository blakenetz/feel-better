import React from "react";
import SplitText from "react-pose-text";

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 100,
  },
};

function Welcome(props) {
  return (
    <section className="welcome">
      <SplitText
        initialPose="exit"
        pose="enter"
        charPoses={charPoses}
        className="char"
      >
        Feel BetteR
      </SplitText>
      <h2>I hope this website makes you feel better.</h2>
    </section>
  );
}

export default Welcome;
