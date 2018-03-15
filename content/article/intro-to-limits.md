---
title: "Intro to Limits"
rawtitle: "intro-to-limits"
date: 2018-03-09T23:09:53-05:00
draft: false
---

# Introduction to limits: first examples

The notion of _limit_ is absolutely central to the study of calculus. Indeed, one could argue that once you have mastered the fundamental techniques of algebra and become familiar with the great zoo of functions that constitutes the subject known as “precalcalclus”, then the idea of a limit is the final, active ingredient --- the catalyst that sets off a flurry of new and deep theorems&hellip;

Limits are already present in much of precalculus mathematics. The following examples are meant to review some ideas you have likely seen before, but we shall revisit them now using the language of limits. 

   
## Example A: Decimal expansions

One of the basic theorems of geometry is that the ratio of the circumference of a circle to its diameter is _constant_. This constant is denoted by the greek letter “pi”, and thanks to countless methods for calculating this number we are able to write out the decimal expansion of $\pi$ to as many places as we please. We know that 
$$\pi = 3.141592653589793238462643\dots$$
where the symbol “&hellip;” indicates the absence of the rest of the digits in the expansion. It can be proved that $\pi$ is an example of an _irrational_ number, which is to say that it is not equal to a quotient of integers. A consequence of this fact is that its decimal expansion neither terminates, as in the case of the number
$$\frac{7}{8} = 0.875$$
nor falls into a repeating pattern, as in the case of the number
$$\frac{95}{104} = 0.913\ 461538\ 461538\ 461538\, \dots$$ 

As a practical matter, it is sufficient to know just a handful of digits of $\pi$ to perform “applied mathematics” (for example, build a round tabletop that has an area of three square meters.) But what if we are interested in the _exact_ location of $\pi$ on the real number line? Unless we can find a clever argument that avoids it, we are forced to confront an infinite amount of information. Indeed, a decimal expansion is nothing more or less than compact code that represents a sum --- in this case, 
$$\pi = 3 + \tfrac 1{10} + \tfrac{4}{100} + \tfrac{1}{1000} + \tfrac{5}{10000} + \tfrac{9}{100000} + \cdots$$
And now we are confronted with a fundamental puzzle: How do we add together an infinite collection of numbers? To a newcomer to this type of discussion, the question might sound contradictory, for how could an _infinite_ collection of numbers add up to a _finite_ sum? 

Here is how the notion of limit applies to this example. We can define the “partial sum” $s_k$ by adding up all terms to the “$k$th decimal place” --- that is, we create a sequence of terms

$$\begin{align}
s_0 & = 3\\\\[4pt]
s_1 & = 3 + \tfrac 1{10} = 3.1\\\\[4pt]
s_2 & = 3 + \tfrac 1{10} + \tfrac 4{100} = 3.14\\\\[4pt]
s_3 & = 3 + \tfrac 1{10} + \tfrac 4{100} + \tfrac 1{1000} = 3.141\\\\[4pt]
s_4 & = 3 + \tfrac 1{10} + \tfrac 4{100} + \tfrac 1{1000} + \tfrac 5{10000} = 3.1415\\\\[4pt]
& \quad \vdots
\end{align}$$

None of these $s_k$, being a sum of a finite number of terms, is particularly mysterious. On the other hand, each $s_k$ is clearly a rational number, and so no $s_k$ in this list is equal to $\pi$. The trick is seeing that this sequence of numbers “sneaks up” on $\pi$ in the sense that as $k$ gets larger, the number $s_k$ gets to be as close to the value of $\pi$ as we wish. In the language of limits we would say 

$$\lim\_{n\to \infty} \big(\, s_k \, \big) = \pi$$


## Example B: Exhaustion of the circle

An ancient idea that goes back to at least the 5th century BCE is idea of _exhaustion_, a technique by which the area of shape is determined by calculating a sequence of known shapes that either under or over estimate the “target object”, thereby leaving the (as the only “un-exhausted” possibility) the area in question. Euclid used a sequence of regular polygons to show that the area of a circle is proportional to the square of the radius, and Archimedes used a similar technique to approximate the value of $\pi$ to several digits. We shall not follow their arguments, but rather simply illustrate how the language of limits would now be used to describe the situation. For each natural number $n\geq 3$ we inscribe a regular $n$-gon inside the unit cirlce. Let $A_n$ denote the area of this polygon. We thereby obtain a sequence of numbers $A_n$.   

{{< cfig src="exhaustion.png" width="80%" >}}

The first few values of $A_k$ can be worked using the basic geometry of triangles --- although finding the area of the “$72$-$54$-$54$” triangle is a bit of a challenge! We find that 

