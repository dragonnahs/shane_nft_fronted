"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const routeMap: Record<string, string> = {
  sys: "首页",
  users: "用户管理",
  settings: "系统设置",
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);
  
  return (
    <div className="flex items-center text-sm">
      {paths.map((path, index) => {
        const routePath = "/" + paths.slice(0, index + 1).join("/");
        const isLast = index === paths.length - 1;
        
        return (
          <div key={path} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
            {isLast ? (
              <span className="text-gray-600">{routeMap[path] || path}</span>
            ) : (
              <Link 
                href={routePath}
                className="text-blue-500 hover:text-blue-600"
              >
                {routeMap[path] || path}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
} 