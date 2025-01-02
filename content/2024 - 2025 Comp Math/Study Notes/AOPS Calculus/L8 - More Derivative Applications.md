
We can approximate values of $f(x)$ for all $x$ near point $a$ using the tangent line to $f$ at point $(a,f(a))$. In other words, we can estimate $f(x)$ using $f'(a)$. 

**Example 1: Let $f(x) = \sqrt{x}$. Use $f$ and $f'$ to approximate $\sqrt{9.1}$.**

If we zoom in at $f(x)$ on point $(9,3)$, we see that it is close to a line.
This graph has the property that, when zoomed in very close to any point, it will look like a straight line. This type of function/graph is called a 1-dimensional manifold.

Thus, we can estimate based on the tangent line. It's slope is the derivative which is $f'(x) = \frac{1}{2}x^{-\frac{1}{2}}$. The tangent line at $x=9$ will have a slope of $\frac{1}{2}(9)^{-\frac{1}{2}} = \frac{1}{6}$. The equation of this tangent line is thus $y -3 = \frac{1}{6}(x-9), y=\frac{x-9}{6}+3$. We then plug in $x = 9.1$ for the estimated point to get $(9.1, \frac{181}{60}) \approx (9.1,3.017)$.

This equation is derived from $\triangle y = f'(x)(\triangle x)$. We can also rewrite the desired coordinates as $(9+\triangle x, f(9)+\triangle y)$.

Also, this estimation gives $f'(a) \approx \frac{\triangle y}{\triangle x} = \frac{f(a+\triangle x)-f(a)}{\triangle x}$ which is just the derivative function. Thus,
$$
f(a+\triangle x) \approx \triangle x \cdot f'(a) + f(a).
$$
If $f$ is differentiable at point $a$ and $\triangle x$ is small, we can use this equation to approximate $f(a+\triangle x)$.

**Example 2: Let $f(x) = e^x$. Use $f$ and $f'$ to approximate $e^{0.1}$.**

We can let $a = 0$, so $\triangle x = 0.1$. Then, $f(0+0.1) \approx 0.1 \cdot f'(0) + f(0) = 0.1 + 1 = \boxed{1.1}$.


Graphically, we can also see that $f(a+\triangle x ) = f(a) + \triangle y$. Thus, 
$$
\begin{align}
f(a) + \triangle y &\approx f(a) + \triangle x \cdot f'(a) \\
\triangle y &\approx \triangle x \cdot f'(a).
\end{align}
$$
The derivative gives the **rate of change** of $y$ with respect to $x$.

If we take the limit of approximation $\triangle y \approx f'(x) \triangle x$, as $\triangle x$ goes to zero, we have $dy  = f'(x)dx, \frac{dy}{dx} = f'(x)$. 

**Example 3: Ada is 160cm tall, and at 4 p.m. she measures her shadow to be 80cm long. A few minutes later Ada measures the shadow of her town's statue to be 6.70m. If the sun moves about 1 degree lower in the sky during the time between measurements, approximately how tall is the statue?**

Let $h_s$ be the height of the statue in meters. Let $\theta$ denote angle of elevation of sun, $h$ be the height of object, and $s$ be the length of shadow of object. Then, we see a right triangle so $\tan{\theta} = \frac{h}{s}$.
At 4 p.m., let the angle of elevation of the sun be $\theta_0$. Then, $\tan{\theta_0} = \frac{160}{80} = 2$.
A few minutes later, the new angle of elevation is $\theta_0 - 1^{\circ}$. We need this angle to be in radians. $1^{\circ} = \frac{\pi}{180}$ so new angle is $\theta_0 - \frac{\pi}{180}$. We can now say $\tan{(\theta_0 - \frac{\pi}{180})} = \frac{h_s}{6.7}$. 
Let $f(x) = \tan{x}$. By tangent line approximation, 
$$
\begin{align}
f(\theta_0 - \frac{\pi}{180}) &\approx f(\theta_0) + f'(\theta_0)\cdot \left(-\frac{\pi}{180}\right) \\
&= \tan{\theta_0} + \sec^2{\theta_0} \cdot -\frac{\pi}{180} \\
&= 2 + \left(\frac{\sqrt{5} \cdot 80}{80}\right)^2 \cdot -\frac{\pi}{180} \\
&= 2- \frac{\pi}{36}.
\end{align}
$$
Thus, $h_s = 6.7 \cdot \tan{(\theta_0 - \frac{\pi}{180})} = 6.7 \cdot \left(2 - \frac{\pi}{36}\right) \approx 12.815 \textnormal{ meters}$.


