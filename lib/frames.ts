import framesManifest from "@/content/frames-manifest.json";

type FramesManifest = {
  frameCount: number;
  frameDir?: string;
  frameUrlTemplate: string;
  fps?: number;
  width?: number;
};

const fm = framesManifest as FramesManifest;

export const frames = {
  frameCount: fm.frameCount ?? 0,
  /** Pattern consumed by ScrollCanvas — uses {NNNN} placeholder. */
  pattern: fm.frameUrlTemplate || "/frames/frame-{NNNN}.jpg",
};
