---
title: "Course Expectations"
date: 2018-09-03T12:32:00-04:00
draft: false
---

# Course expectations


## Prerequisites

Before studying calculus, all students should complete the equivalent of four years of secondary mathematics designed for college-bound students: courses which should prepare them with a strong foundation in reasoning with algebraic symbols and working with algebraic structures. Prospective calculus students should take courses in which they study algebra, geometry, trigonometry, analytic geometry, and elementary functions. These functions include linear, polynomial, rational, exponential, logarithmic, trigonometric, inverse trigonometric, and piecewise-defined functions. In particular, before studying calculus, students must be familiar with the properties of functions, the composition of functions, the algebra of functions, and the graphs of functions. Students must also understand the language of functions (domain and range, odd and even, periodic, symmetry, zeros, intercepts, and descriptors such as increasing and decreasing). Students should also know how the sine and cosine functions are defined from the unit circle and know the values
of the trigonometric functions at the numbers $0$, $\frac\pi 6$, $\frac\pi 4$, $\frac\pi 3$,  $\frac\pi 2$,  and their multiples.
Students who take AP Calculus BC should have basic familiarity with sequences and series, as well as some exposure to polar equations.

## Limits

Many calculus concepts are developed by first considering a discrete model and then the consequences of a limiting case. Therefore, the idea of limits is essential for discovering and developing important ideas, definitions, formulas, and theorems in calculus. Students must have a solid, intuitive understanding of limits and be able to compute various limits, including one-sided limits, limits at infinity, the limit of a sequence, and infinite limits. They should be able to work with tables and graphs in order to estimate the limit of a function at a point. Students should know the algebraic properties of limits and techniques for finding limits of indeterminate forms, and they should be able to apply limits to understand the behavior of a function near a point. Students must also understand how limits are used to determine continuity, a fundamental property of functions.

{{% problem_environment %}}

{{% pwrap %}}
{{% prob %}}Given a function $f$, the limit of $f(x)$ as $x$ 
approaches $c$ is a real number $L$ if $f(x)$ can be made arbitrarily close to $L$ by taking $x$ sufficiently close --- but not equal to --- the argument $c$. The usual notation for this is:
$$\lim\_{x\to c} f(x) = L$${{% /prob %}}
{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}The concept of a limit can be extended to include one-sided limits, limits at infinity, and infinite limits. Students should be able to makes sense of expressions such as
$$\lim\_{x\to a^+}f(x) = L,\quad\lim\_{x\to \infty} f(x) = L,\quad\text{and}\quad \lim\_{x\to c} f(x) = \infty$$
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}A limit might not exist for some functions at particular arguments $x$. Some ways that the limit might not exist are if the function is unbounded, if the function is oscillating near this value, or if the limit from the left does not equal the limit from the right. Students should understand why 
$$\lim\_{x\to 0} \frac 1{x^2} = \infty$$
while none of the following limits exist:
$$\lim\_{x\to 0} \sin\left( \tfrac 1x\right), \quad 
\lim\_{x\to 0}\frac{|x|}x, \quad \text{and} \quad \lim_{x\to 0} \frac 1x$$
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should be able to use graphical and numerical evidence to approximate the value of a limit or guess the limit does not exist.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}In evaluating limits students should be able to 

+ apply fundamental limit laws (e.g., sums, products, quotients)
+ apply algebraic manipulation
+ exploit continuity where appropriate in the context of a composition
+ apply trigonometric identities 
+ apply L'Hospital's Rule to indeterminate forms
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should be able to explain and describe asymptotic or unbounded behavior of functions using limits.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should be able to compare relative magnitudes and rates of change of functions using limits.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should know the definition of continuity at an argument --- that is, $f$ is continuous at $c$ if and only 
$$\lim_{x\to c} f(x) = f({c})$$
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should know that the basic functions of precalculus --- polynomial, rational, exponential, logarithmic, and trigonometric functions --- are all continuous on their domains.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should be familiar with various types of discontinuities --- namely, removable, jump, and infinite discontinuities. 
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should understand that continuity is an essential hypothesis in the Intermediate Value Theorem, the Extreme Value Theorem, and the Mean Value Theorem.
{{% /prob %}}{{% /pwrap %}}

