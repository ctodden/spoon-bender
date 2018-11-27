---
title: "Average Rate of Change"
rawtitle: "average-rate-of-change"
date: 2018-11-26T11:08:26-05:00
draft: false
---

# Average Rate of Change

{{< mtube id="sMd4dojjltQ" >}}

<br>

The average rate of change is a tool that measures the rate at which the value of a function changes with respect to the input variable over a specified interval. Consider a function $f$ and an interval $[a,b]$ in the domain of $f$.

{{% dbox title="Average rate of change"%}}
Suppose $[a,b]$ is an interval in the domain of the function $f$. The *average rate of change of $f$ on $[a,b]$* is defined by setting   
$$\begin{gathered}\textsf{average rate of change}\\\\[0pt]
\textsf{of $f$ on $[a,b]$}
\end{gathered}:= \displaystyle \frac{f(b)-f(a)}{b-a}$$
{{% /dbox %}}

Graphically, the average rate of change of $f$ on $[a,b]$ is equal to the slope of the segment joining the points $(a,f(a))$ and $(b,f(b))$ on the graph of $f$.

{{< cfig  src="avg_rate_pic.png" width="80%" caption="Averaging rate of change as a slope">}}

### Average velocity

We take a trip by car from Boston to New York, a distance of $220$ miles. The trip takes four hours. A graph of distance $s(t)$ for this trip is shown below with data points that gives total distance traveled at each hour along the way. In this setting we give a special name to the average rate of change: __average velocity__. Indeed, given that we measure distance in miles and time in hours, the natural units for rate of change in this context is _miles per hour_, or "mph".

{{< cfig  src="DistanceVtime2.png" width="65%">}}

{{% inhead %}}Question: What was the average velocity for the whole trip?{{% /inhead %}} 

To answer this question we calculate the average rate of change on the interval $[0,4]$:
$$\textsf{average velocity} = \dfrac{\textsf{distance traveled}}{\textsf{time elapsed}} = \dfrac{220\ \text{miles}}{4 \text{hours}} = 55\  \text{mph}$$

Of course, this does not mean that the car's velocity is $55$ mph at all times. It simply means that, on average, the car's velocity was $55$ mph during the four hour trip. To find average velocities over other intervals we must calculate the slopes of segments joining various points on the graph of position versus time. For instance, the average velocity on the interval $[1,2]$ is the slope of the segment connecting $(1,45)$ to $(2,85)$, while the slope of the segment connecting $(1,45)$ to $(3,160)$ yields the average velocity on the time interval $[1,3]$.

{{< cfig  src="DistanceVtime3.png" width="65%">}}


Hence, the average velocity between $t = 1$ and $t = 2$ is given by $$\textsf{average velocity} = \dfrac{s(2)-s(1)}{2-1} = \dfrac{85-45}{1} = 40\ \text{mph}$$ 
while the average velocity between $t = 1$ and $t = 3$ is given by $$\textsf{average velocity} = \dfrac{s(3)-s(1)}{3-1} = \dfrac{160-45}{2} = 57.5\ \text{mph}$$


{{% dbox title="Average velocity"%}}
Suppose $s(t)$ is the position of an object traveling on a line expressed as a function of time $t$ for all $t$ in the interval $[a,b]$. The **average velocity** from $t = a$ to $t = b$ is defined to be 
$$\textsf{average velocity} = \frac{s(b)-s(a)}{b-a}$$
This quantity is also equal to the slope of the secant joining the points $(a,s(a))$ and $(b,s(b))$.
{{% /dbox %}}
 

### Secant slope and average rate of change

Let's introduce a term that is both convenient and suggestive of a critical idea we will meet in the near future. Recall from your study of geometry that when a line intersects a circle there are two possible classifications: a _**secant line**_ and a _**tangent line**_. A secant line intersects a circle twice whereas a tangent line intersects a circle just once.

{{< cfig  src="secant_tangent.png" width="70%">}}


When we calculate an average rate of change of a function $f$ on the interval $[a,b]$ we **purposely** select **two points** on the graph of $f$ – namely, $(a,f(a))$ and $(b,f(b))$ – and then calculate the slope of the segment containing these two points. For this reason we define the **secant slope** by setting
$$\begin{gathered}
\textsf{secant slope of}\\\\[0pt] 
\textsf{of $f$ on $[a,b]$}
\end{gathered}
 : = \dfrac{f(b)-f(a)}{b-a}$$

