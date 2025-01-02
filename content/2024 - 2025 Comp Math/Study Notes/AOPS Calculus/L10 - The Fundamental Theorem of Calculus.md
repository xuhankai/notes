
In Calculus, we want to answers the question: Given real numbers $a \le b$ such that the interval $[a,b]$ is in the domain of a function $f$, what is the area of the region bounded by graph $y = f(x)$, the line $x=a$, and $x=b$, and the $x$-axis?
In other words, the area under a curve.

**Example 1: The flow of oil, in barrels per hour, through a pipeline on July $9$ is given by the graph shown below. Of the following, which best approximates the total number of barrels of oil that passed through the pipeline that day? A) 500, B) 600, C) 2,400, D) 3,000, E) 4,800**

![[Pasted image 20241229102503.png]]
Number of Barrels = Hours * Barrels per hour. Thus, we want the area under the curve.

We are not given anything other than the graph, so we must estimate. Note that the graph at any moment either stays around 100 or above for y coordinate. Thus, the number of barrels is at least $100 \cdot 24 = 2400$, though we know it's more than that because the middle goes up to 200 and the area under parabola is big. 
Moreover, if we overestimate and consider the graph to be completely filled (y = 200), then number of barrels is $200 \cdot 24 = 4800$, though the graph doesn't go up to 200 on the sides, and that also covers a big area.

Thus, it must be that $2400 < Area < 4800$ with both estimates having big errors. Thus, it must be $Area = \boxed{\textnormal{D) 3,000}}$. 

Note that this graph represents the rate of flow of oil through the pipeline, which is equivalent to the derivative of number of barrels with respect to time.


Area under the curve: measure down to the x-axis.
More formally, the area under the curve of $y=f(x)$ on the interval $[a,b]$ is bounded by:
- The portion (curve) of graph $y=f(x)$ between $(a,f(a))$ and $(b,f(b))$.
- The line segment $x=a$ between $(a,0)$ and $(a,f(a))$.
- The line segment $x=a$ between $(b,0)$ and $(b,f(a))$.
- The x-axis between $(a,0)$ and $(b,0)$.

**Example 2: Let $f(x) = 4$. Find the area under $f$ on the interval $[-1,6]$.**

This is a rectangle with length $6-(-1)=7$ and height $4$. Thus, area is $7 \cdot 4 = \boxed{28}$. 

**Example 3: Let $f(x) = 5-2x$. Find the area under $f$ on the interval $[0,2]$.**

At $x = 0, f(x) = 5-0 = 5$. At $x = 2, f(x) = 5-2(2) = 1$. Since $f(x)$ is linear (straight line), the shape under the curve is a trapezoid with bases $5,1$ and height $2-0 = 2$. Thus, area is $\frac{2(5+1)}{2} = \boxed{6}$.

**Example 4: Let $f(x) = \sqrt{9-x^2}$. Find the area under $f$ on the interval $[0,1]$.**

We have $y^2 = 9-x^2, x^2+y^2=3^2$, and $y\ge 0$ by square root function. Thus, $f(x)$ is a semi circle centered at origin with radius $3$.
![[Pasted image 20241229114505.png]]

We can divide the region into a sector and a triangle. 
The triangle has length $1$ and height $\sqrt{3^2-1^2} = \sqrt{8}$. Thus, area is $\frac{\sqrt{8}}{2} = \frac{2\sqrt{2}}{2} = \sqrt{2}$. 
The circle has a area of $3^2 \pi = 9\pi$, so area of sector is $\frac{\theta}{2\pi}\cdot 9\pi = \frac{9}{2}\theta$. 
To find $\theta$, we draw an upside down triangle. This triangle has length $1$, height $\sqrt{8}$, and radius $3$. Thus, $\theta = \sin^{-1}(\frac{1}{3})$. 
Thus, total area is $\sqrt{2} + \frac{9}{2} \sin^{-1}(\frac{1}{3}) \approx 2.943$. 

