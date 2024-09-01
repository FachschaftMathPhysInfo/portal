import Header from "@/components/header";
import AppCard from "@/components/appCard";

const baseStyling: string = 'grid p-16 w-fit mx-auto min-w-[20rem] grid-cols-1 gap-6 ';
const customSmallScreen: string = 'min-[750px]:grid-cols-2 ';
const mdStyling: string = 'lg:grid-cols-3 ';
const xlStyling: string = 'xl:grid-cols-4 xl:gap-5 xl:h-[calc(100vh-5rem)] ';

export default function Home() {
  return (
    <main className={'xl:h-[100vh] w-[100vw] p-0 m-0 overflow-y-scroll'}>
      <Header/>
      <div id='app-container' className={baseStyling + customSmallScreen + mdStyling + xlStyling}>

        <AppCard
          src={'/vercel.svg'}
          alt={'AppIcon'}
          title={'Mail'}
          href={'/'}/>

        <AppCard
          src={'/vercel.svg'}
          alt={'AppIcon'}
          title={'Wiki'}
          href={'/'}/>

        <AppCard
          src={'/vercel.svg'}
          alt={'AppIcon'}
          title={'Sumpf'}
          href={'/'}/>

        <AppCard
          src={'/vercel.svg'}
          alt={'AppIcon'}
          title={'Ausleihe'}
          href={'https://moozean.mathphys.stura.uni-heidelberg.de/'}/>

        <AppCard
          src={'/vercel.svg'}
          alt={'AppIcon'}
          title={'Ticketsystem'}
          href={'https://moozean.mathphys.stura.uni-heidelberg.de/'}/>

        <AppCard
          src={'/vercel.svg'}
          alt={'AppIcon'}
          title={'HedgeDoc'}
          href={'https://moozean.mathphys.stura.uni-heidelberg.de/'}/>

        <AppCard
          src={'/vercel.svg'}
          alt={'AppIcon'}
          title={'HedgeDoc'}
          href={'https://moozean.mathphys.stura.uni-heidelberg.de/'}/>

        <AppCard
          src={'/vercel.svg'}
          alt={'AppIcon'}
          title={'Passwortmanager'}
          href={'https://moozean.mathphys.stura.uni-heidelberg.de/'}/>

        <AppCard
          src={'/vercel.svg'}
          alt={'AppIcon'}
          title={'Stapel'}
          href={'https://moozean.mathphys.stura.uni-heidelberg.de/'}/>

        <AppCard
          src={'/vercel.svg'}
          alt={'AppIcon'}
          title={'Website'}
          href={'https://moozean.mathphys.stura.uni-heidelberg.de/'}/>

        <AppCard
          src={'/vercel.svg'}
          alt={'AppIcon'}
          title={'Partyverwaltung'}
          href={'https://moozean.mathphys.stura.uni-heidelberg.de/'}/>

        <AppCard
          src={'/vercel.svg'}
          alt={'AppIcon'}
          title={'Mailman'}
          href={'https://moozean.mathphys.stura.uni-heidelberg.de/'}/>
      </div>
    </main>
  );
}
