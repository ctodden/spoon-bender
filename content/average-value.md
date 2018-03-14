---
title: "Average Value"
date: 2018-03-14T09:03:07-04:00
---



# Average value of a function

{{< mtube id="ysum8F8hsKQ" >}}

<br>

Suppose $f$ is a function that is continuous on the closed interval $[a,b]$. Various choices of arguments $x$ in the interval $[a,b]$ obviously lead to various values $f(x)$ of the function. A reasonable question might be: What is the _average_ value of $f(x)$ on the interval $[a,b]$? The goal of this discussion is to decide how we might _define_ the notion of the average value of a function $f$ on the interval $[a,b]$. We will first use an intuitively appealing --- but rather heuristic &mdash; argument to suggest a possible definition, and then use a more technical but rigorous argument to arrive at the same definition.

## Simple averages

To motivate our definition, let us recall the simple notion of averaging a finite collection of numbers. Given the $N$ numbers $x_1$, $x_2$, &hellip;, $x_N$ the *average* (or *mean*) of this collection is defined by setting 
$$x\_{\textsf{avg}} = \frac 1N\Big( \ x_1 + x_2 + \cdots + x_N\ \Big)$$ 
For example, the mean of the three numbers $3.6$, $4.0$, and $2.0$ is 
$$\frac 13(3.6 + 4 + 2) = \frac{9.6}{3} = 3.2$$ 
If we imagine rectangles whose heights represent the values of the three numbers, then the average may interpreted as the common height that would be obtained by redistributing height evenly among the three rectangles.

{{< cfig  src="/img/average-value/avg_example.png" width="80%" caption="Averaging as “redistribution”">}}


When we try to define the average value of $f$ on $[a,b]$ we run into an immediate problem: there are _infinitely many_ arguments in the interval $[a,b]$, so we will not be able to naively calculate the average of $f(x)$ using a simple expression such as 
$$\frac 1N \sum_{k=1}^N f(x_k)$$ 
The interpretation of average as an average height, however, is an idea that can readily be generalized in an intuitive fashion.

## The wave tank argument

Suppose the values of $f$ are all nonnegative so that the graph of $f$ lies on or above the $x$-axis. In this setting it seems clear that the notion of _average value_ of $f(x)$ should coincide with the _average height_ of the graph of $f$.

{{< cfig src="/img/average-value/avg_height.png" width="80%" caption="Average value of $f$ as average graph height" >}}

In order to picture how the height of the graph might be equally redistributed, imagine a frame in which a liquid is trapped, and suppose further that the top of the liquid is described by the graph of $f$.

{{< cfig src="/img/average-value/wave_box_setup.png" width="80%" >}}

It is clear that under the influence of gravity the liquid will redistribute itself into the shape of a rectangle. The key observation is that _the leveling process does not change the total area taken up by the liquid_. The height $h$ of the rectangle is, of course, the very number we are interested in calculating. The width $w$ of the rectangle is simply the width of the interval $[a,b]$ --- that is, $b-a$. The “pre-leveled” area can be calculated via the definite integral $\int_a^b f(x)\, dx$.

{{< cfig  src="/img/average-value/wave_box.png" width="80%" caption="Two methods for calculating the area taken up by the liquid" >}}

All that remains is to solve for $h$ in terms of the other known quantities, and we find that 
$$\textsf{average height} = h = \frac 1w \cdot A = \frac 1{b-a} \int_a^b f(x)\, dx$$ 
You may find this to be a compelling argument for defining the average value of $f$ in just this way; however, there is a serious weakness in this line of thought --- namely, that the value of the function needed to be nonnegative in order to picture a liquid redistributing itself in a frame. Let's look for a more abstract argument that works for general (i.e., possibly negative-valued) functions and winds up leading us explicitly through Riemann sums on our way to the definite integral.

## The Riemann sum argument

One might hope to approximate the average value by averaging $f(x)$ for a “representative” sampling of arguments $x$ in the interval $[a,b]$. Suppose, for example, that we subdivide $[a,b]$ into $N$ equal subintervals and let $x_k^\*$ denote the midpoint of the $k$th subinterval. By averaging $f(x_k^\*)$ we should presumably arrive at a reasonable approximation of the average value of $f$ on $[a,b]$.

{{< cfig  src=src="/img/average-value/sample_avg.png" width="80%" caption="Sampling arguments and values uniformly within the interval $[a,b]$" >}}

