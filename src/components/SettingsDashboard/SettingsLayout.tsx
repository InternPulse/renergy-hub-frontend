import { Routes, Route, Outlet } from "react-router-dom";
import TopBar from "./Header";
import SideBar from "./SideBar";
import Settings from "../../pages/settings";
import ProfileInformation from "../../pages/settings/profileInformation";
import AccountManagement from "../../pages/settings/accountManagement";
import AccountInformation from "../../pages/settings/accountInformation";
import PushNotifications from "../../pages/settings/pushNotification";
import EmailNotifications from "../../pages/settings/emailNotification";
import PrivacySettings from "../../pages/settings/privacySetting";
import PrivacyPolicy from "../../pages/settings/privacyPolicy";

function SettingsLayout() {
  return (
    <div className="grid min-h-[calc(100vh_-_64px)] max-w-[1920px] mx-auto md:grid-cols-[220px_1fr] lg:grid-cols-[110px_1fr] bg-gray-200">
      <SideBar />
      <div className="flex flex-col">
        <TopBar />
        <main className="flex gap-4 p-4 lg:gap-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function SettingsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SettingsLayout />}>
        <Route index element={<Settings />} />
        <Route path="profileInformation" element={<ProfileInformation />} />
        <Route path="accountmanagement" element={<AccountManagement />} />
        <Route path="accountinformation" element={<AccountInformation />} />
        <Route path="push-notifications" element={<PushNotifications />} />
        <Route path="email-notifications" element={<EmailNotifications />} />
        <Route path="privacySettings" element={<PrivacySettings />} />
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
}

export default SettingsRoutes;
