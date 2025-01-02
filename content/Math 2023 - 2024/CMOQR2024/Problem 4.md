Let's define a sequence ${b_i}$ such that $b_0 = 2$ and for all non-negative integers $n$
$$
b_{n+1} = b_n^2 - b_n + 1.
$$
We will now prove that 
$$
3^{2^{n−1}}<b_{n+1}-1< 3^{2^{n}}
$$
is satisfied for all positive integers $n$. We know that $3^{2^n} = (3^{2^{n-1}})^2$ and $b_{n+1}-1 = b_n^2 - b_n$. Let's break this inequality into two parts.

We will first prove $3^{2^{n−1}}<b_{n+1}-1$ for all positive integers $n$. Base case: If $n=1$, then $3^{2^{0}} = 3$ and $b_2 - 1 = 7-1 = 6$. Thus, the inequality is satisfied for $n=1$ since $3<6.$ For the inductive step, assume that $3^{2^{n−1}}<b_{n+1}-1$ is satisifed for a positive integer $n$. We will now prove that this inequality is still satisified for $n+1$. Plugging in $n+1$, we have $3^{2^n} = 3^{2^{n-1}} \cdot 3^{2^{n-1}}$ and $b_{n+2}-1 = b_{n+1}^2 - b_{n+1} = (b_{n+1}-1)(b_{n+1})$.
Thus, we want to prove
$$
3^{2^{n-1}} \cdot 3^{2^{n-1}} < (b_{n+1}-1)(b_{n+1}).
$$
Since we know that $3^{2^{n−1}}<b_{n+1}-1$, $3^{2^{n−1}}<b_{n+1}$ is also true.  Since $n$ is positive, $2^{2^{n-1}}, b_{n+1}, b_{n+1}$ are all positive. Thus, we can multiply the two inequalities together and get
$$
3^{2^{n-1}} \cdot 3^{2^{n-1}} < (b_{n+1}-1)(b_{n+1})
$$
which is what we wanted to prove. Thus, we know $3^{2^{n−1}}<b_{n+1}-1$ is satisfied for all positive integers $n$.

We will now prove $b_{n+1}-1<3^{2^{n}}$ for all positive integers $n$. Base case: If $n=1$, then $3^{2^{1}} = 9$ and $b_2 - 1 = 7-1 = 6$. Thus, the inequality is satisfied for $n=1$ since $6<9.$ For the inductive step, assume that $b_{n+1}-1<3^{2^{n}}$ is satisifed for a positive integer $n$. We will now prove that this inequality is still satisified for $n+1$. Plugging in $n+1$, we have $3^{2^{n+1}} = 3^{2^{n}} \cdot 3^{2^{n}}$ and $b_{n+2}-1 = b_{n+1}^2 - b_{n+1} = (b_{n+1}-1)(b_{n+1})$.
Thus, we want to prove
$$
(b_{n+1}-1)(b_{n+1}) < 3^{2^{n}} \cdot 3^{2^{n}}.
$$
We know that $b_{n+1}-1<3^{2^{n}}$. Thus, $b_{n+1} \le 3^{2^n}$ since $b_{n+1}$ and $3^{2^n}$ are both integers and thus differ by no less than 1. Since $n$ is positive, $2^{2^{n-1}}, b_{n+1}, b_{n+1}$ are all positive. If $b_{n+1} < 3^{2^n}$, then we can multiply the two inequalities together to get
$$
(b_{n+1}-1)(b_{n+1}) < 3^{2^{n}} \cdot 3^{2^{n}}.
$$
If $b_{n+1} = 3^{2^n}$, then multplying left hand side by $b_{n+1}-1$ and the right hand side by $3^{2^n}$ will guarentee 
$$
(b_{n+1}-1)(b_{n+1}) < 3^{2^{n}} \cdot 3^{2^{n}}
$$
since $b_{n+1}-1<3^{2^{n}}$. Thus, we have proven both cases, which means $b_{n+1}-1<3^{2^{n}}$ is satisfied for all positive integers $n$.

