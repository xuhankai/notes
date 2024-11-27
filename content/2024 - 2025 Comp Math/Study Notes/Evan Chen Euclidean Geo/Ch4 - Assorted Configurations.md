Starts from page 76

### 4.1 Simson Lines Revisited
The Simson line of $P$ with respect to $ABC$ is line $XYZ$.
Recall the Simson lines proof: Given some triangle $ABC$ and some point $P$. Let $X,Y,Z$ be the foot of the lines perpendicular from $P$ to sides $AB, BC,CA$. Then, $X,Y,Z$ is **collinear** if and only if $P$ is on the circumcircle of triangle $ABC$. 

**Proof:** We construct 3 [[Cyclic Quadrilateral]]s at $XAYP, PYZC, PABC$. Thus, it is sufficient to prove $\angle PYX + \angle PYZ = 180^{\circ}$. We have $\angle PYX = \angle PAX$ by cyclic quad $XAYP$. 
Then, $\angle PAB = 180^{\circ} - \angle PYX, PCB = 180^{\circ} - \angle PAB = \angle PYX$ by cyclic quad $PABC$.
Finally, $\angle PCB = \angle PCZ = 180^{\circ} - PYZ, PYZ = 180^{\circ} - \angle PYX$ by cyclic quad $PYZC$.
![[Drawing 2024-10-11 22.36.22.excalidraw]]
We now **rearrange variables, refer to diagram:** Let $H$ be the [[Orthocenter]] of $ABC$ and $(ABC)$ be the [[Circumcircle]] of $ABC$. 
Let line $PX$ meet $(ABC)$ at $K$ and $AH$ intersect Simson line at $L$. 
![[Pasted image 20241011230036.png]]

**Problem 4.1: Prove $AK$ is parallel to Simson line.**
We know that $PYXC$ is a [[Cyclic Quadrilateral]]. Thus, $\angle PXY = \angle PCX = \angle PCA = \angle PKA$.

We then have $XK || AL$ so $LAKX$ is a [[Parallelogram]].

**Problem 4.2: Let $K'$ be the reflection of $K$ over $BC$. Prove $AK'$ is the orthocenter of $PBC$.** 
Note that $K'$ is on line $PX$, which by definition is an altitude. We know the orthocenter is on this line. We also know that its reflected point over $BC$ is $K$, and $K$ is on $(PBC)$. There is only one such point $K'$ on $PX$ such that its reflection is dead on the circumcircle. By **Lemma 1.17**, this point is the orthocenter which means $K'$ is the orthocenter.

By **Lemma 3.17**, since $H$ is orthocenter of $ABC$ and $K'$ is the orthocenter of $PBC$, $AHK'P$ is a parallelogram.

**Problem 4.3: Prove $LHXP$ is a parallelogram**
Since $XK || AL, LD || KP$. Thus, $LH || XP$. Then, we only need to prove $LH = PX$. 
We have $LA = KX = XK'$ due to parallelogram $LAKX$ and $AH = PK'$ due to parallelogram $AHK'P$.
Thus, $LH = LA + AH = XK' + K'P = PX$.

**Lemma 4.4(Simson Line Bisection):** Let $ABC$ be triangle with orthocenter $H$ and $P$ on $(ABC)$. Prove that the Simson line $P$ bisects $PH$.

Since $LHXP$ is a parallelogram, it must mean that $LX$ bisects $PH$. Thus, $XYZ$ bisects $PH$.


### 4.2 Incircles and Excircles

Draw the [[Incenter]] and all three [[Excenter]]s of $ABC$.
![[Pasted image 20241012113521.png]]

**Problem 4.5:** Prove $\angle IAI_B = 90^{\circ}$. 
By definition, $\angle BAI = \angle IAC$ as $AI$ is the angle bisector and $\angle CAI_B = \angle I_BAA'$ where $A'$ is the extended point of line $BA$ upwards, as $I_BA$ is the angle bisector of $CAA'$..
Thus, let $a = \angle IAC$ and $b = \angle CAI_B$. Since $BAA' = 180^{\circ}$, $2a + 2b = 180^{\circ}, a+b = 90^{\circ} = \angle IAC + \angle CAI_B =\angle IA_B$.

We can apply a similar idea to all 6 such altitudes at $A,B,C$. 

