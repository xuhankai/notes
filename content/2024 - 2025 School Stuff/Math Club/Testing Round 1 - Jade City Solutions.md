**Date:** This contest took place on November 27, 2024.
**Problem setters:** Kevin Xu, Google and stuff
**Testers:** Ricky Chen, Justin Wu

**Problem 1:** You arrive at Jade City and into the imperial palace. To first test your worth as intelligent demon hunter, the governor asks you a question that has stumped the greatest scholars. There are only rabbits and chickens in a pen. The rabbits have 4 legs and the chickens have 2 legs. There are 54 heads and 152 legs. Let the number of rabbits be x. What is the sum of the digits of x?

**Solution 1 (2 variables):** Let $y$ be the number of chickens. Then we wish to solve the system of equations
$$
\begin{align}
x + y &= 54, \\
4x + 2y &= 152.
\end{align}
$$
Subtracting twice the first equation from the second gives $2x = 44$ so $x = 22.$ The sum of the digits is $2 + 2 = \boxed{4}$. ~Ricky

**Solution 2 (1 variable):** Let $y = 54-x$ be the number of chickens. $4x+2(54-x) = 152 = 2x+108$. Thus, $152-108=2x=44, x = 22,2+2 = \boxed{4}$. ~Kevin

**Problem 2:** To get ready for the journey, you must choose a colored hat, robe, and staff. For each accessory, you can choose one of 3 colors: Red, Green, and Blue. However, it must be that two of the colors of the accessories must be the same, and the third color must be different. How many different ways can you choose an outfit?

**Solution 1 (Direct Calculation):** There are $3$ ways to choose a color (that we use for two accessories), $3$ ways to choose two accessories, and $2$ ways to choose the remaining color for the remaining accessory. Hence there are $3\cdot 3 \cdot 2 = \boxed{18}$ ways to choose an outfit. ~Ricky

**Solution 2 (Complementary sus):** Number of ways to have all distinct colors is $3!=6$. Number of ways to have all same colors is $3$. Number of total ways is $3^3 = 27$. Thus, number of ways is just $27-6-3 = \boxed{18}$. ~Kevin

**Problem 3:** As you are headed to Devil Mountain, you and your three other demon hunter friends want to pay for the carriage fee. All of you have exactly one $1, $2, and $3 coin. Each of you wants to pitch in exactly one coin to the total carriage fee, which is $8. How many ways can you and your friends pay for the carriage? 

**Solution 1 (Case Work):** Let $(p_1, p_2, p_3, p_4)$ be the amount that each person has to pay, where each $p_i$ represents either you or one of your friends. Then under the conditions of the problem, $(p_1, p_2, p_3, p_4)$ must be some permutation of one of the following: $(3, 3, 1, 1)$, $(3, 2, 2, 1)$, $(2, 2, 2, 2)$. The amount of permutations each case has are $6, 12$ and $1$ respectively. Hence there are $6 + 12 + 1 = \boxed{19}$ possible ways you can pay for the carriage. ~Ricky

**Solution 2 (DP states):** Let $dp_{i,j}$ represent the number of ways such that after the $i^{th}$ person had gone, we now have a sum $j$. Thus, our answer is $dp_{4,8}$. The base case is $dp_{1,1} = 1, dp_{1,2}=1, dp_{1,3} = 1$ and the transition is $dp_{i,j} = dp_{i-1,j-1}+dp_{i-1,j-2}+dp_{i-1,j-3}$. Thus, we have
$$
\begin{align}
dp_{1,1} &= 1, dp_{1,2}=1, dp_{1,3} = 1 \\
dp_{2,2} &= 1, dp_{2,3}=2, dp_{2,4} = 3, dp_{2,5}=2, dp_{2,6}=1 \\
dp_{3,3} &= 1, dp_{3,4}=3, dp_{3,5} = 6, dp_{3,6}=7, dp_{3,7}=6, dp_{3,8}=3, dp_{3,9}=1 \\
dp_{4,8} &= dp_{3,7}+dp_{3,6}+dp_{3,5} = 6+7+6 = \boxed{19}.
\end{align}
$$
~Kevin

**Problem 4:** On the way to Devil Mountain, you encounter an enchanted forest. The entrance to the enchanted forest is protected by the demon's magic. There are 100 doors numbered 1 to 100 from left to right. All remain closed at the beginning. Toggling the state of the door means if it's open, then the door closes, and if it's closed, the door opens. The procedure you must go through to find the "safe" doors is as follows: For the first time, toggle all the doors. For the second time, toggle every even door. For the third time, toggle every third door. You must follow this strategy for 100 iteration. More formally, for each round  _i_  from  _1 <= i <= 100_, you must toggle every  $i^{th}$ door. The doors that are open at the end of this process are "safe". What is the sum of the index of all the safe doors?

