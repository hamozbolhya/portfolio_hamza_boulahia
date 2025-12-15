import { Github, Linkedin, Mail} from "lucide-solid";
import MediumIcon from "../shared/Meduim";


export const contactInfo = [
  {
    icon: "📧",
    text: "hamzaboulahia.code@gmail.com",
    link: "mailto:hamzaboulahia.code@gmail.com",
  },
  { icon: "📱", text: "+212 659 676 148", link: "tel:+212659676148" },
  { icon: "📍", text: "Casablanca, Morocco" },
  {
    icon: "💼",
    text: "linkedin.com/in/boulahia-hamza",
    link: "https://linkedin.com/in/boulahia-hamza",
  },
  {
    icon: MediumIcon,
    text: "medium.com/@hamzaboulahia.code",
    link: "https://medium.com/@hamzaboulahia.code",
  },
];

export const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/boulahia-hamza",
  },
  { icon: Github, label: "GitHub", href: "https://github.com/hamozbolhya" },
  { icon: Mail, label: "Email", href: "mailto:hamzaboulahia.code@gmail.com" },
  {
    label: "Medium",
    href: "https://medium.com/@hamzaboulahia.code",
    icon: MediumIcon, // You'll need to import this
  },
];

export const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
