/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'custom-bg p-8 rounded-xl flex items-center justify-center space-y-8',
        className
      )}
    >
      {children}
    </div>
  );
};

const AboutDetails = () => {
  return (
    <section className='py-2- w-full'>
      <div className='grid grid-cols-12 gap-8 w-full'>
        <ItemLayout className={'col-span-8 row-span-2 flex-col items-start'}>
          <h2 className='text-2xl text-left w-full capitalize'>
            Architect of Enchantment
          </h2>
          <p className='font-light'>
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>
        <ItemLayout className={'col-span-4 text-accent'}>
          <p className='font-semibold w-full text-left text-5xl'>
            25+ <sub className='font-semibold text-base'>projects</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={'col-span-4 text-accent'}>
          <p className='font-semibold w-full text-left text-5xl'>
            1+{' '}
            <sub className='font-semibold text-base'> years of experience</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={'col-span-4 !p-0'}>
          <img
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=Ismaelp96&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&locale=pt-BR`}
            alt='Ismaelp96 Git Stats'
            loading='lazy'
            className='w-full h-auto'
          />
        </ItemLayout>
        <ItemLayout className={'col-span-8 !p-0'}>
          <img
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=Ismaelp96&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&locale=pt-BR`}
            alt='Ismaelp96 Git Stats language'
            loading='lazy'
            className='w-full h-auto'
          />
        </ItemLayout>
        <ItemLayout className={'col-span-6 !p-0'}>
          <img
            className='w-full h-auto flex-wrap'
            src={`https://skillicons.dev/icons?i=js,html,css,react,nextjs,ts,tailwind,sass,postman,github,npm,nodejs`}
            alt='Skill icons'
            loading='lazy'
          />
        </ItemLayout>
        <ItemLayout className={'col-span-6 !p-0'}>
          <a href='https://git.io/streak-stats'>
            <img
              src='https://github-readme-streak-stats.herokuapp.com?user=Ismaelp96&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B'
              alt='Ismaelp96 Git Streak'
              loading='lazy'
              className='w-full h-auto'
            />
          </a>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
