import {
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
  PencilSquareIcon,
  LockClosedIcon,
  ClipboardDocumentCheckIcon,
  LightBulbIcon,
  CogIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "UI/UX Development",
  desc: "Craft user experiences that resonate. Our UI/UX design experts turn ideas into stunning, intuitive interfaces. We optimize engagement, making every click count.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Expert UI/UX Design",
      desc: "Elevate user experiences with our expertise.",
      icon: <UserGroupIcon />,
    },
    {
      title: "Stunning and User-Friendly",
      desc: "Create visually appealing, intuitive interfaces.",
      icon: <ComputerDesktopIcon />,
    },
    {
      title: "Optimized Engagement",
      desc: "Ensure maximum user engagement and satisfaction.",
      icon: <UsersIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Website Development",
  desc: "Digital presence tailored to your vision. Our web development team delivers responsive, secure, and SEO-friendly websites. From e-commerce to blogs, we bring your ideas to life.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Dynamic and Responsive",
      desc: "Build dynamic, responsive websites aligned with your vision.",
      icon: <WrenchScrewdriverIcon />,
    },
    {
      title: "Customized Web Solutions",
      desc: "Tailor-made solutions for e-commerce, blogs, and more.",
      icon: <PencilSquareIcon />,
    },
    {
      title: "Secure, Scalable, SEO-Friendly",
      desc: "Prioritize security, scalability, and SEO-friendliness.",
      icon: <LockClosedIcon />,
    },
  ],
};

const benefitThree = {
  title: "Mobile App Development",
  desc: "Apps that captivate and perform. We design and develop custom iOS and Android apps that align with your goals. Expect user-centric design, seamless functionality, and robust security.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Cutting-Edge Mobile Apps",
      desc: "Craft cutting-edge iOS and Android apps.",
      icon: <CogIcon />,
    },
    {
      title: "Personalized Solutions",
      desc: "Create custom solutions that match your business objectives.",
      icon: <LightBulbIcon />,
    },
    {
      title: "User-Centric Design",
      desc: "Prioritize user experience, ensuring smooth performance and robust security.",
      icon: <ClipboardDocumentCheckIcon />,
    },
  ],
};

export {benefitOne, benefitTwo, benefitThree};
