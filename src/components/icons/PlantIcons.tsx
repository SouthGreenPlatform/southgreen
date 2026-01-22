import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  variant?: "filled" | "outline";
  colored?: boolean;
}

// Banana (Musa) — curved crescent banana shape like 🍌
export const BananaIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", colored = true, ...props }) => {
  const bananaYellow = colored ? "#FFD93D" : "currentColor";
  const bananaLight = colored ? "#FFF176" : "currentColor";
  const stemBrown = colored ? "#8B6914" : "currentColor";
  
  if (variant === "outline") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Main banana - curved crescent */}
        <path 
          d="M8 38C6 28 10 16 22 10C28 8 34 10 38 14" 
          stroke={bananaYellow}
        />
        <path 
          d="M8 38C12 40 20 38 28 32C34 27 38 20 38 14" 
          stroke={bananaYellow}
        />
        {/* Stem */}
        <path d="M38 14C40 12 43 11 46 12" stroke={stemBrown} />
        {/* Ridge line */}
        <path d="M12 34C14 26 22 18 32 16" stroke={bananaLight} strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...props}>
      {/* Main banana body - curved crescent like 🍌 */}
      <path 
        d="M8 38C6 28 10 16 22 10C28 8 34 10 38 14C38 20 34 27 28 32C20 38 12 40 8 38Z" 
        fill={bananaYellow}
      />
      {/* Stem */}
      <path 
        d="M38 14C39 13 41 12 44 12C46 13 46 15 44 16C42 16 40 15 38 14Z" 
        fill={stemBrown}
      />
      {/* Ridge highlight */}
      <path 
        d="M12 34C14 26 22 18 32 16" 
        stroke={bananaLight} 
        strokeWidth="2.5" 
        fill="none" 
        opacity="0.7"
      />
      {/* Tip accent */}
      <ellipse cx="8" cy="38" rx="2" ry="1.5" fill={stemBrown} />
    </svg>
  );
};

// Rice (Oryza) — culm + drooping panicle with grains
export const RiceIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", colored = true, ...props }) => {
  const grainColor = colored ? "#F5DEB3" : "currentColor";
  const stalkColor = colored ? "#8FBC8F" : "currentColor";
  
  if (variant === "outline") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Main culm */}
        <path d="M24 46v-26" stroke={stalkColor} />
        {/* Drooping panicle branches */}
        <path d="M24 20c-2-2-6-4-10-3" stroke={stalkColor} />
        <path d="M24 20c2-2 6-4 10-3" stroke={stalkColor} />
        <path d="M24 16c-2-2-5-4-8-4" stroke={stalkColor} />
        <path d="M24 16c2-2 5-4 8-4" stroke={stalkColor} />
        {/* Grains at tips */}
        <ellipse cx="14" cy="16" rx="2" ry="3" stroke={grainColor} />
        <ellipse cx="34" cy="16" rx="2" ry="3" stroke={grainColor} />
        <ellipse cx="16" cy="11" rx="2" ry="3" stroke={grainColor} />
        <ellipse cx="32" cy="11" rx="2" ry="3" stroke={grainColor} />
        <ellipse cx="18" cy="6" rx="2" ry="3" stroke={grainColor} />
        <ellipse cx="30" cy="6" rx="2" ry="3" stroke={grainColor} />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...props}>
      {/* Main culm */}
      <rect x="22" y="20" width="4" height="28" rx="2" fill={stalkColor} />
      {/* Panicle branches + grains */}
      <ellipse cx="12" cy="18" rx="3" ry="5" fill={grainColor} />
      <ellipse cx="36" cy="18" rx="3" ry="5" fill={grainColor} />
      <ellipse cx="15" cy="11" rx="3" ry="5" fill={grainColor} />
      <ellipse cx="33" cy="11" rx="3" ry="5" fill={grainColor} />
      <ellipse cx="19" cy="5" rx="3" ry="4" fill={grainColor} />
      <ellipse cx="29" cy="5" rx="3" ry="4" fill={grainColor} />
      {/* Branch connections */}
      <path
        d="M24 20L12 16M24 20L36 16M24 16L15 10M24 16L33 10M24 12L19 6M24 12L29 6"
        stroke={stalkColor}
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

