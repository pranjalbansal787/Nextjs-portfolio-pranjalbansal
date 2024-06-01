import { IProjectItem, ProjectType, RepoType } from "@/types";

const   projects: IProjectItem[] = [
  {
    id: "Disney-hotstar-clone",
    title: "Disney+ Hotstar Clone",
    description:
      "A Disney+ Hostar clone developed using React.js, Javascript, Firebase and Styled Components.",
    icon: "/skills/React.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/pranjalbansal787/Disney-Hotstar",
    url: "https://disney-hotstar-by-pranjalbansal.vercel.app/",
    tags: ["React.js", "JavaScript", "Firebase", "Styled Components"],
    sceenshots: ["/images/Hotstarss.jpg"],
  },
  {
    id: "Administrator-access-control-system",
    title: "Administrator Access Control System",
    description:
      "An Administrator Access Control System built using React.js, Javascript, CSS",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/pranjalbansal787/Admin-Access-Control-system",
    url: "https://admin-access-control-system.vercel.app/",
    tags: ["React.js", "JavaScript", "CSS"],
    sceenshots: ["/images/adminaccess.jpg"],
  },
  {
    id: "password-generator",
    title: "Password Generator",
    description:
      "A password generator built using React.js that allows user to make passwords of different types based on their prefrences",
    icon: "/skills/React.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/pranjalbansal787/password-generator-react",
    url: "https://password-generator-react-4u21.vercel.app/",
    tags: ["React.js", "JavaScript", "CSS3"],
    sceenshots: ["/images/passwordgenerator.jpg"],
  },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