$A, I, I_A$ are collinear from **2.6**. Thus, $I_AA \perp I_BI_C$.



**Lemma 4.6 (Duality of [[Orthocenter]]s and [[Excenter]]s):** If $I_A,I_B, I_C$ are Excenters of $\triangle ABC$, then $\triangle ABC$ is the [[Orthic Triangle]] of $\triangle I_AI_BI_C$. 

This is proven above, as the altitudes of $\triangle I_AI_BI_C$ are at $A,B,C$. Thus, the points of intersection of those altitudes must form the orthocenter. 
This is also true for the converse. Thus we make the statement: For any acute triangle $ABC$, $DEF$ is the orthic triangle of $\triangle ABC$ **if and only if** $A,B,C$ are the excenters of $\triangle DEF$.
[proof in more detail](https://artofproblemsolving.com/wiki/index.php/Orthic_triangle#Connection_with_incenters_and_excenters)


**Problem 4.7:** How are the Incenter-Excenter lemma (**1.18**), the nine-point circle( **3.11**) by its nine-point definition, and the duality of the orthocenter and excenters lemma (**4.6**) all related?

The circumcircle $(ABC)$ is the [[Nine-Point-Circle]] of $\triangle I_AI_BI_C$. 
A circle is a nine-point circle of $\triangle I_AI_BI_C$ if and only if it passes through the midpoint from altitude to orthocenter. We know the orthocenter is $I$, so we want to prove the midpoint of $II_A, II_B, II_C$ all lie on the circle.
By the Incenter-Excenter lemma [Proof](https://artofproblemsolving.com/wiki/index.php/Incenter/excenter_lemma), there exists a point $L$ on the circumcircle $(ABC)$ such that it's the center of circle through $I, B, I_A, C$. Thus, $IL = LI_A$ meaning $L$ is the midpoint and $(ABC)$ passes through it. A similar approach is used to prove the other two midpoints.


We now focus on one excenter $I_A$. Draw its excircle tangent to $BC$ at $X$. Draw $B'C'$ parallel to $BC$ with tangent point at $E$ with the incircle of $ABC$ with center $I$. Let $D$ be the point of tangency of $BC$ and incircle $I$. It is easy to see $\triangle AB'C' \sim \triangle ABC$. 
Moreover, the incircle of $ABC$ at $I$ is the A-excircle of $\triangle AB'C'$.
![[Pasted image 20241012132152.png]]


**Problem 4.8:** Prove a) $A,E,X$ are collinear, b) $DE$ is diameter of incircle, and c) $BD = CX$.
a) Something to with homothety(similarity) where it is preserved during mapping of $\triangle AB'C'$ to $\triangle ABC$. We have $B'C'$ mapped to $BC$ and $I$ mapped to $I_A$. Thus, the point of tangency $E$ is mapped to $X$ along $A$. 

b) Since $D$ and $E$ are both is tangent to incircle $I$, we have $IE \perp B'C'$ and $ID \perp BC$. Since $B'C' \parallel BC$, $IE \parallel ID$. Since they share a common point $I$, they are colinear. Moreover, since $I$ is the center of the circle, any line from one side of the circle to the other side that passes through the center must be the diameter, so $DE$ is the diameter. 

c) **Lemma 2.20** 


**Lemma 4.9 (Diameter of the Incircle):** Let $\triangle ABC$ have incircle $I$ tangent to $BC$ at $D$. Let $E$ be a point on the incircle( Note line $B'C'$ is added for better understanding) such that $DE$ is the diameter, and ray $AE$ meets $BC$ at $X$.  Then, $BD = CX$ and $X$ is tangency point of the larger A-excircle to $BC$.

$A,E,X$ is collinear so by homothety centered at $A$, $X$ must be the tangency point. Then by definition of **Lemma 2.20** it must be that $BD = CX$ in the diagram.


**Lemma 4.10( Diameter of the Excircle):**  Let $XY$ be the diameter of the A-excircle. Show that $D$ lies on $AY$. 
This is similar to Problem 4.8, where based on homothety where it preserves circle properties, we can map $ED$ to $XY$ since both of them are the diameter of the excircle. Thus, $A,D,Y$ are collinear by homothety.

