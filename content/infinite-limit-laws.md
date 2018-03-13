---
title: "Infinite Limit Laws"
date: 2018-03-13T12:00:52-04:00
---



# Sum and product limit laws involving infinity

{{< mtube id="tyqVJVEKV20" >}}

Previously we learned that limits obey some fairly intuitive &ldquo;combination laws&rdquo; that allow us to quickly analyze multiples, sums, products, and --- assuming the limit of the denominator is not zero --- quotients of limits as well. For example, if we know that 
$$\lim\_{x\to 3}f(x) = 12 \qquad \text{and} \qquad \lim\_{x\to 3}g(x) = 9$$
then it follows that 
$$\begin{align}
\lim\_{x\to 3} \big(\, 3f(x) & + 6g(x)\,\big) \\\\[4pt]
& = \lim\_{x\to 3} (\, 3f(x)\,)  + \lim\_{x\to 3} (\, 6g(x)\,) 
&& \text{(Sum law)}\\\\[4pt]
& = 3\cdot \lim\_{x\to 3} f(x)  + 6\cdot \lim\_{x\to 3} g(x)
&& \text{(Scalar multple law)}\\\\[4pt]
& = 3\cdot 12 + 6\cdot 9 = 90
\end{align}$$

These limit laws are convenient, but they require that all the &ldquo;constituent limits&rdquo; exist and are finite. With care, however, it is possible to extend some of these laws to the case where one or more of the constituent limits diverge to infinity or negative infinity.
 
## Limits of sums involving infinity

Suppose,
{{% sidenote %}}Please recall that &ldquo;small&rdquo; means relatively close to zero, while &ldquo;big&rdquo; (or &ldquo;large&rdquo;) means relatively far away from zero. These notions are independent of the property of being positive or negative, which can be a bit jarring until you get used to it. For example, the &ldquo;small number&rdquo; $0.001$ is _greater than_ the &ldquo;big number&rdquo; $-500$!{{% /sidenote %}} for example, that we are working with the sum of two functions, one of which has a finite limit, the other of which diverges to infinity. To (literally) simplify the picture we shall work at first with only one-sided limits, and we shall assume that
$$\lim\_{x\to a^{-}}f(x) = L \qquad \qquad 
\lim\_{x\to a^-} g(x) = \infty$$
As illustrated in the diagram below, there are two competing behaviors as $x$ approaches $a$: the value of $f(x)$ gets close to $L$ while the value of $g(x)$ is positive and becomes _arbitrarily large_. It should be clear that the sum $f(x) + g(x)$ must also become arbitrarily large and positive.

{{< cfig src="/img/infinite-limit-laws/L_plus_infinity.png" width="80%" >}}

Please note that this would be true even if $L$ were a relatively large _negative} number, for if $g(x)$ diverges to positive infinity then these terms will eventually dominate the sum $f(x)+g(x)$. Note also that we focused on a one-sided limit only so that the picture was easier to draw; the same principle applies for a two-sided limit. Finally, if the value of $g(x)$ were to diverge to negative infinity, then the resulting sum also diverges to negative infinity.  

{{% dbox title="The sum of a finite limit and an infinite limit"%}}
The limit of the sum of a finite limit and an infinite limit is infinite. In particular, if  
$$\lim\_{x\to a} f(x) = L
\qquad\text{and}\qquad
\lim\_{x\to a} g(x) = \infty$$ 
then 
$$\lim\_{x\to a}\big(f(x)+g(x)\big) = \infty$$
If, however,  
$$\lim\_{x\to a} f(x) = L
\qquad\text{and}\qquad
\lim\_{x\to a} g(x) = -\infty$$ 
then
$$\lim\_{x\to a}\big(f(x)+g(x)\big) = -\infty$$
Either of these laws may applied to one-sided limits.
{{% /dbox %}}

{{% inhead %}}Example A{{% /inhead %}}{{< quad >}}Evaluate $\lim_{x\to 0} \left( x + \tfrac 1{x^2}\right)$

