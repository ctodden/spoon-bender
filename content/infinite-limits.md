---
title: "Infinite Limits"
date: 2018-03-09T23:38:14-05:00
---

# Infinite limits

<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/n2jkDD68JN0" frameborder="0" allowfullscreen></iframe>
</div>

## Limiting values

To assert that 
$$\lim\_{x\to a} f(x) = L$$
is to say that the value of $f(x)$ can be made to be arbitrarily close to the number $L$ by choosing arguments $x$ sufficiently close to $a$. The value $f(a)$ --- if it even exists --- is irrelevant to this issue. For example, in the graph below it appears to be the case that $\lim\limits_{x\to a} f(x) = L$. <span class="sidenote"></br>
Notice how it can be true that 
$$\lim\_{x\to a}f(x) = L$$ 
even when 
$$f(a) \neq L\\ !$$</span>

{{< cfig src="/img/infinite-limits/limit_example.png" width="70%" >}}

## How might a limit fail to exist?

Any particular limit might or might not exist, so let us take a moment to explore some ways a limit fails to exist. One simple way a limit fails to exist is when the left and right-hand limits both exist but do not equal each other. Consider, for example, the function $g$ graphed below.

{{< cfig src="/img/infinite-limits/one_sided_example.png" width="65%" >}}

From the graph it appears that 
$$\lim\_{x\to 3^-}g(x) = 4\qquad \text{and} \qquad 
\lim\_{x\to 3^+}g(x) = 1$$
in which case we conclude that 
$$\lim\_{x\to 3} g(x) \ \textsf{does not exist}$$

Here is a more exotic example. Consider the function 
$$f(x) = \sin\left(\tfrac 1x\right)$$
The domain of this function is $\mathbb R-\{0\}$, the set up nonzero real numbers, and we wish to consider the limiting value of $f(x)$ as $x$ approaches $0$.
Let us plot the graph over the interval $[-2.5,2.5]$.

{{< cfig src="/img/infinite-limits/sin_1_over_x_A.png" width="80%" >}}

It appears the graph is very &ldquo;active&rdquo; near $x=0$ so we might attempt to repeatedly  zoom in on this area in order to discover the limiting behavior. Unfortunately, the more we zoom the more intense becomes the activity.

{{< cfig src="/img/infinite-limits/sin_1_over_x_zoom.png" width="80%" >}}

What is going on? As $x$ gets closer to zero, the value of $\frac 1 x$ becomes arbitrarily large.
If we imagine $\frac 1x$ as being an _angle_ that we are feeding to the sine function, we realize that we are circling through angles faster and faster, so that the value of $\sin\left(\frac 1x\right)$ must oscillate _infinitely often_ as $x$ approaches zero.
<span class="sidenote">Think about it this way: the reciprocal of ${1}/{2}$ is $2$, the reciprocal of ${1}/{3}$ is $3$, and so on. As $x$ works its way to zero, the angle $1/x$ (which we are plugging into the sine function) must work its way past $1$, $2$, $3$, and so on.</span>
A consequence of this is that there can not possibly be a limiting value to which $f(x) = \sin\left(\frac 1x\right)$ settles --- that is, 
$$\lim_{x\to 0} \sin\left( \tfrac 1x \right) \ \textsf{does not exist}$$
By the way, this reasoning reveals that neither the left nor right-hand limits exist.

In truth, one tends not to see the type of behavior exhibited by the previous two examples. It is far more common that a limit fails to exist because it &ldquo;blows up&rdquo; --- that is, the values of the function become arbitrarily large. Before we turn to such &ldquo;infinite limits&rdquo; let us discuss a useful way to categorize real numbers as &ldquo;small&rdquo; or &ldquo;large&rdquo;. 

## Big numbers and small numbers

Suppose $x$ and $y$ are real numbers. If $x$ appears to the left of $y$ on the number line than we would say that &ldquo;$y$ is greater than $x$&rdquo;, or, equivalently, &ldquo;$x$ is less than $y$&rdquo;. 

{{< cfig src="/img/infinite-limits/number_line_A.png" width="80%" >}}

So consider, then, what happens when $x=-500$ and $y = 0.001$. Although we are comfortable saying &ldquo;$-500$ is less than $0.001$&rdquo;, it seems strange to assert that $-500$ is relatively &ldquo;small&rdquo; when compared to $0.001$. 

