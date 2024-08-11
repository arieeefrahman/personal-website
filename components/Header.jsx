import Link from "next/link";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href={'/'}>
                    <h1 className="text-4xl font-semibold">
                        Arief <span className="text-accent">.</span>
                    </h1>
                </Link>

                {/* Navigation bar : desktop */}
                <div className="hidden xl:flex items-center gap-8">
                    <Navbar />
                    <Link href={'/contact'}>
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* Navigation bar : mobile */}
                <div className="xl:hidden">
                    <MobileNavbar />
                </div>
            </div>
        </header>
    );
};

export default Header;