**Chain Rule** is used when we want to find the derivative of a function that can be written as the composition of two or more functions $h(x) = g(f(x))$. We have
$$
h'(x) = (g(f(x)))' = g'(f(x)) \cdot f'(x).
$$

This is because
$$
\begin{align*}
(g(f(x)))' &= \lim_{h\rightarrow 0} \frac{g(f(x+h)) - g(f(x))}{h} \\
&= \lim_{h\rightarrow 0} \left( \frac{g(f(x+h)) - g(f(x))}{f(x+h)-f(x)} \cdot \frac{f(x+h)-f(x)}{h} \right) \\
&= g'(f(x)) \cdot f'(x).
\end{align*}
$$
We know that $\frac{f(x+h) - f(x)}{h} = f'(x)$. For $g'(f(x))$, we can view $f(x+h) = b$ and $f(x) = a$, so this just becomes $\lim_{h \rightarrow 0} \frac{g(f(x+h)) - g(f(x))}{f(x+h) - f(x)} = \lim_{b\rightarrow a} \frac{g(b)-g(a)}{b-a} = g'(a) = g'(f(x))$. However, proving this rigorously takes more work. We also consider the possibility that $f(x+h) - f(x)$ even when $h \neq 0$ (then we can't divide by $f(x+h) - f(x)$).

Full proof of Chain Rule in Section 3.A #todo 


Let $u = f(x), f(f(x)) = g(u)$. Then, $\frac{dg}{dx} = \frac{dg}{du} \cdot \frac{du}{dx}$. 

**Example 1: Compute $\frac{d}{dx} (2x+3)^3$.**

We can substitute $u = 2x+3$ and $g(u) = u^3 = (2x+3)^3$. Thus, $\frac{dg}{du} = 3u^2$ and $\frac{du}{dx} = 2$. Thus, $\frac{d}{dx} (2x+3)^3= 3u^2 \cdot 2 = 6(2x+3)^2$.

**Example 2: Compute $\frac{d}{dx}(2x^2+6x-2)^4$.**

Let outside function be $g(x) = x^4$ and inside function be $f(x) = 3x^2+6x-2$. Then, $g'(f(x)) = 4(3x^2+6x-2)^3$ and $f'(x) = 6+6$. Thus, $\frac{d}{dx}(3x^2+6x-2)^4 = g'(f(x))f'(x) = 4(3x^2+6x-2)^3(6x+6)$.  


**Example 3: Compute $\frac{d}{dx} \left( \frac{1}{(1+x^4)^3}\right)$.** 

We can write it using negative exponents $(1+x^4)^{-3}$. Let outside function be $g(x) = x^{-3}$ and inside function be $f(x) = 1+x^4$. Then, $g'f(x) = -3(1+x^4)^{-4}$ and $f'(x) = 4x^3$. Thus, $((1+x^4)^{-3})' = -3(1+x^4)^{-4}(4x^3) = -\frac{12x^3}{(1+x^4)^4}$. 


**Example 4: Compute $\frac{d}{dx} \sin(3x)$.**

Let outside function be $g(x) = \sin(x)$ and inside function be $f(x) = 3x$. Then, $g'(f(x)) = \cos(3x)$ and $f'(x) = 3$. Thus, $g(f(x))' = g'(f(x)) \cdot f'(x) = \cos(3x) \cdot 3 = \boxed{3\cos(3x)}$.

**Example 5: Compute $\frac{d}{dx}e^{x^2}$.**

Let outside function be $g(x) = e^x$ and inside function be $f(x) = x^2$ so $g(f(x)) = e^{x^2}$. Then, $g'(f(x)) = e^{x^2}$ and $f'(x) = 2x$. Thus, $g(f(x))' = g'(f(x)) \cdot f'(x) = e^{x^2} \cdot 2x = \boxed{2xe^{x^2}}$.


**Example 6: Compute $\frac{d}{dx} \log(\log(x))$.**

Let outside function be $g(x) = f(x) = \log(x)$. Since $\frac{d}{x}(\log(x)) = \frac{1}{x}$, we have $(\log(\log(x)))' = \frac{1}{\log(x)} \cdot \frac{1}{x} = \boxed{\frac{1}{x\log(x)}}$. 

**Example 7: Compute $\frac{d}{dx}((x^4-1)^2+8x)^7$.**

Let $g(x) = x^7$ and $f(x) = (x^4-1)^2 + 8x$. We want $f'(x)$ though $(x^4-1)^2$ is not differentiable in this form. We thus apply chain rule again on $f_1(x) = (x^4-1)^2$. We have $f_1'(x) = 2(x^4-1) \cdot 4x^3$. Thus, 
$$
\begin{align}
\frac{d}{dx}((x^4-1)^2+8x)^7 &= 7((x^4-1)^2+8x)^6 \cdot((x^4-1)^2+8x)' \\
&= 7((x^4-1)+8x)^6 \cdot (((x^4-1)^2)' + 8) \\
&= 7((x^4-1)+8x)^6 \cdot (2(x^4-1) \cdot 4x^3 + 8) \\
&= 7((x^4-1)+8x)^6 \cdot (8(x^7-x^3) + 8) \\
&= 56((x^4-1)+8x)^6 \cdot (x^7-x^3 + 1). \\

\end{align}
$$


We can find the derivative of an *inverse* function.

**Example 8: Find $(f^{-1})'(x)$, the derivative of the inverse function of $f$, assuming $f$ is differentiable.

By definition, $f(f^{-1}(x)) = x$. Thus, $\frac{d}{dx} f(f^{-1}(x)) = \frac{d}{dx}(x) = 1$. 
We can then apply chain rule to $f(f^{-1}(x))$. We have
$$
\begin{align*}
1 = \frac{d}{dx}(x) &=  \frac{d}{dx} f(f^{-1}(x)) \\
&= f'(f^{-1}(x))
 \cdot (f^{-1})'(x) \\
\end{align*}
$$
assuming $f^{-1}$ is differentiable. Note $f^{-1}$ is always differentiable at $x$ when $f'(f^{-1}(x)) \neq 0$. (proof #todo).  Thus,
$$
(f^{-1})'(x) = \frac{1}{f'(f^{-1}(x))}.
$$
Initiatively, the point $(x,f^{-1}(x))$ on $y = f^{-1}(x)$ is mapped onto the point $(f^{-1}(x),x)$ on $y = f(x)$. This mapping of inverse is reflecting the point over the line $y=x$.  If the reflection of point $x$ on $f(x)$ is point $x_1$ on $f'(x)$, then the slope of the tangent line at $x$ about $f(x)$ is the inverse of the slope of the tangent line at $x_1$ about $f'(x)$. That is, $f^{-1}(x_1) = \frac{1}{f'(x)}$.

Here, we map $(f^{-1}(x),x)$ to $(x,f^{-1}(x))$. Thus, the slope of $x$ at $f^{-1}$ is the inverse of the slope of its corresponding mapped point on $f$, which is $f^{-1}(x)$. Thus, the slope $f^{-1}(x)$ is inverse of $f'(f^{-1}(x))$ which is $\frac{1}{f'(f^{-1}(x))}$.

If $f'(a) = 0$ for some $a$ (slope is horizontal line), then $f^{-1}(f(a))$ is undefined (slope is vertical line, infinity). 



**Example 9: Compute $\frac{d}{dx}\sqrt[4]{x}$ using inverse functions.**

The inverse of $\sqrt[4]{x} : [0,\infty) \rightarrow [0,\infty)$ is $x^4$. Let $f^{-1}(x) = \sqrt[4]{x}$. Since $f^{-1}:[0,\infty) \rightarrow [0,\infty]$, we must restrict the domain of $x^4$ to $[0,\infty)$. Thus, $f(x) = x^4 : [0,\infty)$. Then $f'(x) = 4x^3$. Thus, $f'(f^{-1}(x)) = f'(\sqrt[4]{x}) = 4(\sqrt[4]{x})^3$.
Using the formula, we get $\frac{d}{dx}\sqrt[4]{x} = \frac{1}{f'(f^{-1}(x))} = \frac{1}{4(\sqrt[4]{x})^3} = \boxed{\frac{1}{4x^{\frac{3}{4}}}}$. 

==Usage==: We can use inverse to compute derivatives of functions for which we know the function and its inverse, but can't solve for the derivative using trivial rules.



**Example 10: Compute $\frac{d}{dx}(\log(x))$ using inverse functions.**

Let $f^{-1}(x) = \log(x)$, then $f(x) = e^x$. Then $\frac{d}{dx} = \frac{1}{f'(f^{-1}(x))} = \frac{1}{e^{\log(x)}} = \boxed{\frac{1}{x}}$. 


**Example 11: Compute $\frac{d}{dx}(\tan^{-1}(x))$.**

Since $(\tan(x))' = \sec^2(x)$, we have 
$$
\begin{align}
\frac{d}{dx}(\tan^{-1}(x)) &= \frac{1}{\tan'(\tan^{-1}(x))} \\
&= \frac{1}{\sec^2(\tan^{-1}(x))} \\
&= \cos^2(\tan^{-1}(x)).
\end{align}
$$
Since $\tan^{-1}(x) = \theta \iff x = \tan(\theta)$, the expression $\cos(\tan^{-1}(x))$ states we are taking the cosine of the angle $\theta$ whose tangent is $x$. 
This angle $\theta$ satisfies $x = \tan(\theta)$ in a right triangle with side lengths $1$ and $x$, so $\frac{opp}{adj} = \frac{x}{1}$. The hypotenuse has length $\sqrt{x^2+1}$. Thus, $\cos(\tan^{-1}(x)) = \cos(\theta) = \frac{1}{\sqrt{x^2+1}}$. Plugging this back in, we have
$$
\begin{align}
\frac{d}{dx}(\tan^{-1}(x))  &= \cos^2(\tan^{-1}(x)) \\
&= \left(\frac{1}{\sqrt{x^2+1}}\right)^2 \\
&= \boxed{\frac{1}{x^2+1}}.
\end{align}
$$
Note we could've also used trig identities to simplify $\frac{1}{\sec^2(\tan^{-1}(x))}$. We have $\sin^2(x)+\cos^2(x) = 1, \frac{\sin^2(x)}{\cos^2(x)} + 1 = \frac{1}{\sin^2(x)}, \tan^2(x) + 1 = \sec^2(x)$. Thus, $\sec^2(\tan^{-1}(x)) = tan^2(tan^{-1}(x)) + 1 = (x)^2+1$. Thus, $\frac{1}{\sec^2(\tan^{-1}(x))} = \frac{1}{x^2+1}$.



#### Implicit Differentiation

Sometimes the curve we differentiate also depends on a $y$ value.

Consider $x^2 + y^2 = 1$. 
One approach is to say $y = f(x) = \pm \sqrt{1-x^2}$. Then to find derivative for everything on the curve, we'd have to split into two cases (two functions) $f(x) = \sqrt{1-x^2}$ and $f(x) = -\sqrt{1-x^2}$ and calculate derivative for each individually. For example, we get for $f(x) = \sqrt{1-x^2}$, $f'(x) = \frac{1}{2}\sqrt{1-x^2} \cdot (-2x) = -x(1-x^2)^{-\frac{1}{2}}$. 

However, we can incorporate everything using implicit differentiation.
We want to find slope $\frac{dy}{dx}$. Taking derivative of both sides, we get 
$$
\begin{align*}
\frac{d}{dx}(x^2+y^2) &= \frac{d}{dx}(1) \\
\frac{d}{dx}(x^2) + \frac{d}{dx}(y^2) &= 0 \\
2x + \frac{d}{dx}(y^2) &= 0.
\end{align*}
$$

Now, we use implicit differentiation idea and treat $y$ like another function. If we are differentiating with respect to $y$, we get $2y$. However, we want to differentiate with respect to $x$. Suppose $y$ is a function of $x$. We can impose chain rule to get $\frac{d}{dx}(y^2) = \frac{d}{dx}(y(x)^2) = 2y \cdot y'(x)$. We can thus solve for $\frac{dy}{dx}$. We get
$$
\begin{align*}
2x + 2y\frac{dy}{dx} &= 0 \\
\frac{dy}{dx} = \frac{-2x}{2y} &= \boxed{-\frac{x}{y}}.
\end{align*}
$$

This process is called **implicit differentiation**, where we treat $y$ as a function of $x$ and solve for the $\frac{dy}{dx}$ when taking $y(x)'$ using chain rule. Thus, we don't have to solve for what $y$ is itself.


**Example 12: Find the slope of the tangent line to the curve $y^3 + xy^2 = 4$. at point $(3,-2)$.**

We verify that $(3,-2)$ does in fact lie on the curve $y^3+xy^2 = 4$ since $(-2)^3 + (3)(-2)^2 = -8+12 = 4$. We can then find $\frac{dy}{dx}$ using implicit differentiation. We have
$$
\begin{align*}
\frac{d}{dx}(y^3+xy^2) &= \frac{d}{dx}(4) \\
\frac{d}{dx}(y^3)+\frac{d}{dx}(xy^2) &= 0 \\
3y^2 \frac{dy}{dx} + \left(1\cdot y^2 + x\cdot2y\frac{dy}{dx} \right) &= 0 \\
y^2 + (3y^2+2xy)\frac{dy}{dx} &= 0 \\
\frac{dy}{dx} &= \frac{-y^2}{3y^2+2xy} \\
&= -\frac{y}{3y+2x}.
\end{align*}
$$
Note we can divide by $y$ since if $y = 0$, equation of curve is $0^3 + x(0)^2 = 0 \neq 4$, so $y = 0$ is not on the curve. 

The slope of the tangent at point $(3,-2)$ is $-\frac{-2}{3(-2)+2(3)} = \frac{2}{0} = \boxed{\textnormal{undefined}}$. 


**Example 13: Find the equation of the tangent line to the curve $3x^3 + 4x^2y - xy^2 + 2y^3 = 4$ at point $(-1,1)$.**

We have 
$$
\begin{align*}
\frac{d}{dx}(3x^3 + 4x^2y - xy^2 + 2y^3) &= \frac{d}{dx}(4) \\
\frac{d}{dx}(3x^3) + \frac{d}{dx}(4x^2y) - \frac{d}{dx}(xy^2) + \frac{d}{dx}(2y^3) &= 0 \\
9x^2 + \left(8x \cdot y  + 4x^2\cdot 1\frac{dy}{dx}\right) - \left(1 \cdot y^2  + x \cdot 2y \frac{dy}{dx}\right) + 6y^2\frac{dy}{dx} &= 0 \\
9x^2+8xy - y^2+(4x^2-2xy+6y^2)\frac{dy}{dx} &= 0 \\
\frac{dy}{dx}&=\frac{9x^2+8xy - y^2}{4x^2-2xy+6y^2}.
\end{align*}
$$

Thus, slope of tangent line at point $(-1,1)$ is $\frac{9(-1)^2+8(-1)(1) - (1)^2}{4(-1)^2 - 2(-1)(1) + 6(1)^2} = \frac{0}{12} = 0$.
Thus, the equation is in the form $y = (0)x + c$. We have $1 = (0)(-1)+c,c=1$. Thus, the equation of the tangent line at point $(-1,1)$ is $\boxed{y = 1}$.