export interface Certification {
  name: string
  issuer: string
  year: string
}

export interface LanguageEntry {
  name: string
  level: string
}

export const certifications: Certification[] = [
  { name: 'AWS Academy Cloud Foundations', issuer: 'Amazon Web Services', year: '2025' },
  { name: 'Cisco CCNA', issuer: 'Coursework completed', year: '2025' },
]

export const languages: LanguageEntry[] = [
  { name: 'English', level: 'Fluent' },
  { name: 'Finnish', level: 'Basic (A2.1)' },
  { name: 'Burmese', level: 'Native' },
]
