import { getBlogBySlug, getBlogPosts } from "@/lib/blogs";
import { notFound } from "next/navigation";

// กำหนด type สำหรับ params
interface Params {
  params: {
    slug: string;
  };
}

// ฟังก์ชันเพื่อสร้าง static params
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// ฟังก์ชันเพื่อสร้าง metadata
export async function generateMetadata({ params }: Params) {
  const post = await getBlogBySlug(params.slug);

  if (!post) {
    return {
      title: "Post not found",
      description: "The requested post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

// ฟังก์ชันสำหรับหน้า Blog Detail
export default async function BlogDetail({ params }: Params) {
  const post = await getBlogBySlug(params.slug);

  if (!post) {
    notFound(); // ส่งไปที่หน้าที่ไม่พบ (404) ถ้าไม่พบโพสต์
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}
