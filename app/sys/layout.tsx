/*
 * @Author: shanlonglong danlonglong@weimiao.cn
 * @Date: 2024-12-24 16:14:40
 * @LastEditors: shanlonglong danlonglong@weimiao.cn
 * @LastEditTime: 2024-12-25 10:35:20
 * @FilePath: \shane_nft\app\sys\layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 