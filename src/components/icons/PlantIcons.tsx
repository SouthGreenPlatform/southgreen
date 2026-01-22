import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Bananier (Musa) — silhouette avec régime
export const BananaIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Régime de bananes */}
    <path d="M12 3c-2 1-3 3-2.5 5.5" />
    <path d="M12 3c2 1 3 3 2.5 5.5" />
    <path d="M9.5 8.5c-1.5 0.5-2.5 2-2 4" />
    <path d="M14.5 8.5c1.5 0.5 2.5 2 2 4" />
    <path d="M10 12c-1 0.5-1.5 2-1 3.5" />
    <path d="M14 12c1 0.5 1.5 2 1 3.5" />
    {/* Tige */}
    <path d="M12 3v-1" />
    {/* Grande feuille caractéristique */}
    <path d="M12 16c-3 0-5 2-5 5h10c0-3-2-5-5-5z" />
    <path d="M12 16v5" />
  </svg>
);

// Riz (Oryza) — tige + panicule avec grains pendants
export const RiceIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Tige principale */}
    <path d="M12 22v-14" />
    {/* Panicule - grains pendants */}
    <path d="M12 8c-1-2-2-3-4-3.5" />
    <path d="M12 8c1-2 2-3 4-3.5" />
    <path d="M8 4.5c-0.5 0-1 0.5-1.5 1" />
    <path d="M16 4.5c0.5 0 1 0.5 1.5 1" />
    <path d="M10 6c-1-1.5-2-2-3-2" />
    <path d="M14 6c1-1.5 2-2 3-2" />
    <path d="M7 4c-0.3 0.3-0.5 0.8-0.5 1.2" />
    <path d="M17 4c0.3 0.3 0.5 0.8 0.5 1.2" />
    {/* Feuille */}
    <path d="M12 14c2 0 4-1 5-3" />
    <path d="M12 18c-2 0-4-1-5-3" />
  </svg>
);

// Poaceae (graminées) — inflorescence typique
export const PoaceaeIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Tige */}
    <path d="M12 22v-18" />
    {/* Épillets alternés typiques des graminées */}
    <path d="M12 4l-3-1.5" />
    <path d="M12 5.5l3-1.5" />
    <path d="M12 7l-3-1.5" />
    <path d="M12 8.5l3-1.5" />
    <path d="M12 10l-3-1.5" />
    <path d="M12 11.5l3-1.5" />
    {/* Feuilles basales */}
    <path d="M12 16c-2 1-4 0-5-2" />
    <path d="M12 18c2 1 4 0 5-2" />
  </svg>
);

// Vanille (Vanilla planifolia) — fleur d'orchidée + gousse
export const VanillaIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Fleur d'orchidée stylisée */}
    <path d="M12 2c-1 1-1 3 0 4" />
    <path d="M12 2c1 1 1 3 0 4" />
    <path d="M12 6c-2 0-3 1-3 2s1 1 3 1" />
    <path d="M12 6c2 0 3 1 3 2s-1 1-3 1" />
    <circle cx="12" cy="7" r="1" />
    {/* Gousse de vanille */}
    <path d="M8 12c0 0-1 4 0 8c0.5 1 1.5 1.5 2 1.5" />
    <path d="M16 12c0 0 1 4 0 8c-0.5 1-1.5 1.5-2 1.5" />
    <path d="M10 21.5c1 0.5 3 0.5 4 0" />
    {/* Tige */}
    <path d="M12 9v3" />
  </svg>
);

// Taro (Colocasia esculenta) — feuille cordiforme + corme
export const TaroIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Grande feuille cordiforme (sagittée) */}
    <path d="M12 2c-4 2-6 5-6 9c0 3 2 5 6 6c4-1 6-3 6-6c0-4-2-7-6-9z" />
    {/* Nervure centrale */}
    <path d="M12 4v13" />
    {/* Nervures latérales */}
    <path d="M12 7c-2 1-4 3-4 5" />
    <path d="M12 7c2 1 4 3 4 5" />
    {/* Pétiole + corme/tubercule */}
    <path d="M12 17v2" />
    <ellipse cx="12" cy="21" rx="2.5" ry="1.5" />
  </svg>
);

// Cacao (Theobroma cacao) — cabosse nervurée
export const CocoaIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Cabosse de cacao - forme allongée nervurée */}
    <path d="M12 2c-3 0-5 3-5 7c0 5 2 10 5 12c3-2 5-7 5-12c0-4-2-7-5-7z" />
    {/* Nervures verticales caractéristiques */}
    <path d="M9 4c-1 3-1 8 0 14" />
    <path d="M15 4c1 3 1 8 0 14" />
    <path d="M12 3v18" />
    {/* Pédoncule */}
    <path d="M12 2v-1" />
    <circle cx="12" cy="0.5" r="0.5" />
  </svg>
);