{{% narration %}} 
{{% inhead %}}Solution:{{% /inhead %}} We saw
{{% sidenote %}}A quick desmos check is consistent with our result.<br><img src="/img/infinite-limit-laws/x_plus_1_over_x_squared.png" width="60%">{{% /sidenote %}}
previously that 
$$\lim\_{x\to 0} x = 0\qquad \text{and} \qquad 
\lim\_{x\to 0} \frac 1{x^2} = \infty$$
from which we conclude that 
$$\lim\_{x\to 0} \left( x + \tfrac 1{x^2}\right) = \infty$$

{{% /narration %}}

Let us turn our attention to the sum of two functions, both of which either diverge to infinity or diverge to negative infinity as we approach an argument $a$. (It is important that these infinities _agree_ --- that is, they are either both positive infinity or both negative infinity.) In such a case it is not hard to see that the limit of the sum must also diverge to infinity or negative infinity, as the case may be. The crux of the matter is that 

+ the sum of two big, positive numbers is an even bigger positive number, and 

+ the sum of two big, negative numbers is an even bigger negative number.

In the figure below, for instance, we note that 
$$\lim\_{x\to a^-}f(x)= -\infty
\qquad \text{and} \qquad \lim\_{x\to a^-}g(x) = -\infty$$
What is the fate of the limit of the sum of $f$ and $g$ as $x$ approaches $a$ from the left? It must also diverge to negative infinity.

{{< cfig src="/img/infinite-limit-laws/neg_infty_plus_neg_infty.png" width="80%" >}}

As in the previous example, we work here with a one-sided limit only to simplify the diagram; the result is also true for two-sided limits. We therefore have two more limit laws involving infinity, which we summarize:

{{% dbox title="The sum of \"like\" infinities"%}}

If $f$ and $g$ diverge to the &ldquo;same&rdquo; infinity, then the sum diverges to the same infinity. That is, if 
$$\lim\_{x\to a} f(x) = \infty
\qquad\text{and}\qquad
\lim\_{x\to a} g(x) = \infty$$ 
then
$$\lim\_{x\to a}\big(f(x)+g(x)\big) = \infty$$
and if 
$$\lim\_{x\to a} f(x) = -\infty
\qquad\text{and}\qquad
\lim\_{x\to a} g(x) = -\infty$$ 
then
$$\lim\_{x\to a}\big(f(x)+g(x)\big) = -\infty$$
Either of these laws may applied to one-sided limits.
{{% /dbox %}}

{{% inhead %}}Example B{{% /inhead %}}{{< quad >}}Evaluate $\lim\_{x\to 0^+} \left( \cot x + \dfrac 1{x}\right)$

{{% narration %}}

{{% inhead %}}Solution:{{% /inhead %}}{{< quad >}}Previously we learned that 
$$\lim\_{x\to 0^+} \frac 1x = \infty$$
As for the limit of the cotangent function, we will simply recall the shape of the graph (see figure below) and assert that 
$$\lim\_{x\to 0^+} \cot x = \infty$$ 
Our new limit law for sums of &ldquo;like&rdquo; infinities allows us to conclude that
$$\lim\_{x\to 0^+} \left( \cot x + \tfrac 1{x}\right) = \infty$$

{{< cfig src="/img/infinite-limit-laws/sum_like_inftys.png" width="80%" >}}


Please note that similar reasoning would allow us to evaluate the sum of the left-hand limits at $x=0$ --- precisely, 
$$\lim\_{x\to 0^-} \left( \cot x + \tfrac 1{x}\right) = -\infty$$

{{% /narration %}}


## An indeterminate form

Let's start with a simple (if somewhat ambiguous) question: what happens if you add a big positive number and a big negative number? Is the sum positive or negative? Is it big or small? Is it zero? A moment's thought should reveal to you that _in the absence of further information there is no way of knowing_. Consider, for example, the following five examples.
$$\begin{array}{ccccc}
10,000,000 & + & -1,000,000 & = & 9,000,000\\\\[2pt]
8,000,000  & + & -7,999,999 & = & 1\\\\[2pt]
5,000,000  & + & -5,000,000 & = & 0\\\\[2pt]
8,000,000  & + & -8,000,001 & = & -1\\\\[2pt]
1,000,000 & + & -10,000,000 & = & -9,000,000
\end{array}$$
In each of these examples, the summands on the left are relatively big numbers. If both these numbers had the same sign then the resulting sum would certainly be a relatively big number of the same sign; however, since the summands have opposite signs they work _against} each other. Even the qualitative nature of the resulting sum depends very seriously on the on the relative magnitude (i.e., &ldquo;bigness&rdquo;) of the summands. 

