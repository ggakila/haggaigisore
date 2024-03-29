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
		};

		// Set the project image based on the hovered content
		setProjectImage(imageUrls[imageName]);
	};

	return (
		<div
			id="work"
			className="bg-white h-screen w-full flex flex-col px-[50px] gap-[20px]"
		>
			<h1 className="text-[40px] md:text-[100px]">projects.</h1>
			<div className="flex flex-col md:flex-row items-center justify-betweenr w-full">
				<div className="w-full md:w-1/3 flex flex-col gap-[50px]">
					<div
						className="text-xl md:text-4xl border-b-2 border-neutral-800 flex justify-between items-center text-neutral-600 hover:text-black"
						onMouseEnter={() => handleProjectHover("Duqqa")}
					>
						<h1>Duqqa </h1>
						<div className="flex flex-col items-end">
							<a
								href="https://github.com/ggakila/Webstack-Portfolio"
								target="_blank"
								className="text-md md:text-lg text-neutral-500 hover:text-blue-300"
							>
								source code
							</a>
							<a
								href="https://duqqa.vercel.app/auth/login"
								target="_blank"
								className="text-md md:text-lg text-neutral-500 hover:text-blue-300"
							>
								live
							</a>
						</div>
					</div>
					<div
						className="text-xl md:text-4xl border-b-2 border-neutral-800 flex justify-between items-center text-neutral-600 hover:text-black"
						onMouseEnter={() => handleProjectHover("Moments")}
					>
						<h1>Moments </h1>
						<div className="flex flex-col items-end">
							<a
								href="https://github.com/ggakila/moments-by-gisore"
								target="_blank"
								className="text-md md:text-lg text-neutral-500 hover:text-blue-300"
							>
								source code
							</a>
							<a
								href="https://moments-by-gisore-f73b.vercel.app/Login"
								target="_blank"
								className="text-md md:text-lg text-neutral-500 hover:text-blue-300"
							>
								live
							</a>
						</div>
					</div>
					<div
						className="text-xl md:text-4xl border-b-2 border-neutral-800 flex justify-between items-center text-neutral-600 hover:text-black"
						onMouseEnter={() => handleProjectHover("MovieBox")}
					>
						<h1>Movie </h1>
						<div className="flex flex-col items-end">
							<a
								href="https://github.com/ggakila/zuri-stage2"
								target="_blank"
								className="text-md md:text-lg text-neutral-500 hover:text-blue-300"
							>
								source code
							</a>
							<a
								href="https://zuri-stage2.vercel.app/"
								target="_blank"
								className="text-md md:text-lg text-neutral-500 hover:text-blue-300"
							>
								live
							</a>
						</div>
					</div>
				</div>
				<div className="w-full md:w-2/3 h-full flex justify-center items-center">
					<div className="right relative w-[80%] h-[500px] ">
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