**Problem 4.11:** If $M$ is midpoint of $BC$, prove $AE \parallel IM$.
Note $\triangle EDX$ is a right triangle at $\angle D$. The midpoint of $BC$ is the midpoint of $DX$ since $BD = XC$. Moreover, $I$ is the midpoint of $ED$ since $ED$ is the diameter of the incircle centered at $I$. Thus, $\triangle EDX \sim \triangle IDM$ by scale factor of 2, which means $EX \parallel IM$. Since $A,E,X$ are collinear, $AE \parallel IM$.



### 4.3 Midpoints of Altitudes

We draw altitude $AK$ with midpoint $M$, and extend $AD$ to $Y$, the other tangency point of the large A-excircle.
![[Pasted image 20241012162056.png]]

**Problem 4.12:** Prove $X,I,M$ are collinear.
Note $AK \parallel ED$ since they are both perpendicular to $BC$, so they are both right as well. Thus, $\triangle EDX \sim \triangle AKX$ by AA. Since $M$ is midpoint of $AK$ and $I$ is midpoint of $ED$, $M$ maps to $I$ since the triangles are similar, meaning $M,I,X$ is collinear.

**Problem 4.13:** Prove $D,I_A,M$ are collinear.
Since $AK \parallel XY$ and $AY$ and $KX$ intersect at $D$, $\triangle YXD \sim \triangle AKD$. Thus by homothety, the midpoints of these similar triangles $M$ and $I_A$ can be mapped to each other and must also produce similar triangle, so $\angle XDI_A = \angle KDM$. 

**Lemma 4.14 (Midpoint of Altitudes Intersection):** Let $ABC$ be triangle with incenter $I$ and A-excenter $I_A$. Let $D$ and $X$ be the tangency points on $BC$ with circles $I$ and $I_A$. Then, lines $DI_A$ and $XI$ intersect at midpoint $M$ of altitude $AK$.

From 4.12 and 4.13, $M,I,X$ and $M,D,I_A$ must both be collinear. Thus, $IX$ and $DI_A$ must intersect at $M$.

### 4.4 Even More Incircle and Incenter Configurations

Let $DEF$ be the contact triangle( $D,E,F$ are the points of tangency of the incircle) of $\triangle ABC$. Let point $X$ be on $EF$ such that $XD$ is the altitude( $XD \perp BC$).
![[Pasted image 20241012172107.png]]

**Claim:** ray $AX$ bisects $BC$ at $M$.
Instead of doing this directly, we can prove this by considering homothety: if we can instead prove that $X$ is the midpoint of $B'C'$ which is parallel to $BC$, then the claim is proven.

**Problem 4.15:** Prove $I$ must lie on circumcircle $(AB'C')$.
Note we can let $I = P$ in the **Simson Lines** proof. Then, note that $IF, IE, IX$ are the lines perpendicular to all three sides of $AB'C'$. Thus by Simson Lines( if and only if) it must be that $I$ is on the circumcircle.

**Problem 4.16:** Prove $XB' = XC'$. 
Remember since $I$ is the incenter, $AI$ is the angle bisector of $\angle B'AC'$ so $\angle B'AI = \angle IAC'$. This means that $\widehat{B'I} = \widehat{IC'}$. Thus, $\angle IB'C' = \angle IC'B'$ and $\triangle IXB' \cong \triangle IXC'$ by ASA, so it must be that $XB' = XC'$. 

Thus we've proved $BM = MC$. 

**Lemma 4.17 (Incircle Concurrency):** Let $ABC$ be triangle with incenter $I$ and contact triangle $DEF$. If $M$ is midpoint of $BC$, then $EF, AM,$ and ray $DI$ concur at some point $X$.

We can just do reconstruction. Let $X$ be a point on $EF$ such that $XD \perp BC$. By definition, this $X$ is on both $EF$ and $XD$. We then proved that $XB' = XC'$, so by homothety $X$ can be mapped to $M$ and thus $A,X,M$ is collinear, so $X$ must be on $AM$ as well.


