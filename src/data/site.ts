// Everything about you lives here. The pages read from this file.

export const site = {
  name: 'Ayush Gupta',
  role: 'Probationary Officer at South Indian Bank',
  location: 'Bareilly',
  timezone: 'Asia/Kolkata',
  email: 'ayushguptavector@gmail.com',
  portrait: '/images/portrait.jpg',
  available: true,
  intro: 'I work in banking and finance, with a second life in cloud and DevOps. KYC, credit and portfolios by day; Terraform, dashboards and a spreadsheet that reconciles when the day is done.',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayush-gupta-31182a196' },
    { label: 'Email', href: 'mailto:ayushguptavector@gmail.com' },
  ],
  marquee: ['AML and KYC', 'Banking operations', 'Financial analysis', 'Risk and credit', 'Power BI and Tableau', 'Terraform', 'Cloud and DevOps'],
}

export interface Project {
  slug: string
  title: string
  client: string
  category: string
  year: string
  cover: string
  tint: string
  summary: string
  role: string[]
  deliverables: string[]
  link?: string
  body: string[]
  size: 'large' | 'small'
}

export const projects: Project[] = [
  {
    slug: 'kyc-aml',
    title: 'KYC and AML at the counter',
    client: 'South Indian Bank',
    category: 'Compliance',
    year: '2026',
    cover: '/images/compliance.svg',
    tint: '#e6e9f5',
    summary: 'Identity, source of funds and sanctions checks on every account — done well enough that the queue keeps moving and the record still makes sense a year later.',
    role: ['Branch operations', 'Compliance', 'Documentation'],
    deliverables: ['KYC verification', 'AML monitoring', 'Audit-ready records'],
    body: [
      'Every account opened at the branch passes the same set of checks: identity, address, source of funds, and a name that has to come back clean against the sanction lists. Done badly it is a queue. Done well it is a few quiet minutes at the counter.',
      'My part is the paperwork and the judgement around it — reading documents that are almost right, knowing which gaps need a second signature, and keeping the record complete enough that an auditor can follow it a year later in Finacle without calling me.',
      'The habit I kept from engineering is the checklist. KYC and AML are two of the few places in banking where being boring is the correct outcome.',
    ],
    size: 'large',
  },
  {
    slug: 'branch-mis',
    title: 'Branch MIS',
    client: 'South Indian Bank',
    category: 'Reporting and analytics',
    year: '2026',
    cover: '/images/mis.svg',
    tint: '#efe4d8',
    summary: 'Turning a month of branch numbers into a weekly pack somebody actually reads, with the movement since last week instead of a wall of totals.',
    role: ['MIS reporting', 'Data analysis', 'Excel, Power BI'],
    deliverables: ['Weekly MIS pack', 'Performance dashboards', 'Trend analysis'],
    body: [
      'The branch generates numbers all month and reads them once. I build the weekly pack that changes that: deposits, advances, account openings, cross-sell and flagged exceptions on one page.',
      'Excel does most of the work; Power BI and Tableau handle the parts where a chart beats a table. The rule is that every figure in the pack traces back to its source report in two steps.',
      'Four branches in three states means four versions of the same problem, which is the best training for building a report that survives contact with a real branch.',
    ],
    size: 'small',
  },
  {
    slug: 'multi-cloud',
    title: 'Multi-cloud with Terraform',
    client: 'LinuxWorld Informatics',
    category: 'Infrastructure as code',
    year: '2021',
    cover: '/images/cloud.svg',
    tint: '#dbe0f5',
    summary: 'One Terraform codebase provisioning the same stack on AWS, Azure and OpenStack — and then a paper explaining it.',
    role: ['Terraform', 'AWS', 'OpenStack'],
    deliverables: ['Reusable IaC modules', 'Published paper', 'Working demo'],
    body: [
      'One codebase, three providers. The project provisions the same application stack on AWS, Azure and OpenStack — network, compute, storage, then Kubernetes on top — so the environment becomes a file rather than a set of console clicks.',
      'It became a paper: “Multi Cloud Infrastructure Automation using Terraform (IaC)”. Writing it down was the part that exposed how much of the setup I had been doing from memory.',
      'The useful lesson was not Terraform syntax but state. Once infrastructure is code, the plan is a document you can read before anything gets built.',
    ],
    size: 'small',
  },
  {
    slug: 'delivery-pipeline',
    title: 'Delivery pipeline',
    client: 'Oodles Technologies',
    category: 'Cloud and DevOps',
    year: '2022',
    cover: '/images/pipeline.svg',
    tint: '#e8e2d6',
    summary: 'Client infrastructure, containers and deployments — and being the person who gets called when a server is unwell.',
    role: ['DevOps consulting', 'Kubernetes', 'Monitoring'],
    deliverables: ['Dockerfiles and compose', 'EKS and ECS clusters', 'Prometheus and Grafana'],
    body: [
      'At Oodles Technologies I worked on client infrastructure: provisioning cloud resources, deploying applications, troubleshooting what was already running, and monitoring it before the client noticed.',
      'Day to day that meant Dockerfiles and compose files, Kubernetes clusters on EKS and ECS, database clusters across Postgres, MySQL, MongoDB and Redshift, and dashboards that told us about a problem early.',
      'The work taught me to write things down — runbooks, repository conventions, the reason a cluster is shaped the way it is — because the next person on call is usually you.',
    ],
    size: 'large',
  },
  {
    slug: 'cpbfi',
    title: 'CPBFI',
    client: 'Bajaj Finserv',
    category: 'Banking training',
    year: '2023',
    cover: '/images/cpbfi.svg',
    tint: '#d9e6dc',
    summary: 'A hundred days of structured BFSI training: banking products, insurance, financial concepts and the communication that sits between a customer and a form.',
    role: ['Trainee', 'BFSI fundamentals'],
    deliverables: ['Programme certification', 'Sales and service scenarios', 'HR workshop'],
    body: [
      'A hundred days of structured BFSI training with Bajaj Finserv: banking operations and products, insurance, financial concepts, and professional communication in the CAWS sessions.',
      'The programme ran on real scenarios rather than slides — a sales conversation, a difficult customer, an interview — and ended with an HR workshop and a post-assessment.',
      'It is where the banking vocabulary I use now came from, before I had a counter of my own.',
    ],
    size: 'small',
  },
  {
    slug: 'portfolio-reviews',
    title: 'Customer portfolio reviews',
    client: 'South Indian Bank',
    category: 'Wealth advisory',
    year: '2026',
    cover: '/images/portfolio.svg',
    tint: '#d8d4e4',
    summary: 'Sitting with a customer to look at what they hold, what it is for, and which product actually fits — before recommending anything.',
    role: ['Relationship management', 'Portfolio assessment', 'Product advisory'],
    deliverables: ['Portfolio reviews', 'Risk assessment', 'Wealth referrals'],
    body: [
      'A portfolio review is a conversation with a spreadsheet open: what the customer holds, what it is for, how much of it is locked in, and what happens if the rate moves.',
      'I assess the holdings, flag concentration and tenure mismatches, and recommend the product that fits the need rather than the one on the current incentive sheet. Loan documentation and credit evaluation run on the same muscle.',
      'The best reviews end with the customer understanding their own money slightly better. That is a low bar, and it is missed more often than it should be.',
    ],
    size: 'small',
  },
]

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)

