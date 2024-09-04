import Header from "@/components/header";
import AppCard from "@/components/appCard";
import {appDataCollection} from "@/lib/data/appData";
import {connectStyles} from "@/lib/utils/stylingConnector"
const baseStyling: string = 'grid p-16 w-fit mx-auto min-w-[20rem] grid-cols-1 gap-6';
const customSmallScreen: string = 'min-[750px]:grid-cols-2';
const mdStyling: string = 'lg:grid-cols-3';
const xlStyling: string = 'xl:grid-cols-4 xl:gap-5 xl:h-[calc(100vh-5rem)]';

export default function Home() {
  return (
    <main className={'xl:h-[100vh] w-[100vw] p-0 m-0 overflow-y-scroll'}>
      <Header/>
      <div id='app-container' className={connectStyles(baseStyling, customSmallScreen, mdStyling, xlStyling)}>

        {appDataCollection.map( (item, i) => {
          return <AppCard
            key={i}
            src={item.imagePath}
            alt={item.altText}
            title={item.name}
            href={item.linkToApp}/>
        })}
      </div>
    </main>
  );
}
