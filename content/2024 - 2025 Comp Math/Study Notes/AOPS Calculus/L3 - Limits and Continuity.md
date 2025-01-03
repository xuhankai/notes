Limit describes what happens as a function "approaches" a point in $\mathbb{R}$.

Consider floor function $f(x) = \lfloor x \rfloor$. 
The limit of $f(x)$ as $x$ approaches $1$ is undefined because when we approach from left of $1$, $f(x)$ approaches $0$, though when approaching from right of $1$, $f(x)$ approaches $1$. That is, limit is undefined since $\lim_{x \rightarrow 1^-} \lfloor x \rfloor  \neq \lim_{x \rightarrow 1^+} \lfloor x \rfloor$.

Consider $f(x) = \frac{\sin(x)}{x}$. 
When $x = 0$, $f(x)$ is undefined.
However, it seems that $\lim_{x \rightarrow 0} \frac{\sin(x)}{x} = 1$ by trying values close of $1$ (value table).
The definition of limit is that it approaches a value, but never reaches it.


**Definition of limit:**
Let $f$ be a real-valued function. We say
$$
\lim_{x \rightarrow a}f(x) = L
$$
if for each $\epsilon > 0$, there exists $\delta > 0$ such that $0< |x-a| < \delta$ guarantees that $|f(x)-L| < \epsilon$.

That is, ==if== (for every $\epsilon$ there is a $\delta$ such that ==if== ($x$ is within $\delta$ of $a$ but not equal to $a$), ==then== ($f(x)$ is within $\epsilon$ of $L$), ==then== the limit of $f(x)$ as $x$ approaches $a$ is $L$). 
![[Pasted image 20250101014119.png]]

If the limit is $L$, for any $\epsilon$ creating the two blue lines above and below $L$, we can always choose $\delta$ creating the two red lines to the left and right of $x$, such that the function's output stays between the blue lines whenever the input is between our chosen red lines. We must choose red lines so that all parts of the function (all $x$ such that $a-\delta < x < a+\delta$) inside the red line is also between the chosen blue lines ($L-\epsilon < f(x) < L+\epsilon$).

If a choice of red lines (by choosing $\delta$) satisfying the condition can be made for *any* blue line, then the limit is $L$.

So, this $L$ has to work for *any* positive value $\epsilon$, but once $\epsilon$ is given (chosen), we are free to choose a value $\delta$ that works.

Also note that $f(a)$ is not a part of the restriction since we want the behavior when $x$ approaches $a$, not when $x=a$.


**Example 1: Let $g(x) = x^2-1, h(x) = x-1, f(x) = \frac{g(x)}{h(x)} = \frac{(x-1)(x+1)}{x-1}$. Prove $\lim_{x\rightarrow 1}f(x) = 2$.**

Lets do some examples for picking $\epsilon$. 
Let $\epsilon = 0.1$, so we want to find $\delta > 0$ such that when $0 < |x-1| < \delta$, we have $|f(x)-2| < 0.1$. This is the same as $1.9<f(x)<2.1, x\neq 1$ for all $x$ such that $0 < |x-1| < \delta$. Thus, $1.9<x+1<2.1, 0.9<x<1.1,-0.1<x-1<0.1$ for all $x$ such that $0 < |x-1| < \delta$. Thus, it must be that $|x-1| < 0.1, \delta = 0.1$.

However, to make sure $0<|x-1| < 0.1$ implies $|f(x)-2|<0.1$, we have to work backwards from our inequality.

Suppose $\delta = 0.1$, so $0<|x-1|<0.1$. Since $f(x) = x+1$ for all $x \neq 1$ (which we don't need to prove for), $f(x) - 2 = x-1$. Thus, $|x-1|<0.1 \implies |f(x)-2|<0.1$. 


To prove $2$ is the limit, we need to check for *every* $\epsilon$.
Let $\epsilon > 0$ be arbitrary. We need to find $\delta > 0$ such that $|f(x)-2| < \epsilon$ for all $x$ such that $0 < |x-1|<\epsilon$. Since we restrict $x \neq 1$, we can say $f(x)=x+1,f(x)-2 = x-1$. Thus, $|f(x)-2| = |x-1| < \epsilon = \delta$. Thus for every $\epsilon$, it is possible to pick $\delta = \epsilon$ to satisfy the inequality. Thus, $2$ is the limit, so we proved $\lim_{x\rightarrow 1}f(x) = 2$.


**Example 2: Let $f(x) =  \begin{cases} x+1 & \textnormal{if } x \neq 1 \\ 5 & \textnormal{if } x = 1 \\ \end{cases}$. Find $\lim_{x\rightarrow 1}f(x)$.**
This is the same thing as Example 1, but with $5$ for $x=1$ instead of undefined. Note that this doesn't affect the limit, since we're restricting/ignoring $x=1$. That is, limit of $x \rightarrow 1$ does not care what happens *at* $1$, just what happens *near* $1$.


Not every function has a limit at every point (floor function). Though if a limit does exist, it is unique.

We prove this by contradiction. Let $L$ and $L'$ be two limits, and we can get arbitrarily close to both of them (graph approaches both $(a,L)$ and $(a,L')$).

