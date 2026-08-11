import MainLayout from "../layouts/MainLayout";

import AnalyticsFilters from "../components/AnalyticsFilters";

import RevenueChart from "../components/RevenueChart";
import DeliveryMethodChart from "../components/DeliveryMethodChart";
import TopRestaurants from "../components/TopRestaurants";
import TopCustomers from "../components/TopCustomers";

function Analytics(){

    return(

        <MainLayout>

            <h1
                style={{
                    marginBottom:20
                }}
            >
                Analytics Dashboard
            </h1>

            <AnalyticsFilters/>

            <div
                style={{
                    display:"grid",
                    gridTemplateColumns:"2fr 1fr",
                    gap:20
                }}
            >

                <RevenueChart/>

                <DeliveryMethodChart/>

            </div>

            <div
                style={{
                    display:"grid",
                    gridTemplateColumns:"1fr 1fr",
                    gap:20,
                    marginTop:20
                }}
            >

                <TopRestaurants/>

                <TopCustomers/>

            </div>

        </MainLayout>

    )

}

export default Analytics;