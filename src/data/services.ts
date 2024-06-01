import {
  faLaptopCode,
  faServer,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    title: "Front-End Development",
    icon: faLaptopCode,
    shortDescription:
      "I deliver visually stunning and user-friendly interfaces to help you establish a strong online presence.",
    description:
      "I specialize in delivering visually stunning and user-friendly interfaces to help you establish a strong online presence. Whether it's a simple informational site or a complex web application, I provide tailored front-end development solutions. Using the latest frameworks and technologies, I create responsive, SEO-friendly interfaces that offer a seamless browsing experience on all devices."
    },
  {
    title: "Backend Development",
    icon: faServer,
    shortDescription:
      "I enhance your digital applications with a robust and scalable backend infrastructure.",
    description:
      "I enhance your digital applications with a robust and scalable backend infrastructure. With expertise in backend development, I create efficient database structures, develop APIs, and configure servers to ensure optimal performance, security, and scalability. My solutions empower your applications to seamlessly handle high traffic and complex data management.",
  },
  {
    title: "Web Development",
    icon: faCode,
    shortDescription:
    "I create visually stunning and user-friendly websites to establish a strong online presence for your business.",
    description:
      "I create visually stunning and user-friendly websites to establish a strong online presence for your business. Whether it's a simple informational site or a complex e-commerce platform, I provide customized web development solutions. Leveraging the latest frameworks and technologies, I build responsive, SEO-friendly websites that ensure a seamless experience across all devices."
   },
];

export default services;
