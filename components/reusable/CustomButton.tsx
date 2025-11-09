type ButtonProps = {
    title: string;
    className?: string;
    onClick?: () => void;
    icon?: any;
    loading?: boolean;
    sendingMsg?: string
    type?: "button" | "submit" | "reset"
};

export default function CustomButton({ title, className, onClick, icon, loading, sendingMsg, type }: ButtonProps) {
    return (
        <button
            disabled={loading}
            className={` w-full h-12 rounded-md font-bold text-white text-base
              bg-gradient-to-t from-[#FF8C42] to-primaryColor
              hover:from-[#FF7A35] hover:to-[#FF5A00]
              shadow-md hover:shadow-lg transition-all duration-200
              disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
            onClick={onClick}
            type={type}
        >
            {loading ? sendingMsg : <span className=" flex items-center justify-center gap-2">{icon} {title} </span>}
        </button>
    );
}