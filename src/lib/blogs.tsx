import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ฟังก์ชันเพื่อดึงข้อมูลโพสต์ทั้งหมด
export const getBlogPosts = async () => {
  const directory = path.join(process.cwd(), "content/blogs");

  // ตรวจสอบว่าโฟลเดอร์มีอยู่หรือไม่
  if (!fs.existsSync(directory)) {
    return [];
  }

  // อ่านชื่อไฟล์ทั้งหมดในโฟลเดอร์
  const filenames = fs.readdirSync(directory);

  // ดึงข้อมูลจากแต่ละไฟล์
  const posts = filenames.map((filename) => {
    const filePath = path.join(directory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // ใช้ gray-matter เพื่อแยก front matter และเนื้อหา
    const { data, content } = matter(fileContents);

    return {
      title: data.title || filename.replace(".mdx", ""),
      slug: filename.replace(".mdx", ""),
      excerpt: data.excerpt || "",
      keywords: data.keywords || "",
      image: data.image || "",
      alt: data.alt || "",
      width: data.width || 0,
      height: data.height || 0,
    };
  });

  return posts;
};

// ฟังก์ชันเพื่อดึงข้อมูลโพสต์ตาม slug
export const getBlogBySlug = async (slug: string) => {
  // แปลง slug เป็น URL-decoded
  const decodedSlug = decodeURI(slug);
  const filePath = path.join(process.cwd(), `content/blogs/${decodedSlug}.mdx`);

  console.log("filePath:", filePath);
  // ตรวจสอบว่ามีไฟล์หรือไม่
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    title: data.title || slug,
    contentHtml: content,
    excerpt: data.excerpt || "",
    keywords: data.keywords || "",
    image: data.image || "",
    alt: data.alt || "",
    width: data.width || 0,
    height: data.height || 0,
    date: data.date || "",
    author: data.author || "",
  };
};