### 4.5 Isogonal and Isotomic Conjugates
#todo  directed angles shenanigans
**Lemma 4.18 (Isogonal Conjugates):** Let $ABC$ be triangle and $P$ be any point not collinear with any side of $ABC$. Then, there exists a unique point $P^*$ that satisfies:
$$
\angle BAP = \angle P^*AC, \angle CBP = \angle P^*BA, \angle ACP = \angle P^*CB.
$$
![[Pasted image 20241012180656.png]]
Here, we say $P^*$ is a **isogonal conjugate** of point $P$ and $AP^*$ is **isogonal** to line $AP$ with respect to $\triangle ABC$. 
Moreover, two line are isogonal if they are **reflections over the angle bisector** of $\angle A$, so $\angle BAP^* = \angle PAC$ as well. 

**Problem 4.19:** If two of the angle relations in Lemma 4.18 hold, then so does the third.


The **Isotomic conjugate** of $P$ is defined similarly. Let $X,Y,Z$ be the feet of cevians through $P$ for some triangle $ABC$. Let $X'$ be the reflection of $X$ about midpoint of $BC$. Similar definition is applied to $Y',Z'$, the reflection over the midpoint of the original foot. Then, cevians $AX', BY', CZ'$ concur at a point $P^t$, which is defined as the isotomic conjugate of point $P$.

**Problem 4.20:** Prove that lines $AX', BY', CZ'$ concur at some point.