{{< cfig src="/img/infinite-limits/number_line_B.png" width="80%" >}}

What we are sensing is the conflict between competing notions of &ldquo;bigness&rdquo;. The
<span class="sidenote">It is a shame that the order relation is not known by a more faithful name. Although clunky to ear, the terms &ldquo;righter than/lefter than&rdquo; would in some respects be superior!</span>
 &ldquo;greater than/less than&rdquo; relation has to do with _relative order_ along the number line. But when we think of the _size_ of a number in isolation we are inclined to compare it to the number zero: it seems to square with our intuition to say a number is _small_ when it is relatively close to zero and is _large_ when it is relatively far away from zero. For example, suppose $x$ denotes the net profit or loss in dollars after a trip to the casino. We shall, of course, let negative values of $x$ stand for losses while positive values of $x$ will stand for profit. Then we might be inclined to attach the following descriptions to various possibilities:

<div>$$\begin{array}{cl}
x & \textsf{description}\\ \hline
500,000  & \text{large profit}\\
25 & \text{modest profit}\\
1 & \text{small profit}\\
-1 & \text{small loss}\\
-25 & \text{modest loss}\\
-500,000 & \text{large loss}
\end{array}$$</div>

For the purposes of the discussion that follows we shall make the following definitions: 
<ul>
<li> A real number $x$ will be deemed to be **small** if $-1 \lt x \lt 1$.</li>
<li> A real number $x$ will be deemed to be **big** of $x\lt-1$ or $x>1$.</li>
<li> We will say that &ldquo;$y$ is bigger than $x$&rdquo; precisely when $y$ is further away from zero than $x$ --- in other words, if and only if $|y| > |x|$.</li> 
<li> We will say that &ldquo;$y$ is smaller than $x$&rdquo; precisely when $y$ is closer to zero than $x$ --- in other words, if and only if $|y| \lt |x|$.</li> 
</ul>
Let's summarize our new definitions graphically. Here is the location of the small and big numbers:

{{< cfig src="/img/infinite-limits/big_and_small.png" width="80%" >}}

As far as comparing --- that is, deciding where to look for _bigger_ or _smaller_ numbers --- you would look to see the relative distance of the numbers from zero. Graphically, 

{{< cfig src="/img/infinite-limits/bigger_and_smaller.png" width="80%" >}}

Please remember that this notion of &ldquo;big and small&rdquo; does indeed conflict with &ldquo;greater than and less than&rdquo;. For instance, 
$$\pi \gt -13 \quad \text{and yet} \quad \text{$-13$ is bigger than $\pi$ !}$$
Why bother with all of this? Hopefully, the &ldquo;big and small&rdquo; definitions will make it easier to discuss reciprocation, infinite limits, and limit laws involving quotients of functions. 

## Reciprocation

Understanding
<span class="sidenote">The graph of the reciprocal function:
<img src="/img/infinite-limits/reciprocal_graph.png" width="65%"></span>
reciprocation is one of the handy skills that comes in handy all the time when trying to understand calculus problems. Taking the reciprocal (also known as _taking the multiplicative inverse_) of a nonzero number $x$ is simply the result of dividing that number into $1$. The graph of the reciprocal function is therefore the curve 
$$y=\frac 1x.$$ 
In light of our discussion of big and small numbers in the previous section, we can conveniently describe the action of the reciprocal function by saying:
<div class="centering" margin="48px 0px">
The reciprocal of a big number is small, and</br>
 the reciprocal of a small number is big.
</div>
Moreover, we can add <span class="sidenote">The reader is strongly encouraged to look at the graph of the reciprocal function and convince herself that these facts are correct!</span>
<div class="centering" margin="48px 0px">
The bigger the number, the smaller its reciprocal, and</br>
 the smaller the number, the bigger its reciprocal.
</div>
At the risk of being repetitive, let's capture this idea one more way:
<div class="centering" margin="48px 0px">
If $x$ is close to zero then $\frac 1x$ is far away from zero, and</br>
if $x$ is far away from zero then $\frac 1x$ is close to zero.
</div>
One last obvious but important observation: _reciprocation does not change the sign of a number_.


## Infinite limits