Please note that we will use this term even if the line we constructed happens to intersect the graph at other _points_. In the graph below, for example, we would refer to a "secant slope" or "slope of the secant" even though there is "incidental contact" at a third point on the graph. This third intersection is simply irrelevant to the issue of calculating the average rate of change on the interval $[a,b]$.

{{< cfig  src="incidental_contact.png" width="70%">}}


### From secant to tangent and from average rate of change to instantaneous rate of change

The goal is to understand how we might pass (by way of a "limiting process" that we will need to study in the next few modules) from the notion of secant slope to the notion of _**tangent slope**_, and how we might pass from the notion of average rate of change to the notion of _**instantaneous rate of change**_. This passage can be summarized by the following table.

{{< cfig  src="summary_table.png" width="90%">}}

<br><br>


<img src="/img/logos/ka_logo.png" style="vertical-align: text-top; width:80px;" float = "left;">

[__Khan Academy Exercises__](https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new/ab-2-1/e/secants-and-average-rate-of-change)

Problems involving secant slopes and average rates of change.



<br><br>

## Exercises

<br>

{{% problem_environment %}}

{{% pwrap %}}
{{% prob %}}Consider the function $f(x) = x^2$.{{% /prob %}}
{{% part %}}Find the average rate of change of $f$ on $[1,3]$.{{% /part %}}
{{% part %}}Find the average rate of change of $f$ in $[-1,3]$.{{% /part %}}
{{% part %}}If $a\neq b$, show that the average rate of change of $f$ on $[a,b]$ equals $a+b$.{{% /part %}}
{{% /pwrap %}}

{{% pwrap %}}
{{% prob %}}The function $g$ is graphed below
{{< cfig  src="graph_of_g.png" width="70%">}}
Calculate the average rate of change of $g$ on each of the 
following intervals.{{% /prob %}}

{{% columns 3 %}}
{{% part %}}$[-5,5]${{% /part %}}
{{% part %}}$[-4,4]${{% /part %}}
{{% part %}}$[-2,2]${{% /part %}}
{{% /columns %}}
{{% columns 3 %}}
{{% part %}}$[-1,0]${{% /part %}}
{{% part %}}$[-1,2]${{% /part %}}
{{% part %}}$[-1,4]${{% /part %}}
{{% /columns %}}
{{% /pwrap %}}


{{% pwrap %}}
{{% prob %}}Consider the function 
$$f(x) = e^{\tfrac x3}\cos\left(\tfrac{x^2}{13}\right)$$
To 
<span class="sidenote">Use variable and function registers on the calculator to simplify these calculations, and use the graph to make sure your answers are reasonable.</span>
as many decimals as appear on the calculator, find the average rate of 
change of $f$ on each of the following intervals.{{% /prob %}}

{{% columns 3 %}}
{{% part %}}$[-3,3]${{% /part %}}
{{% part %}}$[e,\sqrt{30}]${{% /part %}}
{{% part %}}$[-1.3182,8.4015]${{% /part %}}
{{% /columns %}}
{{% /pwrap %}}

{{% pwrap %}}
{{% prob %}}The national 
<span class="sidenote">September 30 marks the end of each ``fiscal year''.</span>
debt on September 30, as determined by the 
United States Department of the Treasury, is displayed in the table below with an accompanying graph.
$$\begin{array}{c|r}
\textsf{date} &  \textsf{debt (dollars)}\qquad\\\\ \hline
9/30/2000 & 5,674,178,209,886.86\\\\[0pt]
9/30/2001 & 5,807,463,412,200.06\\\\[0pt]
9/30/2002 & 6,228,235,965,597.16\\\\[0pt]
9/30/2003 & 6,783,231,062,743.62\\\\[0pt]
9/30/2004 & 7,379,052,696,330.32\\\\[0pt]
9/30/2005 & 7,932,709,661,723.50\\\\[0pt]
9/30/2006 & 8,506,973,899,215.23\\\\[0pt]
9/30/2007 & 9,007,653,372,262.48\\\\[0pt]
9/30/2008 & 10,024,724,896,912.40\\\\[0pt]
9/30/2009 & 11,909,829,003,511.70\\\\[0pt]
9/30/2010 & 13,561,623,030,891.70\\\\[0pt]
9/30/2011 & 14,790,340,328,557.10\\\\[0pt]
9/30/2012 & 16,066,241,407,385.80
\end{array}$$
{{< cfig  src="national_debt.png" width="80%">}}
{{% /prob %}}