Note that 
$$
BX = CX', XC = BX', \frac{BX}{XC} = \frac{CX'}{BX'} = \frac{1}{\frac{BX'}{X'C}}. 
$$
The same can be applied to $Y'$ and $Z'$. We thus have
$$
\frac{BX\cdot CY \cdot AZ}{XC \cdot YA \cdot ZB} = 1 = \frac{1}{\frac{BX' \cdot CY' \cdot AZ'}{X'C \cdot Y'A \cdot Z'B}}.
$$
by [[Ceva's Theorem]]. Thus, 
$$
\frac{BX' \cdot CY' \cdot AZ'}{X'C \cdot Y'A \cdot Z'B} = 1
$$
and by the if and only if of Ceva's, it must mean $AX', BY', CZ'$ are also concur at some point.

**Problem 4.21:** If $Q$ is isogonal conjugate of $P$, then $P$ is isogonal conjugate of $Q$.

Trivial because isogonal conjugate just means the point reflect across the angle bisector. Thus, its trivial that a point reflected over a line twice would be that same point.

**Theorem 4.22 (Isogonal Ratios):**  Let $D$ and $E$ be points on $BC$ so that $AD$ and $AE$ are isogonal. Then prove
$$
\frac{BD}{DC} \cdot \frac{BE}{EC} = \left(\frac{AB}{AC}\right)^2.
$$

Note that $\sin(x)=\sin(180^{\circ}-x)$. We can apply sin law to get
$$
\frac{BD}{\sin(\angle BAD)} = \frac{AB}{\sin(\angle ADB)}, \frac{DC}{\sin(\angle DAC)} = \frac{AC}{\sin(\angle ADC)}.
$$
We then move the sin to the top and get the values for $BD$ and $DC$. Thus,
$$
\frac{BD}{DC} = \frac{\frac{AB\cdot \sin(\angle BAD)}{\sin(\angle ADB)}}{\frac{AC \cdot sin(\angle DAC)}{\sin(\angle ADC)}} = \frac{AB\cdot \sin(\angle BAD)}{AC \cdot sin(\angle DAC)}.
$$
since $\angle ADB = 180^{\circ} - \angle ADC, \sin(\angle ADB) = \sin(\angle ADC)$, so we can eliminate that from top and bottom. By a similar idea, we can also get
$$
\frac{BE}{EC} = \frac{AB \cdot \sin(\angle{BAE})}{AC\cdot \sin(\angle{EAC})}.
$$
Since $\angle BAD = \angle EAC, \angle BAE = \angle DAC$. Thus, we can write
$$
\frac{BD}{DC}\cdot \frac{BE}{EC} = \frac{AB\cdot \sin(\angle BAD)}{AC \cdot sin(\angle DAC)} \cdot \frac{AB \cdot \sin(\angle{DAC})}{AC\cdot \sin(\angle{BAD})} = \left(\frac{AB}{AC}\right)^2 \cdot 1^2.
$$

**Problem 4.23:** What is the isogonal conjugate of the triangle's circumcenter?

Let circumcenter be $O$ and $H$ be the desired point. We want it to WOG satisfy $\angle OAC = \angle HAB$. We have $2\angle ABC = \angle AOC$ and  $2\angle OAC = 180^{\circ} - \angle AOC.$ Thus, 
$$
2\angle OAC = 180^{\circ} - (2\angle ABC), \angle OAC = 90^{\circ} - \angle ABC.
$$
Coincidentally, another point where $\angle HAB = 90^{\circ} - \angle ABC$ is when $H$ is the [[Orthocenter]]. The same logic can be applied to all other angles.



### 4.6 Symmedians

The isogonal of a **median** in a triangle is called the **symmedian**. The concurrency point of the three medians is the isogonal conjugate of the **centroid**, called the **symmedian point**.

**Lemma 4.24 (Constructing the Symmedian):**  Let $X$ be intersection of the lines tangent to $(ABC)$ at $B$ and $C$. Prove that $AX$ is a symmedian.

Instead, let's prove: given this $X$ by the definition, it's isogonal conjugate  This is proven below in 4.25.

**Problem 4.25:** Show that 
$$
\frac{CM}{MB} = \frac{\sin(\angle B) \sin(\angle BAX)}{\sin(\angle C)\sin(\angle CAX)} = 1.
$$
[btw different from book due to error](https://web.evanchen.cc/upload/geombook-errata.pdf)

By [[Law of Sines]], we can use the same side $AM$ to represent $CM$ and $MB$, in hopes that they may cancel. We have 
$$
\frac{MB}{\sin(\angle BAM)} = \frac{AM}{\sin(\angle B)}, MB = \frac{AM \sin(\angle BAM)}{\sin(\angle B)}
$$
and
$$
\frac{CM}{\sin(\angle CAM)} = \frac{AM}{\sin(\angle C)}, CM = \frac{AM \sin(\angle CAM)}{\sin(\angle C)}.
$$
We thus have
$$
\frac{CM}{MB} = \frac{\frac{AM \sin(\angle CAM)}{\sin(\angle C)}}{\frac{AM \sin(\angle BAM)}{\sin(\angle B)}} = \frac{\sin(\angle B) \sin(\angle CAM)}{\sin(\angle C) \sin(\angle BAM)} = \frac{\sin(\angle B) \sin(\angle BAX)}{\sin(\angle C) \sin(\angle CAX)}.
$$
We can make that substitution based on $X$ and $M$ being isogonal conjugates. 
Now we make the important observation that $\angle B = \angle ACD$, where $D$ is the extension of line $XC$ to the other side. This is because by tangent and intersecting chord theorem, $\angle ACD = \frac{1}{2}\widehat{AC} = \angle B$. Same for $\angle C = \angle CBE$ where $E$ is the extension of $BX$. 
Then, note that by $\sin(x) = \sin(180^{\circ}-x)$, we get $\angle B = \angle ACX, \angle C = \angle ABX.$ Thus, we can apply Laws on Sines again to involve both angles
$$
\frac{\angle ACX}{AX} = \frac{\angle CAX}{CX}, \frac{\angle ABX}{AX} = \frac{\angle BAX}{BX}.
$$
We note that the above equation can be turned into our desired form. by $\frac{\angle ACX}{\angle CAX} = \frac{AX}{CX}, \frac{\angle BAX}{\angle ABX} = \frac{BX}{AX}$. We also realize $BX = CX$ since $BX$ and $CX$ are both tangent to the circle.  Thus, we finish with
$$
\frac{\sin(\angle B) \sin(\angle BAX)}{\sin(\angle C) \sin(\angle CAX)} = \frac{\sin(\angle ACX) \sin(\angle BAX)}{\sin(\angle ABX) \sin(\angle CAX)} = \frac{AX}{CX} \cdot \frac{BX}{AX} = \frac{BX}{CX} = 1.
$$
Thus, we've proven that $\frac{CM}{MB} = 1, CM = MB$. Therefore $M$ must be the median which means we've proved **Lemma 4.24** as well. 


**Lemma 4.26 (Properties of Symmedians):** Let $ABC$ be triangle, let the lines tangents to the circumcircle at $B$ and $C$ meet at $X$. Let $AX$ meet $(ABC)$ at $K$ and $BC$ at $D$. Then, line $AD$ is the A-symmedian.
![[Pasted image 20241013122408.png]]
We then have **several properties:**
a) $KA$ is the K-symmedian of $\triangle KBC$.
The construction of tangent lines to circumcircle ==also applies to obtuse triangles==. Thus, $KX$ is the K-symmedian of $\triangle KBC$. $K,X,D,A$ are collinear, so $KA$ must also be the K-symmedian.

b) $\triangle ABK \sim \triangle AMC$. 
Since $D$ is the A-symmedian, $\angle BAK = \angle MAC$. Since $A,B,K,C$ are on the circle by definition, $\angle BKA = \angle BCA = \angle MCA$. Thus by AA they are similar.

c) $\frac{BD}{DC} = \left( \frac{AB}{AC} \right)^2$. 
By **Theorem 4.22**, we have $\frac{BD}{DC} \cdot \frac{BM}{MC} = \left( \frac{AB}{AC} \right)^2$ Since $BM=MC, \frac{BM}{MC}=1.$ Thus, $\frac{BD}{DC} \cdot 1 = \left( \frac{AB}{AC} \right)^2$.