Now suppose the limits of the functions $f$ and $g$ both diverge at the  argument $a$, one diverging to positive infinity and the other diverging to negative infinity. That is, 
$$\lim\_{x\to a}f(x) = \infty 
\qquad\text{and}\qquad 
\lim\_{x\to a}g(x) = -\infty$$
As before, we shall restrict our picture to the left-hand limit to save space. The question at hand: what is the limit of the sum?

{{< cfig src="/img/infinite-limit-laws/competing_infinities.png" width="80%" >}}

It turns out that _any_ behavior is possible. Officially, 

{{% dbox title="The indeterminacy of $\boldsymbol{\infty - \infty}$" %}}

If $f$ and $g$ diverge to &ldquo;opposite&rdquo; infinities, then the behavior of the limit of the sum cannot be determined without further information. Precisely, if it is known that 
$$\lim\_{x\to a} f(x) = \infty
\qquad\text{and}\qquad
\lim\_{x\to a} g(x) = -\infty$$ 
then it is possible that
$$\lim\_{x\to a}\big(f(x)+g(x)\big)$$
either

+ converges to some finite value,

+ diverges to infinity,

+ diverges to negative infinity, or

+ diverges in some other way

More information is required to determine which of these is the case
.
{{% /dbox %}}

Let's look at a few examples of this phenomenon; we shall leave a more detailed exploration to the exercises. 

{{% inhead %}}Example C: An instance of $\infty + (- \infty) = 3${{% /inhead %}}

{{% narration %}}

Let $f$ and $g$ be the functions defined by the formulas 
$$f(x): = \frac 1{x^2} + x + 3
\qquad\text{and}\qquad 
g(x) := -\frac 1{x^2}$$
Let us analyze 
$$\lim\_{x\to 0}\big( f(x) + g(x) \big)$$
We note first of all that 
$$\lim\_{x\to 0} (x+3) = 3
\qquad\text{and}\qquad 
\lim\_{x\to 0} \frac 1{x^2} = \infty$$
and we conclude, from the first limit rule we encountered earlier in this article, that 
$$\lim\_{x\to \infty} f(x) = \lim\_{x\to 0}\left(\ 
   \frac 1{x^2} \ + \ (x+3)\right) = \infty$$
Since  
$$\lim\_{x\to 0} g(x) = \lim\_{x\to 0} \left( -\frac 1{x^2}\right) = -\infty$$
we recognize that 
$$\lim\_{x\to 0}\big( f(x) + g(x) \big)$$
has the form &ldquo;$\infty + (- \infty)$&rdquo;. The sum function has the formula 
$$f(x) + g(x) = \left(\frac 1{x^2} + x + 3\right) + \left( -\frac 1{x^2} \right)$$
You are probably itching to make an obvious algebraic simplification to this formula, but let us pause to think about the domain of this function for a moment.  
{{% sidenote %}}By definition, the domain of the sum of two functions is the intersection of the domains of the individual functions. This guarantees that you are able to evaluate an argument for _each_ function and _then_ add the values together.} 
The functions $f$ and $g$ both have the domain $\mathbb R - \{0\}$, the set of all real numbers besides $0$. It follows that the sum function $f+g$ has the same domain. We must remember this when we perform the obvious algebraic simplification:
\begin{align}\require{cancel}
f(x) + g(x) & = \cancel{\frac 1{x^2}} + x + 3 + \left( -\cancel{\frac 1{x^2}} \right)\newline
 & = x+3 \qquad (x\neq 0)
\end{align}
Notice that we have inserted a domain restriction ($x\neq 0$) that is not otherwise obvious if we simply wrote $S(x) = x+3$. This implies that the graph of $f+g$ is precisely the line $y=x+3$ with a &ldquo;hole&rdquo; removed at the point $(0,3)$.


{{< cfig title="/img/infinite-limit-laws/inf_minus_inf_equals_3.png" width="80%">}}

