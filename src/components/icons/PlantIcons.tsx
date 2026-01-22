import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  variant?: "filled" | "outline";
}

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
};

const filledProps = {
  ...baseProps,
  fill: "currentColor",
};

const outlineProps = {
  ...baseProps,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Banana (Musa) — curved crescent banana shape like 🍌
export const BananaIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", ...props }) => {
  if (variant === "outline") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M6 14c3 5 10 6 14 2" />
        <path d="M6.5 11.5c3 4 8 5 11.5 2" />
        <path d="M18.8 16c.8-.2 1.6-.7 2.2-1.5" />
      </svg>
    );
  }
  return (
    <svg {...filledProps} width={size} height={size} {...props}>
      {/* Back banana (slightly behind) */}
      <path d="M10 10c-5 8-5 18 2 28c3 2 6 0 7-4c1-10-2-20-9-24z" opacity="0.6" />
      {/* Front banana - iconic curved crescent */}
      <path d="M18 4c-7 10-7 22 0 34c4 2 8 0 10-4c2-12-2-26-10-30z" />
      {/* Stem tip */}
      <path d="M18 4c3-3 7-4 12-2c-3 0-7 1-10 4" />
      {/* Ridge highlight */}
      <path d="M22 10c-4 8-4 20 0 28" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />
    </svg>
  );
};

// Rice (Oryza) — culm + drooping panicle with grains
export const RiceIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", ...props }) => {
  if (variant === "outline") {
    return (
      <svg {...outlineProps} width={size} height={size} {...props}>
        {/* Main culm */}
        <path d="M24 46v-26" />
        {/* Drooping panicle branches */}
        <path d="M24 20c-2-2-6-4-10-3" />
        <path d="M24 20c2-2 6-4 10-3" />
        <path d="M24 16c-2-2-5-4-8-4" />
        <path d="M24 16c2-2 5-4 8-4" />
        <path d="M24 12c-1-2-4-4-6-5" />
        <path d="M24 12c1-2 4-4 6-5" />
        {/* Grains at tips */}
        <ellipse cx="14" cy="16" rx="2" ry="3" />
        <ellipse cx="34" cy="16" rx="2" ry="3" />
        <ellipse cx="16" cy="11" rx="2" ry="3" />
        <ellipse cx="32" cy="11" rx="2" ry="3" />
        <ellipse cx="18" cy="6" rx="2" ry="3" />
        <ellipse cx="30" cy="6" rx="2" ry="3" />
        {/* Leaf */}
        <path d="M24 32c6-2 10-6 12-10" />
      </svg>
    );
  }
  return (
    <svg {...filledProps} width={size} height={size} {...props}>
      {/* Main culm */}
      <rect x="22" y="20" width="4" height="28" rx="2" />
      {/* Panicle branches + grains */}
      <ellipse cx="12" cy="18" rx="3" ry="5" />
      <ellipse cx="36" cy="18" rx="3" ry="5" />
      <ellipse cx="15" cy="11" rx="3" ry="5" />
      <ellipse cx="33" cy="11" rx="3" ry="5" />
      <ellipse cx="19" cy="5" rx="3" ry="4" />
      <ellipse cx="29" cy="5" rx="3" ry="4" />
      {/* Branch connections */}
      <path
        d="M24 20L12 16M24 20L36 16M24 16L15 10M24 16L33 10M24 12L19 6M24 12L29 6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Leaf */}
      <path d="M26 32c8-2 12-8 14-14c-4 1-10 6-16 12z" />
    </svg>
  );
};

// Poaceae (grass family) — distinctive grass spike
export const PoaceaeIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", ...props }) => {
  if (variant === "outline") {
    return (
      <svg {...outlineProps} width={size} height={size} {...props}>
        {/* Main stem */}
        <path d="M24 46v-40" />
        {/* Spike florets - alternating */}
        <path d="M24 6l-8-2" />
        <path d="M24 10l8-2" />
        <path d="M24 14l-8-2" />
        <path d="M24 18l8-2" />
        <path d="M24 22l-8-2" />
        <path d="M24 26l8-2" />
        {/* Awns */}
        <path d="M16 4l-4-2" />
        <path d="M32 8l4-2" />
        <path d="M16 12l-4-2" />
        <path d="M32 16l4-2" />
        {/* Basal leaves */}
        <path d="M24 38c-6 0-10-4-14-8" />
        <path d="M24 42c6 0 10-4 14-8" />
      </svg>
    );
  }
  return (
    <svg {...filledProps} width={size} height={size} {...props}>
      {/* Main stem */}
      <rect x="22" y="6" width="4" height="42" rx="2" />
      {/* Spike florets - alternating pattern */}
      <path d="M24 4l-10-2l2 4z" />
      <path d="M24 10l10-2l-2 4z" />
      <path d="M24 14l-10-2l2 4z" />
      <path d="M24 20l10-2l-2 4z" />
      <path d="M24 24l-10-2l2 4z" />
      <path d="M24 30l10-2l-2 4z" />
      {/* Basal leaves */}
      <path d="M22 38c-8 0-14-6-18-12c4 1 12 6 18 10z" />
      <path d="M26 42c8 0 14-6 18-12c-4 1-12 6-18 10z" />
    </svg>
  );
};

