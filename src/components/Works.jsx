import Titl from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles.js";
import { github, play } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";

import { useTranslation } from "react-i18next";

const ProjectCard = ({
  id,
  index,
  name,
  tags,
  image,
  deploy_link,
  source_code_link,
}) => {
  const [t, i18n] = useTranslation("global");

  const projectKey = `works.projects.${id}.description`;
  const projectDescription = t(projectKey);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Titl
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            <div
              className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(deploy_link, "_blank")}
            >
              <img
                className="w-1/2 h-1/2 object-contain"
                src={play}
                alt="play"
              />
            </div>
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                className="w-1/2 h-1/2 object-contain"
                src={github}
                alt="github"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {projectDescription}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Titl>
    </motion.div>
  );
};

const Works = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("works.subText")}</p>
        <h2 className={styles.sectionHeadText}>{t("works.headText")}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leadgin-[30px]"
        >
          {t("works.description")}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
