import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactCTA } from "@/components/ContactCTA";
import { getAllPosts } from "@/lib/blog";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog | SIROSOFT",
  description:
    "Írások egyedi szoftverfejlesztésről, folyamat-automatizálásról és arról, mikor éri meg saját rendszert építeni.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-[#0A0A0C] font-body text-ink">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
          <div className="pointer-events-none absolute inset-0 hero-grid opacity-40" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,232,123,0.12),transparent_65%)]" />
          <div className="relative mx-auto max-w-site px-6">
            <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
              Tudásbázis & Cikkek
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
              Blog
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-muted">
              Írások egyedi szoftverfejlesztésről, folyamat-automatizálásról és arról, mikor éri meg saját rendszert építeni.
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="border-t border-line/50 py-20 lg:py-28">
          <div className="mx-auto max-w-site px-6">
            {posts.length === 0 ? (
              <div className="rounded-xl border border-line bg-surface p-12 text-center max-w-2xl mx-auto">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
                  {"// HAMAROSAN"}
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold text-ink">
                  Hamarosan érkeznek a legújabb szakmai cikkek!
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Szakértői írásaink előkészítés alatt állnak. Térjen vissza később, vagy lépjen velünk kapcsolatba egyedi kérdésével!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="group flex flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface transition-all duration-200 hover:border-[#1AE87B]/40 hover:-translate-y-1"
                  >
                    <div>
                      {post.coverImage && (
                        <div
                          className="w-full bg-cover bg-center"
                          style={{ aspectRatio: "16 / 9", backgroundImage: `url(${post.coverImage})` }}
                        />
                      )}
                      <div className="p-6">
                        <div className="flex items-center justify-between font-mono text-xs text-muted mb-3">
                          <span className="rounded-sm border border-[#1AE87B]/40 bg-[#1AE87B]/10 px-2 py-0.5 text-[11px] font-semibold text-[#1AE87B]">
                            {post.category}
                          </span>
                          <span>{post.readingTime}</span>
                        </div>

                        <h2 className="font-display text-xl font-bold text-ink group-hover:text-[#1AE87B] transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>

                        {post.excerpt && (
                          <p className="mt-3 text-sm leading-[1.7] text-muted line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="border-t border-line/50 p-6 pt-4 flex items-center justify-between font-mono text-xs text-muted">
                      <span>{post.author}</span>
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString("hu-HU", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
