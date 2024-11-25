import React from "react";
import { Eye, EyeOff } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";

interface PasswordInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  required,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="relative">
      <Label htmlFor={label} className="text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <div className="relative mt-1">
        <Input
          id={label}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="pr-10"
          required={required}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4 text-gray-500" />
          ) : (
            <Eye className="h-4 w-4 text-gray-500" />
          )}
        </Button>
      </div>
    </div>
  );
};

const PasswordChangeForm: React.FC = () => {
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password change logic here
    console.log("Form submitted");
  };

  return (
    <Card className="w-80 lg:w-full max-w-7xl p-2 lg:mt-16 -mt-20 text-left bg-transparent">
      <CardHeader>
        <CardTitle className="bg-white p-2 rounded-md">
          Account Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-semibold mb-6 bg-white p-2 rounded-md">
          Change Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <PasswordInput
            label="Old Password"
            value={oldPassword}
            onChange={setOldPassword}
            required
          />

          <div className="space-y-2">
            <PasswordInput
              label="New Password"
              value={newPassword}
              onChange={setNewPassword}
              required
            />
            <p className="text-sm text-gray-500">
              Min. 8 characters, 1 letter, 1 number and 1 special number
            </p>
          </div>

          <PasswordInput
            label="Confirm New Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            required
          />

          <Button type="submit" className="w-full bg-green-600">
            Change Password
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PasswordChangeForm;
