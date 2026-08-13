export const manifest: {
  screens: Record<string, {
    name: string;
    route: string;
    position: { x: number; y: number };
    state?: Record<string, any>;
  }>;
  sections: Record<string, {
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
  }>;
  layers: Array<{
    kind: string;
    id: string;
    children?: Array<{ kind: string; id: string }>;
  }>;
};
