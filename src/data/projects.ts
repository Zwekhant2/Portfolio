export type ProjectIllustration = 'ecommerce' | 'server' | 'aws' | 'research' | 'invoicing'

export interface CaseSection {
  heading: string
  body: string[]
}

export interface ProjectFact {
  label: string
  value: string
}

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  year: string
  title: string
  /** One line for the work index. The hook, not a summary. */
  standfirst: string
  role: string
  context: string
  illustration: ProjectIllustration
  stack: string[]
  facts: ProjectFact[]
  sections: CaseSection[]
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    id: 'complexsystems-migration',
    year: '2025',
    title: 'Rescuing complexsystems.fi',
    standfirst:
      'A live research site, a broken DNS record, and a backup that turned out to be incomplete.',
    role: 'Sole developer',
    context: 'SpeedZone (Zone Media OY) — client migration',
    illustration: 'server',
    stack: ['WordPress', 'phpMyAdmin', 'DNS', 'Migration'],
    facts: [
      { label: 'Client', value: 'complexsystems.fi' },
      { label: 'Moved from', value: 'Zoner shared hosting' },
      { label: 'Moved to', value: 'SpeedZone' },
      { label: 'Data lost', value: 'None' },
    ],
    sections: [
      {
        heading: 'The situation',
        body: [
          'complexsystems.fi is a working academic research site. Not a demo, not a portfolio piece — a live site with years of published material on it, belonging to people who had no interest in web hosting and every interest in their pages continuing to exist.',
          'The job, on paper, was routine: move it off Zoner shared hosting and onto SpeedZone. Copy the files, export the database, repoint the domain, done. That is the version of the task that fits in a sentence.',
          'Two things made it not that. The DNS configuration was already broken before I touched anything, and the backup I had been handed did not contain everything it was supposed to.',
        ],
      },
      {
        heading: 'Diagnosing the DNS',
        body: [
          'A broken DNS record is a particular kind of problem: nothing in the site itself is wrong, so nothing in the site itself tells you what is wrong. The files can be perfect and the database pristine, and the domain will still resolve to the wrong place — or to nothing at all.',
          'So the first work was not migration work. It was going backwards from what the domain actually resolved to, against what it was supposed to resolve to, and finding the point where those two diverged.',
          // TODO(zwe): the strongest paragraph in this case study belongs here.
          // Which record was wrong, what it pointed at, and how you found it.
          // Real specifics — "the A record still pointed at the old Zoner IP",
          // "the nameservers had been changed but the zone file hadn't" — whatever it was.
        ],
      },
      {
        heading: 'Rebuilding from a partial backup',
        body: [
          'The backup was the second problem, and the more dangerous one, because a partial backup does not announce itself. It restores. It looks like a website. You only find out what is missing by already knowing what was supposed to be there.',
          'I recovered what the backup did hold — the file tree, and the database imported through phpMyAdmin — and then treated the result as a draft rather than a finished restore. The question stopped being "did it import?" and became "what is not here?"',
          // TODO(zwe): what was actually missing, and where did you get it back from?
          // The uploads directory? Specific tables? An older backup? The live server?
        ],
      },
      {
        heading: 'Verifying, page by page',
        body: [
          '"Zero data loss" is a claim you have to earn. The only way I know to earn it is the slow way: walk the restored site against the original, page by page, and confirm each one renders what it rendered before.',
          'That is unglamorous work and it is the entire value of the job. A migration that is 98% correct is not 98% successful — it is a site with a hole in it that someone finds months later and cannot explain.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'Every page was restored. No data was lost, and the site stayed up through the switchover — visitors never saw a maintenance page, an error, or a half-migrated site.',
          'What I took from it: the interesting problem is rarely the one described in the ticket. The ticket said migrate a site. The actual work was diagnosing infrastructure someone else had misconfigured, and refusing to trust a backup that presented itself as complete.',
        ],
      },
    ],
    links: [{ label: 'Visit complexsystems.fi', href: 'https://complexsystems.fi' }],
  },

  {
    id: 'kevytlasku',
    year: '2026',
    title: 'kevytlasku',
    standfirst:
      'A full-stack invoicing app for Finnish light entrepreneurs — live in production, with a real backend behind it rather than a mock.',
    role: 'Solo — frontend, backend, deployment',
    context: 'Self-directed',
    illustration: 'invoicing',
    stack: ['React 19', 'TypeScript', 'C# / .NET 8', 'SQLite', 'Dapper', 'Docker', 'Fly.io'],
    facts: [
      { label: 'Frontend', value: 'React 19 + TypeScript, on Vercel' },
      { label: 'API', value: 'C# / .NET 8 minimal API' },
      { label: 'Data', value: 'SQLite via Dapper' },
      { label: 'Hosting', value: 'Multi-stage Docker on Fly.io' },
      { label: 'Status', value: 'Live in production' },
    ],
    sections: [
      {
        heading: 'Why invoicing',
        body: [
          'Light entrepreneurship — kevytyrittäjyys — is how a lot of people in Finland do their first paid work. The invoicing that comes with it is not hard, exactly, but it is fiddly in ways that punish a mistake: VAT has to be right, and it has to be right per line, not per invoice.',
          'I wanted a project where the domain had real rules in it. Most portfolio apps are a list of things you can add and remove. This one has arithmetic that is either wrong or right.',
        ],
      },
      {
        heading: 'VAT per rate, not per invoice',
        body: [
          'A single invoice can carry lines at different VAT rates. So the total is not one calculation — it is a set of subtotals grouped by rate, each rounded correctly, then summed.',
          'Getting this wrong is the kind of bug that does not crash anything. It quietly produces a number that is incorrect, which on an invoice is worse than a crash.',
          'So the totalling lives in one module with no dependencies and a test suite of its own. Isolating it that way means the arithmetic can be proved correct on its own terms, without standing a server up or rendering a component to check it.',
        ],
      },
      {
        heading: 'The line-item editor',
        body: [
          'The invoice editor runs on a reducer rather than a scatter of independent state. Line items get added, removed, reordered, and edited, and every one of those actions moves the totals.',
          'Held as separate pieces of state, that becomes a synchronisation problem — several things that each have to remember to update. As a reducer it is one state shape and one set of transitions, with the totals derived from it rather than maintained alongside it.',
        ],
      },
      {
        heading: 'A real backend',
        body: [
          'The API is a C# / .NET 8 minimal API talking to SQLite through Dapper, and it is deployed and running rather than stubbed behind a mock.',
          'That distinction matters more than it sounds. A frontend against a mock never has to answer for latency, for error states, for a request that fails halfway. A deployed backend makes all of those real, and all of them have to be handled.',
          // TODO(zwe): a paragraph here on the hardest thing deployment actually threw at you —
          // CORS, cold starts, the SQLite file on a read-only filesystem, whatever it was.
          // Specifics beat generalities.
        ],
      },
      {
        heading: 'Shipping it',
        body: [
          'The API ships as a multi-stage Docker build — the .NET SDK compiles and publishes in the first stage, and only the runtime image and the published output survive into the second. The image that actually runs carries no compiler and no source.',
          'That image runs on Fly.io, with the React front end deployed separately on Vercel. Splitting them means the two halves scale and redeploy independently, and the frontend is served from a CDN rather than from the same box answering API calls.',
        ],
      },
    ],
    links: [{ label: 'Open the app', href: 'https://kevytlasku.vercel.app' }],
  },

  {
    id: 'moodle-aws',
    year: '2025',
    title: 'Moodle LMS on AWS',
    standfirst:
      'A full learning-management stack defined as code, provisioned in a fraction of the time.',
    role: 'Infrastructure design and implementation',
    context: 'Haaga-Helia — academic project',
    illustration: 'aws',
    stack: ['AWS', 'CloudFormation', 'VPC', 'IAM', 'CloudWatch'],
    facts: [
      { label: 'Templates', value: '10+ CloudFormation stacks' },
      { label: 'Network', value: 'Multi-tier VPC, public + private' },
      { label: 'Provisioning', value: '80% faster than manual' },
    ],
    sections: [
      {
        heading: 'The case for infrastructure as code',
        body: [
          'Standing up Moodle by hand is perfectly possible. You click through the console, create the network, launch the instances, wire up the database, and eventually you have a working LMS.',
          'What you do not have is a way to do it again. The configuration lives in the console and in whatever you can remember, so the second environment is never quite the first, and nobody can say precisely how either was built.',
          'Defined as CloudFormation, the infrastructure becomes a readable artifact — reviewable, versioned, destroyable, and rebuildable identically. Provisioning dropped by roughly 80% against doing it by hand.',
        ],
      },
      {
        heading: 'Network design',
        body: [
          'The stack sits in a multi-tier VPC. Public subnets hold what has to face the internet; private subnets hold what must not, reaching out through NAT gateways when they need to.',
          'This is the part that is easy to skip and expensive to have skipped. Flattening everything into public subnets works on day one and is indefensible on every day after it.',
        ],
      },
      {
        heading: 'Access and visibility',
        body: [
          'IAM roles scope what each component is permitted to do, rather than granting broadly and hoping. CloudWatch supplies the monitoring, so the system reports on itself instead of waiting to be checked on.',
          // TODO(zwe): one concrete example would carry this section —
          // a specific role you scoped down, or an alarm you set and what it caught.
        ],
      },
      {
        heading: 'Split across ten-plus templates',
        body: [
          'The stack is deliberately not one large template. Network, data, compute, and monitoring are separate, composable pieces.',
          'A monolith is easier to write once and painful forever after, because every change re-risks everything. Separate stacks mean a change to monitoring cannot take the network down with it.',
        ],
      },
    ],
    links: [{ label: 'View the templates on GitHub', href: 'https://github.com/Zwekhant2/Moodle-Iac' }],
  },

  {
    id: 'wp-security-thesis',
    year: '2026',
    title: 'WordPress Security: Comparison of Security Plugins and Implementation Guide',
    standfirst:
      'A BBA thesis commissioned by SpeedZone.fi, built on attack-tree analysis and real post-compromise cleanup. Graded 5/5.',
    role: 'Author',
    context: 'Haaga-Helia BBA thesis, commissioned by SpeedZone.fi',
    illustration: 'research',
    stack: ['Security research', 'WordPress', 'Attack-tree analysis'],
    facts: [
      { label: 'Commissioned by', value: 'SpeedZone.fi' },
      { label: 'Grade', value: '5 / 5' },
      { label: 'Method', value: 'Attack-tree analysis' },
      { label: 'Expert input', value: 'Peeter Marvet (Zone.eu), Patchstack' },
      { label: 'Published', value: 'Theseus / urn.fi' },
    ],
    sections: [
      {
        heading: 'The question',
        body: [
          'The thesis was commissioned by SpeedZone.fi, who maintain WordPress sites for clients and needed a defensible answer to which security plugin to standardise on.',
          'Every WordPress security plugin claims to secure WordPress. They cannot all be equally right, and comparing their marketing pages tells you nothing — the feature lists are near-identical, and the differences that matter are not on them.',
          'So the thesis asks a narrower, more answerable question: against which attacks does each of these plugins actually help, and where does each one stop?',
        ],
      },
      {
        heading: 'Attack trees as the method',
        body: [
          'An attack tree starts from the attacker’s goal and decomposes it into the paths that reach it. It is a structural way of asking "how would this actually be done?" instead of "what does the product say it stops?"',
          'That reframing is what makes comparison possible. Once the paths are laid out, every plugin can be measured against the same set of them, rather than against its own description of itself.',
        ],
      },
      {
        heading: 'Grounded in cleanup, not theory',
        body: [
          'The analysis is anchored in post-compromise cleanup — what a compromised WordPress install actually looks like once somebody is already inside it.',
          'A defence evaluated only against hypothetical attacks tends to be evaluated generously. Measured against what real intrusions leave behind, the gaps are considerably more visible.',
        ],
      },
      {
        heading: 'Expert input',
        body: [
          'The research drew on input from Peeter Marvet at Zone.eu and from the team at Patchstack — people who deal with compromised WordPress sites as routine work rather than as a research exercise.',
          // TODO(zwe): what did they tell you that changed your mind?
          // A thesis that reports a corrected assumption is far more convincing
          // than one that reports only confirmations.
        ],
      },
      {
        heading: 'Result',
        body: ['The thesis was graded 5 out of 5, and is published and publicly readable.'],
      },
    ],
    links: [{ label: 'Read the thesis', href: 'https://urn.fi/URN:NBN:fi:amk-2026060220547' }],
  },

  {
    id: 'joo-marketti',
    year: '2025',
    title: 'Joo-marketti',
    standfirst:
      'Lead developer on a four-person storefront build — layout and user flow, front to back.',
    role: 'Lead web developer',
    context: 'Team of four',
    illustration: 'ecommerce',
    stack: ['HTML5', 'CSS3', 'Responsive'],
    facts: [
      { label: 'Team', value: '4 people' },
      { label: 'Role', value: 'Lead developer' },
      { label: 'Scope', value: 'Landing, categories, cart, contact' },
    ],
    sections: [
      {
        heading: 'The build',
        body: [
          'A responsive multi-page storefront: landing, product categories, shopping cart, contact. I led the build, and owned the layout and the user flow across the whole site.',
          'Owning the flow rather than a page is the distinction that mattered. Individual pages can each be perfectly reasonable while the path through them is not — and on a storefront, the path is the product.',
        ],
      },
      {
        heading: 'Working as a team of four',
        body: [
          // TODO(zwe): this is the section that makes the project worth reading.
          // How was the work split? Where did the four of you disagree, and how was it resolved?
          // What did leading actually consist of, day to day?
          // Employers read team projects for exactly this, and right now you say nothing about it.
          'Four people, one codebase, and a shared deadline.',
        ],
      },
      {
        heading: 'Built without a framework',
        body: [
          'Hand-written HTML and CSS, responsive across breakpoints, with no framework underneath it.',
          'Doing layout without a grid system to lean on is a good way to find out whether you actually understand layout. When a column misbehaves, there is nothing to defer to.',
        ],
      },
    ],
    links: [{ label: 'View the site', href: 'https://nerovkha.github.io/static-website/' }],
  },
]
