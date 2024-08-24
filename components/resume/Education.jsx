import { ScrollArea } from '@/components/ui/scroll-area';

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

const Education = () => (
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
);

export default Education;