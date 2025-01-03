### 1.1 Multiplication Tables
The set of multiples of $x$ is:
$$
M = {\{\cdots,-3x,-2x,-x,0,x,2x,3x,\cdots\}}.
$$
Every number in the set is a **multiple** of $x$ and is thus **divisible** by $x$.

**Definition 1.1.1: A number $n$ is a multiple of $m$ if it is in the multiplication set of $m$.**

**Definition 1.1.2: A number $n$ is *divisible* by $m$ if $n$ is a multiple of $m$. Also, $m$ divides $n$ can be written as $m \mid n$.**

This is read as "$m$ divides $n$", so $\frac{n}{m}$ is an integer.

### 1.2 Divisibility Properties

##### 1.2.1 Basic Results
**Theorem 1.2.1: Let $x,y,z$ be integer, then**
- $x \mid x$.
- $1 \mid x$ and $x \mid 0$.
- If $x \mid y$ and $y \mid z$, then $x \mid z$.
- If $x \mid y$, there exists integer $k$ (can be negative) such that $y = kx$.

Thus, $m \mid n \iff \frac{n}{m} \in \mathbb{Z}$ where "$\iff$" denotes "if and only if".

##### 1.2.2 Special Properties

**Theorem 1.2.2: If $x \mid y$ where $x$ and $y$ are integers, then either $y = 0$ or $|x| \le |y|$.**
Let $x \mid y$, then $y$ is an element of ${\{\cdots,-3x,-2x,-x,0,x,2x,3x,\cdots\}}$. Right side is $y \ge x$ and left side is $|y| \ge x$ and inverse for if $x$ is negative. Then everything except $y=0$ satisfies $|x| \le |y|$. 

**Question 1.21: In which case can you ignore the absolute value sign?** 
When $x \le 0$, we can ignore when $y \ge -x$. When $x \ge 0$, we can ignore when $y \ge x$. 

##### 1.2.3 Our First Formal Proof

**Question 1.2.2: Find two mistakes in the proof.**
First, the proof assume $k \ge 1$ when $k$ is an integer, and $x$ may be negative so we need to switch signs.

**Proving Theorem 1.2.2:** Let $y = kx$ for some integer $k$. If $k=0$, then $y = 0$. Else if $k \neq 0$, then $|y| = |k| \cdot |x| \ge |x|$ since $|k| \ge 1$ and $|x| \ge 1$. 

##### 1.2.4 Special Property 2
Let $M$ be the set of multiples of $x$, so $M = {\{\cdots,-3x,-2x,-x,0,x,2x,3x,\cdots\}}$. 
Let $c$ be any integer, then $n \in M \implies cn \in M$ (but not the other way around). 
Let $x$ and $y$ be integers of the set $M$, then $x,y \in M \implies x+y \in M$ (but not the other way around).

**Lemma 1.2.1: For any two numbers $x,y \in M$, we have $ax + by \in M$ for any integers $a,b$.**

This mean $c \mid x,y$ implies $c \mid ax, c \mid by, c\mid ax+by$ for any integers $a,b$. 

**Theorem 1.2.3: Suppose $c \mid x,y$. Then $c \mid ax+by$ for any $a,b \in \mathbb{Z}$.**

**Theorem 1.2.4: Let $x,y,z$ be integers. Then,**
- $x \mid x$.
- $1 \mid x$ and $x\mid 0$.
- $x \mid y,y \mid z \implies x \mid z$
- If $z \mid x,y$, then $z \mid ax + by$ for any $a,b \in \mathbb{Z}$ (can be negative).
- If $x \mid y$, then either $y = 0$ or $|x| \le |y|$.
- If $x \mid y$ and $y \mid x$, then $x = \pm y$ so $|x| = |y|$.
- $x \in y \iff xz \mid yz$ for some non zero integer $z$.
- $x \mid y \implies x \mid yz$ for any $z \in \mathbb{Z}$. 

We may reduce problems as such. Let $n \mid 2n+1 \implies n \mid 1 \implies n = \pm 1$ using above properties.

