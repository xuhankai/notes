The most important interpretation of the derivative is as a **rate of change**.

We can use derivatives to relate the rates of change of two different quantities. That is, problems involving two different quantities that are ==dependent== on each other and are changing ==over time== (d/dt). 

**Example 1: A $1cm$ high cylindrical puddle of chocolate is being poured at the rate of $5cm^3/sec$. Its height stays the same, but its radius changes over time as more chocolate is added. At the time at which the radius of the puddle is $4cm$, how fast is its radius increasing?**

$5cm^3/sec$ is the rate of change of volume. 
Let $r$ and $V$ be the radius (in $cm$) and volume (in $cm^3$) of cylinder respectively. 
Let $r(t)$ and $V(t)$ be the radius (in $cm$) and volume (in $cm^3$) of cylinder respectively ==with respect to time==.

The relationship is $V = \pi r^2h = \pi r^2$ since $h=1$.

The rate of change is the derivative with respect to time. We know rate of change of volume is $\frac{d}{dt}V = 5cm^3/sec$ and we want rate of change of radius which is $\frac{d}{dt}r$. We have
$$
\begin{align}
\frac{d}{dt}V &= \frac{d}{dt}(\pi r^2) \\
&= 2\pi r \cdot \frac{d}{dt}r, \\
\frac{d}{dt}r &= \frac{\frac{d}{dt}V}{2\pi r}.
\end{align}
$$
Substituting the values in, we can solve for $\frac{d}{dt}r = \frac{5}{4 \cdot 2\pi} = \boxed{\frac{5}{8\pi}}$. Thus, the rate of radius when radius is $4cm$ is $\frac{5}{8\pi}cm/sec$.

Related Rates Problems: 
- Given two quantities which are functions with respect to the same independent variable (usually time).
- Find the equation the relates the two functions.
- Take the derivative of both sides of that equation with respect to the independent variable
- Isolate and solve for the rate (derivative)


**Example 2: An observer is $1$ kilometer away from a rocket launch pad and is filming the launch with her camera. At time $t=0$, the rocket lifts off straight upwards, and at time $t$ seconds would have achieved an altitude of $10t^2$ meters. At $5$ seconds after takeoff, how fast is the angle between horizontal ground and the direction the observer's camera is pointing increasing?**

There are two quantities that are changing with respect to time:
- The angle of elevation of the camera: $\theta$
- The altitude of the rocket: $h$

We can relate the two variables together: $\frac{h}{1km} = \tan{\theta}, \tan{\theta} = 10t^2 \div 1000 = 0.01t^2$ meters. 
We want to find $\frac{d}{dt} \theta$, so 

$$
\begin{align}
\frac{d}{dt} \tan{\theta} &= \frac{d}{dt}(\frac{1}{100}t^2) \\
\sec^2{\theta} \cdot \frac{d}{dt}\theta &= \frac{1}{50}t \\
\frac{d}{dt} \theta &= \frac{1}{50\sec^2{\theta}}t = \frac{\cos^2{\theta}}{50}t.
\end{align}
$$

We want to find $\cos{\theta}$ at $t=5$ in order to use the above equality to get $\frac{d}{dt} \theta$. The altitude at $t-5$ is $10t^2 = 250$ meters. Thus, $\cos{\theta} = \frac{1000}{\sqrt{250^2 + 1000^2}} =  \frac{1000}{250\sqrt{1^2+4^2}} = \frac{4}{\sqrt{17}}$.
Thus, substituting $t = 5$  and $\cos{\theta} = \frac{4}{\sqrt{17}}$, we get $\frac{d}{dt}\theta = \frac{\frac{16}{17}}{50} \cdot 5 = \frac{16}{170} = \boxed{\frac{8}{85}}$.

5 seconds after the rocket take off, the camera angle is increasing at a rate of $\frac{8}{85}$ radians per second.


**Example 3: A $6$-foot-tall ladder rests against a wall, but the foot of the ladder is slipping away from the wall at a rate of $2\textnormal{ in/sec}$. When the ladder forms a $60^{\circ}$ degree angle to the ground, how fast is the top of the ladder sliding down?

We are not interested in the rate change of angles. We want side lengths since they relate to each other and question asks for it.

Let $x$ be the distance of bottom of ladder from wall, and $h$ be the heigh of top of ladder from ground.

Since the ladder is always $6$ foot, $x^2 + h^2 = 36$. Since $36$ is constant, we can take derivative safely: $2xx' + 2hh' = 0$.

Thus, we can solve for $h' = -x' \cdot \frac{x}{h}$. Since $\frac{x}{h} = \cot{\theta}, h' = -x' \cot{\theta}$. 
We know at $\theta = 60^{\circ}$, $x' = 2\textnormal{ in/sec}$ and $\cot{\theta} = \cot{60^{\circ}} = \frac{1}{\sqrt{3}}$. Thus, $h' = -2 \cdot \frac{1}{\sqrt{3}} = \boxed{-\frac{2}{\sqrt{3}}}$.

