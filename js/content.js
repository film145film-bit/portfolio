/**
 * ============================================================
 *  แก้ไขพอร์ตโฟลิโอตรงไฟล์นี้ได้เลย
 * ============================================================
 *
 *  เพิ่มเกียรติบัตร
 *  1) วางไฟล์รูป .jpg และ/หรือ .pdf ในโฟลเดอร์ assets/certificates/
 *  2) คัดลอก object ในอาร์เรย์ certificates ด้านล่าง แล้วแก้ค่า
 *
 *  เพิ่มผลงาน (โปรเจกต์)
 *  1) วางรูปในโฟลเดอร์ assets/projects/ (ถ้ามี)
 *  2) คัดลอก object ในอาร์เรย์ projects แล้วแก้ค่า
 *     ถ้ายังไม่มีลิงก์ ให้ใส่ "" ได้
 *
 *  ลิงก์รูปใช้ path แบบ relative เช่น "assets/certificates/xxx.jpg"
 */
window.SITE = {
  profile: {
    nameTh: "พัชรพล ไวโสภา",
    nameEn: "Patcharaphon Waisopha",
    role: "IT · Digital Government · AI",
    headline: "สร้างทักษะดิจิทัลให้พร้อมทำงานจริง ในยุคที่ AI และข้อมูลคือโครงสร้างขององค์กร",
    location: "Thailand",
    availability: "Open to IT opportunities",
    email: "",
    github: "",
    linkedin: "",
    resume: "",
  },

  nav: [
    { href: "#about", label: "เกี่ยวกับ" },
    { href: "#skills", label: "ทักษะ" },
    { href: "#certificates", label: "เกียรติบัตร" },
    { href: "#projects", label: "ผลงาน" },
    { href: "#contact", label: "ติดต่อ" },
  ],

  about: {
    kicker: "About",
    title: "โปรไฟล์สาย IT ที่โฟกัสทักษะดิจิทัล ธรรมาภิบาล AI และความเป็นส่วนตัวของข้อมูล",
    body: [
      "ผมพัฒนาตัวเองผ่านหลักสูตรของสำนักงานพัฒนารัฐบาลดิจิทัล (DGA) และสถาบันพัฒนาบุคลากรภาครัฐด้านดิจิทัล (TDGA) โดยเน้นทักษะที่ใช้ทำงานได้จริง ทั้งความฉลาดทางดิจิทัล การใช้เทคโนโลยี การกำกับดูแล AI จริยธรรม กฎหมายคุ้มครองข้อมูล และ Prompt Engineering",
      "เป้าหมายคือเป็นคนที่เชื่อมระหว่างเทคโนโลยีกับงานองค์กรได้ — เข้าใจเครื่องมือ เข้าใจความเสี่ยง และสื่อสารกับทีมได้อย่างชัดเจน",
    ],
  },

  stats: [
    { value: "6", label: "เกียรติบัตร TDGA" },
    { value: "11.5", label: "ชั่วโมงการเรียน" },
    { value: "2026", label: "อัปเดตล่าสุด" },
    { value: "AI + PDPA", label: "จุดโฟกัส" },
  ],

  skills: [
    {
      group: "Artificial Intelligence",
      items: ["Prompt Engineering", "AI Governance", "AI Ethics", "Leadership in the Age of AI"],
    },
    {
      group: "Digital Government",
      items: ["Digital Literacy", "Digital Technology", "e-Learning / TDGA", "Public-sector IT awareness"],
    },
    {
      group: "Trust & Compliance",
      items: ["PDPA", "Data Privacy", "Responsible AI", "Information security mindset"],
    },
    {
      group: "Core IT",
      items: ["Problem solving", "Documentation", "Continuous learning", "GitHub Pages / Web"],
    },
  ],

  certificates: [
    {
      id: "prompt-engineering",
      title: "เรียนรู้ Prompt Engineering สู่ความเป็นผู้เชี่ยวชาญ AI",
      titleEn: "Prompt Engineering for AI Expertise",
      issuer: "TDGA · DGA",
      category: "AI",
      date: "1 ก.ย. 2026",
      hours: "1 ชม. 30 นาที",
      image: "assets/certificates/prompt-engineering-thumb.jpg",
      fullImage: "assets/certificates/prompt-engineering.jpg",
      pdf: "assets/certificates/prompt-engineering.pdf",
    },
    {
      id: "ai-governance",
      title: "AI Governance & Ethics",
      titleEn: "หลักการจริยธรรม ธรรมาภิบาล และข้อกฎหมายในการประยุกต์ใช้ AI",
      issuer: "TDGA · DGA",
      category: "AI",
      date: "9 ก.ค. 2026",
      hours: "2 ชม.",
      image: "assets/certificates/ai-governance-thumb.jpg",
      fullImage: "assets/certificates/ai-governance.jpg",
      pdf: "assets/certificates/ai-governance.pdf",
    },
    {
      id: "leadership-ai",
      title: "Leadership in the Age of AI : ผู้นำในยุค AI",
      titleEn: "Leadership in the Age of AI",
      issuer: "TDGA · DGA",
      category: "Leadership",
      date: "1 ก.ย. 2026",
      hours: "2 ชม.",
      image: "assets/certificates/leadership-ai-thumb.jpg",
      fullImage: "assets/certificates/leadership-ai.jpg",
      pdf: "assets/certificates/leadership-ai.pdf",
    },
    {
      id: "pdpa",
      title: "กฎหมายคุ้มครองข้อมูลส่วนบุคคลสำหรับผู้ปฏิบัติงานภาครัฐ",
      titleEn: "PDPA for Government Officer",
      issuer: "TDGA · DGA",
      category: "PDPA",
      date: "1 ก.ย. 2026",
      hours: "2 ชม.",
      image: "assets/certificates/pdpa-thumb.jpg",
      fullImage: "assets/certificates/pdpa.jpg",
      pdf: "assets/certificates/pdpa.pdf",
    },
    {
      id: "digital-technology",
      title: "ความเข้าใจและการใช้เทคโนโลยีดิจิทัลอย่างมีประสิทธิภาพ",
      titleEn: "Understanding and Using Digital Technology",
      issuer: "TDGA · DGA",
      category: "Digital",
      date: "1 ก.ย. 2026",
      hours: "2 ชม. 30 นาที",
      image: "assets/certificates/digital-technology-thumb.jpg",
      fullImage: "assets/certificates/digital-technology.jpg",
      pdf: "assets/certificates/digital-technology.pdf",
    },
    {
      id: "digital-literacy",
      title: "Digital Literacy : ความฉลาดทางดิจิทัล",
      titleEn: "Digital Intelligence",
      issuer: "TDGA · DGA",
      category: "Digital",
      date: "6 ก.ค. 2026",
      hours: "1 ชม. 30 นาที",
      image: "assets/certificates/digital-literacy-thumb.jpg",
      fullImage: "assets/certificates/digital-literacy.jpg",
      pdf: "assets/certificates/digital-literacy.pdf",
    },
  ],

  projects: [
    {
      title: "Personal IT Portfolio",
      year: "2026",
      tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      summary:
        "เว็บพอร์ตโฟลิโอส่วนตัวแบบ static โทนสาย IT ใช้ไฟล์คอนเทนต์เดียวในการอัปเดตเกียรติบัตรและผลงาน พร้อม lightbox และโหมดดูเกียรติบัตรเต็มใบ",
      image: "",
      links: {
        live: "#",
        github: "",
      },
    },
    /*
    {
      title: "ชื่อโปรเจกต์",
      year: "2026",
      tags: ["Python", "Web"],
      summary: "อธิบายสั้น ๆ ว่าทำอะไร ใช้เทคโนโลยีอะไร และผลลัพธ์คืออะไร",
      image: "assets/projects/example.jpg",
      links: {
        live: "https://...",
        github: "https://github.com/..."
      }
    }
    */
  ],

  contact: {
    title: "พร้อมคุยเรื่องงาน IT, ดิจิทัล และการเรียนรู้ต่อเนื่อง",
    note: "ใส่ลิงก์ GitHub / อีเมล ใน js/content.js แล้วปุ่มด้านล่างจะโชว์เอง",
  },
};