**Problem 1.2.1: Show that if $n>1$ is an integer, we can't have $n \mid 2n^2+3n+1$.**
We have $n \mid 2n^2 +3n + 1 \implies n \mid 1 \implies n = \pm 1$. Thus, $1>1$ which is a contradiction. 

**Problem 1.2.2: Let $a>b$ be natural numbers. Show that we can't have $a \mid 2a + b$.**
We have $a \mid 2a + b \implies a \mid b$. Since $a>b>0$, this means $b$ is not in the multiple set of $a$, so $a \nmid b$.

**Problem 1.2.3: For 2 fixed integers $x,y$, prove that $x-y \mid x^n - y^n$ for any integer $n$.**
It is well known that $x-y$ is a factor of $x^n-y^n$, where $x^n-y^n = (x-y)(x^{n-1}+x^{n-2}y+x{n-3}y^2 + \cdots + xy^{n-2}+y^{n-1})$. Thus, it is always true that $x-y \mid x^n-y^n$.


### 1.3 Euclid's Division Lemma

Represent all numbers in relation to$\pmod{m}$ by $n = am + r$ for some remainder $r$.

**Lemma 1.3.1: For any integer $a,b$, we can find $a$ number $0 \le r < a$ such that $b$ is $r$ more than some multiple of $a$.**
Since $0 \le r < a$, we have $b = am + r$. 

**Question 1.3.1: Why do we need $0 \le r$ and not $0 < r$? Also, why $r<a$ and not $r \le a$?**
For any integer $b$ means $b$ can be a multiple of $a$, so we must have $0 \le r$. We can have $r \le a$ (not wrong), but it would be excessive since the next multiple already covers that case (when $r=0$), thus we don't need to include it.

