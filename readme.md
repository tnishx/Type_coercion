# Coerce Type

A small JavaScript utility that takes an unknown or loosely typed value and attempts to convert it into a specific primitive type in a strict, controlled way.

This module is intended for low-level input normalization where JavaScript’s implicit coercion is unsafe and outcomes must be explicit and deterministic.

---

## Behavior

- Accepts any input value
- Attempts coercion only to an explicitly requested target type
- Applies strict rules per type
- Explicitly rejects unsafe or ambiguous conversions
- Returns a coerced value on success, otherwise `null`

No implicit guessing.  
No partial coercion.  
No thrown errors.

---

## Supported Target Types

- `number`
- `string`
- `boolean`
- `null`
- `undefined`

---

## Rules

### Number
- Accepts numbers and numeric strings
- Rejects `NaN`
- Rejects `Infinity` and `-Infinity`
- Rejects empty strings
- Rejects non-numeric strings

### String
- Accepts strings
- Converts numbers and booleans via `String(value)`
- Rejects `null` and `undefined`

### Boolean
- Accepts `true` and `false`
- Accepts `"true"` and `"false"` (case-insensitive)
- Accepts `1` and `0`
- Rejects all other values

### Null
- Accepts only `null`
- Rejects everything else

### Undefined
- Accepts only `undefined`
- Rejects everything else

---

## Example

```js
coerceType("42", "number");        // 42
coerceType("42px", "number");     // null
coerceType("", "number");         // null

coerceType(true, "string");       // "true"
coerceType(null, "string");       // null

coerceType("false", "boolean");   // false
coerceType(1, "boolean");         // true
coerceType("yes", "boolean");     // null