**Solution:** Notice that round $j$ will open/close every door that is a multiple of $j$. The doors that will stay open, then, are those that have exactly an odd number of positive factors. The only numbers with an odd number of positive factors are perfect squares (in non-perfect squares, we can pair up the factors so that each pair multiplies to the original number; hence an even number of factors), so the sum of the indices are the sum of the perfect squares less than or equal to $100 = 10^2$. Thus we need to calculate $$1^2 + 2^2 + \dots + 10^2.$$ The sum of the first $n$ positive perfect squares is given by the formula$\frac{n(n+1)(2n+1)}{6}$, so the answer is $\frac{10(11)(22)}{6} = \boxed{385}.$ (The formula for the first $n$ squares is derived [here](https://testbook.com/maths/sum-of-squares-of-first-n-natural-numbers)) ~Ricky

**Authors Note:** this is a classic leetcode medium ("switching lights" or smth) Terry was solving this in like gr10 so i just thought of it, idea is pretty funny.

**Problem 5:** You come face to face with the demon. Since the demon is very big, you and your friends must perform a precise magic ritual called “Double Death” to defeat it. To cast the spell, all of you must work together, standing in distinct positions, and cast individual spells precisely. The spell can be modeled as a geometric diagram. Let $M$ be the demon, which stands in the middle of the circumcircle $(P_2P_3P_4)$, where your 3 friends stand. Also, $P_2P_3 = P_4P_3$ and $\angle P_2P_3P_4 = 90^{\circ}$. You must then stand at $P_1$, the point that is the center of a circle tangent to line $P_2P_4$ at $A$ and circle $(P_2P_3P_4)$ at $B$. By measuring the scale of the demon, it is known that the radius of circle $(P_2P_3P_4)$ is $10$ and $P_3A$ is $13$. You are tasked to cast a spell that goes from $A$ to $B$. The length $AB$ can be represented as $\frac{a}{b}$ in its lowest form. What is $a+b$?
![enter image description here](https://lh4.googleusercontent.com/EFC0CYxk-ZUDw9nT0q0CTvy1zNAxYtfFCRsqo_6WeK-ifwQcMXoY9Bi8JS5DS64zKvvOuESkP_o6kxL0dJ340DPKJdVQYAt3uKbEWgz-CW8pd3-JBD-kt4cqShRcjYu0oA=w490)
(Note 1: $(XYZ)$ denotes the unique circle passing through $X$, $Y$, and $Z$)
(Note 2: The diagram may not be drawn to scale)


**Solution 1 (Similar Triangles):**
Claim 1: $P_3, A, B$ are colinear (the three points lie on a line)

Proof: We dilate the small circle (the one with center $P_1$) onto the large circle from the perspective of $B$. Then since $A$ is the "bottom" of the small circle and $P_3$ is the "bottom" of the large circle, $A$ will get mapped to $P_3$ under this dilation. Thus $B, A$ and $P_3$ must lie on a line. (Note: this concept of dilation is also known as a *homothety*. To read more on homothety, see [here](https://artofproblemsolving.com/wiki/index.php/Homothety))

Claim 2: $\triangle BP_3P_4 \sim \triangle P_4P_3A$ ($\triangle BP_3P_4$ is similar to $\triangle P_4P_3A$)

 The two triangles share the angle at $P_3$. Furthermore, arc $P_2P_3$ is equal in length to arc $P_3P_4$, so $$\angle AP_4P_3 = \angle P_2P_4P_3 = \angle P_3BP_4$$ which proves the claim. 

  

Since $P_2P_3 = P_3P_4$, we know $\triangle P_2P_3P_4$ is a $45-45-90$ triangle and $P_3P_4 = \frac{P_2P_4}{\sqrt{2}} = \frac{20}{\sqrt{2}}$. We are also given $P_3A = 13$. Then by Claim 2, we have $\frac{BP_3}{P_3P_4} = \frac{P_4P_3}{P_3A}$ so $$\frac{AB + P_3A}{P_3P_4} = \frac{P_3P_4}{P_3A}.$$ Solving for $AB$ we get $AB = \frac{31}{13}$ so the answer is $31 + 13 = \boxed{44}$. ~Ricky 

  

**Solution 2 (Trig + Power of a Point):** As with solution 1, we first show that $B, A$ and $P_3$ are colinear and $P_3P_4 = \frac{P_2P_4}{\sqrt{2}} = \frac{20}{\sqrt{2}}$. By cosine law, 
$$
AP_3^2 = AP_2^2 + P_2P_3^2 - 2(AP_2)(P_2P_3)\cos(45^{\circ})
$$
Substituting in $AP_3 = 13,$ we get a quadratic in terms of $AP_2$ which solving with the quadratic formula gives 
$$
AP_2 = 10 \pm \sqrt{69}.
$$
By Power of a Point, 
$$
AB \cdot AP_3 = AP_2 \cdot AP_4
$$
so 
$$
AB = \frac{AP_2 \cdot AP_4}{AP_3} = \frac{(10 \pm \sqrt{69})(10 \mp \sqrt{69})}{13} = \frac{31}{13}.
$$
The answer is $31 + 13 = \boxed{44}$. ~Ricky

**Author's Note:** It is true for any such configuration where $P_3$ is the midpoint of the arc, that by similar triangles, $P_3A \cdot AB = (P_2P_3)^2$ (why?). So if I gave length $AB$ instead of $P_3A$ solution 2 would be hard to implement. Also, the magic ritual is called "Double Death" because the answer is 44, which is literally double death in Chinese. That's why it's so powerful :)

**LA Class stuf:** 4 = death is a prevalent symbol throughout the story. $2+2 = 4, 3+8+5 = 16 = 4^2, 44, 4$ demon hunters, death of demon, it was all a dream (its giving to be or not to be, famous monologue ts), also p4 was the only problem that had 1 solution (i cant think of anything else), etc. Idk where im going with this tbh. If anyone wanna make up lore uh do it lol. 