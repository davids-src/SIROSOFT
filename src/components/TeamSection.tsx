"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const TEAM_MEMBERS = [
  {
    name: "Skoda Dávid",
    role: "Biztonságtechnikai és rendszergazdai divízió vezető",
    image: "/team/david.png",
    bio: "Rendszerüzemeltetői és elektrotechnikusi háttérrel a cégcsoport biztonságtechnikai, rendszergazdai és gazdasági folyamataiért felel.",
  },
  {
    name: "Tóth Tamás",
    role: "Szoftverfejlesztési divízió vezető",
    image: "/team/tomi.png",
    bio: "Full stack webes és rendszerfejlesztőként a szoftverfejlesztési divízió szakmai irányításáért és architektúrájáért felel.",
  },
];

export const TeamSection = () => {
  return (
    <section data-testid="team-section" className="border-t border-line/50 py-28 lg:py-32 bg-surface/20">
      <div className="mx-auto max-w-site px-6">
        <SectionHeading eyebrow="CSAPATUNK" headline="Akik a szoftver mögött állnak" accent="green" />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {TEAM_MEMBERS.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.12}>
              <div className="group overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:border-[#1AE87B]/40 hover:shadow-[0_0_50px_-12px_rgba(26,232,123,0.25)] hover:-translate-y-1">
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/70 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
                      {member.role}
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-bold text-ink">
                      {member.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-relaxed text-muted">{member.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/rolunk"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#1AE87B] hover:underline"
          >
            Részletes történetünk és csapat bemutatása <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};
