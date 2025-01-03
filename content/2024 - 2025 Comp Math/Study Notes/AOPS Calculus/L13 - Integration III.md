**Example 1: Compute $\int \frac{1}{x^2-4}dx$.**

We try to use difference of squares: $\int \frac{1}{(x-2)(x+2)} dx$. However, product of sums in integration can quickly get messy.
Note $\frac{1}{x-2} - \frac{1}{x+2} = \frac{(x+2)-(x-2)}{(x-2)(x+2)} = \frac{4}{x^2+4}$. Thus, $\frac{1}{x^2+4} = \frac{1}{4}(\frac{1}{x-2}-\frac{1}{x+2})$. Thus,
$$
\begin{align}
\int \frac{1}{x^2-4}dx &= \frac{1}{4}\left(\int \frac{1}{x-2}dx - \int \frac{1}{x+2}dx\right) \\
&= \frac{1}{4}\left(\log(|x-2|) - \log(|x+2|)\right) +C\\
&= \frac{1}{4}\left(\log\left(\frac{|x-2|}{|x+2|}\right)\right) + C \\
&= \frac{1}{4}\left(\log\left(\left|\frac{x-2}{x+2}\right|\right)\right) + C.
\end{align}
$$

This technique of breaking up complicated fractions into simpler pieces that are easier to integrate is called **partial fractions**.

**Example 2: Compute $\int \frac{x+3}{x^2+4x-12}dx$.**

Factoring, we have $x^2+4x-12 =(x-2)(x+6)$. Thus, it may be that the integrand $\frac{x+3}{x^2+4x-12}$ can be represented as the sum of two fractions, one with $x-2$ as the denominator and the other with $x+6$ as the denominator. We hope to write
$$
\frac{x+3}{x^2+4x-12} = \frac{A}{x-2} + \frac{B}{x+6}
$$
where $A$ and $B$ are constants (telescoping idea). We want $x+3 = A(x+6)+ B(x-2) = Ax+6A+Bx-2B = (A+B)x+(6A-2B)$ to hold for all $x$. We thus have $A+B = 1, 6A-2B = 3$. 

We can solve this system of equations by substituting $B = 1-A$, we have $6A - 2(1-A) = 8A-2=3, A = \frac{5}{8}, B = 1-\frac{5}{8} = \frac{3}{8}$.
We can also note that it must satisfy for all $x$, so plug in $x=2$ to get $2+3 = A(2+6)+0, A = \frac{5}{8}$ and plug in $x=-6$ to get $-6+3 = B(-6-2), B = \frac{3}{8}$.

Thus, integral becomes
$$
\begin{align}
\int \frac{x+3}{x^2+4x-12}dx &= \int \left(\frac{\frac{5}{8}}{x-2} + \frac{\frac{3}{8}}{x+6}\right)dx \\
&= \frac{5}{8}\int \frac{1}{x-2}dx + \frac{3}{8}\int \frac{1}{x+6}dx \\
&= \frac{5}{8}\log(|x-2|)+\frac{3}{8}\log(|x+6|) + C.
\end{align}
$$


**Example 3: Compute $\int \frac{2}{x^3-2x^2+x-2}dx$.**

Factoring, we have $x^3-2x^2+x-2 = (x-2)(x^2+1)$. Thus, our partial fraction decomposition looks like
$$
\frac{2}{x^3-2x^2+x-2} = \frac{A}{x-2}+\frac{B}{x^2+1}.
$$
However, we then get $A(x^2+1)+B(x-2) = Ax^2+Bx + A - 2B = 2$ for all $x$, so it must be that $A = B = 0$. However, $0-2(0) = 0 \neq 2$, so this is a contradiction and thus there exists no $(A,B)$ satisfying the system.

We want to cancel out both $x^2$ and $x$ terms while keeping the constant. We can do this by letting $B$ be a polynomial of degree 1, so both $A(x^2+1)$ and $B(x-2)$ have degree 2.

