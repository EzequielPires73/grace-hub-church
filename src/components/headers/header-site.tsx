import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";

export function HeaderSite() {
    return (
        <header className="w-full h-24 bg-white fixed top-0 left-0 z-50">
            <nav className="w-full max-w-7xl h-full mx-auto px-3 flex items-center justify-between max-md:justify-center relative">
                <FiMenu size={32} className="text-gray-700 max-lg:absolute left-3" />
                <Image src="/assets/logo-icon.svg" alt="Logo" width={96} height={64}/>
                <ul className="text-gray-700 flex gap-4 max-lg:hidden">
                    <li><FaTwitter size={18} /></li>
                    <li><FaInstagram size={18} /></li>
                    <li><FaFacebook size={18} /></li>
                    <li><FaYoutube size={18} /></li>
                </ul>
            </nav>
        </header>
    )
}