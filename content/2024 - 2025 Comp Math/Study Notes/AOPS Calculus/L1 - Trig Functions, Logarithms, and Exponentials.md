Basics questions of Calculus 
**Derivatives:** The slope of line **tangent** to graph of $y = f(x)$ at point $(a,f(a))$
**Integral:** The area under the curve

The tangent line of a point is **unique**.

The equation of a line passing through point $(x_1,y_1)$ can be expressed as
$$
m_t = \frac{y-y_1}{x-x_1}$
$$
for some $x,y,m_t$ where $m_t$ is the slope.
We then get $y = m_t(x-x_1) + y_1$.

##### Idea for finding the derivative( getting $m_t$):
Let $(x_1,y_1) = (1,1)$, and $f(x) = x^2$. Let's find the $m_t$ such that it passes through $(1,1)$ and touches $f(x) = x^2$ exactly once. 
Note that the equation of the line is $y = m_t(x-1) + 1$. Also, since the line passes through $f(x)$, there is some $(x,y)$ such that $y = x^2$ and $y  = m_t(x-1) + 1$. Thus, we have $x^2  = m_t(x-1) + 1$.
Since this line only touches $f(x)$ once, there must be exactly **one solution** or $x$ to the quadratic $x^2 - m_tx + m_t - 1$.
Thus, $m_t^2 - 4(m_t-1) = 0, (m_t-2)^2 = 0, m_t = 2$. 
Thus, the equation of the line is then $y = 2(x-1) + 1 = \boxed{2x-1}$.

