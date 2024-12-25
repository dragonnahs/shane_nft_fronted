export default function TopNav() {
  return (
    <header className="h-16 bg-white shadow-sm flex items-center px-6">
      <div className="flex-1">
        <h1 className="text-xl font-semibold text-gray-800">管理后台</h1>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">管理员</span>
        <button className="text-gray-600 hover:text-gray-800">退出</button>
      </div>
    </header>
  );
} 