
### 2.1 Orientations of Similar Triangles
There are two types of similarities: **similarly oriented** or **oppositely oriented**.
Similar oriented is when the triangle is similar and faces the same direction, so
$$
\measuredangle ABC = \measuredangle XYZ, \measuredangle BCA = \measuredangle YZX, \measuredangle CAB = \measuredangle ZXY.
$$
Oppositely oriented is when the triangle is when triangle is similar but faces opposite direction, so 
$$
\measuredangle ABC = -\measuredangle XYZ, \measuredangle BCA = -\measuredangle YZX, \measuredangle CAB = -\measuredangle ZXY.
$$
If either two conditions satisfy for either cases, the triangle is similar.
**Proposition 2.1 (Similar Triangles): The following are equivalent (if one is true, all is true)**
- $\triangle ABC \sim \triangle XYZ$
- $\angle A = \angle X$ and $\angle B = \angle Y$ (AA similarity) 
- $\angle B = \angle Y$ and $AB : XY = BC : YZ$ (SAS similarity)
- $AB : XY = BC:YZ = CA:ZX$ (SSS similarity)


Motivation: We want to use directed AA as shown above to prove similarity, then use similar triangles to find ratios. Also, you cannot use directed angles for SAS, shown below.

**Problem 2.2: Find an example of two triangles ABC and XYZ such that $AB : XY = BC : YZ, \measuredangle ABC = \measuredangle XYZ$ but $\triangle ABC$ and $\triangle XYZ$ are not similar.**
Idea is we may have two triangles who satisfies the condition, but aren't similar. We construct as such. Let $\triangle ACD$ be any acute triangle with longest side $AD$. Let $B$ be the midpoint of $AD$. Then, $\triangle ABC$ and $\triangle CBD$ satisfies the condition, since $BA:BD = BC : BC$ and $\measuredangle ABC = \measuredangle DBC$ since $\angle ABC = 180^{\circ} - \angle DBC$. However, it is clear these two triangles may not be similar.


### 2.2 Power of a Point
Let $A,B,X,Y$ lie on a circle with $AB$ and $XY$ intersecting at $P$. 
![[Pasted image 20241114190725.png]]
We have $\measuredangle PAY = \measuredangle BAY = \measuredangle BXY = \measuredangle BXP = - \measuredangle PXB$ and $\measuredangle AYP = \measuredangle AYX = \measuredangle ABC = \measuredangle PBX = -\measuredangle XBP$. Thus, $\triangle PAY$ is oppositely similar to $\triangle PXB$. Thus, $\frac{PA}{PY} = \frac{PX}{PB}$ or
$$
PA \cdot PB = PX \cdot PY.
$$
This means $PA \cdot PB$ does not depend on $AB$, but instead of the point $P$ itself. If $P$ is in the circle, we may say $PA \cdot PB = |OP - r||OP+r|$ since we imagine drawing line $AB$, then draw the other line passing through the center. Define **power of P** with respect to the circle $w$ as 
$$
Pow_w(P) = OP^2 - r^2.
$$
This value may be negative.

**Theorem 2.3 (Power of a Point): Consider a circle $w$ and any point $P$ (can be inside or outside of $w$). Then,**
- a) The value $Pow_w(P)$ is positive, zero, or negative if $P$ is outside, on, or inside $w$, respectively.
- b) If $l$ is a line through $P$ intersecting two distinct points $X$ and $Y$, then $PX \cdot PY = |Pow_w(P)|$. 
- c) If $P$ is outside $w$ and $PA$ is a tangent to $w$ at $A$, then $PA^2 = Pow_w(P)$.

**Problem 2.5: Prove this.**
a) It is obvious that when we draw line $OP$. If $P$ is outside, on, or inside $w$, then $OP>r, OP = r, OP < r$ respectively.

b) $Pow_w(P) = |(OP-r)|\cdot |(OP+r)|$. WLOG let $PX\ge PY$. In both cases where $P$ is either inside or outside the circle (if $P$ is on the circle, it's just 0 for both), it must be that $PX = OP+r$ and $PY = |OP-r|$. We prove by just doing casework and seeing the lengths matches. 

c) We have $PA \perp OA$. Thus, It is just the Pythagorean theorem where $OP = c^2, OA = a^2, PA = b^2, b^2 = c^a-a^2, PA^2 = OP^2 - r^2$.

