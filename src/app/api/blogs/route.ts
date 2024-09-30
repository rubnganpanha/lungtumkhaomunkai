import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
    const directory = path.join(process.cwd(), "content/blogs");

    if (!fs.existsSync(directory)) {
        return NextResponse.json([]);
    }

    const filenames = fs.readdirSync(directory);

    const posts = filenames.map((filename) => {
        const filePath = path.join(directory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);

        return {
            title: data.title || filename.replace(".mdx", ""),
            slug: filename.replace(".mdx", ""),
            excerpt: data.excerpt || "",
            image: data.image || "",
            alt: data.alt || "",
            width: data.width || 0,
            height: data.height || 0,
        };
    });

    return NextResponse.json(posts);
}
