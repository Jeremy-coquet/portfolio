import SidebarLeftContainer from "../containers/sidebarLeft";
import SidebarRightContainer from "../containers/sidebarRight";
import React from "react";

interface LayoutProps{
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div>
			<SidebarLeftContainer />
			<div>
				{children}
			</div>
			<SidebarRightContainer />
		</div>
	);
}

export default Layout;
