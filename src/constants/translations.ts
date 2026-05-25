export type Language = "en" | "th"

export const COMMON_TRANSLATIONS: Record<string, Record<Language, string>> = {
  // Navbar
  nav_about: { en: "About", th: "เกี่ยวกับฉัน" },
  nav_experience: { en: "Experience", th: "ประสบการณ์" },
  nav_projects: { en: "Projects", th: "ผลงาน" },
  nav_skills: { en: "Tech Stack", th: "เทคโนโลยี" },
  nav_contact: { en: "Contact Me", th: "ติดต่อฉัน" },

  // Hero Section
  hero_title: { en: "Hi, I'm Wissanu Rayayoi", th: "สวัสดีครับ ผมวิษณุ รายาย้อย" },
  hero_subtitle: { en: "Software Engineer", th: "วิศวกรซอฟต์แวร์" },
  hero_desc: {
    en: "Computer Engineering graduate from Khon Kaen University. Interested in <strong>backend development</strong> and <strong>distributed systems</strong>. A disciplined, detail-oriented individual who takes full ownership of work and approaches challenges with a logical mindset. Ready to adapt and collaborate to support system development.",
    th: "สำเร็จการศึกษาจากสาขาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น มีความสนใจในด้านการพัฒนา <strong>Backend</strong> และ <strong>Distributed Systems</strong> เป็นคนที่มีวินัย ใส่ใจรายละเอียด พร้อมรับผิดชอบงานอย่างเต็มที่และเผชิญหน้ากับความท้าทายด้วยกระบวนการคิดอย่างเป็นระบบ พร้อมเรียนรู้และร่วมมือกับทีมเพื่อขับเคลื่อนระบบให้ก้าวหน้า",
  },
  hero_btn_projects: { en: "Explore Projects", th: "ดูผลงาน" },
  hero_btn_contact: { en: "Contact Details", th: "ข้อมูลติดต่อ" },

  // Experience Section
  exp_title: { en: "Professional Experience", th: "ประสบการณ์การทำงาน" },
  exp_intern_badge: { en: "Internship", th: "ฝึกงาน" },

  // Projects Section
  proj_title: { en: "Selected Projects", th: "ผลงานที่ผ่านการคัดสรร" },
  proj_btn_demo: { en: "Live Demo", th: "เดโมจริง" },
  proj_btn_video: { en: "Demo Video", th: "วิดีโอเดโม" },
  proj_btn_view_repo: { en: "View Repository", th: "ดูซอร์สโค้ด" },
  proj_btn_other: { en: "Browse Other Projects", th: "ดูผลงานอื่น ๆ" },
  proj_leveraged: { en: "Technologies Leveraged", th: "เทคโนโลยีที่เลือกใช้" },
  proj_problem: { en: "The Problem & Challenge", th: "ปัญหาและความท้าทาย" },
  proj_solution: { en: "The Engineering Solution", th: "แนวทางแก้ไขทางวิศวกรรม" },
  proj_architecture: { en: "Technical System Architecture", th: "สถาปัตยกรรมทางเทคนิคของระบบ" },
  proj_highlights: { en: "Key System Highlights", th: "จุดเด่นหลักของระบบ" },
  proj_footer_cta: {
    en: "Want to inspect the codebase or demo?",
    th: "ต้องการตรวจสอบซอร์สโค้ดหรือเดโมไหม?",
  },
  proj_footer_desc: {
    en: "All systems are fully functional. Explore the source repositories on GitHub, or access the active deployment directly.",
    th: "ทุกระบบสามารถทำงานได้จริง คุณสามารถเข้าไปสำรวจที่เก็บซอร์สโค้ดใน GitHub หรือเข้าใช้งานเดโมที่เปิดใช้งานอยู่ได้โดยตรง",
  },
  proj_back_to_projects: { en: "Back to Projects", th: "กลับไปหน้าผลงาน" },
  proj_released: { en: "Released", th: "เผยแพร่ปี" },

  // Skills Section
  skills_title: { en: "Core Technical Skills", th: "ทักษะทางเทคนิคหลัก" },

  // Additional Info Section
  info_title: { en: "Additional Information", th: "ข้อมูลเพิ่มเติม" },
  info_education: { en: "Education", th: "การศึกษา" },
  info_languages: { en: "Languages", th: "ทักษะภาษา" },
  info_native: { en: "Native", th: "เจ้าของภาษา" },
  info_intermediate: { en: "Intermediate", th: "ระดับกลาง" },
  info_beginner: { en: "Beginner", th: "ระดับเริ่มต้น" },

  // Contact Section
  contact_title: { en: "Get In Touch", th: "ติดต่อฉัน" },
  contact_name_label: { en: "Your Full Name", th: "ชื่อ-นามสกุลของคุณ" },
  contact_email_label: { en: "Your Email Address", th: "อีเมลของคุณ" },
  contact_msg_label: { en: "Your Message Detail", th: "รายละเอียดข้อความ" },
  contact_btn_send: { en: "Send Message", th: "ส่งข้อความ" },
  contact_btn_sending: { en: "Sending...", th: "กำลังส่ง..." },
  contact_success: {
    en: "Thank you! Message sent successfully.",
    th: "ขอบคุณครับ! ส่งข้อความเรียบร้อยแล้ว",
  },
  contact_error: {
    en: "Oops! Something went wrong, please try again.",
    th: "ขออภัย! มีข้อผิดพลาดบางอย่าง กรุณาลองใหม่อีกครั้ง",
  },
}
