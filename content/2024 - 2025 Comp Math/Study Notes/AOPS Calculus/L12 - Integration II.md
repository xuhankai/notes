
**Example 1: Compute $\int \cos^3(\theta) \sin(\theta) d \theta$.**

Let $u = \cos(\theta)$. Then, $du = -\sin(\theta)d\theta$. Thus,
$$
\begin{align}
\int \cos^3(\theta) \sin(\theta) d \theta &= -\int \cos^3(\theta) \cdot -\sin(\theta) d \theta \\
&= -\int u^3du \\
&= -\left(\frac{1}{4}u^4\right)+C \\
&= -\frac{1}{4}\cos^4(\theta)+C.
\end{align}
$$
**Example 2: Compute $\int (x+5)e^x dx$.**

If we substitute $u = x+5$ or $u = e^x$, we will get extra un-cancelable terms in $du$. 
Note that by product rule, $((x+5)e^x)' = (x+5)(e^x)' + (x+5)'e^x = (x+5)e^x + e^x$. Thus, $(x+5)e^x = ((x+5)e^x)'-e^x$. 

Now, if we take the antiderivative of both sides we get 
$$
\begin{align}
\int (x+5)e^x &= \int ((x+5)e^x)'-e^x \\
&= \int ((x+5)e^x)' - \int e^x \\ 
&= ((x+5)e^x) - e^x + C \\
&= xe^x + 4e^x + C.
\end{align}
$$

The idea of ==undoing the product rule== is called **integration by parts**.
Suppose we want to find antiderivative of $uv'$ where $u$ and $v$ are functions of $x$ (specifically functions are $u(x), v(x)$). 
By product rule, derivative of $uv$ is $(uv)' = uv' + u'v$.
Solving for $uv'$ gives $uv' = (uv)' - u'v$. Thus, anti derivative of $uv'$ is
$$
\int uv'dx = \int (uv)'dx - \int u'vdx.
$$
Since $\int (uv)' dx = u + C$, the formula for **Integration By Parts** is
$$
\int uv'dx = uv - \int vu'dx.
$$
Since $\frac{dv}{dx} = v', dv = v'dx$ and $du = u'dx$, we can also write this as $\int udv = uv - \int vdu$. 

Thus, given a problem of form $\int f(x)g(x)dx$, we choose variables $u$ and $v$ such that $u = f(x)$ and $dv = g(x)dx$. Thus, the original expression becomes $\int udv$ which is easier.

We hope that $vu'$ is easy to integrate, so we choose $u$ such that $u'$ is simple.

To solve Example 2, let $u = (x+5)$. Then, we need $dv = e^xdx$. To get $dv = e^xdx$, it must be that $v = e^x$.
Since $u = (x+5), u'(x) = 1, du = 1dx = dx$. Then, we get
$$
\begin{align}
\int (x+5)e^xdx &= \int udv = uv - \int vdu \\
&= (x+5)e^x - \int e^xdx \\
&= (x+5)e^x - e^x+C \\
&= xe^x + 4e^x + C.
\end{align}
$$


**Example 3: Compute $\int_0^{\pi} x \cos(x)dx$.**

First calculate the indefinite integral $\int x \cos(x)dx$.
Let $x\cos{x} = uv'$. The simplest choice is $u = x, dv = \cos(x)dx$ since we then have $du = 1dx = dx, v = \sin(x)$. On the other hand if we have $u = \cos(x), dv = xdx$, then $du = -\sin(x)dx, v =\frac{x^2}{2}$ which is more complicated to deal with.

Thus, $\int vdx = \int \sin(x) dx = -\cos(x)+C$ so
$$
\begin{align}
\int x\cos(x)dx &= \int udv \\
&= uv - \int vdu \\
&= x\sin(x) - \int\sin(x)dx \\
&= x\sin(x) - (-\cos(x)+C) \\
&= x\sin(x)+\cos(x)+C.
\end{align}
$$
Thus, the definite integral is
$$
\begin{align}
\int_0^{\pi} x \cos(x)dx &= F(\pi) - F(0) \\
&= (\pi\sin(\pi)+\cos(\pi)) - (0\sin(0)+\cos(0)) \\
&= (0+(-1)) - (0+1) = -2.
\end{align}
$$

**Example 4: Compute $\int (x^2-1)e^x dx$.**

