import React from "react";
import { Zap, Bot, MessageSquare, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Button from "../common/Button";

interface PlatformPackage {
  name: string;
  tagline: string;
  price: number;
  icon: LucideIcon;
  description: string;
  features: string[];
  highlight: boolean;
  cta: string;
}

// Data structured specifically around the three core platforms
const platformPackages: PlatformPackage[] = [
  {
    name: "Manychat Growth Package",
    tagline: "High-Engagement Social Automation",
    price: 300,
    icon: Bot,
    description:
      "Integrate ManyChat and Sell more, engage better, and grow your audience with powerful automations for Instagram, WhatsApp, TikTok, and Messenger.",
    features: [
      "Up to 5 custom automation flows",
      "Social media lead generation funnels",
      "Multi-platform bot integration",
      "Basic reporting setup",
    ],
    highlight: false,
    cta: "Starting at $300",
  },
  {
    name: "Intercom AI Intelligence",
    tagline: "Expert-Built AI Customer Service",
    price: 500,
    icon: Zap,
    description:
      "Intercom is the AI customer service company. Our experts build and set up the tools for you, ensuring seamless integration and leveraging advanced intelligence.",
    features: [
      "CRM Audit & Initial Setup",
      "Help Center",
      "Business Messenger",
      "Macros & Inbox Automation",
      "Conversation Topics, Attributes & Tags",
    ],
    highlight: true,
    cta: "Starting at $500",
  },
  {
    name: "Zendesk Efficiency Suite",
    tagline: "Ultimate Customer Service Platform",
    price: 500,
    icon: MessageSquare,
    description:
      "Zendesk turns every interaction into a ticket, giving your agents a single, simple view to solve problems faster and manage customer engagement efficiently.",
    features: [
      "Unified ticket management system",
      "Agent workflow optimization",
      "Comprehensive macro and trigger configuration",
      "Advanced reporting and analytics",
    ],
    highlight: false,
    cta: "Starting at $500",
  },
];

// Reusable Pricing Card Component
const PlatformPricingCard = (pkg: PlatformPackage) => {
  const highlightClasses = pkg.highlight
    ? "bg-white ring-4 ring-[var(--primary-color)] shadow-2xl scale-[1.02] transform transition-transform"
    : "bg-white shadow-xl";
  const ctaClasses = pkg.highlight
    ? "bg-[var(--primary-color)] text-black hover:bg-[var(--primary-color-hover)]"
    : "bg-[var(--primary-color-extralight)] text-black hover:bg-[var(--primary-color-extralight)]";

  // Destructure the icon component for correct rendering
  const IconComponent = pkg.icon;

  return (
    <div
      className={`flex flex-col p-8 outline-2 hover:outline-4 duration-300 ${highlightClasses}`}
    >
      <div className="flex-grow">
        {/* Icon and Tagline */}
        <IconComponent
          className={`w-8 h-8 mb-4 ${
            pkg.highlight ? "text-[var(--primary-color)]" : "text-green-600"
          }`}
        />
        <p
          className={`text-xs md:text-sm font-bold uppercase tracking-wider mb-2 ${
            pkg.highlight
              ? "text-[var(--primary-color-hover)]"
              : "text-gray-500"
          }`}
        >
          {pkg.tagline}
        </p>

        {/* Name and Price */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {pkg.name}
        </h3>
        <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 border-b pb-6">
          <span className="text-lime-600">$</span>
          {pkg.price.toLocaleString()}
        </p>

        {/* Description */}
        <p className="text-gray-600 mb-6 max-md:text-xs">{pkg.description}</p>

        {/* Features List */}
        <ul role="list" className="space-y-3 mb-8">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle
                className="flex-shrink-0 w-5 h-5 text-green-500 mt-1"
                aria-hidden="true"
              />
              <p className="ml-3 text-base text-gray-700">{feature}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action Button */}
      <Button
        href="#contact"
        text={pkg.cta}
        className="w-full text-center"
        textSize="text-sm md:text-md"
      />
    </div>
  );
};

const SimplePricingSelector = () => {
  return (
    <div id="pricing" className=" bg-gray-100 py-20 font-sans">
      <div className="baseContainer px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold tracking-wider italic w-fit mx-auto bg-[var(--primary-color-hover)] uppercase">
            Choose Your Platform Solution
          </h2>
          <p className="mt-2 text-3xl md:text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Integrate, Automate, Succeed.
          </p>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Select the platform package that best fits your customer engagement
            and service resolution goals. All projects include expert setup and
            support.
          </p>
        </div>
        {/* Pricing Grid (3 columns for the 3 platforms) */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          {platformPackages.map((pkg, index) => (
            <PlatformPricingCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimplePricingSelector;
