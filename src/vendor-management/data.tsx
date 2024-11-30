// data.ts
export interface Order {
  customer: string;
  date: string;
  total: number;
  paymentStatus: "Paid" | "Pending";
  items: string;
  deliveryId: number | string;
  orderStatus: "Completed" | "Returned" | "Cancelled";
}

export const orders: Order[] = [
  {
    customer: "Esther Howard",
    date: "Jun 19 24",
    total: 155900,
    paymentStatus: "Paid",
    items: "Dry Cell battery",
    deliveryId: "#119256",
    orderStatus: "Completed",
  },
  {
    customer: "David Miler",
    date: "Jun 18 24",
    total: 1290000,
    paymentStatus: "Paid",
    items: "4.6 Volt Inverter",
    deliveryId: "#119288",
    orderStatus: "Completed",
  },
  {
    customer: "James moore",
    date: "Jun 20 24",
    total: 600500,
    paymentStatus: "Paid",
    items: "Dry Cell battery",
    deliveryId: "#117256",
    orderStatus: "Completed",
  },
  {
    customer: "Peter Ador",
    date: "Jun 22 24",
    total: 300000,
    paymentStatus: "Pending",
    items: "Dry Cell battery",
    deliveryId: "#119666",
    orderStatus: "Returned",
  },
  {
    customer: "Wills Bronze",
    date: "Jun 23 24",
    total: 980900,
    paymentStatus: "Paid",
    items: "Dry Cell battery",
    deliveryId: "#67788",
    orderStatus: "Completed",
  },
  {
    customer: "Adeyemi Ola",
    date: "Jun 23 24",
    total: 450000,
    paymentStatus: "Paid",
    items: "Dry Cell battery",
    deliveryId: "#119286",
    orderStatus: "Cancelled",
  },
  {
    customer: "Ezeh Amaka",
    date: "Jun 24 24",
    total: 765800,
    paymentStatus: "Paid",
    items: "Dry Cell battery",
    deliveryId: "#119256",
    orderStatus: "Completed",
  },
  {
    customer: "Rachel Okoh",
    date: "Jun 26 24",
    total: 556000,
    paymentStatus: "Paid",
    items: "Dry Cell battery",
    deliveryId: "#11256",
    orderStatus: "Completed",
  },
  {
    customer: "Sam Alexx",
    date: "Jun 30 24",
    total: 556000,
    paymentStatus: "Paid",
    items: "Dry Cell battery",
    deliveryId: "#34654",
    orderStatus: "Completed",
  },
];

export const formatCurrency = (value: number): string => {
  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN", // Nigerian Naira
    minimumFractionDigits: 0, // No decimals
  });

  return formatter.format(value); // Formats as "₦1,290,000"
};