{{% /problem_environment %}}


## Derivatives

Using derivatives to describe the rate of change of one variable with respect to another variable allows students to understand change in a variety of contexts. In AP Calculus, students build the derivative using the concept of limits and use the derivative primarily to compute the instantaneous rate of change of a function. Applications of the derivative include finding the slope of a tangent line to a graph at a point, analyzing the graph of a function (for example, determining whether a function is increasing or decreasing and finding concavity and extreme values), and solving problems involving rectilinear motion. Students should be able to use different definitions of the derivative, estimate derivatives from tables and graphs, and apply various derivative rules and properties. In addition, students should be able to solve separable differential equations, understand and be able to apply the Mean Value Theorem, and be familiar with a variety of real-world applications, including related rates, optimization, and growth and decay models.

{{% problem_environment %}}

{{% pwrap %}}{{% prob %}}Students should understand how the &ldquo;difference quotients&rdquo; 
$$\frac{f(a+h)-f(a)}h\qquad \text{and}\qquad \frac{f(x)-f(a)}{x-a}$$
measure the average rate of change of $f$ over an interval.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand the definition of instantaneous rate of change as a limit of average rates --- that is, 
$$\lim\_{h\to 0}\frac{f(a+h)-f(a)}h\qquad \text{and}\qquad \lim\_{x\to a}\frac{f(x)-f(a)}{x-a}$$
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand the analogy 
$$\begin{align\*}
\text{secant slope}\quad & \longleftrightarrow \quad \text{tangent slope}\\\\[2pt]
\text{average rate of change} \quad & \longleftrightarrow \quad \text{instantaneous rate of change}
\end{align\*}$$
{{% /prob %}}{{% /pwrap %}}


{{% pwrap %}}{{% prob %}} Students should understand the _derivative_ function as an _instantaneous rate of change function_, and they should be understand how the construction 
$$f'(x) = \lim\_{h\to 0} \frac{f(x+h)-f(x)}h = \lim\_{w\to x}\frac{f(w)-f(x)}{w-x}$$
defines a function in $x$.
{{% /prob %}}{{% /pwrap %}}  

