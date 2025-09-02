export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center">
        About <span className="text-blue-500">Us</span>
      </h1>

      {/* Content */}
      <div className="max-w-4xl text-center space-y-6 text-lg md:text-xl">
        <p>
          At <span className="text-yellow-400 font-semibold">StudyBuddy</span>, we
          help <span className="text-green-400 font-semibold">students</span> achieve
          their goals efficiently by generating personalized{" "}
          <span className="text-blue-400 font-semibold">learning roadmaps</span> for
          them using the <span className="text-purple-400 font-semibold">Gemini API</span>.
        </p>

        <p>
          Our platform is designed to make learning structured, effective, and
          enjoyable. By leveraging modern web technologies and AI-powered
          tools, we provide students with a clear path to success in their
          studies.
        </p>

        <p>
          <span className="text-pink-400 font-semibold">Our Mission:</span> To
          empower learners by providing innovative tools and personalized
          guidance, helping them stay organized, motivated, and confident in
          their academic journey.
        </p>
      </div>
    </div>
  );
}
