import DeploymentCard from "../DeploymentCard";
import ProjectCard from "../ProjectCard";

export const ToolbarArr =[
    {
        id:1,
        name:"Project",
        height :"340px",
        content:<ProjectCard/>
        
    },
    {
        id:2,
        name:"Deployments",
        height :"220px",
        content: <DeploymentCard/>
        
    },
   
    {
        id:3,
        name:"Storage",
        height :"300px",
        content:"Storage"
    },
    {
        id:4,
        name:"Analytics",
        height :"250px",
        content:"Analytics"
    }
]