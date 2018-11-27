---
title: "Laws of Limits"
rawtitle: "laws-of-limits"
date: 2018-03-09T14:40:02-05:00
draft: false
---

# Laws of limits: the fundamental combination laws

{{< mtube id = "J8SJOSP0X-Y" >}}

## Fundamental limit laws

Limit laws are indispensable tools that allow us to evaluate complicated limits in terms of simpler, known limits. It is critical to know how, when, and when _not_ to use these rules. A rigorous proof of each of each law requires $\epsilon/\delta$ arguments, but we will settle here for heuristic discussions of why each law is reasonable. As an appendix we include one rigorous proof for the curious reader.


## Limits of constant functions

The simplest of the limit laws concerns itself with the limits of constant functions. Let $k$ be an arbitrary real number and let $f$ be the function defined by setting <span class="sidenote">Recall that the notation "$:=$" means _defined to equal_. In this context we are _defining_ the action of $f$ by showing how to calculate its value --- in this case, by setting the value equal to $k$.</span>  
$$f(x) := k$$
for all arguments $x$. The graph of $f$ is simply the horizontal line $y = k$. If we choose an arbitrary argument $a$ and let $x$ get  closer and a closer to $a$, then value of $f(x)$, of course, is _always equal to $k$_.

{{< cfig src="constant_limit.png" width="50%" >}}

It should not be shocking, then, that the _limiting value_ of $f(x)$ must also be $k$. Indeed, we have:

{{% dbox title = "Limit of a constant function" %}}

The limiting value of a constant function is equal to that constant. In other words, for all real numbers $a$ and $k$, 
$$\lim_{x\to a} \, k = k$$

{{% /dbox %}}

## Limit of the identity function

The _identity function_ is the fancy name we give to the function $f$ defined by setting 
$$f(x) := x$$
The domain of the identity function is the set of real numbers, and its graph is the line $y=x$.

{{< cfig src="identity_limit.png" width="50%" >}}


This example is not too much more complicated than the case of constant functions. From the graph it seems intuitive that:

{{% dbox title="Limit of the identity function" %}}

For all real numbers $a$,  
$$\lim_{x\to a} \, x = a$$

{{% /dbox %}}


## Scalar multiple law

Before we examine the next limit law, let's review what happens when we multiply a function by a _scalar multiple_. In other words, if $k$ is some real number, how does the graph of $k\cdot f$ compare to the graph of $f$? We recall that: 
<ul>
<li>If $k=1$ then the graph of $k\cdot f$ is, of course, identical to the graph of $f$.
<li>If $k=-1$ then the graph of $k\cdot f$ is obtained by flipping the graph of $f$ across the horizontal axis.
<li>If $k=0$ then, of course, the function $k\cdot f$ is just the constant "zero function" whose graph coincides with the horizontal axis.
<li>If $|k|\gt 1$ then the graph of $k\cdot f$ is obtained by stretching the graph of $f$ away from the horizontal axis by a factor of $|k|$.
<li>If $0 \lt |k|\lt 1$ then the graph of $k\cdot f$ is obtained by compressing the graph of $f$ towards the horizontal axis by a factor of $1/|k|$.
<li>If $k\lt 0$ then there is also a flip of the graph across the horizontal axis.
</ul>

{{< cfig src="stretching_examples.png" width="70%" >}}


If we imagine finite limiting values as &ldquo;targets&rdquo; appearing on the graph of a function, then it seems reasonable to guess that the action of stretching (or compressing) a graph by a factor of $k$ will do the same to the vertical component of that target.

{{< cfig src="scalar_law.png" width="70%" >}}

In other words, we expect limits to be scaled by the same factor. In fact, we have:

{{% dbox title="Limit law for scalar multiples" %}} 

If $\lim\limits\_{x\to a}f(x)$ exists (and is finite) then for any real number $k$,  
$$\lim\_{x\to a} \big(\, k\cdot f(x)\,\big) = k \cdot \lim_{x\to a}f(x)$$

{{% /dbox %}}

## Sum law

Let
<span class="sidenote">Given functions $f$ and $g$ we define a new function, denoted $f+g$, by defining 
$$(f+g)(x) := f(x) + g(x)$$
This is known as the _pointwise sum_ since we are adding together corresponding functions values at each point in the domain.</span>
us quickly review that idea of &ldquo;graphical addition&rdquo; of two functions. In other words, when we take the so-called _pointwise sum_ of two functions, how does the graph of the sum relate to the graphs of the summand functions? We can imagine each function as providing arrows that give instructions for plotting function values in the vertical direction. For example, here are the graphs of functions $f$ and $g$ along with the &ldquo;value arrows&rdquo; attached. Notice that positive function values correspond the arrows pointing up while negative values correspond to arrows pointing down.