Since both parts were proved, we have proved that 
$$
3^{2^{n−1}}<b_{n+1}-1< 3^{2^{n}}
$$
is satisfied for all positive integers $n$. For every expression in this inequality, we will now take it's inverse, reverse its sign, then add 1. We then get $$
1− \frac{1}{3^{2^{n−1}}}<1 - \frac{1}{b_{n+1}-1}<1− \frac{1}{3^{2^{n}}}$$ is satisfied for all positive integers $n$.

We can rewrite $\frac{1}{b_n}$ as 
$$\begin{align}
& \frac{1}{b_n} = \frac{(b_n-1)^2}{(b_n-1)^2b_n} = \frac{b_n^2 - b_n}{(b_n-1)^2b_n} - \frac{b_n - 1}{(b_n-1)^2b_n}\\  &= \frac{1}{b_n-1} - \frac{1}{b_n^2-b_n} = \frac{1}{b_n-1}-\frac{1}{b_{n+1}-1}.
\end{align}$$
By telescoping, we get 
$$
\begin{align}
& \sum_{i=0}^{n}\frac{1}{b_i} = \frac{1}{b_0-1}-\frac{1}{b_{1}-1} + \frac{1}{b_1-1}-\frac{1}{b_{2}-1} + \cdots + \frac{1}{b_n-1}-\frac{1}{b_{n+1}-1} \\ &= \frac{1}{b_0-1} - \frac{1}{b_{n+1}-1} = \frac{1}{2-1} - \frac{1}{b_{n+1}-1} = 1 - \frac{1}{b_{n+1}-1}.
\end{align}
$$
Therefore, we can replace $1 - \frac{1}{b_{n+1}-1}$ in our inequality with $\sum_{i=0}^{n}\frac{1}{b_i}$ so that $$
1− \frac{1}{3^{2^{n−1}}}<1 - \sum_{i=0}^{n}\frac{1}{b_i}<1− \frac{1}{3^{2^{n}}}
$$ is satisfied for all positive integers $n$.

From whats given in the problem, we have
$$
a_{n+1} = \frac{a^2_n}{a^2_n-a_n+1} = \frac{1}{1-\frac{1}{a_n}+\frac{1}{a^2_n}}.
$$

Lets define $a_0 = \frac{1}{2}$. We will now prove $a_n = \frac{1}{b_n}$ for all non-negative integers $n$. The base case is already satisfied, as $a_0 = \frac{1}{2} = \frac{1}{b_0}$ since we've defined $b_0 = 2$. The inductive step is as follows: Assume that $a_n = \frac{1}{b_n}$ is true for a positive integer $n$. We will now prove that this equation is satisifed for $n+1$. We have
$$
a_{n+1} = \frac{1}{1-\frac{1}{a_n}+\frac{1}{a^2_n}} = \frac{1}{1-b_n+b_{n}^2} = \frac{1}{b_{n+1}}.
$$
This is based off the fact that $\frac{1}{a_n} = b_n$ and $b_{n+1} = b_n^2 - b_n + 1.$ Thus, we have
$$
\frac{1}{2} + a_1+a_2+\cdots+a_n = \frac{1}{b_0} + \frac{1}{b_1} + \frac{1}{b_2} + \cdots + \frac{1}{b_n} = \sum_{i=0}^{n}\frac{1}{b_i}.
$$

We can now rewrite our inequality so that
$$
1− \frac{1}{3^{2^{n−1}}}<1 - \frac{1}{2} + a_1+a_2+\cdots+a_n<1− \frac{1}{3^{2^{n}}}
$$
is satisfied for all positive integers $n$. Subtracting each expression in the inequality by $\frac{1}{2}$, we thus obtain
$$
\frac{1}{2} − \frac{1}{3^{2^{n−1}}}<a_1+a_2+\cdots+a_n<\frac{1}{2}− \frac{1}{3^{2^{n}}}
$$
which is satisfied for all positive integers $n$.



