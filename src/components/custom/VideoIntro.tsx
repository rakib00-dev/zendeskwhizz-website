export default function VideoIntro() {
  return (
    <section className="stikcy top-10 w-full overflow-hidden">
      <div className="baseContainer grid gap-10">
        {/* <h1 className="md:text-6xl text-4xl font-bold">Our Services</h1> */}

        <div>
          <iframe
            src="https://www.youtube.com/embed/6xQO5Rjz-v8"
            className="w-full aspect-video border-[var(--primary-color)] outline-black/5 outline-7 border-8 rounded-2xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
