
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "../styles/nav.module.css"
import Submenu, { TooltipItems } from "./submenu";
import { useEffect, useState } from "react";
import { API_URL } from "@/app/constants";
import { getMenu } from "@/app/api/nav";
import MainMenu from "./main-menu";

export default function Navigation() {
  return <MainMenu></MainMenu>
}