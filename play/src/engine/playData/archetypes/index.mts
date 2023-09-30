import { Initialization } from './Initialization.mjs'
import { InputManager } from './InputManager.mjs'
import { SimLine } from './SimLine.mjs'
import { Stage } from './Stage.mjs'
import { CriticalFlickNote } from './notes/flatNotes/flickNotes/singleFlickNotes/CriticalFlickNote.mjs'
import { NormalFlickNote } from './notes/flatNotes/flickNotes/singleFlickNotes/NormalFlickNote.mjs'
import { CriticalSlideEndFlickNote } from './notes/flatNotes/flickNotes/slideEndFlickNotes/CriticalSlideEndFlickNote.mjs'
import { NormalSlideEndFlickNote } from './notes/flatNotes/flickNotes/slideEndFlickNotes/NormalSlideEndFlickNote.mjs'
import { CriticalSlideEndNote } from './notes/flatNotes/slideEndNotes/CriticalSlideEndNote.mjs'
import { NormalSlideEndNote } from './notes/flatNotes/slideEndNotes/NormalSlideEndNote.mjs'
import { CriticalSlideStartNote } from './notes/flatNotes/slideStartNotes/CriticalSlideStartNote.mjs'
import { NormalSlideStartNote } from './notes/flatNotes/slideStartNotes/NormalSlideStartNote.mjs'
import { CriticalTapNote } from './notes/flatNotes/tapNotes/CriticalTapNote.mjs'
import { NormalTapNote } from './notes/flatNotes/tapNotes/NormalTapNote.mjs'
import { HiddenSlideTickNote } from './notes/slideTickNotes/HiddenSlideTickNote.mjs'
import { IgnoredSlideTickNote } from './notes/slideTickNotes/IgnoredSlideTickNote.mjs'
import { CriticalSlideTickNote } from './notes/slideTickNotes/visibleSlideTickNotes/CriticalSlideTickNote.mjs'
import { NormalSlideTickNote } from './notes/slideTickNotes/visibleSlideTickNotes/NormalSlideTickNote.mjs'
import { CriticalAttachedSlideTickNote } from './notes/slideTickNotes/visibleSlideTickNotes/attachedSlideTickNotes/CriticalAttachedSlideTickNote.mjs'
import { NormalAttachedSlideTickNote } from './notes/slideTickNotes/visibleSlideTickNotes/attachedSlideTickNotes/NormalAttachedSlideTickNote.mjs'
import { CriticalSlideConnector } from './slideConnectors/CriticalSlideConnector.mjs'
import { NormalSlideConnector } from './slideConnectors/NormalSlideConnector.mjs'
import { CriticalSlotEffect } from './slotEffects/CriticalSlotEffect.mjs'
import { FlickSlotEffect } from './slotEffects/FlickSlotEffect.mjs'
import { NormalSlotEffect } from './slotEffects/NormalSlotEffect.mjs'
import { SlideSlotEffect } from './slotEffects/SlideSlotEffect.mjs'
import { CriticalSlotGlowEffect } from './slotGlowEffects/CriticalSlotGlowEffect.mjs'
import { FlickSlotGlowEffect } from './slotGlowEffects/FlickSlotGlowEffect.mjs'
import { NormalSlotGlowEffect } from './slotGlowEffects/NormalSlotGlowEffect.mjs'
import { SlideSlotGlowEffect } from './slotGlowEffects/SlideSlotGlowEffect.mjs'

import { DamageNote } from './notes/flatNotes/damageNotes/DamageNote.mjs'
import { HiddenSlideStartNote } from './notes/flatNotes/slideStartNotes/HiddenSlideStartNote.mjs'
import { CriticalTraceFlickNote } from './notes/flatNotes/traceFlickNotes/CriticalTraceFlickNote.mjs'
import { NonDirectionalTraceFlickNote } from './notes/flatNotes/traceFlickNotes/NonDirectonalTraceFlickNote.mjs'
import { NormalTraceFlickNote } from './notes/flatNotes/traceFlickNotes/NormalTraceFlickNote.mjs'
import { CriticalTraceNote } from './notes/flatNotes/traceNotes/CriticalTraceNote.mjs'
import { NormalTraceNote } from './notes/flatNotes/traceNotes/NormalTraceNote.mjs'
import { CriticalTraceSlideEndNote } from './notes/flatNotes/traceSlideEndNotes/CriticalTraceSlideEndNote.mjs'
import { NormalTraceSlideEndNote } from './notes/flatNotes/traceSlideEndNotes/NormalTraceSlideEndNote.mjs'
import { CriticalTraceSlideStartNote } from './notes/flatNotes/traceSlideStartNotes/CriticalTraceSlideStartNote.mjs'
import { NormalTraceSlideStartNote } from './notes/flatNotes/traceSlideStartNotes/NormalTraceSlideStartNote.mjs'
import { DamageSlotEffect } from './slotEffects/DamageSlotEffect.mjs'
import { DamageSlotGlowEffect } from './slotGlowEffects/DamageSlotGlowEffect.mjs'
import { TimeScaleChange } from './timeScale/TimeScaleChange.mjs'
import { TimeScaleGroup } from './timeScale/TimeScaleGroup.mjs'

export const archetypes = defineArchetypes({
    Initialization,
    InputManager,

    Stage,

    NormalTapNote,
    CriticalTapNote,

    NormalFlickNote,
    CriticalFlickNote,

    NormalSlideStartNote,
    CriticalSlideStartNote,

    NormalSlideEndNote,
    CriticalSlideEndNote,

    NormalSlideEndFlickNote,
    CriticalSlideEndFlickNote,

    IgnoredSlideTickNote,
    NormalSlideTickNote,
    CriticalSlideTickNote,

    HiddenSlideTickNote,
    NormalAttachedSlideTickNote,
    CriticalAttachedSlideTickNote,

    NormalSlideConnector,
    CriticalSlideConnector,

    SimLine,

    NormalSlotEffect,
    SlideSlotEffect,
    FlickSlotEffect,
    CriticalSlotEffect,

    NormalSlotGlowEffect,
    SlideSlotGlowEffect,
    FlickSlotGlowEffect,
    CriticalSlotGlowEffect,

    // Extended

    NormalTraceNote,
    CriticalTraceNote,

    DamageNote,

    DamageSlotEffect,
    DamageSlotGlowEffect,

    NormalTraceFlickNote,
    CriticalTraceFlickNote,
    NonDirectionalTraceFlickNote,

    HiddenSlideStartNote,

    NormalTraceSlideStartNote,
    CriticalTraceSlideStartNote,

    NormalTraceSlideEndNote,
    CriticalTraceSlideEndNote,

    TimeScaleGroup,
    TimeScaleChange,
})
