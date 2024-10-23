Let $y = -1$, then for all real numbers $x$,
$$
f(x+f(-x)) = f(x)(1-1) = 0.
$$
Let $a$ be any real number, and let $y = a + f(-a)$. Since $f:\mathbb{R} \rightarrow \mathbb{R},$ $y$ is a real number. If we then set $x=1,$ $f$ must then satisfy
$$
f(1+f(a + f(-a))) = f(1)(1+(a+f(-a))).
$$
Since we've proven that $f(a+f(-a)) = 0$ for all real numbers $a$, we get
$$
f(1+f(a + f(-a))) = f(1) = f(1)(1+a+f(-a)).
$$
Thus, for all real numbers $a$,
$$
\begin{flalign}
&(1+a+f(-a)) = 1, \\
&a + f(-a) = 0, \\
&f(-a) = -a
\end{flalign}
$$

It is well known that the only function satisfying $f(x)=x$ for all real numbers $x$ is the identity function. Thus, the only function $f:\mathbb{R} \rightarrow \mathbb{R}$ satisfying the functional equation is $f(x) = x$. 