{{< cfig src="graphical_addition_setup.png" width="70%" >}}

What happens when we add function values? We can imagine the graph of the sum function by simply lining up the tails one set of arrows onto the corresponding tips of the other set of arrows. The resulting collection of arrow tips traces out the graph of the sum function.

{{< cfig src="graphical_addition_punchline.png" width="70%" >}}

Suppose now that
$$\lim\_{x\to a} f(x) = K\quad\text{and}\quad \lim_{x\to a} g(x) = L.$$
We may picture each of these hypotheses using our familiar &ldquo;target diagrams&rdquo;:

{{< cfig src="sum_setup.png" width="70%" >}}

Now suppose we wish to evaluate $\lim\limits_{x\to a} \Big( f(x) + g(x)\Big)$. This limit is determined by the values $f(x)$ and $g(x)$ for arguments $x$ near to $a$, and the values of $f(x) + g(x)$ obey the graphical addition rules, so we it seems reasonable to expect that the &ldquo;targets&rdquo; themselves may be added graphically.

{{< cfig src="sum_punchline.png" width="70%" >}}

In short,
<span class"sidenote">We use the word _discover_ lightly, here. This reasoning should not be confused for a rigorous argument. Scroll to end of this article for a thorough, $\epsilon/\delta$ proof of the sum law.</span>
 what we have discovered is that the limit of a sum should be the sum of the limits. Officially, we have:

{{% dbox title="Limit law for sums" %}}

If $\lim\limits\_{x\to a}f(x)$ and $\lim\limits\_{x\to a}g(x)$ exists (and are finite) then   
$$\lim\_{x\to a} \big(\, f(x)+ g(x) \,\big) = \lim\_{x\to a}f(x) + \lim\_{x\to a}g(x)$$

{{% /dbox %}}

## Difference law

The law for differences barely deserves to be stated on its own, for it follows easily as a consequence of the sum law and the constant multiple law. Here is its statement:

{{% dbox title="Limit law for differences" %}}

If $\lim\limits\_{x\to a}f(x)$ and $\lim\limits\_{x\to a}g(x)$ exist (and are finite) then   
$$\lim\_{x\to a} \big(\, f(x) - g(x) \,\big) = \lim\_{x\to a}f(x) - \lim\_{x\to a}g(x)$$

{{% /dbox %}}

This law should come as no surprise in light of the laws set forth previously. Indeed, if we assume the validity of both the law for sums and the law for scalar multiples, then it is possible to provide a rigorous proof without much effort.  In the argument below we merely need to recognize that subtracting a quantity is the same as adding the _opposite_ of that quantity: 
\begin{align}
\lim\_{x\to a}\big(f(x) -  g(x)\big) & = 
\lim\_{x\to a}\Big(f(x) + (-1)\cdot  g(x)\Big)\\\\[6pt]
&= \lim\_{x\to a} f(x) + \lim\_{x\to a} \big((-1)\cdot  g(x)\big) && \text{(Sum law)}\\\\[6pt]
& = \lim\_{x\to a} f(x) + (-1)\cdot\lim\_{x\to a}  g(x) && \text{(Scalar law)}\\\\[6pt]
& = \lim\_{x\to a} f(x) - \lim\_{x\to a} g(x)
\end{align}
We conclude that if the sum law and the scalar multiple law are both valid, then the difference law is automatically true.


## Product law

We
<span class="sidenote">Analogous to the construction for sums is the function $f\cdot g$, defined by setting  
$$(f\cdot g)(x) := f(x) \cdot g(x)$$
This is known as the _pointwise product_ since we are multiplying together corresponding functions values at each point in the domain.</span>
should like to apply an intuitive, geometric argument to justify the limit law for products, and this will require a bit more subtlety than the arguments provided above. Given functions $f$ and $g$, we shall imagine that the values of the so-called _pointwise product_ function $f\cdot g$ are expressed as areas of rectangles. (To simplify matters we shall assume the values of $f$ and $g$ are positive in order to avoid various &ldquo;signed cases&rdquo;.) This will require us to flip and rotate one set of axes to simultaneously compare the behavior of $f$ and $g$ to the behavior of $f\cdot g$.

{{< cfig src="product_representation.png" width="70%" >}}

To simplify matters graphically, let us restrict our attention to understanding the left-hand limit $\lim\limits_{x\to a^{-1}}\Big( f(x)\cdot g(x)\Big)$. 
The following diagram should make it plausible to believe that the one-sided limit of a product is equal to the product of the one-sided limits.