Replacing a function with it's tangent line approximation function at some point $x=a$ is called the **local linearization** of the function at $x=a$.
For example, since the tangent line of $f(x)=x^2$ at $x = 1$ is $y = 2x-1$, the local linearization of $f(x) = x^2$ at $x=1$ is $y(x) = 2x-1$. 

We can also check whether the tangent line approximation will produce a smaller or larger estimate when feeding in other local values. We do this using concavity. 
If $f''(x)>0$ near $x=a$, then curve is concave up meaning that the tangent line at $a$ lies below the curve. Thus, the estimated values of the tangent line will be smaller than the actual $f(x)$ values locally. Conversely, $f''(x) <0$ near $x=a$ means curve is concave down, so the tangent line at $a$ lies above the curve. Thus, estimates values will be bigger than actual values.

We can use **Newton's Method** for finding a root of a function. 
This allow us to have a numerical approximation of the root, and using it recursively can allow for the error in estimation to become smaller and smaller.

Setup: Assume we want to approximate some root $r$ of $f(x)$ such that $f(r) = 0$. 
First, make a random guess $r_0$ (can be anything, recommended to guess a value so that $f(r_0)$ is easy to calculate).
Now, the tangent line approximation at $x = r_0$ is given by $f(x) \approx (r_0) + f'(r_0)(x-r_0)$. Thus, having $f(x)= 0$ in this case will give us the root of the tangent line approximation of $x = r_0$, which is closer to the actual root. Thus, we solve for
$$
\begin{align}
0 &=(r_0) + f'(r_0)(x-r_0) \\
f'(r_0)(x-r_0) &= -f(r_0) \\
x-r_0 &= -\frac{f(r_0)}{f'(r_0)} \\
x &= r_0-\frac{f(r_0)}{f'(r_0)}.
\end{align}
$$
This $x$ value will be a better approximation for some root of $f(x)$ than $r_0$. 
We may then to this again and again (recursively), each time obtaining a better (less error) approximation of the root, though never reaching the exact root (since tangent line approximation will always be a little bit off. Each time, the new (better) root approximation is obtained by
$$
r_n = r_{n-1} - \frac{f(r_{n-1})}{f'(r_{n-1})}.
$$

**Example 4: Approximate $\sqrt[4]{21}$ using Newton's Method.**
The root (answer) can be modeled by $x = \sqrt[4]{21}, x^4 = 21, f(x) = x^4-21$. Then, $f'(x) = 4x^3$. 
We may start with $r_0 = 2$. Then, 
$$
\begin{align}
r_1 &= r_0 - \frac{f(r_0)}{f'(r_0)} = 2- \frac{-5}{32} \approx 2.15625 \\
r_2 &= 2.15625- \frac{(2.15625)^4-21}{4(2.15625)^3} \approx 2.14086 \\
r_3 &= 2.14086- \frac{(2.14086)^4-21}{4(2.14086)^3} \approx 2.14070. 
\end{align}
$$
Using calculator, we have $(2.14070)^4 \approx 21.0002$ which is very close to $21$.

Newton's Method fails when $f(x)$ has no roots or when we have $f'(r_n) = 0$ in which case we need to divide by $0$ to find $r_{n+1}$.







