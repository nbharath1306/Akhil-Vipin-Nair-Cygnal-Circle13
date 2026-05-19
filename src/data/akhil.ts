import { TeamMember } from "./types";

const akhil: TeamMember = {
  slug: "akhil",
  name: "Akhil Vipin Nair",
  title: "Co-Founder & CTO",
  company: "Circle13",
  bio: "Exploring AI, software engineering, and innovation. Find my projects, thoughts, and creations here.",
  photo: "/images/team/akhil.jpeg",
  coverPhoto: "/images/team/akhil-cover.jpeg",
  status: "Building in public",
  socials: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/akhil-vipin-nair/", icon: "Linkedin" },
    { platform: "WhatsApp", url: "https://wa.me/918618698941", icon: "WhatsApp" },
    { platform: "Instagram", url: "https://www.instagram.com/akhil_vipin_nair/", icon: "Instagram" },
    { platform: "X", url: "https://x.com/akhil_vipin_nair", icon: "Twitter" },
    { platform: "Reddit", url: "https://www.reddit.com/user/akhil_vipin_nair/", icon: "Reddit" },
    { platform: "Substack", url: "https://substack.com/@akhil_vipin_nair", icon: "Substack" },
    { platform: "Email", url: "mailto:akhil@circle13.space", icon: "Mail" },
  ],
  sections: [
    {
      id: "ventures",
      title: "Ventures",
      links: [
        {
          label: "Build Labs",
          url: "https://buildlabs.circle13.space",
          icon: "Rocket",
          description: "Where ideas become products",
        },
        {
          label: "HallowTwin",
          url: "https://hallow-twin-circle13.vercel.app",
          icon: "Sparkles",
          description: "Synthetic Customer Simulation for Indian Startups",
        },
        {
          label: "HalfTold",
          url: "https://circle13.space/halftold",
          icon: "Heart",
          description: "The half she never says.",
        },
      ],
    },
    {
      id: "connect",
      title: "Connect",
      links: [
        {
          label: "Instagram",
          url: "https://www.instagram.com/circle13.signal/",
          icon: "Instagram",
          description: "@circle13.signal",
        },
        {
          label: "Personal Website",
          url: "https://circle13.space",
          icon: "Globe",
          description: "circle13.space",
        },
      ],
    },
  ],
  products: [
    {
      name: "HallowTwin",
      tagline: "Synthetic Customer Simulation for Indian Startups",
      url: "https://hallow-twin-circle13.vercel.app",
      status: "Live",
    },
    {
      name: "HalfTold",
      tagline: "The half she never says.",
      url: "https://circle13.space/halftold",
      status: "Coming Soon",
    },
  ],
};

export default akhil;