Once again setting aside the details, this <span class="texttt">desmos</span> graph inspires us to assert that 
$$\lim\_{x\to 0} \big( f(x) + g(x) \big) = 3$$
In other words, we have discovered an instance of the &ldquo;sum&rdquo; 
$$\text{&ldquo;$\infty + (-\infty) = 3$&rdquo;}$$
You should be able how to tinker with this example to obtain an instance of 
$$\text{&ldquo;$\infty + (-\infty) = K$&rdquo;}$$
where $K$ is any real number of your choosing.

{{% /narration %}}

{{% inhead %}}Example D: An instance of $\infty + (- \infty) = -\infty${{% /inhead %}}

{{% narration %}}

Consider the limit 
$$\lim\_{x\to 0} \left( \frac 1{x^2} - \frac 1{x^4}\right)$$
We note that 
$$\lim\_{x\to 0}  \frac 1{x^2} = \infty 
\qquad\text{and}\qquad 
\lim\_{x\to 0}  \left(-\frac 1{x^4}\right) = -\infty$$
and so we are wrestling with a &ldquo;$\infty + (- \infty)$&rdquo; form. As in the previous example, we will forgo algebraic details and simply look to <span class="texttt">desmos</span> for help.

{{< cfig src="/img/infinite-limit-laws/inf_minus_inf_equals_neg_inf.png" width="80%" >}}

There is strong graphical evidence that 
$$\lim\_{x\to 0} \left( \frac 1{x^2} - \frac 1{x^4}\right) = -\infty$$
(This is, in fact, the case, but we will put off a more rigorous verification for later.) We have therefore found an instance of the &ldquo;sum&rdquo;
$$\text{&ldquo;$\infty + (-\infty) = -\infty$&rdquo;}$$

{{% /narration %}}


{{% inhead %}}Example E: An instance of $\boldsymbol{\infty + (- \infty)}$ diverging{{% /inhead %}}

{{% narration %}}

The previous two examples should give you a strong sense of why &ldquo;$\infty + (-\infty)$&rdquo; is indeterminate --- there is simply too much freedom to rig examples in which two competing infinities cancel each other to reveal just about any behavior we desire. Consider, for example, the functions $f$ and $g$ defined by setting 
$$f(x) := \frac 1{x^2} + \sin\left(\tfrac 1x\right)
\qquad\text{and}\qquad
g(x):= -\frac 1{x^2}$$
Although
{{% sidenote %}}You may rightly question the effect of the &ldquo;infinitely oscillatory&rdquo; behavior of $\sin(1/x)$ near $x=0$. As it turns out, the increasingly large positive values of $1/x^2$ dominate the sum of $1/x^2$ and $\sin(1/x)$.{{% /sidenote %}}
 perhaps not obvious, it is true that 
$$\lim\_{x\to 0} f(x) = \infty$$
while, of course, 
$$\lim\_{x\to 0} g(x) = \infty$$
But we note that 
\begin{align} \require{cancel}
f(x) + g(x) & := \cancel{\frac 1{x^2}} + \sin\left(\tfrac 1x\right) \ + \ 
   \cancel{\frac 1{x^2}}\newline
&= \sin\left(\tfrac 1x\right) \qquad (x\neq 0)
\end{align}
As we have seen previously, 
$$\lim\_{x\to 0} \sin\left(\tfrac 1x\right) \\ \textsf{does not exist}$$
thanks to the wild, finitely oscillatory behavior as $x$ approaches zero. We have therefore discovered an instance where
$$\text{&ldquo;}\infty + (-\infty)\text{&rdquo;}\quad\textsf{DNE}$$
All of this seems to be born out by a <span class="texttt">desmos</span> plot.

{{< cfig src="/img/infinite-limit-laws/inf_minus_inf_equals_dne.png" width="80%" >}}

{{% /narration %}}

## Summary of extended sum laws for limits

In summary, the sum law for limits can be extended to include most cases where one or the other summand diverges to infinity or negative infinity. Written in the shortcut of indeterminate forms, these laws can be summarized via:
<span class="sidenote">This table should be read as follows:<br><br>
$\bullet$ 1st col is $\lim\limits\_{x\to a} f(x)$<br><br>
$\bullet$ 2nd col is $\lim\limits\_{x\to a} g(x)$<br><br>
$\bullet$ 3rd col is $\lim\limits\_{x\to a} (f(x)+g(x))$<br><br>
The symbol &ldquo;???&rdquo; indicates an indeterminate form.</span>

