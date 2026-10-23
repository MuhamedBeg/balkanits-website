import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { partners } from "../data/partners";
import PartnerCarousel from "../components/PartnerCarousel";
import {
  Users,
  Globe,
  CalendarDays,
  GraduationCap,
} from "lucide-react";



export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />






      <section className="bg-gradient-to-r from-blue-950 to-blue-700 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-block rounded-xl bg-white p-3 shadow-xl">
              <Image
                src="/images/logo.png"
                alt="BALKANITS Logo"
                width={220}
                height={90}
                className="h-auto w-44 md:w-56"
                priority
              />
            </div>

            <h1 className="mt-6 max-w-4xl text-3xl font-extrabold leading-snug md:text-4xl">
              EU-Balkan Innovative Master Curricula in Intelligent Transport Systems
              (ITS), supported with All-in-One Web-based Platform – BALKANITS
            </h1>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#about"
                className="rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1"
              >
                Learn More
              </a>

              <a
                href="/about"
                className="rounded-lg border border-white px-6 py-3 font-semibold transition-all duration-300 hover:bg-white hover:text-blue-900"
              >
                Discover the Project
              </a>
            </div>

            <div className="mt-10 inline-block rounded-xl border border-white/20 bg-white/15 p-4 backdrop-blur-sm">
              <p className="text-sm text-blue-100">
                Co-funded by the Erasmus+ Programme of the European Union
              </p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/images/hero2.png"
              alt="Smart mobility"
              width={950}
              height={650}
              className="h-auto w-full max-w-xl rounded-3xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>





      <section className="py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
          {[
            { icon: Users, number: "10", label: "Partners" },
            { icon: Globe, number: "6", label: "Countries" },
            { icon: CalendarDays, number: "36", label: "Months" },
            { icon: GraduationCap, number: "30", label: "ECTS credentials" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                style={{
                  background: "#ffffff",
                  border: "1px solid #dbe4f0",
                  borderRadius: "22px",
                  padding: "26px 28px",
                  boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
                  minHeight: "150px",
                  display: "flex",
                  alignItems: "center",
                  gap: "22px",
                }}
              >
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "16px",
                    background: "#0b5ed7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 10px 22px rgba(11, 94, 215, 0.28)",
                  }}
                >
                  <Icon size={30} color="#ffffff" strokeWidth={2.2} />
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "38px",
                      lineHeight: "1",
                      fontWeight: 800,
                      color: "#003399",
                    }}
                  >
                    {item.number}
                  </div>

                  <div
                    style={{
                      marginTop: "8px",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#334155",
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
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

              <p className="mt-6 max-w-5xl text-lg leading-9 text-slate-600">
                The BALKANITS consortium brings together three EU partner universities and six Western Balkan partner universities to develop innovative ITS master curricula, micro-credentials and digital learning tools.
              </p>
            </div>

            <Link
              href="/consortium"
              className="mt-8 inline-flex items-center rounded-xl border border-blue-700 px-6 py-3 font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-700 hover:text-white hover:shadow-lg"
            >
              <center>View All Partners</center>
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
                EVENTS
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
              {
                date: "26–28 January 2026",
                title: "Kick-off Meeting",
                location: "Sarajevo, Bosnia and Herzegovina",
                image: "/images/kickoff.jpg",
                link: "https://www.unsa.ba/novosti/odrzan-kick-sastanak-erasmus-cbhe-projekta-balkanits-na-fakultetu-za-saobracaj-i",
              },
              
{
  date: "01–05 June 2026",
  title: "2nd Consortium Workshop",
  location: "Budva, Montenegro",
  image: "/images/workshop-montenegro.jpg",
  link: "https://www.unsa.ba/novosti/predstavnici-fakulteta-za-saobracaj-i-komunikacije-unsa-ucestvovali-na-drugom-konzorcijskom",
},
{
  date: "09 September 2026",
  title: "Project Meeting Held Under the Erasmus+ BalkanITS Project",
  location: "Faculty of Traffic and Communications, University of Sarajevo",
  image: "/images/kickoff.jpg",
  link: "https://www.unsa.ba/en/novosti/faculty-traffic-and-communications-university-sarajevo-project-meeting-held-under-erasmus",
},
{
  date: "26–28 October 2026",
  title: "3rd Consortium Workshop",
  location: "Prishtina, Kosovo",
  image: "/images/workshop-prishtina.jpg",
  link: "#",
},

            ].map((event) => (
              <article
                key={event.title}
                className="flex h-full min-h-[520px] flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-blue-100/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >

                <div
                  style={{
                    width: "100%",
                    height: "220px",
                    overflow: "hidden",
                    backgroundColor: "#f1f5f9",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                  }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-semibold text-red-600">
                    {event.date}
                  </p>

                  <h3 className="mt-3 text-xl font-bold leading-7 text-blue-950">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-gray-600">{event.location}</p>

                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex font-semibold text-blue-700 transition-all duration-300 hover:text-red-600"
                  >
                    Details →
                  </a>
                </div>
              </article>
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
          Latest Developments in Intelligent Transport Systems
        </h2>
      </div>

      <button className="rounded-lg border border-blue-700 px-5 py-3 font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-700 hover:text-white">
        View All News
      </button>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title:
            "Czech Republic Advances Connected Mobility with New C-ITS Strategy",
          text:
            "The Czech government has approved a new Cooperative Intelligent Transport Systems (C-ITS) Strategy for 2026–2031, focusing on vehicle-to-vehicle (V2V), vehicle-to-infrastructure (V2I), and real-time transport data exchange to improve road safety and traffic efficiency.",
          image: "/images/C-ITS.jpg",
          link:
            "https://www.praguedaily.news/2026/04/26/czech-republic-wants-to-strengthen-transport-connectivity-government-approves-c-its-strategy-until-2031/",
        },
        {
          title:
            "Linköping Explores the Future of Autonomous Public Transport",
          text:
            "The Ride the Future project is investigating how autonomous electric shuttle buses can be integrated into existing public transport networks, supporting sustainable urban mobility and enhancing the passenger experience.",
          image: "/images/L-ITS.jpg",
          link: "https://ridethefuture.se/in-english/",
        },
        {
          title:
            "Romania Continues Advancing Connected and Cooperative Transport Systems",
          text:
            "Through ITS Romania and its national ITS ecosystem, Romania is actively promoting connected, cooperative and automated mobility solutions, bringing together universities, public authorities, telecom operators, infrastructure managers, and industry partners to support smart and sustainable transport development.",
          image: "/images/R-ITS.jpg",
          link: "https://www.its-romania.ro/en",
        },
      ].map((news) => (
        <article
          key={news.title}
          className="flex min-h-[560px] flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="h-56 w-full overflow-hidden bg-slate-100">
            <img
              src={news.image}
              alt={news.title}
              className="h-56 w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-2xl font-bold leading-tight text-blue-950">
              {news.title}
            </h3>

            <p className="mt-4 flex-1 leading-7 text-gray-600">
              {news.text}
            </p>

            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex font-semibold text-blue-700 transition-all duration-300 hover:text-red-600"
            >
              Read More →
            </a>
          </div>
        </article>
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
