
### 5.1 Cartesian Coordinates

**Theorem 5.1 (Shoelace Formula): Consider three points $A = (x_1,y_1), B = (x_2,y_2), C = (x_3,y_3)$. The signed area of triangle ABC is given by the determinant**
$$
\begin{bmatrix}  
x_1 & y_1 & 1 \\  
x_2 & y_2 & 1 \\ 
x_3 & y_3 & 1 \\ 
\end{bmatrix}.
$$
The general form is 
$$
A = \frac{1}{2}|(x_1y_2+x_2y_3+\cdots+x_ny_1) - (y_1x_2+y_2x_3+\cdots+y_nx_1).
$$
Signed area means the area is considered positive if $A,B,C$ appear in a counterclockwise order, and negative otherwise.
![[Pasted image 20241014015322.png]]

Three points are collinear if and only if the area of the triangle is **zero**, so shoelace formula can be used to **establish collinearity**. For it to be e can just verify
$$
\frac{y_3-y_1}{x_3-x_1}=\frac{y_2-y_1}{x_2-x_1}.
$$

**Proposition 5.2 (Point-Line Distance Formula): Let $l$ be the line determined by the equation $Ax+By+C=0$. The distance from point $P=(x_1,y_1)$ to $l$ is**
$$
\frac{|Ax_1+By_1+C|}{\sqrt{A^2+B^2}}.
$$

Problems where using coordinates are effective will have these characteristics:
- The problem features a prominent right angle, which can be the origin.
- The problem involves intersections or perpendiculars.

### 5.2 Areas

**Theorem 5.3 (Area Formulas): The area of a triangle $ABC$ is equal to each of the following:**
- $\frac{1}{2}ab\sin{C} = \frac{1}{2}bc\sin{A} = \frac{1}{2}ca\sin{B}$
- $\frac{a^2\sin{B}\sin{C}}{2\sin{A}}$
- $\frac{abc}{4R}$
- $sr$
- Heron's formula: $\sqrt{s(s-a)(s-b)(s-c)}$
where $s=\frac{1}{2}(a+b+c)$ is the semiperimeter of the triangle $R$ is the circumradius, and $r$ is the inradius of $\triangle ABC$.  

**Proofs:**
Let $[ABC]$ be the area. We first prove $[ABC] = \frac{1}{2}ab\sin{C}$. Let $X$ be the foot of the altitude of $A$ onto $BC$. We thus have $[ABC] = \frac{1}{2}a\cdot AX$. Moreover, we know $AX = b\sin{C}$, hence $[ABC]=\frac{1}{2}a\cdot b\sin{C}$.
![[Pasted image 20241014031352.png]]
We then have $b = \frac{a\sin{B}}{\sin{A}}$ and $\frac{c}{\sin{C}} = 2R, \sin{C} = \frac{c}{2R}$ by [[Law of Sines]], so
$$
\frac{1}{2}ab\sin{C} = \frac{1}{2}\left(\frac{a\sin{B}}{
\sin{A}}\right)\sin{C} = \frac{a^2\sin{B}\sin{C}}{2\sin{A}}
$$
and
$$
\frac{1}{2}ab\sin{C} = \frac{1}{2}ab\left(\frac{c}{2R}\right) = \frac{abc}{4R}.
$$
We prove $[ABC] = sr$ in **Problem 5.5**.
We now prove Heron's formula. We use the trigonometric fact: If $x,y,z$ satisfy $x+y+z=180^{\circ}$ and $0^{\circ}<x,y,z<90^{\circ}$, then $\tan{x}+\tan{y}+\tan{z}=\tan{x}\tan{y}\tan{z}$, which is proven in **Proposition 6.39**. Let $DEF$ be the contact triangle of $\triangle ABC$.
![[Pasted image 20241014032631.png]]
We then have from **Lemma 2.15**
$$
\tan \left(90^{\circ}-\frac{1}{2}A\right) = \tan(\angle AIE) = \frac{s-a}{r}.
$$
Similarly, $\tan \left(90^{\circ}-\frac{1}{2}B\right) = \frac{s-b}{r}$ and $\tan \left(90^{\circ}-\frac{1}{2}C\right) = \frac{s-c}{r}$.
Then by 6.39, we substitute each $\tan$ to get
$$
\begin{align}
\frac{s-a}{r}\cdot\frac{s-b}{r}\cdot\frac{s-c}{r}&=\frac{s-a}{r}+\frac{s-b}{r}+\frac{s-c}{r} \\
&= \frac{3s-(a+b+c)}{r} \\
&= \frac{s}{r}.
\end{align}
$$
Thus, $(s-a)(s-b)(s-c) = sr^2$, so $s(s-a)(s-b)(s-c) = s^2r^2 = (sr)^2 = [ABC]^2$.

