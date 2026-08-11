import { useEffect, useState } from "react";
import API from "../services/api";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import ChartCard from "./ChartCard";

const COLORS = [
  "#2563EB",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
];

function DeliveryMethodChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/analytics/delivery-methods")
      .then((res) => setData(res.data))
      .catch(console.error);
  }, []);

  return (
    <ChartCard
      title="Delivery Methods"
      subtitle="Distribution of delivery methods"
    >
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="method"
            outerRadius={110}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export default DeliveryMethodChart;