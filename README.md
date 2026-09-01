# พอร์ตโฟลิโอของ พัชรพล ไวโสภา

เว็บไซต์พอร์ตโฟลิโอสาย IT โชว์เกียรติบัตร TDGA/DGA และผลงาน โดยแก้ไฟล์เดียวก็อัปเดตเนื้อหาได้

## เพิ่มผลงาน / เกียรติบัตรเอง

เปิดไฟล์ `js/content.js`

### เพิ่มเกียรติบัตร

1. วางรูป `.jpg` และไฟล์ `.pdf` ใน `assets/certificates/`
2. คัดลอก object ในอาร์เรย์ `certificates` แล้วแก้ค่า เช่น

```js
{
  id: "my-new-cert",
  title: "ชื่อเกียรติบัตรภาษาไทย",
  titleEn: "English title",
  issuer: "TDGA · DGA",
  category: "AI",          // ใช้เป็นปุ่มกรอง: AI, Digital, PDPA, Leadership
  date: "1 ก.ย. 2026",
  hours: "2 ชม.",
  image: "assets/certificates/my-new-cert-thumb.jpg",
  fullImage: "assets/certificates/my-new-cert.jpg",
  pdf: "assets/certificates/my-new-cert.pdf",
}
```

### เพิ่มโปรเจกต์

1. (ถ้ามีรูป) วางใน `assets/projects/`
2. คัดลอก object ในอาร์เรย์ `projects` แล้วแก้ค่า

อย่าลืมใส่ลิงก์ติดต่อใน `profile.email`, `profile.github`, `profile.linkedin`

## อัปขึ้น GitHub Pages ให้คนเปิดดูได้

ต้องล็อกอิน GitHub ก่อน แล้วสร้าง repo แล้วเปิด Pages

```bash
git init -b main
git add .
git commit -m "Initial IT portfolio"
gh auth login
gh repo create patcharaphon-portfolio --public --source=. --remote=origin --push
```

จากนั้นที่ GitHub:

1. เข้า repo → **Settings** → **Pages**
2. Source เลือก **Deploy from a branch**
3. Branch เลือก `main` และโฟลเดอร์ `/ (root)`
4. กด Save

เว็บจะอยู่ที่:

`https://<username>.github.io/patcharaphon-portfolio/`

ถ้าตั้งชื่อ repo เป็น `<username>.github.io` เว็บจะอยู่ที่ root ของบัญชีเลย

## ดูเครื่องตัวเองก่อนอัป

เปิดไฟล์ `index.html` ในเบราว์เซอร์ หรือรัน

```bash
python -m http.server 4173
```

แล้วเปิด http://127.0.0.1:4173