(Note that the vertical line x = 1 also touches f(x) at exactly one point, but we didn't count this since the slope will be undefined then)


### Trig functions Review
**Radians:** the length of the arc subtending the angle, $\boxed{2\pi \textnormal{ radians} = 360^{\circ}}$
In a unit circle, $y = \sin{\theta}$ and $x = \cos{\theta}$.

**Domain and Range:**
The domain of $\tan{\theta}$ is $\{x | x \neq \frac{\pi}{2} + k\pi, x \in \mathbb{R}, k \in \mathbb{Z}\}$.
The range of $\sin$ and $\cos$ are both $[-1,1]$. 
The range of $\tan$ is $[-\infty, \infty]$.

**Period:**
The period of $\sin$ and $\cos$ is $2\pi$ because $\sin(x) = \sin(x+2\pi)$.
The period of $\tan$ is $\pi$ because $\tan(x) = \tan(x+\pi)$.

**Pythagorean Identity:** $\sin^2{\theta} + \cos^2{\theta} = 1$.

**Angle Sum Identity:**
$$
\begin{align}
\sin(a+b) = \sin{a}\cos{b}+\cos{a}\sin{b} \\
\cos(a+b) = \cos{a}\cos{b}-\sin{a}\sin{b} \\
\end{align}
$$

**Inverses:**
Functions that fail the horizontal line test do not have an inverse( if periodic). For example, $\sin{x}$ does not have an inverse, since it's domain is $\mathbb{R}$ and it's periodic.

We define $\sin^{-1}x = \arcsin{x}$ where for all $x$ lying in range $-\frac{\pi}{2} \le x \le \frac{\pi}{2}$, it must satisfy
$$
\sin^{-1}(\sin{x}) = x
$$
(in other words $\arcsin{x}$ is the inverse only for that range). We can do this since we've restricted the domain of $x$. As a result, the domain of $\sin^{-1}$ is $[-1,1]$. Note that this is not the true inverse since it is undefined. 

We define Trig Function Inverses based on what's natural for its period:
$\cos^{-1}{x} = \arccos{x}$ is defined for all $0 \le x \le \pi$ satisfying $\cos^{-1}(\cos{x}) = x$.
The range of $\cos^{-1}$ is thus $[0,\pi]$. 
$\tan^{-1} = \arctan{x}$ is defined for all $-\frac{\pi}{2} < x < \frac{\pi}{2}$ satisfying $\tan^{-1}(\tan{x}) = x$.

#### Solving Hard Trig Equations
**Example 1: Find all $x$ such that $\sin{x} = \frac{x}{100}$.**
This seems difficult algebraically, we can only find $\sin{0} = \frac{0}{100} = 0$. So we ==resort to graphs==. We try to find the intersection points of $y = \sin{x}$ and $y = \frac{x}{100}$.
There is 1 intersection point between $0$ and $2\pi$, 2 intersection points between $2\pi$ and $4\pi$, 2 intersection points between $4\pi$ and $6\pi$, etc. It goes on until $\frac{x}{100}$ exits range $[-1,1]$. 
At $x=100,y=1$, and it does not intersect with $y = \sin(100)$, so that is not a solution.
There is around 15 interval periods of $2\pi$ from $0$ to $100$, since $31\pi < 100 < 32\pi$.
We now worry about this last partial period between $[30\pi,32\pi]$. Analyzing the graph, we see that there are 2 intersections less than $31\pi$ in this period, and none between $31\pi$ and $32\pi$.
Thus, we have
- 1 solution at $(0, 2\pi]$
- 2 solutions each for 14 periods from $(2\pi, 30\pi]$
- 2 solutions from $(30\pi, 31\pi]$
Thus, the number of positive solutions is $31$. Since $\sin$ is the same for negative, there is also $31$ negative solutions for a total of $31+31+1 = 63$ solutions, since we include $x = 0$ as well.

**Example 2: Given $(1+\sin{t})(1+\cos{t}) = \frac{5}{4}$, what is $(1-\sin{t})(1-\cos{t}).$**
We try to manipulate the equations so that we get the desired expression.
Let $k = (1-\sin{t})(1-\cos{t})$, we want to solve for $k$.
Expanding both, we get 
$$
\begin{align}
1+\sin{t}\cos{t}+\cos{t}+\sin{t}=\frac{5}{4} \\
1+\sin{t}\cos{t}-\cos{t}-\sin{t}=k \\
\end{align}.
$$
It looks natural to add & subtract the two equations, so 
$$
\begin{align}
2 + 2\sin{t}\cos{t} = \frac{5}{4}-k,=2\sin{t}\cos{t} = -\frac{3}{4}-k. \\
2\sin{t}+2\cos{t} = \frac{5}{4}+k, \sin{t}+\cos{t} = \frac{5}{8}+\frac{k}{2} \\
\end{align}.
$$
Now, notice we have the expressions $\sin{t}\cos{t}$ and $\sin{t}+\cos{t}$ in terms of $k$ and constants. Thus, this evokes the identity $(\sin{t}+\cos{t})^2 = \sin^2{t}+\cos^2{t}+2\sin{t}\cos{t} = 1 + 2\sin{t}\cos{t}$. 
Substituting, we get
$$
\begin{align}
\left(\frac{5}{8}+\frac{k}{2}\right)^2 = 1 + \left(-\frac{3}{4}-k\right).
\end{align}
$$
Thus, $\frac{1}{4}k^2 + \frac{13}{8}k - \frac{9}{64} = 0$ so $k = \frac{13}{4} \pm \sqrt{10}$.
However,, note that $k = (1-\sin{t})(1-\cos{t}) < 4$. Thus, only $\frac{13}{4}-\sqrt{10}$ works.

**Example 3: Find the smallest $x$ such that $\sin{3x} = \cos{7x}$.**
Note $\cos(x) = \sin(\frac{\pi}{2}-x)$. Thus, we want $\sin(\frac{\pi}{2}-7x) = \sin{3x}$. We can conclude that $\frac{\pi}{2}-7x + 2k\pi = 3x$ or $\pi - (\frac{\pi}{2}-7x) + 2k\pi = 3x$ for some $k$.
Representing both expressions in terms of $x$, we have
$$
\begin{align}
x = \frac{\frac{\pi}{2}+2k\pi}{10}, \\
x = \frac{\frac{\pi}{2}+2k\pi}{-4}. \\
\end{align}
$$
The lowest positive solution for each $k$ is then $k=0, x = \frac{\pi}{20}$ for first case and $k = -1, x = \frac{3}{8}\pi$ for second case. Thus, the smallest positive solution is $x = \frac{\pi}{20}$.



### Exponents and Logs Review
$a^r = b$ if and only if $r = \log_a{b}$.
$a^0 = 1$.
$a^{-r} = \frac{1}{a^r}$.
$a^{\frac{1}{q}} = \sqrt[q]{a}$ 
If $f(x)=c^x$, then:
- $f(0)=1$
- $f(a+b) = f(a)\cdot f(b)$
- $f(a-b) = \frac{f(a)}{f(b)}$
- $f(-a)=\frac{1}{f(a)}$
The domain is the set of reals, the range is the set of positive reals when $c\neq 1$.
- When $c < 1, f(x)=c^x$ is strictly decreasing
- When $c = 1, f(x) = c^x$ is constant
- When $c>1, f(x)=c^x$ is strictly increasing
Thus, $f(a+0)=f(a)f(0) = f(a)$, so $f(0)=1$.

Logarithmic Functions are the inverse of exponents: Let $f(x)=a^x$, then $f^{-1}(x) = \log_a{x}$, called log base $a$.
- $\log_a{1} = 0$
- $\log_a(xy)=\log_a(x) + \log_a(y)$
- $\log_a(\frac{x}{y})=\log_a(x) - \log_a(y)$
The domain of $\log_a$ is the set of positive reals, and the range is the set of reals.

#### Natural Exp and Log
Let $e = 1 + \frac{1}{1!}+\frac{1}{2!}+\frac{1}{3!}+\cdots \approx 2.71828$.
The exponential function is denoted $\exp(x) = e^x$ for all $x \in \mathbb{R}$. 
- $e^0 = 1$
- If $a<b$, then $e^a < e^b$
- $e^{x+y}=e^x \cdot e^y$
- $e^{x-y}=\frac{e^x}{e^y}$
The inverse of $e^x$ is $\log_e = \ln$, so $\ln{x} = y$ if and only if $x = e^y$.