You might notice this calculation seems to be relatively close in form to the calculation of a Riemann sum. Indeed, we observe the common width $\Delta x$ of each subinterval is equal to $(b-a)/N$, and so we can write
$$\begin{align}
\frac 1N \sum_{k=1}^N f(x\_k^\*) 
&= \sum\_{k=1}^N \left( \ f(x\_k^\*)\frac 1{N} \ \right)&& \text{(factor $\tfrac 1N$ into sum)}\\\\[10pt]
&= \sum\_{k=1}^N \left( \ f(x\_k^\*)\frac 1{N} \ \right)\cdot \frac{b-a}{b-a}\\\\[10pt]
&= \frac 1{b-a}\sum\_{k=1}^N \left( \ f(x\_k^\*)\frac {b-a}{N} \ \right) && \text{(factor $b-a$ into sum)}\\\\[10pt]
&= \frac 1{b-a}\sum\_{k=1}^N \left( \ f(x\_k^\*)\Delta x\ \right) && \text{(since $\Delta x = \frac {b-a}N$)}
\end{align}$$
In other words, a reasonable way to approximate the average value of $f$ on an interval is to calculate a midpoint sum and then divide by the width of the interval.

{{< cfig src="/img/average-value/avg_val_approximation.png" width="80%" caption="Approximating the average value via a Riemann sum" >}}

Of course, by allowing $N$ to go to infinity we should presumably arrive at better and better approximations of the average value. We note that  
\begin{align}
\lim\_{N\to \infty} \, 
&  \frac 1{b-a} \sum\_{k=1}^N f(x\_k^\*)\Delta x\\\\[0pt]
 & = \frac 1{b-a} \lim\_{N\to \infty}\,\sum\_{k=1}^N f(x\_k^\*)\Delta x
 && \text{(constant multiple rule for limits)}\\\\[8pt]
 & = \frac 1{b-a}\int\_a^b f(x)\, dx
 && \text{(definition of definite integral)}
 \end{align}
and so we are inspired to _define_ the average value of $f$ on $[a,b]$ by setting

{{< cfig src="/img/average-value/avg_value_definition.png" width="80%" >}}


## An example
Let us calculate the average value of $y = \sin x$ on the interval $[0,\pi]$. The average value formula is easy to apply in this setting, and we obtain 
\begin{align}
\textsf{avg val} &= \frac 1{\pi} \int\_0^\pi \sin x\, dx\\\\[8pt]
 & = \frac 1\pi \Big( -\cos \pi - (-\cos 0)\Big)\\\\[8pt]
 & = \frac 2\pi \approx 0.637
\end{align} 
By graphing both the curve $y = \sin x$ and the line $y=2/\pi$, we see that the “wave tank” interpretation seems to be reasonably be born out. 

{{< cfig src="/img/average-value/avg_val_worked_example.png" width="80%" >}}

## Exercises

<br>

{{% problem_environment %}}

{{% pwrap %}}
{{% prob %}}Find the *exact* average value of each of the following functions on the indicated interval.{{% /prob %}}
{{% part %}}The function $f(x) = x^2$ on the interval $[0,3]${{% /part %}}
{{% part %}}The function $f(x) = \dfrac 1x$ on the interval $[1,5]${{% /part %}}
{{% part %}}The function $f(x) = e^x$ on the interval $[-1,1]${{% /part %}}
{{% /pwrap %}}

{{% pwrap %}}
{{% prob %}}Use a calculator or software to approximate <span class="sidenote">You should figure out how to use the software to set appropriate minimum and maximum values along the horizontal axes in order to get a compelling graph.</span> the indicated average values. Plot both the function and the line $y=K$ (where $K$ is the average value calculated) and make sure the graph looks correct to you in light of the “wave tank” discussion above.{{% /prob %}}
{{% part %}}The function $f(x) = xe^{-x}$ on the interval $[0,5]${{% /part %}}
{{% part %}}The function $f(x) = \arctan x$ on the interval $[0,20]${{% /part %}}
{{% part %}}The function $f(x) = -\frac 14 x^3 + x^2 - 2$ on the interval $[0,3]${{% /part %}}
{{% /pwrap %}}


{{% pwrap %}}
{{% prob %}}Evaluate the following average values *exactly*. <span class="sidenote">Hint: If you carefully think about the graph of each function then you should be able to expend minimal effort in evaluating these average values! Special hint for part \(c\): $$\cos^2 x = \tfrac 12 + \tfrac12\cos(2x).$${{% /prob %}}
{{% part %}}The function $f(x) = \sqrt{1-x^2}$ on the interval $[-1,1]${{% /part %}}
{{% part %}}The function $f(x) = x^3$ on the interval $[-\frac{e^2}{\pi},\frac{e^2}{\pi}]${{% /part %}}
{{% part %}}The function $f(x) = \cos^2 x$ on the interval $[0,2\pi]${{% /part %}}
{{% /pwrap %}}

