import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non porro vel nemo quos fuga assumenda id quae maiores repudiandae recusandae.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non porro vel nemo quos fuga assumenda id quae maiores repudiandae recusandae.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non porro vel nemo quos fuga assumenda id quae maiores repudiandae recusandae.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            We Provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We prodivde true
            care into each and every member.
          </p>
        </motion.div>
      </motion.div>

      {/* BENEFITS */}
      <motion.div
        className="mt-5 items-center justify-between gap-8 md:flex"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {benefits.map((benefit: BenefitType) => (
          <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
          />
        ))}
      </motion.div>

      {/* GRAPHICS AND DESCRIPTION */}
      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        {/* GRAPHIC */}
        <img
          className="mx-auto"
          src={BenefitsPageGraphic}
          alt="benefits-page-graphic"
        />

        {/* DECSRIPTION */}
        <div>
          {/* TITLE */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
              <motion.div
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </motion.div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="my-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              quibusdam ad totam placeat, veritatis fuga sed doloribus obcaecati
              quasi alias? Quasi, ducimus molestias. Amet, labore consectetur
              vel odit facere ab deserunt accusamus in sit doloremque, nisi quis
              repellat excepturi doloribus omnis dolorem, alias molestias natus
              corrupti expedita aut esse et?
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore repudiandae saepe eligendi, animi deserunt suscipit
              perferendis ab, nam itaque ducimus labore nobis doloremque
              laboriosam laudantium aspernatur ex recusandae quis. Quidem?
            </p>
          </motion.div>

          {/* BUTTON */}
          <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"></div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
