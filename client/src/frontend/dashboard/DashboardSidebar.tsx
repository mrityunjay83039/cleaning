import { CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo/logo.png'

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
            image={logo}
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
        <Link className="nav-link collapsed" to="/dashboard/categories">
          <span>Categories</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/dashboard/blogs">
          <span>Blogs</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/dashboard/jobs">
          <span>Jobs</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/dashboard/galleries">
          <span>Gallery Images</span>
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
