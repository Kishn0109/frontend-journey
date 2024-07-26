import React from "react";

export default function LandingPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className='site-container'>{children} </div>;
}