{{< cfig src="/img/infinite-limit-laws/sum_summary.png" width="70%" >}}

## Limits of products involving infinity

The limit law for products states that 
$$\lim\_{x\to a} \big( f(x)\cdot g(x) \big) = 
 \lim\_{x\to a}f(x) \cdot \lim\_{x\to a} g(x)$$
provided that both right-hand limits exist and are finite. Let us now figure out how we might extend these laws to include cases where one or the other limits on the right-hand side diverge to infinity or negative infinity. 

Once again we will set the stage by making a few simple calculations and generalizing them to statements about &ldquo;big numbers&rdquo;. We note that 
$$\begin{array}{ccccc}
5,000,000 & \times & 4,000,000 & = & 20,000,000\\\\[2pt]
-5,000,000 & \times & -4,000,000 & = & 20,000,000\\\\[2pt]
5,000,000 & \times & -4,000,000 & = & -20,000,000\\\\[2pt]
-5,000,000 & \times & 4,000,000 & = & -20,000,000
\end{array}$$
It should be clear that 

+ The product of two large numbers is an even larger number.

+ If the two numbers are the same sign then the product is positive.

+ If the two numbers are opposite signs then the product is negative.

Without going into the details, we assert that these simple ideas lie at the heart of the proof of the following extension of the limit law for products.

{{% sidenote %}}Using the shorthand of indeterminate forms, we might write  
$$\pm\infty \cdot \pm\infty = \infty$$ and $$\pm\infty \cdot \mp\infty = -\infty$$
where we are meant to use either the top or bottom symbols together from the choices offered by the hybrid symbols $\pm$ and $\mp$ in the left-hand factors.{{% /sidenote %}}

{{% dbox title="Products of two infinite limits" %}}

If $f$ and $g$ both diverge to infinity (either plus or minus) then so does the product of $f$ and $g$. Precisely, if it is known that either
$$\lim\_{x\to a} f(x) = \infty
\qquad\text{and}\qquad
\lim\_{x\to a} g(x) = \infty$$ 
or 
$$\lim\_{x\to a} f(x) = -\infty
\qquad\text{and}\qquad
\lim\_{x\to a} g(x) = -\infty$$ 
then it follows that
$$\lim\_{x\to a}\big(f(x)\cdot g(x)\big) = \infty$$
Similarly, if it is known that either 
$$\lim\_{x\to a} f(x) = \infty
\qquad\text{and}\qquad
\lim\_{x\to a} g(x) = -\infty$$ 
or 
$$\lim\_{x\to a} f(x) = -\infty
\qquad\text{and}\qquad
\lim\_{x\to a} g(x) = \infty$$
then it follows that 
$$\lim\_{x\to a}\big(f(x)\cdot g(x)\big) = -\infty$$
{{% /dbox %}}

{{% inhead %}}Example F: A product of two infinite limits{{% /inhead %}}

{{% narration %}}

Consider the functions $f$ and $g$ defined by setting
$$f(x):= \frac 1{x^2}
\qquad\text{and}\qquad 
g(x):= -\frac 1{x^2}$$
Notice in this case that <span class="sidenote">Notice that the domains of $f$, $g$, and $f\cdot g$ are all the same --- namely $\mathbb R - \{0\}$ --- and there is no danger of obtaining a &ldquo;fake&rdquo; value by plugging $x=0$ into the formula for $f\cdot g$. In other words, there is no need to include an explicit domain restriction for this formula.</span>
$$f(x)\cdot g(x) = - \frac 1{x^4}$$
and it is pretty clear that 
$$\lim\_{x\to 0} f(x) = \infty
\qquad\text{and}\qquad 
\lim\_{x\to 0}g(x) = -\infty$$
and consequently 
$$\lim\_{x\to 0} \big(f(x)\cdot g(x)\big) = -\infty$$
A <span class="texttt">desmos</span> plot seems to bear this out.

{{< cfig src="/img/infinite-limit-laws/inf_times_neg_inf_equals_neg_inf.png" width="80%">}}

{{% /narration %}}

## Scalar multiples of an infinite limit

