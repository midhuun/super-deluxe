import { useState } from "react";
import CategoryForm from "./categoryForm";
import SubcategoryForm from "./subCategoryFor";
import ProductForm from "./ProductForm";
const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("categories");
  const [sidebarOpen, setSidebarOpen] = useState(false); // Toggle for sidebar

  return (
    <div className="min-h-screen flex flex-col pt-7 md:pt-[80px] bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 flex items-center justify-between md:hidden">
        <h1 className="text-lg font-bold">Admin Panel</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md bg-white text-blue-500"
        >
          {sidebarOpen ? "Close" : "Menu"}
        </button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`bg-white shadow-md transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:static fixed top-[80px] left-0 w-64 h-full transition-transform z-20`}
        >
          <nav className="p-4">
            <ul>
              <li
                className={`p-2 rounded-md cursor-pointer ${
                  activeTab === "categories"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("categories")}
              >
                Categories
              </li>
              <li
                className={`p-2 rounded-md cursor-pointer ${
                  activeTab === "subcategories"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("subcategories")}
              >
                Subcategories
              </li>
              <li
                className={`p-2 rounded-md cursor-pointer ${
                  activeTab === "products"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("products")}
              >
                Products
              </li>
            </ul>
          </nav>
        </aside>

        {/* Overlay for Sidebar in Mobile */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black opacity-50 md:hidden"
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "categories" && <CategoryForm />}
          {activeTab === "subcategories" && <SubcategoryForm />}
          {activeTab === "products" && <ProductForm />}
        </main>
      </div>
    </div>
  );
};






export default AdminPanel;
