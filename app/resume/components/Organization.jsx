import { ScrollArea } from '@/components/ui/scroll-area';

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

const Organization = () => (
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
);

export default Organization;