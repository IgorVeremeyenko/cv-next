"use client"
import Link from "next/link"
import Button from "../components/buttons/Button"
import Divider from "../components/Divider"
import UploadPage from "../components/animations/uploadPercent"
import PageTransition from "../components/animations/pageTransition"
import Card from "../components/cards/card"
import FadeInOnScroll from "../components/animations/fadeOnScroll"
import Skills from "../components/aboutComponents/skills"
import LoadSkeleton from "../components/animations/skeleton"
import LoadingCircle from "../components/animations/loadingCircle"
import Education from '../components/aboutComponents/education'
import { Suspense,lazy } from 'react';
import { useSpring } from 'react-spring';
export default function Page() {
  const handleDownload = () => {
    // Здесь вы можете указать URL файла для скачивания
    const fileUrl = './Ihor_Veremiienko.pdf';
    // Создаем ссылку для скачивания
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Ihor_Veremiienko_Software_Developer.pdf'; // Укажите желаемое имя файла
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  const circleProps = useSpring({
    from: { circleRadius: 0 },
    to: { circleRadius: 3.082 },
    config: { duration: 10000,loop: true },
  });

  const pathProps = useSpring({
    from: { pathD: 'M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05C6.902,18.996,5.537,18.988,4.694,19.84z' },
    to: { pathD: 'M4.694,19.84c-0.843,0.843-0.843,0.843,0,0c0.842,0.843,0.842,0.843,0,0c0.843-0.843,0.843-0.843,0,0C6.902,19,5.537,19,4.694,19.84z' },
    config: { duration: 10000,loop: true },
  });
  const MyLazyLoadedComponent = lazy(() => import('../components/LazyLoadedComponent'));
  return (
    <>

      <div className="flex flex-col items-center p-2 content-between relative">

        <div className="text-6xl font-black uppercase font-roboto p-10 flex flex-row gap-4 z-10"><p>about</p> <p className="text-opposite">me</p></div>
        <div className="text-8xl font-black uppercase font-roboto opacity-10 absolute top-6 z-0 tracking-widest"><p>resume</p></div>
        <div className="flex flex-row m-20">
          <div className="flex flex-col">
            <p className="text text-xl uppercase font-medium pl-5">Personal infos</p>
            <div className="md:container md:mx-auto grid xl:grid-cols-2 p-5 gap-7 md:grid-cols-1">
              <div className="flex gap-1">
                <h2>First Name:</h2>
                <p className="text font-medium">Ihor</p>
              </div>
              <div className="flex gap-1">
                <h2>Last Name:</h2>
                <p className="text font-medium">Veremiienko</p>
              </div>
              <div className="flex gap-1">
                <h2>Age:</h2>
                <p className="text font-medium">31 Years</p>
              </div>
              <div className="flex gap-1">
                <h2>Nationality:</h2>
                <p className="text font-medium">Ukrainian</p>
              </div>
              <div className="flex gap-1">
                <h2>Phone:</h2>
                <Link href="tel:+4916092427733" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-borders duration-300 rounded-md pl-2 pr-2">
                  <p>+49 160 9242 7733</p>
                </Link>
              </div>
              <div className="flex gap-1">
                <h2>Email:</h2>
                <Link href="mailto:i.veremiienko@gmail.com" target="_blank" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-borders duration-300 rounded-md pl-2 pr-2">
                  <p className="text font-medium">i.veremiienko@gmail.com</p>
                </Link>
              </div>
              <div className="flex gap-1">
                <h2>LinkedIn:</h2>
                <Link
                  href="https://www.linkedin.com/in/igorveremiienko/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-borders duration-300 rounded-md pl-2 pr-2"
                >
                  <p className="text font-medium">linkedin.com/in/igorveremiienko/</p>
                </Link>
              </div>
              <div className="flex gap-1">
                <h2>Languages:</h2>
                <p className="text font-medium">Russian, English</p>
              </div>
            </div>
            <Button
              onClick={handleDownload}
              text={'Download CV'}
              svg={<svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.625 15C5.625 14.5858 5.28921 14.25 4.875 14.25C4.46079 14.25 4.125 14.5858 4.125 15H5.625ZM4.875 16H4.125H4.875ZM19.275 15C19.275 14.5858 18.9392 14.25 18.525 14.25C18.1108 14.25 17.775 14.5858 17.775 15H19.275ZM11.1086 15.5387C10.8539 15.8653 10.9121 16.3366 11.2387 16.5914C11.5653 16.8461 12.0366 16.7879 12.2914 16.4613L11.1086 15.5387ZM16.1914 11.4613C16.4461 11.1347 16.3879 10.6634 16.0613 10.4086C15.7347 10.1539 15.2634 10.2121 15.0086 10.5387L16.1914 11.4613ZM11.1086 16.4613C11.3634 16.7879 11.8347 16.8461 12.1613 16.5914C12.4879 16.3366 12.5461 15.8653 12.2914 15.5387L11.1086 16.4613ZM8.39138 10.5387C8.13662 10.2121 7.66533 10.1539 7.33873 10.4086C7.01212 10.6634 6.95387 11.1347 7.20862 11.4613L8.39138 10.5387ZM10.95 16C10.95 16.4142 11.2858 16.75 11.7 16.75C12.1142 16.75 12.45 16.4142 12.45 16H10.95ZM12.45 5C12.45 4.58579 12.1142 4.25 11.7 4.25C11.2858 4.25 10.95 4.58579 10.95 5H12.45ZM4.125 15V16H5.625V15H4.125ZM4.125 16C4.125 18.0531 5.75257 19.75 7.8 19.75V18.25C6.61657 18.25 5.625 17.2607 5.625 16H4.125ZM7.8 19.75H15.6V18.25H7.8V19.75ZM15.6 19.75C17.6474 19.75 19.275 18.0531 19.275 16H17.775C17.775 17.2607 16.7834 18.25 15.6 18.25V19.75ZM19.275 16V15H17.775V16H19.275ZM12.2914 16.4613L16.1914 11.4613L15.0086 10.5387L11.1086 15.5387L12.2914 16.4613ZM12.2914 15.5387L8.39138 10.5387L7.20862 11.4613L11.1086 16.4613L12.2914 15.5387ZM12.45 16V5H10.95V16H12.45Z" fill="black" />
              </svg>

              } />

          </div>
          <div className="grid grid-cols-2 gap-5 md:h-fit">
            <Card years={5} description={'years of experiance'} />
            <Card years={3} description={'projects after courses'} />
            <Card years={8} description={'happy costumers'} />
            <Card years={20} description={'awards won'} />
          </div>
        </div>
        <Suspense fallback={<LoadSkeleton />}>
          <MyLazyLoadedComponent />
        </Suspense>
        <Education />
      </div>
    </>
  )
}