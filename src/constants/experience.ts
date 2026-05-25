export interface ExperienceItem {
  company: string
  badge: { en: string; th: string }
  role: { en: string; th: string }
  duration: { en: string; th: string }
  responsibilities: { en: string[]; th: string[] }
}

export const experienceData: ExperienceItem[] = [
  {
    company: "Digio (Thailand) Co., Ltd.",
    badge: { en: "Internship", th: "ฝึกงาน" },
    role: { en: "Web Developer Intern", th: "นักศึกษาฝึกงานตำแหน่ง Web Developer" },
    duration: { en: "Apr 2025 - Oct 2025", th: "เม.ย. 2025 - ต.ค. 2025" },
    responsibilities: {
      en: [
        "Assisted in maintaining the <strong>SCB Planet X</strong> admin portal by implementing features and resolving defects based on client requirements.",
        "Developed unit tests using <strong>Jest</strong> to ensure code quality while actively studying the existing project architecture.",
        "Integrated <strong>DigiPay</strong> (payment gateway) into the DigiShop project to handle secure payment flows.",
        "Studied financial payment workflows to design and successfully implement solutions on personal projects.",
      ],
      th: [
        "ทำงานร่วมกับทีมในการดูแลพอร์ทัลผู้ดูแลระบบ <strong>SCB Planet X</strong> โดยพัฒนาฟีเจอร์และแก้ไขข้อผิดพลาดตามความต้องการของลูกค้า",
        "เขียน Unit Tests ด้วย <strong>Jest</strong> เพื่อความถูกต้องในการทำงานของโค้ด พร้อมทั้งเรียนรู้สถาปัตยกรรมของโครงการจริง",
        "นำระบบช่องทางชำระเงิน <strong>DigiPay</strong> ไปต่อเข้ากับระบบ DigiShop เพื่อพัฒนาฟังก์ชันการชำระเงินและการขอเงินคืนในระบบ",
        "ศึกษาแนวทางการทำงานของระบบธุรกรรมทางการเงิน เพื่อนำความรู้มาออกแบบและพัฒนาบนโปรเจกต์ส่วนตัว",
      ],
    },
  },
]
