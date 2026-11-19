"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Enregistrement unique des plugins GSAP pour toute l'application.
gsap.registerPlugin(ScrollTrigger, useGSAP);

export const EASE = "power3.out";

export { gsap, ScrollTrigger, useGSAP };
