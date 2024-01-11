### Review
From Intro to Combinatorics slides
- Premute n items: n!
- Put n items in k slots where order matters: $\frac{n!}{(n-k)!}$
- Put n items in k slots where order does not matter: $\binom{n}{k} = \frac{n!}{k!(n-k)!} = \binom{n}{n-k}$
- Pascals Identity: $\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1}$ for all $0 \le k \le n$
- Binomial Theorem: $(x+y)^n = \binom{n}{0}x^n + \binom{n}{1}x^{n-1}y + \cdots + \binom{n}{n-1}xy^{n-1} + \binom{n}{n}y^n$


### Proving Combinatorics Identities
We will generally use the following strategies:
- Algebraic Manipulation
- Using previous known identities to prove current identity
- Using one to one correspondance(Ex: Committee forming) 
How to prove is a matter of taste. We will provide 1 or a combination of strategies to prove our examples. We encourage you to try to prove it using other strategies.

### Basic Sum Identities
Compute $\sum_{k=0}^{n} \binom{n}{k} = \binom{n}{0} + \binom{n}{1} + \cdots + \binom{n}{n}$

Try algebraic manipulation
- kinda hard cause not same denominator = messy

Try using previous knowledge
- We see that binomial theorem has same coefficients as this. If only we can get rid of the x and y...
- We can! If we set x = 1 and y = 1, the binomial theorem becomes $(1+1)^n = \binom{n}{0} + \binom{n}{1} + \cdots + \binom{n}{n-1} + \binom{n}{n} = 2^n$
- We got rid of the variables and only left the coefficients by setting x = y = 1.
**Challenge:** try using 1-1 correspondence between choosing some numbers and $2^n$.

### More Identities by manipulating Binomial Theorem
Compute: $\sum_{k=0}^{n} \binom{n}{k}(-1)^k = \binom{n}{0} - \binom{n}{1} + \cdots + \binom{n}{n}(-1)^n$

- Based on our previous sucess when the signs weren't alternating, we can try to manipulate the binomial theorem so it gives us alternating signs.
- If we set x = 1 and y = -1, we have 
	$$\begin{align}(1-1)^n &= \binom{n}{0}(1)^n + \binom{n}{1}(1^{n-1})(-1) + \cdots + \binom{n}{n-1}(1)(-1)^{n-1} + \binom{n}{n}(-1)^n \\ &= \binom{n}{0} - \binom{n}{1} + \cdots + (-1)^n\binom{n}{n} \\ &= 0^n = 0. \end{align}$$

Compute: $\binom{n}{0} + \binom{n}{2} + \binom{n}{4} + \cdots$ for a positive n.

Now, we only want the ones with even numbers on the bottom. Note that for every even number $k > n$, $\binom{n}{k} = 0$ since there are 0 ways to choose if $k$ is bigger than the number of choices.
We want to calculate $\binom{n}{k}$ for all positive even $k$ such that $k \le n$.

Algebraic Manipulation also seems kinda iffy 
Turn back to the identities in our arsenal, what can we use?
- Take the identity we just prove and multiply by -1: $(-1) \cdot (\binom{n}{0} - \binom{n}{1} + \cdots + \binom{n}{n}(-1)^n) = -\binom{n}{0} + \binom{n}{1} - \cdots + \binom{n}{n}(-1)^n(-1) = 0 \cdot -1 = 0.$
- Here, we have alternating signs, where each $\binom{n}{k}$ with even $k$ is negative, and odd $k$ is positive.
- Now, we want to compute the sum of all $\binom{n}{k}$ where $k$ is even. Let our desired sum be S = $\binom{n}{0} + \binom{n}{2} + \binom{n}{4} + \cdots$ . Then if we add 2S to the expression above, we get: $-\binom{n}{0} + \binom{n}{1} - \cdots + \binom{n}{n}(-1)^n(-1) + 2S = 0+2S = \binom{n}{0} + \binom{n}{1} + \cdots + \binom{n}{n}$
	- Adding S once eliminates the negative for each $\binom{n}{k}$ with even $k$. Adding S once more will add positive $\binom{n}{k}$ with even $k$. Thus we get the sum of $\binom{n}{k}$ for all $k$.
	- We ALSO know from a previous identity in our arsenal that $\binom{n}{0} + \binom{n}{1} + \cdots + \binom{n}{n} = 2^n$
- Since $2S = 2^n, S = 2^{n-1}.$ This also means sum of all $\binom{n}{k}$ where $k$ is odd = $2^n - S = 2^{n-1}.$
Thus, $\sum_{k=odd} \binom{n}{k} = \sum_{k=even} \binom{n}{k} = 2^{n-1}$ 
### Pairing stuff up

Evaluate: $\sum_{k=0}^{11} k\binom{11}{k} = \binom{11}{1} + 2\binom{11}{2} + \cdots + 11\binom{11}{11}.$

The coefficients looks really bad to deal with because its changing, so we cant really use binomial theorem even though it looks similar.
If only we have the same coefficients...
- We can pair up expressions together. We know from our arsenal that $\binom{11}{k} = \binom{11}{11-k}.
- Pair up $\left(\binom{11}{0}, \binom{11}{11}\right), \left(\binom{11}{1}, \binom{11}{10}\right), \left(\binom{11}{2}, \binom{11}{9}\right),\left(\binom{11}{3}, \binom{11}{8}\right),\left(\binom{11}{4}, \binom{11}{7}\right),\left(\binom{11}{5}, \binom{11}{6}\right).$ This way, we can reverse the coefficients and the sum will be the same since for every pair, $\binom{n}{k} = \binom{n}{n-k}$: $(0)\binom{11}{0} + \binom{11}{1} + 2\binom{11}{2} + \cdots + 11\binom{11}{11} = 11\binom{11}{0} + 10\binom{11}{1} + 9\binom{11}{2} + \cdots + (0)\binom{11}{11} = S.$
- If we add these two together, we'll get the same coefficient for every $\binom{11}{k}:$ 
$$\begin{align}2S &= \left((0)\binom{11}{0} + \binom{11}{1} + 2\binom{11}{2} + \cdots + 11\binom{11}{11}\right) + \left(11\binom{11}{0} + 10\binom{11}{1} + 9\binom{11}{2} + \cdots + (0)\binom{11}{11}\right) \\ &= 11\binom{11}{0} + 11\binom{11}{1} + 11\binom{11}{2} + \cdots + 11\binom{11}{11} = 11(2^{11}).\end{align}.$$
- Here, we put everything in same coefficient, then used binomial theorem to get $\binom{11}{1} + \binom{11}{2} + \cdots + 11\binom{11}{11} = 2^{11}.$
Therefore, $S = 11 \cdot 2^{10} = 11264.$
