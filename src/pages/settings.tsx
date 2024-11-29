import { useState } from "react";
import { ChevronLeft, ChevronRight, User, Bell, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Interface for submenu items with paths
interface SubMenuItem {
  label: string;
  path: string;
}

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  submenu: SubMenuItem[];
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, submenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmenuClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg"
      >
        <div className="flex items-center space-x-3">
          {icon}
          <span className="font-medium">{label}</span>
        </div>
        <ChevronRight
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "transform rotate-90" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="border-t">
          {submenu.map((item, index) => (
            <button
              key={index}
              onClick={() => handleSubmenuClick(item.path)}
              className="w-full p-2 text-left hover:bg-gray-50 transition-colors flex items-center"
            >
              <div className="w-5" /> {/* Spacing to align with parent icon */}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="w-80 lg:w-full max-w-7xl p-2 lg:mt-16 -mt-80">
      {/* Header */}
      <div className="w-full bg-white rounded-lg shadow mb-4">
        <div className="p-4 flex items-center space-x-3">
          <ChevronLeft
            className="w-5 h-5 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <span className="text-lg font-medium">Settings Menu</span>
        </div>
      </div>

      {/* Menu Items */}
      <MenuItem
        icon={<User className="w-5 h-5" />}
        label="Account"
        submenu={[
          {
            label: "Profile Information",
            path: "/settings/profileInformation",
          },
          { label: "Account Management", path: "/settings/accountManagement" },
          {
            label: "Account Information",
            path: "/settings/accountInformation",
          },
        ]}
      />

      <MenuItem
        icon={<Bell className="w-5 h-5" />}
        label="Notifications"
        submenu={[
          { label: "Push Notifications", path: "/settings/push-notifications" },
          {
            label: "Email Notifications",
            path: "/settings/email-notifications",
          },
        ]}
      />

      <MenuItem
        icon={<Lock className="w-5 h-5" />}
        label="Privacy"
        submenu={[
          { label: "Privacy Settings", path: "/settings/privacySettings" },
          { label: "Privacy Policy", path: "/settings/privacyPolicy" },
        ]}
      />
    </div>
  );
};

export default Settings;