{{% part %}}Consider the one-year interval from 9/30/2008 to 9/30/2009. Express the rate of change of the national debt over this interval to three significant digits, using each of the following units.
<ol type="i">
<li>dollars per hour</li>
<li>dollars per day</li>
<li>dollars per minute</li>
<li>dollars per second</li>
</ol>
{{% /part %}}


{{% part %}}On which 
<span class="sidenote">Hint: Use the graph to find the top candidates, then use the data to distinguish between them.</span>
three-year interval was the average rate of change in the national debt the greatest?{{% /part %}}

{{% part %}}Suppose you were to represent the national debt as a pile of nickels. From 9/30/2001 until 9/30/2007, what was the average rate at which nickels were dumped onto the pile, measured in nickels per minute?{{% /part %}}
{{% /pwrap %}}

{{% pwrap %}}
{{% prob %}}Displayed below is the population of Massachusetts as compiled by the  United States Census Bureau.
$$\begin{array}{c|r}
\textsf{year} &  \textsf{population}\\\\ \hline
1900 & 2,805,346\\\\[0pt]
1910 & 3,366,416\\\\[0pt]
1920 & 3,852,356\\\\[0pt]
1930 & 4,249,614\\\\[0pt]
1940 & 4,316,721\\\\[0pt]
1950 & 4,690,514\\\\[0pt]
1960 & 5,148,578\\\\[0pt]
1970 & 5,689,170\\\\[0pt]
1980 & 5,737,037\\\\[0pt]
1990 & 6,016,425\\\\[0pt]
2000 & 6,349,097\\\\[0pt]
2010 & 6,547,629
\end{array}$$
{{% /prob %}}
 
{{% part %}}Suppose you want to find the rate of population change in 1955. 
Using __only the data provided__, what would be your best guess?{{% /part %}}
{{% part %}}Suppose you want to find the rate of population change in 1950. 
Using __only the data provided__, what would be your best guess?{{% /part %}}
{{% part %}}Suppose you were to model the growth of the population of Massachusetts during the 20th century as a steady stream of people entering the state for 100 years. In this model, how much time separates the entry of successive newcomers? {{% /part %}}

{{% pwrap %}}
{{% prob %}}Suppose <span class="sidenote">Hint: Give names (like $x_1$ and $x_2$) to the endpoints of the interval,  then just calculate the average rate of change!</span> that  $f$ is a linear function --- that is,
$$f(x) = mx + b$$
for real constants $m$ and $b$. Prove  the average rate of change of $f$ is equal to $m$ on __every__ possible interval.{{% /prob %}}
{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Prove the converse of the previous problem --- that is, suppose $f$ is a function with domain $\mathbb R$, the set of real numbers, and suppose that the average rate of change of $f$ on every interval is always the same. Prove that $f$ must be a linear function.{{% /prob %}}{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}Consider the function $f(x) = 2\sin(x/2)$. For each real number $K\neq 1$ we can construct an interval with endpoints of $1$ and $K$.{{% /prob %}}

{{% part %}}For how many values of $K$ is the average rate of change of $f$ in this interval equal to $\frac 1{13}$?{{% /part %}}

{{% part %}}To as many decimal places as possible, find the largest and smallest values of $K$ you counted in part (a).{{% /part %}}
{{% /pwrap %}}

{{% pwrap %}}{{% prob %}}The length of  an interval $I$ is  5, and the average rate of change of $f(x) = e^x$ on the same interval is 2. What are the __exact__ endpoints of the interval?{{% /prob %}}{{% /pwrap %}}


{{% pwrap %}}{{% prob %}}Suppose $K$ and $2K$ are endpoints of an interval, where $K$ is some real number. Find the __exact__ value of all possible values of $K$ for which the average rate of change of $g(x) = \frac 1x$ on this interval is $-1$.{{% /prob %}}{{% /pwrap %}}


{{% /problem_environment %}}
