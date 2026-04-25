# MathML Tags – Detailed Guide

## Introduction
MathML (Mathematical Markup Language) is used to display mathematical expressions on the web. All MathML content must be wrapped inside the `<math>` tag.

---

## 1. `<math>` – Root Element
**Definition:** Container for all MathML expressions.

**Example:**
```xml
<math>
  <mi>x</mi>
</math>
```

---

## 2. `<mi>` – Identifier
**Definition:** Represents variables or function names.

**Example:**
```xml
<mi>x</mi>
```

---

## 3. `<mn>` – Number
**Definition:** Represents numeric values.

**Example:**
```xml
<mn>10</mn>
```

---

## 4. `<mo>` – Operator
**Definition:** Represents mathematical operators.

**Example:**
```xml
<mo>+</mo>
```

---

## 5. `<mrow>` – Grouping
**Definition:** Groups expressions together.

**Example:**
```xml
<mrow>
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
</mrow>
```

---

## 6. `<mfrac>` – Fraction
**Definition:** Creates fractions.

**Example:**
```xml
<mfrac>
  <mi>a</mi>
  <mi>b</mi>
</mfrac>
```

---

## 7. `<msqrt>` – Square Root
**Definition:** Displays square root.

**Example:**
```xml
<msqrt>
  <mi>x</mi>
</msqrt>
```

---

## 8. `<mroot>` – Root
**Definition:** Displays nth root.

**Example:**
```xml
<mroot>
  <mi>x</mi>
  <mn>3</mn>
</mroot>
```

---

## 9. `<msup>` – Superscript
**Definition:** Displays power.

**Example:**
```xml
<msup>
  <mi>x</mi>
  <mn>2</mn>
</msup>
```

---

## 10. `<msub>` – Subscript
**Definition:** Displays subscript.

**Example:**
```xml
<msub>
  <mi>a</mi>
  <mn>1</mn>
</msub>
```

---

## 11. `<msubsup>` – Subscript + Superscript
**Definition:** Displays both.

**Example:**
```xml
<msubsup>
  <mi>a</mi>
  <mn>1</mn>
  <mn>2</mn>
</msubsup>
```

---

## 12. `<mtext>` – Text
**Definition:** Displays text in math.

**Example:**
```xml
<mtext>sum</mtext>
```

---

## 13. `<mspace>` – Space
**Definition:** Adds spacing.

**Example:**
```xml
<mspace width="1em"/>
```

---

## 14. `<mtable>`, `<mtr>`, `<mtd>` – Matrix/Table
**Definition:** Used to create tables/matrices.

**Example:**
```xml
<mtable>
  <mtr>
    <mtd><mn>1</mn></mtd>
    <mtd><mn>2</mn></mtd>
  </mtr>
</mtable>
```

---

## 15. `<mover>`, `<munder>`, `<munderover>`
**Definition:** Used for accents above/below expressions.

---

## 16. `<menclose>`
**Definition:** Adds box/circle around expression.

---

## 17. `<mphantom>`
**Definition:** Invisible element but keeps space.

---

## 18. `<semantics>`
**Definition:** Adds meaning/metadata.

---

## Summary
Most important tags:
- `<math>`
- `<mi>`
- `<mn>`
- `<mo>`
- `<mrow>`
- `<mfrac>`
- `<msqrt>`
- `<msup>`
- `<msub>`
- `<mtable>`

---

## Conclusion
MathML helps display structured mathematical content on the web. Learning these core tags is enough to build most expressions.
