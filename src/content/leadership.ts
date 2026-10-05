export type Leader = {
  name: string
  role: string
  image: string
  email?: string
  bio: string[]
}

export const leaders: Leader[] = [
  {
    name: 'Dunstan Guba',
    role: 'Director, VAPT & Forensic Expert',
    image: '/images/team/dunstan-guba.webp',
    email: 'dunstan@maddygroupltd.com',
    bio: [
      'Dunstan leads vulnerability assessment, penetration testing and digital forensics work. Certifications include CEH, OSCP and CHFI.',
    ],
  },
  {
    name: 'Dr. George Anim',
    role: 'Director, Artificial Intelligence & Data Science',
    image: '/images/team/george-anim.webp',
    bio: [
      'Dr. George Anim is an Artificial Intelligence expert, data scientist, and technology strategist with a Ph.D. in Computer Science.',
    ],
  },
  {
    name: 'Kojo Harding Mienza',
    role: 'Director, Cybersecurity & Cyber Defense',
    image: '/images/team/kojo-harding-mienza.webp',
    bio: [
      'Kojo Mienza is a cybersecurity expert with over nine years of experience protecting organizations from cyber threats. He has worked with major companies and government agencies, including Microsoft, the National Institutes of Health, and the U.S. Commodity Futures Trading Commission.',
      'At Microsoft, Kojo was a founding member of a team that worked to stop ransomware attacks around the world. He helped track down criminals who used ransomware to steal money, and his work supported cases with the FBI, U.S. Secret Service, and Interpol. He also helped shut down thousands of servers used by hackers.',
      'Kojo has led security teams, developed security architecture, built detection tools using Python and Java, and trained dozens of security analysts. He is skilled at finding threats before they cause harm, and he has experience with tools used to track stolen cryptocurrency, analyze malware, and monitor networks for attacks.',
      'He also works as a security consultant for start-up companies, helping them build strong security plans from the ground up.',
      'Kojo holds CompTIA A+ and Security+ certifications, along with training in Python, SQL, and blockchain technology. He studied at Ohio State University and Montgomery College.',
      'Today, Kojo helps businesses build strong defenses against cyberattacks and protect what matters most: their people, their data, and their future.',
    ],
  },
  {
    name: 'Naa Koshie Wellington',
    role: 'Customer Success Specialist',
    image: '/images/team/naa-koshie-wellington.webp',
    bio: ['Naa Koshie supports clients as Customer Success Specialist at Maddy Group.'],
  },
  {
    name: 'Agyare Fredrick',
    role: 'Principal Software Engineer / Cloud Engineer',
    image: '/images/team/fred.webp',
    email: 'fredrick@maddygroupltd.com',
    bio: [
      'Fredrick focuses on cloud engineering across major platforms. Certifications include AWS SAA and Azure Expert pathways.',
    ],
  },
  {
    name: 'Ebenezer Kwafo',
    role: 'Incident response',
    image: '/images/team/ebenezer-kwafo.webp',
    email: 'ebenezer@maddygroupltd.com',
    bio: ['Ebenezer leads incident response work. Certifications include GCIH, GCFE and CEH.'],
  },
  {
    name: 'Richard Acheampong',
    role: 'Software Developer',
    image: 'https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/team5.jpg',
    email: 'richard@maddygroupltd.com',
    bio: [
      'Richard builds software and AI engineering solutions for client and internal products. Background spans full stack and ML engineering.',
    ],
  },
]
