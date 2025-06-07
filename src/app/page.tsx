"use client"
  
import Image from "next/image";
import styles from "./page.module.css";
import { Happiness } from "@/components/hapiness";

export default function Home() {
  return (
    <div>
      <div className="position:absolute">
        <Happiness />
      </div>
    </div>
  );
}