// Poaceae (grass family) — distinctive grass spike
export const PoaceaeIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", colored = true, ...props }) => {
  const grassGreen = colored ? "#7CB342" : "currentColor";
  const spikeColor = colored ? "#9E9D24" : "currentColor";
  
  if (variant === "outline") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Main stem */}
        <path d="M24 46v-40" stroke={grassGreen} />
        {/* Spike florets - alternating */}
        <path d="M24 6l-8-2" stroke={spikeColor} />
        <path d="M24 10l8-2" stroke={spikeColor} />
        <path d="M24 14l-8-2" stroke={spikeColor} />
        <path d="M24 18l8-2" stroke={spikeColor} />
        <path d="M24 22l-8-2" stroke={spikeColor} />
        <path d="M24 26l8-2" stroke={spikeColor} />
        {/* Basal leaves */}
        <path d="M24 38c-6 0-10-4-14-8" stroke={grassGreen} />
        <path d="M24 42c6 0 10-4 14-8" stroke={grassGreen} />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...props}>
      {/* Main stem */}
      <rect x="22" y="6" width="4" height="42" rx="2" fill={grassGreen} />
      {/* Spike florets - alternating pattern */}
      <path d="M24 4l-10-2l2 4z" fill={spikeColor} />
      <path d="M24 10l10-2l-2 4z" fill={spikeColor} />
      <path d="M24 14l-10-2l2 4z" fill={spikeColor} />
      <path d="M24 20l10-2l-2 4z" fill={spikeColor} />
      <path d="M24 24l-10-2l2 4z" fill={spikeColor} />
      <path d="M24 30l10-2l-2 4z" fill={spikeColor} />
      {/* Basal leaves */}
      <path d="M22 38c-8 0-14-6-18-12c4 1 12 6 18 10z" fill={grassGreen} />
      <path d="M26 42c8 0 14-6 18-12c-4 1-12 6-18 10z" fill={grassGreen} />
    </svg>
  );
};

// Vanilla (Vanilla planifolia) — orchid flower + pod
export const VanillaIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", colored = true, ...props }) => {
  const flowerWhite = colored ? "#FFF8E1" : "currentColor";
  const flowerYellow = colored ? "#FFEB3B" : "currentColor";
  const podBrown = colored ? "#5D4037" : "currentColor";
  
  if (variant === "outline") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Orchid petals */}
        <path d="M24 4c-4 2-6 6-4 10" stroke={flowerWhite} />
        <path d="M24 4c4 2 6 6 4 10" stroke={flowerWhite} />
        <path d="M20 14c-4 0-6 2-4 6" stroke={flowerWhite} />
        <path d="M28 14c4 0 6 2 4 6" stroke={flowerWhite} />
        {/* Labellum */}
        <ellipse cx="24" cy="16" rx="4" ry="3" stroke={flowerYellow} />
        {/* Stem */}
        <path d="M24 20v4" stroke={podBrown} />
        {/* Vanilla pod */}
        <path d="M18 24c-2 6-1 14 4 18" stroke={podBrown} />
        <path d="M30 24c2 6 1 14-4 18" stroke={podBrown} />
        <path d="M22 42c1 2 3 2 4 0" stroke={podBrown} />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...props}>
      {/* Orchid petals */}
      <ellipse cx="18" cy="8" rx="5" ry="8" transform="rotate(-30 18 8)" fill={flowerWhite} />
      <ellipse cx="30" cy="8" rx="5" ry="8" transform="rotate(30 30 8)" fill={flowerWhite} />
      <ellipse cx="14" cy="16" rx="4" ry="6" transform="rotate(-15 14 16)" fill={flowerWhite} />
      <ellipse cx="34" cy="16" rx="4" ry="6" transform="rotate(15 34 16)" fill={flowerWhite} />
      {/* Labellum - central lip */}
      <ellipse cx="24" cy="16" rx="5" ry="4" fill={flowerYellow} />
      {/* Column */}
      <circle cx="24" cy="14" r="2" fill={podBrown} />
      {/* Vanilla pod */}
      <path d="M20 24c-3 6-2 14 4 20c6-6 7-14 4-20c-2-1-6-1-8 0z" fill={podBrown} />
    </svg>
  );
};

