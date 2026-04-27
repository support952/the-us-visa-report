import Image from "next/image";

const stories = [
  {
    name: "Omar Yaghi",
    title: "From Refugee to Nobel Laureate",
    origin: "Jordan",
    image: "/images/stories/omar-yaghi.svg",
    summary:
      "Born in Amman, Jordan, to a family of Palestinian refugees, Omar Yaghi grew up in a household with no electricity and limited resources. At age 15, his father sent him alone to America. Arriving in New York as a teenager with barely any English, he started at a community college, supporting himself by mopping floors and working in grocery stores while studying chemistry late into the night. Today, he is a professor at UC Berkeley and won the 2025 Nobel Prize in Chemistry for inventing materials that can pull clean drinking water out of thin desert air — a technology now saving lives in water-scarce regions.",
  },
  {
    name: "Yoshinobu Yamamoto",
    title: "World Series MVP",
    origin: "Japan",
    image: "/images/stories/yoshinobu-yamamoto.svg",
    summary:
      "After becoming the greatest pitcher in Japanese history, Yamamoto signed a record-breaking $325 million contract with the Los Angeles Dodgers in 2024. The transition was not easy — he had to adapt to a different ball, a different schedule, and a language he did not speak fluently. Critics doubted whether he could handle the pressure of the U.S. Major Leagues. He silenced them in the 2025 World Series, pitching a masterpiece that led the Dodgers to a championship and earning him the World Series MVP. He is now the face of a new generation of Japanese immigrants reshaping American culture and sports.",
  },
  {
    name: "Weini Kelati",
    title: "From Asylum Seeker to Olympian",
    origin: "Eritrea",
    image: "/images/stories/weini-kelati.svg",
    summary:
      "In 2014, at age 17, Weini Kelati was one of the top junior runners in the world. When she traveled to Oregon for the World Junior Championships, she realized this was her only chance. She disappeared from her team's hotel and sought asylum. For months she lived in hiding in Virginia, barely speaking English and terrified of being deported. Once granted asylum, she dominated college track. In 2024, she officially became a U.S. citizen and, just weeks later, won the 10,000-meter race at the U.S. Olympic Trials, representing the U.S. in Paris.",
  },
  {
    name: "Joel Mokyr",
    title: "Nobel Prize in Economics",
    origin: "Netherlands",
    image: "/images/stories/joel-mokyr.svg",
    summary:
      "Born in 1946 in the Netherlands to Holocaust survivors, Mokyr moved to the U.S. to pursue his PhD at Yale. He spent decades as a professor at Northwestern University, arguing that useful knowledge and the free exchange of ideas are the true engines of a wealthy society. In 2025, he was awarded the Nobel Prize in Economics for proving that a society's openness to new ideas — much like the openness that allowed him to thrive in the U.S. — is what drives long-term prosperity.",
  },
];

export default function ImmigrantStories() {
  return (
    <div>
      <h2 className="text-[9px] font-sans font-semibold text-ink uppercase tracking-[0.25em] pb-2.5 border-b-2 border-ink mb-8 inline-block">
        Most Inspiring Immigrant Stories
      </h2>

      <div className="space-y-10">
        {stories.map((story, i) => (
          <div
            key={story.name}
            className={`grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 ${
              i > 0 ? "pt-10 border-t border-rule" : ""
            }`}
          >
            {/* Image */}
            <div className={`md:col-span-2 ${i % 2 === 1 ? "md:order-last" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden bg-paper-warm">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <p className="text-[9px] font-sans text-ink-faint mt-1.5 italic">
                {story.name} — {story.origin}
              </p>
            </div>

            {/* Text */}
            <div className="md:col-span-3 flex flex-col justify-center">
              <span className="text-[8px] font-sans font-semibold text-crimson-text uppercase tracking-[0.2em]">
                {story.origin}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-ink mt-1 leading-snug">
                {story.name}: {story.title}
              </h3>
              <p className="text-[13px] font-sans text-ink-soft mt-3 leading-[1.8] font-light">
                {story.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