{{% pwrap %}}{{% prob %}} Students should be fluent with alternative notation --- in particular, if $y=f(x)$ then they should be comfortable working with the expressions 
$$\frac{dy}{dx},\quad f'(x),\quad y',\quad y'(x), \quad \text{and} \quad 
\tfrac d{dx}\big[\, f(x)\,\big]$$
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to estimate tangent slopes and instantaneous rates of change using evidence gathered from tables or graphs.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be comfortable with graphical, numerical, analytic, or verbal representations of the derivative.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to apply the definition of the derivative to find &ldquo;directly&rdquo; the derivative for selected functions, including power functions, polynomial functions, sine and cosine, exponential functions, and the natural logarithmic function. (Note: Other tools may, of course, be necessary. For instance, the Binomial Theorem comes in handy for calculating $\tfrac{d}{dx}\big[ x^N \big]$, while the special limit $\lim_{\theta \to 0} \frac{\sin \theta}\theta$ is critical for calculating $\tfrac{d}{dx}\big[ \sin x \big]$
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to apply the general rules of differentiation regarding sums, differences, products, and quotients of differentiable functions.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to apply the chain rule in order to differentiate the composition of differentiable functions.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to apply implicit differentiation and understand how the chain rule lies at the heart of that process.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to use implicit differentiation to find the derivative of the inverse of a differentiable function.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand how to find tangent slopes to both a parametric curve and a polar curve. 
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand how differentiation may be iteratively applied to arrive at the second and higher derivatives. Students should be familiar with the variety of notation: if $y=f(x)$, then the second derivative is represented by 
$$\frac{d^2y}{dx^2}, \quad f\prime\prime(x),\quad \text{and} \quad y^{\prime\prime}$$
while the higher derivatives are indicated by 
$$\frac{d^ny}{dx^n}\quad \text{or} \quad f^{(n)}(x)$$
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should know the essential elements of &ldquo;curve sketching&rdquo; --- that is, how the first and second derivatives of a function provide information about the shape of its graph: intervals of increase or decrease, local (relative) and global (absolute) extrema, intervals of upward or downward concavity, and points of inflection.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should know that features of functions and their derivatives can be identified and related to their graphical, numerical, and analytical representations.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand how the graphs of $f$, $f'$, and $f^{\prime\prime}$ are  related to one another.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should know that for a curve given by a polar equation $r=f(\theta)$, derivatives of $r$, $x$, and $y$ with respect to $\theta$ and first and second derivatives of $f$ with respect
to $x$ can provide information about the curve.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand that **differentiability at an argument implies continuity**, but that the converse fails: there exist functions that are continuous at an argument but not differentiable at that argument.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should know the relationship between the **units** used to measure the argument, value, and rate of change of a function. For instance, if $t$ is measured in seconds and $s(t)$ is measured in meters, then $s'(t)$ is measured in meters per second.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand how differentiability implies &ldquo;local linearity&rdquo;, and they should be able to perform **linear approximation** --- that is, use the values of $f(a)$ and $f'(a)$ to approximate values of $f(x)$ for arguments $x$ close to $a$.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to use derivatives to solve **rectilinear motion** problems --- that is, find position, velocity, speed, or acceleration for particles moving along a straight line.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to solve **related rates**problems --- that is, given variable quantities that obey a relationship with **each other**, apply implicit differentiation with respect to time in order to discover and exploit the relationship between the rates of change of these quantities.
{{% /prob %}}{{% /pwrap %}}
 
{{% pwrap %}}{{% prob %}} Students should be able to solve **optimization** problems --- that is, find the maximum or minimum value of a function on an interval. 

1. Students should understand the **Fermat's Theorem**: if $f$ has a local extremum at an argument $a$, then $a$ is a critical number for $f$. 

2. Students should understand the **Extreme Value Theorem**: if $f$ is continuous on the closed interval $[a,b]$, then $f$ attains its minimum and maximum values 

3. Students should understand how Fermat's Theorem and the Extreme Value Theorem guarantee an algorithm (the &ldquo;**closed interval method**&rdquo;) for finding extreme values of a continuous function on a closed interval.

4. Students should understand that when either the function $f$ fails to be continuous or the domain $I$ fails to be a closed interval, then the closed interval method is not guaranteed to work and the task of optimizing $f$ over $I$ requires some sort of analysis for justification. 

{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand how derivatives can be used to make a quantitative assertion about rates of change. Such assertions are precisely what we call **differential equations**.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should know how the &ldquo;solution&rdquo; of a differential equation consists of a family of functions, and they should know how to apply differentiation and algebra to check if a candidate function actually solves a differential equation.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Suppose $F(x,y)$ denotes a function of two variables $x$ and $y$. Students should understand how a differential equation of the form $\frac{dy}{dx} = F(x,y)$ can be represented by a **slope field**, and they should understand how the graph of a solution &ldquo;goes with the flow&rdquo; of such a slope field.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to apply **Euler's method} to generate approximate values of a solution to a differential equation of the form $\frac{dy}{dx} = F(x,y)$.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to state and apply the **Mean Value Theorem**: if $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there exists an argument $c$ for which $a< c< b$ and $$f'({c}) = \frac{f(b) - f(a)}{b-a}$$
{{% /prob %}}{{% /pwrap %}}

{{% /problem_environment %}}

## Integrals and the Fundamental Theorem of Calculus

Integrals are used in a wide variety of practical and theoretical applications.
AP Calculus students should understand the definition of a definite integral involving a Riemann sum, be able to approximate a definite integral using different methods, and be able to compute definite integrals using geometry. They should be familiar with basic techniques of integration and properties of integrals. The interpretation of a definite integral is an important skill, and students should be familiar with area, volume, and motion applications, as well as with the use of the definite integral as an accumulation function. It is critical that students grasp the relationship between integration and differentiation as expressed in the Fundamental Theorem of Calculus --- a central idea in AP Calculus. Students should be able to work with and analyze functions defined by an integral.

{{% problem_environment %}}


{{% pwrap %}}{{% prob %}} Students should understand the notion of **anti-derivative**: the function $F$ is an anti-derivative of $f$ if and only if
$$F'(x) = f(x) \quad \text{for all $x$ in the domain of $f$}$$
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand how a **Riemann sum** approximates signed area of a function $f$ over an interval $[a,b]$. They should be comfortable interpreting and setting up arbitrary sums of the form 
$$\sum\_{k=1}^N f(x_k^\ast) (\Delta x)_k$$
where $[a,b]$ has been subdivided into $N$ subintervals of (possibly variable) sub-widths $(\Delta x)\_k$, and the arguments $x_k^\ast$ have been selected from each subinterval.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand left-hand, right-hand, and midpoint sums as special cases of Riemann sums.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}[**PA**] Students should understand the &ldquo;1-4-1&rdquo; rule for quadratic approximation of signed area, and how that rule leads to **Simpson's Rule**.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should know that if $f$ is continuous, then for any sequence of Riemann sums for which the limiting value of maximum subinterval width approaches zero, then the limiting value of the corresponding Riemann sums exist and is otherwise independent of the way the way $[a,b]$ has been subdivided. In symbols, this limit might be written
$$\lim\_{\max (\Delta x)\_k\to 0} \sum\_{k=1}^N f(x\_k^\ast)\, (\Delta x)\_k$$
In particular, if $[a,b]$ is divided into $N$ equal subdivisions, so that each subinterval has width $\Delta x = \frac 1N(b-a)$, then 
$$\lim\_{N\to \infty}{(\Delta x)\_k} = \lim\_{N\to \infty} \frac{b-a}N = 0$$
and therefore  
$$\lim\_{N\to \infty} \sum\_{k=1}^N f(x^\ast_k)\, \Delta x$$
exists.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand that the **definite integral** of a continuous function $f$ on the interval $[a,b]$, denoted $\int_a^b f(x)\, dx$, is defined to equal the common limiting value of any sequence of Riemann sums, assuming the limiting value of the maximum subinterval is zero. That is,
$$\int_a^b f(x)\, dx = \lim\_{(\Delta x)_k\to 0} \sum\_{k=1}^N f(x_k^\ast)\, (\Delta x)\_k$$
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to set up explicit expressions for Riemann sums and be able to recognize the corresponding definite integral for the limit of such Riemann sums. For instance, students should be able to recognize that 
$$\lim\_{N\to \infty} \sum\_{k=1}^{N} \sin\left(\tfrac k N \cdot \pi\right)\cdot \tfrac \pi N = \int_0^\pi \sin x \, dx$$
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to approximate the value of definite integrals  for functions that are represented graphically, numerically, algebraically, and verbally.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to approximate definite integrals by using a left-hand sum, a right-hand sum, a midpoint sum, or a trapezoidal sum. Students should be able to employ either regular or non-regular subdivisions when creating Riemann sums.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand how a definite integral yields **signed area**. In certain cases, it should be possible to evaluate a definite integral by calculating signed area directly from the graph of a function.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to apply the basic integral laws --- constant multiples of functions, sums and differences of functions, reversal of the limits of integration, and the &ldquo;interval combination&rdquo; law.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand how the definition of definite integrals may be extended to functions with removable or jump discontinuities. 
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand **improper integration** --- that is, how to extend the definition of the definite integral to include integration along an infinite interval, or integration of functions that are unbounded on the interval. These ideas should be understood as limiting cases of usual integration --- for instance, 
$$\int_0^\infty \arctan x\, dx = \lim\_{K\to \infty} \int_0^K \arctan x\, dx$$
and 
$$\int_0^1 \frac 1{x^2}\, dx = \lim\_{A\to 0^+} \int_A^1 \frac 1{x^2}\, dx$$
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand **accumulation functions} --- that is, functions built by using variable limits of integration; for instance, 
$$A(x) = \int_0^x e^{-t^2}\, dt$$
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should know the **Fundamental Theorem of Calculus (Part II)**. Specifically, if $f$ is continuous on $[a,b]$, then 
$$\frac{d}{dx}\left[ \,\int_a^x f(t)\, dt \,\right] = f(x)$$
In particular, students should understand that an accumulation function \text{is} an antiderivative of the integrand function.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to use graphical, numerical, analytical, and verbal representations of a function to analyze an accumulation function.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand the **Fundamental Theorem of Calculus (Part I)** (sometimes known as the **Evaluation Theorem**) --- namely, if $f$ is continuous on $[a,b]$ and $F'(x) = f(x)$ on $(a,b)$, then 
$$\int_a^b f(x) \, dx = F(b) - F(a)$$
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand the notion of an **indefinite integral}, denoted $\int f(x)\, dx$, and how an indefinite integral represents a family of anti-derivatives of $f$. That is, 
$$\int f(x)\, dx = F(x) + C,\quad \text{where $F'(x) = f(x)$ and $C$ is constant.}$$
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be aware that the anti-derivative problem is &ldquo;hard&rdquo; in the sense that many functions have no &ldquo;closed form&rdquo; expressions for their anti-derivative. In such cases, accumulation functions are really the only concrete &ldquo;handle&rdquo; to work with the anti-derivative.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to use several different techniques to find anti-derivatives such as algebraic manipulation, long division, completing the square, substitution of variables, integration by parts, and partial fractions (with non-repeating linear factors).
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}[**PA**] Students should be able to evaluate many types of trigonometric integrals and apply trigonometric substitution to find indefinite integrals.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should know how to find the **average value** of a function $f$ on the interval $[a,b]$ via 
$$\frac 1{b-a}\int_a^b f(x)\, dx$$
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should know how a definite integral of a rate of change on an interval $[a,b]$ yields the *net change* in the quantity over that interval.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} In particular, students should understand how, in the context of rectilinear motion, the integral of velocity over a time interval yields displacement during that time interval and, similarly, the integral of speed over a time interval yields total distance traveled during that time interval.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to apply definite integration to determine displacement, distance, and position of a particle moving along a curve given by parametric or vector-valued functions.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}  Students should know how to find areas of certain regions in the plane using definite integrals, including areas bounded by polar curves.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Given the cross-sectional area of an object, students should be able to determine the volume of the object by calculating the definite integral of the cross-sectional area. In particular, students should be able to find the volume of a solid of revolution using the &ldquo;disk&rqduo; and &ldquo;washer&rqduo; methods.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to find the length of a curve given by a standard graph of a function, a parametric curve, or [**PA**] a polar curve.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand the **natural growth and decay** equation 
$$\tfrac{dQ}{dt} = kQ$$
that encodes the following relationship: *the rate of change of $Q$ is proportional to $Q$*. 
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand the **logistic growth model**
$$\tfrac{dP}{dt} = kP(M - P)$$
which describes growth of a population that is constrained by a maximum &ldquo;carrying capacity&rdquo; $M$. 
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to use anti-differentiation in finding specific solutions to differential equations with given initial conditions, including applications to rectilinear motion, exponential growth and decay, and logistic growth.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should be able to solve separable differential equations using separation of variables. Students should understand how to restrict the domain of a solution when necessary.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} Students should understand how an accumulation function provides an immediate solution to a  &ldquo;simple slope statement&rdquo;. That is, the function $F$ defined by 
$$F(x) = c + \int_a^x f(t)\, dt$$
is the function that solves the initial value problem 
$$F'(x) = f(x),\qquad F(a) = c$$
{{% /prob %}}{{% /pwrap %}}

