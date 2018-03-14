---
title: "Integration by Parts"
date: 2018-03-10T10:06:25-05:00
---



# Integration by parts

{{% mtube id="aMKajIwy7Mo" %}}

<br><br>

## Running the product rule in reverse

The Product Rule for derivatives asserts that if the function $f$ and $g$ are both differentiable then 
$$\tfrac{d}{dx}\\!\big[\, f(x)\cdot g(x) \,\big] = f(x)\cdot g'(x) + g(x) \cdot f'(x)$$ 
Although this law is not outrageously complicated, it has enough moving parts to make it difficult to find anti-derivatives of products of functions. Fortunately there is a powerful technique, called ***integration by parts***, that often provides a way to run the product rule in reverse.

To motivate this new technique we rewrite the equation above as 
$$f(x)\cdot g'(x) = \tfrac{d}{dx}\\\!\big[\, f(x)\cdot g(x) \,\big] - g(x) \cdot f'(x)$$
and then take the anti-derivative of both sides. Putting aside
<span class="sidenote">Indeed, throughout the rest of this article we shall tend to ignore the constant of integration until the very moment we are ready to write down the general anti-derivative.</span> 
for the moment the ubiquitous constant of integration, and noting that the anti-derivative of the derivative of a function returns that function, we see that 
$$\int f(x)\cdot g'(x) \, dx \ \ = \ \ f(x)\cdot g(x) - \int g(x) \cdot f'(x)\, dx$$ 
As it turns out, this is a surprisingly powerful statement. It reveals that an integral of the form 
$$\int f(x)\cdot g'(x) \, dx$$ 
can always be re-written in the form 
$$f(x)\cdot g(x) - \int g(x) \cdot f'(x)\, dx$$ 
Why is this useful? The hope is that the new indefinite integral that appears in this expression is more tractable than the original integral. If this is true then we are in business.

For example, consider the integral 
$$\int x \cos x\, dx$$ 
As it stands this integral is a tough nut to crack. But if we view the integrand as the product of the functions 
$$f(x) = x\qquad \text{and}\qquad g'(x) = \cos x$$ 
then we notice that 
$$f'(x) = 1\qquad \text{and}\qquad g(x) = \sin x$$
and so we can apply the template discovered earlier to write 
$$\int \underbrace{x}\_{f(x)} \underbrace{\cos x}\_{g'(x)}\, dx \\ \\ = \\ \\ \underbrace{x}\_{f(x)} \cdot \underbrace{\sin x}\_{g(x)} - \int \underbrace{\sin x}\_{g(x)} \cdot \underbrace{1}\_{f'(x)} \, dx$$ 
But we know the anti-derivative of $\sin x$, so we are done: 
$$\begin{align} \int x \cos x\, dx &= x\sin x - \int \sin x \, dx\\\\[6pt] 
&= x\sin x + \cos x + C \end{align}$$ 
Let's verify this is truly the anti-derivative: 
$$\begin{align} \tfrac{d}{dx}\\\!\big[ \, x\sin x + \cos x \,\big] 
& = \tfrac{d}{dx}\\\!\big[ \, x\sin x \,\big] \ +\ \tfrac{d}{dx}\\\!\big[ \, \cos x \,\big]\\\\[6pt] 
&= x\cos x + \sin x \ -\ \sin x \\\\[6pt]
& = \cos x\quad \checkmark\end{align}$$


## Using differentials

In the example above we successfully arrived at the anti-derivative, but the method seems a bit cumbersome as it stands. Let's figure out how to use differentials to streamline the process. We start with the equation 
$$\int f(x)\cdot g'(x) \, dx \\ \\ = \\ \\ f(x)\cdot g(x) - \int g(x) \cdot f'(x)\, dx$$ 
and we introduce the variables 
$$u = f(x)\qquad \text{and}\qquad v = g(x)$$ 
Taking the differential of both of these equations yields 
$$du = f'(x)\, dx\qquad \text{and}\qquad dv = g'(x)\, dx$$ 
Next we recognize all the relevant players in the original equation: 
$$\int\underbrace{f(x)}\_{u}\cdot \underbrace{g'(x) \, dx}\_{dv} \\ \\ = \\ \\ \underbrace{f(x)\cdot g(x)}\_{uv} - \int \underbrace{g(x)}\_{v} \cdot \underbrace{f'(x)\, dx}\_{du}$$ 
We are now in a position to write down a compact version of the formula for ***integration by parts***.

