
**Example 1: The expression $\frac{1}{20} \sum_{k=1}^{20} \sqrt{\frac{k}{20}}$ is a Riemann sum approximation for**
A) $\int_0^1 \sqrt{\frac{x}{20}}dx$, B) $\int_0^1 \sqrt{x} dx$, C) $\frac{1}{20} \int_0^1 \sqrt{\frac{x}{20}}dx$, D) $\frac{1}{20}\int_0^1 \sqrt{x}dx$, E) $\frac{1}{20} \int_0^{20} \sqrt{x}dx$. 

We have 
$$
\frac{1}{20} \sum_{k=1}^{20} \sqrt{\frac{k}{20}} = \frac{1}{20}\left(\sqrt{\frac{1}{20}} +\sqrt{\frac{2}{20}} +\sqrt{\frac{3}{20}} +\cdots+\sqrt{\frac{20}{20}} \right).
$$
We are adding the area of rectangles under the curve. Each rectangle has width $\triangle x = \frac{1}{20}$ and heights $\sqrt{\frac{1}{20}},\sqrt{\frac{2}{20}},...,\sqrt{\frac{20}{20}}$. 
The horizontal distance between consecutive points is $\triangle x = \frac{1}{20}$. Thus we can see $x \rightarrow x+\frac{1}{20} \iff f(x) \rightarrow f(x+\frac{1}{20}) = \sqrt{\frac{x}{20} + \frac{1}{20}}$ Thus, it is most likely that $f(x) = \sqrt{x}$. 
Thus, it may only be B), D), or E) as A) and C) have $f(x) = \sqrt{\frac{x}{20}}$. 

The last point $x_n=b$ is at $x = \frac{20}{20} = 1$. Thus, the interval ends at $b=1$, meaning it may only be B) or D) as E) ends at $20$.

This Riemann Sum is approximating the area under the curve of $f(x)$ by splitting it into $20$ rectangles. We want the number of rectangles to increase until infinity. Thus, it's just a way of approximating $\int_0^1 \sqrt{x}dx$, and the $\frac{1}{20}$ is irrelevant in this approximation. Thus, it is B).



A function $F$ is *an* **antiderivative** of $f$ if
- The domain of $F$ equals the domain of $f$.
- The function $F$ is differentiable.
- $F'=f$.

Here, we use "an" because function $f$ may have multiple different antiderivatives $F$. 
Let $F_1$ and $F_2$ both be antiderivatives of $f$, so $F_1' = F_2' = f$. Then, $(F_1-F_2)' = F_1' - F_2' = f-f = 0$. Thus, $F_1-F_2 = C$ where $C \in \mathbb{R}$ is ==any constant==.

The process of finding the antiderivative of a function is called **antidifferentiation**. 

All antiderivatives of $f$ have the from $F + c$ where $F$ is any specific antiderivative of $f$. 

However, if the domain of $f$ lies on two disjoint intervals so $f \in [a,b] \cup [c,d]$, it may be that the constants are different. That is, $F_1 - F_2 = C_1$ on $[a,b]$ and $F_1 - F_2 = C_2$ on $[c,d]$ for some antiderivatives $F_1$ and $F_2$ of $f$. 
This is because disjoint intervals does not have continuity, meaning the constants do not have to be the same. 


The **indefinite integral** of $f$ is the "general antiderivative" of $f$ (the form of every antiderivative):
$$
\int f = \int f(x) dx = F(x) + C,
$$
where $C \in \mathbb{R}$. 

The ==difference== between definite and indefinite integral is that the definite integral (accumulation function) gives us a particular antiderivative $F$ of $f$ for a fixed $x_0$, while the indefinite integral is a family of functions representing all antiderivatives of $f$.


Similar to derivatives, antiderivatives are linear:
- If $F$ and $G$ are antiderivatives of $f$ and $g$ respectively, then $F+G$ is the antiderivative of $f+g$.
	- $(F+G)' = F'+G' = f+g$.  
- If $F$ is an antiderivative of $f$ and $c \in \mathbb{R}$, then $cF$ is an antiderivative of $cf$. 
	- $(cF)' = c(F') = cf$.


**Example 2: If $n$ is any positive integer, find $\int x^n dx$. 

We know $\frac{d}{dx}x^m = mx^{m-1}$. This, $x^m$ is the antiderivative of $mx^{m-1}$. Based on this, we expect that to find the antiderivative, we increase the exponent by 1 and divide the coefficient by the new exponent $m$ (do the reverse). 
We have $x^n = \frac{d}{dx} \frac{1}{n+1}x^{n+1}$. Thus, 
$$
\int x^n dx = \frac{x^{n+1}}{n+1} + C
$$where $c \in \mathbb{R}$ and $x$ is the base (variable), since indefinite integral should incorporate the form of ==all== possible antiderivatives. 

