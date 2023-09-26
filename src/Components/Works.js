'use client'
import { useState } from "react";
import Image from "next/image";
export default function Works() {
	const [projectImage, setProjectImage] = useState("moments.png"); // State to store the project image URL

	// Function to set the project image based on the hovered content
	const handleProjectHover = (imageName) => {
		// Define the image URLs based on the content
		const imageUrls = {
			Moments: "moments.png", // Replace 'moments.jpg' with the actual image URL
			MovieBox: "moviebox.png", // Replace 'moviebox.jpg' with the actual image URL
			Duqqa: "duqqa.png", // Replace 'duqqa.jpg' with the actual image URL
			BazuChat: "bazuchat.png", // Replace 'bazuchat.jpg' with the actual image URL
		};

		// Set the project image based on the hovered content
		setProjectImage(imageUrls[imageName]);
	};

	return (
		<div className="bg-white h-screen w-full flex flex-col px-[50px] gap-[20px]">
			<h1 className="text-[100px]">projects.</h1>
			<div className="flex justify-between w-full">
				<div className="w-1/2 flex flex-col gap-[50px]">
					<div
						className="text-[50px] border-b-2 border-neutral-800 flex justify-between items-center text-neutral-600 hover:text-black"
						onMouseEnter={() => handleProjectHover("Moments")}
					>
						<h1>1. Moments </h1>
						<a
							href="https://github.com/ggakila/moments-by-gisore"
							className="text-2xl text-neutral-400"
						>
							source code
						</a>
					</div>
					<div
						className="text-[50px] border-b-2 border-neutral-800 flex justify-between items-center text-neutral-600 hover:text-black"
						onMouseEnter={() => handleProjectHover("MovieBox")}
					>
						<h1>2. MovieBox </h1>
						<a
							href="https://github.com/ggakila/zuri-stage2"
							className="text-2xl text-neutral-400"
						>
							source code
						</a>
					</div>
					<div
						className="text-[50px] border-b-2 border-neutral-800 flex justify-between items-center text-neutral-600 hover:text-black"
						onMouseEnter={() => handleProjectHover("Duqqa")}
					>
						<h1>3. Duqqa </h1>
						<a
							href="https://github.com/ggakila/next-js-apps/tree/main/duqqa"
							className="text-2xl text-neutral-400"
						>
							source code
						</a>
					</div>
					<div
						className="text-[50px] border-b-2 border-neutral-800 flex justify-between items-center text-neutral-600 hover:text-black"
						onMouseEnter={() => handleProjectHover("BazuChat")}
					>
						<h1>4. Bazu Chat </h1>
						<a
							href="https://github.com/ggakila/React/tree/main/bazu-chat"
							className="text-2xl text-neutral-400"
						>
							source code
						</a>
					</div>
				</div>
				<div className="w-1/2 h-full flex justify-center items-center">
					<div className="right relative w-[500px] h-[500px] ">
						<Image
							src={`/${projectImage}`}
							fill={true}
							alt="profilepic"
							style={{ objectFit: "contain" }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
