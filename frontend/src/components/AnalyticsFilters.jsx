import {
  Paper,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from "@mui/material";

import { useState } from "react";

function AnalyticsFilters() {

    const [month,setMonth]=useState("");

    const [method,setMethod]=useState("");

    const [restaurant,setRestaurant]=useState("");

    return(

        <Paper
            sx={{
                p:3,
                mb:3,
                borderRadius:3
            }}
        >

            <Grid container spacing={2}>

                <Grid size={{ xs:12, md:3 }}>

                    <FormControl fullWidth>

                        <InputLabel>Month</InputLabel>

                        <Select
                            value={month}
                            label="Month"
                            onChange={(e)=>setMonth(e.target.value)}
                        >

                            <MenuItem value="">All</MenuItem>

                            <MenuItem value="1">January</MenuItem>

                            <MenuItem value="2">February</MenuItem>

                            <MenuItem value="3">March</MenuItem>

                            <MenuItem value="4">April</MenuItem>

                            <MenuItem value="5">May</MenuItem>

                            <MenuItem value="6">June</MenuItem>

                            <MenuItem value="7">July</MenuItem>

                            <MenuItem value="8">August</MenuItem>

                            <MenuItem value="9">September</MenuItem>

                            <MenuItem value="10">October</MenuItem>

                            <MenuItem value="11">November</MenuItem>

                            <MenuItem value="12">December</MenuItem>

                        </Select>

                    </FormControl>

                </Grid>

                <Grid size={{ xs:12, md:3 }}>

                    <FormControl fullWidth>

                        <InputLabel>Delivery Method</InputLabel>

                        <Select
                            value={method}
                            label="Delivery Method"
                            onChange={(e)=>setMethod(e.target.value)}
                        >

                            <MenuItem value="">All</MenuItem>

                            <MenuItem value="Bike">Bike</MenuItem>

                            <MenuItem value="Car">Car</MenuItem>

                            <MenuItem value="Walk">Walk</MenuItem>

                        </Select>

                    </FormControl>

                </Grid>

                <Grid size={{ xs:12, md:3 }}>

                    <FormControl fullWidth>

                        <InputLabel>Restaurant</InputLabel>

                        <Select
                            value={restaurant}
                            label="Restaurant"
                            onChange={(e)=>setRestaurant(e.target.value)}
                        >

                            <MenuItem value="">All Restaurants</MenuItem>

                        </Select>

                    </FormControl>

                </Grid>

                <Grid size={{ xs:12, md:3 }}
                      display="flex"
                      alignItems="center"
                      gap={2}
                >

                    <Button
                        variant="contained"
                        fullWidth
                    >
                        Apply
                    </Button>

                    <Button
                        variant="outlined"
                        fullWidth
                    >
                        Reset
                    </Button>

                </Grid>

            </Grid>

        </Paper>

    )

}

export default AnalyticsFilters;