{{% /problem_environment %}}


## Series

The AP Calculus BC curriculum includes the study of series of numbers, power series, and various methods to determine convergence or divergence of a series. Students should be familiar with Maclaurin series for common functions and
general Taylor series representations. Other topics include the radius and interval of convergence and operations on power series. The technique of using power series to approximate an arbitrary function near a specific value allows for an important connection to the tangent-line problem and is a natural extension that helps achieve a better approximation. The concept of approximation is a common theme throughout AP Calculus, and power series provide a unifying, comprehensive conclusion.



{{% problem_environment %}}

{{% pwrap %}}{{% prob %}}Students should understand the notion of a **sequence** and what it means for a sequence to **connverge** or **diverge**.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should understand the definition of **series**, **partial sum**, and the definition of convergence of a series in terms of the convergence of the sequence of partial sums. 
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should be familiar with common series including **geometric series**, the **harmonic series**, and **$\boldsymbol{p}$-series**.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should understand how a series might be **absolutely convergent**, **conditionally convergent**, or **divergent**.
Students should know that every absolutely convergent series is convergent, but the converse is false --- that is, conditionally convergent series exist
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}When deciding if a series converges, students should be able to apply the $n$-term test (also known as the Divergence Test), the Comparison Test, the Limit Comparison Test, the Integral Test, the Ratio Test, and the Alternating Series Test.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should understand that a geometric series converges if and only if the common ratio lies strictly between $-1$ and $1$, in which case the series converges to the quantity 
$$\frac {\textsf{first term}}{1 - \textsf{common ratio}}$$
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}When a series satisfies the hypotheses of the Alternating Series Test, students should be able to estimate how close any given partial is to the value of the series, and be able to decide of the partial sum is greater or less than the value of the sum.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should understand that when a series converges absolutely then any regrouping or rearrangement of terms yields a convergent series that new series converges to the same limit.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Given a function $f$ that is $N$-times differentiable at the argument $a$, students should understand the &ldquo;Taylor recipe&rdquo; for generating the $N$th degree polynomial 
$$P_N(x) = f(a) + f'(a)(x-a) + \tfrac 1{2} f''(a)(x-a)^2 + \cdots + \tfrac 1{N!} f^{(N)}(a)(x-a)^N$$
Students should understand why this polynomial may provide good approximations for the value of $f(x)$ when $x$ is close to $a$.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should be familiar with how the graph of the $N$th degree Taylor polynomials may converge to the graph of $f$ on some (possibly infinite) interval.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should be able to apply the Lagrange error bound to determine how well the values of a Taylor polynomial approximate the values of the original function on an interval. 
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}If the terms of the Taylor polynomial at the argument $x=a$ obey the hypotheses of the Alternating Series Test, students should be able to determine a bound on the error between the Taylor polynomial value and the value of the original function.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should generally be comfortable with \textbf{power series functions} of the form $F(x) = \sum_{n=0}^\infty a_n(x-a)^n$. Students should understand that the interval of convergence of such a power series is either $\\{a\\}$, a finite interval with endpoints at $a-R$ and $a+R$, or the &ldquo;infinite interval&rdquo; $\mathbb R$.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}} [**PA**] Students should know that within the open interval of convergence, a power series converges absolutely, outside the interval of convergence the power series diverges, and in the case of a finite interval it is possible for their to be divergence, conditional convergence, or absolute convergence.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should know how to apply the Ratio Test to find the radius of convergence of a power series.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should know that term-by-term differentiation and term-by-term integration does not change the radius of convergence of a series.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should understand the essential uniqueness of power series representations and that, in particular, a function defined by a power series centered at an argument $x=a$ has, as its Taylor series centered at $x=a$, the same power series. 
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should know --- and know how to derive --- the Maclaurin series for the functions sine, cosine, and the exponential function. Students should also know how to quickly generate the Maclaurin series for $1/(1-x)$ as the sum of a geometric series.
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should understand the following analogy:
$$\begin{align\*}
\text{partial sum}\quad & \longleftrightarrow \quad \text{Taylor polynomial}\\\\[2pt]
\text{value of series} \quad & \longleftrightarrow \quad \text{Taylor series}
\end{align\*}$$
{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Students should be familiar with the variety of ways of finding power series representations --- namely,  algebraic processes, substitution, use of geometric series, term-by-term differentiation, and term-by-term integration.
{{% /prob %}}{{% /pwrap %}}
{{% /problem_environment %}}