d) $\frac{AB}{BK} = \frac{AC}{CK}$. 
Note that similar to b), we can get $\triangle AKC = \triangle ABM$ as $\angle AKC = \angle ABC, \angle CAK = \angle BAM$. 
Thus, $\frac{AC}{CK} = \frac{AM}{BM}$. Since $BM = CM$, we can finish with the b) similarity: $\frac{AC}{CK} = \frac{AM}{CM} = \frac{AB}{BK}$. 

e) $(BCX)$ passes through the midpoint of $AK$. 
Let $N$ be the intersection of $(BCX)$ and $AK$. The important observation is that if we prove $ON \perp AK$ where $O$ is the circumcenter, we've proved that $N$ is the bisector of $AK$, since $A$ and $K$ are both on the circle.
First, we can prove $OBXC$ is a [[Cyclic Quadrilateral]] since $\angle OBX = \angle OCX = 90^{\circ}$. This also means that $OX$ is the diameter since they are both $90^{\circ}$. Then, note that for any point $N$, it must be that $\angle ONX = 90^{\circ}$. Since $NX$ and $AK$ are collinear and $N$ is on the circle, it means that $\angle ONK = 90^{\circ}, ON \perp AK$.

f) $BC$ is the B-symmedian of $\triangle BAK$ and the C-symmedian of $\triangle CAK$. 
The process for proving $\triangle BAK$ and $\triangle CAK$ are essentially the same. We can just look at $\triangle BAK$. The process is similar to that of d), but in reverse.
Let $N$ be the point isogonal to $BC$. We have $\angle ABN = \angle KBD$. Thus, $\triangle BKC \sim \triangle BNA$ and $\triangle ABC \sim \triangle BKN$.  Thus,
$$
\frac{BN}{NA} = \frac{BK}{KC}, \frac{BN}{NK} = \frac{AB}{AC}.
$$
From d), we see $\frac{BK}{KC} = \frac{AB}{AC}$. Thus, we can just make this all equal:
$$
\frac{BN}{NA} = \frac{BK}{KC}= \frac{BN}{NK} = \frac{AB}{AC}.
$$

More specifically, $\frac{BN}{NA} = \frac{BN}{NK}$. This means $NA = NK$ so $N$ must be the median of $AK$. We can apply a similar process for the C-symmedian of $\triangle CAK$. 

g) $BC$ is the interior angle bisector of $\angle AMK$ and $MX$ is the exterior angle bisector.
The important idea is instead of proving $\angle KMD = \angle AMD$ directly, it is instead sufficient to prove $\angle CMK - \angle CMA$. $\triangle CMK$ looks very similar to $\triangle AMC$, so let's see if we can prove that. We have $\triangle AMC \sim \triangle ABK$. Moreover, $\angle BAK = \angle BCK$. Also note that $KD$ is the K-symmedian of $\triangle KBC$ by a). Thus, it must mean that $\angle BKD = \angle CKM$ as well. Thus, $\triangle KMC \sim \triangle ABK \sim \triangle AMC$ by AA.  Thus we've proven $\angle CMK = \angle CMA$. 


**Lemma 4.27 (Symmedians in Cyclic Quadrilaterals, Harmonic Quadrilateral - Ch9):** Let $ABCD$ be a [[Cyclic Quadrilateral]]. Then the following are equivalent( if one of them is true, all of them is true):

