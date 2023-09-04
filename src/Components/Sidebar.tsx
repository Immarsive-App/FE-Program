import React from "react";

function Sidebar() {
  return (
   <aside className="bg-gray-900 text-white w-64 min-h-screen">
   <div className="p-4">
     <h2 className="text-2xl font-semibold mb-4">Menu</h2>
     <ul className="space-y-2">
       {/* Tautan-tautan sidebar */}
       <li><a href="#" className="block">Halaman 1</a></li>
       <li><a href="#" className="block">Halaman 2</a></li>
       <li><a href="#" className="block">Halaman 3</a></li>
     </ul>
   </div>
 </aside>
  );
}

export default Sidebar;