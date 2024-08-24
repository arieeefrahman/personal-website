"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Separator } from '@/components/ui/separator';

import 'swiper/css'
import { BsArrowUpRight, BsGithub, BsFiletypePpt, BsX } from 'react-icons/bs'
import { FaFigma } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { IoIosRocket } from "react-icons/io";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectSliderBtn from '@/components/ProjectSliderBtn';
import { Button } from '@/components/ui/button';

const projects = [
	{
		num: '01',
		title: 'Better Space: Office Booking',
		description: 'Better Space is a web-based platform that has been developed to improve the rental of office space in Jakarta. Our platform enables the effortless discovery and reservation of office spaces in Jakarta\'s dynamic business districts. Five teams were responsible for the development of this project, including UI/UX Designers, Backend Developers (using Go), Frontend Developers (using React JS), Mobile Developers (using Flutter), and Quality Engineers. I was responsible for the backend part.',
		stack: [{ name: 'Go' }, { name: 'ReactJS' }, { name: 'Flutter' }],
		image: '/assets/projects/better-space-img.png',
		github: 'https://github.com/Kelompok3-Office-Booking',
		api_doc: 'https://documenter.getpostman.com/view/16304674/2s8YzXwg7q',
		document: 'https://drive.google.com/file/d/1dipHk9dWxo_wRosWP84LOz-BoxfI7GNb/view?usp=sharing',

	},
	{
		num: '02',
		title: 'SonicTIX : Event Ticket Booking Website',
		description: 'Developed on going REST API project using Laravel and PostgreSQL for the backend side and using HTML, CSS, and Vanilla JavaScript for the frontend side, focused on ticket and event management. This ongoing project prioritizes ticket and event handling. Further updates on the project\'s progress will follow.',
		stack: [{ name: 'Laravel' }, { name: 'TailwindCSS' }, { name: 'PostgreSQL' }],
		image: '/assets/projects/sonictix-img.png',
		github: 'https://github.com/arieeefrahman/sonictix',
	},
	{
		num: '03',
		title: 'WeShop : E-Commerce Website',
		description: 'Assigned as frontend engineer. I developed multiple pages for a university course\'s final assignment. Using Bootstrap on the frontend and Flask on the backend, I created pages like homepage, register, product detail, order detail, checkout, customer orders, and seller product.',
		stack: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'Bootstrap' }, , { name: 'Flask' }],
		image: '/assets/projects/we-shop.png',
		live_demo: '',
		document: 'https://docs.google.com/presentation/d/10zhAPLXlxA2a9qh-64F_HytwEPVoS8FQaSCYOZIm56U/edit?usp=share_link',
		figma_url: 'https://www.figma.com/file/syebg0WvHv3m61ZBy16c6z/Mock-Up-Pesanan-Saya?type=design&node-id=0-1&mode=design',
	},
	{
		num: '04',
		title: 'Weather App with VueJS and TailwindCSS',
		description: 'This application, called "Weather", allows you to track the current and future weather of cities of your choice.',
		stack: [{ name: 'VueJS' }, { name: 'TailwindCSS' },],
		image: '/assets/projects/weatherapp-desktop.png',
		live_demo: 'https://weather-app-vue-arieeefrahman.netlify.app/',
		github: 'https://github.com/arieeefrahman/weather-app-vue-js',
		document: '',
		figma_url: '',
	}
]

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div className="relative max-w-4xl max-h-full">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-accent text-4xl hover:text-accent-hover"
                >
                    <BsX />
                </button>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={800}
                    height={600}
                    className="max-w-full max-h-[90vh] object-contain"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </motion.div>
    );
};


