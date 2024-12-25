import { ReactNode } from "react";
import SideMenu from "./components/SideMenu";
import TopNav from "./components/TopNav";

export default function SysLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* 左侧菜单 */}
      <SideMenu />
      
      {/* 右侧内容区 */}
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
} 