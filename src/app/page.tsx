"use client"
  
import Image from "next/image";
import styles from "./page.module.css";
import { Happiness } from "@/components/hapiness";
import { LandscapeBackground } from "../components/landscapbackground";
import { Grimaldis } from "@/components/grimaldis";
import { TomCruise } from "@/components/tomcruise";
import { SnackRecommender } from "@/components/snack-recommender";

export default function Home() {
  return (
    <div>
      <div style={{position: "absolute", bottom: "10%", left: "10%" }}>
        <Happiness />
        <LandscapeBackground />
      </div>
      <div style={{position: "absolute", top: "10%", right: "10%" }}>
        <Grimaldis />
      </div>
      <div style={{position: "absolute", bottom: "30%", right: "20%" }}>
        <TomCruise />
      </div>
      <div style={{position: "absolute", top: "10%", left: "50%" }}>
        <SnackRecommender />
      </div>
    </div>
  );
}
