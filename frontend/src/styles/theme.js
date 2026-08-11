import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    palette:{

        mode:"light",

        primary:{
            main:"#2563EB"
        },

        secondary:{
            main:"#0F172A"
        },

        background:{
            default:"#F5F7FA"
        }

    },

    typography:{

        fontFamily:"Poppins"

    }

});

export default theme;