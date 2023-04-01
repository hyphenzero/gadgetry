import { Html, Head, Main, NextScript } from "next/document"
import React from "react"

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
			</Head>
			<body className="fixed h-screen w-screen select-none bg-white dark:bg-slate-950">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