{{% dbox title="Integration by parts formula" %}}

$$\int u\, dv \ = \ uv - \int v\, du$$
{{% /dbox %}}

A successful application of integration by parts consists of:

+ assigning the &ldquo;parts&rdquo; $u$ and $dv$ of the original integrand

+ calculating the differential $du$ and finding the &ldquo;anti-differential&rdquo; $v$ of $dv$

+ evaluating the integral $\int v\, du$


How would this process play out in the example above? Faced with the integral 		$$\int x\cos x\, dx$$ 
we choose the “parts” to be 
$$u = x \qquad\text{and}\qquad dv = \cos x \, dx$$ 
From this we are able to deduce 
$$du = dx \qquad \text{and}\qquad v = \sin x$$ 
The integration by parts formula allows us to write 
$$\int \underbrace{x}\_{u} \, \underbrace{\cos x\, dx}\_{dv} = \underbrace{x}\_u\, \underbrace{\sin x}\_{v} - \int \underbrace{\sin x}\_{v} \ \underbrace{dx}\_{du}$$ 
All of this work would be for naught if we were unable to evaluate the new integral, but in this case there is no problem, for $\int \sin x\, dx = -\cos x+ C$. We conclude 
$$\int x\cos x\, dx \\ =\\ x\sin x + \cos x + C$$

## A worked example: exploring the options

Suppose we need to evaluate 
$$\int x e^{3x} \, dx$$ 
In order to apply integration by parts for this integral we must first identify the “parts” $u$ and $dv$ for which 
$$u\, dv = x e^{3x} \, dx$$ 
There is more than one way to assign “parts”, so let us explore the consequences of four different ways of doing this. Notice that in each case, the product of $u$ and $dv$ yields the original integrand.

<table style="margin-left: auto; margin-right: auto;">
    <tbody>
        <tr>
            <td><span class="inlinehead">Option 1</span></td>
            <td style="padding-left: 15px;">$u = 1$</td>
            <td style="padding-left: 15px;">$dv = xe^{3x}\, dx$</td>
        </tr>
        <tr>
            <td style="padding-top: 5px;"><span class="inlinehead">Option 2</span></td>
            <td style="padding-left: 15px; padding-top: 5px;">$u = xe^{3x}$</td>
            <td style="padding-left: 15px; padding-top: 5px;">$dv = dx$</td>
        </tr>
        <tr>
            <td style="padding-top: 5px;"><span class="inlinehead">Option 3</span></td>
            <td style="padding-left: 15px; padding-top: 5px;">$u = e^{3x}$</td>
            <td style="padding-left: 15px; padding-top: 5px;">$dv = x \, dx$</td>
        </tr>
        <tr>
            <td style="padding-top: 5px;"><span class="inlinehead">Option 4</span></td>
            <td style="padding-left: 15px; padding-top: 5px;">$u = x$</td>
            <td style="padding-left: 15px; padding-top: 5px;">$dv = e^{3x}\, dx$</td>
        </tr>
    </tbody>
</table>


{{% inhead %}}Option 1:{{% /inhead %}}{{< quad >}}$u = 1${{< quad >}}and{{< quad >}}$dv = xe^{3x}\, dx$

{{% narration %}} 

One of our first steps down this route would be to find the anti-differential of $dv = xe^{3x}\, dx$ --- which amounts to solving the original problem!

{{% inhead %}}Moral:{{% /inhead %}}{{< quad >}}Don't let $dv$ bear the burden of the entire integral. This road leads to nowhere in a hurry.

{{% /narration %}}