// Taro (Colocasia esculenta) — peltate heart leaf + corm
export const TaroIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", colored = true, ...props }) => {
  const leafGreen = colored ? "#4CAF50" : "currentColor";
  const leafLight = colored ? "#81C784" : "currentColor";
  const cormBrown = colored ? "#8D6E63" : "currentColor";
  
  if (variant === "outline") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Peltate heart leaf with notch */}
        <path d="M24 2c-2 2-2 4 0 6" stroke={leafGreen} />
        <path d="M24 2c2 2 2 4 0 6" stroke={leafGreen} />
        <path d="M24 8c-10 2-14 8-12 16c2 6 8 8 12 8c4 0 10-2 12-8c2-8-2-14-12-16z" stroke={leafGreen} />
        {/* Peltate center point */}
        <circle cx="24" cy="18" r="2" stroke={leafLight} />
        {/* Radiating veins */}
        <path d="M24 18l-8-6" stroke={leafLight} strokeWidth="1.5" />
        <path d="M24 18l8-6" stroke={leafLight} strokeWidth="1.5" />
        <path d="M24 18l-10 4" stroke={leafLight} strokeWidth="1.5" />
        <path d="M24 18l10 4" stroke={leafLight} strokeWidth="1.5" />
        <path d="M24 18v10" stroke={leafLight} strokeWidth="1.5" />
        {/* Petiole */}
        <path d="M24 32v6" stroke={leafGreen} />
        {/* Corm */}
        <ellipse cx="24" cy="42" rx="8" ry="4" stroke={cormBrown} />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...props}>
      {/* Peltate heart leaf with characteristic notch */}
      <path d="M24 2c-3 3-3 6 0 8c3-2 3-5 0-8z" fill={leafGreen} />
      <path d="M24 8c-12 2-16 10-14 18c2 6 10 8 14 8c4 0 12-2 14-8c2-8-2-16-14-18z" fill={leafGreen} />
      {/* Peltate center */}
      <circle cx="24" cy="18" r="3" fill={leafLight} />
      {/* Veins */}
      <path d="M24 18L14 10M24 18L34 10M24 18L12 24M24 18L36 24M24 18V30" stroke={leafLight} strokeWidth="2" fill="none" opacity="0.7" />
      {/* Petiole */}
      <rect x="22" y="32" width="4" height="6" rx="2" fill={leafGreen} />
      {/* Corm with roots */}
      <ellipse cx="24" cy="43" rx="10" ry="5" fill={cormBrown} />
    </svg>
  );
};

// Cocoa (Theobroma cacao) — ribbed pod silhouette
export const CocoaIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", colored = true, ...props }) => {
  const podOrange = colored ? "#E65100" : "currentColor";
  const podLight = colored ? "#FF8A65" : "currentColor";
  const stemBrown = colored ? "#5D4037" : "currentColor";
  
  if (variant === "outline") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Pod outline */}
        <path d="M24 2c-8 2-12 10-12 20c0 8 6 16 12 22c6-6 12-14 12-22c0-10-4-18-12-20z" stroke={podOrange} />
        {/* Longitudinal ribs */}
        <path d="M16 8c-2 8-2 20 2 30" stroke={podLight} strokeWidth="1.5" />
        <path d="M24 4v40" stroke={podLight} strokeWidth="1.5" />
        <path d="M32 8c2 8 2 20-2 30" stroke={podLight} strokeWidth="1.5" />
        {/* Stem */}
        <circle cx="24" cy="2" r="2" stroke={stemBrown} />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...props}>
      {/* Pod silhouette */}
      <path d="M24 2c-10 2-14 12-14 22c0 10 8 18 14 24c6-6 14-14 14-24c0-10-4-20-14-22z" fill={podOrange} />
      {/* Ribs as grooves */}
      <path d="M14 10c-2 10-1 22 4 32M24 4v42M34 10c2 10 1 22-4 32" stroke={podLight} strokeWidth="2" fill="none" opacity="0.6" />
      {/* Stem nub */}
      <circle cx="24" cy="2" r="3" fill={stemBrown} />
    </svg>
  );
};

