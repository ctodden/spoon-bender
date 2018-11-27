---
title: "Definition of Limit"
rawtitle: "definition-of-limit"
date: 2018-11-27T15:36:51-05:00
draft: false
---


# The definition of limit

{{< mtube id="c4yJhhGwwzA" >}}

<br>

The idea of &ldquo;limiting behavior&rdquo; &mdash; or _limit_ for short &mdash; lies at the heart of calculus. Let us try to understand what it means to assert 
$$\lim_{x\to a} f(x) = L$$
The way we read this notation is: &ldquo;the limiting value of $f(x)$ as $x$ approaches $a$ is equal to $L$.&rdquo; This indicates that we can make the value of $f(x)$ arbitrarily close &mdash; that is, as close as we wish &mdash; to the number $L$ by forcing the argument $x$ to be very close (but not equal!) to $a$. This last catch is subtle but critical: the limiting value of a function as $x$ approaches $a$ has _nothing_ to do with the behavior of the function when $x=a$! Rather, limiting values have _everything_ to do with the behavior of the function as the argument $x$ gets _close_ to $a$.


## An extended example

The idea of &ldquo;limiting behavior&rdquo; &mdash; or _limit_ for short &mdash; lies at the heart of calculus. Let us try to understand what it means to assert 
Let us illustrate the notion of limit in action with the following function.
<span class="sidenote">As we shall below, graphical information should be taken with a grain of salt. We shall assume, for the purpose of this extended example, that the graph exhibits the &ldquo;true behavior&rdquo; of $f$, and that there is no surprise behavior of the function that could only be found by zooming in on the graph.</span>

{{< cfig  src="limit_graph_B.png" width="95%">}}


<span class="inlinehead">Example A</span> <span class="quad"></span> Evaluate $\displaystyle \lim_{x\to 3} f(x)$

<div class="narration"> 

<span class="inlinehead">Solution:</span> By
<span class="sidenote">It is important to reiterate that we are assuming the graphical information here is _what it appears to be_, and that it is not the case, for example, the graph of $f$ actually crosses the $x$-axis at $x=2.99999$.</span> 
examining the graph of $f$ near the argument $x=3$, we observe that the value of $f(x)$ seems to get closer and closer to zero as $x$ approaches $3$. We note in passing that $f(3)=0$, but this is _irrelevant_ for the purposes of evaluating the limit as $x$ approaches $3$! We conclude that 
$$\lim_{x\to 3} f(x) = 0$$

</div>
 
<span class="inlinehead">Example B</span> <span class="quad"></span> Evaluate $\displaystyle \lim_{x\to 6} f(x)$

<div class="narration"> 

<span class="inlinehead">Solution:</span> In this case we must examine that part of the graph near the argument $x=6$. For arguments $x$ near &mdash; but not equal to &mdash; $6$, it appears that the values of $f(x)$ are close to $4$. Indeed, it appears that the closer $x$ gets to $6$, the closer $f(x)$ gets to $4$. We conclude that 
$$\lim_{x\to 6} f(x) = 4$$
Please note that $f(6) = 1$, but as we have stressed previously, the value of $f$ when $x=6$ is irrelevant to the question of evaluating the limiting value of $f(x)$ as $x$ approaches $6$.

</div>

<span class="inlinehead">Example C</span> <span class="quad"></span> Evaluate $\displaystyle \lim_{x\to 0} f(x)$

<div class="narration"> 

<span class="inlinehead">Solution:</span> Now we focus on the region of the graph near $x=0$. It appears that by making $x$ close enough to $0$ we can force the value of $f(x)$ to get arbitrarily close to $-1$. We write 
$$\lim_{x\to 0} f(x) = -1$$
Once again, we stress that the behavior of $f$ when $x=0$ is irrelevant to the question of the limiting value as $x$ approaches $0$, and in this example it appears that $0$ is not even in the domain of $f$ &mdash; in other words, $f(0)$ is undefined!

</div>

<span class="inlinehead">Example D</span> <span class="quad"></span> Evaluate $\displaystyle \lim_{x\to -3} f(x)$

<div class="narration">

<span class="inlinehead">Solution:</span> Now we turn to the region of the graph near $x=-4$.
<span class="sidenote">We may also have observed that $f(-4) = 1$, but this fact, of course, is irrelevant to the question at hand!</span>
We note that for arguments $x$ slightly _less_ than $-4$, the value of $f(x)$ appears to be close (in fact, equal!) to $2$. On the other hand, for arguments slightly _greater_ than $-3$, the value of $f(x)$ is close to $1$. For the purposes of finding a limit we have a problem. Unlike the three previous examples, there is no number $L$ to which we can force the value  of $f(x)$  by making $x$ get close to $-3$. After all, knowing that $x$ is exceedingly close to $-3$ guarantees that either 
$$f(x) \approx 1 \quad \text{or}\quad f(x)\approx 2$$
but only one of these is true, and this depends on which side of $-3$ we have chosen $x$. The bottom line is that we declare 
$$\lim_{x\to -3} f(x) \ \textsf{does not exist}$$

