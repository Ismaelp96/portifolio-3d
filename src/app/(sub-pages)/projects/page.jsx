import Image from 'next/image';

import bg from '../../../../public/background/projects-background.png';
import ProjectList from '@/components/projects';
import { projectsData } from '../../data';
import RenderModel from '@/components/RenderModel';
import dynamic from 'next/dynamic';
const Staff = dynamic(() => import('@/components/models/Staff'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Image
        priority
        sizes='100vw'
        src={bg}
        alt='background-image'
        className='-z-50 w-full h-full object-cover object-center opacity-25 fixed top-0 left-0'
      />
      <ProjectList projects={projectsData} />
      <div className='flex items-center justify-center fixed top-20 -left-24 h-screen'>
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