{{% pwrap %}}
{{% prob %}}Consider the function $f(x) = 1 - e^{-x}$.{{% /prob %}}
{{% part %}}Let $\mu_K$ denote  the average value of $f$ on the interval $[0,K]$. Find $\mu_K$ in terms of $K$.{{% /part %}}
{{% part %}}Evaluate $\displaystyle \lim_{K\to \infty} \mu_K$. <span class="sidenote">L'Hosiptal's Rule might help for part (b), but you don't really need it.</span> Use a graph of $f$ to convince yourself that your answer makes sense.{{% /part %}}
{{% /pwrap %}}

{{% pwrap %}}
{{% prob %}}Consider the function $g(x) = \sin x$.{{% /prob %}}
{{% part %}}Let $\mu_K$ denote the average value of $g$ on the interval $[0,K]$. Find $\mu_K$ in terms of $K$.{{% /part %}}
{{% part %}}Evaluate <span class="sidenote">An application of the Squeeze Theorem might help you evaluate the limit in part (b).</span> $\displaystyle \lim_{K\to \infty} \mu_K$. Use a graph of $g$ to convince yourself that your answer makes sense.{{% /part %}}
{{% /pwrap %}}

{{% pwrap %}}
{{% prob %}}Suppose $f$ is <span class="sidenote">Hint: Two words --- _concavity_ and _trapezoid_.</span>a positive-valued, continuous function on the interval $[a,b]$, and suppose further that $f^{\prime\prime}(x)\gt 0$ whenever $a\lt x\lt b$. By imagining the graph of such a function and interpreting “average value” as “average height of the graph”, show that 
$$\begin{gathered}\textsf{average value of}\\\\[-4pt]
\textsf{$f$ on $[a,b]$}\end{gathered} \ \lt \ \frac{f(a)+f(b)}2$${{% /prob %}}
{{% /pwrap %}}

{{% pwrap %}}
{{% prob %}}Let us say that an interval $[a,b]$ is _tetrogonophilic_ with <span class="sidenote">The term _tetrogonophilic_ is a made-up word based on Greek and designed to mean “has an affinity for a square”.</span>respect to the function $f$ if the average value of $f$ on $[a,b]$ is equal to $b-a$. In terms of the “wave tank” interpretation, if $[a,b]$ is tetrogonophilic with respect to $f$ then the liquid enclosed by the graph of $f$ settles into a square, as pictured below{{% /prob %}}

{{< cfig src="/img/average-value/tetrogonophilic.png" width="80%" >}}

{{% part %}}If the interval $[0,K]$ is tetrogonophilic with respect to $f(x)=x^2$, then what is the value of $K$?{{% /part %}}
{{% part %}}Find a simplified equation in $a$ and $b$ that guarantees the interval $[a,b]$ is tetrogonophilic with respect to $f(x)=x^2$. Use software to graph this equation. Do you recognize the shape of the graph?{{% /part %}}
{{% part %}}Find <span class="sidenote">Warning: You will likely need to use implicit differentiation for parts \(c\) and (d).</span>the <strong>exact</strong> values of $a$ and $b$ for which $[a,b]$ is tetrogonophilic with respect to $f(x)=x^2$ and $b$ is as far to the right as possible.{{% /part %}}
{{% part %}}Find the <strong>exact</strong> values of $a$ and $b$ for which $[a,b]$ is tetrogonophilic with respect to $f(x)=x^2$ and $a$ is as far to the right as possible.{{% /part %}}
{{% part %}}The graph <span class="sidenote">To make part (e) more challenging you might try to _prove_ the graph is symmetric across the line $y=-x$.</span>you found in part (b) appears to be symmetric across the line $y=-x$. Assuming this is true, then use your answers from parts \(c\) and (d) to quickly find the exact values of $a$ and $b$ for which $[a,b]$ is tetrogonophilic with respect to $f(x)=x^2$ and i) $a$ is as far to the _left_ as possible, and ii) $b$ is as far to the _left_ as possible.{{% /part %}}  
{{% part %}}If you have come this far in this problem then you may as well try this one as well! Find the _widest_ interval $[a,b]$ that is tetrogonophilic with respect to $f(x)=x^2$. Can you prove you are correct?{{% /part %}}
{{% /pwrap %}}

