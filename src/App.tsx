import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import TopBar from "./components/SettingsDashboard/Header";
import SideBar from "./components/SettingsDashboard/SideBar";
import { Outlet } from "react-router-dom";
import "./App.css";
import Settings from "./pages/settings";
import ProfileInformation from "./pages/settings/profileInformation";
import AccountManagement from "./pages/settings/accountManagement";
import AccountInformation from "./pages/settings/accountInformation";
import PrivacySettings from "./pages/settings/privacySetting";
import PrivacyPolicy from "./pages/settings/privacyPolicy";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <div className="grid min-h-[calc(100vh_-_64px)] max-w-[1920px] mx-auto md:grid-cols-[220px_1fr] lg:grid-cols-[110px_1fr] bg-gray-200">
            <SideBar />

            <TopBar />
            <div className="flex flex-col">
              <main className="flex gap-4 p-4 lg:gap-6 lg:p-8">
                <Outlet />
              </main>
            </div>
          </div>
        }
      >
        <Route path="/settings" element={<Settings />} />
        <Route
          path="/settings/profileInformation"
          element={<ProfileInformation />}
        />
        <Route
          path="/settings/accountManagement"
          element={<AccountManagement />}
        />
        <Route
          path="/settings/accountInformation"
          element={<AccountInformation />}
        />
        {/* <Route
          path="/settings/push-notifications"
          element={<PushNotifications />}
        /> */}
        {/* <Route
          path="/settings/email-notifications"
          element={<EmailNotifications />}
        /> */}
        <Route
          path="/settings/privacySettings"
          element={<PrivacySettings />}
        />
        <Route path="/settings/privacyPolicy" element={<PrivacyPolicy />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