We thus let
$$
\frac{2}{x^3-2x^2+x-2} = \frac{A}{x-2}+\frac{Bx+C}{x^2+1}.
$$
for some constants $A,B,C$. We have $2 = A(x^2+1)+(Bx+C)(x-2) = (A+B)x^2 + (-2B+C)x + (A-2C)$. We thus have $A+B = 0, -2B+C = 0, A-2C = 2$. Solving the system, we get $A = 2C+2, C = 2B, A = 4B+2, A+B = 5B+2 = 0, B = -\frac{2}{5}, A = -\frac{8}{5}+2 = \frac{2}{5}, C = -\frac{4}{5}$. Thus, our partial fraction decomposition is
$$
\begin{align}
\int \frac{2}{x^3-2x^2+x-2}dx &= \int \left(\frac{\frac{2}{5}}{x-2} - \frac{\frac{2}{5}x+\frac{4}{5}}{x^2+1}\right)dx \\
&= \frac{1}{5}\int \left(\frac{2}{x-2} - \frac{2x+4}{x^2+1}\right)dx \\
&= \frac{1}{5}\left(\int \frac{2}{x-2}dx - \int \frac{2x+4}{x^2+1}dx \right) \\
&= \frac{1}{5}\left(\int \frac{2}{x-2}dx - \int \frac{2x}{x^2+1}dx- \int \frac{4}{x^2+1}dx \right).
\end{align}
$$
We have $\int \frac{2}{x-2}dx = 2\int \frac{1}{x-2}dx = 2\log(|x-2|)$. 
To calculate $\int \frac{2x}{x^2+1}$, we use Chain Rule substitution to get $u = x^2+1, du = 2x dx$, so $\int \frac{2x}{x^2+1} dx = \int \frac{1}{u} du = \log(|u|) = \log(|x^2+1|)+C$. 
To calculate $\int \frac{4}{x^2+1}dx$, we have $\int \frac{4}{x^2+1}dx = 4 \int \frac{1}{x^2+1}dx = 4\arctan(x)+C$. 
Plugging this back, we have

$$
\begin{align}
\int \frac{2}{x^3-2x^2+x-2}dx &= \frac{1}{5}\left(\int \frac{2}{x-2}dx - \int \frac{2x}{x^2+1}dx- \int \frac{4}{x^2+1}dx \right) \\
&= \frac{1}{5}\left(2\log(|x-2|) - \log(|x^2+1|)- 4\arctan(x) \right)+C \\
&= \frac{2}{5}\log(|x-2|) - \frac{1}{5}\log(|x^2+1|)- \frac{4}{5} \arctan(x) +C.
\end{align}
$$


**Example 4: Evaluate $\int \frac{1}{x^2-x+1} dx$.**

There are no real roots in $x^2-x+1$, so we can't factor.
We can view this in the form of $\int \frac{1}{x^2+1}dx$ by completing the square. We have $x^2-x+1 = \left(x-\frac{1}{2}\right)^2+\frac{3}{4}$. 

We want to convert $\left(x-\frac{1}{2}\right)^2+\frac{3}{4}$ into the form $x^2+1$. To convert $\frac{3}{4} \rightarrow 1$, we can multiply top and bottom by $\frac{4}{3}$. We have $\frac{\frac{4}{3}}{\frac{4}{3}\left(x-\frac{1}{2}\right)^2+1}$. Then, we can let $u = \sqrt{\frac{4}{3}(x-\frac{1}{2})^2}$ and $\frac{du}{dx} = \frac{d}{dx}\left(\frac{2}{\sqrt{3}}(x-\frac{1}{2})\right) = \frac{2}{\sqrt{3}}, du = \frac{2}{\sqrt{3}}dx$. We then have to multiply by $\frac{\sqrt{3}}{2}$ to cancel the fraction, so  
$$
\begin{align}
\int \frac{1}{x^2-x+1} dx &= \frac{4}{3} \int \frac{1}{u^2+1} \cdot \frac{\sqrt{3}}{2}du \\
&= \frac{2\sqrt{3}}{3}\int \frac{1}{u^2+1}du \\
&= \frac{2\sqrt{3}}{3}\arctan(u)+C \\
&= \frac{2\sqrt{3}}{3}\arctan\left(\frac{2}{\sqrt{3}}\left(x-\frac{1}{2}\right)\right)+C.
\end{align} 
$$


**Example 5: Compute $\int \frac{x^4+5}{x^3-x^2-x+1} dx$.**

Factoring denominator, $x^3-x^2-x+1 = (x-1)^2(x+1)$. 

The numerator of partial fractions must have a ==lower== degree than the denominator.

Here, $4>3$ so partial fractions won't work. To use partial fractions, we first have to use polynomial division to get a fraction that has a smaller degree. We have $\frac{x^4+5}{x^3-x^2-x+1} = x+1 + \frac{2x^2+4}{x^3-x^2-x+1}$.

Now we can do partial fractions on $\frac{2x^2+4}{x^3-x^2-x+1} = \frac{2x^2+4}{(x-1)^2(x+1)}$. 
Note we can't do $\frac{2x^2+4}{(x-1)^2(x+1)} = \frac{A}{x+1}+\frac{B}{x-1}, 2x^2+4 = A(x-1)^2 + B(x-1)(x+1)$ since we only have two terms $A,B$ but three coefficients $x^2,x,c$ (constant) in the final sum. Thus, we can only get all three correct if we're lucky. Looking closer, we have $(A+B) = 2, -2A = 0, A-B = 4.$ We have $A = 0, 0-B=4, B = -4$, but $0+(-4) = -4 \neq 2$, so a contraction meaning pair $A,B$ doesn't exist. 

