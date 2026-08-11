import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout({children}){

    return(

        <>

            <Sidebar/>

            <Navbar/>

            <div
                style={{

                    marginLeft:260,

                    marginTop:70,

                    padding:30,

                    minHeight:"100vh",

                    background:"#EEF2FF"

                }}
            >

                {children}

            </div>

        </>

    )

}

export default MainLayout;