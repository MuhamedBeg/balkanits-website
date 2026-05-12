import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt="BalkanITS logo"
                        width={170}
                        height={70}
                        className="h-10 w-auto"
                        priority
                    />
                </Link>

                <nav className="hidden items-center gap-8 text-sm font-semibold text-blue-950 md:flex">
                    <Link href="/" className="text-red-600 transition-all duration-300 hover:text-red-700">
                        HOME
                    </Link>

                    <Link href="/#about" className="transition-all duration-300 hover:text-red-600">
                        ABOUT PROJECT
                    </Link>

                    <Link href="/#consortium" className="transition-all duration-300 hover:text-red-600">
                        CONSORTIUM
                    </Link>

                    <Link href="/#events" className="transition-all duration-300 hover:text-red-600">
                        EVENTS
                    </Link>

                    <Link href="/#dissemination" className="transition-all duration-300 hover:text-red-600">
                        DISSEMINATION
                    </Link>

                    <Link href="/#deliverables" className="transition-all duration-300 hover:text-red-600">
                        DELIVERABLES
                    </Link>
                </nav>

                <Link
                    href="/#materials"
                    className="hidden rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-105 md:inline-block"
                >
                    PROJECT MATERIALS
                </Link>
            </div>
        </header>
    );
}