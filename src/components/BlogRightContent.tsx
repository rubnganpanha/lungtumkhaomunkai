import Image from "next/image";

export default function BlogRightContent({ data }: any) {
  console.log(555);
  console.log(data);

  return (
    <div className="lg:w-2/3">
      <div className="rounded-md border bg-white p-7  md:p-10">
        <div className="mb-10 w-full overflow-hidden">
          <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
            <Image
              alt={data.alt}
              width={data.width}
              height={data.height}
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="rounded-md object-cover object-center"
              sizes="100vw"
              src={data.image}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                right: 0,
                bottom: 0,
                color: "transparent",
              }}
            />
          </div>
        </div>

        <h1 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white ">
          {data.title}
        </h1>
        <ul className="mb-9 flex flex-wrap gap-5">
          <li>
            <span className="text-black dark:text-white">
              ผู้เขียน: {data.author}
            </span>
          </li>
          <li>
            <span className="text-black dark:text-white">เผยแพร่เมื่อ: </span>
            {data.date}
          </li>
          {/* <li>
            <span className="text-black dark:text-white">Tags: </span>
            <a href="/blog/tag/test"> xx</a>
          </li> */}
        </ul>
        <div
          className="text-black dark:text-white"
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
        />
      </div>
    </div>
  );
}