{{% pwrap %}}
{{% prob %}}Suppose you have three cubes of edge lengths 1, 2, and 3.{{% /prob %}}
{{% part %}}What is the average edge length of the three cubes?{{% /part %}}
{{% part %}}What is the average volume of the three cubes?{{% /part %}}
{{% part %}}In what way do these answers seem to contradict each other? How can you reconcile the apparent contradiction?{{% /part %}}
{{% /pwrap %}}

{{% pwrap %}}
{{% prob %}}Let <span class="sidenote"><img src="/img/average-value/avg_val_horn.png" width="80%"></span>$\mathcal H$ denote the  “horn” obtained by rotating the graph of $y=e^{-x}$ (from $x=0$ to $x=3$) about the $x$-axis. Note that cross sections perpendicular to the $x$-axis are disks.{{% /prob %}}
{{% part %}}By cutting the horn along a plane perpendicular to the $x$-axis we obtain circular disks. The resulting cross-sectional area is therefore a function of $x$. As a function of $x$, what is the average cross-sectional area of $\mathcal H$?{{% /part %}}
{{% part %}}As a function of $x$, what is the average radius of these disks?{{% /part %}}
{{% part %}}In what way do these answers seem to contradict each other? How can you reconcile the apparent contradiction?{{% /part %}}
{{% /pwrap %}}

{{% pwrap %}}
{{% prob %}}This <span class="sidenote"><img src="/img/average-value/california_and_nevada.png" width="80%"></span>problem will require you to find both the area (in square kilometers) and population of the sates of California and Nevada.{{% /prob %}}
{{% part %}}Calculate the <strong>population density</strong> (measured in people per square kilometer) of both California and Nevada, and let these numbers be denoted $\rho_C$ and $\rho_N$, respectively. In what way is population density an “average”?{{% /part %}}
{{% part %}}Suppose now we regard the two states together as one region, and let its population density be denoted $\rho_R$. Calculate $\rho_R$.{{% /part %}}
{{% part %}}Is it true that $$\rho_R = \frac{\rho_C + \rho_N}2\ ?$$ Why or why not? Is it nevertheless true that $$\rho_R \approx \frac{\rho_C + \rho_N}2\ ?$${{% /part %}}
{{% part %}}The reciprocal of population density is measured in square kilometers per people, and might be called “land distribution” (i.e., the amount of land that could be equally distributed among all inhabitants). Calculate $\lambda_C$ and $\lambda_N$, the respective land distributions of both California and Nevada, and also calculate $\lambda_R$, the land distribution of the entire region.{{% /part %}}
{{% part %}}You should notice that the average of $\lambda_C$ and $\lambda_N$ is *not* a good approximation to $\lambda_R$ --- that is, 
$$\lambda_R \not\approx \frac{\lambda_C + \lambda_N}2$$ 
Why is this the case?{{% /part %}}
{{% part %}}Suppose you wanted to choose two states $S$ and $T$, with $R$ denoting the combined region. What criteria would you use to find $S$ and $T$ that behave _opposite_ to California and Nevada --- that is, for which $$\rho_R \not\approx \frac{\rho_S + \rho_T}2\quad \text{and} \quad \lambda_R \approx \frac{\lambda_S + \lambda_T}2$$ Can you find two states that satisfy these criteria?{{% /part %}}
{{% /pwrap %}}

{{% pwrap %}}
{{% prob %}}The goal of this problem is to introduce the _Mean Value Theorem for Integrals of Continuous Functions_. Part (a) suggests how the “discrete” version of the theorem fails.{{% /prob %}}
{{% part %}}Suppose a quiz is administered to a class. True or False: The score obtained by at least one of the students is identical to the class average.{{% /part %}}
{{% part %}}Prove that is $f$ is _continuous_ on $[a,b]$, then there is at least one argument $c$ (with $a\lt c \lt b$) for which $f({c})$ is identical to the average value of $f$ in $[a.b]$.{{% /part %}}
{{% part %}}Find a _discontinuous_ function $f$ on the interval $[a,b]$ for which the MVT for Integrals fails to hold. In other words, for all arguments $c$ in $[a,b]$, 
$$f({c}) \neq \frac 1{b-a}\int_a^b f(x)\, dx$$ 
Hint: Imagine a function that is constant on one subinterval of $[a,b]$ and then constant again (with another value) on the rest of $[a,b]${{% /part %}}
{{% /pwrap %}}



{{% /problem_environment %}}