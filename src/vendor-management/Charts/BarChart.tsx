"use client";

import { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Share2 } from "lucide-react";
import { Download } from "lucide-react";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";

const chartData = [
  { month: "Jan", sales: 186, revenue: 100, topProduct: 50, avgOrderValue: 20 },
  { month: "Feb", sales: 305, revenue: 200, topProduct: 80, avgOrderValue: 25 },
  { month: "Mar", sales: 237, revenue: 180, topProduct: 70, avgOrderValue: 22 },
  { month: "Apr", sales: 73, revenue: 50, topProduct: 30, avgOrderValue: 18 },
  { month: "May", sales: 209, revenue: 150, topProduct: 65, avgOrderValue: 24 },
  { month: "Jun", sales: 224, revenue: 160, topProduct: 68, avgOrderValue: 23 },
  { month: "Jul", sales: 200, revenue: 140, topProduct: 60, avgOrderValue: 21 },
  { month: "Aug", sales: 180, revenue: 130, topProduct: 55, avgOrderValue: 20 },
  { month: "Sep", sales: 95, revenue: 70, topProduct: 35, avgOrderValue: 19 },
  { month: "Oct", sales: 205, revenue: 145, topProduct: 67, avgOrderValue: 23 },
  { month: "Nov", sales: 194, revenue: 140, topProduct: 62, avgOrderValue: 22 },
  { month: "Dec", sales: 240, revenue: 180, topProduct: 80, avgOrderValue: 26 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#F9D262",
  },
};

export function BarChartComponent() {
  const [selectedMetric, setSelectedMetric] = useState("sales");

  return (
    <section className="bg-white rounded-md py-4 px-6">
      <div>
        <div className="flex gap-10 items-center justify-between">
          <select
            name="metric"
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            style={{
              width: "20%",
              padding: "8px",
              margin: "5px 0",
              color: "#666666",
              fontWeight: 500,
            }}
          >
            <option value="sales">Total Sales</option>
            <option value="revenue">Total Revenue</option>
            <option value="topProduct">Top Selling Product</option>
            <option value="avgOrderValue">Avg. Order Value</option>
          </select>
          <div className="flex items-center gap-4">
            <select
              name="status"
              style={{
                width: "100%",
                padding: "8px",
                margin: "5px 0",
                color: "#666666",
                fontWeight: 500,
              }}
            >
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
            </select>

            <Share2 size={50} />
            <Download size={50} />
          </div>
        </div>
        <div className="pl-3 text-[#666666] font-[700]">
          Revenue: ₦103,150,500.00
        </div>
      </div>
      <div>
        <ChartContainer config={chartConfig} className="mx-auto max-h-[300px]">
          <BarChart width={600} data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey={selectedMetric} // Dynamically update the dataKey based on the selection
              fill="#F9D262" // Use a fixed color or configure dynamically
              radius={8}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </section>
  );
}