We want to add a third fraction so we have 3 variables to work with. We don't want to add $\frac{C}{x-1}$ because that's already incorporated in $B$. 

Note that $lcm(x-1,x+1) = (x-1)(x+1)$. This means that $A(x-1)^2 + B(x-1)(x+1)$ is a factor of $(x-1)^2(x+1) \div (x-1)(x+1) = x-1$, which $2x^2+4$ is not. We want to have as much freedom as possible. Thus, we want all the denominators to have $lcm(d_1,d_2,d_3) = (x-1)^2(x+1)$. To do this, we add $\frac{?}{(x-1)^2}$. We thus have $\frac{2x^2+4}{(x-1)^2(x+1)} = \frac{A}{x+1} + \frac{B}{x-1}+\frac{?}{(x-1)^2} = \frac{A(x-1)^2 + B(x-1)(x+1) + ?\cdot (x+1)}{(x-1)^2(x+1)}$. Note we can either choose $? = Cx+D$ or $? = C$. No matter which we pick, the sum will always have 3 terms $x^2,x,c$. Thus, we pick the $? = C$ since we want 3 variables for 3 terms. Thus,
$$
\frac{2x^2+4}{(x-1)^2(x+1)} = \frac{A}{x+1} + \frac{B}{x-1} + \frac{C}{(x-1)^2} = \frac{A(x-1)^2 + B(x-1)(x+1) + C (x+1)}{(x-1)^2(x+1)}.
$$
Expanding and equating the coefficients, we have $A+B = 2, -2A+C = 0, A-B+C = 4$. Thus, $C = 2A, 3A-B = 4, 3A-4 = B, 4A-4 = 2, A = \frac{3}{2}, B = \frac{9}{2}-4 = \frac{1}{2}, C = 3$. Thus, we plug this back in to get
$$
\begin{align}
\int \frac{x^4+5}{x^3-x^2-x+1} dx &= \int x+1 + \frac{2x^2+4}{x^3-x^2-x+1}dx \\
&= \int x+1 + \frac{\frac{3}{2}}{x+1} + \frac{\frac{1}{2}}{x-1} + \frac{3}{(x-1)^2}dx \\
&= \frac{1}{2}x^2+x + \frac{3}{2}\log(|x+1|) + \frac{1}{2}\log(|x-1|) + \int \frac{3}{(x-1)^2}dx.
\end{align}
$$
To calculate $\int \frac{3}{(x-1)^2}dx$, we substitute $u = x-1, du = 1dx$, so $\int \frac{3}{(x-1)^2} = \int \frac{3}{u^2}du = 3\int u^{-2} du = -\frac{3}{u} = \frac{3}{x-1}+C$. Thus, final answer is $\frac{1}{2}x^2+x + \frac{3}{2}\log(|x+1|) + \frac{1}{2}\log(|x-1|) - \frac{3}{x-1}+C$. 



**Steps for Partial Fractions:** Given rational function $\frac{P(x)}{Q(x)}$, 
- 1) Check that $\deg(P(x)) < \deg(Q(x))$. If $\deg(P(x)) \ge \deg(Q(x))$, then divide $Q(x)$ into $P(x)$ until $\deg(P(x)) < \deg(Q(x))$.
- 2) **Repeated linear factors:** For each factor of $Q(x)$ of the form $(ax+b)^m$, introduce terms (partial fractions sum must contain) $\frac{A_1}{ax+b}+\frac{A_2}{(ax+b)^2} + \cdots + \frac{A_m}{(ax+b)^m}$ where $A_i$'s are constants we must solve for.
- 3) **Repeated quadratic factors that cannot be factored:** For each factor of $Q(x)$ of the form $(ax^2+bx+c)^m$, introduce terms $\frac{A_1x+B_1}{ax^2+bx+c}+\frac{A_2x+B_2}{(ax^2+bx+c)^2}+\cdots + \frac{A_mx+B_m}{(ax^2+bx+c)^m}$. 


**Example 6: Compute $\int (2\log(x) + (\log(x))^2) dx$.**

Sum of two terms, so we look for $\int(udv + vdu) = uv+C$. Let $u = x$ and $v = (\log(x))^2$ so that coincidentally, $du = dx$ and $\frac{dv}{dx} = 2\log({x}) \cdot \frac{1}{x}, dv = \frac{2\log(x)}{x}dx$ which is what we have. Thus, everything nicely cancels and we get
$$
\begin{align}
\int (2\log(x) + (\log(x))^2) dx &= \int (x \cdot 2\log(x) \cdot \frac{1}{x}dx + (\log(x))^2) \cdot 1 dx \\
&= \int (u \cdot dv + v \cdot du) \\
&= uv+C \\
&= (x)(\log(x))^2 +C .
\end{align}
$$



















