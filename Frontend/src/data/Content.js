import industrialAirCurtain from '../assets/industrialAirCurtain.png'
import commercialAC from '../assets/commercialAC.png'
import aluminiumAC from '../assets/aluminiumAC.png'
import stainlessSteelAC from '../assets/stainlessSteelAC.png'
import pvcCurtain from '../assets/pvcCurtain.png'
import pvcHanger from '../assets/pvcHanger.png'
import insectKiller from '../assets/insectKiller.png'
import flyCatcher from '../assets/flyCatcher.png'
import ssInsectKiller from '../assets/ssInsectKiller.png'
import ssHandDryer from '../assets/ssHandDryer.png'
import absHandDryer from '../assets/absHandDryer.png'
import msBlackAC from '../assets/msBlackAC.png'
import frontSectionAC from '../assets/frontSectionAC.png'

import 
{   
  Wind, LayoutGrid, Layers, ShieldCheck, AirVent, Fan,
  Zap, Volume2, Gauge, Factory
} from 'lucide-react';


// export { industrialAirCurtain };

export const navLinks = [
  { label: "Home", href: "/home" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
//   { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "/contact" },
];

export const products = [
  {
    icon: Wind,
    image: commercialAC,
    title: "Industrial MS Air Curtain",
    desc: "High-velocity units engineered for large openings, loading bays, and heavy-traffic industrial entrances.",
  },
  {
    icon: LayoutGrid,
    image: industrialAirCurtain,
    title: "Commercial MS Air Curtain",
    desc: "Sleek, low-noise curtains designed for retail entrances, offices, hotels and public-facing spaces.",
  },
  {
    icon: Layers,
    image: aluminiumAC,
    title: "Aluminium Slick Body Air Curtain",
    desc: "Corrosion-resistant, food-grade construction built for kitchens, cold storage and processing units.",
  },
  {
    icon: Fan,
    image: msBlackAC,
    title: "MS Black Air Curtain",
    desc: "Complete extraction and ventilation architecture for plants, warehouses and large-format facilities.",
  },
  {
    icon: Fan,
    image: frontSectionAC,
    title: "Front Section Air Curtain",
    desc: "Complete extraction and ventilation architecture for plants, warehouses and large-format facilities.",
  },
  {
    icon: Layers,
    image: stainlessSteelAC,
    title: "Stainless Steel Air Curtain",
    desc: "Corrosion-resistant, food-grade construction built for kitchens, cold storage and processing units.",
  },
   {
    icon: Layers,
    image: pvcCurtain,
    title: "PVC Strip Curtain",
    desc: "Hhidk",
  },
  {
    icon: Fan,
    image: pvcHanger,
    title:"PVC Hanger",
    desc:"Do here some"
  },  
  {
    icon: ShieldCheck,
    image: insectKiller,
    title: "Insect Killer",
    desc: "Contamination-control units engineered to ISO cleanroom standards for pharma and precision manufacturing.",
  },
  {
    icon: AirVent,
    image: flyCatcher,
    title: "Fly Catcher",
    desc: "Modular AHUs delivering precise temperature, humidity and filtration control at industrial scale.",
  },
  {
    icon: Fan,
    image: ssInsectKiller,
    title: "Stainless Steel Insect Killer",
    desc: "Complete extraction and ventilation architecture for plants, warehouses and large-format facilities.",
  },
  {
    icon: Fan,
    image: ssHandDryer,
    title: "Stainless Steel Hand Dryer",
    desc: "Complete extraction and ventilation architecture for plants, warehouses and large-format facilities.",
  },
  {
    icon: Fan,
    image: absHandDryer,
    title: "ABS Hand Dryer",
    desc: "Complete extraction and ventilation architecture for plants, warehouses and large-format facilities.",
  },
  
];

export const whyChoose = [
  {
    icon: Zap,
    title: "Energy Efficient",
    desc: "EC motor technology cuts power consumption without compromising airflow output.",
  },
  {
    icon: Volume2,
    title: "Low Noise Technology",
    desc: "Acoustically optimised housings keep operating sound below industry thresholds.",
  },
  {
    icon: Gauge,
    title: "High Performance Motors",
    desc: "Precision-balanced motors engineered for continuous industrial-grade duty cycles.",
  },
  {
    icon: Factory,
    title: "Made in India",
    desc: "Manufactured and tested at our own facility, built to global quality standards.",
  },
];