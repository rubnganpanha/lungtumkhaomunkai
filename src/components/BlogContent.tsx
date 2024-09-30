import BlogRightContent from "./BlogRightContent";

export default function BlogContent(data: any) {
  // console.log(data);
  const blogData = data.data;
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="flex flex-col-reverse gap-7 lg:flex-row xl:gap-12">
        {/* left-content */}
        {/* <div className="md:w-1/2 lg:w-[32%]">
          <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
            <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
              หมวดหมู่
            </h4>
            <ul>
              <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary capitalize">
                <a className="capitalize" href="/blog/category/travel">
                  travel
                </a>
              </li>
              <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary capitalize">
                <a className="capitalize" href="/blog/category/design">
                  design
                </a>
              </li>
              <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary capitalize">
                <a className="capitalize" href="/blog/category/programming">
                  programming
                </a>
              </li>
              <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary capitalize">
                <a className="capitalize" href="/blog/category/travel">
                  travel
                </a>
              </li>
              <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary capitalize">
                <a className="capitalize" href="/blog/category/design">
                  design
                </a>
              </li>
              <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary capitalize">
                <a className="capitalize" href="/blog/category/programming">
                  Programming
                </a>
              </li>
            </ul>
          </div>

          <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
            <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
              บทความที่เกี่ยวข้อง
            </h4>
            <div>
              <div className="mb-7.5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="max-w-45 relative h-18"></div>
                <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="/blog/exploring-the-mern-stack-powering-modern-web-development">
                    ...
                  </a>
                </h5>
              </div>
              <div className="mb-7.5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="max-w-45 relative h-18"></div>
                <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="/blog/best-ui-components-for-modern-websites">
                    {" "}
                    ...
                  </a>
                </h5>
              </div>
              <div className="mb-7.5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="max-w-45 relative h-18"></div>
                <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="/blog/the-power-of-uiux-elevating-digital-experiences">
                    ...
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div> */}
        {/* right-content */}
        <BlogRightContent data={blogData} />
      </div>
    </section>
  );
}
