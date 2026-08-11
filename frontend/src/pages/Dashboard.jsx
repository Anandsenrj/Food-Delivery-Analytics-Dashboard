import MainLayout from "../layouts/MainLayout";

import DashboardCards from "../components/DashboardCards";
import RevenueChart from "../components/RevenueChart";
import DeliveryMethodChart from "../components/DeliveryMethodChart";
import TopRestaurants from "../components/TopRestaurants";
import TopCustomers from "../components/TopCustomers";
import RecentOrders from "../components/RecentOrders";

function Dashboard() {
  return (
    <MainLayout>
     <>
<h1
    style={{
        fontSize: 34,
        fontWeight: 700,
        marginBottom: 5
    }}
>
    Food Delivery Analytics Dashboard
</h1>

<p
    style={{
        color:"#64748B",
        marginBottom:30
    }}
>
    Monitor revenue, orders, customers and delivery performance in real time.
</p>
</>

      <DashboardCards />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <RevenueChart />

        <DeliveryMethodChart />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <TopRestaurants />

        <TopCustomers />
      </div>

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <RecentOrders />
      </div>
    </MainLayout>
  );
}

export default Dashboard;