{{% inhead %}}Option 2:{{% /inhead %}}{{< quad >}}$u=xe^{3x}${{< quad >}}and{{< quad >}}$dv = dx$ 

{{% narration %}} 

We calculate 
$$du = \big(\, e^{3x} + 3xe^{3x} \,\big) dx = (1+3x)e^{3x} \, dx$$ 
and 
$$v = x$$ 
The integration by parts formula yields 
$$\begin{align} \int x e^{3x} \, dx & = x^2 e^{3x} - \int (x+3x^2)e^{3x}\, dx\\\\[6pt] & = x^2 e^{3x} - \int xe^{3x}\, dx - 3\\!\int x^2 e^{3x}\, dx \end{align}$$

This looks very messy, but let's not give up hope quite yet. We see the original integral pop on the right side of the equation &ndash; but fortunately, it has a minus sign in front of it so we can add that quantity to both sides to obtain 
$$2\\!\int x e^{3x} \, dx \ =\ x^2 e^{3x} - 3\\!\int x^2 e^{3x}\, dx$$ 
and, dividing by two, 
$$\int x e^{3x} \, dx \ =\ \tfrac 12 x^2 e^{3x} - \tfrac 32\\!\int x^2 e^{3x}\, dx$$ 
But now we face the reality that the integral on the right-hand side of this equation is more complicated than the original integral. Our choice of parts has led us to what seems to be a more difficult problem.

{{% inhead %}}Moral:{{% /inhead %}}{{< quad >}}If the original integrand is already pretty complicated, letting $u$ be the whole integrand might not work out that well, for $du$ is likely to be even _more_ complicated.

{{% /narration %}}

{{% inhead %}}Option 3:{{% /inhead %}}{{< quad >}}$u = e^{3x}${{< quad >}}and{{< quad >}}$dv = x\, dx$

{{% narration %}}

In this case we calculate
$$du = 3e^{3x}\, dx$ \qquad\qquad \text{and} \qquad\qquad v = \frac 12 x^2$$
and the integration by parts formula yields 
$$\int x e^{3x} \, dx = \tfrac 12x^2 e^{3x} - \tfrac 12\int x^2 e^{3x}\, dx$$ 
But we are left stranded in a similar position as in Option 2, for we face an integal that seems even more difficult than the original. What happened here is that by choosing $dv$ to include the &ldquo;polynomial part&rdquo;, we guaranteed that $v$ would be a polynomial with a higher degree, thereby generating a more complicated integrand.

{{% inhead %}}Moral:{{% /inhead %}}{{< quad >}}In general, you might consider trying to avoid setting $dv$ equal to the &ldquo;polynomial part&rdquo; of an integrand.
&nbsp;

{{% /narration %}}

{{% inhead %}}Option 4:{{% /inhead %}}{{< quad >}}$u = x${{< quad >}}and{{< quad >}}$dv = e^{3x}\, dx$

{{% narration %}}

This choice of parts leads to
$$du = dx\qquad\text{and}\qquad v = \frac 13 e^{3x}$$
and the parts formula yields 
$$\int x e^{3x} \, dx = \tfrac 13 xe^{3x} - \tfrac 13\int e^{3x}\, dx$$ 
This looks very promising, for the integral on the right-hand side is quite simple. We conclude that 
$$\int x e^{3x} \, dx = \tfrac 13 xe^{3x} - \tfrac 19 e^{3x} + C$$

