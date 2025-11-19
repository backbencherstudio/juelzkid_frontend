import Image, { StaticImageData } from 'next/image';


type FormHeaderProps = {
  title: string;
  description: string;
  icon: StaticImageData | string;
}

function FormHeader({icon, title, description }: FormHeaderProps) {
  return (
    <div className="flex flex-col w-full text-center mb-5 items-center justify-center">
        <div className="flex items-center justify-center p-3 bg-gradient-to-t to-blueColor/20  from-transparent rounded-full">
        <div className='p-2.5 border-1 border-blueColor flex items-center bg-white justify-center rounded-full'>
        <Image src={icon} alt={title} width={55} height={55} className="w-8 h-8      "/>
        </div>
        </div>
      <h1 className="text-2xl md:text-[28px] font-bold text-blackColor my-2">{title}</h1>
      <p className="text-sm md:text-base text-descriptionColor leading-relaxed">{description}</p>
    </div>
  )
}

export default FormHeader
