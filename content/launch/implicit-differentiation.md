---
title: "Implicit Differentiation"
rawtitle: "implicit-differentiation"
date: 2019-01-23T15:12:53-05:00
draft: false
---


# Implicit differentiation

The graph of the equation $x^2 + y^2 = 25$ is the circle of radius $5$ centered at the origin. This graph, of course, fails the vertical line test, and therefore fails to define $y$ explicitly as a function of $x$. It is not hard to see, however, that there _are_ two explicit functions lurking about --- namely, the functions defined by the top and bottom halves of the graph. 

We could solve for $y$ first explicitly and _then_ take the derivative. Thus, 
$$y = \pm \sqrt{25 - x^2}\quad \Rightarrow \quad \tfrac{dy}{dx}= \pm \tfrac 12(25- x^2)^{-{1}/{2}}(-2x)$$
which we can summarized by the pair of implications
$$y = \sqrt{25-x^2}\quad \Rightarrow \quad \frac{dy}{dx} = - \frac{x}{\sqrt{25-x^2}}$$
and
$$y = -\sqrt{25-x^2}\quad \Rightarrow \quad \frac{dy}{dx} =\frac{x}{\sqrt{25-x^2}}$$
The two assertions correspond, respectively, to the upper and lower half of the circle. We could, however, conjure up a single statement that applies to (almost) every point on the circle. 
$$x^2 + y^2 = 25 \quad\Rightarrow \quad 2x + 2y \tfrac {dy}{dx} = 0$$
whence 
$$\frac{dy}{dx} = - \frac xy$$
<br><br><br>

## Videos

__Introduction to implicit differentiation__<br>
From the Odden Calculus Playlist. Run-time 10:45<br>
<input type="button" class="vid_toggle" value="Show video">
{{< vidbox id="sMd4dojjltQ" >}}


__Implicit differentiation__<br>
From Khan Academy. Run-time 10:17<br>
<input type="button" class="vid_toggle" value="Show video">
{{< vidbox id="mSVrqKZDRF4" >}}

<br/><br/>

## Worksheets and handouts

<a href="https://drive.google.com/file/d/1NDkkzvEt5SyYcpTrX_kQT1k0FNemsJFq/view?usp=sharing">Exercises</a>

<object data="https://docs.google.com/gview?a=v&pid=explorer&chrome=false&api=true&embedded=true&srcid=1NDkkzvEt5SyYcpTrX_kQT1k0FNemsJFq&hl=en&embedded=true" width="612" height="792"></object>