a) Product of opposite sides are the same: $AB \cdot CD = BC \cdot DA$. 
b) $AC$ is A-symmedian of $\triangle DAB$.
c) $AC$ is C-symmedian of $\triangle DCB$. 
d) $BD$ is B-symmedian of $\triangle ABC$.
e) $BD$ is D-symmedian of $\triangle ADC$.

**Problem 4.28-4.30:** Just proving Lemma 4.26 d-g 


### 4.7 Circles Inscribed in Segments

Let there be a circle $O_1$ centered at $O$, and a chord $AB$ in the circle. Let $O_2$ be a smaller circle with center $P$ tangent internally to $O_1$ at point $T$, and tangent to $AB$ at $K$. Let $M$ be the midpoint of the $\widehat{AB}$ on the other side of $T$. Let the region bounded by $AB$ and $\widehat{AB}$ and containing $O_2$ be called a **segment**.

![[Pasted image 20241013180215.png]]

It is easy to see $T,P,O$ are collinear by the $T$ tangency. Thus, there is some homothety at $T$ mapping $O_2$ to $O_1$.

**Problem 4.31: Prove the homothety maps $K$ to $M$, and thus $T, K, M$ are collinear.**
Since $OM \perp AB$ and $PK \perp AB$, $OM \parallel PK$. Since $T,P,O$, $\angle TPK = \angle TOM$. Since $OT = OM, PT = PM$, this means $\triangle TOM \sim \triangle TPK$. They share a side $TO$ so it must mean homothety maps from $K$ to $M$ and thus $T,K,M$ are collinear.

**Problem 4.32: Prove $\triangle TMB \sim \triangle BMK$.** 
We have $\angle TMB = \angle BMK$. Since we set $M$ as the midpoint of $\widehat{AB}$, $\angle AOM = \angle BOM$ which means $\angle ABM = \angle MTB$. Thus by AA $\triangle TMB \sim \triangle BMK$.

By this similarity, $\frac{MB}{MK} = \frac{MT}{MB}, MB^2 = MK \cdot MT$.

**Lemma 4.33 (Circles Inscribed in Segments): Let $AB$ be chord of circle $O_1$. Let $O_2$ be the circle tangent to both AB at K and $O_1$ internally at $T$. Then, ray $TK$ passes through midpoint $M$( of the arc $\widehat{AB}$ not containing $T$).**

Moreover, we can define the power of $M$ with respect to $O_1$ as $MA^2 = MB^2$. 


Let $C$ be another point on the arc $\widehat{AB}$ that contains $T$. Let $D$ be on $AB$ such that $CD$ is tangent to $O_2$ at $L$. 
	![[Pasted image 20241013183147.png]]

Then, the circle $O_2$ is called a **curvilinear incircle** of $ABC$. As $D$ can move along $AB$, we obtain many curvilinear incircles, hence we say "a" curvilinear incircle. We claim that if $I$ is the intersection of $CM$ and $KL$, then $I$ is the incenter of $\triangle ABC$.

**Problem 4.34: Prove that the points $C,L,I,T$ are concyclic.** 
By the homothety, we note $\widehat{TK} = \widehat{TM}$. Thus, we see $\angle TLK = \angle TCM$, so $\angle TLI = \angle TCI$ which satisfies the cyclic property.

**Problem 4.35: Prove $\triangle MKI \sim \triangle MIT$, and the triangles are oppositely oriented.**
It is sufficient to prove that $\angle MKI = \angle TIM$. By angle chasing, $\angle MKI = 180^{\circ} - \angle IKT$. By the tangent and intersecting chord theorem, $\angle CLK = \frac{1}{2} \widehat{LT} = \angle LKT = \angle IKT$. Since $CLIT$ is a cyclic quadrilateral, $\angle CLK = \angle CIT$. Summarizing, we thus have $180^{\circ} - \angle IKT = 180^{\circ} - \angle CLK = 180^{\circ} - \angle CIT = \angle TIM$.

By this similarity, we have $\frac{MI}{MK} = \frac{MT}{MI}, MI^2 = MK \cdot MT$. From 4.32, we also proved $MK \cdot MT = MB^2 = MA^2 = MI^2$. Thus, $MI = MA = MB$.
By the Incenter-Excenter lemma (**1.18**), the construction suggests that $I$ is the incenter of $\triangle ABC$.

