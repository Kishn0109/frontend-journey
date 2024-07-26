import React from "react";

export default function layout({
	children,
	aboutTeam,
	aboutAnalytics,
}: Readonly<{
	children: React.ReactNode;
	aboutAnalytics: React.ReactNode;
	aboutTeam: React.ReactNode;
}>) {
	return (
		<>
			{children} {aboutTeam} {aboutAnalytics}
		</>
	);
}
