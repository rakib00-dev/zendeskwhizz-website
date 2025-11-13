import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="relative w-full overflow-hidden">
      <div className="baseContainer">
        <h1 className="md:text-6xl text-4xl font-bold">Our Services</h1>
        <div>
          <div className="py-6 md:py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href={"#pricing"}
              className="transition-all group duration-200 bg-[var(--secondary-color)] p-4 flex flex-col justify-around items-start gap-10 py-6 ring-1 hover:ring-2"
            >
              <div className="grid gap-3">
                <h2 className="text-2xl font-semibold">Manychat</h2>
                <p className="text-sm">
                  Integrate ManyChat and Sell more, engage better, and grow your
                  audience with powerful automations for Instagram, WhatsApp,
                  TikTok, and Messenger.
                </p>
              </div>
              <div className="w-full rounded-full transition-all duration-200 overflow-hidden">
                <div className="relative group-hover:bg-white rounded-full overflow-hidden group-hover:w-full transition-all duration-200 ">
                  <p className="transition-all duration-200 absolute flex justify-center opacity-0 items-center pt-1 px-3 group-hover:opacity-100">
                    See Pricing
                  </p>
                  <div className="transition-all duration-300 right-0 rounded-full flex justify-center items-center bg-[var(--primary-color-hover)] h-9 w-9 relative group-hover:-right-[85%]">
                    <FaArrowRight className="size-3 text-black" />
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href={"#pricing"}
              className="transition-all group duration-200 bg-[var(--secondary-color)] p-4 flex flex-col justify-around items-start gap-10 py-6 ring-1 hover:ring-2"
            >
              <div className="grid gap-3">
                <h2 className="text-2xl font-semibold">Intercom</h2>
                <p className="text-sm">
                  Intercom is the AI customer service company, where our experts
                  build the and setup the tools for you
                </p>
              </div>
              <div className="w-full rounded-full transition-all duration-200 overflow-hidden">
                <div className="relative group-hover:bg-white rounded-full overflow-hidden group-hover:w-full transition-all duration-200">
                  <p className="transition-all duration-200 absolute flex justify-center opacity-0 items-center pt-1 px-3 group-hover:opacity-100">
                    See Pricing
                  </p>
                  <div className="transition-all duration-300 right-0 rounded-full flex justify-center items-center bg-[var(--primary-color-hover)] h-9 w-9 relative group-hover:-right-[85%]">
                    <FaArrowRight className="size-3 text-black" />
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href={"#pricing"}
              className="transition-all group duration-200 bg-[var(--secondary-color)] p-4 flex flex-col justify-around items-start gap-10 py-6 ring-1 hover:ring-2"
            >
              <div className="grid gap-3">
                <h2 className="text-2xl font-semibold">Zendesk</h2>
                <p className="text-sm">
                  Zendesk is the ultimate customer service and engagement
                  platform that turns every interaction into a ticket, giving
                  your agents a single, simple view to solve problems faster.
                </p>
              </div>
              <div className="w-full rounded-full transition-all duration-200 overflow-hidden">
                <div className="relative group-hover:bg-white rounded-full overflow-hidden group-hover:w-full transition-all duration-200">
                  <p className="transition-all duration-200 absolute flex justify-center opacity-0 items-center pt-1 px-3 group-hover:opacity-100">
                    See Pricing
                  </p>
                  <div className="transition-all duration-300 right-0 rounded-full flex justify-center items-center bg-[var(--primary-color-hover)] h-9 w-9 relative group-hover:-right-[85%]">
                    <FaArrowRight className="size-3 text-black" />
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href={"#pricing"}
              className="transition-all group duration-200 bg-[var(--secondary-color)] p-4 flex flex-col justify-around items-start gap-10 py-6 ring-1 hover:ring-2"
            >
              <div className="grid gap-3">
                <h2 className="text-2xl font-semibold">Other It Services</h2>
                <p className="text-sm">
                  Let us handle all your technology needs from system support
                  and web app development, Digital Marketing, Business strategy
                  building to rock-solid so you can focus 100% on running your
                  business.
                </p>
              </div>
              <div className="w-full rounded-full transition-all duration-200 overflow-hidden">
                <div className="relative group-hover:bg-white rounded-full overflow-hidden group-hover:w-full transition-all duration-200">
                  <p className="transition-all duration-200 absolute flex justify-center opacity-0 items-center pt-1 px-3 group-hover:opacity-100">
                    See Pricing
                  </p>
                  <div className="transition-all duration-300 right-0 rounded-full flex justify-center items-center bg-[var(--primary-color-hover)] h-9 w-9 relative group-hover:-right-[85%]">
                    <FaArrowRight className="size-3 text-black" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