{{< cfig src="product_law.png" width="70%" >}}

One <span class="sidenote">As it becomes harder to envision plausible arguments to prove conjectures, it becomes easier to appreciate the value of abstraction and rigor. If you string together too many assumptions, hunches, and leaps of faith, then the chain of reasoning becomes too weak to be persuasive!</span> can imagine how to draw a diagram that captures the analogous results for right-handed limits, and so the following law for limits of products becomes fairly plausible.

{{% dbox title="Limit law for products" %}}
 
If $\lim\limits\_{x\to a}f(x)$ and $\lim\limits\_{x\to a}g(x)$ exist (and are finite) then   
$$\lim\_{x\to a} \big(\, f(x)\cdot g(x) \,\big) = \lim\_{x\to a}f(x) \cdot \lim\_{x\to a}g(x)$$

{{% /dbox %}}


## Power law

By repeatedly applying the product rule to the identity rule, we arrive at a simple rule for evaluating limits of _power functions_. To be precise, let $N$ denote an arbitrary natural number. It follows that for any argument $a$, 

<div>\begin{align*}
\lim_{x\to a} x^N & = \lim_{x\to a} \Big(\, \underbrace{x \cdot x \cdot \, \cdots\, \cdot x}_{\text{$N$ times}}\, \Big)\\
& = \underbrace{\lim_{x\to a} x \cdot \lim_{x\to a} x \cdot \, \cdots \, \cdot \lim_{x\to a} x}_{\text{$N$ times}}  && \text{(Product law)}\\
& = a^N && \text{(Identity law)}
\end{align*}</div>

We have thus proved:

{{% dbox title="Limit law for powers" %}}

For every natural number $N$ and argument $a$,    
$$\lim\_{x\to a} x^N = a^N$$

{{% /dbox %}}



## An example

Let's test drive our new limit laws to analyze the limit 
$$\lim\_{x\to 2} \big(\, 3x^2 - 4x + 9\,\big)$$
We find that 

<div>\begin{align*}
\lim_{x\to 2} \big(3x^2 & - 4x + 9\big)\\[2pt]
& = \lim_{x\to 2} (3x^2) - \lim_{x\to 2}(4x) + \lim_{x\to 2}9 && \text{(Sum/diff laws)}\\[2pt]
& = \lim_{x\to 2} (3x^2) - \lim_{x\to 2}(4x) + 9 && \text{(Constant law)}\\[2pt]
& = 3\cdot \lim_{x\to 2} x^2 - 4\cdot \lim_{x\to 2}x + 9 && \text{(Scalar law)}\\[2pt]
& = 3\cdot 2^2 - 4\cdot 2 + 9 && \text{(Identity/power laws)}\\[2pt]
& = 13
\end{align*}</div>


## Appendix: An example of a rigorous &ldquo;epsilon/delta&rdquo; proof

We shall use a rigorous &ldquo;epsilon/delta&rdquo; argument to prove the sum law. That is, we will show that if 
$$\lim\_{x\to a}f(x) = K \quad \text{and} \quad \lim\_{x\to a}g(x) = L$$
then it follows that 
$$\lim\_{x\to a} \Big(\, f(x) + g(x)\, \Big) = K+L$$

{{% narration %}}

<span class="inlinehead">Proof:</span> Let $\epsilon \gt 0$ be an arbitrary positive number. By hypothesis, there exist a positive number $\sigma_A$ such that 
$$|f(x) - K|\lt \frac \epsilon 2\qquad \text{whenever}\ |x-a|\lt \sigma\_A$$
Similarly, there exists a positive number $\sigma\_B$ such that 
$$|g(x) - L|\lt \frac \epsilon 2\qquad \text{whenever}\ |x-a|\lt \sigma\_B$$
Now let $\sigma$ be the smaller of these two numbers. Suppose that $x$ is an argument for which $|x-a| \lt \sigma$. Thanks to the triangle inequality for the absolute value, we know that 
\begin{align}
\left\vert \Big(\, f(x) + g(x)\, \Big) - (K+L) \right\vert & = 
 \vert (f(x) - K) + (g(x) - L)\vert\\\\[5pt]
 & \leq |f(x) - K| + |g(x) - L|\\\\[5pt]
 & \lt \frac \epsilon 2 + \frac \epsilon 2 = \epsilon
\end{align}
But this means precisely that 
$$\lim\_{x\to a} \Big(\, f(x) + g(x)\, \Big) = K+L$$
which is precisely what we needed to prove. $\square$

{{% /narration %}}