Suppose $f$ is a function for which 
$$\lim\_{x\to a} f(x) = \infty$$
and we need to evaluate both 
$$\lim\_{x\to a} (\, 2f(x)\,)
\qquad \text{and} \qquad 
\lim\_{x\to a} (\, -\tfrac 13 f(x)\,)$$
We know that the first of these graphs is obtained by stretching the graph of $f$ by a factor of two away from the $x$-axis, while the second graph is obtained by compressing the graph towards the $x$-axis by a factor of three _combined_ with a reflection across the $x$-axis. It is rather clear that either scaling a graph away or compressing a graph towards the $x$-axis has no effect on infinite limits, apart from the possibility of changing the &ldquo;sign&rdquo; of the divergence.

{{< cfig src="/img/infinite-limit-laws/scaled_limits.png" width="80%" >}}

There is, in fact, an extension of the scalar law for limits:

{{% dbox title="Scalar multiple law for infinite limits" %}}

Suppose that $k$ is a _nonzero_ constant and
$$\lim\_{x\to a} f(x) = \pm\infty$$ 
It follows that 
$$\lim\_{x\to a}\big(k\cdot f(x)\big) 
 = \begin{cases} \pm\infty & \text{if $k>0$}\\\\[4pt]
 \mp\infty & \text{if $k<0$}\end{cases}$$
{{% /dbox %}} 

Please note that the hypothesis $k=0$ is excluded by this theorem, for it is quite a different --- and rather uninteresting --- case! When you scale a function by the constant zero, then the scaled function always has value zero, in which case all limits are equal to zero!

{{% inhead %}}Example G: Scaled limits{{% /inhead %}}

{{% narration %}}

Given 
{{% sidenote %}}<img src="/img/infinite-limit-laws/sec_squared.png" width="70%">{{% /sidenote %}}
the fact that 
$$\lim\_{x\to \pi /2} \sec^2 x = \infty$$
what are the values of 
$$\lim\_{x\to \pi/ 2} \left(\tfrac{1}{100} \sec^2 x\right)
\qquad\text{and}\qquad 
\lim\_{x\to \pi/2} \left(-\sqrt{13} \cdot \sec^2 x\right)\ ?$$ 

{{% inhead %}}Solution:{{% /inhead %}} In both cases we obtain an infinite limit; in the second case, since the scalar multiple is negative, the sign of tesulting limit gets flipped:
$$\lim\_{x\to \pi/ 2} \left(\tfrac{1}{100} \sec^2 x\right) = \infty
\qquad\text{and}\qquad 
\lim\_{x\to \pi/2} \left(-\sqrt{13} \cdot \sec^2 x\right)=-\infty$$ 

{{% /narration %}}


## The product of a finite limit and an infinite limit

Now suppose that 
$$\lim\_{x\to a} f(x) = L
\qquad\text{and}\qquad 
\lim\_{x\to a}g(x) = \infty$$
where $L$ is a _nonzero_ number. Under these hypothesis then it should be possible, by sampling arguments close enough to $a$, for the values of $f$ to be rather close to $L$, and the values of $f$ to be rather big positive numbers. In other words, near the argument $a$ the graph of $f\cdot g$ should resemble the graph of $g$ scaled by a factor of $L$.

{{< cfig src="/img/infinite-limit-laws/product_limit.png" width="90%" >}}

It 
{{% sidenote %}}The embedded video at the top of the page provides a different approach for arguing this result.{{% /sidenote %}}
seems reasonable to conclude that the net result is similar to the extended scalar rule: the infinite limit contributed by $g$ will dominate the product $f\cdot g$; however, the multiplying by $f(x)$ might change the &ldquo;sign&rdquo; of the infinity.

{{% dbox title="A nonzero, finite limit times an infinite limit" %}}

Suppose that $f$ has a nonzero, finite limit
$$\lim\_{x\to a} f(x) = L \qquad (L\neq 0)$$ 
and that the limit of $g$ is infinite 
$$\lim\_{x\to a} g(x) = \pm \infty$$
It follows that 
$$\lim\_{x\to a}\big(f(x)\cdot g(x)\big) 
 = \begin{cases} \pm\infty & \text{if $L>0$}\\\\[4pt]
 \mp\infty & \text{if $L<0$}\end{cases}$$
 {{% /dbox %}}

## Another indeterminate form: "$\boldsymbol{0\cdot \infty}$"

