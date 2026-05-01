export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-16">

      {/* HERO */}
      <section className="text-center mt-10">
        <h1 className="text-4xl md:text-6xl font-bold">
          Rivaldy Putra Rivly
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          AI & Data Science Enthusiast | Building Scalable Tech for Education
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Universitas Indonesia • ETH Zurich Research • Samsung SFT 🥈
        </p>
      </section>

      {/* ABOUT */}
      <section className="mt-24 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
          About Me
        </h2>
        <p className="mt-4 text-gray-300 leading-relaxed">
          I am an Information Systems student at Universitas Indonesia with a strong
          interest in Artificial Intelligence, Data Science, and Education Technology.
          I have worked on international research projects and built impactful digital
          solutions used by students across Indonesia.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="mt-24 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
          Projects
        </h2>

        <div className="mt-6 grid md:grid-cols-2 gap-6">

          <div className="p-5 border border-gray-800 rounded-xl hover:border-gray-500 transition">
            <h3 className="text-lg font-semibold">
              Keyword RGB
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              AI-based learning platform with gamification. 2nd Place Samsung Solve for Tomorrow.
            </p>
          </div>

          <div className="p-5 border border-gray-800 rounded-xl hover:border-gray-500 transition">
            <h3 className="text-lg font-semibold">
              AI Contact Prediction
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Deep learning model to predict human-object interaction (ETH Zurich).
            </p>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mt-24 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
          Experience
        </h2>

        <ul className="mt-6 space-y-4 text-gray-300">
          <li>
            <strong>Product Development Intern</strong> – IEG (USA)
          </li>
          <li>
            <strong>SAT Tutor</strong> – Kobi Education
          </li>
          <li>
            <strong>Project Manager Trainee</strong> – BEM Fasilkom UI
          </li>
        </ul>
      </section>

      {/* SKILLS */}
      <section className="mt-24 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
          Skills
        </h2>

        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          {["Python", "JavaScript", "SQL", "Machine Learning", "Next.js", "Tailwind", "Flutter"].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-gray-800 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="mt-24 text-center">
        <h2 className="text-2xl font-semibold">
          Contact
        </h2>
        <p className="mt-4 text-gray-400">
          rivaldy.rivly@gmail.com
        </p>
      </section>

    </main>
  );
}