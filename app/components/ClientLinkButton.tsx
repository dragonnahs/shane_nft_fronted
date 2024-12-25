/*
 * @Author: shanlonglong danlonglong@weimiao.cn
 * @Date: 2024-12-24 16:17:28
 * @LastEditors: shanlonglong danlonglong@weimiao.cn
 * @LastEditTime: 2024-12-24 16:17:53
 * @FilePath: \shane_nft\app\components\Button.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

export default function ClientLinkButton({ children, href }: { children: ReactNode, href: string }) {
  const router = useRouter();
  return <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => router.push(href)}>{children}</button>;
}
