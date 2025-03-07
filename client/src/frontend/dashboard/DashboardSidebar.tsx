import { CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const DashboardSidebar: React.FC = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon">
          <CardMedia
            component="img"
            image="./logo.png"
            alt="Logo"
            sx={{ width: "50px" }}
          />
        </div>
      </Link>

      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link className="nav-link" to="/dashboard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      {/* <div className="sidebar-heading">Interface</div> */}

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/dashboard/blog">
          <span>Blog Posts</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/dashboard/blog/add">
          <span>Add Posts</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
};

export default DashboardSidebar;
