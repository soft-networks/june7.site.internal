"use client"
  
import Image from "next/image";
import styles from "./page.module.css";
import { Happiness } from "@/components/hapiness";
import { LandscapeBackground } from "../components/landscapbackground";
import { Grimaldis } from "@/components/grimaldis";
import Cake from "@/components/cake";
import { Fairies } from "@/components/fairies";
export default function Home() {
  return (
    <div>
      <Fairies />
      <div style={{position: "absolute", top: "10%", left: "10%" }}>
        <Happiness />
      </div>
      <div style={{position: "absolute", top: "70%", left: "50%", transform: "translate(-50%, -50%)"}}>
        <Cake />
      </div>
      <div style={{position: "absolute", bottom: "10%", right: "10%" }}>
        <Grimaldis />
      </div>
      <LandscapeBackground />
      
    </div>
  );
}
