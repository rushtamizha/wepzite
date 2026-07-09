"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Globe, 
  Clock, 
  ShieldCheck, 
  Send, 
  Sparkles, 
  HelpCircle, 
  MapPin, 
  Briefcase 
} from "lucide-react";

export default function Contact() {
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
    const formattedMax = maxBudget >= 150000 ? "₹1,50,000+ (Enterprise Cap)" : `₹${maxBudget.toLocaleString("en-IN")}`;
    const formattedMin = `₹${minBudget.toLocaleString("en-IN")}`;

    // Compile a highly precise corporate structure overview for your lead pipelines
    let leadDossier = `*MAGNIVEL TECHNOLOGIES - NEW INQUIRY*\n`;
    leadDossier += `------------------------------------------\n`;
    leadDossier += `• *Client:* ${formData.name}\n`;
    leadDossier += `• *Company:* ${formData.company || "Individual/Independent"}\n`;
    leadDossier += `• *Location:* ${formData.country}\n`;
    leadDossier += `• *Contact:* ${formData.phone} // ${formData.email || "N/A"}\n`;
    leadDossier += `------------------------------------------\n`;
    leadDossier += `• *Service Target:* ${formData.service}\n`;
    leadDossier += `• *Budget Scale:* ${formattedMin} - ${formattedMax}\n`;
    leadDossier += `------------------------------------------\n`;
    leadDossier += `*Project Matrix Scope:*\n${formData.description}\n`;
    leadDossier += `------------------------------------------\n`;
    leadDossier += `Hi! I mapped out this strategic profile on your platform and want to align on initializing our NDA contract workflow.`;

    setTimeout(() => {
      setFormStatus("success");
      const encodedText = encodeURIComponent(leadDossier);
      const corporateWhatsApp = "YOUR_NUMBER_HERE"; // Enter your active Magnivel Business Line here
      window.open(`https://wa.me/${corporateWhatsApp}?text=${encodedText}`, "_blank");
    }, 800);
  };

  return (
    <section id="contact" className="relative w-full bg-white py-10 px-4 overflow-hidden font-sans text-left">
      {/* Structural visual backdrop blur components */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* ==================== TWO-COLUMN CONVERSION HUB ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: BRAND DETAILS PANEL (Spans 5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 rounded-full border border-sky-200/60 mb-4">
                <Sparkles size={12} className="text-sky-600 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-sky-700">Business Connections</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 uppercase tracking-tight">
              Partner <span className="text-sky-600">with wepzite</span>
            </h2>
              <p className="mt-4 text-slate-500 text-xs sm:text-sm normal-case leading-relaxed font-medium">
                Collaborate with Magnivel Technologies to construct stable, maintainable, high-conversion software solutions tailored for continuous commercial growth.
              </p>
            </div>

            {/* Hub Details Directory Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200/60">
              <div className="space-y-1">
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Mail size={12} className="text-sky-500" />
                  <span>Send an Inquiry</span>
                </div>
                <a href="mailto:contact@magnivel.com" className="text-xs font-bold text-slate-700 hover:text-sky-600 transition-colors">
                  contact@magnivel.com
                </a>
              </div>

              <div className="space-y-1">
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Globe size={12} className="text-sky-500" />
                  <span>Official Hub</span>
                </div>
                <a href="https://magnivel.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-700 hover:text-sky-600 transition-colors">
                  magnivel.com
                </a>
              </div>
            </div>

            {/* Operational Metrics Footnotes */}
            <div className="space-y-3 pt-4 border-t border-slate-200/40 max-w-sm">
              <div className="flex items-center gap-3 p-2.5 bg-white border border-slate-200/60 rounded-2xl shadow-3xs">
                <div className="w-7 h-7 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-sky-600 flex-shrink-0">
                  <Clock size={13} />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Response Time</div>
                  <div className="text-[11px] font-bold text-slate-700 mt-0.5">Within 24 hours guaranteed</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 bg-white border border-slate-200/60 rounded-2xl shadow-3xs">
                <div className="w-7 h-7 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <ShieldCheck size={13} />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Secure Defaults</div>
                  <div className="text-[11px] font-bold text-slate-700 mt-0.5">NDAs & data-encryption ready</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 bg-white border border-slate-200/60 rounded-2xl shadow-3xs">
                <div className="w-7 h-7 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-purple-600 flex-shrink-0 mt-0.5">
                  <MapPin size={13} />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Global Delivery</div>
                  <p className="text-[10px] text-slate-500 font-medium leading-relaxed mt-1 normal-case">
                    Serving enterprise accounts across India, North America, Europe, UAE, and Southeast Asia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: HIGH-INTENT APP DOSSIER FORM (Spans 7 Columns) */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white rounded-3xl border border-sky-100/80 p-6 md:p-8 shadow-[0_4px_25px_rgba(14,165,233,0.01)]">
              
              <form onSubmit={handleFormSubmission} className="space-y-5">
                
                {/* Row 1: Credentials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Alok Sharma" 
                      className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-sky-500 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none transition-all font-semibold"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., alok@enterprise.com" 
                      className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-sky-500 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none transition-all font-semibold"
                    />
                  </div>
                </div>

                {/* Row 2: Metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g., +91 98765 43210" 
                      className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-sky-500 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none transition-all font-semibold"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Company Name (Optional)</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g., Magnivel Global" 
                      className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-sky-500 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none transition-all font-semibold"
                    />
                  </div>
                </div>

                {/* Row 3: Selections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Country *</label>
                    <select 
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 rounded-xl px-4 py-3 text-xs text-slate-700 font-bold focus:outline-none cursor-pointer transition-colors"
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
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Service Required *</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 rounded-xl px-4 py-3 text-xs text-slate-700 font-bold focus:outline-none cursor-pointer transition-colors"
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

                {/* ==================== ADVANCED CHROME BUDGET RANGE INTERFACE ==================== */}
                <div className="space-y-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/60">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Target Investment Bounds *</label>
                    <div className="text-xs font-mono font-black text-sky-600">
                      ₹{minBudget.toLocaleString("en-IN")} — {maxBudget >= 150000 ? "₹1,50,000+ (Enterprise)" : `₹${maxBudget.toLocaleString("en-IN")}`}
                    </div>
                  </div>

                  {/* Range Track Sliders Container Node */}
                  <div className="space-y-4 pt-2">
                    <div className="space-y-1">
                      <div className="text-[8px] font-mono font-bold text-slate-400 uppercase">Min Floor Allocation:</div>
                      <input 
                        type="range" 
                        min="5000" 
                        max="50000" 
                        step="2500"
                        value={minBudget}
                        onChange={handleMinBudgetChange}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-[8px] font-mono font-bold text-slate-400 uppercase">Max Ceiling Capacity:</div>
                      <input 
                        type="range" 
                        min="30000" 
                        max="150000" 
                        step="5000"
                        value={maxBudget}
                        onChange={handleMaxBudgetChange}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Description TextArea Block */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Project Description *</label>
                  <textarea 
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Provide a detailed structural summary of your operational goals, technical system integrations, or specific feature targets..."
                    className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-sky-500 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none transition-all font-medium leading-relaxed normal-case"
                  />
                </div>

                {/* Primary Action Submit Form Trigger Node */}
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={formStatus === "compiling"}
                    className="w-full py-3.5 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 disabled:from-slate-400 disabled:to-slate-500 text-white rounded-full text-xs font-black uppercase tracking-widest text-center flex items-center justify-center gap-2 shadow-md shadow-sky-500/10 active:ring-2 active:ring-sky-400/40 transition-all duration-300 cursor-pointer"
                  >
                    <Send size={13} />
                    <span>{formStatus === "compiling" ? "Packaging Strategic Intent..." : "Send Project Inquiry"}</span>
                  </motion.button>
                </div>

                {/* Under-Form Verification Support Footnote */}
                <div className="flex items-center justify-center gap-1.5 text-[9px] font-bold text-slate-400 uppercase tracking-wide pt-2">
                  <HelpCircle size={12} className="text-sky-500 flex-shrink-0" />
                  <span>Submission triggers an end-to-end encrypted blueprint compile for your WhatsApp routing line.</span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}