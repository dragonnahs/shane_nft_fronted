/*
 * @Author: shanlonglong danlonglong@weimiao.cn
 * @Date: 2024-12-24 11:09:47
 * @LastEditors: shanlonglong danlonglong@weimiao.cn
 * @LastEditTime: 2024-12-25 12:18:14
 * @FilePath: className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => router.push('/sys')} \shane_nft\app\page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ClientLinkButton from './components/ClientLinkButton';

export default function Home() {
  return (
    <div>
      <ClientLinkButton href="/sys">跳转到管理台</ClientLinkButton>
    </div>
  );
}