Let $u = x^2-1$ and $dv = e^xdx$, so $du = 2xdx$ and $v = e^x+C$. Note that we can just have $v = e^x$ since we are picking the variables, and it is simplest not to include the $C$.

Thus, $\int (x^2-1)e^x dx = (x^2-1)e^x - \int e^x2xdx$. However, we don't know what $\int e^x 2xdx$ is. 
To solve, we apply Integration by Parts again to $\int e^x2xdx$. Let $u = 2x, dv = e^x$. Then, $du = 2dx, v = e^x$ so $\int e^x2xdx  = 2xe^x - \int e^x\cdot2dx$.
To summarize, we have
$$
\begin{align}
\int (x^2-1)e^x dx &= (x^2-1)e^x - \int e^x2xdx \\
&= (x^2-1)e^x - \left(2xe^x - \int 2e^xdx\right) \\
&= (x^2-1)e^x - (2xe^x-(2e^x+C)) \\
&= (x^2-1)e^x - 2xe^x+2e^x+C \\
&= (x^2-2x+1)e^x+C.
\end{align}
$$

**Example 5: Compute $\int (x^4-2x^3-10x^2+6x+2) \cos(x)dx$.**

In Integration by Parts, we have
$$
\int uv'dx = uv - \int vu'dx.
$$
If we apply integration by parts to $\int vu'dx$ again (like we did in Example 4), let $V$ be the antiderivative of $v$, and we get
$$
\begin{align}
\int uv'dx &= uv - \left(u'V-\int Vu''dx\right) \\
&= uv - u'V + \int Vu''dx.
\end{align}
$$
We repeat this process until we've taken enough derivatives of $u$ such that it equals zero, so the integral vanishes. This is a sum of terms with alternating signs. Each term is the product of the $n^{th}$ derivative of $u$ and the $n^{th}$ antiderivative of $v$. 

Each time, we keep track of the derivatives of $u$ as well as the antiderivatives of $v$.

Let $u = (x^4-2x^3-10x^2+6x+2)$ and $v = \cos(x)$ so that the antiderivative $V$ cycles and the derivative of $u$  terminates to $0$.

For antiderivative of $v$, we have $V = \cos(x)dx, v = \sin(x)$, so $v = \sin(x), V_1 = -\cos(x), V_2 = -\sin(x), V_3 = \cos(x), V_4 = \sin(x), V_5 = -\cos(x), ...$ and the cycle repeats.
For derivative $u$, we have $u = x^4-2x^3-10x^2+6x+2, u' =  4x^3 - 6x^2 - 20x + 6, u'' = 12x^2 - 12x-20, u''' =   24x-12, u'''' = 24, u''''' = 0$. 