**Example 5.4: Find circumradius $R$ and inradius $r$ of a triangle $ABC$ with side lengths $AB=13,BC=14,CA=15$.**
Using Heron's formula, we can get the area and solve for the other two using area formulas.
We have $s=21, [ABC] = \sqrt{21(8)(7)(6)} = 84$. We then have $[ABC] = \frac{abc}{4R}, R = \frac{abc}{4[ABC]} = \frac{13\cdot 14\cdot15}{4\cdot 84} = \frac{65}{8}$ and $[ABC] = rs, r = \frac{[ABC]}{s} = \frac{84}{21} = 4$.

**Problem 5.5: Show that $[ABC]=rs$.**
We it's just adding the areas of the three triangles where we can calculate their areas easily as the perpendicular leg is just the radius for all of them We have 
$$
\begin{align}
[ABC] &= [AIC]+[BIC]+[AIB] \\
&= \frac{1}{2}(AC\cdot IE+BC\cdot ID+AB\cdot IF) \\
&= \frac{1}{2}((AC+BC+AB)\cdot r) \\
&= \frac{AC+BC+AB}{2} \cdot r \\
&= sr.
\end{align}
$$

**Problem 5.6: In context of Problem 4.4, find the length of the altitude from $A$ onto $BC$.**
By using area formula, we have $[ABC]=84=\frac{1}{2}BC\cdot AX = \frac{1}{2}\cdot 14 \cdot AX, AX = \frac{84}{7} = 12.$

### 5.3 Trigonometry
In **Theorem 3.1**, we saw [[Law of Sines]]
$$
\frac{a}{\sin{A}} = \frac{b}{\sin{B}} = \frac{c}{\sin{C}} = 2R. 
$$
**Theorem 5.7 ([[Law of Cosines]]): Given triangle $ABC$,**
$$
a^2=b^2+c^2-2bc\cos{A}, \cos{A} = \frac{b^2+c^2-a^2}{2bc}.
$$
The **degrees of freedom** of a problem is defined as a statement that has some parameters that can be selected, after which the rest of the diagram must then be uniquely determined. 

**Problem 1.43 Revisited:** Point $A,B,C,D,E$ lie on circle $w$ and point $P$ lies outside of the circle. We then have (i) lines $PB$ and $PD$ are tangent to $w$, (ii) $P,A,C$ are collinear, and (iii) $DE \parallel AC$. We must then prove $BE$ bisects $AC$.

This problem has 3 degrees of freedom. 1) We draw a circle centered at $O$ and choose a radius, 2) we determine the length of $OP$. Now, we have $B,C$ fixed. Lastly, 3) we choose a point $A$. Then $C,E$ are fixed. 

In this degrees of freedom idea lies the essence of solving trigonometry problems: we start with many possible degrees, then assign variables for each angle and narrow our search by representing the remaining lengths and angles in terms of those variables.

**Basic Trigonometric Identities:**
- $1 = \sin^2{\theta} + \cos^2{\theta}$
- $\sin{(-\theta)} = -\sin{\theta}$
- $\cos{(-\theta)} = \cos{\theta}$ 
- $\sin(a+b) = \sin{a}\cos{b}+\sin{b}\cos{a}$
- $\cos{a+b} = \cos{a}\cos{b}-\sin{a}\sin{b}$.

**Proposition 5.8 (Product-Sum Identities): For some $a$ and $b$, we have**
- $2\cos{a}\cos{b} = \cos(a-b) + \cos(a+b)$
- $2\sin{a}\sin{b} = \cos(a-b)-\cos(a+b)$
- $2\sin{a}\cos{b} = \sin(a-b) + \sin(a+b)$
due to terms being cancelled when expanded out. 


### 5.4 Ptolemy's Theorem

