import Link from "next/link";

interface NavbarButtonProps {
  link?: string;
  title: string;
  onClick?: () => void;
}

export function NavbarButton({ link, title, onClick }: NavbarButtonProps) {
  return (
    <>
      <Link onClick={onClick ? onClick : undefined} href={link ? link : "#"}>
        <div className="group flex items-center justify-center duration-500 h-full w-fit hover:bg-[#FF4000] border border-white border-y-0 border-l-0 border-opacity-15 ease-in-out">
          <p className="px-5 text-center text-opacity-50 group-hover:text-opacity-100 duration-500  ease-in-out  text-white font-bold">
            {title}
          </p>
        </div>
      </Link>
    </>
  );
}
