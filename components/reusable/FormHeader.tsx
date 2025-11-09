import Image, { StaticImageData } from 'next/image';


type FormHeaderProps = {
  title: string;
  description: string;
  icon: StaticImageData | string;
}

function FormHeader({icon, title, description }: FormHeaderProps) {
  return (
    <div className="flex flex-col w-full text-center mb-5 items-center justify-center">
        <div className="flex items-center justify-center p-3 bg-gradient-to-t to-blueColor/20  from-white rounded-full">
        <Image src={icon} alt={title} width={55} height={55} className="w-13 h-13 rounded-full bg-white border-1 border-blueColor p-1.5 flex items-center justify-center"/>
        </div>
      <h1 className="text-2xl md:text-[28px] font-bold text-blackColor my-2">{title}</h1>
      <p className="text-sm md:text-base text-descriptionColor leading-relaxed">{description}</p>
    </div>
  )
}

export default FormHeader
