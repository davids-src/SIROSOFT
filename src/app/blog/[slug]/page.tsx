/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export const revalidate = 3600;

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Cikk nem található | SIROSOFT",
    };
  }

  const title = `${post.title} | SIROSOFT Blog`;
  const description = post.excerpt || `${post.title} - SIROSOFT szakmai cikk.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author || "SIROSOFT",
    },
    publisher: {
      "@type": "Organization",
      name: "SIROTECH Informatikai és Biztonságtechnikai Kft.",
      url: "https://sirosoft.hu",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sirosoft.hu/blog/${post.slug}`,
    },
  };

  return (
    <div className="bg-[#0A0A0C] font-body text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main>
        {/* Article Header */}
        <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
          <div className="pointer-events-none absolute inset-0 hero-grid opacity-40" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,232,123,0.12),transparent_65%)]" />

          <div className="relative mx-auto max-w-4xl px-6">
            <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
              <Link href="/blog" className="text-[#1AE87B] hover:underline">
                ← Blog
              </Link>
              <span>•</span>
              <span className="rounded-sm border border-[#1AE87B]/40 bg-[#1AE87B]/10 px-2 py-0.5 font-semibold text-[#1AE87B]">
                {post.category}
              </span>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="font-display text-3xl font-bold leading-[1.15] tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-4 border-t border-line/50 pt-4 font-mono text-xs text-muted">
              <span>Szerző: {post.author}</span>
              <span>•</span>
              <span>
                {new Date(post.publishedAt).toLocaleDateString("hu-HU", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="border-t border-line/50 py-16">
          <div className="mx-auto max-w-4xl px-6">
            {post.coverImage && (
              <div className="mb-12 overflow-hidden rounded-xl border border-line">
                <img src={post.coverImage} alt={post.title} className="w-full object-cover" />
              </div>
            )}

            <article className="prose prose-invert max-w-none prose-headings:font-display prose-headings:text-ink prose-p:text-muted prose-p:leading-[1.8] prose-a:text-[#1AE87B] prose-strong:text-ink prose-code:text-[#1AE87B]">
              <div className="whitespace-pre-wrap text-base leading-relaxed text-muted">
                {post.content}
              </div>
            </article>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 bg-surface/40 border-t border-line/50">
          <div className="mx-auto max-w-site px-6">
            <div className="relative overflow-hidden rounded-xl border border-line bg-surface px-6 py-16 text-center lg:px-16">
              <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(26,232,123,0.15),transparent_70%)]" />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl text-balance">
                  Van egy ötlete vagy egy problémája?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-[1.7] text-muted">
                  Nem kell kész specifikáció. Elég egy félórás egyeztetés — megmondjuk, hogy megvalósítható-e, és ha igen, mennyiből.
                </p>
                <Link
                  href="/kapcsolat"
                  className="mt-8 inline-block rounded bg-[#1AE87B] px-8 py-4 text-sm font-semibold text-[#0A0A0C] transition-transform duration-150 ease-out hover:scale-[1.02]"
                >
                  Ingyenes konzultációt kérek
                </Link>
                <p className="mt-4 font-mono text-xs text-muted">
                  Az igényfelmérő konzultáció ingyenes és kötelezettségmentes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
