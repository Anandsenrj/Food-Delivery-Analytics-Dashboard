import { useEffect, useState } from "react";
import API from "../services/api";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import ChartCard from "./ChartCard";

function RevenueChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
  API.get("/analytics/monthly-revenue")
    .then((res) => {
      const months = [
        "",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      setData(
        res.data.map((item) => ({
          month: months[item.month],
          revenue: item.revenue,
        }))
      );
    })
    .catch(console.error);
}, []);

  return (
    <ChartCard
      title="Monthly Revenue"
      subtitle="Revenue generated each month"
    >
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563EB"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export default RevenueChart;