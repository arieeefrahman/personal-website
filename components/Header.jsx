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
                    <h1 className="flex flex-row text-3xl font-semibold font-courgette tracking-widest">
                        Arief <span className="text-accent">.</span>
                    </h1>
                </Link>

                {/* Navigation bar : desktop */}
                <div className="hidden xl:flex items-center gap-8">
                    <Navbar />
                    <Link href={'/about'}>
                        <Button className='rounded-xl px-4 font-bold'>About Me</Button>
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