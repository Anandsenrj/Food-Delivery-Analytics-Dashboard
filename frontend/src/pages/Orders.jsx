import { useEffect, useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import API from "../services/api";

import { DataGrid } from "@mui/x-data-grid";
import { TextField, Paper, Typography } from "@mui/material";

function Orders() {

    const [orders, setOrders] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {

        API.get("/orders")
            .then(res => setOrders(res.data))
            .catch(console.error);

    }, []);

    const filteredOrders = useMemo(() => {

        return orders.filter(order =>

            order.orderId.toLowerCase().includes(search.toLowerCase()) ||

            order.customerId.toLowerCase().includes(search.toLowerCase())

        );

    }, [orders, search]);

    const rows = filteredOrders.map((order, index) => ({

        id: index,

        orderId: order.orderId,

        customerId: order.customerId,

        restaurantId: order.restaurantId,

        orderValue: order.orderValue,

        deliveryMethod: order.deliveryMethod,

        orderTime: new Date(order.orderTime).toLocaleString()

    }));

    const columns = [

        {
            field: "orderId",
            headerName: "Order ID",
            width: 170
        },

        {
            field: "customerId",
            headerName: "Customer",
            width: 180
        },

        {
            field: "restaurantId",
            headerName: "Restaurant",
            width: 130
        },

        {
            field: "orderValue",
            headerName: "Order Value",
            width: 140,
            valueFormatter: value => `₹ ${value}`
        },

        {
            field: "deliveryMethod",
            headerName: "Method",
            width: 120
        },

        {
            field: "orderTime",
            headerName: "Order Time",
            width: 220
        }

    ];

    return (

        <>

            <Sidebar />

            <Navbar />

            <div
                style={{
                    marginLeft: "260px",
                    marginTop: "70px",
                    padding: "30px",
                    background: "#F5F7FA",
                    minHeight: "100vh"
                }}
            >

                <Typography variant="h4" gutterBottom>

                    Orders Management

                </Typography>

                <Paper
                    style={{
                        padding: "20px",
                        marginBottom: "20px"
                    }}
                >

                    <TextField

                        label="Search Order ID / Customer ID"

                        fullWidth

                        value={search}

                        onChange={(e) => setSearch(e.target.value)}

                    />

                </Paper>

                <Paper
                    style={{
                        height: 650,
                        width: "100%"
                    }}
                >

                    <DataGrid

                        rows={rows}

                        columns={columns}

                        pageSizeOptions={[10,20,50]}

                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10,
                                    page: 0
                                }
                            }
                        }}

                    />

                </Paper>

            </div>

        </>

    );

}

export default Orders;