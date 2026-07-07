// Data.js
import { 
  FileText, 
  BookOpen, 
  MessageSquare, 
  Calculator, 
  Building2, 
  Briefcase, 
  Newspaper, 
  Mail 
} from 'lucide-react';

export const NAVBAR_DATA = {
  logoText: "AgencyOS",
  navLinks: [
    { label: "Features", href: "#features", hasDropdown: false },
    { label: "Integrations", href: "#integrations", hasDropdown: false },
    { label: "Resources", href: "#resources", hasDropdown: true },
    { label: "Pricing", href: "#pricing", hasDropdown: false },
  ],
  resourcesDropdown: {
    resources: [
      {
        title: "Blog",
        description: "Get the latest payroll tips and compliance updates.",
        href: "/blog",
        icon: FileText,
        badge: "New"
      },
      {
        title: "Guides & Templates",
        description: "Access payroll setup guides and templates.",
        href: "/guides",
        icon: BookOpen
      },
      {
        title: "Customer Stories",
        description: "See how businesses streamlined payroll with us.",
        href: "/stories",
        icon: MessageSquare
      },
      {
        title: "Payroll tax calculator",
        description: "Estimate payroll taxes instantly with our easy-to-use calculator.",
        href: "/calculator",
        icon: Calculator
      }
    ],
    company: [
      {
        title: "About Us",
        description: "Streamlining payroll management for businesses.",
        href: "/about",
        icon: Building2
      },
      {
        title: "Careers",
        description: "Join our growing team and help us redefine payroll solutions.",
        href: "/careers",
        icon: Briefcase,
        badge: "Hiring"
      },
      {
        title: "Press & Media",
        description: "Read the latest news and announcements from our company.",
        href: "/press",
        icon: Newspaper
      },
      {
        title: "Contact Us",
        description: "Need help or want to learn more? Reach out to our support team.",
        href: "/contact",
        icon: Mail
      }
    ],
    featured: {
      tag: "What's New",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80", // High quality fallback visual block matching your design dashboard look
      title: "Real-Time Payroll Insights",
      description: "Track payroll expenses and employee payouts instantly with our interactive dashboard.",
      linkText: "Explore the new feature",
      href: "/features/insights"
    }
  }
};