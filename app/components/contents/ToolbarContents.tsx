import CreateKey from "../semi-components/CreateKey";
import DeploymentCard from "../semi-components/DeploymentCard";
import ProjectCard from "../semi-components/ProjectCard";
import ShareWorkspace from "../semi-components/ShareWorkspace";

export const ToolbarArr = [
  {
    id: 0,
    name: "Project",
    content: <ProjectCard />,
  },
  {
    id: 1,
    name: "Deployments",
    content: <DeploymentCard />,
  },
  {
    id: 2,
    name: "Create API key",
    content: <CreateKey/>
  },
  {
    id: 3,
    name: "Share Workspace",
    content: <ShareWorkspace/>
  },
];
