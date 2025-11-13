import TestimonialCard from "../common/TestimonailCard";

const Testimonial = () => {
  return (
    <section className=" mb-25 bg-white py-10">
      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 grid gap-15 md:gap-3">
        <div className="py-6 grid place-items-center w-full gap-3 md:pr-15 mb-5 rounded relative">
          <h2 className="md:text-6xl text-4xl font-bold pb-2">Testimonials</h2>
          <p className="text-gray-500">
            Some reviews{" "}
            <span className="pb-2 border-b-4 border-[var(--primary-color)]">
              from our
            </span>{" "}
            course buyers
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <TestimonialCard
            src="/images/testimonial/testimonial-03-free-img.jpg"
            p="This course exceeded my expectations! The instructor explained complex topics in a simple way, and the examples were very practical. I feel much more confident applying what I’ve learned."
            name="Jannete Adams"
            fiveStar
          />
          <TestimonialCard
            src="/images/testimonial/jenifer.jpeg"
            p="Overall a solid course. The content was clear and well-structured, though I wish there were more real-world case studies. Still, it gave me a strong foundation to build on."
            name="Jennifer Diaz"
            title="Intercom certification course"
          />
          <TestimonialCard
            src="/images/testimonial/jems.jpeg"
            p="Absolutely worth the time! The pacing was perfect, and the assignments really helped me understand each concept. I’d definitely recommend this to beginners and intermediates alike."
            name="Jason Gold"
          />
          <TestimonialCard
            src="/images/testimonial/testimonial-07-free-img.jpg"
            p="The course had good information, but some sections felt rushed and lacked detail. With a bit more depth and updated resources, it could be excellent."
            name="Kate Eddison"
            title="Fresh Desk Course"
            fiveStar
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