We can also find cyclic quadrilaterals based on side lengths. We use the converse of the power of a point.

**Theorem 2.4 (Converse of the Power of a Point): Let $A,B,X,Y$ be four distinct points in the plane and let lines $AB$ and $XY$ intersect at $P$. Suppose that either $P$ lies in both of the segments $AB$ and $XY$, or in neither segments (point is outside circle, inside circle, ignoring the tangent edge case which will only have 3 points $A,X,Y$). If $PA \cdot PB = PX \cdot PY$, then $A,B,C,Y$ are concyclic.** 
This is converse power of a point, though the other condition is $P$ must lie in both or neither segments.
![[Pasted image 20241115003042.png]]
Let $Y'$ be an intersection point other than $X$ of line $PX$ and circumcircle $(ABX)$. We then have $A,B,X,Y$ is concyclic and thus $PA \cdot PB = PX \cdot PY'$. It is then sufficient to prove $Y = Y'$. Note that by given condition $PY = PY'$. Thus, $Y'$ can only either be $Y$ or the reflection point of $Y$ across point $P$, since it must lie on $PX$ as well. By proof of contradiction, assume $Y \neq Y'$, then $Y$ and $Y'$ are reflections across $P$. Since $A,B,X,Y'$ are concyclic, $P$ lies in both or neither of $AB$ and $XY'$. However, if $P$ does not lie on $AB$ and $XY'$ (shown in diagram), then $P$ will lie on $XY$ but not $AB$. If $P$ lies on both $AB$ and $XY$, $P$ is in the circle, so the reflected point $Y$ will have $P$ does not lie on $XY$ but lies on $AB$. Thus, if we switch to $Y$, line $XY$ will always make $P$ lie on exactly one of $AB$ or $XY$, which violates the condition in the theorem. Thus, $Y = Y'$ as it is the only other choice.

**Problem 2.6: Prove the Pythagorean theorem using Figure 2.2C.**

![[Pasted image 20241114205038.png]]
Let $D$ be the intersection of $AB$ and the circle. Let $E$ be the intersection of the extension of $AB$ upwards and the circle. Let $x = AD$. By Power of a Point theorem,
$$
\begin{align}
AC^2 &= AD \cdot AE \\
b^2 &= x \cdot (x + 2a) \\
&= x^2 + 2ax \\
b^2 + a^2 &= x^2+2ax+a^2 = (x+a)^2 = c^2.
\end{align}
$$
Thus, $a^2 + b^2 = c^2$.


### 2.3 The Radical Axis and Radical Center

Given two circles $w_1$ and $w_2$ with distinct centers, the **radical axis** of $w_1$ and $w_2$ is the set of points $P$ such that $Pow_{w_1}(P) = Pow_{w_2}(P)$.

**Example 2.7: Three circles intersect. Prove the common chords are concurrent (intersect at one point).**

![[Pasted image 20241114213040.png]]

From Theorem 2.8, the common chords of two circles is the radical axis. Let $l_{12}$ be the radical axis of $w_1$ and $w_2$, and let $l_{23}$ be the radical axis of $w_2$ and $w_3$. Let $P$ be the intersection of $l_{12}$ and $l_{23}$. Then, 
$$
\begin{align}
Pow_{w_1}(P) = Pow_{w_2}(P), \\
Pow_{w_2}(P) = Pow_{w_3}(P).
\end{align}
$$
Thus, this means that $Pow_{w_1}(P) = Pow_{w_3}(P)$ as well, meaning $P$ also lies on $l_{13}$. Thus, $P$ is the concurrent point.

If $O_1,O_2,O_3$ are collinear, this means the radical axes are parallel to each other. Otherwise, they concur at a single point $K$ called the **radical center** of three circles.

**Theorem 2.8 (Radical Axis): Let $w_1$ and $w_2$ be circles with distinct centers $O_1$ and $O_2$. The radical axis of $w_1$ and $w_2$ is a straight line perpendicular to $O_1O_2$. Then, if $w_1$ and $w_2$ intersect at two points $A$ and $B$, then the radical axis is line $AB$.**
![[Pasted image 20241114213330.png]]

