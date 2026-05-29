import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { partners } from "../../data/partners";

export default function ConsortiumPage() {
  const euPartners = partners.filter((partner) => partner.group === "EU Partner");
  const wbPartners = partners.filter(
    (partner) => partner.group === "Western Balkan Partner"
  );

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-r from-blue-950 to-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 font-semibold tracking-widest text-red-300">
            BALKANITS CONSORTIUM
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight">
            A strong EU-Balkan partnership for Intelligent Transport Systems
            education
          </h1>

          <p className="mt-6 max-w-4xl text-xl leading-8 text-blue-100">
            The consortium brings together higher education institutions from
            Sweden, Czechia, Romania, Bosnia and Herzegovina, Kosovo and
            Montenegro.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {[
            ["TOTAL PARTNERS", "9"],
            ["EU PARTNERS", "3"],
            ["WESTERN BALKAN PARTNERS", "6"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-slate-50 p-6">
              <p className="text-sm font-bold text-red-600">{label}</p>
              <p className="mt-2 text-4xl font-bold text-blue-950">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
            <div>
              <p className="mb-3 font-semibold tracking-widest text-red-600">
                PARTNERSHIP STRUCTURE
              </p>

              <h2 className="text-4xl font-bold leading-tight text-blue-950">
                Connecting academic expertise, innovation and regional
                implementation
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-gray-700">
              <p>
                The BALKANITS consortium creates a strong EU-Balkan cooperation
                framework for the development, adaptation and implementation of
                innovative master curricula and micro-credentials in Intelligent
                Transport Systems.
              </p>

              <p>
                EU partner universities contribute with experience in curriculum
                development, innovative teaching methods, quality assurance,
                training and knowledge transfer, while Western Balkan partner
                universities contribute through local market analysis,
                curriculum adaptation, stakeholder cooperation and implementation
                of new educational programmes.
              </p>
            </div>
          </div>

          <PartnerGroup title="EU Partner Universities" partners={euPartners} />

          <PartnerGroup
            title="Western Balkan Partner Universities"
            partners={wbPartners}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function PartnerGroup({
  title,
  partners,
}: {
  title: string;
  partners: typeof import("../../data/partners").partners;
}) {
  return (
    <div className="mt-20">
      <h2 className="mb-10 text-3xl font-bold text-blue-950">{title}</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner) => (
          <article
            key={partner.pic}
            className="flex min-h-[560px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-blue-100/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex h-44 items-center justify-center border-b border-slate-200 bg-slate-50 px-6">
  <Image
    src={partner.logo}
    alt={`${partner.name} logo`}
    width={220}
    height={120}
    className="h-[96px] w-[220px] object-contain"
  />
</div>

            <div className="flex flex-1 flex-col p-8">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
                  {partner.acronym}
                </span>
                              <br />
                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">
                  {partner.country}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold leading-8 text-blue-950">
                {partner.name}
              </h3>

              <div className="mt-5 space-y-2 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                <p>
                  <span className="font-bold text-blue-950">Role:</span>{" "}
                  {partner.role}
                </p>

                <p>
                  <span className="font-bold text-blue-950">PIC:</span>{" "}
                  {partner.pic}
                </p>
              </div>

              <p className="mt-6 flex-1 text-base leading-7 text-slate-600">
                {partner.description}
              </p>

              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex font-bold text-blue-700 transition-all duration-300 hover:text-red-600"
              >
                Visit website →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}