// Vanilla (Vanilla planifolia) — orchid flower + pod
export const VanillaIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", ...props }) => {
  if (variant === "outline") {
    return (
      <svg {...outlineProps} width={size} height={size} {...props}>
        {/* Orchid petals */}
        <path d="M24 4c-4 2-6 6-4 10" />
        <path d="M24 4c4 2 6 6 4 10" />
        <path d="M20 14c-4 0-6 2-4 6" />
        <path d="M28 14c4 0 6 2 4 6" />
        {/* Labellum */}
        <ellipse cx="24" cy="16" rx="4" ry="3" />
        {/* Stem */}
        <path d="M24 20v4" />
        {/* Vanilla pod */}
        <path d="M18 24c-2 6-1 14 4 18" />
        <path d="M30 24c2 6 1 14-4 18" />
        <path d="M22 42c1 2 3 2 4 0" />
      </svg>
    );
  }
  return (
    <svg {...filledProps} width={size} height={size} {...props}>
      {/* Orchid petals */}
      <ellipse cx="18" cy="8" rx="5" ry="8" transform="rotate(-30 18 8)" />
      <ellipse cx="30" cy="8" rx="5" ry="8" transform="rotate(30 30 8)" />
      <ellipse cx="14" cy="16" rx="4" ry="6" transform="rotate(-15 14 16)" />
      <ellipse cx="34" cy="16" rx="4" ry="6" transform="rotate(15 34 16)" />
      {/* Labellum - central lip */}
      <ellipse cx="24" cy="16" rx="5" ry="4" />
      {/* Column */}
      <circle cx="24" cy="14" r="2" fill="currentColor" />
      {/* Vanilla pod */}
      <path d="M20 24c-3 6-2 14 4 20c6-6 7-14 4-20c-2-1-6-1-8 0z" />
    </svg>
  );
};

// Taro (Colocasia esculenta) — peltate heart leaf + corm
export const TaroIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", ...props }) => {
  if (variant === "outline") {
    return (
      <svg {...outlineProps} width={size} height={size} {...props}>
        {/* Peltate heart leaf with notch */}
        <path d="M24 2c-2 2-2 4 0 6" />
        <path d="M24 2c2 2 2 4 0 6" />
        <path d="M24 8c-10 2-14 8-12 16c2 6 8 8 12 8c4 0 10-2 12-8c2-8-2-14-12-16z" />
        {/* Peltate center point */}
        <circle cx="24" cy="18" r="2" />
        {/* Radiating veins */}
        <path d="M24 18l-8-6" />
        <path d="M24 18l8-6" />
        <path d="M24 18l-10 4" />
        <path d="M24 18l10 4" />
        <path d="M24 18v10" />
        {/* Petiole */}
        <path d="M24 32v6" />
        {/* Corm */}
        <ellipse cx="24" cy="42" rx="8" ry="4" />
        <path d="M18 40c-2 1-2 4 0 5" />
        <path d="M30 40c2 1 2 4 0 5" />
      </svg>
    );
  }
  return (
    <svg {...filledProps} width={size} height={size} {...props}>
      {/* Peltate heart leaf with characteristic notch */}
      <path d="M24 2c-3 3-3 6 0 8c3-2 3-5 0-8z" />
      <path d="M24 8c-12 2-16 10-14 18c2 6 10 8 14 8c4 0 12-2 14-8c2-8-2-16-14-18z" />
      {/* Peltate center - white circle */}
      <circle cx="24" cy="18" r="3" fill="white" />
      {/* Veins as cutouts */}
      <path d="M24 18L14 10M24 18L34 10M24 18L12 24M24 18L36 24M24 18V30" stroke="white" strokeWidth="2" fill="none" />
      {/* Petiole */}
      <rect x="22" y="32" width="4" height="6" rx="2" />
      {/* Corm with roots */}
      <ellipse cx="24" cy="43" rx="10" ry="5" />
      <path d="M16 42c-2 2-2 4 0 5M32 42c2 2 2 4 0 5" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
};