Since $Pow_w(P)$ involves squaring terms, we are motivated to use analytic geometry. Let $O_1 = (a,0)$ and $O_2 = (b,0)$ and let the radius be $r_1$ and $r_2$ respectively. For point $P = (x,y)$, we have
$$
\begin{align}
Pow_{w_1}(P) &= O_1P^2 - r_1^2 = (x-a)^2 + y^2 - r_1^2, \\
Pow_{w_2}(P) &= O_2P^2 - r_2^2 = (x-b)^2 + y^2 - r_2^2.
\end{align}
$$
Equating the two, the radical axis of $w_1$ and $w_2$ is the set of points $P = (x,y)$ satisfying
$$
\begin{align}
0 & = Pow_{w_1}(P) - Pow_{w_2}(P) \\
&= \left((x-a)^2 + y^2 - r_1^2 \right) - \left((x-b)^2 + y^2 - r_2^2 \right) \\
&= (2b-2a)x + (a^2-b^2 + r_2^2 - r_1^2).
\end{align}
$$
This is in the form of $0 = ax+b, -\frac{b}{a} = x$, which is a vertical line perpendicular to the x-axis. Since $w_1$ and $w_2$ both lie on the x-axis, we've proven that the radical axis is perpendicular to $O_1O_2$. To prove when $w_1$ and $w_2$ intersect, the radical axis is $AB$, note that both $A$ and $B$ are points that satisfy $Pow_{w_1}(P) = Pow_{w_2}(P)$. This means they are both on the radical axis. Since we've proven the radical axis is a vertical line, it must pass through line $AB$. 

Thus, a point has equal power to both circles if and only if it lies on the radical axis.


**Theorem 2.9 (Radical Center): Let $w_1$ and $w_2$ be two circles with centers $O_1$ and $O_2$. If we select points $A$ and $B$ on $w_1$ and points $C$ and $D$ on $w_2$, then the following are equivalent:**
- a) $A,B,C,D$ lie on a circle with center $O_3$, that is not on line $O_!O_2$.
- b) Lines $AB$ and $CD$ intersect on radical axis of $w_1$ and $w_2$ at $P$.
Note: $(b) \rightarrow (a)$ is false in the degenerate case, where $AB = CD$ so the quadrilateral is just a line.
![[Pasted image 20241114234911.png]]

We prove each case separately. Assume (a) is true, then it must be that the radical axis $l_{31}$ and $l_{32}$ are $AB$ and $CD$. We have already proved that three radical axis are concurrent, so the intersection of $AB$ and $CD$ must also be concurrent with $l_{12}$. Now we prove the reverse. Assume (b) is true. $AB$ and $CD$ intersect at $P$, and $P$ lies on the radical axis. Since $P$ is inside both $w_1$ and $w_2$, $P$ lies between $A$ and $B$ as well as $C$ and $D$. Thus, $Pow_{w_1}(P) <0$ and $Pow_{w_2}(P)<0$. This means
$$
\begin{align}
Pow_{w_1}(P) &= Pow_{w_2}(P) \\
-(PA \cdot PB) &= -(PC \cdot PD) \\
PA \cdot PB &= PC \cdot PD.
\end{align}
$$
We check for direction for power of a point, since the configuration might produce negative (For ex: Example 2.21). Since $P$ lies in both $AB$ and $CD$ along with the above, by Theorem 2.4 we have $A,B,C,D$ are concyclic. Moreover, since $AB$ and $CD$ intersect, they are not parallel. This means that $O_1,O_2,O_2$ are not collinear, so $O_3$ is not on line $O_1O_2$.

**Proposition 2.10: In a triangle $ABC$, the circumcenter exists. That is, there must exist a point $O$ such that $OA = OB = OC$.**

The main idea is to construct three circles $w_A,w_B,w_C$ with radius $0$, centered at $A,B,C$ respectively. Since $A,B,C$ can't be collinear, we can find their radical center which we label as $O$. Thus,
$$
\begin{align}
Pow_{w_A} &= Pow_{w_B} = Pow_{w_C} \\
(OA^2-0^2) &= (OB^2-0^2) = (OC^2-0^2) \\
OA^2 &= OB^2 = OC^2 \\
OA &= OB = OC.
\end{align}
$$
Thus, the radical center of $w_A,w_B,w_C$ is the circumcenter of $\triangle ABC$. Also, the radical axis is just the perpendicular bisector of the sides, so we may just use the other proof. 