The **signed** area is the area under the curve where the area can be positive or negative. That is, we count the area is above the x-axis as positive and the area below the x-axis as negative. 



We can approximate the area under the curve using rectangle areas.

**Example 5: Find the area under the curve $f(x) = x^2$ on the interval $[1,2]$.**

Length of segment is $2-1 = 1$.
Let $n$ be any positive integer. We can draw $n$ rectangles next to each other and all under the curve, each with width $\frac{1}{n}$. The $i^{th}$ rectangle will have left side at $x = 1+\frac{i}{n}$ and right side at $x = 1 + \frac{i+1}{n}$. Thus, height of $i^{th}$ triangle is $f(1 + \frac{i}{n}) = (1+\frac{i}{n})^2$. 
Total area is then 
$$
\begin{align}
\sum_{i=0}^{n-1} \frac{1}{n} \cdot \left(1 + \frac{i}{n}\right)^2 &= \sum_{i=0}^{n-1} \frac{1}{n} \cdot \left(\frac{n+i}{n}\right)^2 \\
&= \frac{1}{n^3}\sum_{i=0}^{n-1} (n+i)^2 \\
&= \frac{1}{n^3}\sum_{i=0}^{n-1} (n^2+2ni + i^2) \\
&= \frac{1}{n^3}\left(\sum_{i=0}^{n-1} n^2+\sum_{i=0}^{n-1}2ni + \sum_{i=0}^{n-1}i^2)\right) \\
&= \frac{1}{n^3}\left(n^3+2n\left(\frac{(n-1)n}{2}\right) + \frac{(n-1)(n)(2n-1)}{6} \right) \\
&= \frac{1}{n^3}\left(\frac{7}{3}n^3 - \frac{3}{2}n^2 + \frac{1}{6}n \right) \\
&= \frac{7}{3} - \frac{3}{2n} + \frac{1}{6n^2}.
\end{align}
$$
We will get the best approximation as $n$ approaches infinity. Thus, area is 
$$
\lim_{n \rightarrow \infty} \frac{7}{3} - \frac{3}{2n} + \frac{1}{6n^2} = \boxed{\frac{7}{3}}.
$$

We can also calculate an overestimate of the area under the curve. Where instead of the $i^{th}$ rectangle's height being based on the right, so $f(1 + \frac{i+1}{n}) = (1+\frac{i+1}{n})^2$ instead of $f(1 + \frac{i}{n}) = (1+\frac{i}{n})^2$. After doing similar calculations, we find that the approximation as $n$ approaches infinity is also $\frac{7}{3}$.


For general functions, we can let $L$ be an underestimation of the area under the the curve (using areas of rectangles), and let $U$ be an overestimation. Then by Squeeze Theorem, the true area must be between $L$ and $U$.

Let $f$ be a function defined on an interval $[a,b]$. We will compute the signed area under curve $y = f(x)$ on interval $[a,b]$.

A **partition** $P$ of a closed interval $[a,b]$ into $n$ parts is a sequence $a = x_0 < x_1 < x_2 < \cdots < x_{n-1}<x_n = b$. 
In other words, we've chosen $n+1$ values of $x$ that divides up the interval $[a,b]$ into $n$ smaller intervals: $[x_0,x_1] \cup [x_1,x_2] \cup [x_2,x_3]\cup \cdots \cup [x_{n-1},x_n]$ where $a = x_0$ and $b = x_n$.

