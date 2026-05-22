export interface ExperienceItem {
  company: string
  badge: string
  role: string
  duration: string
  responsibilities: string[]
}

export const experienceData: ExperienceItem[] = [
  {
    company: "Digio (Thailand) Co., Ltd.",
    badge: "Internship",
    role: "Web Developer Intern",
    duration: "Apr 2025 - Oct 2025",
    responsibilities: [
      "Assisted in maintaining the <strong>SCB Planet X</strong> admin portal by implementing features and resolving defects based on client requirements.",
      "Developed unit tests using <strong>Jest</strong> to ensure code quality while actively studying the existing project architecture.",
      "Integrated <strong>DigiPay</strong> (payment gateway) into the DigiShop project to handle secure payment flows.",
      "Studied financial payment workflows to design and successfully implement solutions on personal projects.",
    ],
  },
]