Thus, 
$$
\begin{align}
\int (x^4-2x^3-10x^2+6x+2) \cos(x)dx &= (x^4-2x^3-10x^2+6x+2)\sin(x)) \\
&- (-(4x^3 - 6x^2 - 20x + 6)\cos(x)) \\
&+ (-(12x^2 - 12x-20)\sin(x) \\
&- ((24x-12)\cos(x)) \\
&+ (24\sin(x)) - (-0\cos(x)) + C \\
&= (x^4-2x^3-22x^2+18x+46)\sin(x) \\
&+ (4x^3-6x^2-44x+18)\cos(x) + C.
\end{align}
$$
[WolframAlpha](https://www.wolframalpha.com/input?i=%28x%5E4-2x%5E3-10x%5E2%2B6x%2B2%29%5Csin%28x%29%29+-+%28-%284x%5E3+-+6x%5E2+-+20x+%2B+6%29%5Ccos%28x%29%29+%2B+%28-%2812x%5E2+-+12x-20%29%5Csin%28x%29+-+%28%2824x-12%29%5Ccos%28x%29%29+%2B+%2824%5Csin%28x%29%29+-+%28-0%5Ccos%28x%29%29)

**Example 6: Compute $\int_0^{\frac{\pi}{2}} e^x \sin(x)dx$.**

Let $u = \sin(x), du = -\cos(x), dv = e^xdx$. Then, $\int e^x \sin(x) = \sin(x)e^x + \int-\cos(x)e^x dx = \int e^x \sin(x) = \sin(x)e^x - \int\cos(x)e^x dx$. Let $u = \cos(x), du = -\sin(x)dx, dv = e^xdx, v = e^x$. Thus, $\int \cos(x)e^x = \cos(x)e^x - \int -\sin(x)e^x dx$. However, we've arrived back at calculating $\int e^x\sin(x)dx$. All together, we have
$$
\begin{align}
\int e^x \sin(x)dx &= e^x \sin(x) - \int e^x \cos(x)dx \\
&= e^x\sin(x) - \left(e^x\cos(x) - \int-e^x\sin(x)dx \right) \\
&= e^x(\sin(x) - \cos(x)) - \int e^x\sin(x)dx.
\end{align}
$$
To solve this, note that we can add $\int e^x\sin(x)dx$ to both sides to cancel out $\int e^x\sin(x)dx$ on the right, then divide by $2$ to get
$2\int e^x\sin(x)dx = e^x(\sin(x) - \cos(x)), \int e^x\sin(x)dx = \frac{e^x(\sin(x)-\cos(x))}{2} + C$. 

Thus by calculations, 
$$
\begin{align}
\int_0^{\frac{\pi}{2}} e^x \sin(x)dx &= F(\frac{\pi}{2}) - F(0) \\
&= \frac{e^{\frac{\pi}{2}}(\sin(\frac{\pi}{2})-\cos(\frac{\pi}{2}))}{2} - \frac{e^0(\sin(0)-\cos(0))}{2} \\
&= \frac{e^{\frac{\pi}{2}}(1-0)}{2} - \frac{e^0(0-1)}{2} \\
&= \frac{e^{\frac{\pi}{2}}+1}{2}.
\end{align}
$$


**Example 7: Compute $\int \log(x)dx$.**

We don't know how to integrate $\log(x)$, so we can't set it as $v$. Thus, we let $u = \log(x)$ and $dv = dx,v=x$. Then, $du = \frac{1}{x} dx$ and
$$
\begin{align}
\int \log(x)dx &= \log(x)x - \int\left(x \cdot \frac{1}{x}dx\right) \\
&= x\log(x) - \int 1 dx \\
&= x\log(x) - x + C.
\end{align}
$$


**Example 8: Compute $\int \frac{1}{\sqrt{1-x^2}} dx$.**
We can't substitute $u = 1-x^2$ since $du = -2xdx$, and we have nothing to cancel. 
Note that $-1 < x < 1$. Also note $1 - \sin^2(\theta) = \cos^2(\theta)$. We can let $x = \sin(\theta)$ since the range of $\sin(\theta)$ perfectly satisfies $-1< \sin(\theta) < 1$.
Then, $\frac{dx}{d\theta} = \frac{d}{d\theta}(\sin(x)) = \cos(\theta), dx = \cos(\theta)d\theta$ so
$$
\begin{align}
\int \frac{1}{\sqrt{1-x^2}} dx &= \int \frac{\cos(\theta)}{\sqrt{1-\sin^2(\theta)}} d\theta \\
&= \int \frac{\cos(\theta)}{|\cos(\theta)|} d\theta
\end{align}
$$
Note that for $x = \sin(\theta)$, we only need $\theta \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ to cover the entire $-1<x<1$. Coincidentally, note when $-\frac{\pi}{2}<\theta<\frac{\pi}{2}$, $\cos(\theta)$ is always positive. Thus in this context, 
$$
\int \frac{\cos(\theta)}{|\cos(\theta)|} d\theta = \int \frac{\cos(\theta)}{\cos(\theta)} d\theta = \int 1 d\theta = \theta + C.
$$
Substituting $\theta = \arcsin(x)$, we have $\int \frac{1}{\sqrt{1-x^2}} dx = \arcsin(x)+C$.


**Example 9: Compute $\int_1^{\sqrt{3}} \frac{1}{1+x^2}dx$.**

We can't substitute $x = \sin(x)$ due to bounds on $x$.
Let $x = \tan(\theta)$. Then, $dx = \sec^2(\theta) d\theta$ so $\int \frac{1}{1+x^2}dx = \int \frac{1}{1+\tan^2(\theta)}(\sec^2(\theta)d\theta)$.
Coincidentally, note that $1+\tan^2(\theta) = \sec^2(\theta)$. Thus, 
$$
\begin{align}
\int \frac{1}{1+x^2}dx &= \int \frac{\sec^2(\theta)}{1+\tan^2(\theta)} d\theta \\
&= \int \frac{\sec^2(\theta)}{\sec^2(\theta)} d\theta \\
&= \int 1d\theta = \theta.
\end{align}
$$
The lower bound is $x = 1 = \tan(\theta), \theta = \frac{\pi}{4}$. The upper bound is $x = \sqrt{3} = \tan(\theta) = \frac{\pi}{3}$. Thus, we have
$$
\int_1^{\sqrt{3}} \frac{1}{1+x^2}dx = \int_{\frac{\pi}{4}}^{\frac{\pi}{3}} d\theta = \frac{\pi}{3} - \frac{\pi}{4} = \frac{\pi}{12}.
$$


**Example 10: Compute $\int_0^1 (1+x^2)\sqrt{1-x^2}dx$.**

We try $x = \sin(\theta)$ since we've seen $\sqrt{1-\sin^2(\theta)} = \cos(\theta)$ and it's possible because $[0,1]$ is in range of $\sin$ which is $[-1,1]$. 
Then, $dx = \cos(\theta)d\theta$. 
The bounds in terms of $\theta$ is $x = 0 = \sin(\theta), \theta = 0$ and $x = 1 = \sin(\theta), \theta = \frac{\pi}{2}$. We thus have
$$
\begin{align}
\int_0^{\frac{\pi}{2}}(1+\sin^2(\theta))\sqrt{1-\sin^2(\theta)}\cos(\theta)d\theta &= \int_0^{\frac{\pi}{2}}(1+\sin^2(\theta))|\cos(\theta)|\cos(\theta)d\theta \\
&= \int_0^{\frac{\pi}{2}}(1+\sin^2(\theta))\cos^2(\theta)d\theta.
\end{align}
$$
Note $\sqrt{1-\sin^2(\theta)} = |\cos(\theta)|$ though we can get rid of the absolute value sign because $\theta \in [0,\frac{\pi}{2}]$, so $\cos(\theta)$ is always non-negative.

Since squares of trig functions are messy, we want to reduce them using power-reducing formulas. That is, $\sin^2(\theta) = \frac{1}{2}(1-\cos(2\theta))$ and $\cos^2(\theta) = \frac{1}{2}(1+\cos(2\theta))$. We substitute, simplify, then expand to get
$$
\begin{align}
\int_0^{\frac{\pi}{2}}(1+\sin^2(\theta))\cos^2(\theta)d\theta. &= \int_0^{\frac{\pi}{2}}\left(1+\frac{1}{2}(1-\cos(2\theta))\right)\left(\frac{1}{2}(1+\cos(2\theta))\right)d\theta \\
&= \frac{1}{4}\int_0^{\frac{\pi}{2}}(3-\cos(2\theta))(1+\cos(2\theta))d\theta \\
&= \frac{1}{4}\int_0^{\frac{\pi}{2}}\left(3+2\cos(2\theta)-\cos^2(2\theta)\right)d\theta \\
&= \frac{1}{4}\int_0^{\frac{\pi}{2}}\left(3+2\cos(2\theta)-\frac{1}{2}(1+\cos(4\theta))\right)d\theta \\
&= \frac{1}{4}\int_0^{\frac{\pi}{2}}\left(\frac{5}{2} + 2\cos(2\theta) - \frac{1}{2}\cos(4\theta)\right)d\theta 
\end{align}
$$
where we used another power-reducing formula on $\cos^2(2\theta) = \frac{1}{2}(1+\cos(4\theta))$. 

Coincidentally, note that both $\int \cos(2\theta)$ and $\int \cos(4\theta)$ in range $[0,\frac{\pi}{2}]$ is equal to $0$. This is because $\int_{0}^{\frac{\pi}{2}}\cos(2\theta) = \sin(\pi) - \sin(0) = 0-0 = 0$ and $\int_{0}^{\frac{\pi}{2}}\cos(4\theta) = \sin(2\pi) - \sin(0) = 0-0 = 0$. Thus, we are only left with 
$$
\frac{1}{4}\int_0^{\frac{\pi}{2}}\left(\frac{5}{2} + 2\cos(2\theta) - \frac{1}{2}\cos(4\theta)\right)d\theta  = \frac{1}{4}\int_0^{\frac{\pi}{2}} \frac{5}{2}d\theta = \frac{1}{4}\cdot \frac{5}{2} \cdot \frac{\pi}{2} = \frac{5\pi}{16}.
$$












































