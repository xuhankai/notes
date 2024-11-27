![[Pasted image 20231115230501.png]]

Problem 1: We know that $3^{4} = 81,$ so $x^4 = 4.$ Square rooting both sides, we get $\sqrt{x^4} = \sqrt{4} = x^2 = 2.$

![[Pasted image 20231115230822.png]]

Problem 2: The right triangle is cut out of a square, so we can assume the hypotenuse of the right triangle is a side of the square. This is a 3 - 4 - 5 triangle. So the side length of the square is 5. 

The area of the shaded region is Area of square - Area of right 3 - 4 - 5 triangle. The answer is $5^2- 3 \cdot 4 / 2 = 19.$

![[Pasted image 20231115232425.png]]


Problem 3: Lets try to find forced squares. We note that if a sqaure is beside 2 adjancent squares that have different values, it must be the third value. We can now find value and start 
filling them out. Filling the first value creates a chain reaction for another value. Note that the middle is beside 2 filled sqaures with different values 1 and 2, so we put down 3.

![[Drawing 2023-11-15 23.13.46.excalidraw 1]]


![[Pasted image 20231115232704.png]]

Problem 4: When given nested functions, try to solve one step at a time. Lets first find $g(p)$. substituting $p$ for $k$, we get $g(p) = 2p^2.$ We then solve for $g(g(p))  =g(2p^2)$. We have 
$$
g(2p^2) = 2(2p^2)^2 = 8p^4.
$$
We must now use a general idea: Given a number in prime factor form $n = p_1^{e_1}p_2^{e_2}...p_n^{e_n},$ the number of divisors of $n$ is 
$$
(e_1+1)(e_2+1)...(e_n+1).
$$
Since $p\ge 3, p \neq 2.$ This means $8p^4$ can be expressed as $2^3p^4.$ The number of divisors is $(3+1)(4+1) = 20.$

![[Pasted image 20231115233450.png]]

Problem 5: This can be rephrased as wanting to find the number of divisors of 6300 that are also squares. Lets first express 6300 in prime factor form: $6300 = 2^2 \cdot 3^2 \cdot 5^2 \cdot 7.$

For a divisor to be a square, all of its prime factor exponents must be even. Thus, we know that the divisor must not contain $7$ so its a divisor of $2^2 \cdot 3^2 \cdot 5^2.$

For each prime factor, we must include both of it so $2^2$ or none of it so $2^0$ in order to make the exponent even. So, there are 2 choices for each prime factor. We have 3 factors so the answer is $2 \cdot 2 \cdot 2 = 2^3 = 8$ (btw this is the same as the number of subsets of {2,3,5}). 


![[Pasted image 20231115234144.png]]

Problem 6: Whenever we see weird/disgusting exponents on composite numbers, we want to try expressing it as prime factors. We have $25^{303} = (5^2)^{303} = 5^{606}$ and $8^{202} = (2^3)^{202} = 2^{606}$. So we can coincidentally pair up the twos and the fives to get
$$
5^{606} \cdot 2^{606} = 10^{606} = \sqrt{A+1}.
$$
Squaring both sides gives $10^{1212} = A+1, 10^{1212} - 1.$ We know that $10^{1212}$ is just 1 followed by 1212 0s. So 1 below that would just be 1212 9s. This is equal to $A$, so the sum of the digits of $A$ is just the sum of 1212 9s = $1212 \cdot 9 = 10908.$


![[Pasted image 20231115234707.png]]

Problem 7: We can try to estimate where the 235 will lie in the sum. Lets first define a "chunk" length $a+1$ as a 1 followed by $a$ 4s. The sum of this chunk is $1 + 4a$. We start with a chunk length 2 and the length of the chunks increase by 1 each time. If we were to go up to k chunks, the sum would be 
$$
\sum_{i=1}^{i = k} 1+4i = \sum_{i=1}^{i = k} 1+\sum_{i=1}^{i = k} 4i = k + 4\sum_{i=1}^{i = k}i = k + 4\left(\frac{k(k+1)}{2}\right) = 2k^2 + 3k.  
$$
We want to get $2k^2 + 3k$ close to 235. Trying some values for $k$, we find that if k = 10, $2k^2 + 3k = 200 + 30 = 230.$ This will start the new chunk $a = 11$. We start by adding 1, so our sum is currently $230 + 1 = 231,$ then we add 4 so our sum is $231 + 4 = 235.$ We now know there is a value for $n$. 

To get to 230, we used all chunks from 1 to 10. The number of moves is the length of the chunk, so we made $10 + \frac{10(11)}{2} = 65$ moves so far since the length of the . We then added 1 then added 4, so 2 more moves for a total of $67$ moves. 

![[Pasted image 20231116000348.png]]

Problem 8: The original surface area before the cutting was $2(3 * 4 + 3* 5 + 4 * 5) = 2(47) = 94.$ After the cut, we still have the original surface plus some additional surface area. This additional surface area will be 2 * the face of the cut. Thus, we only need to maximize the area of the face that has been cut. 
![[Drawing 2023-11-16 00.07.08.excalidraw 1]]
To do this, we must find the maximum base and height that can be cut in a straight line. This maximum value will be a cut of a diagonal. The area of one side is $\sqrt{a^2 + b^2} \cdot c.$ So its either 
$\sqrt{3^2 + 4^2}\cdot5 = 25$, $\sqrt{3^2 + 5^2}\cdot4 = 4\sqrt{34}$, or $\sqrt{4^2 + 5^2}\cdot3 = 3\sqrt{41}$. We note that $\sqrt{34} < 6$ so $4\sqrt{34} < 24.$ Moreover, $\sqrt{41} < 7,$ so $3\sqrt{41} < 21.$ Thus, 25 is the biggest. Multiplying this area by 2 and adding it to 94, we get 50 + 94 = 144.



