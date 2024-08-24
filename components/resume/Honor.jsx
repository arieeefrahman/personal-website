import { ScrollArea } from '@/components/ui/scroll-area';

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

const Honor = () => (
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
);

export default Honor;