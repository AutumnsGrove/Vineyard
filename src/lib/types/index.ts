/**
 * Vineyard Component Types
 * Type definitions for all Vineyard showcase components
 */

/**
 * Status badge values used across Vineyard components
 */
export type VineyardStatus = 'ready' | 'preview' | 'demo' | 'coming-soon' | 'in-development';

/**
 * Grove tool identifiers
 */
export type GroveTool =
  | 'amber'
  | 'ivy'
  | 'foliage'
  | 'meadow'
  | 'rings'
  | 'trails'
  | 'heartwood'
  | 'forage';

/**
 * Tier levels for TierGate component
 */
export type GroveTier = 'seedling' | 'sapling' | 'oak' | 'grove';

/**
 * Props for VineyardLayout component
 */
export interface VineyardLayoutProps {
  /** Tool identifier */
  tool: GroveTool;
  /** Tool tagline displayed in hero */
  tagline: string;
  /** Current status of the tool */
  status: VineyardStatus;
}

/**
 * Props for FeatureCard component
 */
export interface FeatureCardProps {
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
  /** Feature status */
  status: VineyardStatus;
  /** Lucide icon name */
  icon?: string;
}

/**
 * Props for StatusBadge component
 */
export interface StatusBadgeProps {
  /** Status to display */
  status: VineyardStatus;
}

/**
 * Props for DemoContainer component
 */
export interface DemoContainerProps {
  /** Demo title */
  title: string;
  /** Demo description */
  description?: string;
  /** Whether demo uses mock data */
  mockData?: boolean;
}

/**
 * Props for CodeExample component
 */
export interface CodeExampleProps {
  /** Programming language for syntax highlighting */
  language: string;
  /** Optional filename to display */
  filename?: string;
}

/**
 * Props for TierGate component
 */
export interface TierGateProps {
  /** Required tier to access content */
  required: GroveTier;
  /** User's current tier */
  current: GroveTier;
}

/**
 * Props for RoadmapSection component
 */
export interface RoadmapSectionProps {
  /** Features that are built and working */
  built: string[];
  /** Features currently in progress */
  inProgress: string[];
  /** Features planned for future */
  planned: string[];
}