**Lemma 4.36 (Curvilinear Incircle Chords): Let $ABC$ be triangle and $D$ be point on $AB$. Suppose a circle $O_2$ is tangent to $(ABC)$, $CD$ at $L$, and $AB$ at $K$. Then the incenter of $\triangle ABC$ lies on line $LK$.**



### 4.8 Mixtilinear Incircles
The **A-mixtilinear incircle** of a triangle $ABC$ is the circle internally tangent to both $(ABC)$ and the sides $AB$ and $AC$. Let $O_1$ be the A-mixtilinear circle. Let $T$ be the tangency point of $(ABC)$ and $O_1$, and $K$ and $L$ be the tangency point on $AB$ and $AC$. Let $D = A$, we know that incenter $I$ of $\triangle ABC$ is on $KL$. 
![[Pasted image 20241013203437.png]]

**Problem 4.37: Prove $I$ is the midpoint of $KL$.** 
By the definition of [[Incenter]], $AI$ bisects $\angle KAL$. Clearly $AK = AL$ since they are both tangent to the circle. Thus it must mean that $AI$ is the median as well so $IK = IL$.


Let $M_B,M_C$ be the midpoints of $\widehat{AB},\widehat{AC}$. Then, we know from Lemma 4.33 that $TK$ passes through $M_C$ and $TL$ passes through $M_B$. Note that $BKIT$ and $CLIT$ are both [[Cyclic Quadrilateral]]s.

**Problem 4.38: Prove that $\angle ATK = \angle LTI$.**
From problem 4.37, $I$ is the median of $KL$, so this looks like symmedians. By the construction, since the lines tangent to $O_1$ at $K$ and $L$ meet at $A$, it means that $AT$ is the T-symmedian. Thus by this symmedian property $\angle ATK = \angle ITL$.

**Problem 4.39: Prove that $S$ is the midpoint of the arc $\widehat{BC}$ that contains $A$.**
Since $I$ is the incenter of $\triangle ABC$, $M_C,I,C$ are collinear as $\angle ACI = \angle ICB$ and by definition $\widehat{AM_C} = \widehat{M_CB}$, so they must be the same point on the circle. Same goes for $B,I,M_B$. Since $M_C,K,T$ are collinear and $\angle ATM_C = \angle STM_B = \angle M_CTB$, it is sufficient to prove $\angle M_CTB + \angle ATS = \angle M_BTC = \angle ATM_C+\angle ATS = \angle M_CTS$.  
However, by the incenter we know that $\angle M_BTC = \angle M_BBC = \angle ABM_B = \angle ATS + \angle STM_B = \angle ATS + \angle M_CAT = \angle M_CTB$. Thus $\widehat{BS} = \widehat{SC}$ so $S$ is the midpoint of $\widehat{BC}$.

Thus, we've proved that $S$( the extension of $TI$) is the midpoint, so $TI$ passes through the midpoint of the arc $\widehat{BC}$ that doesn't contain $T$.

![[Pasted image 20241013215847.png]]

**Lemma 4.40 (Mixtilinear Incircles): Let $ABC$ be triangle and let its A-mixtilinear circe be tangent to $AB,AC$, and $(ABC)$ at $K$, $L$, and $T$ respectively. Let $D$ and $E$ be the contact point of the incircle and the A-excircle on $BC$ respectively. Then, the following holds:** 

a) The incenter of $\triangle ABC$ is the midpoint of $KL$.
b) Lines $TK$ and $TL$ pass through the midpoints of arc $\widehat{AB}$ and $\widehat{AC}$ that does not contain $T$( Lemma 4.33). 
c) Line $TI$ passes through midpoint of arc $\widehat{BC}$ which contains $A$( Lemma 4.39)
d) $\angle BAT = \angle CAE$, so $AT$ and $AE$ are isogonal in $\triangle ABC$( proven in problem 8.31)
e) $\angle BTA = \angle CTD$, so $TA$ and $TD$ are isogonal in $\triangle TBC$( proven in problem 8.31)
f) Quadrilaterals $BKIT$ and $CLIT$ are cyclic.

See Lemma 7.42











