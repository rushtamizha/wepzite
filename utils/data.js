// Data.js
import { link } from 'framer-motion/client';
import { 
  FileText, 
  BookOpen, 
  MessageSquare, 
  Calculator, 
  Building2, 
  Briefcase, 
  Newspaper, 
  Mail, 
  Layers,
  DollarSign,
  Car,
  Clock,
  Shield,
  Home
} from 'lucide-react';

// Example structure matching the layout engine

export const company = {
    name:"Wepzite",
    logo:"/logo.webp"
}
export const navData = [
    {
      icon: <Home size={16} />,
        name:"Home",
         link: "/",
    },
  {
    name: "Services",
    icon: <Layers size={16} />,
    link:"/services"
    // dropdown: {
    //   "Development": [
    //     { title: "Landing Pages", description: "Premium one-way drops or round trips.", icon: Car, href: "/services/outstation" },
    //     { title: "Business Websites", description: "Premium one-way drops or round trips.", icon: Car, href: "/services/outstation" },
    //     { title: "Premium Websites", description: "Premium one-way drops or round trips.", icon: Car, href: "/services/outstation" },
    //     { title: "High-Converting E-Commerce", description: "Premium one-way drops or round trips.", icon: Car, href: "/services/outstation" },
    //     { title: "Custom Web Development", description: "Hourly car rentals inside city boundaries.", icon: Clock, href: "/services/hourly" },
    //   ], "App Development": [
    //     { title: "Taxi App Development", description: "Business class spatial ride layout choices.", icon: Shield, href: "/fleet/sedans" },
    //     { title: "E-Commerce App Development", description: "Business class spatial ride layout choices.", icon: Shield, href: "/fleet/sedans" },
    //     { title: "Custom Native App Development", description: "Business class spatial ride layout choices.", icon: Shield, href: "/fleet/sedans" },
    //   ], "Digital Marketing": [
    //     { title: "Smart WhatsApp Automation", description: "Business class spatial ride layout choices.", icon: Shield, href: "/fleet/sedans" },
    //     { title: "High-Level SEO Optimization", description: "Business class spatial ride layout choices.", icon: Shield, href: "/fleet/sedans" },
    //     { title: "AI Branding & Digital Assets", description: "Business class spatial ride layout choices.", icon: Shield, href: "/fleet/sedans" },
    //   ]
    // }
  },  {
    name: "Our Works",
    icon: <Layers size={16} />,
    link:"/portfolio"
  }, 
  {
    name: "Pricing",
    link: "/pricing",
    icon: <DollarSign size={16} />
  },{
    name: "About",
    link: "/about",
    icon: <DollarSign size={16} />
  }
];