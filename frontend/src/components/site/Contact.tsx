import { useState, type FormEvent } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Loader2, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { CONTACT, SECTION_IDS } from "@/data/content";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL as string;
const API = `${BACKEND_URL}/api`;

const DETAIL_ICONS: Record<string, LucideIcon> = { mail: Mail, phone: Phone, "map-pin": MapPin };

interface ContactForm {
  company: string;
  contact_name: string;
  email: string;
  phone: string;
  services: string[];
  description: string;
  budget: string;
}

type FormErrors = Partial<Record<keyof ContactForm, string>>;

const initial: ContactForm = {
  company: "",
  contact_name: "",
  email: "",
  phone: "",
  services: [],
  description: "",
  budget: "",
};

export const Contact = () => {
  const [form, setForm] = useState<ContactForm>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const set = <K extends keyof ContactForm>(key: K, value: ContactForm[K]) => {
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
      await axios.post(`${API}/contact`, form);
      toast.success("Köszönjük! Hamarosan felvesszük veled a kapcsolatot.");
      setForm(initial);
    } catch (err) {
      toast.error("Hiba történt a küldés során. Próbáld újra később.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-[4px] border border-siro-border bg-siro-bg px-4 py-3 text-sm text-siro-text placeholder:text-siro-muted/60 outline-none transition-colors focus:border-siro-green";

  return (
    <section id={SECTION_IDS.contact} data-testid="contact-section" className="border-t border-siro-border bg-siro-bg2/40 py-28 lg:py-32">
      <div className="mx-auto grid max-w-site grid-cols-1 gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        {/* Left: details */}
        <Reveal>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-siro-green">{CONTACT.eyebrow}</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-siro-text sm:text-4xl">{CONTACT.headline}</h2>
          <div className="mt-8 space-y-4">
            {CONTACT.details.map((d) => {
              const Icon = DETAIL_ICONS[d.icon];
              return (
                <div key={d.value} className="flex items-center gap-3 text-siro-text" data-testid={`contact-detail-${d.icon}`}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-siro-border bg-siro-bg text-siro-green">
                    <Icon size={18} />
                  </span>
                  <span className="text-[15px]">{d.value}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-8 rounded-lg border border-siro-border bg-[#08080A] p-5 font-mono text-xs leading-relaxed text-siro-green">
            <div>{"> response_time: < 24h"}</div>
            <div>{"> consultation: free"}</div>
            <div>{"> commitment: none"}</div>
          </div>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={0.1}>
          <form onSubmit={submit} noValidate data-testid="contact-form" className="rounded-lg border border-siro-border bg-siro-bg p-6 lg:p-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-siro-muted">Cégnév *</label>
                <input
                  data-testid="input-company"
                  className={inputClass}
                  value={form.company}
                  onChange={(e) => set("company", e.target.value)}
                  placeholder="Pl. Példa Kft."
                />
                {errors.company && <p className="mt-1 text-xs text-siro-red">{errors.company}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-siro-muted">Kapcsolattartó neve *</label>
                <input
                  data-testid="input-contact-name"
                  className={inputClass}
                  value={form.contact_name}
                  onChange={(e) => set("contact_name", e.target.value)}
                  placeholder="Teljes név"
                />
                {errors.contact_name && <p className="mt-1 text-xs text-siro-red">{errors.contact_name}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-siro-muted">E-mail cím *</label>
                <input
                  data-testid="input-email"
                  type="email"
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="nev@ceg.hu"
                />
                {errors.email && <p className="mt-1 text-xs text-siro-red">{errors.email}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-siro-muted">Telefonszám</label>
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
              <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-siro-muted">Milyen fejlesztésre van szükséged?</label>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {CONTACT.serviceOptions.map((opt) => {
                  const active = form.services.includes(opt);
                  return (
                    <button
                      type="button"
                      key={opt}
                      data-testid={`service-option-${opt}`}
                      onClick={() => toggleService(opt)}
                      className={`flex items-center gap-2.5 rounded-[4px] border px-3 py-2.5 text-left text-sm transition-colors ${
                        active
                          ? "border-siro-green/60 bg-siro-green/10 text-siro-text"
                          : "border-siro-border bg-siro-bg2 text-siro-muted hover:text-siro-text"
                      }`}
                    >
                      <span className={`flex h-4 w-4 items-center justify-center rounded-[3px] border ${active ? "border-siro-green bg-siro-green" : "border-siro-border"}`}>
                        {active && <span className="h-2 w-2 rounded-[1px] bg-siro-bg" />}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-siro-muted">Rövid projekt leírás</label>
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
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-siro-muted">Tervezett büdzsé (opcionális)</label>
              <select
                data-testid="input-budget"
                className={`${inputClass} appearance-none`}
                value={form.budget}
                onChange={(e) => set("budget", e.target.value)}
              >
                <option value="">Válassz...</option>
                {CONTACT.budgetOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-siro-bg2">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              data-testid="contact-submit"
              disabled={loading}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-[4px] bg-siro-red px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#ff352a] hover:shadow-glow-red disabled:opacity-60"
            >
              {loading && <Loader2 size={16} className="animate-spin" />}
              {loading ? "Küldés..." : CONTACT.submit}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