// Cocoa (Theobroma cacao) — ribbed pod silhouette
export const CocoaIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", ...props }) => {
  if (variant === "outline") {
    return (
      <svg {...outlineProps} width={size} height={size} {...props}>
        {/* Pod outline */}
        <path d="M24 2c-8 2-12 10-12 20c0 8 6 16 12 22c6-6 12-14 12-22c0-10-4-18-12-20z" />
        {/* Longitudinal ribs */}
        <path d="M16 8c-2 8-2 20 2 30" />
        <path d="M24 4v40" />
        <path d="M32 8c2 8 2 20-2 30" />
        {/* Stem */}
        <path d="M24 2v-0" />
        <circle cx="24" cy="1" r="1" />
      </svg>
    );
  }
  return (
    <svg {...filledProps} width={size} height={size} {...props}>
      {/* Pod silhouette with ribs as grooves */}
      <path d="M24 2c-10 2-14 12-14 22c0 10 8 18 14 24c6-6 14-14 14-24c0-10-4-20-14-22z" />
      {/* Ribs as negative space */}
      <path d="M14 10c-2 10-1 22 4 32M24 4v42M34 10c2 10 1 22-4 32" stroke="white" strokeWidth="2" fill="none" />
      {/* Stem nub */}
      <circle cx="24" cy="2" r="2" />
    </svg>
  );
};

// Coffee (Coffea) — branch with cherries
export const CoffeeIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", ...props }) => {
  if (variant === "outline") {
    return (
      <svg {...outlineProps} width={size} height={size} {...props}>
        {/* Branch */}
        <path d="M4 24h40" />
        {/* Coffee cherries */}
        <ellipse cx="16" cy="32" rx="4" ry="6" />
        <ellipse cx="28" cy="34" rx="4" ry="6" />
        <ellipse cx="38" cy="30" rx="3" ry="5" />
        {/* Cherry stems */}
        <path d="M16 26v-2" />
        <path d="M28 28v-4" />
        <path d="M38 25v-1" />
        {/* Opposite leaves */}
        <path d="M10 24c-4-4-4-12 2-14c4 4 4 10 0 14" />
        <path d="M22 24c-4-4-4-12 2-14c4 4 4 10 0 14" />
        <path d="M34 24c4-4 4-12-2-14c-4 4-4 10 0 14" />
        {/* Leaf veins */}
        <path d="M10 16l2 8" />
        <path d="M22 16l2 8" />
        <path d="M34 16l-2 8" />
      </svg>
    );
  }
  return (
    <svg {...filledProps} width={size} height={size} {...props}>
      {/* Branch */}
      <rect x="2" y="22" width="44" height="4" rx="2" />
      {/* Coffee cherries */}
      <ellipse cx="14" cy="34" rx="5" ry="8" />
      <ellipse cx="26" cy="36" rx="5" ry="8" />
      <ellipse cx="38" cy="32" rx="4" ry="6" />
      {/* Cherry line details */}
      <path d="M14 28v12M26 30v12M38 27v10" stroke="white" strokeWidth="1.5" fill="none" />
      {/* Opposite leaves */}
      <path d="M8 24c-6-6-6-14 2-18c6 4 6 12 0 18z" />
      <path d="M20 24c-6-6-6-14 2-18c6 4 6 12 0 18z" />
      <path d="M34 24c6-6 6-14-2-18c-6 4-6 12 0 18z" />
      {/* Leaf veins */}
      <path d="M8 12l2 12M20 12l2 12M34 12l-2 12" stroke="white" strokeWidth="1.5" fill="none" />
    </svg>
  );
};

