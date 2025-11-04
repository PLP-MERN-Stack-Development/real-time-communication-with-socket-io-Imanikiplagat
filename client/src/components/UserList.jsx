// src/components/UserList.jsx
import { Link } from "react-router-dom";

const UserList = ({ users, currentUser }) => {
  return (
    <aside className="w-64 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto">
      <h2 className="font-semibold text-gray-700 mb-3">Online Users</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className={`flex justify-between items-center p-2 rounded-md ${
              user.username === currentUser ? "bg-blue-100" : "hover:bg-gray-200"
            }`}
          >
            <span>{user.username}</span>
            {user.username !== currentUser && (
              <Link
                to={`/chat/${user.id}`}
                className="text-sm text-blue-500 hover:underline"
              >
                Chat
              </Link>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default UserList;
