---
title: Code, Math, and Images — a feature tour
description: A cheat-sheet post showing how to use code blocks, LaTeX, and pictures.
pubDate: 2026-06-13
---

This post does double duty: it's a demo and a reference. Keep it around (or delete
it once you've got the hang of things) — it shows every formatting feature the
site supports.

## Inline and block code

Inline code looks like `const x = 42` and sits in a line of text. Fenced code
blocks get syntax highlighting (and a **Copy** button on hover):

```typescript
// Type a language after the opening fence for highlighting.
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("world"));
```

```python
def fib(n: int) -> int:
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
```

## Math with LaTeX

Inline math is wrapped in single dollar signs: the mass–energy relation
$E = mc^2$ renders right in the sentence. For display math, use double dollar
signs on their own lines:

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

It handles the full range of LaTeX, including aligned equations, fractions, and
Greek letters:

$$
\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}, \qquad
\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}
$$

## Images

The simplest way to add a picture: drop the file in `public/images/` and
reference it with an absolute path.

![A sample illustration with some shapes](/images/sample.svg)

For a caption, use a little HTML:

<figure>
  <img src="/images/sample.svg" alt="The same sample image" />
  <figcaption>Figure 1: shapes, captioned.</figcaption>
</figure>

## Everything else

Standard Markdown works as you'd expect — **bold**, *italic*, [links](https://astro.build),
lists, tables, and quotes:

| Feature | Syntax        |
| ------- | ------------- |
| Code    | ` ```lang `   |
| Math    | `$ ... $`     |
| Image   | `![alt](url)` |

That's the whole toolkit.
