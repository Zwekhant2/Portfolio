export type ProjectColor = 'blue' | 'green' | 'amber' | 'violet'
export type ProjectIllustration = 'ecommerce' | 'server' | 'aws' | 'research'

export interface Project {
  id: string
  number: string
  year: string
  color: ProjectColor
  illustration: ProjectIllustration
  title: string
  description: string
  linkLabel: string
  linkHref: string
  chips: string[]
  badge: string
  badgeSub: string
}

export const projects: Project[] = [
  {
    id: 'joo-marketti',
    number: '[01]',
    year: '2025',
    color: 'blue',
    illustration: 'ecommerce',
    title: 'Joo-marketti',
    description:
      'Lead web developer on a team e-commerce build. Designed and built a responsive multi-page storefront front to back: landing, product categories, shopping cart, and contact. Owned the layout and user flow across the site.',
    linkLabel: 'View live →',
    linkHref: 'https://nerovkha.github.io/static-website/',
    chips: ['HTML5', 'CSS3', 'Responsive', 'E-commerce'],
    badge: 'E-commerce',
    badgeSub: 'Team of 4',
  },
  {
    id: 'complexsystems-migration',
    number: '[02]',
    year: '2025',
    color: 'green',
    illustration: 'server',
    title: 'complexsystems.fi migration',
    description:
      'Migrated a live academic research site from Zoner shared hosting to SpeedZone. Diagnosed broken DNS, recovered files and database from a partial backup, and restored every page. Zero data loss, full uptime after switchover.',
    linkLabel: 'View site →',
    linkHref: 'https://complexsystems.fi',
    chips: ['WordPress', 'phpMyAdmin', 'DNS', 'Migration'],
    badge: 'Production',
    badgeSub: 'SpeedZone client',
  },
  {
    id: 'moodle-aws',
    number: '[03]',
    year: '2025',
    color: 'amber',
    illustration: 'aws',
    title: 'Moodle LMS on AWS',
    description:
      'Engineered a full-scale Moodle deployment on AWS using 10+ CloudFormation templates. Multi-tier VPC with public and private subnets, NAT gateways, IAM, and CloudWatch monitoring, cutting provisioning time by 80% over manual setup.',
    linkLabel: 'View on GitHub ↗',
    linkHref: 'https://github.com/Zwekhant2/Moodle-Iac',
    chips: ['AWS', 'CloudFormation', 'VPC', 'IAM'],
    badge: 'Infrastructure',
    badgeSub: 'Academic project',
  },
  {
    id: 'wp-security-thesis',
    number: '[04]',
    year: '2026',
    color: 'violet',
    illustration: 'research',
    title: 'WordPress Security Plugin Comparison',
    description:
      'BBA thesis: a comparative analysis of leading WordPress security plugins, grounded in attack-tree analysis and post-compromise cleanup. Researched with expert input from Peeter Marvet (Zone.eu) and the team at Patchstack. Awarded grade 5/5.',
    linkLabel: 'Read thesis →',
    linkHref: 'https://urn.fi/URN:NBN:fi:amk-2026060220547',
    chips: ['Security', 'WordPress', 'Research', 'Attack-tree'],
    badge: 'Thesis · Grade 5',
    badgeSub: 'Haaga-Helia · Zone',
  },
]