</div>
 
## One-sided limits

Let us return to the case of Example D above. Had we restricted our attention to either one side or the other of the argument $-3$, then there would have been no ambiguity. In other words, it seems fair to declare that &ldquo;the limiting value of $f(x)$ as $x$ approaches $-3$ from the left is equal to $2$&rdquo;. We would write this using a superscript &ldquo;$-$&rdquo; on the &ldquo;target argument&rdquo; to indicate that we wish to approach _from the left_:
$$\lim\_{x\to -3^-} f(x) = 2$$
Similarly, we say that &ldquo;the limiting value of $f(x)$ as $x$ approaches $-3$ from the right is equal to $1$&rdquo; and we indicate this by writing
$$\lim\_{x\to -3^+} f(x) = 1$$

{{< cfig  src="one_sided.png" width="80%">}}

Generally, the only way a limit can exist is for both the left and right-hand limits to exist and equal each other. In other words, 
$$\lim\_{x\to a} f(x) = L 
\quad \iff \quad
\left\\{ \begin{gathered}
\lim\_{x\to a^-} f(x) = L\\\\
\text{and}\\\\
\lim\_{x\to a^+} f(x) = L
\end{gathered}\right\\}$$

## The role of numerical evidence

Consider the function 
$$g(x) = \pi + \tan x + \frac 1{10^{20}\,x^2}$$
Suppose you are interested in evaluating 
$$\lim_{x\to 0} g(x)$$
By using a spreadsheet or other type of software you might gather selected values of the function for arguments $x$ near to $0$ &mdash; for example,

{{< cfig  src="fakeout_table.png" width="35%">}}

Based on the evidence on display, it might seem reasonable to guess that the value of $g$ approaches $\pi$ as $x$ gets closer and closer to zero. In other words, we might expect 
$$\lim_{x\to 0} g(x) = \pi$$
As it turns out, however, the behavior of $g(x)$ changes rather dramatically as we let $x$ get even closer to $0$. If you look carefully at the third summand in the formula for $g(x)$ you should see the source of this behavior: if $x$ is close enough to zero, then $10^{20}\cdot x^2$ should also be relatively close to zero, and so the reciprocal of $10^{20}\cdot x^2$ should then be a relatively large number. This effect should become more pronounced as $x$ gets even closer to zero. Let's create a new table that reflects this behavior.

{{< cfig  src="fakeout_table_B.png" width="45%">}}


As it turns out, 
$$\lim\_{x\to 0} g(x) \quad \textsf{does not exist}$$
because there is no limiting value to which $g(x)$ tends as $x$ approaches zero. In fact, we write <span class="sidenote">We shall study such so-called &ldquo;infinite limits&rdquo; in a future lesson.</span>
$$\lim_{x\to 0} g(x) = \infty$$
to indicate that the value of $g(x)$ becomes arbitrarily large as $x$ approaches $0$.

As a general rule, tables do not provide nearly enough information from which to draw conclusions about the behavior of a function. As you can see in the simple diagram below, knowing a finite number of points on the graph of a function simply does not tell you (by itself) very much about the behavior of the function elsewhere.
<span class="sidenote">In the presence of more information, however, knowing four points might tell you quite a bit. For instance, if you knew the function were both &ldquo;increasing&rdquo; and &ldquo;concave down&rdquo;, then you can start to deduce many useful facts. These are both ideas we will study in the near future.</span>  

{{< cfig  src="four_points.png" width="80%">}}

 
## The role of graphical evidence

The graph of a function provides striking and useful information about the function; however, due to limitations on graphing software, &ldquo;hidden&rdquo; behavior of the function that depends on the scale of your graphing window, or both, a graph can sometimes be misleading. In fact, graphical information by itself is never sufficient to evaluating a limit. Consider the following example. A function $f$ has been entered on the TI-84 and plotted on a window at left. Suppose our goal is to evaluate the limit of $f(x)$ as $x$ approaches $0$. In the left-hand window it certainly appears to be the case that 
$$\lim\_{x\to 0}f(x) = 5$$
However, watch what happens when we perform an horizontal &ldquo;accordion zoom&rdquo; by a factor of $100$ &mdash; that is, we create a new window by dividing the minimum and maximum values of $x$ by a factor of $100$. We now observe behavior near $x=0$ that was &ldquo;hidden&rdquo; by the scale of the previous window, and this new behavior might lead us to believe that 
$$\lim_{x\to 0}f(x) = 3$$

