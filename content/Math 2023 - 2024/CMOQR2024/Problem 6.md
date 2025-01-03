Lets assume that real constants $p,q,r$ are currently fixed such that the system of equations yields the maximum number of solutions. Lets fix $c$ to be any real number. Then, let $x = p-c$ where $x$ is a fixed constant. From the first equation, we have
$$
b = x-a^2.
$$
Plugging this into the second equation, we get
$$
a+(x-a^2)^2+(c-q) = a^4 - (2x)a^2 + a + (c - q + x^2) = 0.
$$
We know that $c,q,x$ are all currently set to be a fixed value. Thus, $c- q + x^2$ is a fixed constant. Based on the Fundamental Theorem of Algebra, the above polynomial $a^4 - (2x)a^2 + a + (c - q + x^2) = 0$ has at most $4$ real roots. This means that for any real number $c$ and the optimal combination $p,q,r$, there at most $4$ real values of $a$. 

For every pair of solutions $(a,c)$ value, there is exactly one corresponding $b$ value. This is because $x=p-c$ and $a^2$ will both be a fixed number based on the values of $a$ and $c$. Thus, there is only one value for $b = x-a^2$. 

From the third equation, we get 
$$
c^2 = r - a - b = r - a - (p-c-a^2).
$$
Rearranging, we have
$$
c^2 -c + (p-r-a^2+a) = 0.
$$
We have proven that for every $c$, there are at most $4\cdot 1 = 4$ pairs of solutions $(a,b)$ that will satisfy the previous two equations. To satisfy the third and final equation, there are at most two possible $c$ value we can choose from based on the Fundamental Theorem of Algebra. This is because for every corresponding $c$ we pick, we have at most four real values of $a$ satisfying the system. In the most optimal scenario, we predict and fix the four real values of $a$ that will yield the maximum number of solutions. Then, the above equation becomes a polynomial of degree $2$ as $a,p,r$ are all fixed constant values. Therefore, there are at most two $c$ values that go with every pair of solutions $(a,b)$ for a total of $4 \cdot 2 = 8$ solutions $(a,b,c)$.

However, this is just the best case scenario where we assumed all our solutions we found were real. Now, I will give an example of $p,q,r$ that achieves a total of $8$ solutions of real triplets $(a,b,c)$. Setting $p = 2, q = 2, r = 2,$ we yield the following $8$ solutions:
$$
\begin{align}
& (2,-1,-1), \\
& (-1,2,-1), \\
& (-1,-1,2), \\ 
& (1,0,0), \\
& (0,1,0), \\
& (0,0,1), \\ 
& (\sqrt{3}-1,\sqrt{3}-1,\sqrt{3}-1), \\
& (-\sqrt{3}+1,-\sqrt{3}+1,-\sqrt{3}+1) \\
\end{align}
$$
Plugging each of these triplets $(a,b,c)$ into the system of equations, as well as $(p,q,r) = (2,2,2)$, we find that they are all valid real solutions.