**Theorem 5.9 (Ptolemy's Theorem): Let $ABCD$ be a [[Cyclic Quadrilateral]]. Then**
$$
AB \cdot CD + BC \cdot DA = AC \cdot BD.
$$
![[Pasted image 20241014130837.png]]
Actually, a general form of Plotemy's theorem states that given four arbitrary points $A,B,C,D$, we have 
$$
AB \cdot CD + BC \cdot DA \ge AC \cdot BD.
$$
The equality holds when $A,B,C,D$ lies in a circle or a line in that order.

**Proof of Equality on Circle:** WLOG let the diameter of $(ABCD)$ be $1$, and thus $R = \frac{1}{2}$. Then we can get $AB = \sin{\angle AXB}$ for **any** point $X$ on the circumcircle, since we can just assume that when $AX$ is the diameter, it must be that $AX = 1, \frac{AB}{AX} = \sin{\angle AXB} = AB$, and this will satisfy for any $X$ since the angle is the same.
Note that $\angle ADB, \angle BAC, \angle CBD, \angle DCA$ uniquely determines the cyclic quadrilateral, and that they add up to $180^{\circ}$. Thus, we choose those angles as variables to handle all conditions.
Let $a_1,a_2,a_3,a_4$ be the angles $\angle ADB, \angle BAC, \angle CBD, \angle DCA$. Then assume that $(ABCD)$ has diameter $1$ so
$$
AB = \sin{a_1}, BC = \sin{a_2}, CD = \sin{a_3}, DA = \sin{a_4}.
$$
Furthermore,
$$
AC = \sin{\angle ABC} = \sin(a_3+a_4), BD = \sin{\angle DAB} = \sin(a_2+a_3).
$$
Thus, we can just plug the values in for $\sin$ to get
$$
\sin{a_1}\sin{a_3} + \sin{a_2}\sin{a_4} = \sin(a_3+a_4)\sin(a_2+a_3).
$$
Separating each expression and using Proposition 5.8, we then have
$$
\begin{align}
\sin{a_1}\sin{a_3} &= \frac{1}{2}(\cos(a_1-a_3)-\cos(a_1+a_3)) \\ \sin{a_2}\sin{a_4} &= \frac{1}{2}(\cos(a_2-a_4)-\cos(a_2+a_4)) \\ 
\sin(a_2+a_3)\sin(a_3+a_4) &= \frac{1}{2}(\cos(a_2-a_4)-\cos(a_2+a_3+a_3+a_4)) .
\end{align}
$$
Since $\cos(x) = -\cos(180^{\circ}-x)$, $\cos(a_1+a_3) = -\cos(a_2+a_4), \cos(a_1+a_3) + \cos(a_2+a_4) = 0$ since $a_1+a_2+a_3+a_4 = 180^{\circ}$. Also,
$$
\cos(a_2+a_3+a_3+a_4)) = cos(180^{\circ}-a_1+a_3) = -\cos(a_1-a_3).
$$
Putting it all together, we want to prove
$$
\begin{align}
\frac{1}{2}(\cos(a_1-a_3)-\cos(a_1+a_3)+\cos(a_2-a_4) - \cos(a_2+a_4)) &= \frac{1}{2}(\cos(a_2-a_4)-\cos(a_2+a_3+a_3+a_4)) \\
\cos(a_1-a_3)-\cos(a_1+a_3)+\cos(a_2-a_4) - \cos(a_2+a_4) &= \cos(a_2-a_4)-\cos(a_2+a_3+a_3+a_4) \\
\cos(a_1-a_3)-\cos(a_1+a_3)+\cos(a_2-a_4) + \cos(a_1+a_3) &= \cos(a_2-a_4) + \cos(a_1-a_3) \\
\cos(a_1-a_3)+\cos(a_2-a_4) &= \cos(a_2-a_4) + \cos(a_1-a_3).
\end{align}
$$

Thus, this is proven true by Trigonometry. 

The power of Trigonometry in proofs is after we confirm the equation with geometry, it is just a matter of making the Trig equations equal, knowing that the equation will always work out. The only downside is sometimes the equations get too complicated.

