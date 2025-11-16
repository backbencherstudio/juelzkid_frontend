import Link from "next/link";

type ButtonProps = {
    title: string;
    className?: string;
    onClick?: () => void;
    icon?: any;
    loading?: boolean;
    sendingMsg?: string
    link?: string
};

export default function CustomLink({ title, className, icon, loading, sendingMsg, link }: ButtonProps) {
    return (
        <Link 
        href={link || "#"}
            className={` w-full h-12 items-center flex rounded-md font-bold text-black text-base
              bg-gradient-to-t from-white to-secondaryColor  justify-center
              shadow-md hover:shadow-lg transition-all duration-200
              disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed ${className}`}
        >
            {loading ? sendingMsg : <span className=" flex items-center justify-center gap-2">{icon} {title} </span>}
        </Link>
    );
}