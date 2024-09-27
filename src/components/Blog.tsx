"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../public/assets/variants";

import BlogList from "./BlogList";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/blogs");
      const blogPosts = await res.json();
      setBlogs(blogPosts);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        whileInView={"show"}
        className="py-20 lg:py-28 xl:py-32 bg-second-main"
      >
        <motion.div
          variants={fadeIn("down", "tweem", 0.3, 1.1)}
          className="mx-auto mt-16 max-w-7xl px-4 md:px-8 xl:mt-20 xl:px-0"
        >
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {loading ? (
              <p
                className="mb-3.5 mt-7.5 line-clamp-2 text-xl font-semibold text-accent 
"
              >
                Loading...
              </p>
            ) : (
              <BlogList blogs={blogs} />
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