Consider now the limit 
$$\lim_{x\to 0} \frac 1{x^2}$$
It is clear we may not substitute $0$ for $x$, but we can try to analyze the behavior of the expression as $x$ approaches $0$. We note that as $x$ gets close to zero, $x^2$ becomes _smaller_, and so $\frac 1{x^2}$ becomes _larger_. Indeed, the value of $\frac 1{x^2}$ becomes _arbitrarily_ large as $x$ approaches zero. In this case, the limiting value of $\frac 1{x^2}$ fails to exist, but since it fails to exist in such a specific way --- that is, by growing without bound --- we usually write 
$$\lim_{x\to \infty} \frac 1{x^2} = \infty$$
This is an example of an _infinite limit_, and it manifests itself in the graph of $y = \frac 1{x^2}$ in the form of a &ldquo;volcano-like&rdquo; vertical asymptote:

{{< cfig src="/img/infinite-limits/limit_1_over_x_squared.png" width="80%" >}}

As you might guess, the reciprocal function itself does not have a single infinite limit at the origin, for the values of $\frac 1x$ remain negative or positive, depending on whether $x$ is to the left or right of the origin. It follows that 
$$\lim\_{x\to 0^-} \, \frac 1x = -\infty\qquad \text{and}\qquad 
 \lim\_{x\to 0^+} \, \frac 1x = \infty$$
and these infinite, one-sided limits are essentially just restatements of the observations we made in our discussion of reciprocation.

{{< cfig src="/img/infinite-limits/limit_1_over_x.png" width="80%" >}}

Notice that since the one-sided limits do not match --- even using the extended interpretation of being an &ldquo;infinite limit&rdquo; --- we are forced to conclude that 
$$\lim_{x\to 0} \, \frac 1x \quad \textsf{does not exist}$$

## Infinite limits: to exist, or not to exist?

When discussing limits there is sometimes a small but important ambiguity that can cause grief if one is not careful. This ambiguity has to do with what it means for a limit &ldquo;to exist&rdquo;. Most often, to say that 
$$\lim\_{x\to a} f(x)\quad \text{exists}$$
means that there is a _number_ $L$ for which 
$$\lim\_{x\to a} f(x) = L$$
Using this strict interpretation, it follows that 
$$\lim\_{x\to 0} \left(\, \tfrac 1{x^2} \,\right)$$
does not, technically, exist even though we write 
$$\lim\_{x\to 0} \left(\, \tfrac 1{x^2} \,\right) = \infty$$
By writing &ldquo;$=\infty$&rdquo; we are not suggesting that the limit exists --- in fact, we are stating precisely _the manner in which the limit fails to exist_!

Unfortunately, there are many contexts --- for example, when we study limit laws in the future --- when certain properties apply in the case of infinite limits. To take a simple example, we will learn that if 
$$\lim\_{x\to a} f(x) = \infty \qquad \text{and} \qquad 
\lim\_{x\to a} g(x) = \infty$$
then it follows that 
$$\lim\_{x\to a} \Big(\, f(x) + g(x) \,\Big) = \infty$$
When rules for handling infinite limits are spelled out, then one can be forgiven for having the distinct impression that such limits _exist_. Indeed, if you read enough math texts you are likely to read some version of this:
<div class="centering">
&ldquo;Suppose $\lim\limits\_{x\to a} f(x)$ exists and is finite&hellip;&rdquo;
</div>
An author who uses such a construction is implicitly conceding that the cases 
$$\lim\_{x\to a}f(x) = \infty \qquad \text{or} \qquad \lim\_{x\to a}f(x) = -\infty$$
fall in the category of limits that &ldquo;exist&rdquo;.

The upshot is that in any given context (reading a textbook, working with a classmate, talking to your teacher) you should do your best to figure out the ground rules as to what constitutes the &ldquo;existence&rdquo; of a limit.   

## The technical definition of an infinite limit

As is the case with finite limits, the definition of an infinite limit is rather technical.

{{% dbox title="Definition of infinite limit" %}}

$$\lim_{x\to a} f(x) = \infty\quad \text{(resp. $=-\infty$)}$$
<div class="centering">if and only if</div>
<span class="qquad"></span>For every $L\in \mathbb R$ there exists $\delta>0$ such that
$$0\lt |x-a|\lt \delta\quad\text{implies}\quad f(x) > L\quad \text{(resp. ${}\lt L$)}$$

{{% /dbox %}}


</br>
</br>
</br>


## Exercises

<div class = "pdf-ex-container">

