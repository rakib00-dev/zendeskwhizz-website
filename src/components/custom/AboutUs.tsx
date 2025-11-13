import React from "react";
import Button from "../common/Button";
import Image from "next/image";
import ModalButton from "../common/ModalButton";

// Team members data (kept for the "Meet the Team" section)
const teamMembers = [
  {
    name: "Rehan",
    role: "Founder & Lead Automation Developer",
    bio: "Specializes in integrating high-reliability, next-gen chatbot intelligence.",
    image: "/images/aboutus/user.png",
  },
  {
    name: "Rakib",
    role: "Support, Management & Engineer",
    bio: "Expert in bulletproof web architecture and 3X resolution increases.",
    image: "/images/aboutus/user.png",
  },
];

// Core values data (mapped to your key service areas)
const coreValues = [
  {
    icon: "🤖",
    title: "Automation",
    description:
      "Driving success by transforming complex customer journeys into effortless, automated flows.",
  },
  {
    icon: "🔒",
    title: "Reliability",
    description:
      "Guaranteed 99.9% system uptime through expert CRM and web architecture solutions.",
  },
  {
    icon: "🚀",
    title: "Intelligence",
    description:
      "Leveraging next-generation chatbot intelligence to dramatically increase service resolution.",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section
        className="baseContainer relative h-96 bg-cover bg-center bg-gray-800 flex items-center justify-center p-6"
        style={{
          backgroundImage: "/images/aboutus/team.jpeg",
        }}
      >
        {" "}
        {/* Placeholder Image URL */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="z-10 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
            Transforming complex customer journeys into{" "}
            <span className="text-[var(--primary-color)]">
              effortless, automated success.
            </span>
          </h1>
          <p className="text-xl sm:text-2xl font-light">
            We deliver next-generation intelligence and bulletproof
            architecture.
          </p>
        </div>
      </section>

      {/* --- */}

      {/* Our Mission/Story Section (Focus on our core promise) */}
      <section
        id="about"
        className=" baseContainer px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Promise: Reliability & Results
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            {/* Placeholder Image */}
            <div className="relative h-full w-full">
              <Image
                src="/images/aboutus/team2.jpeg"
                alt="Team collaboration"
                className="object-cover rounded-xl shadow-2xl"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100vw", height: "auto" }}
              />
            </div>
          </div>
          <div className="lg:w-1/2 text-gray-800 space-y-6">
            <p className="text-lg leading-relaxed">
              We focus on building rock-solid systems that allow you to focus
              &quot;100% on running your business&quot;. Our deep &quot;CRM
              expertise&quot; is the foundation for guaranteed performance.
            </p>
            <p className="text-xl leading-relaxed border-l-4 border-[var(--primary-color)] pl-4 italic bg-[var(--primary-color)]/10 p-3 rounded-lg font-semibold">
              &quot;Gain guaranteed 99.9% system reliability and a 3X increase
              in automated service resolution.&quot;
            </p>
            <p className="text-lg leading-relaxed">
              From &quot;Manychat&quot; integrations that supercharge engagement
              on social platforms to building tools within &quot;Intercom&quot;
              and &quot;Zendesk&quot;, we bridge the gap between complex
              technology and simple, effective customer service.
            </p>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Core Values Section (Mapped to Service Pillars) */}
      {/* <section className="bg-[var(--primary-color)]/10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="baseContainer">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Expertise & Service Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* --- */}

      {/* Meet the Team Section (Placeholder text changed for context) */}
      <section className="px-4 sm:px-6 bg-gray-100">
        <div className="baseContainer">
          <h2 className=" text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            The Experts Behind the Automation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-[var(--primary-color)]/30 p-6 border-1 shadow-md"
              >
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full ring-4 ring-[var(--primary-color-hover)] ring-offset-2"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-[var(--primary-color-light)] font-bold border mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 italic">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Call to Action (CTA) Section */}
      <section className=" bg-[var(--primary-color)] py-16 px-4 sm:px-6 lg:px-8 rounded">
        <div className="baseContainer text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Ready to Achieve 3X Automated Service Resolution?
          </h2>
          <p className="text-xl text-gray-500 mb-8">
            Leverage next-generation chatbot intelligence and bulletproof web
            architecture.
          </p>
          <div className="flex gap-3 justify-center items-center">
            <ModalButton />
            <Button
              text="Get In Touch"
              href="#contact"
              bgColor="bg-transparent hover:bg-[var(--primary-color-light)]"
              textColor="text-black"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