**Lemma 2.11: Let $ABC$ be a triangle and consider a point $P$ in its interior where $BC$ is tangent to the circumcircles of triangles $ABP$ and $ACP$. Prove that ray $AP$ bisects $BC$.**
Let $N$ be the intersect foot of $AP$ on $BC$. We want to prove $BN = NC$. Since $N$ is on $AP$, $N$ is on the radical axis of $(ABP)$ and $(ACP)$. Thus, $Pow_{(ABP)}(N) = Pow_{(ACP)}(N)$. Since $BN$ and $NC$ are tangent to $(ABP)$ and $(ACP)$ respectively, we have $Pow_{(ABP)}(N) = BN^2$ and $Pow_{(ACP)}(N) = NC^2$. Thus, $BN = NC$. 

![[Pasted image 20241115020429.png]]

**Problem 2.12: Show that the orthocenter of a triangle exists using radical axes. That is, if $AD,BE,CF$ are altitudes of a triangle $ABC$, show that the altitudes are concurrent.**

We construct circles $w_1,w_2,w_3$ with diameters $AB,AC,BC$ respectively. Note by $90^{\circ}$ of altitudes, $w_1$ and $w_2$ intersect at $A$ and $D$, $w_1$ and $w_3$ intersect at $B$ and $E$, $w_2$ and $w_3$ intersect at $C$ and $F$. Thus, the radical axes are $AD,BE,CF$ which are also the altitudes. By Example 2.7, they must concur.


### 2.4 Coaxial Circles

If a set of circles have the same radical axes, they are **coaxial**. A subset of these circles are called a **pencil** of coaxial circles. If circles are coaxial, their centers must be collinear (though inverse is not true).
![[Pasted image 20241115174531.png]]
**Lemma 2.13 (Finding Coaxial Circles): Let three distinct circles $w_1,w_2,w_3$ pass through a point $X$. Then, their centers are collinear if and only if they share a second common point.**
Both conditions are inferred from being coaxial. 
### 2.5 Revisiting Tangents: The Incenter

We consider an angle bisector. For any point $P$ on the angle bisector, the distance from $P$ to the sides are equal. This is because we can draw a circle centered at $P$ tangent to both sides. Conversely, two tangents to any circle always have equal length, and the center lies on the angle bisector. 
![[Pasted image 20241115192905.png]]

**Proposition 2.14: In any triangle $ABC$, the angle bisectors concur at point $I$, which is the center of a circle inscribed in the triangle (incircle).**
Let angle bisector of $\angle B$ and $\angle C$ intersect at $I$. We prove $I$ is the incenter. Let $D,E,F$ be on $BC, AC,AB$ respectively such that $ID,IE,IF$ are perpendicular to $BC,AC,AB$ respectively. This way, a circle centered at $I$ will be internally tangent to the circle at $D,E,F$ if the radius is the same. Since $I$ is on the angle bisector of $\angle B$ and $\angle C$, $ID = IF$ and $ID = IE$. Thus, the radius is $ID = IE = IF$, which is the same meaning $I$ must be the center of the incircle. Moreover, $IE = IF$ suggests that $I$ is also on the angle bisector of $\angle A$.

![[Pasted image 20241115193119.png]]

Triangle $DEF$ is the **contact triangle** of triangle $ABC$. Moreover, lengths of bisectors are equal as shown (denoted by $x,y,z$), giving us
$$
\begin{align}
a &= y+z \\
b &= x+z \\
c &= x+y \\
s &= x+y+z = \frac{1}{2}(a+b+c).
\end{align}
$$

**Lemma 2.15 (Tangents to the Incircle): If $DEF$ is the contact triangle of $\triangle ABC$, then $AE = AF = s-a$, $BF = BD = s-b$, and $CD = CE = s-x$.** 
**Problem 2.16: Prove this.**
We have $AE = AF = x = \frac{1}{2}(a+b+c - (2y+2z)) = s - (y+z) = s-a$. The other two cases are proven in a similar fashion.

### 2.6 The Excircles

The **A-excircle** of triangle $ABC$ is the circle tangent to $BC$ as well as the extension of $AB$ past $B$ and the extension of $AC$ past $C$. The **A-excenter** denoted by $I_A$, is the center of the A-excircle. Similarly, the centers of the B-excircle and C-excircles are called the B-excenter and C-excenter respectively.  
![[Pasted image 20241115201925.png]]

