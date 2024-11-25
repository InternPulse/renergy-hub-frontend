import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Switch } from "../../components/ui/switch";
import { Label } from "../../components/ui/label";

interface PrivacyOption {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

// Custom switch styles
const switchStyles = {
  backgroundColor: "var(--switch-bg)",
  "--switch-bg": "#e5e7eb", // gray-200 for unchecked
  '&[data-state="checked"]': {
    backgroundColor: "#22c55e", // green-500 for checked
    "--switch-bg": "#22c55e",
  },
  '&[data-state="unchecked"]': {
    backgroundColor: "#e5e7eb", // gray-200 for unchecked
  },
} as React.CSSProperties;

const PrivacySettings = () => {
  const [settings, setSettings] = React.useState<PrivacyOption[]>([
    {
      id: "data-sharing",
      title: "Data Sharing Preferences",
      description: "Allow us to suggest products based on your interests",
      enabled: false,
    },
    {
      id: "profile-visibility",
      title: "Profile Visibility",
      description: "Allow others to see my profile details",
      enabled: true,
    },
    {
      id: "location-access",
      title: "Location Access",
      description: "Use my location to show nearby vendors",
      enabled: false,
    },
    {
      id: "camera-access",
      title: "Camera/Media Access",
      description: "Allow access to upload documents or profile photos",
      enabled: true,
    },
    {
      id: "account-security",
      title: "Account Security",
      description: "Enable two-factor authentication",
      enabled: true,
    },
  ]);

  const handleToggle = (id: string) => {
    setSettings(
      settings.map((setting) =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
  };

  return (
    <div className="w-80 lg:w-full max-w-7xl p-2 space-y-4 text-left lg:mt-16 ">
      {/* header */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">
          Privacy Settings
        </h2>
      </div>

      {/* Settings card */}
      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="space-y-6">
            {settings.map((setting) => (
              <div
                key={setting.id}
                className="flex items-center justify-between py-4 border-b last:border-b-0"
              >
                <div className="space-y-1">
                  <Label
                    htmlFor={setting.id}
                    className="text-sm font-medium text-gray-900"
                  >
                    {setting.title}
                  </Label>
                  <p className="text-sm text-gray-500">{setting.description}</p>
                </div>
                <Switch
                  id={setting.id}
                  checked={setting.enabled}
                  onCheckedChange={() => handleToggle(setting.id)}
                  style={switchStyles}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacySettings;