Similarly, $\int 1 dx = \int x^0 dx = x+C$. 

This idea works for all negative powers ==except $n=-1$== since we are dividing by $n+1 = -1+1 = 0$ which is not allowed.

However, antiderivative of $n=-1 \rightarrow x^{-1}$ still exists. Since $\frac{d}{dx}(\ln{x})  =\frac{1}{x}$, it may be that $\int \frac{1}{x} dx = \ln{x} + C$. However, $\ln{x}$ is only defined for positive $x$ while $\frac{1}{x}$ is defined for all non-zero $x$. Thus, different domains lead to inaccuracy. 

If $x$ is negative, $\frac{d}{dx} (\ln(-x)) = \frac{1}{-x} \cdot (-1) = \frac{1}{x}$. Thus, we can say $\int \frac{1}{x} dx = \ln(|x|)+C$. 
Since domain of $\frac{1}{x}$ is two disjoint intervals $(-\infty,0) \cup (0,\infty)$, we have 
$$
\int \frac{dx}{x} = 
\begin{cases} 
	\ln(|x|)+C_1 & \textnormal{if }x < 0, \\
    \ln(|x|)+C_2 & \textnormal{if }x > 0 \\
\end{cases}
$$
as the pieces (intervals) can shift up and down.


**Example 3: Find $\int (2x^3 - 5x^2+2)  dx$.**
We can break down the integral into individual parts and solve (linear)
$$
\begin{align}
\int(2x^3 - 5x^2+2)dx &= 2\int x^3dx - 5\int x^2dx + 2\int 1dx \\
&= 2 \frac{x^4}{4} - 5 \frac{x^3}{3} + 2x + C \\
&= \frac{1}{2}x^4 - \frac{5}{3}x^3 + 2x + C.
\end{align}
$$
Note: when we broke it down into three integrals, we get three distinct constants $C_1 + C_2 + C_3$. However, since all constants are arbitrary their sum is also arbitrary so we can just write $C_1+C_2+C_3 = C$.


**Example 4: Evaluate $\int_1^2 \left(\frac{3}{x^3} - \frac{4}{x^5}\right) dx$.**
First calculate $\int\left(\frac{3}{x^3} - \frac{4}{x^5}\right) dx$. We have
$$
\begin{align}
\int\left(\frac{3}{x^3} - \frac{4}{x^5}\right) dx &= 3\int x^{-3}dx - 4\int x^{-5}dx \\
&= 3\frac{x^{-2}}{-2} - 4\frac{x^{-4}}{-4} + C\\
&= -\frac{3}{2}x^{-2} + \frac{1}{x^4} + C.
\end{align}
$$
Then,
$$
\begin{align}
\int_1^2 \left(\frac{3}{x^3} - \frac{4}{x^5}\right) dx &= F(2) - F(1) \\
&= \left(-\frac{3}{2}\cdot 2^{-2} + \frac{1}{2^4}\right) - \left(-\frac{3}{2}\cdot 1^{-2} + \frac{1}{1^4}\right) \\
&= \left(-\frac{3}{8} + \frac{1}{16}\right) - \left(-\frac{3}{2} + 1 \right) \\
&= -\frac{5}{16}+\frac{1}{2} = \frac{3}{16}.
\end{align}
$$
Note that $C$ cancels out.


**Example 5: A particle moves in a straight line with velocity $v(t)=4−t^2$ feet per second. What is the total distance the particle travels between time $t=0$ and $t=3$ seconds?**

$d=vt$, so we want area under the curve.