Each interval will be the base of one of the rectangles used for approximating. In general, the $x$'s don't have to be evenly spaced (rectangles don't necessarily must have the same width).


Note we can't just pick left or right bounds of rectangles as height. Based on the nature of concavity of some functions, some rectangles may be over the curve while others may be under. Thus, we don't know whether we are overestimating or under estimating.

We can make the height the one that will always be below the curve for under estimation, and pick the height that will be above the curve for over estimation (whichever one it is).

For partition $P$, let $h_i$ be the minimum value of $f(x)$ on the $i^{th}$ piece of partition. That is, $h_i = \inf \{f(x) | x \in [x_i,x_{i+1}]\}$ for all $0 \le i < n$, where $\inf$ stands for "infimum", the greatest lower bound (greatest height under the curve).

The underestimation of signed area of the region under the curve is
$$
l(f,P) = \sum_{i=0}^{n-1} h_i(x_{i+1}-x_i)
$$
where $l$ is the lower bound that depends on both our function $f$ and partition $P$. This sum $l(f,P)$ is known as a **lower Darboux sum**.

Also note that the height doesn't have to be at the left or right of a rectangle, it may be in the middle. For example, if the concavity changes $[x_i,x_{i+1}]$, the lower bound of height is in the middle.

Similarly, let $H_i$ be the maximum value of $f(x)$ on the $i^{th}$ piece of partition. That is, $H_i = \inf \{f(x) | x \in [x_i,x_{i+1}]\}$ for all $0 \le i < n$, where $\sup$ stands for "supremum", the least upper bound (smallest height above the curve).

The overestimation for the signed area of region under the curve is
is
$$
u(f,P) = \sum_{i=0}^{n-1} H_i(x_{i+1}-x_i)
$$
where $u(f,P)$ is known as the **upper Darboux sum**.

Thus, for any partition $P$ we get a lower estimate $l(f,P)$ and a upper estimate $u(f,P)$ of the signed area.

If we use partitions with very thin rectangles, both estimates will be very close to the actual signed area.


Let $f$ be a continuous function defined on a closed interval $[a,b]$. Let
$$
L_{a}^{b}(f) = \sup\{l(f,P) | P \textnormal{ is a partition of } [a,b]\}
$$
and 
$$
U_{a}^{b}(f) = \inf\{u(f,P) | P \textnormal{ is a partition of } [a,b]\}
$$
where 
- $L_{a}^{b}(f)$ is the **lower Darboux integral** over $[a,b]$: the least upper bound of the set of all possible values of lower Darboux sums for some partition (the smallest value still $\ge$ the largest possible lower Darboux sum = the closest approximation of area from an underestimate).
- $U_{a}^{b}(f)$ is the **upper Darboux integral** over $[a,b]$: the greatest lower bound of the set of all possible values of upper Darboux sums for some partition (similarly, also the closest approximation of area from an overestimate).

If $L_{a}^{b}(f) = U_{a}^{b}(f)$, then this quantity is the **definite integral** of $f$ over $[a,b]$, which is equivalent to the signed area under the curve.

For "nice" functions, it is always true that $L_{a}^{b}(f) = U_{a}^{b}(f)$. 
(vague definition and without proof) #todo 


If $f$ is a continuous function defined on an interval $[a,b]$, then the signed area under the curve $y = f(x)$ on the interval $[a,b]$ is called the definite integral, denoted by
$$
\int_{a}^{b} f(x) dx.
$$
The symbol $\int$ is the **integral sign** (looks like "S" for "sum") The process of evaluating the integral is called **integration**.
The numbers $a$ and $b$ are called the **limits of integration**.

To calculate this, divide $[a,b]$ into little pieces and approximate the signed area under $f$ using rectangles with the partitions as it's width and the value of the function as it's height. Here $dx$ is the width of an infinitesimally small rectangle whose height is $f(x)$. 

We use an under estimate and an over estimate of the area. As we partition the rectangles more accurately, the lower bound (under estimate) will rise and the upper bound (over estimate) will fall. If they meet, then the value at which they meet is the signed area under the curve.

We construct this idea using **Riemann Sum** for any partition of the integral. We choose *any* point in each piece of the partition as the height of the rectangle. That is, let $P$ be a partition $a = x_0 < x_1 < x_2 < \cdots < x_n = b$ and let $w_i \in [x_i,x_{i+1}]$ be any point in the $i^{th}$ piece of partition. Then, the **Riemann Sum** of this partition and choice of points is
$$
\sum_{i=0}^{n-1} (x_{i+1}-x_i) f(w_i)
$$
where $(x_{i+1}-x_i)$ is the width and $f(w_i)$ is the height of the $i^{th}$ rectangle.

Here, we can choose $w_i$ such that $f(w_i)$ is minimal (giving our lower Darboux sum) or such that $f(w_i)$ is maximal (giving our upper Darboux sum). In application, common choices for $w_i \in [x_i,x_{i+1}]$ are:
- Left Riemann Sum: $w_i = x_i$.
- Right Riemann Sum: $w_i = x_{i+1}$.
- Midpoint Riemann Sum: $w_i = (x_i + x_{i+1}))/2$.