{{% inhead %}}Moral:{{% /inhead %}}{{< quad >}}In general, you might consider setting $dv$ equal to the most &ldquo;impressive&rdquo; part you know how to integrate. This might increase the likelihood that $v$ will be simpler. (By the way, if you don't believe integrating a polynomial is all that impressive, this suggestion is consistent with the Moral of Option 3.)

{{% /narration %}}

## Definite integration using integration by parts

Let's figure out how to apply the technique of integration by parts to a <em>definite integral</em>. We start back at the product rule for derivatives. 
$$\tfrac{d}{dx}\\!\big[\, f(x)\cdot g(x) \,\big] = f(x)\cdot g'(x) + g(x) \cdot f'(x)$$ 
Although it is not a <em>deep</em> observation, we notice that were we to take the <em>anti-derivative</em> of both sides we would arrive at the equation 
$$f(x)g(x) = \int \big(\ f(x)\cdot g'(x) + g(x)\cdot f'(x) \ \big)\, dx$$ 
which is simply telling us that the anti-derivative of $fg' + gf'$ is the function $fg$. The Evaluation Theorem allows us to find the value of a definite integral: 
$$\int_a^b \big(\ f(x)\cdot g'(x) + g(x)\cdot f'(x) \ \big)\, dx \ = \ f(x)g(x)\Big]_a^b$$ 
Splitting the integral across the sum and applying a smidgen of algebra we arrive at the integration by parts formula for a definite integral: 
$$\int_a^b f(x)g'(x)\, dx \ = \ f(x)g(x)\Big]_a^b - \int_a^b g(x)f'(x)\, dx$$
Using the more compact, &ldquo;differential version&rdquo; we could write 
$$\int_a^b u\, dv \ = \ uv\,\Big]_a^b - \int_a^b v\, du$$


## Bootstrapping

Sometimes it is necessary to apply integration by parts more than once. For example, by choosing
$$u = x^2\qquad \text{and} \qquad dv = \cos x\, dx$$
we apply the parts formula to discover that 
$$\int x^2 \cos x\, dx = x^2 \sin x - 2\int x \sin x\, dx$$ 
and it quickly becomes clear that we must apply integration by parts <em>again</em> in order to evaluate the integral on the right-hand side.

Let us examine a rather interesting variation of this theme. Consider the integral 
$$\int e^x \cos x\, dx$$ 
The choice of parts really seems to be up for grabs. Choosing
$$u = e^x \qquad \text{and} \qquad  dv=\cos x\, dx$$
it follows that
$$du = e^x\, dx\qquad \text{and} \qquad   v=\sin x$$
and consequently 
$$\int e^x \cos x\, dx = e^x \sin x - \int e^x\sin x\, dx$$
Here again we see that another round of integration by parts is called for, this time applied to the intergal 
$$\int e^x\sin x\, dx$$ 
We choose
$$u = e^x \qquad \text{and} \qquad  dv=\sin x\, dx$$
from which
$$du = e^x\, \qquad \text{and} \qquad  dx v=- \cos x$$
and so 
$$\int e^x\sin x\, dx = - e^x\cos x + \int e^x \cos x \, dx $$

Yikes! It looks like we have gone in a circle, for we now face the original integral! Believe it or not, we have done most of the work necessary to solve this problem. Let's substitute the results of the second integration into the first: 
$$\begin{align} 
\int e^x \cos x\, dx &= e^x \sin x - \int e^x\sin x\, dx\\\\[6pt] 
&= e^x \sin x - \left[ - e^x\cos x + \int e^x \cos x \, dx \right]\\\\[6pt] 
&= e^x \sin x + e^x \cos x - \int e^x \cos x \, dx 
\end{align}$$

At this point we can add $\int e^x \cos x\, dx$ to both sides of the equation, divide by two, and clean up with a bit of algebra to obtain the formula 
$$\int e^x \cos x\, dx = \tfrac 12 e^x \big( \, \cos x + \sin x\,\big)+C$$ 
It may feel a bit like you have solved this problem without actually doing anything. Or, using a metaphor that dates back to the eighteenth century, you were able to lift yourself over a fence by pulling up on the straps of your own boots.<span class="sidenote">Here is the <a href="https://en.wiktionary.org/wiki/pull_oneself_up_by_one%27s_bootstraps">Wiktionary entry</a> for this idiom.</span> However you feel about the method, it does work --- just take the derivative of the right-hand side to verify it!


## Surprising applications

