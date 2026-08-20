export interface CapabilityColumn {
  title: string
  items: string[]
}

export const capabilities: CapabilityColumn[] = [
  {
    title: 'Web & CMS',
    items: [
      'HTML5, CSS3, PHP',
      'React & TypeScript',
      '.NET 8 & C# (minimal APIs)',
      'WordPress (themes, plugins)',
      'MySQL / MariaDB / SQLite',
      'Site migration & security',
    ],
  },
  {
    title: 'Cloud & Systems',
    items: [
      'AWS (VPC, IAM, EC2)',
      'CloudFormation (IaC)',
      'Linux (Ubuntu Server)',
      'VMware & Windows Server',
      'Bash, PowerShell, Git',
    ],
  },
  {
    title: 'Networking & Hardware',
    items: [
      'TCP/IP, VLANs, subnetting',
      'DNS, VPN, firewalls',
      'Cisco CCNA (coursework)',
      'PC build, repair & cabling',
      'On-site troubleshooting',
    ],
  },
]
