import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"



const PurchaseHistory = () => {
    const purchases = [
        { productName: "Circuit breaker", purchaseDate: "16th Nov", totalAmount: "$120,000", quantity: "3 pieces", status: "Shipped" },
        { productName: "Circuit breaker", purchaseDate: "10th Nov", totalAmount: "$120,000", quantity: "3 pieces", status: "Confirmed" },
        { productName: "Circuit breaker", purchaseDate: "5th Oct", totalAmount: "$120,000", quantity: "3 pieces", status: "Delivered" },
        { productName: "Circuit breaker", purchaseDate: "30th Sept", totalAmount: "$120,000", quantity: "3 pieces", status: "Cancelled" },
    ];

    return (
        <section className=" md:ml-[250px] h-full mb-10 px-3 py-3">
            <div className="p-6 bg-gray-50">
                <h1 className="text-2xl font-bold mb-6">Purchases</h1>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-6">
                    <button className="px-4 py-2  rounded-full hover:bg-gray-300 bg-green-400">Date </button>
                    <button className="px-4 py-2  rounded-full hover:bg-gray-300 bg-white  border-2 border-dotted border-green-500">Product Type </button>
                    <button className="px-4 py-2  rounded-full hover:bg-gray-300 bg-white border-2 border-dotted border-green-500">Vendor </button>
                    <button className="px-4 py-2  rounded-full hover:bg-gray-300 bg-white border-2 border-dotted border-green-500">All Filters </button>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <button className="ml-auto px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                                Export
                            </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle className="bg-[#007300] flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            <img src="/vertical.png" alt="" />
                                            <img src="/vertical.png" alt="" />
                                        </div>
                                        <h1>
                                            Order 1233
                                        </h1>
                                    </div>
                                    <div>
                                        <img src="/x.png" alt="" />
                                    </div>
                                </AlertDialogTitle>
                                <AlertDialogDescription className="flex flex-col">
                                    <div className="border-b-2 border-gray-950 pl-5">
                                        <h2 className="text-gray-950">Contact Details</h2>
                                    </div>
                                    <div className="p-5 justify-between flex">
                                        <div className=" flex flex-col gap-2">
                                            <div className="flex items-center gap-2">
                                                <img src="/contact.png" alt="" />
                                                <h1>Esther Howard</h1>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <img src="/mailsolid.png" alt="" />
                                                <h1>esther@gmail.com</h1>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <img src="/call.png" alt="" />
                                                <h1>+234806774447</h1>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2">
                                                <img src="/cal.png" alt="" />
                                                <h1>Purchase Date: 16th Nov 2024</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b-2 border-gray-950 pl-5">
                                        <h2 className="text-gray-950">Order Item</h2>
                                    </div>

                                    <div className="p-5 justify-between flex">
                                        <div className=" flex flex-col gap-2">
                                            <div className="flex flex-col items-center gap-2">
                                                <img src="/battery.png" alt="" />
                                                <h1>Inverlast 220Ah Inverter
                                                <br/>Battery</h1>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <img src="/Button.png" alt="" />
                                                <img src="/Vector.png" alt="" />
                                                <img src="/Button 1.png" alt="" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2">
                                                <h1 className="font-semibold">Order Summary</h1>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <h1>Price: 100,000</h1>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <h1>Qty: 3 </h1>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <h1>Subtotal = N300,000</h1>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <h1>Shipping fee= N1,000</h1>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <h1 className="font-semibold">Total= N301,000 </h1>
                                            </div>
                                        </div>
                                    </div>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction className="bg-[#007300] flex gap-2 items-center justify-center">
                                        <img src="/adown.png" alt="" />
                                        <h1>Download</h1>
                                </AlertDialogAction>
                                
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                        <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
                            <tr>
                                <th className="px-4 py-2 text-left">Product Name</th>
                                <th className="px-4 py-2 text-left">Purchase Date</th>
                                <th className="px-4 py-2 text-left">Total Amount</th>
                                <th className="px-4 py-2 text-left">Quantity</th>
                                <th className="px-4 py-2 text-left">Order Status</th>
                                <th className="px-4 py-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchases.map((item, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-gray-50 border-b last:border-none"
                                >
                                    <td className="px-4 py-2">{item.productName}</td>
                                    <td className="px-4 py-2">{item.purchaseDate}</td>
                                    <td className="px-4 py-2">{item.totalAmount}</td>
                                    <td className="px-4 py-2">{item.quantity}</td>
                                    <td className="px-4 py-2">
                                        <span
                                            className={`px-2 py-1 rounded-full font-semibold ${item.status === "Shipped"
                                                    ? "text-gray-600"
                                                    : item.status === "Delivered"
                                                        ? "text-gray-600"
                                                        : item.status === "Cancelled"
                                                            ? "text-gray-600"
                                                            : "text-gray-600"
                                                }`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2  flex justify-center items-center space-x-4">
                                        <button className="text-blue-500 hover:text-blue-700 mx-2"><img src="/public/Button.png" alt="" /></button>
                                        <button className="text-green-500 hover:text-green-700 mx-2"><img src="/public/Vector.png" alt="" /></button>
                                        <button className="text-red-500 hover:text-red-700 mx-2"><img src="/public/Button 1.png" alt="" /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default PurchaseHistory;
