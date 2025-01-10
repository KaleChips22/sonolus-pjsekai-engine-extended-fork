import { buckets } from "../../../../buckets.js";
import { effect } from "../../../../effect.js";
import { particle } from "../../../../particle.js";
import { skin } from "../../../../skin.js";
import { archetypes } from "../../../index.js";
import { windows } from "../../../windows.js";
import { SlideEndNote } from "./SlideEndNote.js";

export class NormalSlideEndNote extends SlideEndNote {
  sprites = {
    left: skin.sprites.slideNoteLeft,
    middle: skin.sprites.slideNoteMiddle,
    right: skin.sprites.slideNoteRight,
    fallback: skin.sprites.slideNoteEndFallback,
  };

  clips = {
    perfect: effect.clips.normalPerfect,
    great: effect.clips.normalGreat,
    good: effect.clips.normalGood,
  };

  effects = {
    circular: particle.effects.slideNoteCircular,
    linear: particle.effects.slideNoteLinear,
  };

  windows = windows.slideEndNote.normal;

  bucket = buckets.normalSlideEndNote;

  get slotEffect() {
    return archetypes.SlideSlotEffect;
  }

  get slotGlowEffect() {
    return archetypes.SlideSlotGlowEffect;
  }
}