**Theorem 1.3.1 (Euclid's Division Lemma): For any integers $a,b$, we can find unique integers $q,r$ such that $b = aq+r, 0 \le r < a$.**
Here, $q$ is called the quotient, and $r$ is called the remainder.


### 1.4 Primes
A number $n$ is prime if it has two divisors: $1$ and $n$ (itself). 
Note $2$ is the only even prime, so parity arguments may be helpful in problems involving primes.
**Question 1.4.1: Is 1 a prime?** 
No because $1$ only has one divisor.

Prime Number Theorem: $\pi(n) \sim \frac{n}{\log{n}}$, which states the number of primes less than $n$ is approximately $\frac{n}{\log{n}}$. This approximation gets closer as $n$ gets larger.

**Problem 1.4.1: Find all positive integers $n$ for which $3n-4, 4n-5, 5n-3$ are all prime numbers.**
Let $x = n-1$. Then, we want $3x-1,4x-1,5x+2$ to be prime. If $x$ is odd, $3x-1$ is even, which means $x = 1,n=2$. This works. If $x$ is even, $5x+2$ is even meaning $5x + 2 = 2, x = 0, n = 1$. However, $3-4 = -1$ is not prime, so this doesn't work. 
Thus, the only positive integer that works is $n = 2$.

**Problem 1.4.2: If $p<q$ are two consecutive odd prime numbers, show that $p+q$ has at least $3$ prime factors (not necessarily distinct).**
Hint 1: Since $p,q$ are odd, $p+q$ is even, so $2 \mid p+q, \frac{p+q}{2}$ is an integer. We thus want to show $\frac{p+q}{2}$ has at least two prime factors. So essentially $\frac{p+q}{2}$ is not prime.
We may then use "two consecutive" information by first stating that $p < \frac{p+q}{2} < q$. Since $p$ and $q$ are consecutive primes, $\frac{p+q}{2}$ is not prime by definition. Thus, $\frac{p+q}{2}$ has at least two prime factors.

Comment: We may be tempted to jump straight into proving $x \mid p+q$ for some $x$ for certain cases, such as trying to prove $3 \mid p+q$ or $5 \mid p+q$ works for when $p,q$ satisfies some property. However, proving this suggests that there exists some pattern in primes. Since primes are ==very random==, these approaches will most likely not work.

##### 1.4.1 Fundamental Theorem of Arithmetic

**Theorem 1.4.1 (Fundamental Theorem of Arithmetic): Any natural number greater than 1 has a unique prime factorization.** 
Unique means the way exists and we can only write it that way. Thus, any number $n$ can be written as
$$
n = p_1^{a_1}p_2^{a_2}\cdots p_k^{a_k}
$$
where $p_1,...,p_k$ are primes and $a_1,...,a_k$ are non-negative integers.
It is useful in NT problems to imagine a number by its prime factors.

### 1.5 Looking at numbers as Multisets
We may represent the prime factorization of numbers as a multiset:
$$
n = p_1^{a_1}p_2^{a_2}\cdots p_k^{a_k} = \{\underbrace{p_1,...,p_1}_{a_1\textnormal{ times}},\underbrace{p_2,...,p_2}_{a_2\textnormal{ times}},...,\underbrace{p_k,...,p_k}_{a_k\textnormal{ times}}  \}.
$$
**Theorem 1.5.1 (Divisibility in Sets): Let $a,b$ be two integers. Then $a \mid b \iff A \subset B$.**
Here, $\subset$ represents that set $A$ is a subset of set $B$, where $A$ and $B$ are the prime factorization multiset of $a$ and $b$.

### 1.6 GCD and LCM

**Definition 1.6.1: The Greatest Common Divisor (GCD) of two numbers is the number obtained by the multiset of its common prime factors, denoted as $gcd(m,n)$ for two numbers $m,n$.**

In general, for numbers $m$ and $n$ with multisets $M$ and $N$, $gcd(m,n) = M \cap N$ (where $\cap$ denotes intersection). 

**Lemma 1.6.1: Let $a,b$ be integers. The GCD of $a,b$ is the largest number which divides both $a,b$. Moreover, $\gcd(a,b) \le a,b$.**
Let GCD not be the largest, then let some other number $x$ be the largest. This $x$ must then have another common factor in both multisets. However, by definition all common factors have already been pulled out, so $x$ cannot have anything more.

**Lemma 1.6.2: Let $a,b,c$ be three integers. Then, $c \mid a, c \mid b \implies c \mid \gcd(a,b)$.**
Since $c$ divides both $a$ and $b$, we have $C \subset A$ and $C \subset B$. Thus, $C \subseteq A \cap B$, which is the same as saying $c \mid \gcd(a,b)$ by Theorem 1.5.1. The set representations can be visualized with the following diagram:
![[Pasted image 20241130211843.png]]

**Lemma 1.6.3 (Prime Factorization of GCD): Let $a,b$ be two integers with prime factorization: $a = p_1^{a_1}p_2^{a_2} \cdots p_k^{a_k}$ and $b = p_1^{b_1}p_2^{b_2} \cdots p_k^{b_k}$ where $a_i$ and $b_i$ are non negative integers. Then,**
$$
\gcd(a,b) = p_1^{min(a_1,b_1)}p_2^{min(a_2,b_2)}...p_k^{min(a_k,b_k)}.
$$
This is trivial.

We also define Least Common Multiple (LCM) as follows.
**Definition 1.6.2: Let $a,b$ be two integers. Then,**
- $lcm(a,b) = A \cup B$.
- LCM of $a,b$ is the smallest number divisible by both $a$ and $b$, and $a,b \le lcm(a,b)$.
- Lemma 1.6.3.

**Lemma 1.6.4: Let $a,b,c$ be integers. Then, $a \mid c, b \mid c \implies lcm(a,b) \mid c$.**
This must mean $A \cup B \subseteq C$. Since $lcm(a,b) = A \cup B$, $lcm(a,b) \subseteq C$ so $lcm(a,b) \mid c$.

**Lemma 1.6.5 (Product of GCD and LCM): Let $a,b$ be two integers. Then, $gcd(a,b) \cdot lcm(a,b) = ab$. 

We can prove algebratically:
$$
\begin{align}
gcd(a,b) \cdot lcm(a,b) &= \left(p_1^{min(a_1,b_1) + max(a_1,b_1)}\right ) \cdots \left(p_k^{min(a_k,b_k) + max(a_k,b_k)}\right ) \\
&= p_1^{a_1+b_1} \cdots p_k^{a_k+b_k} = ab.
\end{align}
$$
We can also prove by sets. For two sets, it is always true that $A \cup B + A \cap B = A+B$. This corresponds to $lcm(a,b) \cdot gcd(a,b) = ab$.

**Definition 1.6.3: Two numbers $a,b$ are coprime (or relatively prime) if $gcd(a,b) = 1$.**
This means they have no common prime factors.

**Theorem 1.6.1 (Euclid proof of infinite primes): There exists infinitely many primes.**

We use proof by contradiction. Assume there is a finite number of primes $\{ p_1,p_2,...,p_k\}$. Then, let $N = p_1p_2...p_k + 1$. Here $N$ must be pairwise coprime to all $p_1,p_2,...,p_k$ since we add $1$ to the end. However, by Fundamental Theorem of Arithmetic since $N>1$, $N$ must be made of some prime factors. However, none of them are in our finite set of primes $\{ p_1,p_2,...,p_k\}$. Thus, it must be that $N$ is made up of a prime factor outside of this set, which makes $N$ a new prime number.

**Problem 1.6.1: Prove that $gcd(a,b) = a$ if and only if $a \mid b$.**
If $gcd(a,b) = a$, this means $b$ is a multiple of $a$, so $a \mid b$. If $a \mid b$, then it must be that $gcd(a,b)=a$.

**Problem 1.6.2: If $p$ is prime, prove that $gcd(a,p) \in \{1,p\}$.**
We have $P = \{p\}$. Thus, either $a$ is coprime to $p$ so $gcd(a,p) = 1$ or $a = p$ so $gcd(a,p) = p$.

**Problem 1.6.3: Let $a,b$ be coprime. Show that if $a \mid c, b \mid c$, then $ab \mid c$.**
By Lemma 1.6.4, $a \mid c, b \mid c \implies lcm(a,b) \mid c.$ Since $lcm(a,b) = c$ as $a$ and $b$ are coprime, $ab \mid c$. 


### 1.7 Euclid's Division Algorithm
Let $m = p^2q$ and $n = pq^2r$. We have $gcd(m,n)=pq$. Then, $m+n = p^2q + pq^2r = pq(p+qr) = gcd(m,n)(p+qr)$. Moreover, $p$ and $qr$ are coprime. If they are not coprime, it means we can still take a common divisor outside and to $gcd(m,n)$, which isn't possible since $gcd(m,n)$ already contains all common divisors.

**Question 1.7.1: Why is $gcd(a+b,b) = gcd(a,b)$?**
Let $d = gcd(a+b,b)$. Then by definition, $d \mid a+b$ and $d \mid b$. Thus, by Theorem 1.2.4, $d \mid a$. Thus, $d$ must be the maximum possible value satisfying $d \mid a$ and $d \mid b$, which is $gcd(a,b)$.

**Question 1.7.2: Why is $gcd(a+3b,b) = gcd(a,b)$?**
Let $d = gcd(3a+b,b)$. Then by definition, $d \mid 3a+b$ and $d \mid b$. Thus, by Theorem 1.2.4, $d \mid 3a$. Thus, $d$ must be the maximum possible value satisfying $d \mid a$ and $d \mid b$, which is $gcd(a,b)$.

**Lemma 1.7.1: Let $a,b$ be integers. We can write $a = bq+r$ for some integers $q,r$, where $0 \le r < b$ (by multiplication table). Then, $gcd(a,b) = gcd(r,b).$**
Thus, $gcd(a,b) = gcd(bq+r,b) = gcd(bq+r - bq,b) = gcd(r,b)$.
Moreover, it is true that $gcd(a,b) = gcd(a \pm kb,b)$ for any integer $k$. 

We can then apply the **Division Algorithm** when finding $gcd(x,y)$.
For example, to find $gcd(370,100)$, we can do $gcd(370,100) = gcd(70,100) = gcd(70,30) = gcd(10,30) = gcd(10,10) = 10$. So, we can essentially reduce $gcd(a,b)$ to $gcd(b,r)$ until the numbers are small enough.

**Question 1.7.3: Why must the algorithm terminate (Why does it stop eventually and not go on forever)?**
WLOG for some state $a,b$ let $a > b$. Then division algorithm states $gcd(a,b) = gcd(r,b)$ where $0 \le r < b$. Thus, the transition makes the upper bound the smaller number, which is $b$ in this case. However, since $r < b$, the smaller number is now $r$. This means after transition, the new smaller number is always smaller than the previous smaller number. Since the upper bound is always the smaller number, and the smaller number always decreases, the algorithm must terminate when the smaller number is 0.

**Problem 1.7.1: Find $gcd(120,500)$ using the algorithm.**
We have $gcd(120,500) = gcd(120,500-480) = gcd(120,20) = gcd(20,20) = 20$.

**Problem 1.7.2: Show that $gcd(4n+3,2n) \in \{1,3\}$.**
We have $gcd(4n+3,2n) = gcd(3,2n)$. The only positive integers that divides $3$ is $1$ and $3$. Then, $n = 1$ and $n = 3$ covers $gcd(3,2n) = 1,3$ respectively, so they both exist. Thus, it can only be $1$ or $3$.

**Problem 1.7.3: With context to the definitions in Lemma 1.7.1, is it true that $lcm(a,b) = lcm(r,b)$.**
Assume $lcm(a,b) = lcm(r,b)$. By Lemma 1.7.1, $gcd(a,b) = gcd(r,b)$. Thus by Lemma 1.6.5, $gcd(a,b) \cdot lcm(a,b) = gcd(r,b) \cdot lcm(r,b) \implies ab = rb$. However, it is not always true that $a = r$. Thus $lcm(a,b) = lcm(r,b)$ is not always true.

### 1.8 Bezout's Theorem

**Problem 1.8.1: Let $a,b,x,y,n$ be integers such that $ax+by=n$. Prove that $gcd(a,b)$ divides $n$.**

Since $gcd(a,b) \mid a,b$ by definition, let $p,q$ be integers such that $a = p \cdot gcd(a,b)$ and $b = q \cdot gcd(a,b)$. Then, $ax + by = gcd(a,b)(px + qy) = n$. Since $px$ and $qy$ are integers, $gcd(a,b) \mid n$.  

Lets find all $n$ such that $ax+by = n$ have integer solutions $(x,y)$ given fixed constants $a,b$. Let's call these solutions $n$ as "special" integers.

**Problem 1.8.2: Let $(a,b) = (8,12)$. Find $x,y \in \mathbb{Z}$ such that $ax+by=gcd(a,b)$.**
We have $8x + 12y = gcd(8,12) = 4$. It is easy to see that $(x,y) = (-1,1)$ satisfies the equation as $-8+12 = 4$.

**Problem 1.8.3: Let $(a,b) = (7,12)$. Find $x,y \in \mathbb{Z}$ such that $ax+by = gcd(a,b)$.**
We have $7x + 12y = gcd(7,12) = 1$. Since $7 \cdot 7 = 49, 12 \cdot 4 = 48$, we can have $(x,y) = (7,-4)$ as a solution since $49 - 48 = 1$.

Thus, we guess that $gcd(a,b)$ is always "special".

In fact, if $ax+by = gcd(a,b)$ has solution $(x,y) = (x_0,y_0)$, then $a(mx_0) + bmy_0 = m(ax_0 + by_0) = m \cdot gcd(a,b)$ for any $m$. Thus, every multiple of $gcd(a,b)$ can be expressed in the form $ax+by$. This means that all multiples of $gcd(a,b)$ are "special".

**Theorem 1.8.1 (Bezout's Theorem): Let $a,b$ be integers. Then, $ax +by = n$ has a solution if and only if $gcd(a,b)$ divides $n$.**
We first prove if $ax+by =n$, then $gcd(a,b) \mid n$. We proved this in Problem 1.8.1. 
Then, we must prove if $gcd(a,b) \mid n$, then there exists integers $x_0,y_0$ such that $ax_0+by_0 = n$. 

**Example 1.8.2 (Euclid's Lemma): If $c \mid ab$ and $gcd(c,a) = 1$, then $c \mid b$.**
Since $c\mid ab$, $C \subseteq A+B$. However since $gcd(c,a)= 1, C \cap A = \emptyset$ (empty set). Thus, it must mean that $C \subseteq B \implies c \mid b$. 

We may also prove Euclid's Lemma with Bezout's Theorem. Since $gcd(c,a) = 1$, there exists integers $x,y$ such that $cx + ay = 1$. Then, we can say $b(cx+ay) = cbx + aby = b$. Since $c \mid cbx$ and $c \mid aby$ (by definition in problem $c \mid ab$), it must be that $c \mid cbx+aby = b$, so $c \mid b$.


**Example 1.8.3 (Putnam 2000): Prove the expression $\frac{gcd(m,n)}{n} \binom{n}{m}$ is an integer for all pairs of integers $n \ge m \ge 1$.**
Hint: use Bezout's Theorem to write $gcd(m,n) = mx + ny$. 
By Bezout's Theorem, there always exists a solution $(x,y)$ where $x,y \in \mathbb{Z}$ for $mx + ny = gcd(m,n)$. We thus have $\frac{mx+ny}{n}\binom{n}{m} =\frac{m}{n}x \cdot \binom{n}{m} + y \binom{n}{m}$. Note $y \binom{n}{m}$ must be an integer as $y$ must an integer and "$n$ choose $m$" must be an integer. We are now left to prove $x \cdot \frac{m}{n}\binom{n}{m}$ is an integer. Since $x$ is an integer, we prove $\frac{m}{n}\binom{n}{m}$ is an integer. We have $\frac{m}{n}\binom{n}{m} = \frac{m}{n}\frac{n!}{m!(n-m)!} = \frac{(n-1)!}{(m-1)!(n-m)!} = \binom{n-1}{m-1}$ which is also an integer.



### 1.9 Base Systems
In **base 10** representation, we can use for each place the digits $0$ to $9$.
In **base 2** (binary), we can only use $0$ and $1$ as digits.

**Question 1.9.1: Why don't we have the digit $2$ in base 2? Answer this in terms of base 2 expansion, i.e. $a_0+2a_1+4a_2$.**
Because having the digit $2$ would carry us to the next digit place.

We may use the following algorithm to determine $x$ base $b$:
- Let $k = 1$.
- Let $r = x \pmod{b^k}$ and append $r$ to the end.
- Make $x = x- r$ and divide by $b$ to get $\frac{x-r}{b}$.

**Problem 1.9.1: Find $37$ in base $5$ and find $69$ in base $2$.**
We have $37 \equiv 2 \pmod{5}$, last digit is $2$. $(37-2)\div 5 = 7$. $7 \equiv 2 \pmod{5}$, second last digit is $2$. $(7-2) \div 5 = 1$. $1 \equiv 1 \pmod{5}$, first digit is $1$. 

**Problem 1.9.2: Show that any power of $2$ is of the form $100...0$ in base 2.**
Trivial by definition, we say $2^k$ is just $1$ in the $k+1^{th}$ place. In fact, any power of $b$ is in the form of $100...0$ in base $b$.

**Problem 1.9.3: Prove in general that if $n = a_0 \cdot l^0 + \cdots + a_k \cdot l^k$, then $k$ satisfies $l^k \le n < l^{k+1}$ and $a_kl^k \le n < (a_k+1)l^k$.**
For the first problem, since the base has not reached $l^{k+1}$, $n < l^{k+1}$. Moreover, since $a_k>0$ it must be that $l^k \le n$.
For the second problem, $n = a_kl^k + (a_{k-1} \cdot l^{k-1} ... + a_0 \cdot l^0)$. Since $a_{k-1} \cdot l^{k-1} ... + a_0 \cdot l^0 \ge 0$. Thus, $n \ge a_kl^k$. Since $a_{k-1} \cdot l^{k-1} ... + a_0 \cdot l^0 < l^k$, it must be $n = akl^k + a_{k-1} \cdot l^{k-1} ... + a_0 \cdot l^0 < l^k < a_kl^k + l_k = (a_k+1)l^k$.

**Problem 1.9.4: Let $k$ be the largest integer $\le \log_l(n)$. Show that $n$ has exactly $k+1$ digits in base $l$.**
The largest digit place $d$ that has $a_d>0$ is just $d = k$ Thus, the digit place exists from $0$ to $k$, so $k+1$ digits. 


**Theorem 1.9.1: Any number $n$ has a unique representation in base $l$.**
A number cannot have two different representations in some base $l$, since the sum will then be different. 


### 1.10 Extra Results as Problems

**Example 1.10.1: Prove that $\sqrt{p}$ is irrational for any prime $p$.**
Assume $\sqrt{p}$ is rational, so $\sqrt{p} = \frac{m}{n}$ for some $m,n \in \mathbb{Z}$. Let $a$ and $b$ are coprime (always possible). Then, $p = \frac{m^2}{n^2}, pn^2 = m^2$. Since $m$ and $n$ are coprime, $p \mid m^2$. Since $p$ is prime, this means $p \mid m$. We can thus let $q$ be an integer such that $pq = m$. Then, $m^2 = (pq)^2 = p^2q^2 = pn^2, pq^2 = n^2$. Thus, $p \mid n^2$. Since $p$ is prime, this means $p \mid n$. This means $p$ is a common factor of both $n$ and $m$. Since $p$ is prime, $p>1$. Thus, $gcd(m,n) > 1$ which contradicts our restriction that $m$ and $n$ are coprime.

**Question 1.10.1: Where did we use the fact that $p$ is a prime?** 
We used this fact to state $p \mid m^2 \implies p \mid m$ and $p \mid n^2 \implies p \mid n$.

**Example 1.10.2: Prove if $p$ is prime and $0<k<p$, then $\binom{p}{k}$ is divisible by $p$.**
We want to prove $\frac{(p-1)!}{k!(p-k)!}$ is an integer. However, diving straight into this algebra makes it hard. Moreover, we have to use the information that $p$ is prime, and doing algebra directly doesn't get us anywhere. Instead, note that  $\binom{p}{k} = p \cdot \frac{p-1 \cdot p-2 \cdots (p-k+1)}{k!}$ is an integer and that $p$ is an integer. However, note that since $p$ is prime, $p$ is coprime to all $1,2,...,k$ as $k < p$. This means $p \nmid k!$. Thus, $p$ doesn't contribute anything to make $\frac{p-1 \cdot p-2 \cdots (p-k+1)}{k!}$ an integer, meaning $\frac{p-1 \cdot p-2 \cdots (p-k+1)}{k!}$ must be an integer for $\binom{p}{k}$ to be an integer, which is always the case. Thus, $\binom{p}{k} \div p = \frac{p-1 \cdot p-2 \cdots (p-k+1)}{k!}$ is an integer.

**Example 1.10.3 (Euclid's Division Lemma): Let $a,b$ be integers. Prove there exists unique integers $q,r$ such that $b = aq+r$ with $0 \le r < a$.**


**Example 1.10.6 (Four Number Lemma): Let $a,b,c,d$ be positive integers such that $ab = cd$. Then, there exists positive integers $p,q,r,s$ such that $a = pq, b = rs, c = ps, d = qr$.**

