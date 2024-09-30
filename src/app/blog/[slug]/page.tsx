import { getBlogBySlug, getBlogPosts } from "@/lib/blogs";
import { notFound } from "next/navigation";

import BlogContent from "@/components/BlogContent";
import NavBlog from "@/components/NavBlog";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
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
    keywords: post.keywords,
    image: post.image,
  };
}

// ฟังก์ชันสำหรับหน้า Blog Detail
export default async function BlogDetail({ params }: Params) {
  const post = await getBlogBySlug(params.slug);

  if (!post) {
    notFound(); // ส่งไปที่หน้าที่ไม่พบ (404) ถ้าไม่พบโพสต์
  }

  return (
    <>
      <NavBlog />
      <section className="pb-20 pt-36 lg:pb-24 lg:pt-48 xl:pb-32 xl:pt-52">
        <BlogContent data={post} />
      </section>
      {/* <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </div> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}