We have covered several cases, yet one critically important case has slipped through the cracks of the discussion. Suppose it is known that 
$$\lim\_{x\to a} f(x) = 0
\qquad\text{and}\qquad 
\lim\_{x\to a}g(x) = \pm\infty$$
In this case, what can we say about the limit 
$$\lim\_{x\to a} \big( f(x)\cdot g(x)\big)\ ?$$
As it turns out, unless we obtain further information we _have no idea about the behavior of this limit_! In other words, the limit might converge to the number $12$, the number $-\pi$, the number $0$; it might diverge to infinity or negative infinity; it might diverge in some other way. In short, we say that 
$$\text{&ldquo;}0\cdot \infty\text{&rdquo; and &ldquo;}0\cdot (-\infty)\text{&rdquo; are indefinite forms}$$
which is to say that the value of the limit of such a product cannot be determined without further information. 

We can build some intuition for this fact by asking a slightly simpler question: what happens when you multiply a big number and a small number? 
Consider the following examples:

$$\begin{array}{ccccc}
\textsf{big} & \times & \textsf{small} & = & \textsf{???}\\\\[6pt]
10^{100} & \times & 10^{-80} & = & 10^{20}\\\\[2pt]
10^{80} & \times & 10^{-100} & = & 10^{-20}\\\\[2pt]
10^{100} & \times & 10^{-100} & = & 1
\end{array}$$

In each of these examples we have a big number multiplied by a small number, and the resulting product might run anywhere along the magnitude spectrum. Applying this principle to 
$$\lim\_{x\to a} \big( f(x)\cdot g(x)\big)$$
we see that if (as $x$ approaches $a$) we know that the values of $f$ get closer to zero while the the values of $g$ get arbitrarily large, there is simply not information to determine the behavior of the resulting product $f(x)\cdot g(x)$. 

Fortunately, it is very easy to construct examples that reveal the indeterminacy we are discussing.

{{% inhead %}}Example H: An instance of $0 \cdot \infty = \infty${{% /inhead %}}

{{% narration %}}

Suppose that 
$$f(x) = x^2\qquad\text{and}\qquad g(x) = \frac 1{x^4}$$
Clearly 
$$\lim\_{x\to 0} f(x) = 0
\qquad\text{and}\qquad 
\lim\_{x\to 0}g(x) = \infty$$ 
and we note that 
\begin{align}
\lim\_{x\to 0} \big( f(x)\cdot g(x)\big)
 & = \lim\_{x\to 0} \left( x^2 \cdot \frac 1{x^4}\right)\\\\[4pt]
 & = \lim\_{x\to 0} \left( \frac 1{x^2} \right) = \infty
\end{align}

{{% /narration %}}

{{% inhead %}}Example I: An instance of $0 \cdot \infty = 0${{% /inhead %}}

{{% narration %}}

Suppose that 
$$f(x) = x^4\qquad\text{and}\qquad g(x) = \frac 1{x^2}$$
Clearly 
$$\lim\_{x\to 0} f(x) = 0
\qquad\text{and}\qquad 
\lim\_{x\to 0}g(x) = \infty$$ 
and we note that 
\begin{align}
\lim\_{x\to 0} \big( f(x)\cdot g(x)\big)
 & = \lim\_{x\to 0} \left( x^4 \cdot \frac 1{x^2}\right)\\\\[4pt]
 & = \lim\_{x\to 0} \left( x^2 \right) = 0
\end{align}

{{% /narration %}}


{{% inhead %}}Example J: An instance of $0 \cdot \infty = 7${{% /inhead %}}

{{% narration %}}

Suppose that 
$$f(x) = 7x^2\qquad\text{and}\qquad g(x) = \frac 1{x^2}$$
Clearly 
$$\lim\_{x\to 0} f(x) = 0
\qquad\text{and}\qquad 
\lim\_{x\to 0}g(x) = \infty$$ 
and we note that 
\begin{align}
\lim\_{x\to 0} \big( f(x)\cdot g(x)\big)
 & = \lim\_{x\to 0} \left( 7x^2 \cdot \frac 1{x^2}\right)\\\\[4pt]
 & = \lim\_{x\to 0} \left( 7 \right) = 7
