"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Scrollbar } from "swiper/modules";

// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../../public/assets/variants";

// กำหนด interface สำหรับ Blog
interface Blog {
  slug: string;
  alt: string;
  width: number;
  height: number;
  image: string;
  title: string;
  excerpt: string;
}

const BlogSlide = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // ดึงข้อมูลจาก API
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/blogs");
      const blogPosts: Blog[] = await res.json();
      setBlogs(blogPosts);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  return (
    <section className="border-image relative top-[340px] lg:top-[250px] z-10 h-[800px] pt-[60px] md:pt-[120px]">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1.6)}
        initial="hidden"
        whileInView={"show"}
        className="container mx-auto px-5"
      >
        <h2 className="text-2xl lg:text-3xl font-semibold  text-center mb-10">
          บทความล่าสุดของเรา
        </h2>

        {/* เช็คว่าโหลดข้อมูลเสร็จแล้วหรือยัง */}
        {loading ? (
          <div className="text-center text-primary-main">กำลังโหลด...</div>
        ) : (
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            scrollbar={{
              hide: true,
            }}
            modules={[Autoplay, Scrollbar]}
            className="mySwiper-events lg:max-w-[1800px] h-[700px] mx-auto px-24"
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.slug}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                  {/* ใช้ Image component จาก Next.js */}
                  <div className="relative w-full h-64 lg:h-80">
                    {" "}
                    {/* กำหนดความสูงของรูปในแต่ละ breakpoint */}
                    <Image
                      alt={blog.alt}
                      width={blog.width}
                      height={blog.height}
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="duration-300 group-hover:scale-110 object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      src={blog.image}
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-medium">{blog.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{blog.excerpt}</p>
                    <a
                      href={`/blog/${blog.slug}`}
                      target="_blank"
                      className="text-primary-main hover:underline mt-4 block"
                    >
                      อ่านเพิ่มเติม...
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </motion.div>
    </section>
  );
};

export default BlogSlide;
