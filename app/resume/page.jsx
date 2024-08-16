"use client";

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3, FaJs, FaPhp, FaPython, FaReact, FaLaravel, FaExternalLinkAlt } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { SiRuby, SiTailwindcss, SiNextdotjs, SiSequelize } from 'react-icons/si';

const about = {
  title: 'About Me',
  description: 'An overview of my personal details.',
  items: [
    {
      fieldName: 'Name',
      fieldValue: 'Arief Rahman',
    },
    {
      fieldName: 'Email',
      fieldValue: 'arieeefrahman@gmail.com',
    },
    {
      fieldName: 'Phone',
      fieldValue: '0812 6128 9587'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'Bahasa Indonesia, English',
    },
    {
      fieldName: 'Domicile',
      fieldValue: 'Yogyakarta, Indonesia'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Indonesian'
    },
  ]
}

const experiences = {
  title: 'Experiences',
  description: 'Overview of my experiences and roles held.',
  items: [
    {
      company: 'BINAR Academy',
      position: 'Backend Engineer Intern',
      duration: 'Aug 2023 - Dec 2023',
      url: 'https://www.binaracademy.com/',
      responsibilities: [
        'Designed and implemented microservices using Golang and Ruby on Rails with REST APIs and gRPC.',
        'Developed and maintained unit tests for Go (Testify) and Ruby (RSpec) to guarantee code quality and functionality',
        'Successfully increased responsiveness and reduced latency by migrating from REST client to gRPC for inter-service communication.',
        'Created and maintained technical documentation using Swagger to ensure clarity and understanding.',
        'Contributed to improved system performance by optimizing API communication through gRPC implementation.',
        'Revamped "My Learning" section for Binar mobile application to enhance user experience and information accessibility.',
      ],
    },
    
  ],
}

const educations = {
  title: 'Educations',
  description: 'Academic qualifications and certifications acquired.',
  items: [
    {
      institution: 'Universitas Gadjah Mada',
      degree: 'Computer Science',
      duration: 'Aug 2020 - Nov 2024',
      url: 'https://ugm.ac.id/id/',
    },
    {
      institution: 'Alterra Academy',
      degree: 'Mastering Golang Programming Engineer',
      duration: 'Aug 2022 - Dec 2022',
      url: 'https://academy.alterra.id/',
    },
  ],
}

const courses = {
  title: 'Courses',
  description: 'A list of courses I have taken.',
  items: [
    
  ],
}

const certificates = {
  title: 'Certificates',
  description: 'A collection of my earned certificates.',
  items: [
    {
      name: 'Backend Engineer Intern',
      org: 'BINAR Academy',
      url: 'https://drive.google.com/file/d/13TLZ34qurvA_5_6sxeNFzW9r8_Tw13HZ/view?usp=drive_link',
    },
    {
      name: 'Golang Backend Engineer',
      org: 'Alterra Academy',
      url: 'https://drive.google.com/file/d/1unY3MY8X4jnDfJIAAAD3oGa6Dy-MvOZW/view',
    },
  ],
}

const skills = {
  title: 'Skills and Interests',
  description: 'An overview of my technical skills, languages, and interests.',
  programming_languages: [
    {
      title: 'Programming Languages',
      items: [
        {
          icon: <FaGolang />,
          name: 'Go',
        },
        {
          icon: <FaJs />,
          name: 'JavaScript',
        },
        {
          icon: <FaPhp />,
          name: 'PHP',
        },
        {
          icon: <FaPython />,
          name: 'Python',
        },
        {
          icon: <SiRuby />,
          name: 'Ruby',
        },
        {
          icon: <FaHtml5 />,
          name: 'HTML',
        },
        {
          icon: <FaCss3 />,
          name: 'CSS',
        },
      ]
    }
  ],
  frameworks: [
    {
      title: 'Frameworks & Libraries',
      items: [
        {
          icon: <FaLaravel />,
          name: 'Laravel',
        },
        {
          icon: <FaReact />,
          name: 'ReactJS',
        },
        {
          icon: <SiTailwindcss />,
          name: 'Tailwind CSS',
        },
        {
          icon: <SiNextdotjs />,
          name: 'Next.js',
        },
        {
          icon: <SiSequelize />,
          name: 'Sequelize',
        },
      ],
    }
  ],
  languages: [
    {
      title: 'Languages',
      items: [
        {
          name: 'Bahasa Indonesia',
          proficiency: 'Native',
        },
        {
          name: 'English',
          proficiency: 'Professional Working',
        }
      ]
    }
  ],
  interests: [
    {
      title: 'Interests',
      items: [
        {
          name: 'Software Engineering'
        },
        {
          name: 'Backend Development'
        },
        {
          name: 'Deep Learning'
        },
        {
          name: 'Data Analysis'
        },
      ],
    }
  ]
}

