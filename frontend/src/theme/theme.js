import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    palette:{

        primary:{
            main:"#2563EB"
        },

        secondary:{
            main:"#10B981"
        },

        background:{
            default:"#F4F7FE",
            paper:"#FFFFFF"
        }

    },

    typography:{

        fontFamily:"Poppins",

        h4:{
            fontWeight:700
        },

        h5:{
            fontWeight:600
        },

        h6:{
            fontWeight:600
        }

    },

    shape:{
        borderRadius:14
    }

});

export default theme;