To contradict, we need to find a $\epsilon>0$ such that no $\delta >0$ satisfies the restrictions.

Let's pick for any configuration, an $\epsilon$ such that the blue lines of $L$ an $L'$  don't overlap. That is, WLOG let $L'<L$. Then, we want $L'+e < L-e, 2e <L-L', e < \frac{|L-L'|}{2}$. This way, no matter what $\delta$ we pick, the red lines must include two disjoint segments. However, to satisfy the condition, the red line must only include parts of the function between the blue lines. Thus, having it also include another part of the function disjoint from this one creates a contradiction.
![[Pasted image 20250101024817.png]]

Thus, we can pick $\epsilon < \frac{|L-L'|}{2}$ and always contradict. Thus, $L$ and $l'$ cannot both be limits.


#### Properties of Limits
Let $f$ and $g$ be functions with $a$ in both its domains. If $\lim_{x\rightarrow a} f(x) = L$ and $\lim_{x\rightarrow a} g(x) = M$, then
$$
\lim_{x+a}f(x)+g(x) = L+M.
$$
Proof:
Given some $\epsilon$, since $f(x)$ has limit $L$ that works for all $\epsilon$, $L$ must also work for $\frac{\epsilon}{2}$. Thus, there exists $\delta_f$ such that $0<|x-a|<\delta_f \implies |f(x)-L| < \frac{\epsilon}{2}$. Similarly, there exists $\delta_g$ such that $0<|x-a|<\delta_g \implies |g(x)-M| < \frac{\epsilon}{2}$. 

To prove $|f(x)+g(x) - (L+M)| < \epsilon$ such that we can find $0 < |x-a| < \delta$, we use $\delta = \min(\delta_f,\delta_g)$. Then, we can be sure of $|f(x) - L| < \frac{\epsilon}{2}$ and $|g(x) - M| < \frac{\epsilon}{2}$ since the smaller set will always be inside the bigger set (WLOG let $\delta_f < \delta_g$, then $(0 < |x-a| < \delta_f) \subseteq (0 < |x-a| < \delta_g)$  implies that $0<|x-a|<\delta_f \implies |g(x) - M| < \frac{\epsilon}{2}$.

Note that for any real $x,y$, $|x+y| \le |x|+|y|$ is always satisfied ([Proof](https://math.stackexchange.com/questions/3346631/prove-by-cases-that-x-y-le-x-y-for-all-real-numbers-x-y)). Thus,
$$
|f(x)+g(x) - (L+M)| \le |f(x)-L| + |g(x) - M| < \frac{\epsilon}{2}+\frac{\epsilon}{2} =  \epsilon.
$$


For function $f$ where the limit exists, if $c$ is real, then 
$$
\lim_{x\rightarrow a} (c \cdot f(x)) = c \cdot \lim_{x\rightarrow a} f(x).
$$
proof #todo 

For functions $f$ and $g$ where the limit exists,
$$
\lim_{x\rightarrow a}(f(x) \cdot g(x)) = \left(\lim_{x\rightarrow a} f(x) \right) \left(\lim_{x\rightarrow a} g(x) \right).
$$

proof (Exercise 2.1.1) #todo 



#### Limit Examples

**Example 3: Find $\lim_{x\rightarrow0} \frac{1}{x}$.**

Limit goes to infinity. For some possible $L$< we can always find $M>L, \frac{1}{M} < \frac{1}{L}$ where $\frac{1}{M}$ is closer to $0$ than $\frac{1}{L}$. Since infinity is not a number, limit going to infinity means limit Does Not Exist.

**Example 4: Find $\lim_{x\rightarrow 1} \lfloor x \rfloor$**. 

$\lim_{x \rightarrow 1^-} = 0$ (left hand side) does not equal $\lim_{x\rightarrow 1^+} = 1$ (right hand side).

**Example 5: Find $\lim_{\theta \rightarrow 0} \frac{\sin{\theta}}{\theta}$.**

To find this we use **Squeeze Theorem**: Let $f,g,h$ be functions such that $f(x) \le g(x) \le h(x)$ for all $x$ in some interval surrounding $a$ (but not necessarily $a$ itself). Then, 
$$
\lim_{x\rightarrow a} f(x) = \lim_{x\rightarrow a}h(x) = L \implies \lim_{x\rightarrow a}g(x) = L.
$$
That is, if $\lim_{x\rightarrow a}$ of $f(x)$ and $h(x)$ are the same, then since $g(x)$ is squeezed between them it must mean that $\lim_{x\rightarrow a} g(x)$ is also the same as $f(x)$ and $g(x)$.
proof (Exercise 2.1.7) #todo 

![[Pasted image 20250101124732.png]]

We look on the unit circle, and draw lines such that we have the inner triangle with height $\sin(\theta)$ and length $1$, the sector of unit circle with angle $\theta$, and the outer triangle with height $\tan(\theta)$ and length $1$ (height is $\tan(\theta)$ because the triangle is right with angle $\theta$, so by similar triangles, $\frac{\sin(\theta)}{\cos(\theta)}) = \frac{h}{1}, h = \tan(\theta)$).

The area of circle sector with central angle $\theta$ has area $\frac{\theta}{2\pi} \cdot 1^2\pi = \frac{1}{2}\theta$. 
The area of inner triangle is $\frac{\sin(\theta)}{2}$. 
The area of the outer triangle is $\frac{\tan(\theta)}{2}$.

By trig, for all $0 < \theta < \frac{\pi}{2}$, $\sin(\theta) < \theta < \tan(\theta)$. We can use this inequality since we have $\theta \rightarrow 0$, so it's within range. Thus, $\frac{1}{\sin(\theta)} > \frac{1}{\theta} > \frac{1}{\tan(\theta)}$. Multiplying by $\sin(\theta)$ (which is positive in $0 < \theta < \frac{\pi}{2}$), we thus have
$$
1 > \frac{\sin(\theta)}{\theta} > \cos(\theta).
$$
Since $\cos(\theta)=1$, both sides approach $1$ as $\theta \rightarrow 0$. Thus, it must be that $\lim_{\theta \rightarrow 0^+} \frac{\sin(\theta)}{\theta} = 1.$

A similar logic of areas can be used to find $\lim_{\theta \rightarrow 0^-} \frac{\sin(\theta)}{\theta} = 1$ (from the negative side).

Thus, we've proven $\lim_{\theta \rightarrow 0} \frac{\sin{\theta}}{\theta} = 1$.

#### Continuity
Intuitively, a function is continuous at a point if its graph can be drawn around the point without lifting the pen from the paper (graph has no holes or jumps).

Formally, let $f$ be a real-valued function. Then, $f$ is continuous at point $a \in Dom(f)$ if 
$$
\lim_{x\rightarrow a} f(x) = f(a).
$$That is, as $x$ approaches $a$ from either side, graph of $f$ approaches point $(a,f(x))$ with no skips, holes, or jumps.
If $f$ is continuous at every point in its domain, $f$ itself is continuous.

Polynomials, trig functions, exponentials, logarithms are all continuous functions.
proof Section 2.2 #todo

Function $f$ is continuous at $a$ if
- $f(a)$ exists.
- $\lim_{x\rightarrow a} f(x)$ exists: $\lim_{x \rightarrow a^-} f(x) = \lim_{x \rightarrow a^+} f(x)$. 
- $\lim_{x \rightarrow a} f(x) = f(x)$.

$f(x) = \lfloor x \rfloor, f(x) = \frac{1}{x}$, are non-continuous functions.

**Properties of continuous functions**:
Suppose $f$ and $g$ are continuous at $a$. Then, $f+g,fg,cf$ are all continuous at $a$. 
This is because 
$$
\lim_{x\rightarrow a}(f+g)(x) = \lim_{x\rightarrow a} f(x) + g(x) = \left(\lim_{x \rightarrow a} f(x)\right) + \left(\lim_{x \rightarrow a} f(x)\right) = f(a) + g(a) = (f+g)(a).
$$
Thus, $f+g$ is continuous at $a$.


(In L4 Transcript)
**Intermediate Value Theorem:** Let $f$ be a real-valued function continuous on $[a,b]$. If $y$ is a real number between $f(a)$ and $f(b)$, there must exists some $c \in (a,b)$ such that $f(c) = y$.
That is, if $f$ is continuous on $[a,b]$, every real number in between $f(a)$ and $f(b)$ (and maybe more though we don't know) must be accounted for by $c \in (a,b)$. 

proof: section 2.A #todo 


**Extreme Value Theorem**: If $f$ is continuous on $[a,b]$, then there exists $c \in [a,b]$ such that $f(c) \ge f(x)$ for all $x \in [a,b]$. Similarly, there exists $c \in [a,b]$ such that $f(c) \le f(x)$ for all $x \in [a,b]$. 
That is, in a continuous range we can always find a maximum and minimum value of $f(x)$ of the range.


Note if $f$ is not continuous on $[a,b]$, both theorems may not be true as we can find counter cases.



**Pathological functions**
Consider $f(x) =  \begin{cases} 1 & \textnormal{if } x \in \mathbb{Q} \\ 0 & \textnormal{if } x \not\in \mathbb{Q} \\ \end{cases}$. This function is defined for all $x \in \mathbb{R}$, but continuous nowhere.

proof #todo 

