import * as React from "react";
  
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import './Header.css'
  
export default function Header() {
  return (
    <header class="header">
    <a href="#" class="logo">RedBus</a>
    <nav class="nav-items">
      <a href="./Home">Home</a>
      <a href="./About">About</a>
      <a href="./Contact">Contact</a>
      <a href="./Login">Login</a>
    </nav>
  </header>
  );
}