<p  style=" margin: 12px auto 6px auto; font-family: Helvetica,Arial,Sans-serif; font-style: normal; font-variant: normal; font-weight: normal; font-size: 14px; line-height: normal; font-size-adjust: none; font-stretch: normal; -x-system-font: none; display: block;">   <a title="View First exercises on limits, Part 2 on Scribd" href="https://www.scribd.com/document/342313647/First-exercises-on-limits-Part-2?secret_password=G9QjkYFPfg5xTnZR1deO#from_embed"  style="text-decoration: underline;" >First exercises on limits, Part 2</a> by <a title="View Chris Odden's profile on Scribd" href="https://www.scribd.com/user/351577303/Chris-Odden#from_embed"  style="text-decoration: underline;" >Chris Odden</a> on Scribd<iframe class="scribd_iframe_embed" src="https://www.scribd.com/embeds/342313647/content?start_page=1&view_mode=scroll&access_key=key-CC8OIa2uo68WiOE17bma&show_recommendations=true" data-auto-height="false" data-aspect-ratio="0.7729220222793488" scrolling="no" id="doc_19634" width="100%" height="600" frameborder="0"></iframe>
</div>

{{% problem_environment %}}

{{% prob %}}The graph of a function $g$ is displayed below. Note that $g$ has vertical asymptotes at $x=3$ and $x=6$. Assuming all limits are as they appear, evaluate the following. (Each response should either be a number, $\infty$, $-\infty$, or &ldquo;DNE&rdquo;.)

{{< cfig src="/img/infinite-limits/limit_graph.png" width="90%" >}}

{{% columns 3 %}}
{{% part %}}$\displaystyle \lim_{x\to -5}g(x)${{% /part %}}
{{% part %}}$\displaystyle \lim_{x\to -8^+}g(x)${{% /part %}}
{{% part %}}$\displaystyle \lim_{x\to 8^-}g(x)${{% /part %}}
{{% /columns %}}
{{% columns 3 %}}
{{% part %}}$\displaystyle \lim_{x\to -2^-}g(x)${{% /part %}}
{{% part %}}$\displaystyle \lim_{x\to -2^+}g(x)${{% /part %}}
{{% part %}}$\displaystyle \lim_{x\to -2}g(x)${{% /part %}}
{{% /columns %}}
{{% columns 3 %}}
{{% part %}}$\displaystyle \lim_{x\to -6}g(x)${{% /part %}}
{{% part %}}$\displaystyle \lim_{x\to 0^+}g(x)${{% /part %}}
{{% part %}}$\displaystyle \lim_{x\to 4^-}g(x)${{% /part %}}
{{% /columns %}}
{{% columns 3 %}}
{{% part %}}$\displaystyle \lim_{x\to 6}g(x)${{% /part %}}
{{% part %}}$\displaystyle \lim_{x\to 3^+}g(x)${{% /part %}}
{{% part %}}$\displaystyle \lim_{x\to 3}g(x)${{% /part %}}
{{% /columns %}}
{{% /prob %}}

{{% prob %}}Based on evidence gathered from your calculator or online graphing utility, estimate both the left and right-hand limits at the indicated argument. <span class="sidenote">As in the previous problem, your answer should be either a number, $\infty$, $-\infty$, or &ldquo;DNE&rdquo;.

{{% columns 2 %}}
{{% part %}}$\displaystyle\lim_{x\to 0^{-/+}} \frac{1}{\ln(x+1)}${{% /part %}}
{{% part %}}$\displaystyle\lim_{x\to 0^{-/+}} \frac{|x|+x}{x^2}${{% /part %}}
{{% /columns %}}
{{% /prob %}}

{{% prob %}}Suppose $B$ and $C$ are some unknown constants, the function $f$ is defined by the formula $$f(x) = \frac 1{x^2 + Bx + C}\qquad \text{and}\qquad f(0)=1$$

{{% part %}}If the graph of $f$ has vertical asymptotes that are two units apart from each other, exactly where along the $x$-axis could these asymptotes be located?{{% /part %}}

{{% part %}}Write out all infinite left and right-hand limits --- that is, find all arguments a for which 
$$\lim\_{x\to a^-}f(x) = \pm \infty\qquad \text{or} \qquad \lim\_{x\to a^+} f(x) = \pm \infty$$
{{% /part %}}

{{% /prob %}}

{{% /problem_environment %}}

