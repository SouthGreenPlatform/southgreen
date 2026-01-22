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
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Banana (Musa) — pseudostem + large leaf + small bunch
export const BananaIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Large banana leaf */}
    <path d="M12 2c-4 3-5 8-4 14" />
    <path d="M12 2c4 3 5 8 4 14" />
    <path d="M12 2v14" />
    {/* Small banana bunch */}
    <path d="M9 18c-1 0-2 1-1.5 3" />
    <path d="M12 18c0 1 0 2.5 0 4" />
    <path d="M15 18c1 0 2 1 1.5 3" />
  </svg>
);

// Rice (Oryza sativa) — culm + drooping panicle
export const RiceIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Main culm */}
    <path d="M12 22v-12" />
    {/* Drooping panicle branches with grains */}
    <path d="M12 10c-1-1-3-2-5-1" />
    <path d="M12 10c1-1 3-2 5-1" />
    <path d="M12 8c-1-1-2-2-4-2" />
    <path d="M12 8c1-1 2-2 4-2" />
    <path d="M12 6c-0.5-1-1.5-2-3-2.5" />
    <path d="M12 6c0.5-1 1.5-2 3-2.5" />
    {/* Leaf */}
    <path d="M12 16c3-1 5-3 6-5" />
  </svg>
);

// Poaceae (grass family) — spikelet inflorescence
export const PoaceaeIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Main stem */}
    <path d="M12 22v-18" />
    {/* Alternating spikelets */}
    <path d="M12 4l-4-1" />
    <path d="M12 6l4-1" />
    <path d="M12 8l-4-1" />
    <path d="M12 10l4-1" />
    <path d="M12 12l-4-1" />
    {/* Basal leaves */}
    <path d="M12 18c-3 0-5-2-6-4" />
    <path d="M12 20c3 0 5-2 6-4" />
  </svg>
);

// Vanilla (Vanilla planifolia) — orchid flower + pod
export const VanillaIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Orchid flower petals */}
    <path d="M12 3c-2 1-2 3-1 4" />
    <path d="M12 3c2 1 2 3 1 4" />
    <path d="M11 7c-2 0-3 1-2 3" />
    <path d="M13 7c2 0 3 1 2 3" />
    {/* Labellum */}
    <ellipse cx="12" cy="8" rx="1.5" ry="1" />
    {/* Stem */}
    <path d="M12 10v2" />
    {/* Vanilla pod */}
    <path d="M10 12c-1 3-0.5 7 1 9" />
    <path d="M14 12c1 3 0.5 7-1 9" />
  </svg>
);

// Taro (Colocasia esculenta) — peltate heart leaf + corm
export const TaroIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Peltate heart-shaped leaf - notch at top, rounded lobes */}
    <path d="M12 1c-1 1-1 2 0 3" />
    <path d="M12 1c1 1 1 2 0 3" />
    <path d="M12 4c-4 0-7 3-7 6c0 4 3 6 7 6c4 0 7-2 7-6c0-3-3-6-7-6z" />
    {/* Peltate attachment point (petiole joins center of leaf) */}
    <circle cx="12" cy="10" r="0.5" />
    {/* Radiating veins from peltate center */}
    <path d="M12 10l-4-3" />
    <path d="M12 10l4-3" />
    <path d="M12 10l-5 2" />
    <path d="M12 10l5 2" />
    <path d="M12 10v4" />
    {/* Petiole coming from center */}
    <path d="M12 16v3" />
    {/* Corm/tuber */}
    <path d="M9 19c-1 0.5-1 2 0 3c1 0.5 2 0.5 3 0c1-0.5 2-0.5 3 0c1-1 1-2.5 0-3" />
  </svg>
);

// Cocoa (Theobroma cacao) — ribbed pod
export const CocoaIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Cacao pod outline */}
    <path d="M12 2c-4 1-6 5-6 10c0 4 3 8 6 10c3-2 6-6 6-10c0-5-2-9-6-10z" />
    {/* Longitudinal ribs */}
    <path d="M8 5c-1 4-1 10 1 14" />
    <path d="M12 3v18" />
    <path d="M16 5c1 4 1 10-1 14" />
  </svg>
);