{{< cfig  src="tricky_limit.png" width="90%">}}

At
<span class="sidenote">As we shall eventually learn, however, in the presence of other facts you might know about the function (e.g., that it is a &ldquo;continuous&rdquo; function) then a graph conveys very powerful information.</span>
this point you might rightly guess that a function might have &ldquo;infinitely nested&rdquo; behaviors that lurk about at all scales. (In other words, the more you zoom the more the graph changes its apparent limiting behavior.) The upshot is that the information displayed in a single graphing window is never, by itself, sufficient information for you to evaluate a limit.
 
On the other hand, this example was rigged to make a point. The good news is that almost all &ldquo;naturally occurring&rdquo; functions you will need to analyze do not display such pathological behavior. You will usually be able to find a single graphing window that faithfully reflects the behavior of the function. But even then you will need to understand the laws of limits to be able to evaluate limits conclusively.


## The official definition of limit 

Based on the discussion above, you might have the impression that working with limits simply involves a lot of conjecture and hope. After all, as yet there seems to be no explicit way to evaluate a limit! In fact, there is an official definition that was adopted by mathematicians in the 19th century. It is a rather technical and subtle statement. In its full glory, it reads as follows:

{{% dbox title="Definition of limit" %}}
$$\lim\_{x\to a} f(x) = L$$
if and only if</br></br>
<span class="qquad"></span>For every $\epsilon>0$ there exists $\delta>0$ such that
$$0<|x-a|<\delta\quad\text{implies}\quad |f(x)-f(a)|<\epsilon$$ 
{{% /dbox %}}

All
<span class="sidenote">There are mathematicians who disagree completely with this analogy, and claim that a true understanding of limits &mdash; and therefore calculus &mdash; can only occur after a student has been forced to wrestle with $\epsilon/\delta$ arguments.</span>
of modern calculus is built on a foundation of such &ldquo;epsilon/delta&rdquo; statements.  If you take a course advertised as &ldquo;advanced calculus&rdquo; or &ldquo;real analysis&rdquo; you will most likely work your way through the standard calculus  syllabus once more, this time paying close attention to how such $\epsilon/\delta$ statements are used to prove each new theorem.  Fortunately, it is possible to learn and understand a great deal of calculus without having to come to terms with $\epsilon/\delta$ arguments. The analogy here is that one does not need to know how a motor works to be able to drive a car successfully. 

## Summary

&ldquo;Limit-like&rdquo; ideas have been around since antiquity, but it only in the 19th century that mathematicians arrived at a rigorous and satisfactory theory of limits. Understanding limits and being able to apply their


<ul>

    <li>A limit $\lim\limits_{x\to a} f(x)$ may or may not exist.</li> 

    <li>It is possible to restrict attention to one side or the other of an argument to consider so-called &ldquo;one-sided limits&rdquo; 
    $$\begin{gathered}
    \text{Left-hand limit:}\\ \lim_{x\to a^-} f(x)
    \end{gathered}\qquad 
    \begin{gathered}
    \text{Right-hand limit:}\\ \lim_{x\to a^+} f(x)
    \end{gathered}$$</li>

    <li>The left and right-hand limits may exist or not independent of each other, or exist and have different values.</li>

    <li>The limit $\lim\limits_{x\to a} f(x)$ exists if and only both one-sided limits exist and are equal to each other.

    <li>The limiting value of $f(x)$ as $x$ approaches $a$ <strong>has nothing to do with the value of $\boldsymbol{f(a)}$</strong>.  In fact, $f(a)$ be need not be defined &mdash; that is,  $a$ need not  be in the domain of $f$ for $\lim\limits_{x\to a}f(x)$ to exist.</li>

    <li>Numerical data &mdash; as in, a table of function values &mdash; can be useful to inspire a guess or provide evidence as to the value of a limit, but such data is never sufficient evidence for evaluating a limit with certainty.</li>

    <li>Although it seems to provide even more compelling evidence than numerical data, a computer-generated graph is also not sufficient evidence for evaluating a limit with certainty.</li>

    <li>The official definition of limit is somewhat complicated, and a throughly rigorous development of calculus must return again and again to so-called &ldquo;$\epsilon/\delta$&rdquo; statements; however, it is entirely possible to learn and apply a great deal of calculus (and even retain a fair degree of rigor) in the absence of such methods.</li>

</ul>


<br><br>

## Exercises

<br>

{{% problem_environment %}}

{{% pwrap %}}
{{% prob %}}The graph of a function $f$ is displayed below. Please note that the &ldquo;ellipsis&rdquo; (i.e., the symbol &ldquo;$\cdots$&rdquo;) indicates that the graph possesses &ldquo;infinitely oscillatory&rdquo; behavior from the left at the argument $x=-2$, and from both sides of the argument $x=6$. You may assume that if a feature of the graph appears to have integer coordinates, then it actually has those coordinates. (For example, you may assume that  $f(4) = 1$.)

