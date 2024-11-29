import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import { Switch } from "../../components/ui/switch";

const NotificationSettings = () => {
  const [isPushEnabled, setIsPushEnabled] = useState(false);
  const [isPromotionsEnabled, setIsPromotionsEnabled] = useState(false);
  const [isPlatformEnabled, setIsPlatformEnabled] = useState(false);
  const [isOrderEnabled, setIsOrderformEnabled] = useState(false);
  const [isTransactionEnabled, setIsTransactionEnabled] = useState(false);
  const [isVendorEnabled, setIsVendorEnabled] = useState(false);
  const [isAccountEnabled, setIsAccountEnabled] = useState(false);

  return (
    <div className="w-80 lg:w-full max-w-7xl p-2 space-y-4 text-left lg:mt-16 ">
      {/* Header Card */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Select the kinds of notifications you get about your activities and
            recommendations.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Push Notifications Card */}
      <Card className="w-full">
        <CardContent className="flex items-center justify-between p-6">
          <div className="space-y-1">
            <h4 className="text-sm font-medium">Push Notifications</h4>
            <p className="text-sm text-gray-500">
              Push Notifications are useful for real-time, in-app updates.
            </p>
          </div>
          <Switch
            checked={isPushEnabled}
            onCheckedChange={setIsPushEnabled}
            className={`${
              isPushEnabled ? "bg-green-500" : "bg-gray-500"
            } relative inline-flex items-center h-6 rounded-full w-11`}
          >
            {" "}
            <span
              className={`${
                isPushEnabled ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
            />{" "}
          </Switch>
        </CardContent>
      </Card>

      {/*Card Only shown when Push Notifications is enabled */}
      {isPushEnabled && (
        <Card className="w-full">
          <CardContent className="flex items-center justify-between p-6 border-b">
            <div className="space-y-1">
              <h4 className="text-sm font-medium">Promotions and Offers</h4>
              <p className="text-sm text-gray-500">
                Special Promotions, New Product launches, discounts and more
              </p>
            </div>
            <Switch
              checked={isPromotionsEnabled}
              onCheckedChange={setIsPromotionsEnabled}
            />
          </CardContent>
          <CardContent className="flex items-center justify-between p-6 border-b">
            <div className="space-y-1">
              <h4 className="text-sm font-medium">Platform Updates</h4>
              <p className="text-sm text-gray-500">
                News on platform features, improvements, and other updates
              </p>
            </div>
            <Switch
              checked={isPlatformEnabled}
              onCheckedChange={setIsPlatformEnabled}
            />
          </CardContent>
          <CardContent className="flex items-center justify-between p-6 border-b">
            <div className="space-y-1">
              <h4 className="text-sm font-medium">Order Updates</h4>
              <p className="text-sm text-gray-500">
                Order confirmations, shipment tracking, delivery confirmations
                and cancellations
              </p>
            </div>
            <Switch
              checked={isOrderEnabled}
              onCheckedChange={setIsOrderformEnabled}
            />
          </CardContent>
          <CardContent className="flex items-center justify-between p-6 border-b">
            <div className="space-y-1">
              <h4 className="text-sm font-medium">Transaction Notification</h4>
              <p className="text-sm text-gray-500">
                Upcoming payments, Successful transactions, or failed payments
              </p>
            </div>
            <Switch
              checked={isTransactionEnabled}
              onCheckedChange={setIsTransactionEnabled}
            />
          </CardContent>
          <CardContent className="flex items-center justify-between p-6 border-b">
            <div className="space-y-1">
              <h4 className="text-sm font-medium">Vendor Updates</h4>
              <p className="text-sm text-gray-500">
                New vendor, Vendor promotions
              </p>
            </div>
            <Switch
              checked={isVendorEnabled}
              onCheckedChange={setIsVendorEnabled}
            />
          </CardContent>
          <CardContent className="flex items-center justify-between p-6 border-b">
            <div className="space-y-1">
              <h4 className="text-sm font-medium">Account and Security</h4>
              <p className="text-sm text-gray-500">
                Login alerts, Password changes, Account activity summaries
              </p>
            </div>
            <Switch
              checked={isAccountEnabled}
              onCheckedChange={setIsAccountEnabled}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default NotificationSettings;
