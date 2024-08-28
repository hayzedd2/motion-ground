import CreateKey from "../CreateKey";
import DeploymentCard from "../DeploymentCard";
import ProjectCard from "../ProjectCard";
import ShareWorkspace from "../ShareWorkspace";

export const ToolbarArr = [
  {
    id: 1,
    name: "Project",
    content: <ProjectCard />,
  },
  {
    id: 2,
    name: "Deployments",
    content: <DeploymentCard />,
  },
  {
    id: 3,
    name: "Create API key",
    content: <CreateKey/>
  },
  {
    id: 4,
    name: "Share Workspace",
    content: <ShareWorkspace/>
  },
];