\end{align}
It is worth mentioning here a few subtle issues about domain restrictions and limits. It is important to recognize that the product function $f(x)\cdot g(x)$ is not the constant function $13$ --- in fact, the function 
$$f(x) \cdot g(x) = 7x^2 \cdot \frac 1{x^2}$$
has domain $\mathbb R-\{0\}$, being the intersection of the domains of $f$ and $g$. It follows that the graph of $f\cdot g$ is the horizontal line $y=7$ with the point $(0,7)$ removed. 

{{< cfig src="/img/infinite-limit-laws/infinite-limit-laws/zero_times_inf_eq_7.png" width="80%" >}}

You should be able to imagine how to fiddle with this example to arrive at an instance of &ldquo;$0\cdot \infty = L$&rdquo;, where $L$ is any real number of your choosing.

{{% /narration %}}

{{% inhead %}}Example K: An instance of $0 \cdot \infty$ diverging wildly{{% /inhead %}}

{{% narration %}}

Consider the functions 
$$f(x) = x^2\sin(1/x) 
\qquad\text{and}\qquad 
g(x) = \frac 1{x^2}$$
On the one hand it is clear that 
$$\lim\_{x\to 0} g(x) = \infty$$
On the other hand, the fact that 
$$\lim\_{x\to 0} f(x) =  
 \lim\_{x\to 0} x^2\sin(1/x)  = 0$$
is 
{{% sidenote %}}In the future we will learn about the &ldquo;Squeeze Theorem&rdquo;, a result that will allows us to quickly verify that $\lim\limits\_{x\to 0} f(x) = 0$.{{% /sidenote %}}
perhaps far from obvious to you. We will be content for now to let the <span class="etxttt">desmos</span> plot below provide the graphical evidence for this. We note that 
\begin{align}
\lim\_{x\to 0} \big( f(x)\cdot g(x)\big)
 & = \lim\_{x\to 0} \left( x^2\sin(1/x) \cdot \frac 1{x^2}\right)\\\\[4pt]
 & = \lim\_{x\to 0} \left( \sin(1/x) \right) \quad \textsf{Diverges!}
\end{align}


{{< cfig src="/img/infinite-limit-laws/zero_times_inf_DNE.png" width="90%" >}}

{{% /narration %}}

## Summary of extended product laws

In summary, the sum law for products can be extended to include most cases where one or the other factors diverges to infinity or negative infinity. Written in the shortcut of indeterminate forms, these laws can be summarized via:
<span class="sidenote">This table should be read as follows:<br><br>
$\bullet$ 1st col is $\lim\limits\_{x\to a} f(x)$<br><br>
$\bullet$ 2nd col is $\lim\limits\_{x\to a} g(x)$<br><br>
$\bullet$ 3rd col is $\lim\limits\_{x\to a} (f(x)+g(x))$<br><br>
The symbol &ldquo;???&rdquo; indicates an indeterminate form. We are meant to use either the top or bottom symbols together from the choices offered by the hybrid symbols $\pm$ and $\mp$ on any particular row.</span>

{{< cfig src="/img/infinite-limit-laws/product_summary.png" width="70%" >}}



## One-sided applications

All of the extended laws described above may be applied from one side or the other of an argument. 

{{% inhead %}}Example L: One-sided application of extended limit laws{{% /inhead %}}

{{% narration %}}

Consider the functions 
$$f(x) = \frac 1x
\qquad\text{and}\qquad 
g(x) = \cot^2 x$$
Find the one sided limits
$$\lim\_{x\to 0^-}\big(f(x)\cdot g(x)\big) 
\qquad\text{and}\qquad 
\lim\_{x\to 0^+}\big(f(x) \cdot g(x) \big)$$

{{% inhead %}}Solution{{% /inhead %}} Let us recall the graphs of the cotangent function and the reciprocal function.

{{< cfig src="/img/infinite-limit-laws/one_sided.png" width="90%" >}}

Using our shorthand description of the extended limit laws, since &ldquo;$-\infty \cdot \infty = -\infty$&rdquo; we conclude that  
$$\lim\_{x\to 0^-} \left( \cot^2 x \cdot \frac 1x\right) = -\infty$$
and, since &ldquo;$\infty\cdot \infty = \infty$&rdquo;, 
$$\lim\_{x\to 0^+} \left( \cot^2 x \cdot \frac 1x\right) = \infty$$

{{% /narration %}}