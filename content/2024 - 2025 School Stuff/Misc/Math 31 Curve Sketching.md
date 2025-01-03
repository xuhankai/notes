### Inequalities and Symmetry
##### Set and Interval Notation
$\{x | 0 < x < \infty \}$ and $(0,\infty)$.
##### Solving Linear Inequalities
$y= 2x+4, y>0 \rightarrow 2x+4 > 0$. 
##### Solving quadratic inequalities
**Steps:** 
- Factor quadratic and find zeros.
- Make a table, split $(-\infty,\infty)$ with it's zeros into intervals and put to left, split the quadratic into it's factors (linear) and put on top.
- For each grid, check if interval is positive or negative for the given linear factor on top.
- For the final column we put $f(x)$ on top. It is positive if there were even number of negative signs in that row. Negative if odd number of negative signs.
##### Symmetry
**Even function:** when $f(x) = f(-x)$ for all $x$. ==Symmetric respect to y-axis==.
**Odd function:** when $f(x)=-f(-x)$ for all $x$. ==Symmetric respect to origin== (rotated $180^{\circ}$). 

### Vertical Asymptotes

$f(x)$ has vertical asymptote at $x = a$ if $f(x)$ approaches infinity from either sides when $x$ approaches $a$. More formally, it must satisfy
$$
\begin{align}
\lim_{x \rightarrow a^+} f(x) &= \pm \infty \\
&\textnormal{ or } \\
\lim_{x \rightarrow a^-} f(x) &= \pm \infty
\end{align}
$$
and thus $f(a)$ is undefined at that point. If this doesn't work, but $x=a$ is undefined, then $x=a$ is a **point of discontinuity**.

Proof using $[0^+]$ and $[0^-]$ on the bottom and $\rightarrow$ signs in WR.

### Horizontal Asymptotes
$f(x)$ has horizontal asymptote at $y=c$ if graph gets infinitely close to $c$ as $x$ tends to either $\pm \infty$. More formally,
$$
\lim_{x\rightarrow \pm \infty} f(x) = c.
$$
Check for both $-\infty$ and $\infty$ by plugging it into the limit. Use "divide by largest degree" trick for polynomial fractions.
In WR, must say "H.A. at $y = \frac{a}{b}$."

**Might approach from below the asymptote even if it started from top.**
- Check both left ($x=a^-$) and right $(x=a^+)$ for all asymptotes with C.N at $a$.
- If this happens, it intersects horizontal asymptote, goes down (like parabola), then goes back again to approach asymptote. 
- Prove using $[small]$ and $[smaller]$ for whether $\lim_{x \rightarrow \pm \infty} f(x)$ is bigger or less than $c$ (for whether it approaches from top or bottom). 


### Intervals of Increase and Decrease
**Steps:**
- Step 1: Get first derivative $f'(x)$.
- Step 2: Find C.N where $f'(x) = 0$ or $f'(x) = UNDEF$. 
- Step 3: Interval Table by splitting up with C.N and find if $f(x)$ is $INC$ or $DEC$ using sign (positive or negative) of $f'(x)$. Note we only care about the sign of $f'(x)$, so we should put the factors of $f'(x)$ on top.
- Step 4: Summary Sentence: "$f(x)$ is increasing on $(a,b) \cup (c,d)$ and decreasing on $(e,f)$. "


### Maximum and Minimum Values

**Absolute maximum/minimum** at $x=c$ if $f(c)$ is the max/min value of the entire graph.
**Local maximum** at $x=c$ if $f(c) \ge f(x)$ for all $x$ in interval $(a,b)$. Usually this interval is "near" $c$, hence local max.
- Occurs when function switches from $INC$ to $DEC$.
**Local minimum** at $x=c$ if $f(c) \le f(x)$ for all $x$ in interval $(a,b)$. 
- Occurs when function switches from $DEC$ to $INC$. 

Local Max/Min may (though not always) occur at **critical numbers**.
- Step 4: Find Local Max/Min using table in Step 3. Get the $x$ value (desired C.N) and plug it into $f(x)$ to get $y$ value.
- Step 5: Summary Sentence 
	- $f(x)$ is increasing on ...
	- $f(x)$ is decreasing on...
	- Local Max: $P(a,b)$
	- Local Min: $Q(c,d)$

Absolute Max is just max value of all local max plus ==compare the endpoints==. An Absolute Max doesn't exist if as $x$ tends to $\pm \infty$, $y$ tends to $\infty$. Same ideas for Absolute Min. 

**Second Derivative Test:** 
- If $f'(c) = 0$ (tangent) and $f''(c)<0$ (concave down), then $f(x)$ has local maximum at $x = c$.
- If $f'(c) = 0$ (tangent) and $f''(c)>0$ (concave up), then $f(x)$ has local minimum at $x = c$.

### Concavity and Points of Inflection
Test for concavity:
- $f''(x) >0$, then local interval is concave up (upward parabola)
- $f''(x)<0$, then local interval is concave down (downward parabola)
- $f''(x) = 0, UNDEF$, then a change in concavity occurs

Steps:
- Find second derivative
- Get C.N where $f''(x) = 0, UNDEF$
- Make table for whether $f''(x)$ is positive or negative using intervals of C.N
- Find inflection points (occurs at changes in concavity) and plug in $x$ value to get $y=f(x)$ value on the original graph to determine the coordinates of inflection points.
- Summary Statement: $f(x)$ is C.D on $(a,b)$ and C.U on $(c,d)$. Inflection Points at $P(m,n)$.

### Curve Sketching
Determine:
- Domain 
- X and Y Intercepts
- Vertical and Horizontal Asymptotes
- Intervals of INC/DEC with local min/max points
- Intervals of CU/CD with points of inflection
Then sketch graph. 
**Note: check if local min/max points and points of inflection are in the domain before graphing**.
**Note: Change scale when needed.**
**Note: Draw arrows for going outside the graph.**
**Note: $P(m,n)$**

### Curve Sketching Using Condition

