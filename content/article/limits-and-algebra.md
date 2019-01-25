---
title: "Limits and Algebra"
rawtitle: "limits-and-algebra"
date: 2018-11-29T15:16:35-05:00
draft: false
---


# Finding limits using algebra

At this point we have seen how to use graphical and numerical evidence to guess the value of limits. We need to start gathering tools that will help us find exact limits algebraically. In other words, if we are given a formula for a function then we should have some hope of being able to use the formula to find the exact value of that limit.

The tools we need are **limit laws**. The rigorous theory behind these tools was worked out in the eighteenth century. We shall not dwell on rigorous proofs of some of these limit laws; however, when we have some limit laws in hand other laws can be readily proved. We shall examine such proofs when appropriate.

### Limits of the identity function

The **identity function** 
<span class="sidenote">Why is this function called the identity? Recall that the number $0$ is the identity for the operation of addition since $$0 + x = x+ 0 = x$$ for all real numbers $x$. Similarly, the number $1$ is the identity for multiplication since $$1\cdot x = x\cdot 1 = x$$ for all $x$. The function $f$ is the identity for composition of functions since $$f(g(x)) = g(f(x)) = g(x)$$ for all functions $g$.</span>
is one of the simplest functions there is. If we let $f$ be the name of this function, then the formula for $f$ is simply $f(x) = x$. A graph of the identity function is just the line $y = x$. Looking at the graph it stands to reason that
$$\lim_{x\to a}x = a$$

{{< cfig src="identity_limit.png" width="65%" >}}

For example
$$\lim_{x\to3.7}x=3.7$$  
because along the line $y = x$, at $x = 3.7$ the $y$-value would also equal $3.7$ (remember, the $y$-value is the limit). Yes, if your function is this simple, limits are also this simple.

### The scalar law

Let $k$ denote some real number and $f$ some function. The function $k\cdot f$ is simply the function we obtain my multiplying each of the values of $f$ by $k$. The graphical effect of scaling is rather obvious. If, for example, we scale a function $f$ by the number $3$, then all the values will triple and the graph of $3f$ will be obtained by stretching the graph of f away from the $x$-axis by a factor of $3$.
$$\lim\_{x\to a}k\cdot f\left(x\right) = k\cdot\lim\_{x\to a}f\left(x\right)$$

{{< cfig src="scalar_law.png" width="70%" >}}

For example:
$$\lim\_{x\to\pi}\Big(2\cos x\Big)=2\cdot \lim\_{x\to\pi}\cos x=-2$$

Keep it mind that this only works for scalar multiplication, in other words, a constant multiplied by the function.

### Limits of sums and products

The final limit laws we mention in this section seem relatively intuitive. These results are

-   **_The limit of a sum is the sum of a limit_**
-   **_The limit of a product is the product of a limit_**

So, for example, if
$$\lim\_{x\to5}f\left(x\right)=8\quad \text{and}\quad \lim\_{x\to5}g\left(x\right)=7$$
then it follows that
$$\lim\_{x\to5}\big(\, f(x)+g(x)\,\big)=15$$
and
$$\lim\_{x\to 5} \big(\, f(x)\cdot g(x)\,\big)=56$$

### Limit Law for the Identity Function

