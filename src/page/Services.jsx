import { Link, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div className="flex">
      <aside>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link to="/services/marketing" className="text-white hover:text-blue-500"></Link>
            </li>
            <li>
              <Link to="/services/software" className="text-white hover:text-blue-500"></Link>
            </li>
            <li>
              <Link to="/services/ai" className="text-white hover:text-blue-500"></Link>
            </li>
            {/* Add other service links as needed */}
          </ul>
        </nav>
      </aside>
      <main className="w-3/4 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Services;