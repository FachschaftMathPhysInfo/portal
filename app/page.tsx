import Header from "@/components/header";
import AppCard from "@/components/appCard";
import {appDataCollection} from "@/lib/data/appData";
import {connectStyles} from "@/lib/utils/stylingConnector";

const baseStyling: string = 'grid p-10 w-fit h-fit mx-auto min-w-[20rem] grid-cols-2 gap-6';
const mdStyling: string = 'lg:grid-cols-3';
const xlStyling: string = 'xl:grid-cols-4';

export default function Home() {
  return (
    <main className={'xl:h-[calc(100vh-5rem] w-[100vw] p-0 m-0 overflow-y-scroll'}>
      <Header/>
      <div className={'w-full h-full flex items-center justify-center'} >
        <div id='app-container' className={connectStyles(baseStyling, mdStyling, xlStyling)}>

          {appDataCollection.map( (item, i) => {
            return <AppCard
              key={i}
              src={item.imagePath}
              alt={item.altText}
              title={item.name}
              href={item.linkToApp}/>
          })}
        </div>
      </div>
    </main>
  );
}