// Coffee (Coffea) — branch with cherries
export const CoffeeIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Branch */}
    <path d="M4 12h14" />
    {/* Coffee cherries */}
    <circle cx="9" cy="16" r="2" />
    <circle cx="15" cy="15" r="2" />
    {/* Cherry stems */}
    <path d="M9 14v-2" />
    <path d="M15 13v-1" />
    {/* Opposite leaves */}
    <path d="M6 12c-2-2-2-5 0-6c2 1 3 4 2 6" />
    <path d="M18 12c2-2 2-5 0-6c-2 1-3 4-2 6" />
  </svg>
);

// Sugarcane (Saccharum) — segmented stalk with nodes
export const SugarcaneIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Segmented stalk */}
    <path d="M10 22v-20" />
    <path d="M14 22v-20" />
    {/* Nodes */}
    <path d="M9 5h6" />
    <path d="M9 10h6" />
    <path d="M9 15h6" />
    <path d="M9 20h6" />
    {/* Narrow leaves from nodes */}
    <path d="M14 5c2-1 5-2 7-4" />
    <path d="M10 10c-2-1-5-2-7-4" />
    <path d="M14 15c2-1 5-2 7-4" />
  </svg>
);

// Palm (Arecaceae) — trunk + pinnate frond
export const PalmIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Trunk with leaf scars */}
    <path d="M12 22v-10" />
    <path d="M11 15h2" />
    <path d="M11 18h2" />
    {/* Pinnate fronds */}
    <path d="M12 12c-4-2-7-5-9-6" />
    <path d="M12 12c4-2 7-5 9-6" />
    <path d="M12 12c-5-1-8-3-10-3" />
    <path d="M12 12c5-1 8-3 10-3" />
    <path d="M12 12c-4 0-7-1-9-1" />
    <path d="M12 12c4 0 7-1 9-1" />
    {/* Central frond */}
    <path d="M12 12v-10" />
  </svg>
);

// Citrus — fruit + leaf + stem
export const CitrusIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Citrus fruit */}
    <circle cx="12" cy="14" r="6" />
    {/* Internal segments hint */}
    <path d="M12 8v12" />
    <path d="M6.5 11.5l11 5" />
    <path d="M17.5 11.5l-11 5" />
    {/* Stem */}
    <path d="M12 8v-2" />
    {/* Leaf */}
    <path d="M12 6c3-2 4-4 2-5c-2 0-3 2-3 4" />
  </svg>
);

// Olive (Olea europaea) — branch with olives
export const OliveIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Branch */}
    <path d="M3 12c5 0 14-1 18-3" />
    {/* Olives */}
    <ellipse cx="10" cy="15" rx="2" ry="2.5" />
    <ellipse cx="16" cy="13" rx="2" ry="2.5" />
    {/* Olive stems */}
    <path d="M10 12.5v-1" />
    <path d="M16 10.5v-1" />
    {/* Lanceolate leaves */}
    <path d="M5 12c-1-2 0-4 2-4c0 2-1 4-2 4" />
    <path d="M8 11c0-2 1-4 3-4c0 2-1 4-3 4" />
    <path d="M19 9c1-2 0-4-2-4c0 2 1 4 2 4" />
  </svg>
);

// Yam (Dioscorea) — cordate leaf + tuber
export const YamIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg {...defaultProps} width={size} height={size} {...props}>
    {/* Cordate (heart-shaped) leaf */}
    <path d="M12 3c-4 2-6 5-5 9c1 2 3 3 5 3c2 0 4-1 5-3c1-4-1-7-5-9z" />
    {/* Veins */}
    <path d="M12 4v11" />
    <path d="M12 7c-2 2-3 4-3 6" />
    <path d="M12 7c2 2 3 4 3 6" />
    {/* Vine stem */}
    <path d="M12 15c-1 2-2 3-3 4" />
    {/* Elongated tuber */}
    <path d="M7 19c-2 0-3 1-3 2.5c0 1 3 1.5 5 0.5c2-1 3-2 3-2.5c0-0.5-1-0.5-2-0.5" />
  </svg>
);

// Export all icons
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
