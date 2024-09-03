import CreateKey from "../semi-components/CreateKey";
import DeploymentCard from "../semi-components/DeploymentCard";
import ProjectCard from "../semi-components/ProjectCard";
import ShareWorkspace from "../semi-components/ShareWorkspace";

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
