
A *secant* line is any line that intersects the graph in at least $2$ distinct points. More precisely, given two points $P=(a,f(a))$ and $Q = (b,f(b))$ on graph $y = f(x)$ with $a \neq b$, the line $PQ$ is a secant line.
Unless $f(x)$ is a line, there are infinitely many secant lines passing through any given point $P$.

Given real number $a$ in the domain of function $f$, the slope of the line that is tangent to graph $y = f(x)$ at point $(a,f(a))$ is the derivative.

The tangent line should be determined **locally** (we only care about what happens near point $P$). 

For some distinct points $PQ$ on graph $y = f(x)$ such that $PQ$ is a secant line, as $Q$ approaches $P$, the secant line $PQ$ gets closer to the tangent line at $P$.
Let $P = (a,f(a)$ and $Q = (b,f(b))$. Then the slope of secant $PQ$ is $\frac{\triangle y}{\triangle x} = \frac{f(b) - f(a)}{b-a}$. We can further let $b = a+h$ for nonzero real number $h$. So, $h$ is the (signed) distance from $a$ to $b$ and $Q = (a+h,f(a+h))$. Thus, 
$$
\textnormal{slope of } PQ = \frac{f(a+h)-f(a)}{(a+h)-a} = \frac{f(a+h)-f(a)}{h}.
$$

As $Q$ approaches $P$, $h$ approaches $0$. Thus, the slope of the tangent line of $y = f(x)$ at point $P = (a,f(a))$ is the line passing through $P$ with slope
$$
f'(a) = \lim_{h\rightarrow 0} \frac{f(a+h) - f(a)}{h}.
$$
Here, $f'(a)$ is the **derivative** of function $f$ at $a$. 

**Example 1: Let $f(x) = x^2$. Find the tangent line to graph $y=f(x)$ at point $(1,1)$.**

The slope at $(1,1)$ is the derivative 
$$
\begin{align*}
f'(1) &= \lim_{h\rightarrow 0} \frac{f(1+h)-f(1)}{h} \\
&= \lim_{h\rightarrow 0} \frac{(h+1)^2-1}{h} \\
&= \lim_{h\rightarrow 0} \frac{h^2+2h}{h} \\
&= \lim_{h\rightarrow 0} (h+2) \\
&= 2.
\end{align*}
$$
Thus, the equation of the tangent line is in the form $y-1 = 2(x-1), y = 2x-1$.

The **derivative** of a function $f$ is a function $f'$ such that 
$$
f'(x) = \lim_{h\rightarrow 0} \frac{f(x+h)-f(x)}{h}
$$
at every $x$ in the domain of $f$ where the limit exists.

We say $f$ is **differentiable** at $a$ if $f'(a)$ is defined (limit exists).  
We say $f$ is **differentiable everywhere** if $f'$ is defined on the entire domain of $f$. 

A point $(x,y)$ is on the graph if and only if $y = f(x)$.
The **graph** of a real-valued function $f$ is the set $\{(x,f(x)) \mid x \in Dom(f)\}$. 
For any $x$, there is at most one point on the graph that has this $x$ as its x-coordinate. That is, the graph of $f$ must pass the **Vertical Line Test**.
A graph for which every horizontal line intersects it in at most one point (passes the **Horizontal Line Test**) has an inverse. Conversely, if $f$ has an inverse then $f$ passes the horizontal line test.


**Example 2: Find the derivative of $f(x) = x^3+x$.**

We want to find the general equation of $f'(x) = \frac{\lim_{h\rightarrow 0} f(x+h)-f(x)}{h}$. We have
$$
\begin{align*}
f'(x) &= \lim_{h\rightarrow 0}\frac{ f(x+h)-f(x)}{h} \\
&= \lim_{h\rightarrow 0}\frac{ ((x+h)^3 + (x+h)) - (x^3+x)}{h} \\
&= \lim_{h\rightarrow 0}\frac{3x^2h + 2xh^2+h^3+h}{h} \\ 
&= \lim_{h\rightarrow 0} 3x^2 + 2xh+h^2+1 \\ 
&= 3x^2+1.
\end{align*}
$$
We can thus find the equation for a particular tangent line.

**Example 3: Find the equation for the tangent line to $y = x^3+x$ at $(1,2)$.**

The slope is $f'(1) = 3(1)^2 + 1 = 4$. The equation of the tangent line of $f$ at $(1,2)$ is $y-2=4(x-1), y = 4x-2$.


**Example 4: Find the derivative of $f(x) = x^5$**.

We have
$$
\begin{align}
f'(x) &= \lim_{h\rightarrow 0} \frac{(x+h)^5-x^5}{h} \\
&= \lim_{h \rightarrow 0}(5x^4 + h(\textnormal{something})) \\
&= 5x^4
\end{align}
$$
since the $x^5$ cancels, $5x^4h$ term divide by $h$ is $5x^4$, and every other term has at least $h^2$ so after dividing $h$ they will all have a factor of $h$, which cancels when $h = 0$.



We can generalize this idea.

**Example 5: Let $f(x) = x^n$, where $n$ is an integer. Find $f'(x)$.**

We have
$$
\begin{align*}
f'(x) &= \lim_{h\rightarrow 0} \frac{f(x+h)-f(x)}{h} \\
&= \lim_{h\rightarrow 0} \frac{(x+h)^n-(x)^n}{h} \\
&= \lim_{h\rightarrow 0} \frac{(x^n + \binom{n}{1}x^{n-1}h+\binom{n}{2}x^{n-2}h^2 + \cdots + h^n) - x^n}{h} \\
&= \lim_{h\rightarrow 0} \frac{\binom{n}{1}x^{n-1}h+\binom{n}{2}x^{n-2}h^2 + \cdots + h^n}{h} \\
&= \lim_{h\rightarrow 0} \left(\binom{n}{1}x^{n-1}+\binom{n}{2}x^{n-2}h + \cdots + h^{n-1}\right) \\
&= \binom{n}{1}x^{n-1} = nx^{n-1}.
\end{align*}
$$
We can also do the negative case. We look at $n=-m$ where $m$ is a positive integer. 
$$
\begin{align*}
f'(x) &= \lim_{h\rightarrow 0} \frac{f(x+h) - f(x)}{h} \\
&= \lim_{h\rightarrow 0} \frac{\frac{1}{(x+h)^m} - \frac{1}{x^{m}}}{h} \\
&= \lim_{h\rightarrow 0} \frac{\frac{x^m-(x+h)^m}{x(x+h)^m}}{h} \\
&= \lim_{h\rightarrow 0} \frac{x^m - (x+h)^m}{h(x(x+h))^m} \\
&= \lim_{h\rightarrow 0} \frac{-\left(\binom{m}{1}x^{m-1} + \binom{m}{2}x^{m-2}h+\cdots+h^{m-1}\right)}{(x(x+h))^m}.
\end{align*}
$$
Then, we can plug in $h = 0$ to get $f'(x) = \lim_{h\rightarrow 0} \frac{mx^{m-1}}{x^{2m}} = -\frac{m}{x^{m+1}} = -mx^{-m-1}$. Thus, the idea that $f'(x) = nx^{n-1}$ also works for negative $n$. 

**Power Rule:** If $n$ is an integer, then $\frac{d}{dx}(x^n) = nx^{n-1}$.  
Also, power rule works for all real exponent $n$. 
proof #todo 



The derivative is undefined at a point when:

1 - The function $f$ is not continuous at that point. 
Since $f$ is not continuous at $a$, numerator doesn't approach $0$ since $f(a+h)$ doesn't approach $f(a)$ as $h$ approaches $0$ for discontinuous function at $a$. Since numerator approaches some nonzero number and denominator approaches $0$ (gets arbitrarily small), limit is infinity so it's undefined.
Thus, in order for a function to be differentiable at a point, it must also be continuous at that point.


2 - The function $f$ has a sharp corner at that point
We obtain two different slopes depending on which side we approach from.

3 - The function has a vertical tangent line at that point
Vertical line means slope approaches infinity, which is undefined. We prove formally by limits. 
proof (Problem 3.8a) #todo 



A function $f$ is **differentiable** if $f'(x)$ is defined for all $x \in Dom(f)$.
Moreover, $f$ is differentiable at some point $a$ if $f'(a)$ exists.


#### Properties of Differentiable Functions
Let $f$ and $g$ are differentiable functions

$(f+g)'(x) = f'(x) + g'(x)$ because derivatives are essentially limits, which have distributive property.
$$
\begin{align*}
(f+g)'(x) &= \lim_{h\rightarrow 0} ]frac{(f+g)(x+h) - (f+g)(x)}{h} \\
&= \lim_{h \rightarrow 0} \frac{f(x+h) + g(x+h) - f(x) - g(x)}{h} \\
&= \lim_{h \rightarrow 0} \left( \frac{f(x+h)-f(x)}{h} + \frac{g(x+h) - g(x)}{h} \right) \\
&= \lim_{h \rightarrow 0} \left( \frac{f(x+h)-f(x)}{h} \right) + \lim_{h \rightarrow 0} \left( \frac{g(x+h) - g(x)}{h} \right) \\
&- f'(x) + g'(x).
\end{align*}
$$
If $c$ is a constant, $(cf)' = cf'$ because
$$
\begin{align*}
(cf)'(x) &= \lim_{h \rightarrow 0} \frac{(cf)(x+h) - (cf)(x)}{h} \\
&= \lim_{h\rightarrow 0} \frac{cf(x+h)  -cf(x)}{h} \\
&= \lim_{h \rightarrow 0} c \cdot \frac{f(x+h) - f(x)}{h} \\
&= c\lim_{h\rightarrow 0} \frac{f(x+h) - f(x)}{h} \\
&= cf'(x).
\end{align*}
$$

Thus, the derivative is **linear**:
- The derivative of a sum of function is the sum of derivative of the individual functions.
- We can pull out a constant factor from the derivative.

**Example 6: Compute $f'(x)$ where $f(x) = 2x^3 - x^2 + 5x + 6$.**

$$
\begin{align*}
f'(x) &= (2x^3=x^2+5x+6)' \\
&= (2x^3)' + (-x^2)' + (5x)' + (6)' \\
&= 2(x^3)' - (x^2)' + 5(x)' + 6(1)' \\
&= 2(3x^2) - (2x) + 5(1) + 6(0) \\
&= 6x^2 - 2x + 5.  \\
\end{align*}
$$


**Example 7: Compute $f'(x)$ where $f(x) = 5x^8 - 12x^3 + 200x^2$.**

$f'(x) = 5 \cdot 8x^7 - 12 \cdot 3 x^2 + 200 \cdot  2x = 40x^7 -36x^2 + 400x$. 


**Example 8: Compute $f'(x)$ where $f(x) = \frac{2}{x^4} - \frac{3}{x} - 4x^3$.**

We use power rule by making the exponents negative, so $f'(x) = 2x^{-4} - 3x^{-1} -4x^3 = -8x^{-5} +3x^{-2}=12x^2$.

**Example 9: Compute $f'(x)$ where $f(x) = (2x+3)^3$.**

We can expand $f(x) = (2x+3)^3 = 8x^3 + 36x^2 + 54x + 27$. Then, derivative is $f'(x) = (8x^3 + 36x^2 + 54x + 27)' = 24x^2 + 72x + 54$.
We can also solve this using chain rule.





Let $f$ and $g$ be differentiable functions. Find a formula for $(fg)'$.


$(fg)'(x) = \lim_{h\rightarrow 0} \frac{(fg)(x+h) - (fg)(x)}{h} = \lim_{h\rightarrow 0} \frac{f(x+h)g(x+h) - f(x)g(x)}{h}$.  

We can treat this like area. Let $\triangle f = f(x+h) - f(x)$ and $\triangle g = g(x+h) - g(x)$. 

Then, $f(x+h)g(x+h) = f(x)g(x) + f(x)\cdot \triangle g + g(x) \cdot \triangle f + \triangle f \cdot \triangle g$. 
We thus have
$$
\begin{align*}
(fg)'(x) &= \lim_{h\rightarrow 0} \frac{f(x+h)g(x+h) - f(x)g(x)}{h} \\
&= \lim_{h\rightarrow 0} \frac{f(x)\cdot \triangle g + g(x) \cdot \triangle f + \triangle f \cdot \triangle g}{h} \\
&= \lim_{h\rightarrow 0} \frac{f(x)\cdot \triangle g}{h} + \lim_{h\rightarrow 0} \frac{g(x) \cdot \triangle f}{h} + \lim_{h\rightarrow 0} \frac{\triangle f \cdot \triangle g}{h}.
\end{align*}
$$
Note $\triangle f = f(x+h) - f(x)$, so $\lim_{h\rightarrow 0}\triangle f = \lim_{h\rightarrow 0} f(x+h) - f(x) = f(x)-f(x) = 0$. Similarly, $\lim_{h \rightarrow 0} \triangle g = 0$. Thus, 

$$
\begin{align*}
(fg)'(x) &=  \lim_{h\rightarrow 0} \frac{f(x)\cdot \triangle g}{h} + \lim_{h\rightarrow 0} \frac{g(x) \cdot \triangle f}{h} + 0.

\end{align*}
$$
We can also take out the $f(x)$ and $g(x)$, since they are constants with respect to $h$ (doesn't get affected by the limit). Thus,
$$
\begin{align*}
(fg)'(x) &=  f(x)\lim_{h\rightarrow 0} \frac{\triangle g}{h} + g(x)\lim_{h\rightarrow 0} \frac{\triangle f}{h} \\
&=  f(x)\lim_{h\rightarrow 0} \frac{g(x+h)-g(x)}{h} + g(x)\lim_{h\rightarrow 0} \frac{f(x+h)-f(x)}{h} \\
&= f(x)g'(x) + g(x)f'(x).
\end{align*}
$$

The **product rule** is
$$
(fg)'(x) = f(x)g'(x) + g(x)f'(x).
$$


The **quotient rule** is
$$
\left(\frac{f}{g}\right)'(x) = \frac{f'(x)g(x) + f(x)g'(x)}{(g(x))^2}. 
$$

proof (Exercise 3.3.3) #todo 




**Example 10: Compute $\frac{d}{dx}(\sin(x))$.**
Let $f(x) = \sin(x)$. Then, 
$$
\begin{align*}
f'(x) &= \lim_{h\rightarrow 0} \frac{\sin(x+h) - \sin(x)}{h} \\
&= \lim_{h\rightarrow 0} \frac{\sin(x)\cos(h) + \sin(h)\cos(x) - \sin(x)}{h} \\
&= \lim_{h\rightarrow 0} \frac{\sin(x)(\cos(h)-1)}{h} + \lim_{h\rightarrow 0} \frac{\sin(h)\cos(x)}{h} \\
&= (\sin(x))\lim_{h\rightarrow 0} \frac{(\cos(h)-1)}{h} + (\cos(x))\lim_{h\rightarrow 0} \frac{\sin(h)}{h}.
\end{align*}
$$
We can pull out $\sin(x)$ and $\cos(x)$ because they are not affected by $\lim_{h \rightarrow 0}$. Note from previously that $\lim_{h\rightarrow 0} \frac{(\cos(h)-1)}{h} = 0$ and $\lim_{h\rightarrow 0} \frac{\sin(h)}{h} = 1$. Thus,
$$
\frac{d}{dx}(\sin(x)) = f'(x) = (\sin(x))(0) + (\cos(x))(1) = \cos(x).
$$
Similarly, we can also show that $\frac{d}{dx}(cos(x)) = -\sin(x)$.

Derivatives of all trig functions: (Problem 3.14) #todo 


#### Identity Derivative
- $\frac{d}{dx} e^x = e^x$, so if $f(x) = ce^x$ for any $c$, $f' = f$.
- $\frac{d}{dx}(\log(x)) = \frac{1}{x}$ for $x>0$.

