// Sugarcane (Saccharum) — segmented stalk with nodes
export const SugarcaneIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", ...props }) => {
  if (variant === "outline") {
    return (
      <svg {...outlineProps} width={size} height={size} {...props}>
        {/* Segmented stalk */}
        <path d="M18 46v-44" />
        <path d="M30 46v-44" />
        {/* Nodes */}
        <path d="M16 8h16" />
        <path d="M16 18h16" />
        <path d="M16 28h16" />
        <path d="M16 38h16" />
        {/* Narrow leaves from nodes */}
        <path d="M30 8c4-2 10-4 14-8" />
        <path d="M18 18c-4-2-10-4-14-8" />
        <path d="M30 28c4-2 10-4 14-8" />
        <path d="M18 38c-4-2-10-4-14-8" />
      </svg>
    );
  }
  return (
    <svg {...filledProps} width={size} height={size} {...props}>
      {/* Segmented stalk */}
      <rect x="16" y="2" width="16" height="44" rx="3" />
      {/* Nodes as bands */}
      <rect x="14" y="6" width="20" height="4" rx="2" />
      <rect x="14" y="16" width="20" height="4" rx="2" />
      <rect x="14" y="26" width="20" height="4" rx="2" />
      <rect x="14" y="36" width="20" height="4" rx="2" />
      {/* Narrow leaves */}
      <path d="M32 8c6-2 12-6 16-8c-2 4-10 8-16 10z" />
      <path d="M16 18c-6-2-12-6-16-8c2 4 10 8 16 10z" />
      <path d="M32 28c6-2 12-6 16-8c-2 4-10 8-16 10z" />
    </svg>
  );
};

// Palm (Arecaceae) — trunk + pinnate fronds
export const PalmIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", ...props }) => {
  if (variant === "outline") {
    return (
      <svg {...outlineProps} width={size} height={size} {...props}>
        {/* Trunk with scars */}
        <path d="M24 46v-22" />
        <path d="M22 28h4" />
        <path d="M22 34h4" />
        <path d="M22 40h4" />
        {/* Pinnate fronds */}
        <path d="M24 24c-8-4-16-10-20-14" />
        <path d="M24 24c8-4 16-10 20-14" />
        <path d="M24 24c-10-2-18-6-22-8" />
        <path d="M24 24c10-2 18-6 22-8" />
        <path d="M24 24c-8 2-16 2-20 2" />
        <path d="M24 24c8 2 16 2 20 2" />
        {/* Pinnae on fronds */}
        <path d="M8 12l-4-2M14 16l-4-1M4 16l-2 0" />
        <path d="M40 12l4-2M34 16l4-1M44 16l2 0" />
        {/* Central spike */}
        <path d="M24 24v-20" />
      </svg>
    );
  }
  return (
    <svg {...filledProps} width={size} height={size} {...props}>
      {/* Trunk */}
      <rect x="20" y="24" width="8" height="24" rx="3" />
      {/* Trunk scars */}
      <rect x="18" y="28" width="12" height="2" rx="1" fill="white" />
      <rect x="18" y="34" width="12" height="2" rx="1" fill="white" />
      <rect x="18" y="40" width="12" height="2" rx="1" fill="white" />
      {/* Pinnate fronds */}
      <path d="M24 24c-10-4-18-12-22-18c4 1 16 10 22 16z" />
      <path d="M24 24c10-4 18-12 22-18c-4 1-16 10-22 16z" />
      <path d="M24 24c-12-2-20-6-24-10c4 2 18 8 24 10z" />
      <path d="M24 24c12-2 20-6 24-10c-4 2-18 8-24 10z" />
      <path d="M24 24c-10 2-18 2-22 2c6 2 16 0 22-2z" />
      <path d="M24 24c10 2 18 2 22 2c-6 2-16 0-22-2z" />
      {/* Central spike */}
      <path d="M22 24v-20h4v20z" />
    </svg>
  );
};

// Citrus — fruit + leaf + wedge detail
export const CitrusIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", ...props }) => {
  if (variant === "outline") {
    return (
      <svg {...outlineProps} width={size} height={size} {...props}>
        {/* Citrus fruit */}
        <circle cx="24" cy="28" r="14" />
        {/* Wedge segments */}
        <path d="M24 14v28" />
        <path d="M12 20l24 16" />
        <path d="M36 20l-24 16" />
        {/* Stem */}
        <path d="M24 14v-4" />
        {/* Leaf */}
        <path d="M24 10c6-2 10-6 8-10c-4 0-8 4-10 8" />
        <path d="M28 4l-4 6" />
      </svg>
    );
  }
  return (
    <svg {...filledProps} width={size} height={size} {...props}>
      {/* Citrus fruit */}
      <circle cx="24" cy="28" r="16" />
      {/* Wedge segment lines */}
      <path d="M24 12v32M10 20l28 16M38 20l-28 16" stroke="white" strokeWidth="2" fill="none" />
      {/* Center */}
      <circle cx="24" cy="28" r="4" fill="white" />
      {/* Stem */}
      <rect x="22" y="8" width="4" height="6" rx="2" />
      {/* Leaf */}
      <path d="M24 10c8-2 12-8 10-12c-6 0-12 6-14 10z" />
      <path d="M30 2l-6 8" stroke="white" strokeWidth="1.5" fill="none" />
    </svg>
  );
};