// Café (Coffea) — branche avec cerises
export const CoffeeIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Branche */}
    <path d="M4 12h16" />
    {/* Cerises de café (3) */}
    <ellipse cx="8" cy="15" rx="1.5" ry="2" />
    <ellipse cx="12" cy="16" rx="1.5" ry="2" />
    <ellipse cx="16" cy="15" rx="1.5" ry="2" />
    {/* Pédoncules */}
    <path d="M8 13v-1" />
    <path d="M12 14v-2" />
    <path d="M16 13v-1" />
    {/* Feuilles opposées typiques */}
    <path d="M6 12c-2-1-3-3-2-5c2 0 4 2 4 5" />
    <path d="M18 12c2-1 3-3 2-5c-2 0-4 2-4 5" />
    <path d="M6 7l2 5" />
    <path d="M18 7l-2 5" />
  </svg>
);

// Canne à sucre (Saccharum) — tige segmentée avec nœuds
export const SugarcaneIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Tige segmentée avec nœuds visibles */}
    <path d="M10 22v-20" />
    <path d="M14 22v-20" />
    {/* Nœuds (entre-nœuds) */}
    <path d="M9 5h6" />
    <path d="M9 10h6" />
    <path d="M9 15h6" />
    <path d="M9 20h6" />
    {/* Feuilles fines partant des nœuds */}
    <path d="M14 5c2 0 4-1 6-3" />
    <path d="M10 10c-2 0-4-1-6-3" />
    <path d="M14 15c2 0 4-1 6-3" />
  </svg>
);

// Palmier (Arecaceae) — tronc + palmes
export const PalmIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Tronc avec cicatrices foliaires */}
    <path d="M12 22v-12" />
    <path d="M11 14h2" />
    <path d="M11 17h2" />
    <path d="M11 20h2" />
    {/* Palmes (feuilles pennées) */}
    <path d="M12 10c-4-1-7-4-8-7" />
    <path d="M12 10c4-1 7-4 8-7" />
    <path d="M12 10c-5 0-9-2-10-4" />
    <path d="M12 10c5 0 9-2 10-4" />
    <path d="M12 10c-3 1-6 0-8 0" />
    <path d="M12 10c3 1 6 0 8 0" />
    {/* Palme centrale */}
    <path d="M12 10v-8" />
  </svg>
);

// Citrus — fruit + feuille + pédoncule
export const CitrusIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Fruit rond (agrume) */}
    <circle cx="12" cy="14" r="6" />
    {/* Segments internes suggérés */}
    <path d="M12 8v12" />
    <path d="M7.5 10.5l9 7" />
    <path d="M16.5 10.5l-9 7" />
    {/* Pédoncule */}
    <path d="M12 8v-2" />
    {/* Feuille typique des agrumes */}
    <path d="M12 6c2-1 4-3 3-5c-2 0-4 2-4 4" />
    <path d="M13 3l-1 3" />
  </svg>
);

// Olivier (Olea europaea) — branche avec olives
export const OliveIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Branche */}
    <path d="M4 12c4 0 12 0 16-2" />
    {/* Olives (2) */}
    <ellipse cx="10" cy="15" rx="1.5" ry="2.5" />
    <ellipse cx="15" cy="14" rx="1.5" ry="2.5" />
    {/* Pédoncules des olives */}
    <path d="M10 12.5v-1" />
    <path d="M15 11.5v-1" />
    {/* Feuilles lancéolées opposées */}
    <path d="M6 12c-1-2-1-4 1-5c1 1 1 3-1 5" />
    <path d="M8 11c0-2 1-4 3-4c0 1-1 3-3 4" />
    <path d="M18 10c1-2 1-4-1-5c-1 1-1 3 1 5" />
    <path d="M13 9c0-2 1-3 3-3c0 1-1 2-3 3" />
  </svg>
);

// Igname/Yam (Dioscorea) — feuille cordée + tubercule
export const YamIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Feuille cordée (en cœur) typique */}
    <path d="M12 3c-3 1-5 4-5 7c0 2 1 4 5 5c4-1 5-3 5-5c0-3-2-6-5-7z" />
    {/* Nervures */}
    <path d="M12 4v11" />
    <path d="M12 7c-2 2-3 4-3 5" />
    <path d="M12 7c2 2 3 4 3 5" />
    {/* Tige/liane */}
    <path d="M12 15c0 2-1 3-2 4" />
    {/* Tubercule allongé */}
    <path d="M8 19c-2 0-3 1-3 2c0 1 2 1.5 4 1c2-0.5 3-1.5 3-2c0-0.5-1-1-2-1" />
  </svg>
);

// Export de tous les icônes
export const PlantIcons = {
  banana: BananaIcon,
  rice: RiceIcon,
  poaceae: PoaceaeIcon,
  vanilla: VanillaIcon,
  taro: TaroIcon,
  cocoa: CocoaIcon,
  coffee: CoffeeIcon,
  sugarcane: SugarcaneIcon,
  palm: PalmIcon,
  citrus: CitrusIcon,
  olive: OliveIcon,
  yam: YamIcon,
};

export type PlantIconName = keyof typeof PlantIcons;