Integration by parts is a powerful technique for navigating the product rule in reverse; however, it has other, somewhat surprising, applications. For example, consider the integral 
$$\int \ln x \, dx$$ 
There may seem to be little point in attempting integration by parts, but if we choose
$$u = \ln x \qquad\text{and}\qquad dv = dx$$
we calculate
$$du = \frac 1x \, dx \qquad\text{and}\qquad v = x$$
and the parts formula yields 
$$\begin{align}
\int \ln x\, dx 
& = x\ln x - \int x\cdot \frac 1x \, dx\\\\[6pt] 
& = x\ln x - \int dx = x\ln x - x + C
\end{align}$$
Generally, if $f'(x)$ is &ldquo;algebraic&rdquo; --- a rational function, square root of a polynomial function, etc. --- then the substitution $u = f(x)$ and $dv = dx$ may be surprisingly effective as a way of analyzing $\int f(x)\, dx$.


## Exercises

<br>

{{% problem_environment %}}

{{% pwrap %}}
{{% prob %}}Evaluate the following indefinite integrals.{{% /prob %}}
{{% columns 2 %}}
{{% part %}}$\displaystyle \int (5x+3)e^{2x} \, dx${{% /part %}}
{{% part %}}$\displaystyle \int x^2 e^x \, dx${{% /part %}}
{{% /columns %}}
{{% columns 2 %}}
{{% part %}}$\displaystyle \int x\ln x \, dx${{% /part %}}
{{% part %}}$\displaystyle \int \frac{\ln x}{x^2} \, dx${{% /part %}}
{{% /columns %}}
{{% columns 2 %}}
{{% part %}}$\displaystyle \int e^{-x}\sin (2x) \, dx${{% /part %}}
{{% part %}}$\displaystyle \int x\sec^2 x \, dx${{% /part %}}
{{% /columns %}}
{{% /pwrap %}}

{{% pwrap %}}
{{% prob %}}Find the exact value of the following definite integrals.{{% /prob %}}
{{% columns 2 %}}
{{% part %}}$\displaystyle \int_0^1 x \, e^x \, dx${{% /part %}}
{{% part %}}$\displaystyle \int_0^{2\pi} x\sin\left(\tfrac x2\right)\, dx${{% /part %}}
{{% /columns%}}
{{% part %}}$\displaystyle \int_1^{e^2} x^4 \, \ln x \, dx${{% /part %}}
{{% /pwrap %}}

{{% pwrap %}}
{{% prob %}}Use integration by parts to evaluate the following.{{% /prob %}}
{{% columns 2 %}}
{{% part %}}$\displaystyle \int \arctan x\, dx${{% /part %}}
{{% part %}}$\displaystyle \int \arcsin x\, dx${{% /part %}}
{{% /columns%}}
{{% /pwrap %}}

{{% pwrap %}}
{{% prob %}}Evaluate the following integral two different ways --- once using a straight substitution, then again using integration by parts: 
$$\int \cos^2 x \sin x\, dx$${{% /prob %}}

  <div class="line">
    <div class="problem_label"><span></span></div>
    <div class="short_part_label"><span></span></div>
    <div class="buffer"></div>
    <div class="item_content">Use integration by parts to prove the following <em>reduction formula</em>: $$\int x^n e^x = x^n e^x - n\int x^{n-1} e^x \, dx\qquad (n\in\mathbb N)$$</div>
  </div>

  <div class="line">
    <div class="part_label"><span></span></div>
    <div class="buffer"></div>
    <div class="item_content">Use the reduction formula to <em><strong>quickly</strong></em> write out the values of $$\int x^n e^x\, dx$$ for $n=1$, $2$, $3$, $4$ and $5$.</div>
  </div>

{{% /pwrap %}}

{{% pwrap %}}
{{% prob %}}Suppose $f$ is a function for which $$f'(x) = \frac 1{\sqrt{1+x^2}}$$ Evaluate the following integrals.{{% /prob %}}
{{% columns 2 %}}
{{% part %}}$\displaystyle \int f(x)\, dx${{% /part %}}
{{% part %}}$\displaystyle \int x^3 \cdot f(x)\, dx${{% /part %}}
{{% /columns %}}
{{% /pwrap %}}

{{% /problem_environment %}}

