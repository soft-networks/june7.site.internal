"use client"
  
import Image from "next/image";
import styles from "./page.module.css";
import { Happiness } from "@/components/hapiness";
import { Grimaldis } from "@/components/grimaldis";

export default function Home() {
  return (
    <div>
      <div style={{position: "absolute", bottom: "10%", left: "10%" }}>
        <Happiness />
      </div>
      <div style={{position: "absolute", bottom: "10%", right: "10%" }}>
        <Grimaldis />
      </div>
    </div>
  );
}
