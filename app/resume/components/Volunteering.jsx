import { ScrollArea } from '@/components/ui/scroll-area';

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

const Volunteering = () => (
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
);

export default Volunteering;