export const services = [
  {
    title: 'Banking and compliance',
    body: 'Branch banking with the paperwork in order: KYC and AML checks, account servicing, cash operations, reconciliation and records an auditor can follow.',
  },
  {
    title: 'Financial analysis',
    body: 'Reading statements, assessing portfolios, evaluating credit and explaining the result in plain language — analysis that ends in a decision rather than a deck.',
  },
  {
    title: 'Data and reporting',
    body: 'MIS packs, dashboards and analysis in Excel, Power BI, Tableau, R and SPSS. Numbers arranged so that somebody can act on them.',
  },
  {
    title: 'Cloud and DevOps',
    body: 'Terraform, Docker, Kubernetes and monitoring. Infrastructure as code, pipelines that deploy the same way twice, systems that fail loudly instead of quietly.',
  },
]

export const certifications = [
  { title: 'Advanced Lean Six Sigma Yellow Belt', issuer: 'Certification' },
  { title: 'AI on AWS workshop', issuer: 'Mentored by Vimal Daga' },
  { title: 'Hybrid Multi Cloud', issuer: 'AWS, OpenStack, Terraform, Kubernetes' },
  { title: 'RHCSA v8 and Ansible', issuer: 'Red Hat official training, RH294' },
  { title: 'Stock Market', issuer: 'Certification' },
  { title: 'Human Resources Foundation', issuer: 'Certification' },
]

export const experience = [
  { period: '2025 to now', title: 'Probationary Officer, South Indian Bank', detail: 'Branch banking across Howrah, Prayagraj, Mehsana and Hyderabad' },
  { period: '2023', title: 'Marketing and Finance Intern, Tenhard India', detail: 'Lead generation, market research and sales support' },
  { period: '2023', title: 'CPBFI Trainee, Bajaj Finserv', detail: 'A hundred days of banking, insurance and financial products' },
  { period: '2021 to 2022', title: 'Associate Consultant, DevOps, Oodles Technologies', detail: 'Cloud infrastructure, Kubernetes, Docker and monitoring for client environments' },
  { period: '2020 to 2021', title: 'RHCSA and IIEC-RISE trainee, LinuxWorld Informatics', detail: 'RHEL 8, Python, Ansible and the first serious look at cloud' },
]

export const education = [
  { period: '2022 to 2024', title: 'MBA, Finance and Marketing', detail: 'Chandigarh University' },
  { period: '2017 to 2021', title: 'B.Tech, Computer Science Engineering', detail: 'IMS Engineering College, Ghaziabad' },
  { period: '2005 to 2017', title: 'Schooling, Physics, Chemistry, Maths', detail: 'Bishop Conrad Senior Secondary School, Bareilly' },
]
