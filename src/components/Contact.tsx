"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Loader2, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { CONTACT, SECTION_IDS } from "@/data/content";

const DETAIL_ICONS: Record<string, LucideIcon> = { mail: Mail, phone: Phone, "map-pin": MapPin };

interface ContactFormState {
  company: string;
  contact_name: string;
  email: string;
  phone: string;
  services: string[];
  description: string;
  budget: string;
  acceptPrivacy: boolean;
}

type FormErrors = Partial<Record<keyof ContactFormState, string>>;

const initial: ContactFormState = {
  company: "",
  contact_name: "",
  email: "",
  phone: "",
  services: [],
  description: "",
  budget: "",
  acceptPrivacy: false,
};

export const Contact = () => {
  const [form, setForm] = useState<ContactFormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const set = <K extends keyof ContactFormState>(key: K, value: ContactFormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const toggleService = (option: string) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(option)
        ? f.services.filter((s) => s !== option)
        : [...f.services, option],
    }));
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.company.trim()) e.company = "Kötelező mező";
    if (!form.contact_name.trim()) e.contact_name = "Kötelező mező";
    if (!form.email.trim()) e.email = "Kötelező mező";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Érvénytelen e-mail cím";
    if (!form.acceptPrivacy) e.acceptPrivacy = "Az adatkezelési tájékoztató elfogadása kötelező";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!validate()) {
      toast.error("Kérlek töltsd ki a kötelező mezőket.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Köszönjük! Hamarosan felvesszük veled a kapcsolatot.");
      setForm(initial);
    } catch {
      toast.error("Hiba történt a küldés során. Próbáld újra később.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted/50 transition-colors focus:border-silver focus:outline-none";

  return (
    <section id={SECTION_IDS.contact} data-testid="contact-section" className="border-t border-line/50 bg-surface/40 py-28 lg:py-32">
      <div className="mx-auto max-w-site px-6">
        <SectionHeading eyebrow={CONTACT.eyebrow} headline={CONTACT.headline} accent="green" />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left column */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="space-y-6">
                <div className="space-y-4">
                  {CONTACT.details.map((d) => {
                    const Icon = DETAIL_ICONS[d.icon];
                    return (
                      <div key={d.value} className="flex items-center gap-4 text-ink" data-testid={`contact-detail-${d.icon}`}>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-bg text-[#1AE87B]">
                          <Icon size={18} />
                        </span>
                        <span className="text-sm font-medium">{d.value}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-lg border border-line bg-surface p-5 font-mono text-xs text-muted">
                  <div className="text-[#1AE87B]">{"> response_time: < 24h"}</div>
                  <div>{"> consultation: free"}</div>
                  <div>{"> commitment: none"}</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right column: Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form onSubmit={submit} noValidate data-testid="contact-form" className="rounded-lg border border-line bg-surface p-6 lg:p-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      Cégnév *
                    </label>
                    <input
                      data-testid="input-company"
                      className={inputClass}
                      value={form.company}
                      onChange={(e) => set("company", e.target.value)}
                      placeholder="Pl. Példa Kft."
                    />
                    {errors.company && <p className="mt-1 text-xs text-[#E8271A]">{errors.company}</p>}
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      Kapcsolattartó neve *
                    </label>
                    <input
                      data-testid="input-contact-name"
                      className={inputClass}
                      value={form.contact_name}
                      onChange={(e) => set("contact_name", e.target.value)}
                      placeholder="Teljes név"
                    />
                    {errors.contact_name && <p className="mt-1 text-xs text-[#E8271A]">{errors.contact_name}</p>}
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      E-mail cím *
                    </label>
                    <input
                      data-testid="input-email"
                      type="email"
                      className={inputClass}
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="nev@ceg.hu"
                    />
                    {errors.email && <p className="mt-1 text-xs text-[#E8271A]">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      Telefonszám
                    </label>
                    <input
                      data-testid="input-phone"
                      type="tel"
                      className={inputClass}
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder="+36 ..."
                    />
                  </div>
                </div>

                {/* Services checkboxes */}
                <div className="mt-6">
                  <label className="mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Milyen fejlesztésre van szükséged?
                  </label>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {CONTACT.serviceOptions.map((opt) => {
                      const active = form.services.includes(opt);
                      return (
                        <button
                          type="button"
                          key={opt}
                          data-testid={`service-option-${opt}`}
                          onClick={() => toggleService(opt)}
                          className={`flex items-center gap-2.5 rounded border px-3.5 py-2.5 text-left text-xs transition-colors ${
                            active
                              ? "border-[#1AE87B]/60 bg-[#1AE87B]/12 text-ink font-medium"
                              : "border-line bg-bg text-muted hover:border-silver/50"
                          }`}
                        >
                          <span className={`flex h-4 w-4 items-center justify-center rounded-sm border ${active ? "border-[#1AE87B] bg-[#1AE87B]" : "border-line"}`}>
                            {active && <span className="h-2 w-2 rounded-sm bg-[#0A0A0C]" />}
                          </span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                  <label className="mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Rövid projekt leírás
                  </label>
                  <textarea
                    data-testid="input-description"
                    rows={4}
                    className={`${inputClass} resize-none`}
                    value={form.description}
                    onChange={(e) => set("description", e.target.value)}
                    placeholder="Mi a jelenlegi probléma, amit meg szeretnél oldani?"
                  />
                </div>

                {/* Budget */}
                <div className="mt-6">
                  <label className="mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Tervezett büdzsé (opcionális)
                  </label>
                  <select
                    data-testid="input-budget"
                    className={`${inputClass} appearance-none`}
                    value={form.budget}
                    onChange={(e) => set("budget", e.target.value)}
                  >
                    <option value="">Válassz...</option>
                    {CONTACT.budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-panel text-ink">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Privacy Checkbox */}
                <div className="mt-6 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="acceptPrivacy"
                    data-testid="input-privacy"
                    className="mt-1 shrink-0 accent-[#1AE87B]"
                    checked={form.acceptPrivacy}
                    onChange={(e) => set("acceptPrivacy", e.target.checked)}
                  />
                  <label htmlFor="acceptPrivacy" className="text-xs text-muted">
                    Elolvastam és elfogadom az <a href="/adatkezelesi" target="_blank" rel="noopener noreferrer" className="text-ink underline hover:text-[#1AE87B]">Adatkezelési tájékoztatót</a> és az <a href="/aszf" target="_blank" rel="noopener noreferrer" className="text-ink underline hover:text-[#1AE87B]">ÁSZF</a>-et. *
                  </label>
                </div>
                {errors.acceptPrivacy && <p className="mt-1 text-xs text-[#E8271A]">{errors.acceptPrivacy}</p>}

                <button
                  type="submit"
                  data-testid="contact-submit"
                  disabled={loading}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded bg-[#1AE87B] px-6 py-3.5 text-sm font-semibold text-[#0A0A0C] transition-transform duration-150 ease-out hover:scale-[1.02] disabled:opacity-60"
                >
                  {loading && <Loader2 size={16} className="animate-spin" />}
                  {loading ? "Küldés..." : CONTACT.submit}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
