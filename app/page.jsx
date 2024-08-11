import ProfilePhoto from "@/components/ProfilePhoto"
import Social from "@/components/Social"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:py-20">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg">Software Developer | Computer Science Student</span>
            <h1 className="h1 xl:my-2">
              Hi there! I am <br /> <span className="text-accent h1">Arief Rahman</span> 
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            I am highly dedicated to software development, with a strong focus on backend development. 
            I usually build the backend with Go and am versatile with other programming languages.
            </p>

            {/* Download CV and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button asChild
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-3"
              >
                <Link 
                  href={"https://drive.google.com/file/d/1OsLlTAQjUZNvFf2g2NihH5xrhitK-rYp/view?usp=sharing"} 
                  target="_blank"
                >
                  <FiDownload className="text-xl" />
                  <span>Download CV</span>
                </Link>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6" 
                  iconStyles={`
                    w-14 h-14 border border-accent rounded-full 
                    flex justify-center items-center 
                    text-accent text-base 
                    hover:bg-accent hover:text-primary hover:transition-all duration-500
                  `}
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <ProfilePhoto />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home