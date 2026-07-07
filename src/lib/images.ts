// Curated imagery for Mayfox Gold Kenya.
// Product, smelting, lab and people imagery are AI-generated photo-realistic
// images saved in src/assets to depict authentic Kenyan / African operations
// and the exact products this site sells. Generic logistics / map photography
// is sourced from Unsplash where no people are shown.

import heroGold from "../assets/hero-gold.jpg";
import goldBullionBars from "../assets/gold-bullion-bars.jpg";
import goldDoreBars from "../assets/gold-dore-bars.jpg";
import goldNuggetsImg from "../assets/gold-nuggets.jpg";
import rawGoldImg from "../assets/raw-gold.jpg";
import refinedGoldImg from "../assets/refined-gold.jpg";
import investmentGradeGold from "../assets/investment-grade-gold.jpg";
import africanHandshake from "../assets/african-handshake.jpg";
import africanBoardroom from "../assets/african-boardroom.jpg";
import africanTrader from "../assets/african-trader.jpg";
import smeltingImg from "../assets/smelting.jpg";
import assayLab from "../assets/assay-lab.jpg";
import realBars from "../assets/real-gold-bars-crates.jpg.asset.json";
import realGrains from "../assets/real-gold-grains-sacks.jpg.asset.json";
import realScale from "../assets/real-gold-bar-scale.jpg.asset.json";

export const realPhotos = {
  bars: realBars.url,
  grains: realGrains.url,
  scale: realScale.url,
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const img = {
  // Gold & bullion — generated, depict the real product
  goldBars1: heroGold,
  goldBars2: goldBullionBars,
  goldBars3: refinedGoldImg,
  goldBars4: investmentGradeGold,
  goldBullion: goldBullionBars,
  goldCoins: goldNuggetsImg,
  goldNuggets: goldNuggetsImg,
  goldStack: investmentGradeGold,
  goldIngot: goldDoreBars,

  // Vault / security (object-only Unsplash, no people)
  vault: u("photo-1554260570-9140fd3b7614"),
  safe: u("photo-1601597111158-2fceff292cdc"),
  security: u("photo-1573164713988-8665fc963095"),

  // Refining / smelting / lab — generated, African operators
  smelting: smeltingImg,
  refining: refinedGoldImg,
  lab: assayLab,
  assay: assayLab,
  inspection: africanTrader,

  // Logistics / shipping / export (objects/vehicles only)
  cargoPlane: u("photo-1474302770737-173ee21bab63"),
  cargoPlane2: u("photo-1583500178690-f7fd39c44ce0"),
  containers: u("photo-1494412651409-8963ce7935a7"),
  shipping: u("photo-1605745341112-85968b19335b"),
  port: u("photo-1577416412292-747c6607f055"),
  truck: u("photo-1601584115197-04ecc0da31d7"),
  warehouse: u("photo-1553413077-190dd305871c"),

  // Corporate / trading — generated, African professionals
  boardroom: africanBoardroom,
  meeting: africanBoardroom,
  handshake: africanHandshake,
  tradingFloor: africanTrader,
  chart: africanTrader,
  skyline: u("photo-1444723121867-7a241cacace9"),
  africaSkyline: u("photo-1611348586804-61bf6c080437"),
  nairobi: u("photo-1611348586804-61bf6c080437"),

  // Mining / sourcing (landscapes / equipment)
  mining: u("photo-1582578598774-a377d4b32223"),
  mining2: u("photo-1611273426858-450d8e3c9fce"),
  oreDeposit: rawGoldImg,

  // Documents / compliance
  documents: u("photo-1450101499163-c8848c66ca85"),
  contract: u("photo-1568234928966-359c35dd8327"),
  certificate: u("photo-1554224155-6726b3ff858f"),

  // World / map / globe
  worldMap: u("photo-1451187580459-43490279c0fa"),
  globe: u("photo-1532375810709-75b1da00537c"),

  // Hero / abstract gold
  goldTexture: heroGold,
  goldAbstract: investmentGradeGold,
  goldHero: heroGold,
};

export const galleryImages = [
  realBars.url, realGrains.url, realScale.url,
  goldBullionBars, goldDoreBars, goldNuggetsImg, rawGoldImg,
  refinedGoldImg, investmentGradeGold, heroGold, africanTrader,
  smeltingImg, assayLab, africanBoardroom, africanHandshake,
  img.vault, img.safe, img.cargoPlane, img.cargoPlane2,
  img.containers, img.shipping, img.port, img.truck,
  img.warehouse, img.mining, img.mining2, img.documents,
  img.contract, img.certificate, img.worldMap, img.globe,
  goldBullionBars, investmentGradeGold, refinedGoldImg, goldDoreBars,
  goldNuggetsImg, rawGoldImg, heroGold, africanBoardroom,
  africanHandshake, africanTrader, smeltingImg, assayLab,
];