// Coffee (Coffea) — branch with cherries
export const CoffeeIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", colored = true, ...props }) => {
  const cherryRed = colored ? "#C62828" : "currentColor";
  const cherryHighlight = colored ? "#EF5350" : "currentColor";
  const branchBrown = colored ? "#6D4C41" : "currentColor";
  const leafGreen = colored ? "#388E3C" : "currentColor";
  
  if (variant === "outline") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Branch */}
        <path d="M4 24h40" stroke={branchBrown} />
        {/* Coffee cherries */}
        <ellipse cx="16" cy="32" rx="4" ry="6" stroke={cherryRed} />
        <ellipse cx="28" cy="34" rx="4" ry="6" stroke={cherryRed} />
        <ellipse cx="38" cy="30" rx="3" ry="5" stroke={cherryRed} />
        {/* Opposite leaves */}
        <path d="M10 24c-4-4-4-12 2-14c4 4 4 10 0 14" stroke={leafGreen} />
        <path d="M22 24c-4-4-4-12 2-14c4 4 4 10 0 14" stroke={leafGreen} />
        <path d="M34 24c4-4 4-12-2-14c-4 4-4 10 0 14" stroke={leafGreen} />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...props}>
      {/* Branch */}
      <rect x="2" y="22" width="44" height="4" rx="2" fill={branchBrown} />
      {/* Coffee cherries */}
      <ellipse cx="14" cy="34" rx="5" ry="8" fill={cherryRed} />
      <ellipse cx="26" cy="36" rx="5" ry="8" fill={cherryRed} />
      <ellipse cx="38" cy="32" rx="4" ry="6" fill={cherryRed} />
      {/* Cherry highlights */}
      <ellipse cx="12" cy="32" rx="1.5" ry="3" fill={cherryHighlight} />
      <ellipse cx="24" cy="34" rx="1.5" ry="3" fill={cherryHighlight} />
      {/* Opposite leaves */}
      <path d="M8 24c-6-6-6-14 2-18c6 4 6 12 0 18z" fill={leafGreen} />
      <path d="M20 24c-6-6-6-14 2-18c6 4 6 12 0 18z" fill={leafGreen} />
      <path d="M34 24c6-6 6-14-2-18c-6 4-6 12 0 18z" fill={leafGreen} />
    </svg>
  );
};

// Sugarcane (Saccharum) — segmented stalk with nodes
export const SugarcaneIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", colored = true, ...props }) => {
  const stalkGreen = colored ? "#7CB342" : "currentColor";
  const nodeColor = colored ? "#9E9D24" : "currentColor";
  const leafGreen = colored ? "#558B2F" : "currentColor";
  
  if (variant === "outline") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Segmented stalk */}
        <path d="M18 46v-44" stroke={stalkGreen} />
        <path d="M30 46v-44" stroke={stalkGreen} />
        {/* Nodes */}
        <path d="M16 8h16" stroke={nodeColor} />
        <path d="M16 18h16" stroke={nodeColor} />
        <path d="M16 28h16" stroke={nodeColor} />
        <path d="M16 38h16" stroke={nodeColor} />
        {/* Narrow leaves from nodes */}
        <path d="M30 8c4-2 10-4 14-8" stroke={leafGreen} />
        <path d="M18 18c-4-2-10-4-14-8" stroke={leafGreen} />
        <path d="M30 28c4-2 10-4 14-8" stroke={leafGreen} />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...props}>
      {/* Segmented stalk */}
      <rect x="16" y="2" width="16" height="44" rx="3" fill={stalkGreen} />
      {/* Nodes as bands */}
      <rect x="14" y="6" width="20" height="4" rx="2" fill={nodeColor} />
      <rect x="14" y="16" width="20" height="4" rx="2" fill={nodeColor} />
      <rect x="14" y="26" width="20" height="4" rx="2" fill={nodeColor} />
      <rect x="14" y="36" width="20" height="4" rx="2" fill={nodeColor} />
      {/* Narrow leaves */}
      <path d="M32 8c6-2 12-6 16-8c-2 4-10 8-16 10z" fill={leafGreen} />
      <path d="M16 18c-6-2-12-6-16-8c2 4 10 8 16 10z" fill={leafGreen} />
      <path d="M32 28c6-2 12-6 16-8c-2 4-10 8-16 10z" fill={leafGreen} />
    </svg>
  );
};