// Olive (Olea europaea) — branch with olives
export const OliveIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", ...props }) => {
  if (variant === "outline") {
    return (
      <svg {...outlineProps} width={size} height={size} {...props}>
        {/* Branch */}
        <path d="M4 24c10 0 28-2 40-6" />
        {/* Olives */}
        <ellipse cx="18" cy="32" rx="4" ry="6" />
        <ellipse cx="32" cy="28" rx="4" ry="6" />
        {/* Olive stems */}
        <path d="M18 26v-3" />
        <path d="M32 22v-3" />
        {/* Lanceolate leaves - opposite pairs */}
        <path d="M10 24c-2-4-1-10 3-12c2 4 1 10-3 12" />
        <path d="M16 22c-1-4 0-10 4-12c2 4 0 10-4 12" />
        <path d="M26 20c1-4 0-10-4-12c-2 4 0 10 4 12" />
        <path d="M38 18c2-4 1-10-3-12c-2 4-1 10 3 12" />
        {/* Leaf veins */}
        <path d="M10 16l1 8M16 14l1 8M26 14l-1 6M38 10l-1 8" />
      </svg>
    );
  }
  return (
    <svg {...filledProps} width={size} height={size} {...props}>
      {/* Branch */}
      <path d="M2 26c12 0 32-2 44-8c0 4-32 8-44 10z" />
      {/* Olives */}
      <ellipse cx="16" cy="34" rx="5" ry="8" />
      <ellipse cx="32" cy="30" rx="5" ry="8" />
      {/* Olive highlights */}
      <ellipse cx="14" cy="32" rx="1.5" ry="3" fill="white" />
      <ellipse cx="30" cy="28" rx="1.5" ry="3" fill="white" />
      {/* Lanceolate leaves */}
      <path d="M8 24c-4-6-2-14 4-16c4 6 2 14-4 16z" />
      <path d="M16 22c-3-6-1-14 5-16c3 6 1 14-5 16z" />
      <path d="M28 20c3-6 1-14-5-16c-3 6-1 14 5 16z" />
      <path d="M40 16c4-6 2-14-4-16c-4 6-2 14 4 16z" />
      {/* Leaf veins */}
      <path d="M8 14l1 10M16 12l1 10M28 10l-1 10M40 6l-1 10" stroke="white" strokeWidth="1.5" fill="none" />
    </svg>
  );
};

// Yam (Dioscorea) — cordate leaf + tuber
export const YamIcon: React.FC<IconProps> = ({ size = 24, variant = "filled", ...props }) => {
  if (variant === "outline") {
    return (
      <svg {...outlineProps} width={size} height={size} {...props}>
        {/* Cordate leaf */}
        <path d="M24 4c-8 4-12 10-10 18c2 4 6 6 10 6c4 0 8-2 10-6c2-8-2-14-10-18z" />
        {/* Veins */}
        <path d="M24 6v22" />
        <path d="M24 12c-4 4-6 8-6 12" />
        <path d="M24 12c4 4 6 8 6 12" />
        {/* Vine stem */}
        <path d="M24 28c-2 4-4 6-6 8" />
        {/* Elongated tuber */}
        <path d="M14 36c-4 0-6 2-6 5c0 3 6 4 10 3c4-1 6-3 6-5c0-2-4-3-6-3" />
        <path d="M10 40c-2 1-2 3 0 4" />
      </svg>
    );
  }
  return (
    <svg {...filledProps} width={size} height={size} {...props}>
      {/* Cordate leaf */}
      <path d="M24 2c-10 4-14 12-12 20c2 6 8 8 12 8c4 0 10-2 12-8c2-8-2-16-12-20z" />
      {/* Veins as white lines */}
      <path d="M24 6v24M24 14c-5 5-8 10-8 14M24 14c5 5 8 10 8 14" stroke="white" strokeWidth="2" fill="none" />
      {/* Vine */}
      <path d="M24 30c-2 4-6 8-8 10c2 0 6-4 8-8z" />
      {/* Elongated tuber */}
      <path d="M12 38c-6 1-8 4-8 6c0 4 10 5 16 3c6-2 8-4 8-6c0-3-8-4-12-3z" />
      <path d="M6 42c-2 2-2 4 0 5" stroke="currentColor" strokeWidth="2" fill="none" />
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
