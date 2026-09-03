export interface Certification {
  name: string
  issuer: string
  year: string
}

export interface LanguageEntry {
  name: string
  level: string
}

export const education: Certification[] = [
  {
    name: 'BBA, Business Information Technology',
    issuer:
      'Haaga-Helia University of Applied Sciences · Major: ICT Infrastructures and Cloud Services · 210 ECTS, average 3.97 / 5',
    year: '2026',
  },
  // Deliberate wording: this is university coursework structured around the CISSP
  // domains, NOT the (ISC)² CISSP certification. Do not shorten it to "CISSP".
  {
    name: 'Information security coursework based on the CISSP domains',
    issuer: '8 ECTS, Metropolia UAS',
    year: '2025',
  },
]

export const certifications: Certification[] = [
  { name: 'AWS Academy Cloud Foundations', issuer: 'Amazon Web Services', year: '2025' },
  { name: 'Cisco CCNA', issuer: 'Coursework completed', year: '2025' },
]

export const languages: LanguageEntry[] = [
  { name: 'English', level: 'Fluent' },
  { name: 'Finnish', level: 'Basic (A2.1)' },
  { name: 'Burmese', level: 'Native' },
]
