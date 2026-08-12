import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  category: string;
  coverImage?: string;
  content: string;
  readingTime: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function calculateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} perc olvasás`;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const fileNames = fs.readdirSync(BLOG_DIR);
  const now = new Date();

  const posts: BlogPost[] = fileNames
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, "");
      const fullPath = path.join(BLOG_DIR, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: data.slug || slug,
        title: data.title || "Cím nélkül",
        excerpt: data.excerpt || "",
        publishedAt: data.publishedAt || new Date().toISOString(),
        author: data.author || "SIROSOFT Csapat",
        category: data.category || "Egyedi fejlesztés",
        coverImage: data.coverImage,
        content,
        readingTime: calculateReadingTime(content),
      };
    })
    .filter((post) => {
      const pubDate = new Date(post.publishedAt);
      return !isNaN(pubDate.getTime()) && pubDate <= now;
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) {
    return null;
  }

  const filePathMd = path.join(BLOG_DIR, `${slug}.md`);
  const filePathMdx = path.join(BLOG_DIR, `${slug}.mdx`);

  let fullPath = "";
  if (fs.existsSync(filePathMd)) {
    fullPath = filePathMd;
  } else if (fs.existsSync(filePathMdx)) {
    fullPath = filePathMdx;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const now = new Date();
  const pubDate = new Date(data.publishedAt);

  if (isNaN(pubDate.getTime()) || pubDate > now) {
    return null;
  }

  return {
    slug: data.slug || slug,
    title: data.title || "Cím nélkül",
    excerpt: data.excerpt || "",
    publishedAt: data.publishedAt || new Date().toISOString(),
    author: data.author || "SIROSOFT Csapat",
    category: data.category || "Egyedi fejlesztés",
    coverImage: data.coverImage,
    content,
    readingTime: calculateReadingTime(content),
  };
}
