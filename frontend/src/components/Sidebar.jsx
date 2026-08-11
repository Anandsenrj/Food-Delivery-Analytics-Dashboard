import {
  FaChartLine,
  FaClipboardList,
  FaUsers,
  FaStore,
  FaTruck,
  FaChartPie,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

import { logout } from "../services/auth";

const menuItems = [
  {
    title: "Dashboard",
    icon: <FaChartLine />,
    path: "/",
  },
  {
    title: "Orders",
    icon: <FaClipboardList />,
    path: "/orders",
  },
  {
    title: "Customers",
    icon: <FaUsers />,
    path: "/customers",
  },
  {
    title: "Restaurants",
    icon: <FaStore />,
    path: "/restaurants",
  },
  {
    title: "Deliveries",
    icon: <FaTruck />,
    path: "/deliveries",
  },
  {
    title: "Analytics",
    icon: <FaChartPie />,
    path: "/analytics",
  },
  {
    title: "Reports",
    icon: <FaFileAlt />,
    path: "/reports",
  },
  {
    title: "Settings",
    icon: <FaCog />,
    path: "/settings",
  },
];

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/login");

  };

  return (

    <aside style={styles.sidebar}>

      {/* Logo */}

      <div style={styles.logoContainer}>

        <div style={styles.logoCircle}>🍔</div>

        <div>

          <h2 style={styles.logoTitle}>FoodTrack</h2>

          <p style={styles.logoSubTitle}>Performance System</p>

        </div>

      </div>

      {/* Navigation */}

      <nav style={styles.nav}>

        {menuItems.map((item) => (

          <NavLink

            key={item.title}

            to={item.path}

            end={item.path === "/"}

            style={({ isActive }) => ({

              ...styles.link,

              ...(isActive ? styles.active : {}),

            })}

          >

            <span style={styles.icon}>{item.icon}</span>

            <span>{item.title}</span>

          </NavLink>

        ))}

      </nav>

      {/* Footer */}

      <div style={styles.footer}>

        <button

          style={styles.logoutButton}

          onClick={handleLogout}

        >

          <FaSignOutAlt />

          <span style={{ marginLeft: 10 }}>Logout</span>

        </button>

        <p style={styles.version}>

          FoodTrack v1.0

        </p>

      </div>

    </aside>

  );

}

const styles = {
  sidebar: {
    width: "260px",
    height: "100vh",
    background: "#111827",
    color: "#FFFFFF",
    position: "fixed",
    left: 0,
    top: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "24px 18px",
    boxSizing: "border-box",
    boxShadow: "4px 0 20px rgba(0,0,0,0.15)",
    overflowY: "auto",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "35px",
  },

  logoCircle: {
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    background: "#2563EB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
  },

  logoTitle: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "700",
  },

  logoSubTitle: {
    margin: 0,
    fontSize: "12px",
    color: "#9CA3AF",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flexGrow: 1,
  },

  link: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    textDecoration: "none",
    color: "#D1D5DB",
    padding: "14px 16px",
    borderRadius: "12px",
    transition: "all .25s ease",
    fontWeight: "500",
    fontSize: "15px",
  },

  active: {
    background: "#2563EB",
    color: "#FFFFFF",
    boxShadow: "0 8px 20px rgba(37,99,235,0.35)",
  },

  icon: {
    fontSize: "18px",
    minWidth: "20px",
  },

  footer: {
    marginTop: "20px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "20px",
  },

  logoutButton: {
    width: "100%",
    background: "#EF4444",
    color: "#FFFFFF",
    border: "none",
    padding: "12px",
    borderRadius: "10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "15px",
    fontWeight: "600",
  },

  version: {
    marginTop: "18px",
    textAlign: "center",
    fontSize: "12px",
    color: "#9CA3AF",
  },
};

export default Sidebar;