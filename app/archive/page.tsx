import Image from "next/image";

export default function ArchivePage() {
	const imagePaths = [
		"/archive/1.JPG",
		"/archive/2.JPG",
		"/archive/3.JPG",
		"/archive/4.JPG",
		"/archive/5.JPG",
		"/archive/6.JPG",
		"/archive/7.JPG",
		"/archive/8.JPG",
		"/archive/9.JPG",
		"/archive/10.JPG",
		"/archive/11.jpg",
		"/archive/12.jpg",
		"/archive/13.JPG",
		"/archive/14.JPG",
		"/archive/15.JPG",
		"/archive/16.JPG",
		"/archive/17.JPG",
		"/archive/18.JPG",
	];

	return (
		<div className="p-2 sm:p-3">
			<div className="mt-3 columns-2 sm:columns-3 gap-4">
				{imagePaths.map((src) => {
					const alt = src
						.split("/")
						.pop()!
						.replace(/\.[^/.]+$/, "")
						.replace(/[-_]/g, " ");
					return (
						<div key={src} className="mb-4 break-inside-avoid">
							<Image
								src={src}
								alt={alt}
								width={0}
								height={0}
								sizes="(min-width: 640px) 33vw, 100vw"
								className="w-full h-auto"
								priority={false}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