Note from $[0,2]$, $v(t) \ge 0$ and from $(2,3)$, $v(t) < 0$. The signed area of the interval is $\int_0^3 (4-t^2) dt$, which is the displacement. The distance must have all area be positive, so 
$$
d = \int_0^2(4-t^2)dt -  \int_2^3(4-t^2)dt.
$$
(doesn't go over answer in class) #todo 



**Example 6: Find $\int (3x+1)^2 dx$.**

Let $u  = 3x+1$, so $\frac{du}{dx} = 3$. We have 
$$
\int (3x+1)^2 dx = \int u^2 \frac{du}{3} =  \frac{u^3}{3} \cdot \frac{1}{3} +C= \frac{(3x+1)^3}{9}+C.
$$

**Example 7: Find $\int \sin(x) dx$ and $\int \cos(x) dx$.**

Since $\frac{d}{dx}\sin(x) = \cos(x)$ and $\frac{d}{dx}\cos(x) = -\sin(x)$. Thus, $\int -\sin(x)dx = \cos(x)+C$ so
$$
\begin{align}
\int \sin(x)dx &= -\cos(x)+C, \\ \int \cos(x) dx &= \sin(x) + C.
\end{align}
$$
**Example 8: Find $\int e^x dx$.**

Since $\frac{d}{dx}e^x = e^x, \int e^x dx = e^x + C$.


#### Integration by Substitution

$$
\begin{align}
\frac{d}{dx}(3x^2+2)^4 &= 4(3x^2+2)^3 \cdot \frac{d}{dx}(3x^2+2) \\
&= 4(3x^2+2)^3(6x) \\
&= (24x)(3x^2+2)^3.
\end{align}
$$
To integrate, we must undo this process to get from $(24x)(3x^2+2)^3$ to $(3x^2+2)^4$. 

Chain rule is defined as $\frac{df}{dx} = \frac{df}{du} \cdot \frac{du}{dx}$ for some $u$. 

We want to substitute out the complicated expression with $u$. We want to do a $u$ substitution to what looks like the expression whose ==derivative is also a part of the function==. 
Here, we can do $u = (3x^2+2)$, then we have $\int (24x)u^3 dx$. However, we also need to make this in terms of $du$. We have $\frac{du}{dx} = \frac{d}{dx}(3x^2+2) = 6x$. 

Treating $\frac{du}{dx}$ as a fraction is a **mnemonic** that only works in ==some cases==. Now, let's justify (not completely prove) $\frac{du}{dx} = u'(x) \rightarrow du = u'(x)dx$, so in this case we can treat it like a fraction. By tangent line approximation, $\triangle u \approx u'(x)\triangle x$. As $\triangle x \rightarrow 0$, the approximation approaches equality and because $\triangle u = du, \triangle x = dx$, it must be that $du = u'(x)dx$. 

Making the substitution $du = 6xdx$ leaves us with $\int(24x)u^3dx = \int 4\cdot u^3\cdot 6x \cdot dx =\int 4u^3du$. The antiderivative is thus $u^4 + C = (3x^2+2)^4 + C$. 



We use Chain Rule for antiderivatives when we have an integral of the form
$$
\int g(f(x)) f'(x) dx.
$$
We then make the substitution $u = f(x), du = f'(x)dx$ to get the integral in the form $\int g(u)du$. Take the anti derivative $G$ of $g$ to get $G(u)+C$ as the antiderivative, then rewriter in terms of $x$. 

We can also just pick the most complicated piece of the integrand for $u$ substitution.

**Example 9: Compute $\int x^2 \sqrt{x^3+1}dx$.**

The expression under the square root can't be dealt with normally, so $u = x^3+1, \frac{du}{dx} = 3x^2, du = 3x^2dx$. Then,
$$
\begin{align}
\int x^2 \sqrt{x^3+1}dx &= x^2u^{\frac{1}{2}}dx \\
&= \frac{1}{3}\int u^{\frac{1}{2}}\cdot 3x^2 dx \\
&= \frac{1}{3}\int u^{\frac{1}{2}}du \\
&= \frac{1}{3}\left(\frac{1}{2}u^{-\frac{1}{2}}\right) \\
&= \frac{1}{6\sqrt{u}} = \frac{1}{6\sqrt{x^3+1}}.
\end{align}
$$


**Example 10: Compute $\int_1^3 \frac{x-3}{2x^2-12x}dx$.**

The denominator seems more complicated, so $u = 2x^2 - 12x, \frac{du}{dx} = 4x-12, du = (4x-12)dx$. Thus,
$$
\int_1^3 \frac{x-3}{2x^2-12x}dx = \frac{1}{4}\int_1^3 \frac{1}{u}   \cdot 4(x-3)dx = \frac{1}{4}\int_{?}^{?} \frac{1}{u}du.
$$
Here, we can either switch limits to what $u$ would be at those instants, or solve the integral then rewrite as $x$. Both work.

(Doesn't show solution) #todo 


**Example 11: Compute $\int e^{38x} dx$.**

Let $u = 38x, du = 38dx$. Then, $\int e^{38x} dx = \frac{1}{38}\int e^u du$, so antiderivative is just $\frac{1}{38}e^u + C = \frac{1}{38}e^{38x}+C$.

**Example 12: Compute $\int (e^x+1)^3 dx$.**

We can't do $u = e^x+1$ since it leads to some extra terms of $e$ after taking derivative. We can thus just try expanding it.
(Doesn't show solution) #todo 


**Example 13: $\int \sin^5(\theta) \cos(\theta)d\theta$.**

Note $\frac{d}{d\theta} \sin(\theta) = \cos(\theta)$. Thus, we do $u = \sin(\theta), du = \cos(\theta)d\theta$ , so $\int \sin^5(\theta) \cos(\theta)d\theta = \int u^5 du$. 

(Doesn't show solution) #todo









