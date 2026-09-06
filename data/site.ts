import type { ContactLink, NavItem, Project, Skill } from "@/types/content";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const profile = {
  name: "Kari",
  role: "Happy to see you!",
  description:
    "I make digital experiences that feel good to use.",
  tiktokUrl: "https://tiktok.com/@399fps",
  saweriaUrl: "https://saweria.co/199fps",
  discordUrl: "https://discord.com/users/635137762021998605",
  communityUrl: "https://discord.com/oauth2/authorize?client_id=1519997070025425058&response_type=code&redirect_uri=https%3A%2F%2Fredirect.kaelistian.workers.dev%2Fcallback&scope=identify+guilds.join",
  discordHandle: "@199fps",
  email: "hello@kari.dev"
};

export const aboutCards = [
  {
    eyebrow: "A little about me",
    title: "I like making digital things feel good.",
    body:
      "I build polished interfaces, flexible frontends, and developer tools with equal parts curiosity and care."
  },
  {
    eyebrow: "What I'm into",
    title: "Good-looking websites and useful Discord systems.",
    body:
      "Right now, I'm exploring tools and ideas that help products ship quickly without becoming a headache to maintain."
  },
  {
    eyebrow: "Along the way",
    title: "From landing pages to the stuff behind them.",
    body:
      "I've worked across responsive UI, backend integrations, APIs, automation, and the little details that help things run smoothly."
  }
];

export const skills: Skill[] = [
  {
    name: "Discord.js",
    description: "A Discord bot with a bunch of useful little tricks.",
    accent: "from-white/20 to-white/0"
  },
    {
    name: "Node.js",
    description: "Fast server-side architecture and real-time systems, all powered by JavaScript.",
    accent: "from-white/20 to-white/0"
  },
  {
    name: "HTML",
    description: "Clean, semantic page structures that are friendly to people and search engines.",
    accent: "from-white/20 to-white/0"
  },
  {
    name: "CSS",
    description: "Responsive layouts that look right and behave nicely on every screen.",
    accent: "from-white/20 to-white/0"
  },
  {
    name: "JavaScript",
    description: "Interactive frontend features, state logic, and API integrations that keep things moving.",
    accent: "from-white/20 to-white/0"
  },
  {
    name: "Accompany You",
    description: "Because building things together is more fun.",
    accent: "from-white/20 to-white/0"
  },
];

export const projects: Project[] = [
  {
    title: "Haven",
    description: "A Discord.js automation layer with typed commands, clean moderation flows, and polished community utilities.",
    technologies: ["Node.js", "Discord.js"],
    thumbnail: "/projects/haven.webp"
  }
];

export const contactLinks: ContactLink[] = [
  {
    label: "Discord",
    value: profile.discordHandle,
    href: profile.discordUrl,
    kind: "discord"
  },
  {
    label: "TikTok",
    value: "@399fps",
    href: profile.tiktokUrl,
    kind: "tiktok"
  }
];
