Find the max/min value of a function over a specified domain.

**Derivative** is $\textnormal{slope} = \frac{\textnormal{change in y}}{\textnormal{change in x}}$, also known as **rate of change**. Thus, the derivative at a pint is the (instantaneous) rate of change at that point. 

Local max/min values happen when derivative is $0$.

In a rocket/vehicle problem, the ==engine burns== when velocity is increasing (in the context).
Then, it stops burning and the velocity decreases.

The rocket reaches its ==highest point== when the velocity drops down to $0$ (stops moving upwards and starts falling downwards).

Parachute pops when the velocity stops decreasing (negative velocity) and starts slowly increasing again (still negative velocity).

The rocket lands when velocity reaches $0$ as velocity comes up (from negative).

==Note velocity includes direction, so put **negative** if necessary==. 

Acceleration is the slope/derivative of the velocity graph.

From [[]], if $f$ is continuous function on interval $[a,b]$, then $f$ must have a minimum and a maximum on $[a,b]$.

This point/**extrema** at $c$ must ONLY occur at one of:
- $c \in (a,b)$ and $f'(c) = 0$ 
- $c \in (a,b)$ and $f'(c) = UNDEF$
- $c = a$ or $c = b$ (endpoints)
These are called **critical points**.

A **local max** point $c$ is the max point in an open $(a,b)$ containing $c$ such that $f(c) \ge f(x)$ for any $x \in (a,b)$. Same idea for **local min**.

The **global min/max** is the min/max point over the entire domain of the function.

**First Derivative Test: Let $f$ be a function satisfying $f' \ge 0$ on an open interval to the left of $c$, $f'(c) = 0$, and $f' \le 0$ on an open interval to the right of $c$. Then, $f(c)$ is a local maximum. Similarly, if inequalities are both reversed then $f(c)$ is a local minimum.**
Since $f' \ge 0$ to the left of c, $f$ is increasing, so $f(x) \le f(c)$ for all $x$ in interval left of $c$. Similarly, $f' \le 0$ to the right of $c$ suggests $f(x) \le f(c)$ for all $x$ in interval right of $c$. Thus, $f(c)$ must be local maximum.
We can prove local minimum by reversing the inequalities.

Note: The inverse of this test doesn't always work. That is, "$f(c)$ is a local maximum, then it is not always that $f' \ge 0, f'(c) = 0, f' \le 0$".
https://chatgpt.com/share/67567fd3-23fc-8008-afb4-0d7024b1b3cf


We may also get info using **second derivative** $f''(c)$. Since $f'' <0$ means concave down, if $f'(c) = 0$ and $f''(c)<0$, then $f(c)$ is a local maximum. Similarly, if $f'(c) = 0$ and $f''(c) > 0$, then $f(c)$ is a local minimum.
To prove, we have 
$$
\begin{align}
f''(c) &= \lim_{h \rightarrow 0} \frac{f'(c+h)-f'(c)}{h}. \\
&= \lim_{h \rightarrow 0} \frac{f'(c+h)}{h}, \\
&\lim_{h \rightarrow 0} \frac{f'(c+h)}{h} > 0
\end{align}
$$
since $f'(c) = 0, f''(c)>0$ as given. Since positive, this means the fraction must have the same sign as $h$ both from the positive and negative side of approaching $0$. More formally, $f'(c+h) > 0$ when $h>0$ and $f'(c+h) <0$ when $h<0$. Thus by **First Derivative Test**, we can see that $f(c)$ is the local minimum. Flipping the inequalities proves the case for local maximum.

However, when $f''(c) = 0$, we don't know what will happen at point $c$. It may be inflection, min/max, etc. See $f(x) = x^3, f(x) = x^4, f(x) = -x^4$ for examples of $f'(0) = f''(0) = 0$ and $(0,0)$ is neither, min point, max point respectively.

**Second Derivative Test: If $f'(c) = 0$ and $f''(c) < 0$, then $f(c)$ is a local maximum. Flipping inequality ($f''(c) > 0$) means $f(c)$ is a local minimum. We don't know anything if $f''(c) = 0$.**


In cost revenue problems, let $C(x)$ be the total cost of producing $x$ items, and $R(x)$ be the revenue for selling those $x$ items. Assuming these functions are continuous and differentiable, then the profit is $P(x) = R(x) - C(x)$. 

When profit is maximized, $P'(x) = 0$, so $R'(x) - C'(x) = 0, R'(x) = C'(x)$.

$R'(x)$ is denoted as the **marginal revenue**: the amount of revenue that we get by producing $1$ more item.
$C'(x)$ is denoted as the **marginal cost**: the cost of producing $1$ more item.
("marginal" = derivative)
Thus, $R'(x) = C'(x)$ means profit is (locally) unchanged by producing another item.


**Example Problem 1: A group of people wish to charter a boat. The fee is $\$1000$ per person for the first $100$ people, but decreases by $\$5$ (for everyone) for each person beyond $100$. The chartering company will have costs of $\$40,000 + 200n$, where $n$ is the number of people on the trip. The boat's capacity is $250$. What number of people maximizes the company's profit?**

The cost of fee per person when $0 \le n \le 100$ is $1000$. The cost of fee per person when $n > 100$ is $1000 - 5(n-100) = 1500 - 5n$.
Thus, the total revenue can be modelled as a piecewise function:
$$
R(n)
\begin{cases} 
    1000n & \textnormal{if }0 \le n \le 100, \\
    n(1500 - 5n) & \textnormal{if }100 < n \le 250. \\
\end{cases}
$$
Total cost is always $C(n) = 40000 + 200n$.
If $0 \le n \le 100$, the marginal revenue is $1000$ and marginal cost is $200$. Note from previously the maximum/minimum point occurs when marginal revenue equal marginal cost, so $R'(x) = C'(x)$. Clearly this is not the case as $1000 \neq 200$. Thus, the maximum occurs in $100 < n \le 250$. We then have $R(n) = n(1500-5n) = 1500n-5n^2$. 
We want $R'(n) = C'(n)$, so $1500-10n = 200, n = \boxed{130}$.
This means the company's profit is maximized when there are $130$ people. Each person will pay $1500 - 5(130) = \$850$, total revenue is $\$110,500$ and total cost is $40000 + 200(130) = \$66,000$. Thus, total profit is $110500 - 66000 = \$44,500$.

**Example Problem 2: A soda can has a volume of 355 cubic centimeters. What are the dimensions (radius $r$ and height $h$) that minimize the can's surface area?

Volume of a cylinder is $V = \pi r^2h$ and surface area of a cylinder is $S = 2\pi r^2 + 2\pi rh = 2\pi r(r+h)$. 
We have $\pi r^2h = 355, h = \frac{355}{\pi r^2}$. Thus, we can substitute in terms of $r$ to get surface area $S(r) = 2\pi r \frac{355}{\pi r^2} + 2\pi r^2 = \frac{710}{r} + 2 \pi r^2$. This function is minimized when the derivative is either $0$, $UNDEF$, or an endpoint. We have $S'(r) = -710r^{-2}+4 \pi r$. For $S'(r) = 0$, we get $710 = 4 \pi r^3, r = \sqrt[3]{710 \div (4\pi)} \approx 3.83722$. Then $S'(r) = UNDEF$ when $r=0$, which is not in the domain of $S$ in context of this problem (can't have $r = 0$ since the can will be nothing). For endpoints, don't think it works.



 



