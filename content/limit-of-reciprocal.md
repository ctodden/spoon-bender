---
title: "Limit of Reciprocal"
rawtitle: "limit-of-reciprocal"
date: 2018-03-14T11:29:43-04:00
---

# Understanding the limit of the reciprocal of a function

{{< mtube id="NysQHU1AYjY" >}}

<br>

If 
{{% sidenote %}}We shall soon study the limits of quotient of functions, a topic which will generalize the ideas explored here. Nevertheless, it is worth discussing this special case first, for it is a handy skill to be able to envision the reciprocal of a function and be able to discern the limiting properties of the reciprocal of a function.{{% /sidenote %}}{2:}.
we understand the limiting behavior of a function $f$, then what do we know about the limiting behavior of the _reciprocal_  of $f$. Precisely, how does 
$$\lim\_{x\to a}f(x) \quad\text{relate to}\quad \lim\_{x\to a}\left(\frac 1{f(x)}\right)\\ ?$$
In order to discuss this question it will be convenient to define the notions of _magnitude_, _big numbers_, and _small numbers_.

## Magnitude: big and small numbers

We shall define the ***magnitude*** of a real number $x$ to be its absolute value. In other words, 
$$\textsf{Magnitude of }x := |x|$$
Notice that $|x|$ measures the distance from zero --- in other words, how far away $x$ is from the origin. We shall say that $x$ is a ***big number*** if $|x|>1$ and that $x$ is a ***small number*** if $|x|<1$. Please note that the case $|x|=1$ is excluded from this definition --- in other words, the numbers $-1$ and $1$ are _neither big nor small_. If we really must give them a name you could say that they are numbers with _unit magnitude_. 

A few observations are in order. First, the property of magnitude is _independent_ of sign --- that is, being positive or negative has nothing to do with being being big or small. Being positive or negative depends on _which side of_ $0$ a number lies; being big or small depends on _how far away_ from $0$ a number is.

Let's look at some examples. According to our definition, the numbers 
$$10,000,000,\quad -500,\qquad \text{and}\qquad 1.0001$$
are all big numbers. The last of these numbers ($1.0001$) may seem to be a strange candidate to be called “big”, but we shall see in a moment there are good reasons for doing so. Examples of small numbers are 
$$-10^{-20},\quad \tfrac{117}{397},\quad \text{and} \quad 0.9999$$

{{< cfig src="big_and_small.png" width="80%" >}}

So why do we go to the trouble of making these definitions? As it turns out, the notion of “big” and “small” is very well suited to describe the business of multiplying numbers --- for instance, _the product of two big numbers is also big_, and _the product of two small numbers is also small_. Our interest, however, lies in the fact that it is convenient to apply magnitude to describe the action of _reciprocation_ on real numbers. Consider the reciprocal 
{{% sidenote %}}Recall the graph of the reciprocal function:<br><img src="/img/limit-of-reciprocal/reciprocal_graph.png" width="80%">{{% /sidenote %}}.
function 
$$f(x) = \frac 1x$$
By simply looking at the graph one can convince oneself of some useful principles --- for example, the _reciprocal of a small positive number is a big positive number_

{{< cfig src="one_over_small_eq_big.png" width="80%" >}} 

Similarly, the _reciprocal of a big positive number is a small positive number_

{{< cfig src="one_over_big_eq_small.png" width="95%" >}} 

The “negative” versions of these facts are also true: _the reciprocal of a big negative number is a small negative number, and the reciprocal of a small negative number is a big negative number_

{{< cfig src="one_over_for_negatives.png" width="95%" >}}


{{< testdrive >}}