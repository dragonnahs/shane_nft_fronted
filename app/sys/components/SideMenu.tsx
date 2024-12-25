"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const menuItems = [
  { path: "/sys", label: "系统首页" },
  { path: "/sys/users", label: "用户管理" },
  { path: "/sys/settings", label: "系统设置" },
];

export default function SideMenu() {
  const pathname = usePathname();

  return (
    <nav className="w-64 bg-[#409eff] text-white">
      <div className="p-4 text-xl font-bold">
        <Image 
          src="http://cq-front-common.cqslim.com/common/logos/logo-white.png" 
          alt="logo" 
          width={100} 
          height={100} 
        />
      </div>
      <ul>
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`block px-4 py-3 hover:bg-[rgba(255,255,255,0.2)] transition-colors ${
                pathname === item.path ? "bg-[rgba(255,255,255,0.2)]" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 