The top of the ladder is falling at a rate of $-\frac{2}{\sqrt{3}}$ inches per second.



**Example 4: A cone-shaped filter has a hole at the top of radius $4cm$ and a hole at the bottom of radius $1cm$, and is $6cm$ in height. Water flows out of the bottom at a rate of $2cm^3/sec$. If the filter begins completely filled at time $t=0$, how fast is the water level decreasing after $30$ seconds?**

The filter is a **frustum:** a cone with a smaller cone chopped off. Its volume is the difference between the two cones.

Imagine the rate of change of height of frustrum and the rate of change of height of big cone, when in both cases water is going out at the same rate of $2cm^3/sec$. We can see that the rate of change of height for both is the same since 

We can prove this through math. We have $(\textnormal{height of water in cone}) = (\textnormal{height of water in fustrum}) + (\textnormal{height of little cone})$.
Then we get rate of change by taking derivative of both sides, so
$(\textnormal{height of water in cone})' = (\textnormal{height of water in fustrum})'$ since $(\textnormal{height of little cone})$ is a constant. 

Thus, we can ==assume that it's just a cone== which doesn't affect answer.

The volume of cone is $\frac{1}{3} \pi r^2 h$. 
For simplicity, make this have 1 variables. Let $x$ be the height of the smaller cone. Using similar triangles $\frac{4}{6+x} = \frac{1}{x}, x = 2$. Thus, height of large cone is $2+6 = 8$, radius starts at $4$, and radius-to-height ratio remains constant at $1:2$ as water drains. Thus, when water is height $h$, radius is $h/2$.

We write the relationship as $V = \frac{1}{3}\pi (h/2)^2 h, V(t) = \frac{1}{12}\pi (h(t))^3$. 

Let $V(t)$ be the volume at time $t$ and $h(t)$ be the height at time $t$.  
We have $V(t) = \frac{1}{12}\pi (h(t))^3, \frac{d}{dt} V(t) = \frac{1}{4}\pi (h(t))^2 \cdot \frac{d}{dt} h(t)$. Isolating for rate of change of height, 
$$
\frac{d}{dt} h(t) = \frac{4 \cdot \frac{d}{dt}V(t)}{(h(t))^2 \pi}.
$$

We are given $\frac{dV}{dt} = -2$ at all times. Thus, $\frac{d}{dt} h(t) = \frac{-8}{(h(t))^2 \pi}$. 
Now lets calculate $h(30)$. We have $V(30) = \frac{1}{12}\pi (h(30))^3, h(30) = \sqrt[3]{V(30)\cdot \frac{12}{\pi}}$. Initial volume is $V(0) = \frac{1}{12}\pi(8)^3 = \frac{128}{3}\pi$ and volume decreases by $2cm^3/sec$. Thus, $V(30) = \left(\frac{128}{3}\pi - 2 \cdot 30) cm^3 = \frac{128\pi - 180}{3}cm^3\right)$. 

Substituting, $h(30) = \sqrt[3]{\frac{128\pi - 180}{3} \cdot \frac{12}{\pi}} = \sqrt[3]{512 - \frac{720}{\pi}}$. Then, we substitute $h(t) = h(30)$ to find 
$$
\begin{align}
\frac{d}{dt}h(30) &= \frac{-8}{(h(30))^2 \pi} \\
&= \frac{-8}{\left(\sqrt[3]{512 - \frac{720}{\pi}}\right)^2 \pi} \\ 
&= -\frac{8}{\pi} \left(\sqrt[3]{512 - \frac{720}{\pi}}\right)^{-2/3} \\
&\approx \boxed{-0.0591 cm/sec}.
\end{align}
$$
The rate that the water level is decreasing is $-0.0591 cm/sec$.



### L'Hoptial's Rule

Let $f$ and $g$ be continuous and differentiable functions such that $f(a) = g(a) = 0$ at some point $a$.

Now, compute $\lim_{x\rightarrow a} \frac{f(x)}{g(x)}$.

We can't plug in $x =a$ since $g(a) = 0$.

We can use tangent line approximation of $f$ and $g$ near $a$. In general $f(x) \approx f(a) + f'(a)(x-a)$. Since $f(a) = 0, f(x) \approx f'(a)(x-a)$ and $g(x) \approx g'(a)(x-a)$. Thus, 
$$
\lim_{x\rightarrow a} \frac{f(x)}{g(x)} = \lim_{x\rightarrow a} \frac{f'(a)(x-a)}{g'(a)(x-a)} = \lim_{x\rightarrow a} \frac{f'(a)}{g'(a)}.
$$
Since $a$ is constant value, $\frac{f'(a)}{g'(a)}$ is a constant. Thus, $\lim_{x\rightarrow a} \frac{f'(a)}{g'(a)} = \frac{f'(a)}{g'(a)}$ assuming $g'(a) \neq 0$. 

Thus, **l'Hopital's Rule** states that: If $f,g$ are continuous differentiable functions with $f(a)=g(a)=0$, and $g'(a) \neq 0$, then
$$
\lim_{x\rightarrow a} \frac{f(x)}{g(x)} = \lim_{x\rightarrow a} \frac{f'(a)}{g'(a)} = \frac{f'(a)}{g'(a)}.
$$
Note: If $f'(a) = 0$ and $g'(a) = 0$, we can apply l'Hopital's rule again.

==This proof is not rigorous since we ignore errors in tangent line approximation. See Problem 6.35 and 6.36 in section 6.A of the book for full proof.==

The function of $\frac{f(x)}{g(x)}$ where $f(a) = g(a) = 0$ is called a **$\frac{0}{0}$ indeterminate form** at $x=a$. We use l'Hopital's Rule to compute limits at $\frac{0}{0}$ indeterminate forms.

**Example 5: Use l'Hopital's Rule to evaluate $\lim_{x \rightarrow 0} \frac{1-\cos{x}}{x}$.**

We have $f(0) = 1-\cos{(0)} = 1-1 = 0$ and $g(0) = 0$. Thus, we can use l'Hopital's Rule. 

We have $f'(x) = -(-\sin{x}) = \sin{x}, f'(0) = 0$ and $g'(x) = 1, g'(0) = 1$. Thus, $\lim_{x \rightarrow 0} \frac{1-\cos{x}}{x}  = \frac{0}{1} = \boxed{0}$.


**Example 6: Compute $\lim_{t \rightarrow 0} \frac{e^{3t}-3t - 1}{4t^2}$.

We have $f(0) = e^{0} - 3(0) - 1 = 0$ and $g(0) = 4(0)^2 = 0$. Thus, we can use l'Hopital's Rule. 
We have $f'(t) = 3e^{3t}$ and $g'(t) = 8t$, so $\lim_{t \rightarrow 0} \frac{e^{3t}-3t - 1}{4t^2} = \lim_{t \rightarrow 0} \frac{3e^{3t}-3}{8t}$. 
However, $g'(0) = 8(0) = 0$. Also $f'(0) = 3e^{3(0)} - 3 = 3-3 = 0$. 
Thus, we can apply l'Hopital's Rule again to get $f''(t) = 9e^{3t}$ and $g''(t) = 8$, so $\lim_{t \rightarrow 0} \frac{e^{3t}-3t - 1}{4t^2} = \lim_{t \rightarrow 0} \frac{3e^{3t}-3}{8t} = \lim_{t \rightarrow 0} \frac{9e^{3t}}{8} = \frac{9e^{3(0)}}{8} = \boxed{\frac{9}{8}}$. 

**Example 7: Let $P$ be a fourth degree polynomial such that $P(1) = P(3) = P(5) = P'(7) = 0$. Find the remaining root of $P$.**

We have $P(x) = a(x-1)(x-3)(x-5)(x-r)$. 

To use $P'(7)$, we can extend product rule to solve for $P'(x)$. Let $f = (x-1), g = (x-3), h = (x-5), i = (x-r)$. We can write 
$$
\begin{align}
P'(x) &= (fghi)' \\
&= (f \cdot (ghi))' \\
&= f'(ghj) + f(ghi)' \\
&= f'(ghj) + f(g\cdot(hi))' \\
&= f'(ghj) + f(g'hi + g(hi)') \\
&= f'(ghj) + fg'hi + fg(hi)' \\
&= f'(ghj) + fg'hi + fg(h'i + hi') \\
&= f'(ghj) + fg'hi + fgh'i + fghi'. 
\end{align}
$$
Since the derivatives of any linear function is just $1$, we have
$$
\begin{align}
P'(x) &= a[ghj+fhi+fgi+fgh] \\
&= a[(x-3)(x-5)(x-r) + (x-1)(x-5)(x-r) \\
&+ (x-1)(x-3)(x-r) + (x-1)(x-3)(x-5)].
\end{align}
$$
Plugging in $x = 7$, we have
$$
\begin{align}
0 &= P'(7) \\
&= a(8(7-r) + 12(7-r) + 24(7-r)+48) \\
&= a(44(7-r)+48) \\
&= a(356 - 44r)
\end{align}
$$
Since $a \neq 0$ as $P$ is a fourth degree polynomial, $0 = 356-44r, r = \boxed{\frac{89}{11}}$. 

The unknown root of $P$ is $\frac{89}{11}$.


















