import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
        <Navbar />
      <section className="bg-gradient-to-r from-blue-950 to-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 font-semibold tracking-widest text-red-300">
            ABOUT BALKANITS
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight">
            EU-Balkan Innovative Master Curricula in Intelligent Transport Systems
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-blue-100">
            Erasmus+ Capacity Building in Higher Education project focused on
            modernising Intelligent Transport Systems education in the Western Balkans.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-blue-950">Project Overview</h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Efficient and sustainable road transport is essential for economic
            and social development. However, many countries face challenges such
            as traffic congestion, road accidents, high costs, environmental
            impact, and the growing demand and complexity of mobility for both
            people and goods.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Intelligent Transportation Systems offer modern solutions by
            integrating technology, real-time data, engineering and automation
            across road infrastructure, vehicles and users. BALKANITS aims to
            develop, adapt and implement innovative master programmes,
            micro-credentials and digital learning tools aligned with EU
            standards, Bologna requirements, best practices and national
            accreditation standards.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-6">
              <p className="text-sm font-bold text-red-600">PROJECT NO.</p>
              <p className="mt-2 text-xl font-bold text-blue-950">
                101236409 ERASMUS-EDU-2025-CBHE
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <p className="text-sm font-bold text-red-600">DURATION</p>
              <p className="mt-2 text-xl font-bold text-blue-950">
                1 January 2026 – 31 December 2028
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <p className="text-sm font-bold text-red-600">GRANT AMOUNT</p>
              <p className="mt-2 text-xl font-bold text-blue-950">
                797,844.00 EUR
              </p>
            </div>
          </div>

          <h2 className="mt-16 text-3xl font-bold text-blue-950">
            Specific and Wider Objectives
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            The wider objective of the BALKANITS project is to modernise and
            harmonise higher education in Intelligent Transport Systems in the
            Western Balkans by developing innovative master curricula,
            micro-credentials and digital learning tools aligned with EU
            standards, Bologna requirements, labour market needs and sustainable
            mobility goals.
          </p>

          <ol className="mt-8 list-decimal space-y-4 pl-6 text-lg leading-8 text-gray-700">
            <li>Develop and implement new full Master’s Degree Programmes in ITS.</li>
            <li>Develop new Micro-Credential Master Curricula.</li>
            <li>Design specialised single-subject courses for professionals.</li>
            <li>Explore possibilities for double or joint master’s degrees.</li>
            <li>Establish an All-in-One web-based platform.</li>
            <li>Develop OpenCourseWare teaching materials and digital resources.</li>
            <li>Establish a web-based EU-Balkan ITS network.</li>
            <li>Develop an interactive web-based traffic database.</li>
            <li>Prepare a Handbook of EU-Balkan standards and best practices in ITS.</li>
            <li>Develop innovative educational tools including VR resources and mobile applications.</li>
          </ol>

          <h2 className="mt-16 text-3xl font-bold text-blue-950">
            Expected Project Outcomes
          </h2>

          <div className="mt-8 grid gap-6">
            {[
              "Development and adaptation of innovative ITS master curricula and micro-credentials",
              "Strengthened capacities of universities and academic staff",
              "Establishment of an All-in-One web-based platform",
              "Improved cooperation between academia and stakeholders",
              "Increased practical ITS skills among students and professionals",
              "Sustainable regional framework for ITS education and innovation",
            ].map((outcome) => (
              <div
                key={outcome}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-blue-950">{outcome}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}