import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import API from "../services/api";
import StatCard from "./StatCard";

import PaidIcon from "@mui/icons-material/Paid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import StoreIcon from "@mui/icons-material/Store";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

function DashboardCards() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    API.get("/dashboard")
      .then((res) => {
        console.log(res.data);      // Debug
        setDashboard(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!dashboard) {
    return <h2>Loading Dashboard...</h2>;
  }

  const cards = [
    {
      title: "Total Revenue",
      value: `₹ ${dashboard.totalRevenue?.toFixed(2)}`,
      icon: <PaidIcon />,
      color: "#2563EB",
      trend: "+12%",
    },
    {
      title: "Orders",
      value: dashboard.totalOrders,
      icon: <ShoppingCartIcon />,
      color: "#10B981",
      trend: "+8%",
    },
    {
      title: "Customers",
      value: dashboard.totalCustomers,
      icon: <PeopleIcon />,
      color: "#F59E0B",
      trend: "+5%",
    },
    {
      title: "Restaurants",
      value: dashboard.totalRestaurants,
      icon: <StoreIcon />,
      color: "#8B5CF6",
      trend: "+3%",
    },
    {
      title: "Average Order",
      value: `₹ ${dashboard.averageOrder?.toFixed(2)}`,
      icon: <PaidIcon />,
      color: "#14B8A6",
      trend: "+2%",
    },
    {
      title: "Avg Delivery Delay",
      value: `${dashboard.averageDelay?.toFixed(2)} min`,
      icon: <LocalShippingIcon />,
      color: "#EF4444",
      trend: "-2%",
    },
  ];

  return (
    <Grid container spacing={3}>
      {cards.map((card) => (
        <Grid
  item
  xs={12}
  sm={6}
  md={4}
  lg={2}
>
          <StatCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
}

export default DashboardCards;