// Palm (Arecaceae) — trunk + pinnate fronds
export const PalmIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", colored = true, ...props }) => {
  const trunkBrown = colored ? "#8D6E63" : "currentColor";
  const trunkLight = colored ? "#A1887F" : "currentColor";
  const frondGreen = colored ? "#2E7D32" : "currentColor";
  
  if (variant === "outline") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Trunk with scars */}
        <path d="M24 46v-22" stroke={trunkBrown} />
        <path d="M22 28h4" stroke={trunkLight} strokeWidth="1.5" />
        <path d="M22 34h4" stroke={trunkLight} strokeWidth="1.5" />
        <path d="M22 40h4" stroke={trunkLight} strokeWidth="1.5" />
        {/* Pinnate fronds */}
        <path d="M24 24c-8-4-16-10-20-14" stroke={frondGreen} />
        <path d="M24 24c8-4 16-10 20-14" stroke={frondGreen} />
        <path d="M24 24c-10-2-18-6-22-8" stroke={frondGreen} />
        <path d="M24 24c10-2 18-6 22-8" stroke={frondGreen} />
        <path d="M24 24c-8 2-16 2-20 2" stroke={frondGreen} />
        <path d="M24 24c8 2 16 2 20 2" stroke={frondGreen} />
        {/* Central spike */}
        <path d="M24 24v-20" stroke={frondGreen} />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...props}>
      {/* Trunk */}
      <rect x="20" y="24" width="8" height="24" rx="3" fill={trunkBrown} />
      {/* Trunk scars */}
      <rect x="18" y="28" width="12" height="2" rx="1" fill={trunkLight} />
      <rect x="18" y="34" width="12" height="2" rx="1" fill={trunkLight} />
      <rect x="18" y="40" width="12" height="2" rx="1" fill={trunkLight} />
      {/* Pinnate fronds */}
      <path d="M24 24c-10-4-18-12-22-18c4 1 16 10 22 16z" fill={frondGreen} />
      <path d="M24 24c10-4 18-12 22-18c-4 1-16 10-22 16z" fill={frondGreen} />
      <path d="M24 24c-12-2-20-6-24-10c4 2 18 8 24 10z" fill={frondGreen} />
      <path d="M24 24c12-2 20-6 24-10c-4 2-18 8-24 10z" fill={frondGreen} />
      <path d="M24 24c-10 2-18 2-22 2c6 2 16 0 22-2z" fill={frondGreen} />
      <path d="M24 24c10 2 18 2 22 2c-6 2-16 0-22-2z" fill={frondGreen} />
      {/* Central spike */}
      <path d="M22 24v-20h4v20z" fill={frondGreen} />
    </svg>
  );
};

// Citrus — fruit + leaf + wedge detail
export const CitrusIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", colored = true, ...props }) => {
  const fruitOrange = colored ? "#FF9800" : "currentColor";
  const fruitLight = colored ? "#FFB74D" : "currentColor";
  const leafGreen = colored ? "#388E3C" : "currentColor";
  const stemBrown = colored ? "#6D4C41" : "currentColor";
  
  if (variant === "outline") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Citrus fruit */}
        <circle cx="24" cy="28" r="14" stroke={fruitOrange} />
        {/* Wedge segments */}
        <path d="M24 14v28" stroke={fruitLight} strokeWidth="1.5" />
        <path d="M12 20l24 16" stroke={fruitLight} strokeWidth="1.5" />
        <path d="M36 20l-24 16" stroke={fruitLight} strokeWidth="1.5" />
        {/* Stem */}
        <path d="M24 14v-4" stroke={stemBrown} />
        {/* Leaf */}
        <path d="M24 10c6-2 10-6 8-10c-4 0-8 4-10 8" stroke={leafGreen} />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...props}>
      {/* Citrus fruit */}
      <circle cx="24" cy="28" r="16" fill={fruitOrange} />
      {/* Wedge segment lines */}
      <path d="M24 12v32M10 20l28 16M38 20l-28 16" stroke={fruitLight} strokeWidth="2" fill="none" opacity="0.6" />
      {/* Center */}
      <circle cx="24" cy="28" r="4" fill={fruitLight} />
      {/* Stem */}
      <rect x="22" y="8" width="4" height="6" rx="2" fill={stemBrown} />
      {/* Leaf */}
      <path d="M24 10c8-2 12-8 10-12c-6 0-12 6-14 10z" fill={leafGreen} />
    </svg>
  );
};

