---
title: "Implicit Differentiation"
rawtitle: "implicit-differentiation"
date: 2019-01-23T15:12:53-05:00
draft: false
---
<style>
#navBar {
    list-style-type:none;
}

#navBar li {
    background-color: rgb(3,101,192);
}

#navBar a {
    font-family: 'Computer Modern Bright'; 
    font-weight: bold;
    color: white;
    text-decoration: none;
    display: block;
    font-size: 1em;
    border: 1px solid white;
    padding: 7px 5px;
}


</style>

<h1 id="0">Implicit differentiation</h1>

<div style="
    position: fixed;
    left: 950px;
    top: auto; 
    width: 300px;">
    <ul id="navBar">
        <li><a href="#0">Top</a></li>
        <li><a href="#1">Links</a></li>
        <li><a href="#2">Videos</a></li>
        <li><a href="#3">Worksheets and handouts</a></li>
    </ul></div>


The graph of an equation in two variables is typically a smooth curve in the plane. The method of __implicit differentiation__ allows us to find a formula for tangent slope even when it is difficult --- or even impossible! --- to solve the equation for $y$ explicitly in terms of $x$.

To take a simple example, the graph of the equation  
$$x^2 + y^2 = 25$$
is the circle of radius $5$ centered at the origin. This graph  fails the vertical line test, and therefore fails to define $y$ _explicitly_ as a function of $x$. It is not hard to see, however, that there are two explicitly functions lurking about --- namely, the &ldquo;top-half&rdquo; function
$$y\_{\text{top}} = \sqrt{25-x^2}$$
and the bottom-half
$$y\_{\text{bot}} = -\sqrt{25-x^2}$$
We could (without much trouble) calculate the derivative of either of these to obtain a pair of derivative formulas 
$$\left(\frac{dy}{dx}\right)\_{\text{top}} = - \frac{x}{\sqrt{25-x^2}}$$
and
$$\left(\frac{dy}{dx}\right)\_{\text{bot}} = \frac{x}{\sqrt{25-x^2}}$$

However, the method of implicit differentiation allows us to find, once and for all, a formula for the tangent slope that applies to all points on the unit circle without  _first_ solving for $y$ explicitly. This method yields 
$$x^2 + y^2 = 25 \quad\Rightarrow \quad 2x + 2y \tfrac {dy}{dx} = 0$$
whence 
$$\frac{dy}{dx} = - \frac xy$$
The penalty we must pay for this convenience is that we must supply both the $x$ _and_ $y$-coordinates of a point in order to evaluate $\frac{dy}{dx}$.

<br><br><br>

<h2 id="1">Links</h2>

<a href="https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-2-new/ab-3-2/v/implicit-differentiation-1">Implicit differentiation<a/><br/>
Khan Academy unit

<br/><br/>


<h2 id="2">Videos</h2>

__Introduction to implicit differentiation__<br>
From the Odden Calculus Playlist. Run-time 16:59

<div>
<input type="button" class="vid_toggle" value="Show video">
{{< vidbox id="C4hm3RZrW3w" >}}
</div>

__Implicit differentiation__<br>
From Khan Academy. Run-time 8:01

<div>
<input type="button" class="vid_toggle" value="Show video">
{{< vidbox id="mSVrqKZDRF4" >}}
</div>

__Worked example: Implicit differentiation__<br>
From Khan Academy. Run-time 4:55

<div>
<input type="button" class="vid_toggle" value="Show video">
{{< vidbox id="9uxvm-USEYE" >}}
</div>


__Showing explicit and implicit differentiation give same result__<br>
From Khan Academy. Run-time 7:47

<div>
<input type="button" class="vid_toggle" value="Show video">
{{< vidbox id="2CsQ_l1S2_Y" >}}
</div>




<br/><br/>


<h2 id="3">Worksheets and handouts</h2>

<a href="https://drive.google.com/uc?export=download&id=1EbHoN-hnDnpwu1yO9ZhgAn_2FMwkMdnt">__In class activity: Introduction to implicit differentiation__</a><br/>
Exploring the tangent slopes of a circle using implicit differentiation; using geometry to see that it all makes sense. 

<div>
<input type="button" class="pdf_toggle" value="Show PDF">
<div style="display: none;">
<object data="https://docs.google.com/gview?a=v&pid=explorer&chrome=false&api=true&embedded=true&srcid=1EbHoN-hnDnpwu1yO9ZhgAn_2FMwkMdnt&hl=en&embedded=true" width="612" height="792"></object>
</div>
</div>


<a href="https://drive.google.com/uc?export=download&id=1xLrw7Xh17q9z8pFD3oqs_qWidWkz2rdR">__In class activity: Implicit differentiation__</a><br/>
Four questions on finding the tangent lines of implicitly defined curves. 

<div>
<input type="button" class="pdf_toggle" value="Show PDF">
<div style="display: none;">
<object data="https://docs.google.com/gview?a=v&pid=explorer&chrome=false&api=true&embedded=true&srcid=1xLrw7Xh17q9z8pFD3oqs_qWidWkz2rdR&hl=en&embedded=true" width="612" height="792"></object>
</div>
</div>


<a href="https://drive.google.com/uc?export=download&id=1NDkkzvEt5SyYcpTrX_kQT1k0FNemsJFq">__Exercises: Implicit differentiation__</a><br/>
Finding tangent lines of curves defined implicitly; finding where such tangent lines are vertical or horizontal; some desmos work; a problem on the lemniscate.

<div>
<input type="button" class="pdf_toggle" value="Show PDF">
<div style="display: none;">
<object data="https://docs.google.com/gview?a=v&pid=explorer&chrome=false&api=true&embedded=true&srcid=1NDkkzvEt5SyYcpTrX_kQT1k0FNemsJFq&hl=en&embedded=true" width="612" height="792"></object>
</div>
</div>
 