**Lemma 2.17 (Tangents to the Excircle): If $AB_1$ and $AC_1$ are the tangents to the A-excircle, then $AB_1 = AC_1 = s$.**
Let $X$ be the tangency point of A-excircle on $BC$ and let $B_1$ and $C_!$ be the tangency points to the extension of ray $AB$ and $AC$ respectively. Thus, $AB_1 = AC_1$, and
$$
\begin{align}
AB_1 + AC_1 &= (AB + BB_1) + (AC+CC_1) \\
&= (AB+BX) + (AC+CX) \\
&= AB + AC + BC \\
&= 2s \\
AB_1 = AC_1 &= s
\end{align}
$$


Moreover, the triangles $AIF$ and $AI_AB_1$ are directly similar by AA since $\angle AFI = \angle AB_1I_A = 90^{\circ}$ and $\angle FAI = \angle B_1AI_A$ (we prove this is true in Problem 2.18). Thus, we can relate the **A-exradius** (the radius of the excircle), to the other lengths in the triangle (Lemma 2.19). The A-exradius is usually denote as $r_a$.

**Problem 2.18:  In a triangle $ABC$, let the external angle bisectors of $B$ and $C$ intersect at $I_A$. Show that $I_A$ is the center of a circle tangent to $BC$ as well as the extension of $AB$ through $B$ and the extension of $AC$ through $C$. Furthermore, show that $I_A$ lies on ray $AI$.**
Proving the A-excircle exists is similar to the incenter proof, except the angle bisectors from $\angle B$ and $\angle C$ are replaced with it's external angle bisectors. Let $B_1,X,C_1$ be on the extension of $AB$, $BC$, and the extension of $AC$ respectively such that $I_AB_1, I_AX, I_AC_1$ are perpendicular to its respective sides (similar to incircle proof). Since $\angle CBB_1$ is the angle bisectors of the exterior angle of $\angle B$, we have $\angle I_AB_1B = \angle I_AXB = 90^{\circ},\angle B_1BI_A = \angle XBI_A, \textnormal{ and } BB_1 = BX$. Thus, $\triangle BB_1A \cong \triangle BXI_A$ which means $I_AB_1 = I_AX$. Similarly, since $\angle BCC_1$ is the angle bisector of the exterior angle of $\angle C$, we can prove in a similar fashion that $I_AX = I_AC_1$. Thus, the radius of the A-excircle with center $I_A$ is $I_AB_1 = I_AX = I_AC_1$ which is tangent to the extension of $AB$, $BC$, and the extension of $AC$ at $B_1,X,C_1$ respectively. To prove $I_A$ lies on ray $AI$, note that $B_1$ and $C_1$ are the extension of $AB$ and $AC$ respectively so $\angle B_1AC_1 = \angle BAC$. Since $I_AB_1 = I_AC_1$, $I_A$ is on the angle bisector of $B_1AC_1$. Since $AI$ also lies on the angle bisector of $\angle BAC = \angle B_1AC_1$, $A,I,I_A$ are collinear.

**Lemma 2.19 (Length of Exradius): Prove that the A-exradius has length**
$$
r_a = \frac{s}{s-a}r.
$$
By Lemma 2.20, $BX = CD = z$. Thus, $AB_1 = AB+BB_1 = AB + BX = x+y+z = s$. Moreover, $AF = x = s-a$. Since triangles $AIF$ and $AI_AB_1$ are directly similar by AA (proven above), we have $\frac{r_a}{r} = \frac{AB_1}{AF} = \frac{s}{s-a}, r_a = \frac{s}{s-a}r$.

**Lemma 2.20: Let $ABC$ be a triangle. Suppose its incircle and A-excircle are tangent to $BC$ at $D$ and $X$ respectively (shown in Figure 2.6A). Prove $BX = CD$ and $BD = CX$.**

From Lemma 2.17 $AB_1 = s$. We have $BX = BB_1 = AB_1-AB = s-c = s-(x+y) = z = CD$. We can then easily prove $BD = BX-DX = DC-DX = CX$ since $BX = DC, DX = DX$.

### 2.7 Example Problems

**Example 2.21 (USAMO 2009/1):**

**Lemma 2.22 (Euler's Theorem):**

**Example 2.23 (Russian Olympiad 2010):**



