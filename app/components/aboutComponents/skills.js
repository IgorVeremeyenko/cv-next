import FadeInOnScroll from "../animations/fadeOnScroll"
import UploadPage from "../animations/uploadPercent"
export default function Skills() {
  return (
    <FadeInOnScroll>
      <div className="flex flex-col items-center">
        <div className="text text-xl uppercase font-medium pb-10">my skills</div>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <UploadPage targetPercent={90} />
            <p className="whitespace-normal text-center">Networks and Networking</p>
          </div>
          <div className="flex flex-col items-center">
            <UploadPage targetPercent={90} />
            <p>MS Windows Server</p>
          </div>
          <div className="flex flex-col items-center">
            <UploadPage targetPercent={80} />
            <p>HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <UploadPage targetPercent={70} />
            <p>JavaScript</p>
          </div>
          
          <div className="flex flex-col items-center">
            <UploadPage targetPercent={60} />
            <p>CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <UploadPage targetPercent={60} />
            <p>Angular</p>
          </div>
          <div className="flex flex-col items-center">
            <UploadPage targetPercent={50} />
            <p>React</p>
          </div>
          <div className="flex flex-col items-center">
            <UploadPage targetPercent={50} />
            <p>C#</p>
          </div>
          

        </div>

      </div>
    </FadeInOnScroll>
  )
}