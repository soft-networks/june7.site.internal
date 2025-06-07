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
import  TonyVoter  from "@/components/tonyvoter";
import ImageCarousel from "@/components/imageCarousel";

export default function Home() {
  return (
    <div>
      <div style={{position: "absolute", width: "100vw", height: "100vh", zIndex: 100}}>
        <div style={{ position: "absolute", top: "10%", left: "10%" }}>
          <Happiness />
        </div>
        <div style={{ position: "absolute", top: "70%", left: "20%", transform: "translate(-50%, -50%)" }}>
          <Cake />
        </div>
        <div style={{ position: "absolute", top: "10%", right: "10%" }}>
        </div>
        <div style={{ position: "absolute", top: "10%", right: "20%" , transform: "scale(0.75)"}} className="stack:horizontal:s2">
          <TomT />
          <TomCruise />
        </div>
        <div style={{position: "absolute", bottom: "20%", right: "20%"}}>
          <ImageCarousel />
        </div>
        <div style={{ position: "absolute", top: "80%", left: "20%" }} className="stack:horizontal">     
          <SnackRecommender />
          <TonyVoter />
          <Grimaldis />
          
        </div>
      </div>
      <img src="https://blob.gifcities.org/gifcities/JGB2JFYBYIR33BHTPDB3XNZCCQEZXERL.gif" style={{position: "absolute", top: "90%", left: "0", width: "50vw"}}></img>
      <img src="https://blob.gifcities.org/gifcities/JGB2JFYBYIR33BHTPDB3XNZCCQEZXERL.gif" style={{position: "absolute", top: "90%", left: "50vw", width: "50vw"}}></img>
      <div style={{zIndex: "-1"}}>
        <Fairies />
        <LandscapeBackground />
      </div>
    </div>
  );
}