const honors = {
  title: 'Honors and Awards',
  description: 'Recognition of achievements and excellence.',
  items: [
    {
      name: 'Bank Indonesia Scholarship 2023 Awardee',
      duration: 'June 2023 - June 2024',
      institution: 'Bank Indonesia',
      description: 'Receiving a highly esteemed scholarship from Bank Indonesia, ' + 
                   'covering a duration of 2 semesters, and actively engaging in ' + 
                   'exclusive events hosted by Bank Indonesia Regional Daerah Istimewa ' + 
                   'Yogyakarta (DIY) and the esteemed Generasi Baru Indonesia (GenBI) ' + 
                   'Regional DIY network.',
    }
  ],
}

const organizations = {
  title: 'Organizations',
  description: 'Affiliations and organizations I have been a part of.',
  items: [
    {
      institution: 'HIMAKOM UGM',
      position: 'PSDM Deputy Head at PSDMA Division',
      duration: 'Nov 2021 - Nov 2022',
      description: 'Focused on the personal development of HIMAKOM\'s human resources ' +
                   'and addressing the needs or complaints of students to authorities ' +
                   'such as campus leaders.'
    },
    {
      institution: 'HIMAKOM UGM',
      position: 'Member of Internal External Division',
      duration: 'Nov 2020 - Nov 2021',
      description: 'Maintained relationships between HIMAKOM and all stakeholders, as well as ' +
                   'developed the character and awareness of all Computer Science students at UGM.'
    },
  ],
}

