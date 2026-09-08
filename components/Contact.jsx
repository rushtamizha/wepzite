"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Clock, Send, Sparkles, MessageCircle } from "lucide-react";
import { Section, Badge } from "@/components/ui/Section";
import { BUSINESS_WHATSAPP } from "@/utils/site";

// One field style, used by every input/select/textarea in the form
const fieldClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-800 transition-all placeholder:font-medium placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20";
const labelClass = "block text-[10px] font-black uppercase tracking-wide text-slate-500";

export default function Contact({ tone = "light" }) {
  const [minBudget, setMinBudget] = useState(15000);
  const [maxBudget, setMaxBudget] = useState(75000);
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "India",
    service: "Website Development",
    description: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMinBudgetChange = (e) => {
    const value = parseInt(e.target.value);
    // Keep minimum range bounded safely behind the max slider boundary
    if (value < maxBudget) {
      setMinBudget(value);
    }
  };

  const handleMaxBudgetChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > minBudget) {
      setMaxBudget(value);
    }
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.description) return;

    setFormStatus("compiling");

    // Format final currency markers dynamically
    const formattedMax = maxBudget >= 150000 ? "₹1,50,000+" : `₹${maxBudget.toLocaleString("en-IN")}`;
    const formattedMin = `₹${minBudget.toLocaleString("en-IN")}`;

    // Compile a highly precise corporate structure overview for your lead pipelines
    let leadDossier = `*Wepzite — NEW ENQUIRY*\n`;
    leadDossier += `------------------------------------------\n`;
    leadDossier += `• *Client:* ${formData.name}\n`;
    leadDossier += `• *Company:* ${formData.company || "Individual/Independent"}\n`;
    leadDossier += `• *Location:* ${formData.country}\n`;
    leadDossier += `• *Contact:* ${formData.phone} // ${formData.email || "N/A"}\n`;
    leadDossier += `------------------------------------------\n`;
    leadDossier += `• *Service:* ${formData.service}\n`;
    leadDossier += `• *Budget:* ${formattedMin} - ${formattedMax}\n`;
    leadDossier += `------------------------------------------\n`;
    leadDossier += `*Project details:*\n${formData.description}\n`;
    leadDossier += `------------------------------------------\n`;
    leadDossier += `Hi! I filled in the enquiry form on your website and would like to talk about this project.`;

    setTimeout(() => {
      setFormStatus("success");
       // Fire Meta Pixel Lead event
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead");
      }
      const encodedText = encodeURIComponent(leadDossier);
      window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodedText}`, "_blank");
    }, 800);
  };

  return (
    <Section id="contact" tone={tone}>
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* LEFT — WHO YOU ARE REACHING */}
        <div className="lg:col-span-5">
          <Badge tone={tone} icon={Sparkles}>
            Get In Touch
          </Badge>

          <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Tell us about{" "}
            <span className="text-brand-600">your project</span>
          </h2>

          <p className="mt-4 text-sm font-medium leading-relaxed text-slate-500 sm:text-base">
            Fill in the form and it opens a WhatsApp message with your details
            already written out — you just hit send. Or reach us directly using
            anything below.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-slate-200/70 pt-8 sm:grid-cols-2">
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wide text-slate-400">
                <Mail size={12} className="text-brand-500" />
                <span>Email us</span>
              </div>
              <a
                href="mailto:contact@wepzite.in"
                className="inline-block py-1 text-xs font-bold text-slate-700 transition-colors hover:text-brand-600"
              >
                contact@wepzite.in
              </a>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wide text-slate-400">
                <Globe size={12} className="text-brand-500" />
                <span>Website</span>
              </div>
              <a
                href="https://wepzite.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-1 text-xs font-bold text-slate-700 transition-colors hover:text-brand-600"
              >
                wepzite.in
              </a>
            </div>
          </div>

          <div className="mt-6 max-w-sm space-y-3">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-3">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Clock size={15} />
              </span>
              <div className="text-left leading-tight">
                <div className="text-[9px] font-black uppercase tracking-wide text-slate-400">
                  Response time
                </div>
                <div className="mt-0.5 text-[11px] font-bold text-slate-700">
                  Usually the same day
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-3">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <MessageCircle size={15} />
              </span>
              <div className="text-left leading-tight">
                <div className="text-[9px] font-black uppercase tracking-wide text-slate-400">
                  Prefer to chat?
                </div>
                <div className="mt-0.5 text-[11px] font-bold text-slate-700">
                  WhatsApp works best
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — THE FORM */}
        <div className="w-full lg:col-span-7">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm md:p-8">
            <form onSubmit={handleFormSubmission} className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className={labelClass}>Full name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Alok Sharma"
                    className={fieldClass}
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className={labelClass}>Email address *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. alok@company.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="phone" className={labelClass}>Phone number *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 98765 43210"
                    className={fieldClass}
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="company" className={labelClass}>Business name (optional)</label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. Sharma Travels"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="country" className={labelClass}>Country *</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`${fieldClass} cursor-pointer`}
                  >
                    <option>India</option>
                    <option>United States</option>
                    <option>United Arab Emirates</option>
                    <option>United Kingdom</option>
                    <option>Singapore</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="service" className={labelClass}>What do you need? *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`${fieldClass} cursor-pointer`}
                  >
                    <option>Website Development</option>
                    <option>Web Application Development</option>
                    <option>Mobile App Development</option>
                    <option>AI Solutions</option>
                    <option>Custom Software</option>
                    <option>UI/UX Design</option>
                    <option>E-commerce Development</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* BUDGET RANGE */}
              <div className="space-y-3 rounded-2xl border border-slate-200/60 bg-slate-50 p-4">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <span className={labelClass}>Your budget range *</span>
                  <div className="text-xs font-black text-brand-600">
                    ₹{minBudget.toLocaleString("en-IN")} —{" "}
                    {maxBudget >= 150000
                      ? "₹1,50,000+"
                      : `₹${maxBudget.toLocaleString("en-IN")}`}
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="space-y-1.5">
                    <label htmlFor="minBudget" className="block text-[9px] font-bold uppercase text-slate-400">
                      Minimum
                    </label>
                    <input
                      id="minBudget"
                      type="range"
                      min="5000"
                      max="50000"
                      step="2500"
                      value={minBudget}
                      onChange={handleMinBudgetChange}
                      className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-brand-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="maxBudget" className="block text-[9px] font-bold uppercase text-slate-400">
                      Maximum
                    </label>
                    <input
                      id="maxBudget"
                      type="range"
                      min="30000"
                      max="150000"
                      step="5000"
                      value={maxBudget}
                      onChange={handleMaxBudgetChange}
                      className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-brand-600"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="description" className={labelClass}>
                  Tell us about the project *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="What does your business do, what do you want the site to achieve, and is there anything specific you need on it?"
                  className={`${fieldClass} leading-relaxed`}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formStatus === "compiling"}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/25 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60"
                >
                  <Send size={14} />
                  <span>
                    {formStatus === "compiling"
                      ? "Opening WhatsApp…"
                      : "Send project enquiry"}
                  </span>
                </button>
              </div>

              <p className="flex items-center justify-center gap-1.5 pt-1 text-center text-[10px] font-semibold text-slate-400">
                <MessageCircle size={12} className="flex-shrink-0 text-brand-500" />
                <span>Sending opens WhatsApp with your details filled in.</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
