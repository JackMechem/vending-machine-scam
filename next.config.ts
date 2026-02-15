import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			new URL(
				"https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/CSUNS.svg/1280px-CSUNS.svg.png",
			),
		],
	},
};

export default nextConfig;
