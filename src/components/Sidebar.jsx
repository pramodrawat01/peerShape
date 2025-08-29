import { Link } from "react-router-dom";
import { sidebarLinks } from "../utils/Leftbar";


function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white p-4">
      <ul>
        {sidebarLinks.map((item) => (
          <li key={item.path} className="mb-3">
            <Link to={item.path} className="flex items-center gap-2">
              <span>{item.icon}</span> {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar