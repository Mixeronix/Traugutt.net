import { faRemove, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import { useState } from "react";
import Image from "next/image";

const plusJakartaSansFont700 = Plus_Jakarta_Sans({
	weight: "700",
	subsets: ["latin"],
});

const plusJakartaSansFont500 = Plus_Jakarta_Sans({
	weight: "500",
	subsets: ["latin"],
});

const poppingsFont700 = Poppins({
	weight: "600",
	subsets: ["latin"],
});

export default function UnverifiedUserPostTile(props: { userData: UserDataTypeWithRole; refetchUsers: Function }) {
	const [verifyButtonText, setVerifyButtonText] = useState("Użytkownik ze szkoły");
	const [unverifyButtonText, setUnverifyButtonText] = useState("Użytkownik spoza szkoły");

	async function verifyUser() {
		setVerifyButtonText("Weryfikowanie...");

		await (await fetch(`/api/dashboard/users/user/verify/${props.userData.id}`)).json();
		props.refetchUsers();
	}
	async function unverifyUser() {
		setUnverifyButtonText("Usuwanie...");

		await (await fetch(`/api/dashboard/users/user/unverify/${props.userData.id}`)).json();
		props.refetchUsers();
	}

	return (
		<div className="relative w-full flex-row items-stretch justify-between border-2 flex gap-x-4 xl:gap-x-8 rounded-2xl">
			<div
				onClick={() => unverifyUser()}
				className="aspect-[3/2] gap-y-3 flex flex-col items-center justify-center w-1/4 rounded-l-2xl bg-LightRed hover:bg-MainRed/90 transition-all duration-300 cursor-pointer"
			>
				<FontAwesomeIcon icon={faRemove} className={`h-7 lg:h-10`} />
				<p className={`text-xs xs:text-sm sm:text-base xl:text-xl 4xl:text-2xl ${poppingsFont700.className}`}>{unverifyButtonText}</p>
			</div>

			<div className={`flex justify-center flex-col xl:gap-3 3xl:gap-4 gap-y-2 py-5 md:py-6 lg:py-8 xl:py-9 ${plusJakartaSansFont500.className}`}>
				<div
					className={`text-sm 2xs:text-lg xs:text-lg sm:text-xl md:text-2xl 4xl:text-3xl gap-3 sm:gap-4 md:gap-5 items-center flex-col flex ${poppingsFont700.className}`}
				>
					<Image
						className="aspect-square object-cover rounded-full md:w-16 w-8 h-8 sm:w-12 sm:h-12 md:h-16"
						src={props.userData.image}
						alt="User image"
						width={50}
						height={50}
					/>

					<span>{props.userData.name}</span>
				</div>

				<div className="flex items-center justify-center gap-1 xl:gap-2">
					<p className="h-fit">Email: </p>
					<div className={`dashboardPostTileData ${plusJakartaSansFont700.className}`}>{props.userData.email}</div>
				</div>
			</div>

			<div
				onClick={() => verifyUser()}
				className="aspect-[3/2] gap-y-3 flex flex-col items-center justify-center w-1/4 rounded-r-2xl bg-LightColor hover:bg-MainColor/90 transition-all duration-300 cursor-pointer"
			>
				<FontAwesomeIcon icon={faShield} className={`h-7 lg:h-10`} />
				<p className={`text-xs xs:text-sm sm:text-base xl:text-xl 4xl:text-2xl ${poppingsFont700.className}`}>{verifyButtonText}</p>
			</div>
		</div>
	);
}
