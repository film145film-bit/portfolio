/**
 * ============================================================
 *  แก้ไขพอร์ตโฟลิโอตรงไฟล์นี้ได้เลย
 * ============================================================
 *
 *  เพิ่มเกียรติบัตร
 *  1) วางไฟล์รูป .jpg และ/หรือ .pdf ในโฟลเดอร์ assets/certificates/
 *  2) คัดลอก object ในอาร์เรย์ certificates ด้านล่าง แล้วแก้ค่า
 *
 *  เพิ่มรายวิชา / ความสามารถ
 *  คัดลอก object ในอาร์เรย์ courses แล้วแก้ค่า
 *  category ใช้เป็นปุ่มกรอง: ซอฟต์แวร์, ข้อมูลและ AI, ระบบและฮาร์ดแวร์, วิชาชีพ, ปฏิบัติจริง
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
    role: "นักศึกษาเทคโนโลยีสารสนเทศ",
    headline: "วิทยาลัยเทคนิคเลย · สาย IT ที่เรียนครบทั้งซอฟต์แวร์ ระบบ ข้อมูล และทักษะวิชาชีพ",
    location: "เลย, ประเทศไทย",
    availability: "พร้อมรับงานและโอกาสด้านไอที",
    email: "film145.film@gmail.com",
    line: "0986426895",
    phone: "0830312766",
    github: "https://github.com/film145film-bit",
    photo: "assets/profile.jpg",
    linkedin: "",
    resume: "",
  },

  nav: [
    { href: "#about", label: "เกี่ยวกับ" },
    { href: "#internships", label: "ฝึกงาน" },
    { href: "#skills", label: "ทักษะ" },
    { href: "#courses", label: "รายวิชา" },
    { href: "#certificates", label: "เกียรติบัตร" },
    { href: "#projects", label: "ผลงาน" },
    { href: "#contact", label: "ติดต่อ" },
  ],

  about: {
    kicker: "About",
    title: "โปรไฟล์สาย IT ที่เรียนครบทั้งซอฟต์แวร์ ข้อมูล ระบบ และทักษะวิชาชีพ",
    body: [
      "ผมเรียนสายเทคโนโลยีสารสนเทศแบบลงมือทำ ครอบคลุม Front-End, Back-End, ฐานข้อมูล, เครือข่าย, เซิร์ฟเวอร์, มือถือ, DevOps และโครงงานจริง รวมถึงเกียรติบัตรจากสำนักงานพัฒนารัฐบาลดิจิทัล (DGA) และสถาบันพัฒนาบุคลากรภาครัฐด้านดิจิทัล (TDGA)",
      "มีประสบการณ์ฝึกงาน 2 แห่ง: ระดับ ปวช.3 ที่โรงพยาบาลเลย และระดับ ปวส.1 ที่สำนักงานสาธารณสุขจังหวัดเลย โดยทำเว็บบันทึก/จัดการการฝึกงานเอง",
      "เป้าหมายคือเป็นคนที่เชื่อมเทคโนโลยีกับงานองค์กรได้ — เขียนโปรแกรมได้ แก้ระบบได้ เข้าใจข้อมูล กฎหมาย และสื่อสารกับทีมได้ชัดเจน",
    ],
  },

  stats: [
    { value: "2", label: "แห่งฝึกงาน" },
    { value: "37", label: "รายวิชาเรียน" },
    { value: "6", label: "เกียรติบัตร TDGA" },
    { value: "Full-stack", label: "ซอฟต์แวร์ + ระบบ" },
  ],

  skills: [
    {
      group: "Software",
      items: ["Front-End", "Back-End", "OOP / OOAD", "Mobile & Hybrid", "UI Design", "DevOps"],
    },
    {
      group: "Data & AI",
      items: ["Database / SQL", "Big Data", "Data analysis", "Object detection", "Prompt Engineering", "AI Governance"],
    },
    {
      group: "Infrastructure",
      items: ["Network", "Server OS", "IoT", "Hardware maintenance", "IT support", "Electronics basics"],
    },
    {
      group: "Professional",
      items: ["IT Law / PDPA", "Technical English", "QA / Quality", "Helpdesk", "Entrepreneurship", "Teamwork"],
    },
  ],

  courses: [
    {
      title: "การพัฒนาซอฟต์แวร์ด้วยเทคโนโลยี Front-End",
      titleEn: "Front-End Software Development",
      category: "ซอฟต์แวร์",
      outcome: "สร้างหน้าเว็บที่ผู้ใช้เห็นและกดได้จริงด้วย HTML CSS JavaScript และทำให้งานรองรับมือถือ",
      gains: ["HTML", "CSS", "JavaScript", "Responsive"],
    },
    {
      title: "การพัฒนาซอฟต์แวร์ด้วยเทคโนโลยี Back-End",
      titleEn: "Back-End Software Development",
      category: "ซอฟต์แวร์",
      outcome: "สร้างฝั่งเซิร์ฟเวอร์ เขียน API และเชื่อมฐานข้อมูล ให้เว็บหรือแอปทำงานด้านหลังได้",
      gains: ["API", "Server", "Database"],
    },
    {
      title: "การพัฒนาซอฟต์แวร์เชิงวัตถุ",
      titleEn: "Object-Oriented Software Development",
      category: "ซอฟต์แวร์",
      outcome: "เขียนโปรแกรมด้วยคลาส ออบเจ็กต์ และการสืบทอด ทำให้โค้ดเป็นระบบและขยายต่อได้",
      gains: ["OOP", "Classes", "Reusable code"],
    },
    {
      title: "การวิเคราะห์และออกแบบระบบเชิงวัตถุ",
      titleEn: "Object-Oriented Analysis and Design",
      category: "ซอฟต์แวร์",
      outcome: "วิเคราะห์ความต้องการ วาดแบบระบบด้วย OOP/UML ก่อนลงมือเขียนโค้ด ลดการแก้ผิดตอนท้าย",
      gains: ["UML", "Requirements", "System design"],
    },
    {
      title: "การออกแบบส่วนติดต่อผู้ใช้ขั้นสูง",
      titleEn: "Advanced User Interface Design",
      category: "ซอฟต์แวร์",
      outcome: "ออกแบบหน้าจอให้ใช้งานง่าย จัดลำดับข้อมูลและปุ่มกดให้ผู้ใช้ทำงานได้เร็วขึ้น",
      gains: ["UI", "UX", "Wireframe"],
    },
    {
      title: "การพัฒนาซอฟต์แวร์สำหรับอุปกรณ์เคลื่อนที่",
      titleEn: "Mobile Software Development",
      category: "ซอฟต์แวร์",
      outcome: "พัฒนาแอปบนมือถือให้มีฟังก์ชันหลัก ใช้งานบนหน้าจอเล็กได้จริง",
      gains: ["Mobile app", "Android/iOS", "Touch UI"],
    },
    {
      title: "การพัฒนาไฮบริดแอปพลิเคชัน",
      titleEn: "Hybrid Application Development",
      category: "ซอฟต์แวร์",
      outcome: "สร้างแอปชุดเดียวให้รันได้หลายแพลตฟอร์ม ลดเวลาพัฒนาซ้ำบน iOS และ Android",
      gains: ["Cross-platform", "Hybrid app"],
    },
    {
      title: "การพัฒนาซอฟต์แวร์รูปแบบเดฟออปส์ (DevOps)",
      titleEn: "DevOps Software Development",
      category: "ซอฟต์แวร์",
      outcome: "เข้าใจการส่งงานแบบต่อเนื่อง ทดสอบอัตโนมัติ และทำงานร่วมกันระหว่างทีมพัฒนาและปฏิบัติการ",
      gains: ["CI/CD", "Automation", "Release"],
    },
    {
      title: "การสร้างสื่อดิจิทัล",
      titleEn: "Digital Media Creation",
      category: "ซอฟต์แวร์",
      outcome: "ผลิตสื่อภาพ วิดีโอ และกราฟิก สำหรับเว็บ งานนำเสนอ และช่องทางออนไลน์",
      gains: ["Graphic", "Video", "Content"],
    },
    {
      title: "เทคโนโลยีการจัดการฐานข้อมูล",
      titleEn: "Database Management Technology",
      category: "ข้อมูลและ AI",
      outcome: "ออกแบบตารางข้อมูล เขียน SQL เพิ่ม-ลบ-แก้ไข-ค้นหา และสำรองข้อมูลได้อย่างเป็นระบบ",
      gains: ["SQL", "Schema", "CRUD"],
    },
    {
      title: "การจัดการข้อมูลขนาดใหญ่เบื้องต้น",
      titleEn: "Introduction to Big Data Management",
      category: "ข้อมูลและ AI",
      outcome: "เข้าใจลักษณะข้อมูลขนาดใหญ่ รู้แนวทางเก็บ ประมวลผล และวิเคราะห์เบื้องต้น",
      gains: ["Big Data", "Processing", "Analytics"],
    },
    {
      title: "การวิเคราะห์และนำเสนอข้อมูล",
      titleEn: "Data Analysis and Presentation",
      category: "ข้อมูลและ AI",
      outcome: "แปลงข้อมูลดิบเป็นกราฟและรายงานที่ทีมหรือผู้บริหารอ่านแล้วตัดสินใจได้",
      gains: ["Visualization", "Reporting", "Insight"],
    },
    {
      title: "โปรแกรมการตรวจจับวัตถุ",
      titleEn: "Object Detection Programming",
      category: "ข้อมูลและ AI",
      outcome: "เขียนโปรแกรมตรวจจับวัตถุจากภาพด้วยแนวคิดคอมพิวเตอร์วิทัศน์และ AI",
      gains: ["Computer vision", "AI", "Image processing"],
    },
    {
      title: "การจัดการระบบเครือข่าย",
      titleEn: "Network Systems Management",
      category: "ระบบและฮาร์ดแวร์",
      outcome: "วาง ตั้งค่า และแก้ปัญหาเครือข่าย ให้เครื่องเชื่อมต่อและสื่อสารกันได้อย่างมั่นคง",
      gains: ["Networking", "TCP/IP", "Admin"],
    },
    {
      title: "ระบบปฏิบัติการเครื่องแม่ข่าย",
      titleEn: "Server Operating Systems",
      category: "ระบบและฮาร์ดแวร์",
      outcome: "ติดตั้ง ตั้งค่า และดูแลเซิร์ฟเวอร์ให้บริการรันได้อย่างต่อเนื่อง เช่น Linux หรือ Windows Server",
      gains: ["Linux/Windows Server", "Sysadmin"],
    },
    {
      title: "การประยุกต์ใช้ระบบไอโอทีในชีวิตประจำวัน",
      titleEn: "IoT Systems in Daily Life",
      category: "ระบบและฮาร์ดแวร์",
      outcome: "เข้าใจเซนเซอร์ อุปกรณ์เชื่อมต่อเน็ต และออกแบบระบบอัตโนมัติพื้นฐานได้",
      gains: ["IoT", "Sensors", "Automation"],
    },
    {
      title: "การซ่อมบำรุงเครื่องคอมพิวเตอร์และอุปกรณ์ต่อพ่วง",
      titleEn: "Computer and Peripheral Maintenance",
      category: "ระบบและฮาร์ดแวร์",
      outcome: "ตรวจ ประกอบ ซ่อม และบำรุงคอมพิวเตอร์กับอุปกรณ์ต่อพ่วงให้พร้อมใช้งาน",
      gains: ["Hardware", "Repair", "Setup"],
    },
    {
      title: "การให้ความช่วยเหลือและแก้ปัญหาด้านระบบเทคโนโลยีสารสนเทศ",
      titleEn: "IT Support and Troubleshooting",
      category: "ระบบและฮาร์ดแวร์",
      outcome: "รับปัญหาจากผู้ใช้ วิเคราะห์สาเหตุ และกู้ระบบไอทีให้กลับมาทำงานได้",
      gains: ["Helpdesk", "Troubleshooting", "Support"],
    },
    {
      title: "วิทยาศาสตร์งานอาชีพไฟฟ้า อิเล็กทรอนิกส์ และการสื่อสาร",
      titleEn: "Science for Electrical, Electronics and Communication",
      category: "ระบบและฮาร์ดแวร์",
      outcome: "เข้าใจไฟฟ้า อิเล็กทรอนิกส์ และการสื่อสาร ซึ่งเป็นฐานของฮาร์ดแวร์และเครือข่าย",
      gains: ["Electronics", "Circuits", "Communication"],
    },
    {
      title: "การประยุกต์ใช้เทคโนโลยีดิจิทัลในอาชีพ",
      titleEn: "Digital Technology in Careers",
      category: "ระบบและฮาร์ดแวร์",
      outcome: "เลือกเครื่องมือดิจิทัลมาช่วยงานจริง ลดงานซ้ำ และทำงานร่วมกันออนไลน์ได้",
      gains: ["Digital tools", "Productivity"],
    },
    {
      title: "กฎหมายในงานอาชีพอุตสาหกรรมดิจิทัลและเทคโนโลยีสารสนเทศ",
      titleEn: "Laws in Digital Industry and IT",
      category: "วิชาชีพ",
      outcome: "รู้กรอบกฎหมายไอที ลิขสิทธิ์ และข้อมูลส่วนบุคคล เพื่อทำงานโดยไม่ละเมิดกฎหมาย",
      gains: ["IT Law", "PDPA", "Compliance"],
    },
    {
      title: "ภาษาอังกฤษสำหรับงานอาชีพ",
      titleEn: "English for Careers",
      category: "วิชาชีพ",
      outcome: "อ่านเอกสารงาน เขียนอีเมล และสื่อสารพื้นฐานในที่ทำงานเป็นภาษาอังกฤษได้",
      gains: ["Workplace English"],
    },
    {
      title: "ภาษาอังกฤษสำหรับงานอุตสาหกรรมดิจิทัลและเทคโนโลยีสารสนเทศ",
      titleEn: "English for Digital Industry and IT",
      category: "วิชาชีพ",
      outcome: "อ่านสเปก เอกสารเทคนิค และใช้ศัพท์ไอทีเป็นภาษาอังกฤษได้",
      gains: ["Technical English", "Documentation"],
    },
    {
      title: "การเขียนและการนำเสนอโครงงานภาษาอังกฤษ",
      titleEn: "English Project Writing and Presentation",
      category: "วิชาชีพ",
      outcome: "เขียนรายงานโครงงานและพรีเซนต์งานเป็นภาษาอังกฤษได้",
      gains: ["Technical writing", "Presentation"],
    },
    {
      title: "ทักษะภาษาไทยเพื่อการสื่อสารในงานอาชีพ",
      titleEn: "Thai for Professional Communication",
      category: "วิชาชีพ",
      outcome: "เขียนรายงาน จดหมายราชการ และนำเสนองานวิชาชีพได้ชัดเจน",
      gains: ["Workplace Thai", "Reporting"],
    },
    {
      title: "องค์การและการบริหารงานคุณภาพ",
      titleEn: "Organization and Quality Management",
      category: "วิชาชีพ",
      outcome: "เข้าใจโครงสร้างองค์กร มาตรฐานคุณภาพ และการตรวจงานให้ได้ตามเกณฑ์",
      gains: ["QA", "Process", "Quality"],
    },
    {
      title: "การเป็นผู้ประกอบการ",
      titleEn: "Entrepreneurship",
      category: "วิชาชีพ",
      outcome: "มองโจทย์เป็นธุรกิจ วางโมเดลรายได้ และนำไอทีไปสร้างบริการได้",
      gains: ["Business model", "Startup"],
    },
    {
      title: "สังคมไทยในยุคดิจิทัล",
      titleEn: "Thai Society in the Digital Age",
      category: "วิชาชีพ",
      outcome: "เข้าใจผลกระทบของดิจิทัลต่อสังคม จริยธรรมออนไลน์ และความเป็นพลเมืองดิจิทัล",
      gains: ["Digital citizenship", "Ethics"],
    },
    {
      title: "แคลคูลัส 1",
      titleEn: "Calculus 1",
      category: "วิชาชีพ",
      outcome: "ใช้คณิตศาสตร์คิดวิเคราะห์ปัญหา เป็นฐานสำหรับงานโปรแกรม ข้อมูล และอัลกอริทึม",
      gains: ["Analytical thinking", "Math"],
    },
    {
      title: "นันทนาการเพื่อพัฒนาคุณภาพชีวิต",
      titleEn: "Recreation for Quality of Life",
      category: "วิชาชีพ",
      outcome: "วางแผนกิจกรรม ทำงานเป็นทีม และรักษาสมดุลชีวิต-งานได้ดีขึ้น",
      gains: ["Teamwork", "Well-being"],
    },
    {
      title: "กิจกรรมเสริมสร้างสุจริต จิตอาสา",
      titleEn: "Integrity and Volunteerism",
      category: "วิชาชีพ",
      outcome: "ทำงานด้วยความซื่อสัตย์ รับผิดชอบต่อส่วนรวม และร่วมกิจกรรมจิตอาสาได้",
      gains: ["Ethics", "Responsibility"],
    },
    {
      title: "โครงงานด้านเทคโนโลยีสารสนเทศ 1",
      titleEn: "Information Technology Project 1",
      category: "ปฏิบัติจริง",
      outcome: "ทำโครงงานไอทีตั้งแต่คิดโจทย์ วางแผน จนได้ต้นแบบที่ใช้งานได้",
      gains: ["Project", "SDLC", "Prototype"],
    },
    {
      title: "โครงงานด้านเทคโนโลยีสารสนเทศ 2",
      titleEn: "Information Technology Project 2",
      category: "ปฏิบัติจริง",
      outcome: "ปิดงานโครงงานให้สมบูรณ์ ทดสอบ นำเสนอ และพร้อมโชว์เป็นผลงาน",
      gains: ["Capstone", "Delivery", "Demo"],
    },
    {
      title: "กิจกรรมในสถานประกอบการ 1",
      titleEn: "Workplace Practicum 1",
      category: "ปฏิบัติจริง",
      outcome: "ทำงานในสถานประกอบการจริง เรียนรู้วัฒนธรรมองค์กร และเอาทักษะไอทีไปใช้หน้างาน",
      gains: ["Internship", "Workplace"],
    },
    {
      title: "กิจกรรมองค์การวิชาชีพ 1",
      titleEn: "Professional Organization Activities 1",
      category: "ปฏิบัติจริง",
      outcome: "ทำงานร่วมกับเพื่อนร่วมวิชาชีพ วางแผนกิจกรรม และสื่อสารในทีมได้",
      gains: ["Teamwork", "Networking"],
    },
    {
      title: "กิจกรรมองค์การวิชาชีพ 2",
      titleEn: "Professional Organization Activities 2",
      category: "ปฏิบัติจริง",
      outcome: "รับบทบาทในทีมมากขึ้น วางแผนกิจกรรมวิชาชีพ และประสานงานได้คล่องขึ้น",
      gains: ["Collaboration", "Coordination"],
    },
    {
      title: "กิจกรรมองค์การวิชาชีพ 3",
      titleEn: "Professional Organization Activities 3",
      category: "ปฏิบัติจริง",
      outcome: "นำทีมหรือขับเคลื่อนกิจกรรมวิชาชีพได้ และมีเครือข่ายในสายงานมากขึ้น",
      gains: ["Leadership", "Professional network"],
    },
  ],

  internships: [
    {
      level: "ปวส.1",
      org: "สำนักงานสาธารณสุขจังหวัดเลย",
      role: "นักศึกษาฝึกงานแผนก IT · วิทยาลัยเทคนิคเลย",
      year: "2025–2026",
      site: "InternPro — ระบบจัดการและบันทึกการฝึกงาน",
      summary:
        "สร้างเว็บ InternPro สำหรับลงเวลา Check In/Out, บันทึกงานรายวัน, อัปโหลดผลงาน และดูแดชบอร์ดสรุปชั่วโมงฝึกงาน ใช้ HTML CSS JavaScript และ Firebase แล้วนำขึ้น GitHub Pages",
      tags: ["HTML", "CSS", "JavaScript", "Firebase", "GitHub Pages"],
      image: "assets/projects/internpro.png",
      links: {
        live: "https://68319010027-hue.github.io/my-first-web-project/index.html",
        github: "https://github.com/68319010027-hue/my-first-web-project",
      },
    },
    {
      level: "ปวช.3",
      org: "โรงพยาบาลเลย",
      role: "นักศึกษาฝึกงาน · วิทยาลัยเทคนิคเลย",
      year: "ปวช.3",
      site: "เว็บบันทึกการฝึกงานบน Google Sites",
      summary:
        "จัดทำเว็บบันทึกการฝึกงานระดับ ปวช.3 ที่โรงพยาบาลเลย ด้วย Google Sites เพื่อรวบรวมประวัติการฝึก งานที่ได้รับมอบหมาย และหลักฐานการปฏิบัติงานให้อาจารย์และสถานประกอบการดูได้",
      tags: ["Google Sites", "Documentation", "Hospital IT"],
      image: "",
      links: {
        live: "https://sites.google.com/d/1vGoXVFmxHxWOFxn3gf9CRC-RbYOchQqe/p/1yGqplNHT6iEzQ5GeG9ikWtUpSRL7VV5o/edit",
        github: "",
      },
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
      title: "InternPro — ระบบฝึกงาน สสจ.เลย",
      year: "ปวส.1 · 2025–2026",
      tags: ["HTML", "CSS", "JavaScript", "Firebase"],
      summary:
        "เว็บจัดการการฝึกงานที่สำนักงานสาธารณสุขจังหวัดเลย: ลงเวลาทำงาน บันทึกรายวัน อัปโหลดงาน และแดชบอร์ดสรุปข้อมูล",
      image: "assets/projects/internpro.png",
      links: {
        live: "https://68319010027-hue.github.io/my-first-web-project/index.html",
        github: "https://github.com/68319010027-hue/my-first-web-project",
      },
    },
    {
      title: "เว็บฝึกงาน โรงพยาบาลเลย",
      year: "ปวช.3",
      tags: ["Google Sites", "Internship log"],
      summary:
        "เว็บบันทึกการฝึกงานระดับ ปวช.3 ที่โรงพยาบาลเลย ใช้ Google Sites รวบรวมประวัติการฝึกและผลงานระหว่างปฏิบัติงาน",
      image: "",
      links: {
        live: "https://sites.google.com/d/1vGoXVFmxHxWOFxn3gf9CRC-RbYOchQqe/p/1yGqplNHT6iEzQ5GeG9ikWtUpSRL7VV5o/edit",
        github: "",
      },
    },
    {
      title: "Personal IT Portfolio",
      year: "2026",
      tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      summary:
        "เว็บพอร์ตโฟลิโอส่วนตัวแบบ static โทนสาย IT ใช้ไฟล์คอนเทนต์เดียวในการอัปเดตเกียรติบัตร รายวิชา และผลงาน",
      image: "",
      links: {
        live: "#",
        github: "https://github.com/film145film-bit/portfolio",
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
    title: "พร้อมให้ติดต่อเรื่องงานไอทีและการฝึกงาน",
    note: "ติดต่อได้ทางอีเมล LINE หรือโทรศัพท์",
  },
};