{{< cfig  src="limit_graph.png" width="90%">}}

For each argument $a$ listed below, evaluate 
$$\lim\_{x\to a^-} f(x) ,\qquad \lim\_{x\to a^+}f(x), \qquad \text{and} \qquad \lim_{x\to a} f(x)$$

Each response should either be a number or DNE (i.e., &ldquo;does not exist&rdquo;).
{{% columns 3 %}}
{{% part %}}$a=-7${{% /part %}}
{{% part %}}$a=0${{% /part %}}
{{% part %}}$a=4${{% /part %}}
{{% /columns %}}
{{% columns 3 %}}
{{% part %}}$a=-6${{% /part %}}
{{% part %}}$a=-5${{% /part %}}
{{% part %}}$a=1${{% /part %}}
{{% /columns %}}
{{% columns 3 %}}
{{% part %}}$a=-2${{% /part %}}
{{% part %}}$a=3${{% /part %}}
{{% part %}}$a=6${{% /part %}}
{{% /columns %}}{{% /prob %}}


{{% /pwrap %}}


{{% pwrap %}}
{{% prob %}}Based on evidence gathered from your calculator or on-line graphing utility, estimate both the left and right-hand limits at the indicated argument. (As in the previous problem, your answer should be either a number, $\infty$, $-\infty$, or &ldquo;DNE&rdquo;.){{% /prob %}}

{{% columns 2 %}}
{{% part %}}$\displaystyle\lim_{x\to 2^{-/+}} \frac{\sin(4\pi x)}{\pi |x-2|}${{% /part %}}
{{% part %}}$\displaystyle\lim_{x\to 1^{-/+}} \frac{|2\cos\left( \frac {\pi x}2\right)|}{\ln x}${{% /part %}}
{{% /columns %}}

{{% part %}}$\displaystyle\lim_{x\to 0^{-/+}} \frac{x\cos (x^{-{1}/{3}})}{\tan(x/2)}${{% /part %}}

{{% /pwrap %}}




{{% pwrap %}}
{{% prob %}}Consider the piece-wise defined function $$f(x) = \begin{cases}\hfil x^2 & \text{if $x<0$}\\ \hfil 2 & \text{if $x=0$}\\ \hfil x-2 &\text{if $x>0$}\end{cases}$${{% /prob %}}


{{% part %}}Sketch a graph of $f$.{{% /part %}}

{{% part %}}Use your graph to guess the values of 
$$\lim\_{x\to 0}f(x),\qquad \lim\_{x\to 0^-}f(x), \qquad\text{and}\qquad \lim_{x\to 0^+}f(x)$${{% /part %}}


{{% /pwrap %}}


{{% pwrap %}}
{{% prob %}}By applying an &ldquo;accordion zoom&rdquo; away from the $y$-axis, gather enough evidence so that you can guess whether or not the following limits exist. (The simplest way to achieve such a zoom  effect is to change Xmin and Xmax inside the WINDOW area. On desmos, click on the &ldquo;wrench&rdquo; icon to change the minimum and maximum values of $x$.){{% /prob %}}

{{% columns 2 %}}
{{% part %}}$\displaystyle \lim_{x\to 0}\cos\left(\frac{4000\pi}{1+e^x}\right)${{% /part %}}
{{% part %}}$\displaystyle \lim_{x\to 0}\cos\left(\frac 1{1- \cos(10x)}\right)${{% /part %}}
{{% /columns %}}
{{% /pwrap %}}


{{% pwrap %}}
{{% prob %}}Consider the function
        $$f(x) = \frac{4\arctan \left( \frac 2\pi x\right) - \pi}{2\sin(2x)}$$
{{% /prob %}}

{{% part %}}Is $\pi/2$ in the domain of $g$?{{% /part %}}

{{% part %}}Use your calculator to estimate the limiting value of $g(x)$ as $x$ approaches $\pi/2$. Gather enough evidence so that you are fairly confident you have found the limit to the nearest $.00001${{% /part %}}

{{% part %}}Go to the web site [WolframAlpha](https://www.wolframalpha.com). Enter the number you found in part (b) and let WolframAlpha do its thing. Among the results you should see &ldquo;Possible closed forms&rdquo;. Can you guess the exact value of $\displaystyle \lim_{x\to \frac \pi 2}g(x)$?{{% /part %}}

{{% part %}}Try to ask [WolframAlpha](https://www.wolframalpha.com) directly what the limit is.  (Don't worry about the syntax of your request &mdash; just type in what seems reasonable. You might be surprised at how well the site interprets what you enter.){{% /part %}}

{{% /pwrap %}}



{{% /problem_environment %}}