const Projects = () => {
	const [project, setProject] = useState(projects[0]);
	const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState({ src: '', alt: '' });

	const handleSlideChange = (swiper) => {
		const currentIdx = swiper.activeIndex;
		setProject(projects[currentIdx]);
	}

	const openModal = (src, alt) => {
        setModalImage({ src, alt });
        setModalOpen(true);
    };

	// const ProjectDescription = ({ description }) => {
	// 	const [isExpanded, setIsExpanded] = useState(false);
	// 	const [isOverflowing, setIsOverflowing] = useState(false);
	// 	const descriptionRef = useRef(null);
	  
	// 	useEffect(() => {
	// 	  const element = descriptionRef.current;
	// 	  if (element) {
	// 		// Check if content is overflowing on XL screens
	// 		const isOverflown = element.scrollHeight > element.clientHeight;
	// 		setIsOverflowing(isOverflown);
	// 	  }
	// 	}, [description]);
	  
	// 	return (
	// 	  <div className="flex flex-col">
	// 		<div
	// 		  ref={descriptionRef}
	// 		  className={`relative ${isExpanded ? '' : 'xl:h-[90px] xl:overflow-hidden'}`}
	// 		>
	// 		  <p className="text-white/60 text-justify">
	// 			{description}
	// 		  </p>
	// 		  {!isExpanded && isOverflowing && (
	// 			<div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-background to-transparent xl:hidden" />
	// 		  )}
	// 		</div>
	// 		{/* Button only shows on XL screens and when content is overflowing */}
	// 		{isOverflowing && (
	// 		  <div className="hidden xl:block">
	// 			<Button
	// 			  variant="link"
	// 			  className="mt-2 text-accent hover:text-accent-hover self-start p-0"
	// 			  onClick={() => setIsExpanded(!isExpanded)}
	// 			>
	// 			  {isExpanded ? 'Show Less' : 'Show More'}
	// 			</Button>
	// 		  </div>
	// 		)}
	// 	  </div>
	// 	);
	//   };
	const ProjectDescription = ({ description }) => {
		const [isExpanded, setIsExpanded] = useState(false);
		const [isOverflowing, setIsOverflowing] = useState(false);
		const descriptionRef = useRef(null);
	  
		useEffect(() => {
		  const element = descriptionRef.current;
		  if (element) {
			// Check if content is overflowing on XL screens
			const isOverflown = element.scrollHeight > element.clientHeight;
			setIsOverflowing(isOverflown);
		  }
		}, [description]);
	  
		return (
		  <div className="flex flex-col">
			<div
			  ref={descriptionRef}
			  className={`relative ${isExpanded ? '' : 'xl:h-[90px] xl:overflow-hidden'}`}
			>
			  <p className="text-white/60 text-justify">
				{description}
			  </p>
			  {!isExpanded && isOverflowing && (
				<div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-background to-transparent xl:hidden" />
			  )}
			</div>
			{/* Button always visible on XL screens */}
			<div className="hidden xl:block">
			  <Button
				variant="link"
				className={`mt-2 self-start p-0 ${isOverflowing ? 'text-accent hover:text-accent-hover' : 'text-primary cursor-default'}`}
				onClick={() => isOverflowing && setIsExpanded(!isExpanded)}
				disabled={!isOverflowing}  // Disable the button when not overflowing
			  >
				{isExpanded ? 'Show Less' : 'Show More'}
			  </Button>
			</div>
		  </div>
		);
	  };

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ 
				opacity: 1,
				transition: {
					delay: 1.4,
					duration: 0.4,
					ease: 'easeIn'
				}

			 }}
			className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
		>
			<div className='container mx-auto'>
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
						<div className='flex flex-col gap-[30px] h-[50%]'>
							{/* outline num */}
							<div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
								{project.num}
							</div>
							{/* project title */}
							<h2 className="text-[28px] xl:text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
								{project.title}
							</h2>
							{/* project description */}
							<ProjectDescription description={project.description} />
							{/* stack */}
							<ul className='flex flex-wrap gap-4'>
								{project.stack.map((item, idx) => {
									return (
										<li key={idx} className='text-xl text-accent'>
											{item.name}
											{idx !== project.stack.length - 1 && ","}
										</li>
									)
								})}
							</ul>
							<Separator />
							{/* buttons */}
							<div className='flex items-center gap-4'>
								{/* Live Demo */}
								{project.live_demo ? (
									<Link href={project.live_demo}>
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
													<IoIosRocket className='text-white text-3xl group-hover:text-accent' />
												</TooltipTrigger>
												<TooltipContent>
													<p> Live Demo </p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</Link>
								): null}

								{/* PPT Document */}
								{project.document ? (
									<Link href={project.document}>
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
													<BsFiletypePpt className='text-white text-3xl group-hover:text-accent' />
												</TooltipTrigger>
												<TooltipContent>
													<p>PPT</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</Link>
								): null}

								
								{/* GitHub */}
								{project.github ? (
									<Link href={project.github}>
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
													<BsGithub className='text-white text-3xl group-hover:text-accent' />
												</TooltipTrigger>
												<TooltipContent>
													<p>GitHub Repository</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</Link>
								): null}

								{/* API Documentation */}
								{project.api_doc ? (
									<Link href={project.api_doc}>
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
													<SiPostman className='text-white text-3xl group-hover:text-accent' />
												</TooltipTrigger>
												<TooltipContent>
													<p>Postman API Documentation</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</Link>
								): null}

								{/* Figma */}
								{project.figma_url ? (
									<Link href={project.figma_url}>
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
													<FaFigma className='text-white text-3xl group-hover:text-accent' />
												</TooltipTrigger>
												<TooltipContent>
													<p>Figma</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</Link>
								): null}
							</div>
						</div>
					</div>
					<div className="w-full xl:w-[50%]">
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							className='xl:h-[520px] mb-12'
							onSlideChange={handleSlideChange}
							speed={500}
                            loop={false}
                            allowTouchMove={true}
						>
							{projects.map((project, idx) => {
								return (
									<SwiperSlide
										key={idx}
										className='w-full'
									>
										<div 
											className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 cursor-pointer"
											onClick={() => openModal(project.image, project.title)}
										>
											{/* overlay */}
											<div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
											{/* image */}
											<div className='relative w-full h-full'>
												<Image src={project.image} alt={project.title} fill className='object-cover' />
											</div>
										</div>
									</SwiperSlide>
								)
							})}

							{/* slider buttons */}
							<ProjectSliderBtn
                                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
                                iconsStyles='text-2xl'
                            />
						</Swiper>
					</div>
				</div>
			</div>
			<AnimatePresence>
    {modalOpen && (
        <ImageModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            imageSrc={modalImage.src}
            imageAlt={modalImage.alt}
        />
    )}
</AnimatePresence>
		</motion.section>
	);
}

export default Projects