If $F$ and $f$ are functions such that $F' = f$, then $F$ is a **antiderivative** of $f$.

Let $f$ be a continuous function on $[a,b]$ with antiderivative $F$. Assume the antiderivative $F$ exists. We can then use **Mean Value Theorem** since $F$ is continuous on $[a,b]$ and differentiable on $(a,b)$.

Let $P$ be any partition of $[a,b]$. For each interval $[x_i,x_{i+1}]$ in the partition, Mean Value Theorem states that there is real $c_i \in (x_i,x_{i+1})$ such that $f(c_i) = F'(c_i) = \frac{F(x_{i+1}) - F(x_i)}{x_{i+1}-x_i}$. In other words, there is some $x$ value in interval $(x_i, x_{i+1})$ where the instantaneous rate of change (derivative) is equal to the average rate of change over the interval (rise over run of endpoints). 
Thus, we know there must exist $c_i \in (x_i,x_{i+1})$ with height $f(c_i)$ and area
$$
f(c_i)(x_{i+1}-x_i) = F(x_{i+1}) - F(x_i).
$$

If we sum up the areas of all rectangles, we have 
$$
(F({x_2}) - F(x_1)) + (F({x_3}) - F(x_2))) + \cdots + F({x_{n}}) - F(x_{n-1})) = F({x_n})-F({x_1}) = F(b)-F(a).
$$
Thus, if we partition $[a,b]$ into infinitesimally small rectangles we get
$$
\int_{a}^{b} f(x)dx = F(b) - F(a).
$$


Let $f$ be a continuous function and $x_0$ be some real number in the domain of $f$.

Define function $g$ such that $g(x) = \int_{x_0}^{x} f(t) dt$ for all $x$ in domain of $f$, where $t$ is the variable $f$ is defined on and $t$ is the upper limit of integration. Here, $g(x)$ is an **accumulation function** because it "accumulates" area from $x_0$ to $x$. For example, if $x_0 = 0$ and $x = 3$, then $g(3) = \int_0^3 f(t)dt$. 

By Fundamental Theorem of Calculus, $g(x) = F(x) - F(x_0)$, so $g'(x) = f(x) - 0 = f(x)$ since derivative of $F(x)$ is $f(x)$ and derivative of $F(x_0)$ is $0$ since $F(x_0)$ is constant.

Fundamental Theorem of Calculus: if $f$ is a continuous function with $x_0$ in the domain of $f$, and $g(x) = \int_{x_0}^x f(t) dt$ for all defined $x$, then $g'(x) = f(x)$.

Thus, derivative and integral are inverse operations: taking the derivative of the integral of a function gives back the original function.

**Example 6: What is function $f(x) = \int_1^x \frac{dt}{t}$?** 

An antiderivative of $\frac{1}{t} = \ln{t}$. Applying Fundamental Theorem of Calculus, $f(x) = \ln{x} - \ln{1} = \ln_{x} - 0 = \ln{x}$. Thus, 
$$
f(x) = \ln(x) = \int_1^{x} \frac{dt}{t}.
$$
We can thus let the ==definition== of natural log function be $\int_1^{x} \frac{dt}{t}$. 





