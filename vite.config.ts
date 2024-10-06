import { vitePlugin as remix, cloudflareDevProxyVitePlugin as remixCloudflareDevProxy } from "@remix-run/dev";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		remixCloudflareDevProxy(),
		remix({
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
			},
		}),
		svgrPlugin(),
		tsconfigPaths(),
	],
	server: {
		host: "0.0.0.0",
		port: 3000,
	},
});
