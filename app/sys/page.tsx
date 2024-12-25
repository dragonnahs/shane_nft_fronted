/*
 * @Author: shanlonglong danlonglong@weimiao.cn
 * @Date: 2024-12-24 16:14:47
 * @LastEditors: shanlonglong danlonglong@weimiao.cn
 * @LastEditTime: 2024-12-25 11:39:43
 * @FilePath: \shane_nft\app\sys\page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { request } from "@/utils/frontEnd/request";

export default function SysHome() {
    async function getRoutes() {
        const res = await request({url: "/common/router",  params: { id: 1 }});
        console.log(res);
    }
    getRoutes();
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-4">系统概览</h2>
      <p>欢迎使用系统管理后台</p>
    </div>
  );
} 