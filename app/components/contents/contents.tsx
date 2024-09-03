import { BsKeyFill } from "react-icons/bs";
import { RiWebhookFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { CardsCookieSettings } from "../semi-components/Cookie-settings";
import { MdGroups3, MdOutlineSettings } from "react-icons/md";
import { LuUnplug } from "react-icons/lu";
import { CardsShare } from "../semi-components/Share";
import { TeamMembers } from "../semi-components/TeamMembers";


export const content = [
  {
    id: 1,
    title: "Integrations",
    icon: <LuUnplug/>,

    description: (
      <motion.div layoutId="sub-container">
        <CardsCookieSettings />
      </motion.div>
    ),
  },
  {
    id: 2,
    title: "Privacy settings",
    icon: <MdOutlineSettings/>,
    description: (
      <motion.div layoutId="sub-container">
       <CardsShare/>
      </motion.div>
    ),
  },
  {
    id: 3,
    title: "Team members",
    icon: <MdGroups3 />,

    description: (
      <motion.div layoutId="sub-container">
        <TeamMembers/>
      </motion.div>
    ),
  },
];