// Olive (Olea europaea) — branch with olives
export const OliveIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", colored = true, ...props }) => {
  const oliveGreen = colored ? "#558B2F" : "currentColor";
  const oliveLight = colored ? "#8BC34A" : "currentColor";
  const branchBrown = colored ? "#795548" : "currentColor";
  const leafGreen = colored ? "#689F38" : "currentColor";
  
  if (variant === "outline") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Branch */}
        <path d="M4 24c10 0 28-2 40-6" stroke={branchBrown} />
        {/* Olives */}
        <ellipse cx="18" cy="32" rx="4" ry="6" stroke={oliveGreen} />
        <ellipse cx="32" cy="28" rx="4" ry="6" stroke={oliveGreen} />
        {/* Olive stems */}
        <path d="M18 26v-3" stroke={branchBrown} strokeWidth="1.5" />
        <path d="M32 22v-3" stroke={branchBrown} strokeWidth="1.5" />
        {/* Lanceolate leaves */}
        <path d="M10 24c-2-4-1-10 3-12c2 4 1 10-3 12" stroke={leafGreen} />
        <path d="M26 20c1-4 0-10-4-12c-2 4 0 10 4 12" stroke={leafGreen} />
        <path d="M38 18c2-4 1-10-3-12c-2 4-1 10 3 12" stroke={leafGreen} />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...props}>
      {/* Branch */}
      <path d="M2 26c12 0 32-2 44-8c0 4-32 8-44 10z" fill={branchBrown} />
      {/* Olives */}
      <ellipse cx="16" cy="34" rx="5" ry="8" fill={oliveGreen} />
      <ellipse cx="32" cy="30" rx="5" ry="8" fill={oliveGreen} />
      {/* Olive highlights */}
      <ellipse cx="14" cy="32" rx="1.5" ry="3" fill={oliveLight} />
      <ellipse cx="30" cy="28" rx="1.5" ry="3" fill={oliveLight} />
      {/* Lanceolate leaves */}
      <path d="M8 24c-4-6-2-14 4-16c4 6 2 14-4 16z" fill={leafGreen} />
      <path d="M28 20c3-6 1-14-5-16c-3 6-1 14 5 16z" fill={leafGreen} />
      <path d="M40 16c4-6 2-14-4-16c-4 6-2 14 4 16z" fill={leafGreen} />
    </svg>
  );
};

// Yam (Dioscorea) — cordate leaf + tuber
export const YamIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", colored = true, ...props }) => {
  const leafGreen = colored ? "#43A047" : "currentColor";
  const leafLight = colored ? "#66BB6A" : "currentColor";
  const tuberBrown = colored ? "#8D6E63" : "currentColor";
  const vineBrown = colored ? "#6D4C41" : "currentColor";
  
  if (variant === "outline") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Cordate leaf */}
        <path d="M24 4c-8 4-12 10-10 18c2 4 6 6 10 6c4 0 8-2 10-6c2-8-2-14-10-18z" stroke={leafGreen} />
        {/* Veins */}
        <path d="M24 6v22" stroke={leafLight} strokeWidth="1.5" />
        <path d="M24 12c-4 4-6 8-6 12" stroke={leafLight} strokeWidth="1.5" />
        <path d="M24 12c4 4 6 8 6 12" stroke={leafLight} strokeWidth="1.5" />
        {/* Vine stem */}
        <path d="M24 28c-2 4-4 6-6 8" stroke={vineBrown} />
        {/* Elongated tuber */}
        <path d="M14 36c-4 0-6 2-6 5c0 3 6 4 10 3c4-1 6-3 6-5c0-2-4-3-6-3" stroke={tuberBrown} />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...props}>
      {/* Cordate leaf */}
      <path d="M24 2c-10 4-14 12-12 20c2 6 8 8 12 8c4 0 10-2 12-8c2-8-2-16-12-20z" fill={leafGreen} />
      {/* Veins */}
      <path d="M24 6v24M24 14c-5 5-8 10-8 14M24 14c5 5 8 10 8 14" stroke={leafLight} strokeWidth="2" fill="none" opacity="0.7" />
      {/* Vine */}
      <path d="M24 30c-2 4-6 8-8 10c2 0 6-4 8-8z" fill={vineBrown} />
      {/* Elongated tuber */}
      <path d="M12 38c-6 1-8 4-8 6c0 4 10 5 16 3c6-2 8-4 8-6c0-3-8-4-12-3z" fill={tuberBrown} />
    </svg>
  );
};

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
