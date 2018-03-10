---
title: "Math Test Page"
date: 2018-03-09T10:48:29-05:00
---

# And away we go!

## Does this at least show up as a page?

And now for the real test: $e^{\pi i} + 1 = 0$. 

$\displaystyle\lim_{x\to a}\big( f(x) - g(x)\big)$

$$\lim_{x\to a}\big( f(x) - g(x)\big)$$
Stuff can go here. 
$$P(x) = a_0 + a_1x + a_2 x^2 + a_3 x^3$$
And here 
$$\lim\_{x\to a}f(x) = \lim\_{x\to a}g(x) $$
What about
$$a\_{ij} + b\_{ij} = c\_{ij}$$

And displayed math?? There will be a markdown problem with $a_{ij}$. Maybe not!! It looks like subscripts are supported: $P(x) = a_0 + a_1 x + a_2 x^2 + \cdots + a_Nx^N$.

And then there is a limit such as $\lim_{x\to 0}\tfrac{\sin x}{x}$.

<div>\begin{align*}
\tan^2 x + 1 & = \frac{\sin^2 x}{\cos^2 x} + \frac{\cos^2 x}{\cos^2 x}\\[4pt]
  & = \frac{\sin^2 x + \cos^2}{\cos^2 x}\\[4pt]
  & = \frac 1{\cos^2}\\[4pt]
  & = \sec^2 x\\[4pt]
  & = \lim_{x\to 0}\cos x
\end{align*}</div>

Let us say an improper integral is ***basic*** if exactly one of the two limits of integration must be obtained by a limiting process. In other words, a basic improper integral arises in one of the following four ways:

<div>\begin{gather*}
\lim_{K\to \infty} \int_a^K f(x)\, dx\qquad 
\lim_{K\to \,-\infty} \int_K^b f(x)\, dx\\[8pt]
\lim_{K\to b^-} \int_a^K f(x)\, dx\qquad
\lim_{K\to a^+} \int_K^b f(x)\, dx
\end{gather*}</div>

A general improper integral must be split into the sum of such basic integrals. <span class="sidenote">In practice you should never have to worry about more than one or two such splittings. And what happens if we do this: $$e^{\pi i}+1 = 0$$</span>The original integral is said to converge if and only if _all_ of its constituent basic integrals converge. 

How many basic integrals are required to evaluate the following?

The base of an object lies in the $xy$-plane. This base can be described as the region bounded below by the curve $y=2 - \frac 12 x^2$ and above by the $x$-axis. Cross sections perpendicular to the $y$-axis are equilateral triangles. Find the volume of this object.

Consider the region $\mathcal A$ bounded below the curve $y=e^x$, above the line $y = \frac 12 x - 1$, and between the vertical lines $x=0$ and $x=2$. 

To as many decimals as appear on the calculator, find the area of $\mathcal A$.

A solid $\mathcal V$ has $\mathcal A$ as its base, and its cross-sections perpendicular to the $x$-axis are half-disks. To as many decimals as appear on the calculator, find the volume of $\mathcal V$.

Consider the region $\mathcal R$ (pictured at right) enclosed by 

$$y = \tan x - 3\qquad \text{and}\qquad x=e^y \qquad \text{and}\qquad \lim_{x\to 0}\cos x$$


Find the area of $\mathcal R$ twice, first by integrating with respect to $x$ and then integrating with respect to $y$. Express your answer to as many decimals as appear on your calculator. 

An object $\mathcal S$ is built by using $\mathcal R$ as the base, with cross-sections of $\mathcal S$ perpendicular to the $y$-axis being squares (see figure below). Find the volume of $\mathcal S$.