const volunteering = {
  title: 'Volunteering',
  description: 'Experiences contributing to community and social causes.',
  items: [
    {
      position: 'Event Staff',
      org: 'Dekan CUP FMIPA UGM',
      duration: 'Aug 2021 - Oct 2021',
      responsibilities: [
        'Prepared and organized the e-sport competition.',
        'Assisted in finding and working with casters who provided commentary and analysis on streaming.',
        'Coordinated with the technical team to ensure that the streaming was broadcasted.'
      ]
    },
    {
      position: 'Event Staff',
      org: 'Jogja Information Technology Session (JOINTS) 2021',
      duration: 'Nov 2020 - Apr 2021',
      responsibilities: [
        'Organized JOINTSCamp, a public IT bootcamp with weekly classes for one month to develop participants’ skills in the IT industry.',
        'Defined JOINTSCamp concepts and collaborated with sponsors like Dicoding, Moka, and DQlab to provide coursework.',
        'Built relationships with mentors from major Indonesian unicorns like Gojek, Bukalapak, and IT platforms such as Dicoding and Web Programming UNPAS.'
      ]
    },    
  ],
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.2,
          duration: 0.4,
          ease: 'easeIn',
        }
      }}
      className='flex justify-center items-center py-12 xl:py-0 min-h-[80vh]'
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue='about'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <ScrollArea className="h-[250px] xl:h-[440px] w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsList className='flex flex-col gap-6'>
              <TabsTrigger value='about'>About Me</TabsTrigger>
              <TabsTrigger value='experience'>Experiences</TabsTrigger>
              <TabsTrigger value='education'>Educations</TabsTrigger>
              {/* <TabsTrigger value='course'>Courses</TabsTrigger> */}
              <TabsTrigger value='certificate'>Certificates</TabsTrigger>
              <TabsTrigger value='skill'>Skills and Interests</TabsTrigger>
              <TabsTrigger value='honor'>Honors and Awards</TabsTrigger>
              <TabsTrigger value='organization'>Organizations</TabsTrigger>
              <TabsTrigger value='volunteering'>Volunteering</TabsTrigger>

            </TabsList>
          </ScrollArea>

          <div className="min-h-[70vh] w-full">
            {/* About Me Content */}
            <TabsContent value="about" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ScrollArea className='h-[300px]'>
                  <ul className='grid gap-[20px]'>
                      {about.items.map((item, idx) => {
                        return (
                          <li 
                            key={idx}
                            className=' rounded-xl flex flex-row items-center gap-1'
                          >
                            <p className='text-accent text-left text-sm md:text-lg w-[75px] md:w-[100px] xl:w-40'>{item.fieldName} </p>
                            <p className='text-sm md:text-lg xl:max-w-[360px] xl:min-h-[30px] text-left lg:text-left'>: {item.fieldValue}</p>
                          </li>
                        );
                      })}
                  </ul>
                </ ScrollArea>
                    
              </div>
            </TabsContent>

            {/* Experience Content */}
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experiences.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experiences.description}</p>
                <ScrollArea className='h-[300px]'>
                  <ul className='grid grid-cols-1  gap-[30px]'>
                    {experiences.items.map((item, idx) => {
                      return (
                        <li 
                          key={idx}
                          className='bg-[#232329] py-6 px-10 rounded-xl flex flex-col gap-1'
                        >
                          <span className='text-accent text-left'>{item.duration}</span>
                          <h3 className='text-xl max-w-[360px] min-h-[30px] text-left'>{item.position}</h3>
                          <div className='flex gap-3'>
                            {/* <span className='w-[6px] h-[6px] rounded-full bg-accent'></span> */}
                            <a href={item.url} target='_blank' className='text-white/60'>{item.company}</a>
                          </div>

                          <p className='pt-5 font-bold text-left'>Responsibilities : </p>
                          <ul className='list-disc ml-[15px] text-left'>
                            {item.responsibilities.map((detail, detailIdx) => (
                              <li key={detailIdx} className='text-white/80'>
                                <p className='ml-1 text-justify'>{detail}</p>
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Content */}
            <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{educations.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{educations.description}</p>
                <ScrollArea className='h-[300px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[20px]'>
                    {educations.items.map((item, idx) => {
                      return (
                        <li 
                          key={idx}
                          className='bg-[#232329] py-6 px-10 rounded-xl flex flex-col gap-1'
                        >
                          <span className='text-accent xl:w-[300px] text-left'>{item.duration}</span>
                          <h3 className='text-xl max-w-[560px] min-h-[60px] text-left'>{item.degree}</h3>
                          <div className='flex gap-3'>
                            {/* <span className='w-[6px] h-[6px] rounded-full bg-accent'></span> */}
                            <a href={item.url} target='_blank' className='text-white/60 text-left'>{item.institution}</a>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Courses Content */}
            <TabsContent value="course" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{courses.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{courses.description}</p>
                
              </div>
            </TabsContent>

            {/* Certificates Content */}
            <TabsContent value="certificate" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{certificates.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{certificates.description}</p>
                <ScrollArea className='h-[300px]'>
                  <ul className='grid grid-cols-1  gap-[30px]'>
                    {certificates.items.map((item, idx) => {
                      return (
                        <li 
                          key={idx}
                          className='bg-[#232329] py-6 px-10 rounded-xl flex flex-col gap-1'
                        >
                          <h3 className='text-xl max-w-[360px] min-h-[30px] text-left'>{item.name}</h3>
                          <div className='gap-3'>
                            <span className='w-[8px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-left'>
                              Issued by : 
                              <a href={item.url} target='_blank' className='text-white/60'> {item.org}</a> 
                            </p>
                            
                          </div>
                          <div className='flex items-center gap-3 text-accent'>
                            <p className='text-sm w-[8px] h-[6px]'> <FaExternalLinkAlt /> </p>
                            <a href={item.url} target='_blank' className='h-[23px]'>See the certificate </a>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills Content */}
            <TabsContent value="skill" className="w-full h-full">
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p>

                  <ScrollArea className='h-[300px]'>
                    {/* Programming Languages */}
                    <div>
                      <p className='text-2xl font-bold pb-3'>{skills.programming_languages[0].title}</p>
                      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                        {skills.programming_languages[0].items.map((item, idx) => {
                          return (
                            <li key={idx}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className='bg-[#232329] w-full h-[150px] rounded-xl flex justify-center items-center group'>
                                    <div className='text-6xl group-hover:text-accent transition-all duration-300'>{item.icon}</div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className='capitalize'>{item.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <Separator className='my-5' />

                    {/* Frameworks & Libraries */}
                    <div>
                      <p className='text-2xl font-bold pb-3'>{skills.frameworks[0].title}</p>
                      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                        {skills.frameworks[0].items.map((item, idx) => {
                          return (
                            <li key={idx}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className='bg-[#232329] w-full h-[150px] rounded-xl flex justify-center items-center group'>
                                    <div className='text-6xl group-hover:text-accent transition-all duration-300'>{item.icon}</div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className='capitalize'>{item.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <Separator className='my-5' />

                    {/* Languages */}
                    <div className='mb-5'>
                      <p className='text-2xl font-bold pb-3'>{skills.languages[0].title}</p>
                      <ul className='grid grid-cols-2 gap-[30px]'>
                        {skills.languages[0].items.map((item, idx) => {
                          return (
                            <li 
                              key={idx}
                              className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                            >
                              <h3 className='text-xl max-w-[560px] min-h-[30px] text-center lg:text-left'>{item.name}</h3>
                              <div className='flex items-center gap-3'>
                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                <p className='text-white/60'>{item.proficiency}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <Separator className='my-5' />

                    {/* Interests */}
                    <div className='mb-5'>
                      <p className='text-2xl font-bold pb-3'>{skills.interests[0].title}</p>
                      <ul className='grid grid-cols-2 gap-[30px]'>
                        {skills.interests[0].items.map((item, idx) => {
                          return (
                            <li 
                              key={idx}
                              className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                            >
                              <h3 className='text-xl max-w-[560px] min-h-[30px] text-center lg:text-left'>{item.name}</h3>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  
                  </ScrollArea>

                </div>
              </div>
            </TabsContent>

            {/* Honors and Awards */}
            <TabsContent value="honor" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{honors.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{honors.description}</p>
                <ScrollArea className='h-[300px]'>
                  <ul className='grid grid-cols-1  gap-[30px]'>
                    {honors.items.map((item, idx) => {
                      return (
                        <li 
                          key={idx}
                          className='bg-[#232329] py-6 px-10 rounded-xl flex flex-col gap-1'
                        >
                          <span className='text-accent text-left'>{item.duration}</span>
                          <h3 className='text-xl max-w-[480px] min-h-[30px] text-left'>{item.name}</h3>
                          <div className='gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <a href={item.url} target='_blank' className='text-white/60 flex text-left'>{item.institution}</a>
                          </div>

                          <p className='pt-5 font-bold text-left'>Description : </p>
                          <p className='max-w-[400px] xl:max-w-[600px] text-white/60 text-justify'>{item.description}</p>

                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Organizations Content */}
            <TabsContent value="organization" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{organizations.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{organizations.description}</p>
                <ScrollArea className='h-[300px]'>
                  <ul className='grid grid-cols-1  gap-[30px]'>
                    {organizations.items.map((item, idx) => {
                      return (
                        <li 
                          key={idx}
                          className='bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[560px] min-h-[30px] text-left'>{item.position}</h3>
                          <div className=' gap-3'>
                            {/* <span className='w-[6px] h-[6px] rounded-full bg-accent'></span> */}
                            <p className='text-white/60'>{item.institution}</p>
                          </div>

                          <p className='pt-5 font-bold'>Responsibilities : </p>
                          <p className='max-w-[400px] xl:max-w-[600px] text-white/60 text-justify'>{item.description}</p>

                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Volunteering Content */}
            <TabsContent value="volunteering" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{volunteering.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{volunteering.description}</p>
                <ScrollArea className='h-[300px]'>
                  <ul className='grid grid-cols-1  gap-[30px]'>
                    {volunteering.items.map((item, idx) => {
                      return (
                        <li 
                          key={idx}
                          className='bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[360px] min-h-[30px] text-center lg:text-left'>{item.position}</h3>
                          <div className='gap-3'>
                            {/* <span className='w-[6px] h-[6px] rounded-full bg-accent'></span> */}
                            <p className='text-white/60 max-h-[800px] max-w-[600px] text-left'>{item.org}</p>
                          </div>
                          <p className='pt-5 font-bold'>Responsibilities : </p>
                          <ul className='list-disc ml-[15px] text-left'>
                            {item.responsibilities.map((detail, detailIdx) => (
                              <li key={detailIdx} className='text-white/80'>
                                <p className='ml-1 text-justify'>{detail}</p>
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume