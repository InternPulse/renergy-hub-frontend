import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";
import { ChevronRight } from "lucide-react";

const AccountManagement = () => {
  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "zh", name: "Chinese" },
  ];

  const currencies = [
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "EUR", symbol: "€", name: "Euro" },
    { code: "GBP", symbol: "£", name: "British Pound" },
    { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  ];

  return (
    <div className="w-80 lg:w-full max-w-7xl p-2 lg:mt-4 ml-16 -mt-[40rem]">
      <div className="bg-white rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold p-4 border-b text-left">
          Account Management
        </h2>

        <div className="divide-y">
          {/* Language Selection */}
          <div className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
            <span className="text-sm text-gray-600">Language & Region</span>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem
                    key={lang.code}
                    value={lang.code}
                    className="bg-white cursor-pointer"
                  >
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Currency Selection */}
          <div className="p-4 flex items-center justify-between hover:bg-gray-50">
            <span className="text-sm text-gray-600">Currency Preference</span>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem
                    key={currency.code}
                    value={currency.code}
                    className="bg-white cursor-pointer"
                  >
                    {currency.symbol} {currency.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Delete Account */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                <span className="text-sm text-red-600">Delete Account</span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to delete this account?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  If you choose to delete your account, we will delete your
                  personal data generated on RENERGY HUB, and we will no longer
                  be able to provide services to you.
                </AlertDialogDescription>
                <AlertDialogDescription>
                  The request to delete your account is permanent and cannot be
                  undone. After your account is deleted, we can’t reopen or
                  reactivate it or restore your data. Please consider carefully
                  before proceeding.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Not Now</AlertDialogCancel>
                <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                  Delete Account
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
