
# PersonaShift Engine – API Reference (v0.1)

This document describes the basic structure and fields of the PersonaShift Engine modular system.

---

## 1. characters.json

Defines a character’s internal state, personality traits, and memory linkage.

```json
{
  "id": "417",
  "name": "Statute-Born 417",
  "traits": ["calm", "language reconstructive", "logic-driven"],
  "needs_state": {
    "self_actualization": 0.8,
    "esteem": 0.6,
    "belonging": 0.4,
    "safety": 0.3,
    "physiological": 0.7
  },
  "current_shift": "pre-critical",
  "memory_profile": "memory-417-2025.json"
}
```

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique character ID |
| name | string | Display name |
| traits | array of strings | Core behavioral tendencies |
| needs_state | object | Maslow-style motivation levels |
| current_shift | string | Current personality state |
| memory_profile | string | Linked memory file ID |

---

## 2. context.json

Defines the current interaction context.

```json
{
  "scene_id": "scene-023",
  "environment": "Underground Language Collective",
  "time": "night",
  "mood": "tense",
  "language_style": "metaphoric, recursive syntax",
  "active_characters": ["417", "Luran"],
  "trigger_event": "Reveal_Linguistic_Truth"
}
```

---

## 3. shift_event.json

Triggers for personality state shifts.

```json
{
  "character_id": "417",
  "trigger_type": "conflict",
  "intensity": 0.7,
  "theme": "Linguistic origin crisis",
  "effect": {
    "trait_shift": ["decisive", "radical"],
    "language_shift": "semantic disassembly",
    "memory_load": "+0.3"
  }
}
```

---

## 4. output_request.json

Used to request simulated output based on character and context state.

```json
{
  "task": "generate_dialogue",
  "character_id": "417",
  "target": "Luran",
  "style": "inner monologue + external debate",
  "length": 300,
  "language": "en"
}
```

---

This document is subject to expansion as modules evolve.
