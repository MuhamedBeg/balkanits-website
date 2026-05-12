import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { partners } from "../data/partners";
import PartnerCarousel from "../components/PartnerCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-r from-blue-950 to-blue-700 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">

          <div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Driving smart education for intelligent mobility
            </h1>

            <p className="mt-6 max-w-2xl text-xl text-blue-100">
              BalkanITS modernises higher education in Intelligent Transport
              Systems across the Western Balkans through innovation,
              collaboration and digital learning.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 font-semibold transition-all duration-300 hover:bg-red-700">
                Learn More
              </button>

              <button className="rounded-lg border border-white px-6 py-3 font-semibold transition-all duration-300 hover:bg-white hover:text-blue-900">
                Discover the Project
              </button>
            </div>

            <div className="mt-10 rounded-xl bg-white/15 border border-white/20 p-4 backdrop-blur-sm inline-block">
              <p className="text-sm text-blue-100">
                Co-funded by the Erasmus+ Programme of the European Union
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/hero.png"
              alt="Smart mobility"
              width={900}
              height={700}
              className="rounded-3xl shadow-2xl"
              priority
            />
          </div>

        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
          {[
            ["10", "Partners"],
            ["6", "Countries"],
            ["36", "Months"],
            ["30", "ECTS Microcredentials"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-2xl bg-white p-6 text-center shadow-lg shadow-blue-100/40"
            >
              <h2 className="text-4xl font-bold text-blue-700">{number}</h2>
              <p className="mt-2 text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="about" className="bg-white py-20 scroll-mt-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>
            <p className="mb-3 font-semibold tracking-widest text-red-600">
              ABOUT THE PROJECT
            </p>

            <h2 className="text-4xl font-bold text-blue-950">
              Modernising Intelligent Transport Systems education
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              BALKANITS is an Erasmus+ Capacity Building in Higher Education
              project focused on modernising Intelligent Transport Systems (ITS)
              education across the Western Balkans. The project develops innovative
              master curricula, micro-credentials and digital learning tools aligned
              with EU standards, Bologna principles and labour market needs,
              supporting smarter, safer and more sustainable mobility systems.
            </p>

            <div className="mt-8">
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-red-600">
                    PROJECT DURATION
                  </p>

                  <p className="mt-2 whitespace-nowrap text-base font-bold text-blue-950">
                    1 Jan 2026 – 31 Dec 2028
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-red-600">
                    ERASMUS+ GRANT
                  </p>

                  <p className="mt-2 text-lg font-bold text-blue-950">
                    797,844.00 EUR
                  </p>
                </div>
              </div>

              <a
                href="/about"
                className="mt-8 inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-800"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-2xl bg-blue-50 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-900">
                Digital Learning
              </h3>

              <p className="mt-4 text-gray-600">
                Innovative ITS learning materials and online education.
              </p>
            </div>

            <div className="rounded-2xl bg-red-50 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-red-700">
                Collaboration
              </h3>

              <p className="mt-4 text-gray-600">
                Connecting universities, researchers and industry partners.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-950">
                Innovation
              </h3>

              <p className="mt-4 text-gray-600">
                Supporting smart mobility and sustainable transport systems.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-100 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-800">
                EU Standards
              </h3>

              <p className="mt-4 text-gray-600">
                Aligning ITS education with European higher education goals.
              </p>
            </div>

          </div>

        </div>
      </section>
<section id="consortium" className="bg-slate-50 py-20 scroll-mt-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-3 font-semibold tracking-widest text-red-600">
          OUR CONSORTIUM
        </p>

        <h2 className="text-4xl font-bold text-blue-950">
          Nine universities connecting EU and Western Balkan expertise
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
          The BALKANITS consortium brings together three EU partner universities
          and six Western Balkan partner universities to develop innovative ITS
          master curricula, micro-credentials and digital learning tools.
        </p>
      </div>

      <Link
        href="/consortium"
        className="shrink-0 rounded-lg border border-blue-700 px-5 py-3 font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-700 hover:text-white"
      >
        View All Partners
      </Link>
    </div>

    <PartnerCarousel />
  </div>
</section>
      <section id="events" className="bg-white py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="mb-3 font-semibold tracking-widest text-red-600">
                UPCOMING EVENTS
              </p>

              <h2 className="text-4xl font-bold text-blue-950">
                Project meetings, workshops and conferences
              </h2>
            </div>

            <button className="rounded-lg border border-blue-700 px-5 py-3 font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-700 hover:text-white">
              View All Events
            </button>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["15–16 May 2025", "Kick-off Meeting", "Sarajevo, Bosnia and Herzegovina"],
              ["10–11 July 2025", "Workshop Montenegro", "Podgorica, Montenegro"],
              ["8–12 September 2025", "Summer School on ITS", "Split, Croatia"],
              ["20–21 November 2025", "International Conference", "Bucharest, Romania"],
            ].map(([date, title, location]) => (
              <div
                key={title}
                className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-blue-100/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="h-36 bg-gradient-to-br from-blue-700 to-blue-950"></div>

                <div className="p-6">
                  <p className="text-sm font-semibold text-red-600">{date}</p>

                  <h3 className="mt-3 text-xl font-bold text-blue-950">
                    {title}
                  </h3>

                  <p className="mt-3 text-gray-600">{location}</p>

                  <button className="mt-6 font-semibold text-blue-700">
                    Details →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <section id="dissemination" className="bg-slate-50 py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="mb-3 font-semibold tracking-widest text-red-600">
                LATEST NEWS
              </p>

              <h2 className="text-4xl font-bold text-blue-950">
                Dissemination and project activities
              </h2>
            </div>

            <button className="rounded-lg border border-blue-700 px-5 py-3 font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-700 hover:text-white">
              View All News
            </button>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              [
                "BalkanITS Kick-off Meeting Successfully Held in Sarajevo",
                "22 May 2025"
              ],
              [
                "BalkanITS Digital Platform Development Started",
                "2 June 2025"
              ],
              [
                "Curriculum Development Workshops Initiated",
                "15 June 2025"
              ]
            ].map(([title, date]) => (
              <div
                key={title}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="h-52 bg-gradient-to-br from-blue-600 to-blue-950"></div>

                <div className="p-6">
                  <p className="text-sm font-semibold text-red-600">
                    {date}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold leading-tight text-blue-950">
                    {title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    Dissemination activities and collaborative project
                    meetings supporting intelligent transport systems
                    education modernisation.
                  </p>

                  <button className="mt-6 font-semibold text-blue-700">
                    Read More →
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section id="deliverables" className="bg-white py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="mb-3 font-semibold tracking-widest text-red-600">
                DELIVERABLES
              </p>

              <h2 className="text-4xl font-bold text-blue-950">
                Project outputs and official documents
              </h2>
            </div>

            <button className="rounded-lg border border-blue-700 px-5 py-3 font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-700 hover:text-white">
              View All Deliverables
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["D1.1", "Project Management Plan", "WP1"],
              ["D2.1", "Needs Analysis Report", "WP2"],
              ["D3.1", "ITS Curriculum Framework", "WP3"],
              ["D4.1", "Digital Learning Materials", "WP4"],
              ["D5.1", "Dissemination Strategy", "WP5"],
              ["D6.1", "Quality Assurance Report", "WP6"],
            ].map(([code, title, wp]) => (
              <div
                key={code}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <p className="text-sm font-bold text-red-600">{wp}</p>

                <h3 className="mt-3 text-xl font-bold text-blue-950">
                  {code} — {title}
                </h3>

                <p className="mt-4 text-gray-600">
                  Official project deliverable prepared within the BalkanITS
                  implementation framework.
                </p>

                <button className="mt-6 rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-800">
                  Download PDF
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>


      <Footer />
    </main>
  );
}