**Theorem 5.10 (Strong Form of Ptolemy's Theorem): In cyclic quadrilateral $ABCD$ with $AB = a$, $BC = b$, $CD = c$, and $DA = d$, we have** 
$$
AC^2=\frac{(ac+bd)(ad+bc)}{ab+cd}, BD^2 = \frac{(ac+bd)(ab+cd)}{ad+bc}.
$$

By [[Law of Cosines]], $AC^2 = a^2 + b^2 - 2ab\cos{\angle ABC} = c^2 + d^2 - 2cd \cos{\angle ADC}$. Also since its cyclic, $\angle ABC = 180^{\circ} - \angle ADC,\cos{\angle ADC} = -\cos{\angle ABC}$. We can solve for $\cos{\angle ABC}$ to get
$$
\begin{align}
a^2+b^2-c^2-d^2&=2ab\cos{\angle ABC}+2cd\cos{\angle ABC} \\ \frac{a^2+b^2-c^2-d^2}{2(ab+cd)} &= \cos{\angle ABC}.
\end{align}
$$
Plugging this back in to solve for $AC^2$, we have
$$
\begin{align}
AC^2 &= a^2+b^2-2ab\cos{\angle ABC} \\
&= a^2+b^2-2ab\left(\frac{a^2+b^2-c^2-d^2}{2(ab+cd)}\right) \\
&= a^2+b^2-ab\left(\frac{a^2+b^2-c^2-d^2}{ab+cd}\right) \\
&= \frac{(a^2+b^2)(ab+cd)-ab(a^2+b^2-c^2-d^2)}{ab+cd} \\
& = \frac{(a^2+b^2)cd - (ab)(-c^2-d^2)}{ab+cd} \\
& = \frac{a^2cd+b^2cd + abc^2+abd^2)}{ab+cd} \\
& = \frac{(ac+bd)(ad+bc)}{ab+cd}. \\
\end{align}
$$
Similar process can be used for $BD^2$.

**Theorem 5.11 (Stewart's Theorem): Let $ABC$ be a triangle. Let $D$ be a point on $BC$ and let $m = DB, n = DC, d = AD$. Then** 
$$
a(d^2+mn)=b^2m+c^2n,man+dad=bmb+cnc.
$$
![[Pasted image 20241014164919.png]]

Let ray $AD$ meet $(ABC)$ at $P$. By similar triangles $\triangle BDP \sim \triangle ADC$ and $\triangle CDP \sim \triangle ADB$, we have $\frac{BP}{m}=\frac{b}{d}$ and $\frac{CP}{n} = \frac{c}{d}$. Moreover by [[Power of a Point]], $DP \cdot d = mn, DP = \frac{mn}{d}$. Then by Ptolemy's theorem,
$$
\begin{align}
BC \dot AP &= AC \cdot BP + AB \cdot CP \\
a \dot (d+\frac{mn}{d}) &= b \cdot \frac{mb}{d} + c \cdot \frac{cn}{d} \\
\end{align}
$$
which yields Stewart's theorem after multiplying $d$ to both sides.
This can also be proven using Law of Cosines.

**Problem 5.12: Complete the other proof for 5.10 involving Ptolemy's theorem on three cyclic quadrilaterals.** 

Let's arbitrarily construct three Cyclic Quadrilaterals with side lengths $a,b,c,d$, $a,c,b,d$ and $a,b,d,c$ in that order. Then, we can let the diagonal lengths be $x,y$, $y,z$, and $x,z$ respectively. They all have the same circumradius. We can thus let $AC = x$ and $BD = y$. From Ptolemy's theorem, we have
$$
\begin{align}
xy &= ac + bd \\ 
yz &= ab + cd \\ 
zx &= ad + bc.
\end{align}
$$
We can then just multiply and divide these equations to get
$$
\begin{align}
AC^2 &= x^2 = \frac{xy\cdot zx}{yz} = \frac{(ac+bd)(ad+bc)}{ab+cd} \\
BD^2 &= y^2 = \frac{xy \cdot yz}{zx} = \frac{(ac+bd)(ab+cd)}{ad+bc}.
\end{align}
$$
Here, the problem solving technique is making three random cyclic quadrilaterals and developing equations from that to yield the solution.


### 5.5 Example Problems

**Example 5.13: Let $ABC$ be acute triangle with circumcircle $O$ such that $AB = 4, AC = 5, BC = 6$. Let $D$ be foot of altitude from $A$ to $BC$ and $E$ be intersection of $AO$ and $BC$. Let $X$ be on $BC$ between $D$ and $E$ such that there exists point $Y$ on $AD$ satisfying $XY \parallel AO$ and $YO \perp AX$. Determine the length of $BX$.**
![[Pasted image 20241015145219.png]]


