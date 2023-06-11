import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center w-full min-h-screen p-4 bg-neutral-950 text-white"
    >
      <h1 className="text-5xl font-bold">Davi W.M.Suga</h1>
      <p className="mt-2 text-lg">Senior Software Engineer</p>
      <div className="flex justify-center mt-4 space-x-2">
        <a
          href="https://github.com/davisuga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo className="text-white hover:text-neutral-400" />
        </a>
        <a
          href="https://linkedin.com/in/davisuga/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinLogo
            size="2x"
            className="text-white hover:text-neutral-400"
          />
        </a>
      </div>
      <p className="mt-4 max-w-lg text-center">
        A highly skilled and self-taught software engineer with a passion for
        functional programming, Davi has been programming since the age of 13.
        His expertise has been honed by professional experiences and an innate
        curiosity, as well as a drive to experiment and continuously improve.
      </p>
    </motion.div>
  );
};

export default Hero;
