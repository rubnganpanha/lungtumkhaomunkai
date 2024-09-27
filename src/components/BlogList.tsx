import Image from "next/image";

// สร้าง interface เพื่อกำหนด type ของข้อมูล blog
interface Blog {
  slug: string;
  alt: string;
  width: number;
  height: number;
  image: string;
  title: string;
  excerpt: string;
}

// กำหนดประเภทให้กับ props
const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <>
      {blogs.map((blog) => (
        <div
          key={blog.slug}
          className="group rounded-lg bg-second-main p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
        >
          <a
            className="relative block aspect-[368/239] overflow-hidden rounded-lg"
            href={`/blog/${blog.slug}`}
            target="_blank"
            title={blog.alt}
          >
            <Image
              alt={blog.alt}
              width={blog.width}
              height={blog.height}
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="duration-300 group-hover:scale-110"
              sizes="100vw"
              src={blog.image}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
          </a>
          <div className="px-4">
            <h3
              className="mb-3.5 mt-7.5 line-clamp-2 text-xl font-semibold text-accent hover:text-primary 
              dark:text-white dark:hover:text-primary xl:text8xl"
            >
              <a href={`/blog/${blog.slug}`}>{blog.title}...</a>
            </h3>
            <p className="line-clamp-3 text-accent">{blog.excerpt}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogList;