$$\begin{align}
A_3 & = \tfrac{3\sqrt 3}4 \approx 1.299\\\\[4pt]
A_4 & = 2\\\\[4pt]
A_5 & = \tfrac 54 \sqrt{\tfrac{5 + \sqrt 5}{2}} \approx 2.378\\\\[4pt]
A_6 & = \tfrac{3\sqrt 3}2 \approx 2.598
\end{align}$$

Now it seems plausible that as the number of sides $k$ increases, these polygons should provide better and better approximations to the are of the unit circle. Of course, we know the area of this circle to be $\pi$, and so, in the language of limits, we would state our conjecture by writing
$$\lim_{k\to \infty} \big(\, A_k\, \big) = \pi$$


## Example C: Vertical and horizontal asymptotes

If you study the basic functions of precalculus for any length of time you are sure to run into _asymptotes_ --- both vertical and horizontal. Let's discuss a couple of examples using the language of limits. Consider first the function 
$$f(x) = \frac 1{|x|}$$ 
The domain of $f$ is $\mathbb R - \{0\}$, the set of all nonzero real numbers. 
To say that zero is not in the domain of $f$ is precisely the same as saying the expression $f(0)$ is “not defined” --- that is, there is no way to evaluate the function $f$ when the argument is $0$. By graphing $f$, however, we are able to see a striking pattern of behavior: when $x$ is _close_ to zero then $\frac 1{|x|}$ becomes very large. 

{{< cfig src="vertical_asymptote.png" width="60%" >}}

Indeed, we can make the quantity $\frac 1{|x|}$ as large as we please by pushing $x$ closer to zero. This is a classic example of a _vertical asymptote_, and we are able to succinctly express this behavior in the language of limits by writing 
$$\lim_{x\to 0} \frac 1{|x|} = \infty$$

You have surely seen many examples of horizontal asymptotes when you studied rational functions, but let us choose an example from the real of trigonometry. The tangent function 
$$\tan x = \frac{\sin x}{\cos x}$$
is undefined wherever $\cos x = 0$, which is to say that the domain of the tangent function is the set 

$$\mathbb R - \left\\{ \tfrac \pi 2 + k\pi  \mid  k\in\mathbb Z  \right\\}$$

A graph of the tangent function reveals the existence of vertical asymptotes at each of the “rejected” arguments:

{{< cfig src="tan_x.png" width="80%" >}}

Let
<span class="sidenote">It fails quite miserably, in fact! For any real number $K$, the horizontal line $y=K$ crosses the graph of $y = \tan x$ infinitely often. Put another way, any equation $\tan x = K$ has an infinite number of solutions.</span>
us recall that the graph of the tangent function fails the horizontal line test so this function does not have an inverse. To what, then, is the inverse tangent function actually an inverse? It is customary to restrict the domain of the tangent function to the open interval $\left(-\tfrac \pi 2,\tfrac \pi 2\right)$ to obtain a one-to-one function, and this is the function whose inverse is denoted “$\tan^{-1}x$” or “$\arctan x$”.

{{< cfig src="arctan_x.png" width="80%" >}}

What were formerly vertical asymptotes have become horizontal asymptotes. We note that if by taking the argument $x$ to be large enough, it is possible to make the value of the arctangent function as close to $\pi/2$ as we wish. In the language of limits, we express this by writing 
$$\lim\_{x\to \infty} \big(\, \arctan x \,\big)= \tfrac \pi 2$$   
By the way, there is a different  horizontal asymptote as we look to the left, and in fact  
$$\lim\_{x\to -\infty} \big(\, \arctan x \,\big)= -\tfrac \pi 2$$   


## Example D: The function $\boldsymbol{\frac{\sin x}x}$

Consider the function 
$$f(x) = \frac{\sin x}x$$
The domain of this function is the set $\mathbb R - \{ 0\}$ of nonzero numbers. If we plot a graph of this function using software (in this case, the online utility <span class="texttt">desmos</span>) we may verify that the value $f(0)$ is undefined.

{{< cfig src="sin_x_over_x.png" width="80%" >}}

But we also notice that when the argument $x$ is very close to $0$, then the value $f(x)$ appears to be very close to one. Indeed, it appears that by pushing $x$ closer to $0$ we may force the value of $f(x)$ to become as close as we wish to one. We can gather evidence for this through a table of values (in this case gathered on a standard spreadsheet):

{{< cfig src="table.png" width="40%" >}}

It appears that by making $x$ close enough to zero we may force the value of $(\sin x)/x$ to be as close as we like to the value $1$. We can assert this using the language of limits by writing 
$$\lim\_{x\to 0}\frac{\sin x}{x} = 1$$