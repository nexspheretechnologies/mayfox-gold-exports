// Curated premium stock imagery (Unsplash direct CDN URLs).
// Use ?w=1600&q=80&auto=format&fit=crop for consistency.

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const img = {
  // Gold & bullion
  goldBars1: u("photo-1610375461246-83df859d849d"),
  goldBars2: u("photo-1589994965851-a8f479c573a9"),
  goldBars3: u("photo-1624365168968-d447ab3ab1ad"),
  goldBars4: u("photo-1626953401472-8af20fab1b69"),
  goldBullion: u("photo-1620207418302-439b387441b0"),
  goldCoins: u("photo-1591488320449-011701bb6704"),
  goldNuggets: u("photo-1610375461369-d613b564f4c4"),
  goldStack: u("photo-1633158829585-23ba8f7c8caf"),
  goldIngot: u("photo-1629920424309-9b0a4f3b8d20"),

  // Vault / security
  vault: u("photo-1554260570-9140fd3b7614"),
  safe: u("photo-1601597111158-2fceff292cdc"),
  security: u("photo-1573164713988-8665fc963095"),

  // Refining / smelting / lab
  smelting: u("photo-1518709594023-6eab9bab7b23"),
  refining: u("photo-1581094794329-c8112a89af12"),
  lab: u("photo-1581093458791-9d42cc05b6d6"),
  assay: u("photo-1532187863486-abf9dbad1b69"),
  inspection: u("photo-1581093588401-fbb62a02f120"),

  // Logistics / shipping / export
  cargoPlane: u("photo-1474302770737-173ee21bab63"),
  cargoPlane2: u("photo-1583500178690-f7fd39c44ce0"),
  containers: u("photo-1494412651409-8963ce7935a7"),
  shipping: u("photo-1605745341112-85968b19335b"),
  port: u("photo-1577416412292-747c6607f055"),
  truck: u("photo-1601584115197-04ecc0da31d7"),
  warehouse: u("photo-1553413077-190dd305871c"),

  // Corporate / trading
  boardroom: u("photo-1573164713714-d95e436ab8d6"),
  meeting: u("photo-1556761175-5973dc0f32e7"),
  handshake: u("photo-1559523161-0fc0d8b38a7a"),
  tradingFloor: u("photo-1611974789855-9c2a0a7236a3"),
  chart: u("photo-1611974789855-9c2a0a7236a3"),
  skyline: u("photo-1444723121867-7a241cacace9"),
  africaSkyline: u("photo-1611348586804-61bf6c080437"),
  nairobi: u("photo-1611348586804-61bf6c080437"),

  // Mining / sourcing
  mining: u("photo-1582578598774-a377d4b32223"),
  mining2: u("photo-1611273426858-450d8e3c9fce"),
  oreDeposit: u("photo-1518709268805-4e9042af2176"),

  // Documents / compliance
  documents: u("photo-1450101499163-c8848c66ca85"),
  contract: u("photo-1568234928966-359c35dd8327"),
  certificate: u("photo-1554224155-6726b3ff858f"),

  // World / map / globe
  worldMap: u("photo-1451187580459-43490279c0fa"),
  globe: u("photo-1532375810709-75b1da00537c"),

  // Hero / abstract gold
  goldTexture: u("photo-1543699565-003b8adda5fc"),
  goldAbstract: u("photo-1610375461249-bcfecdf01b89"),
  goldHero: u("photo-1606293459339-aa5d34a7b0e1"),
};

export const galleryImages = [
  img.goldBars1, img.goldBars2, img.goldBars3, img.goldBars4,
  img.goldBullion, img.goldStack, img.goldIngot, img.goldNuggets,
  img.goldCoins, img.vault, img.safe, img.smelting,
  img.refining, img.lab, img.assay, img.inspection,
  img.cargoPlane, img.cargoPlane2, img.containers, img.shipping,
  img.port, img.truck, img.warehouse, img.boardroom,
  img.meeting, img.handshake, img.tradingFloor, img.skyline,
  img.mining, img.mining2, img.oreDeposit, img.documents,
  img.contract, img.certificate, img.worldMap, img.globe,
  img.goldTexture, img.goldAbstract, img.goldHero, img.security,
];
