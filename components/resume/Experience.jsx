import { ScrollArea } from '@/components/ui/scroll-area';

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

const Experience = () => (
    <div className='flex flex-col gap-[30px] text-center xl:text-left'>
        <h3 className='text-4xl font-bold'>{experiences.title}</h3>
        <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experiences.description}</p>
        <ScrollArea className='h-[300px]'>
            <ul className='grid gap-[30px]'>
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
                                <li key={detailIdx} className='text-white/60'>
                                <p className='ml-1 max-w-[400px] xl:max-w-[600px] text-justify text-white/60'>{detail}</p>
                                </li>
                            ))}
                        </ul>
                    </li>
                    );
                })}
            </ul>
        </ScrollArea>
    </div>
);

export default Experience;