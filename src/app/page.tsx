"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { Happiness } from "@/components/hapiness";
import { LandscapeBackground } from "../components/landscapbackground";
import { Grimaldis } from "@/components/grimaldis";
import Cake from "@/components/cake";
import { Fairies } from "@/components/fairies";
import { TomCruise } from "@/components/tomcruise";
import { SnackRecommender } from "@/components/snack-recommender";
import { TomT } from "@/components/tom";
export default function Home() {
  return (
    <div>
      
      <div style={{ position: "absolute", top: "10%", left: "10%" }}>
        <Happiness />
      </div>
      <div style={{ position: "absolute", top: "70%", left: "20%", transform: "translate(-50%, -50%)" }}>
        <Cake />
      </div>
      <div style={{ position: "absolute", top: "10%", right: "10%" }}>
        <Grimaldis />
      </div>
      <Fairies />
      <LandscapeBackground />
      <div style={{ position: "absolute", bottom: "30%", right: "20%" , transform: "scale(0.75)"}} className="stack:horizontal">
        <TomT />
        <TomCruise />
      </div>
      <div style={{ position: "absolute", top: "10%", left: "50%" }}>
        <SnackRecommender />
      </div>
    </div>
  );
}
