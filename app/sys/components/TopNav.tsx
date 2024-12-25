/*
 * @Author: shanlonglong danlonglong@weimiao.cn
 * @Date: 2024-12-24 16:14:46
 * @LastEditors: shanlonglong danlonglong@weimiao.cn
 * @LastEditTime: 2024-12-25 10:38:46
 * @FilePath: \shane_nft\app\sys\components\TopNav.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Breadcrumb from "./Breadcrumb";

export default function TopNav() {
  return (
    <header className="h-14 bg-white shadow-md flex items-center px-6">
      <div className="flex-1">
        <Breadcrumb />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">管理员</span>
        <button className="text-gray-600 hover:text-gray-800">退出</button>
      </div>
    </header>
  );
} 