import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <Image
            src="/images/logo.png"
            alt="BalkanITS logo"
            width={150}
            height={60}
            className="mb-5 h-12 w-auto rounded-md bg-white p-2"
          />

          <p className="text-sm leading-6 text-blue-100">
            BalkanITS modernises higher education in Intelligent Transport
            Systems across the Western Balkans.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Quick Links</h3>

          <ul className="space-y-2 text-sm text-blue-100">
            <li><Link href="/about">About Project</Link></li>
            <li><Link href="/#consortium">Consortium</Link></li>
            <li><Link href="/#events">Events</Link></li>
            <li><Link href="/#deliverables">Deliverables</Link></li>
          </ul>
        </div>

        <div>
  <h3 className="mb-4 font-bold">Contact</h3>

  <p className="text-sm text-blue-100">info@balkanits.net</p>
</div>

        <div>
          <h3 className="mb-4 font-bold">EU Disclaimer</h3>

          <p className="text-sm leading-6 text-blue-100">
            Co-funded by the Erasmus+ Programme of the European Union. Views and
            opinions expressed are however those of the author(s) only.
          </p>
        </div>
      </div>

      <div className="border-t border-blue-800 py-5 text-center text-sm text-blue-200">
        © 2025 BalkanITS. All rights reserved.
      </div>
    </footer>
  );
}
