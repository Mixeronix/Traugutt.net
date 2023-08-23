import { faBell, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import Link from "next/link";

const plusJakartaSansFont700 = Plus_Jakarta_Sans({
	weight: "700",
	subsets: ["latin"],
});

const poppingsFont800 = Poppins({
	weight: "800",
	subsets: ["latin"],
});

export default function CalendarTile() {
	return (
		<Link
			href={"/calendar"}
			className="rounded-3xl md:col-span-1 xs:rounded-4xl gap-y-3 bg-MainDarkGray py-2 3xl:px-12 px-3 xl:items-start xl:px-8 flex flex-col items-center justify-around"
		>
			<div className="flex gap-2 flex-col sm:gap-5 2xl:gap-7 lg:flex-row lg:gap-5 items-center md:gap-3">
				<FontAwesomeIcon icon={faCalendarDays} className="text-white w-6 xs:w-10 sm:w-14 md:w-7 lg:w-11 xl:w-12 2xl:w-14 3xl:w-16 4xl:w-[70px]" />

				<p
					className={`text-white text-xs 2xs:text-sm xl:text-xl lg:text-left md:text-lg text-center sm:text-2xl xs:text-lg 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl md:leading-7 ${poppingsFont800.className}`}
				>
					Kalendarz <br />
					wydarzeń
				</p>
			</div>
			<div className={`w-full xl:flex hidden gap-x-3 flex-row items-center ${plusJakartaSansFont700.className}`}>
				<FontAwesomeIcon
					icon={faBell}
					fixedWidth
					className="text-MainDarkGray aspect-square bg-white h-8 w-8 2xl:w-10 2xl:h-10 3xl:w-12 2xl:p-2 4xl:p-3 3xl:h-12 4xl:w-14 4xl:h-14 p-1.5 rounded-full"
				/>
				<p className="flex flex-col text-white text-xs 2xl:text-sm w-full 3xl:text-base truncate 4xl:text-lg">
					Za 3 dni imieniny obchodzi
					<span className="text-sm 2xl:text-base 4xl:text-xl 3xl:text-lg text-MainGreen truncate">Jarosław Skrzypczyk</span>
				</p>
			</div>
		</Link>
	);
}