**![\lim_{x\to a}x\:=\:a](https://canvas.instructure.com/equation_images/%255Clim_%257Bx%255Cto%2520a%257Dx%255C%253A%253D%255C%253Aa "\lim_{x\to a}x\:=\:a")**

### **Scalar Law for Limits**

**![\lim_{x\to a}k\cdot f\left(x\right)\:=\:k\cdot\lim_{x\to a}f\left(x\right)](https://canvas.instructure.com/equation_images/%255Clim_%257Bx%255Cto%2520a%257Dk%255Ccdot%2520f%255Cleft%2528x%255Cright%2529%255C%253A%253D%255C%253Ak%255Ccdot%255Clim_%257Bx%255Cto%2520a%257Df%255Cleft%2528x%255Cright%2529 "\lim_{x\to a}k\cdot f\left(x\right)\:=\:k\cdot\lim_{x\to a}f\left(x\right)")**

### **Sum Rule for Limits**

![\lim_{x\to a}\left[f\left(x\right)+g\left(x\right)\right]\:=\:\lim_{x\to a}f\left(x\right)+\lim_{x\to a}g\left(x\right)](https://canvas.instructure.com/equation_images/%255Clim_%257Bx%255Cto%2520a%257D%255Cleft%255Bf%255Cleft%2528x%255Cright%2529%2Bg%255Cleft%2528x%255Cright%2529%255Cright%255D%255C%253A%253D%255C%253A%255Clim_%257Bx%255Cto%2520a%257Df%255Cleft%2528x%255Cright%2529%2B%255Clim_%257Bx%255Cto%2520a%257Dg%255Cleft%2528x%255Cright%2529 "\lim_{x\to a}\left[f\left(x\right)+g\left(x\right)\right]\:=\:\lim_{x\to a}f\left(x\right)+\lim_{x\to a}g\left(x\right)")

### **Product Rule for Limits**

**![\lim_{x\to a}\left[f\left(x\right)\cdot g\left(x\right)\right]\:=\:\lim_{x\to a}f\left(x\right)\cdot\lim_{x\to a}g\left(x\right)](https://canvas.instructure.com/equation_images/%255Clim_%257Bx%255Cto%2520a%257D%255Cleft%255Bf%255Cleft%2528x%255Cright%2529%255Ccdot%2520g%255Cleft%2528x%255Cright%2529%255Cright%255D%255C%253A%253D%255C%253A%255Clim_%257Bx%255Cto%2520a%257Df%255Cleft%2528x%255Cright%2529%255Ccdot%255Clim_%257Bx%255Cto%2520a%257Dg%255Cleft%2528x%255Cright%2529 "\lim_{x\to a}\left[f\left(x\right)\cdot g\left(x\right)\right]\:=\:\lim_{x\to a}f\left(x\right)\cdot\lim_{x\to a}g\left(x\right)")**

* Actually, it is a bit more complicated than that. The composition of functions is a binary operation, and if f(x) = x, then for any other function g and any x in the appropriate domain,

 ![\left(f\circ g\right)\left(x\right)=f\left(g\left(x\right)\right)=g\left(x\right)](https://canvas.instructure.com/equation_images/%255Cleft%2528f%255Ccirc%2520g%255Cright%2529%255Cleft%2528x%255Cright%2529%253Df%255Cleft%2528g%255Cleft%2528x%255Cright%2529%255Cright%2529%253Dg%255Cleft%2528x%255Cright%2529 "\left(f\circ g\right)\left(x\right)=f\left(g\left(x\right)\right)=g\left(x\right)") and ![\left(g\circ f\right)\left(x\right)=g\left(f\left(x\right)\right)=g\left(x\right)](https://canvas.instructure.com/equation_images/%255Cleft%2528g%255Ccirc%2520f%255Cright%2529%255Cleft%2528x%255Cright%2529%253Dg%255Cleft%2528f%255Cleft%2528x%255Cright%2529%255Cright%2529%253Dg%255Cleft%2528x%255Cright%2529 "\left(g\circ f\right)\left(x\right)=g\left(f\left(x\right)\right)=g\left(x\right)") 

In other words, the function f serves as the identity for the composition operation:

 ![f\circ g\:=\:g](https://canvas.instructure.com/equation_images/f%255Ccirc%2520g%255C%253A%253D%255C%253Ag "f\circ g\:=\:g") and ![g\circ f\:=\:g](https://canvas.instructure.com/equation_images/g%255Ccirc%2520f%255C%253A%253D%255C%253Ag "g\circ f\:=\:g") 

This is completely analogous to the role the number 0 plays for the addition operator and the number 1 plays for the multiplication operation.

