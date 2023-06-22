<<<<<<< HEAD
=======
/* eslint-disable no-unused-vars */
>>>>>>> 636a77075ddbdf0d236ab4fc94a86c8d9063a83a
import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

<<<<<<< HEAD
export default SectionWrapper(Tech, "");
=======
export default SectionWrapper(Tech, "");
>>>>>>> 636a77075ddbdf0d236ab4fc94a86c8d9063a83a
