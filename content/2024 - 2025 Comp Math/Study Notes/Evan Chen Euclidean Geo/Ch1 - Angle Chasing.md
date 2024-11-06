### 1.1 Triangles and Circles

**Example 1.1: In quadrilateral $WXYZ$ with perpendicular diagonals and angles as shown,**
![[Pasted image 20241015215322.png]]
Let intersection be $O$, then $\angle ZWO = 60^{\circ}, \angle YZO = 40^{\circ}, \angle OXW = 50^{\circ}$.
**a) Compute $\angle Z$**
We have $\angle Z = \angle WZO + \angle YZO= 30^{\circ}+40^{\circ} = 70^{\circ}$.
**b) Compute $\angle X$**
By AA, $\triangle WOX \sim \triangle ZOY$, so $\frac{WO}{OZ} = \frac{XO}{OY}$. Then $\triangle WOZ \sim \triangle XOY$ by SAS as we can manipulate the length ratios as $\frac{WO}{XO} = \frac{OZ}{OY}$. Another solution is to just notice that it's a cyclic quadrilateral by $\angle XWY = \angle XZY$. Either way, $\angle OXY = 60^{\circ}, \angle OYX = 30^{\circ}$, so $\angle X = \angle OXW + \angle YXO = 50^{\circ}+60^{\circ} = 110^{\circ}$.

**Proposition 1.2 (Triangle Sum): The sum of the angles of a triangle is $180^{\circ}$.**

**Theorem 1.3 (Inscribed Angle Theorem): If $\angle ACB$ is inscribed in circle, then it subtends an arc with measure $2\angle ACB$.**
![[Pasted image 20241015220659.png]]

**Example 1.4: If $I$ is incenter of $\triangle ABC$, then $\angle BIC = 90^{\circ}+\frac{1}{2}\angle A$.**
Note that $\angle IBC = \frac{1}{2}\angle B$ and same for $\angle ICB = \frac{1}{2}C$. Thus, 
$$
\begin{align}
\angle BIC &= 180^{\circ} - \angle IBC - \angle ICB \\
&= 180^{\circ}-\frac{1}{2}(\angle B+\angle C) \\
&= 180^{\circ}-\frac{1}{2}(180^{\circ}-\angle A) \\
&= 90 + \frac{1}{2}\angle A.
\end{align}
$$

**Problem 1.5: Solve Example 1**

**Problem 1.6: Let $ABC$ be a triangle inscribed in circle $w$. Show that $AC \perp CB$ if and only if $AB$ is the diameter of $w$**
Proven by Inscribed Angle Theorem (1.3), as it is perpendicular meaning $\angle ACB = $90^{\circ}, \widehat{AB} = 180^{\circ}$ which is the diameter. Same other way around as $\frac{1}{2}180^{\circ} = 90^{\circ}$.

**Problem 1.7: Let $O$ and $H$ be the circumcenter and orthocenter f acute $\triangle ABC$ respectively. Prove $\angle BAH = \angle CAO$.**
![[Pasted image 20241015223651.png]]
Note $2\angle B = \angle AOC$. Thus, $\angle CAO = \frac{1}{2}(180^{\circ}-2\angle B) = 90^{\circ}-\angle B$. Then, $\angle BAH = 90^{\circ}-\angle B$ as well by the right triangle. Thus they are equal.

### 1.2 Cyclic Quadrilaterals
Definition: Quadrilaterals the can be inscribe in a circle. Points are **concyclic** if they can all lie on the same circle.

**Proposition 1.8: Let $ABCD$ be a convex cyclic quadrilateral. Then $\angle ABC + \angle CDA = 180^{\circ}$ and $\angle ABD = \angle ACD$.**
![[Pasted image 20241015224927.png]]


**Theorem 1.9 (Cyclic Quadrilaterals): Let $ABCD$ be a convex quadrilateral. Then the following are equivalent (if one is true, all is true):**
- (i) $ABCD$ is cyclic
- (ii) $\angle ABC + \angle CDA = 180^{\circ}$ (Opposite angles add up to 180)
- (iii) $\angle ABD = \angle ACD$ (Inscribed angles are equal)

**Problem 1.10: Show a trapezoid is cyclic if and only if it's isosceles.** 
Trapezoid has the property that top and bottom angle pairs add up to $180^{\circ}$. Though opposite angles must also add up to $180^{\circ}$, so bottom angles must be the same, thus it's isosceles.

**Problem 1.11: Quadrilateral $ABCD$ has $\angle ABC = \angle ADC = 90^{\circ}$. Show that $ABCD$ is cyclic and $(ABCD)$ has diameter $AC$.** 
It must be cyclic since opposite angles add up to $180^{\circ}$. Since it's cyclic and both inscribing angles are $90^{\circ},$ it must be that $AC$ is the diameter.

### 1.3 The Orthic Triangle
In $\triangle ABC$, let $D,E,F$ be the feet of altitude from $A$, $B$, and $C$. The triangle $DEF$ is the **orthic triangle** of $\triangle ABC$.
![[Pasted image 20241015232638.png]]

**Problem 1.12: List the 6 cyclic quadrilaterals present in this diagram.**
We use the fact the the angles of $D,E,F$ are perpendicular to its respective sides, forming $90^{\circ}$ angles. Thus we have
opposite angles are both $90^{\circ}$: $AFHE, BFHD, DHEC$ and interior angles are both $90^{\circ}$: $ABDE, AFDC, BFEC$.
The right angles also tell us where the diameter of each circle is.

**Example 1.13: Prove $H$ is the incenter of $\triangle DEF$.**
We want to prove that the altitudes of $\triangle ABC$ are the angle bisectors of $\triangle DEF$. We use cyclic quadrilaterals to angle chase for equal angles. By cyclic quadrilateral $ABDE$, $\angle ADE = \angle ABE$. By cyclic quadrilateral $BFHD$, $\angle ABE = \angle FBH = \angle FDH$. Thus, $\angle ADE = \angle FDH$, so $AD$ is the angle bisector of $\angle FDE$. The same idea can be used to prove the other two angles.

**Lemma 1.14 (The Orthic Triangle): Suppose $\triangle DEF$ is the orthic triangle of $\triangle ABC$ with orthocenter $H$, then**
- Points $A,E,F,H$ lie on a circle with diameter $AH$.
- Points $B,E,F,C$ lie on a circle with diameter $BC$.
- $H$ is the incenter of $\triangle DEF$.


**Problem 1.15: In Example 1.13, explicitly check that $EH$ and $FH$ are angle bisectors as well** 
No.

**Problem 1.16: Show that $\triangle AEF, \triangle BFD, \triangle CDE$ are similar to $\triangle ABC$ in the orthic triangle.**
We have $\angle BFD = \angle AFE$ since $\angle DFC = \angle CFE$ by the angle bisector and the altitude means $\angle AFc = \angle BFC = 90^{\circ}$.
Then by cyclic quadrilateral $AFHE$, $\angle AEF = \angle AHF = \angle DHC$. By AA and right angles, $\triangle HDC \sim \triangle BFC$. Thus, $\angle FBC = \angle FBD = \angle DHC$. Thus, $\angle AEF = \angle FBD$.
Thus by AA, $\triangle AEF \sim \triangle FBD$. Similarly, we can prove $\triangle AEF \sim \triangle FBD \sim \triangle ECD$. Thus their angles are equal. Moreover, each one of their angles is one of the angles of $\triangle ABC$. Thus, it must mean that all the 3 angles are similar to $\triangle ABC$ as well.

**Lemma 1.17 (Reflecting the Orthocenter): Let $H$ be the orthocenter of $\triangle ABC$. Let $X$ be the reflection of $H$ over $BC$ and $Y$ be the reflection over the midpoint $M$ of $BC$.**
![[Pasted image 20241016010914.png]]

**(a) Prove $X$ lies on $(ABC)$.**
By HL congruency, $\triangle XCD \cong \triangle HCD$. Thus, $\angle DXC = \angle DHC = \angle AHE = \angle ABD$. So this means $ABXC$ is a cyclic quadrilateral as $\angle ABC = \angle AXC$, so $X$ must be on $(ABC)$.
**(b) Prove $AY$ is the diameter of $(ABC)$.**
Since $M$ is the midpoint, $BM = MC$ and $HM = MY$. Thus, $BYCH$ is a parallelogram, so $\angle BYC - \angle BHC$. 
Then since $\triangle AFB \sim \triangle HBE$ by AA,  $\angle BHE = \angle BAF$. Moreover, $\angle BAC = \angle BAF = \angle BHE = 180^{\circ}-\angle BHC = 180^{\circ}-\angle BYC$. Thus, $ABYC$ is cyclic as well.
By SAS, $\triangle HDM \sim \triangle HXY$, so $\angle HXY = 90^{\circ} = \angle AXY$. This means $AY$ must be the diameter of the circle.  


### 1.4 The Incenter/Excenter Lemma

**Lemma 1.18 (The Incenter/Excenter Lemma): Let $ABC$ be triangle with incenter $I$. Ray $AI$ meets (ABC) again at $L$. Let $II_A$ be the reflection of $I$ over $L$.**

![[Pasted image 20241016013041.png]]
**We then have:**
**(a) $I,B,C,I_A$ is concyclic with diameter $II_A$ and center $L$, so $LI = LB = LC = LI_A$.**

**(b) Rays $BI_A$ and $CI_A$ bisect the exterior angles of $\triangle ABC$.** This is more commonly known as the definition of **A-excenter**.


**Proof of a):** We let $\angle A = 2a, \angle B = 2b, \angle C = 2c$, so $2a+2b+2c=180^{\circ}, a+b+c = 90^{\circ}$. We can prove these conditions if we can just prove $LI = LB = LC = LI_A$. We know by construction $LI = LI_A$. Now we only need to prove $LI = LB = LC$. Note that proving $LI = LB$ is equivalent to proving $\angle LBI = \angle LIB$. By angle chasing, $\angle LBC = \angle LAC = a$ and $\angle CBI = b$. Thus, $\angle LBI = \angle LBC + \angle CBI = a+b$. 
Then, $\angle LIB = 180^{\circ}-\angle AIB = 180^{\circ} - (180^{\circ}-\angle IAB - \angle IBA) = 180^{\circ} - (180^{\circ}- a - b) = a+b$. We can use a similar way to prove $LI = LC$. Thus $L$ is the center of $(IBC)$. Since $LI = LI_A$, $II_A$ must be the diameter of $(IBC)$ as well.

**Proof of b):** We want to prove $\angle I_ABC = \frac{1}{2}(180^{\circ}-2b) = 90^{\circ}-b$ and $\angle I_ACB = \frac{1}{2}(180^{\circ}-2c) = 90^{\circ}-c$.
Since $II_A$ is the diameter of $(IBI_AC), \angle IBI_A = 90^{\circ}$. Then $\angle I_ABC = \angle IBI_A-\angle IBC = 90^{\circ}-b$.
A similar idea can be used to prove for $\angle I_ACB$.

Thus, $I_A$ is called the **A-excenter** of $\triangle ABC$, which is the intersection of exterior angle bisectors of $\angle B$ and $\angle C$. 

**Problem 1.19: Calculate the "similar idea" to complete the proof in 1.18**
No.


### 1.5 Directed Angles

Use when it can be acute or obtuse, causing angle arguments to be unstable across many cases. Instead of doing tedious casework, we 


**Problem 1.20: Verify the six quadrilaterals from 1.12 are still cyclic even if $\triangle ABC$ is obtuse (Fully proved in 1.26).**
We can use essentially the same idea but just looking at the diagram, and using either opposite angles add to 180 or inscribed angles are the same. 
==However==, note that $FC \perp AB$ and $BE \perp AC$ even though they are on opposite sides. This does not allow us to use $\angle BFH + \angle BDH = 180^{\circ}$ for opposite angles. We instead have to use them as inscribed angles instead of opposite, so we prove by $\angle BFH = \angle BDH$. 

**Problem 1.21: Prove $A$ is the orthocenter of $\triangle HBC$**
Because obviously $,\angle CEB = \angle BFC = \angle HDB = 90^{\circ}$ by definition.


To account for this so we don't have to do casework, we use **directed angles** denoted by $\measuredangle$ symbol. 
Let $\measuredangle ABC$ be positive if $A,B,C$ appear clockwise, and negative if counter clockwise. Thus, $\measuredangle ABC = -\measuredangle CBA$. Then, take the angle$\mod 180^{\circ}$, so $-150^{\circ} = 30^{\circ} = 210^{\circ}$.

**Theorem 1.22 (Cyclic Quadrilaterals with Directed Angles): Points $A,B,X,Y$ (in any order) lie on a circle *or line (collinear)* if and only if $\measuredangle AXB = \measuredangle AYB$. **
**Problem 1.23: Prove this is the same as the normal angle cyclic quad theorem in 1.9.** 

We verify the two conditions (ii) and (iii), the inscribed angle equality and opposite add up to 180.
Let it be an inscribed angle, so $X$ and $Y$ are adjacent. This is proven by definition of cyclic quad. Moreover, since $\measuredangle AXB$ and $\measuredangle AYB$ are going in the **same direction**, it means that the angles are the same and have the same sign.
Let it be opposite angle add up to 180. Then, $X$ and $Y$ are not adjacent (opposite). In the original theorem, $\angle AXB + \angle AYB = 180^{\circ}, \angle AXB = 180^{\circ} - \angle AYB = -\angle AYB \pmod{180^{\circ}}.$ Note that here, $\measuredangle AXB$ and $\measuredangle AYB$ have different signs. Thus, $\measuredangle AXB = \measuredangle AYB, \angle AXB = -\angle AYB$, which satisfies (iii).

**Proposition 1.24 (Properties of Directed Angles): For any distinct points $A,B,C,P$ in the plane, the following rules are true:**
**Problem 1.25: Prove that they are true.**
- **Oblivion:** $\measuredangle APA = 0$
- **Anti-Reflexivity:** $\measuredangle ABC = -\measuredangle CBA$ 
	- due to different directions
- **Replacement:** $\measuredangle PBA = \measuredangle PBC$ if and only if $A,B,C$ are collinear. 
	- If $A$ and $C$ are on opposite sides of $B$, this still works because the direction will be different, so the sign will be different, $a+b=180^{circ}, a = -b \pmod{180^{\circ}}$.
- **Right Angles:** If $AP \perp BP$, then $\measuredangle APB = \measuredangle BPA = 90^{\circ}$. 
	- This is because $90^{\circ} = -90^{\circ} \pmod{180^{\circ}}$.
- **Directed Angle Addition:** $\measuredangle APB + \measuredangle BPC = \measuredangle APC$. 
	- If $B$ and $C$ are on the "same side", we can treat this as a normal angle since signs are the same, so this is true. If they are opposite direction, we see that $\measuredangle BPC$ and $\measuredangle APC$ have the same direction, and $\measuredangle APB$ has a different direction. Thus, $\measuredangle APB + \measuredangle BPC = \measuredangle APC$ since $\angle BPC -\angle APB = \angle APC$ by diagram.
- **Triangle Sum:** $\measuredangle ABC + \measuredangle BCA + \measuredangle CAB = 0$. 
	- True because $180^{\circ} \equiv 0^{\circ} \pmod{180^{\circ}}$ and the angles have the same direction, so they must add up to 180.
- **Isosceles Triangles:** $AB=AC$ if and only if $\measuredangle ACB = \measuredangle CBA$ and $A,B,C$ are not collinear.
	- Works because same direction
- **Inscribed Angle Theorem:** If $(ABC)$ has center $P$, then $\measuredangle APB = 2\measuredangle ACB$. 
	- Works because same direction
- **Parallel Lines:** If $AB \parallel CD$, then $\measuredangle ABC + \measuredangle BCD = 0$. 
	- If same direction/sign, they add up to 180 which is 0. If different direction/sign, they have the same angle so a-a = 0.
Though, $2\measuredangle ABC = 2\measuredangle XYZ$ does not mean $\measuredangle ABC = \measuredangle XYZ$ since we are taking mod $180^{\circ}$.


**Usage:** Solve the problem for a specific configuration, but write the solution in terms of directed angles. If you can do this, then this solution will apply to all configurations and thus prove the problem without casework.

**Example 1.26 (The Orthic Triangle Complete): Let $H$ be the orthocenter of $\triangle ABC$, acute or not. Using directed angles, show $AEHF, BFHD, CDHE, BEFC, CFDA,ADEB$ are all cyclic.**
![[Pasted image 20241019122052.png]]

By definition, 
$$
\begin{align}
\measuredangle ADB = \measuredangle ADC = 90^{\circ} \\
\measuredangle BEC = \measuredangle BEA = 90^{\circ} \\
\measuredangle CFA = \measuredangle CFB = 90^{\circ} \\
\end{align}.
$$
Then, $\angle AEH = \measuredangle AEB = -\measuredangle BEA = -90^{\circ} = 90^{\circ}$ and $\angle AFH = \measuredangle AFC = -\measuredangle CFA = -90^{\circ} = 90^{\circ}$ (by **replacement** property if the signs are different). Thus, $A,E,F,H$ is concyclic. 
The other 2 cyclic quadrilaterals can be proved similarly.
Also, $\measuredangle BFC = -\measuredangle CFB = -90^{\circ}=90^{\circ}=\measuredangle BEC$. Thus, $B,E,F,C$ are concyclic as well. The other 2 cyclic quadrilaterals can be proved similarly.  
**Lemma 1.27 (Miquel Point of a Triangle): Let points $D,E,F$ lie on lines $BC,CA,AB$ of $\triangle ABC$ respectively. The, there must exist a point that lies on all three circles $(AEF),(BFD),(CDE). This point is called the Miquel point of the triangle.**
![[Pasted image 20241020011254.png]]

We claim the **Miquel point** $K$ is the intersection of $(BFD)$ and $(CDE)$ other than $D$. Now, all we have to prove is that $K$ is on $(AFE)$ as well, so $AFKE$ is concyclic. 

We try to solve for the inner case first. We know that $BFKD$ and $DKEC$ are both cyclic quadrilaterals, so $\angle FKD = 180^{\circ}-\angle B$ and $\angle EKD = 180^{\circ}-\angle C$. Thus, $\angle FKE = 360^{\circ} - \angle FKD - \angle EKD = 360^{\circ} - (180^{\circ}-\angle B) - (180^{\circ}-\angle C) = \angle B + \angle C = 180^{\circ}-\angle A.$ Thus, $AFKE$ is cyclic.
Now, we must ==convert this to direct angles== to prove all cases.
By cyclic quadrilateral, $\measuredangle FKD = \measuredangle FBD = \measuredangle ABC$ and $\measuredangle DKE = \measuredangle DCE = \measuredangle BCA.$ 
Moreover by triangle sum, $\measuredangle FKD + \measuredangle DKE + \measuredangle EKF = 0$ and $\measuredangle ABC + \measuredangle BCA + \measuredangle CAB = 0$ since $360^{\circ} \equiv 180^{\circ} \equiv 0^{\circ} \pmod{180^{\circ}}$. We can eliminate the first two terms of each equation since they're equal as proven, so we just have $\measuredangle EKF = \measuredangle CAB$. Since $\measuredangle CAB = \measuredangle EAF$, $\measuredangle EAF = \measuredangle EKF$ so $EAKF$ is concyclic. 

**When to not use Directed Angles:** 
- When the problem only works for a specific configuration
- If the problem invokes trigonometry
- If you try to take a half angle (due to mod 180 it won't work)

**Problem 1.28: Verify from above that $\measuredangle FKD + \measuredangle DKE + \measuredangle EKF = 0$.**
Note by **directed angle addition**, $\measuredangle FKD + \measuredangle DKE = \measuredangle FKE$. Thus, $\measuredangle FKD + \measuredangle DKE - \measuredangle FKE = 0$. Then, note that $-\measuredangle FKE = \measuredangle EKF$ since they are the same angle but with different directions. Thus, we substitute $-\measuredangle FKE$ for $\measuredangle EKF$ to get $\measuredangle FKD + \measuredangle DKE + \measuredangle EKF = 0$.

**Problem 1.29: Show that for any distinct points $A,B,C,D$, we have $\measuredangle ABC + \measuredangle BCD + \measuredangle CDA + \measuredangle DAB = 0$.** 
By **directed angle addition**, $\measuredangle DAB = \measuredangle DAC + \measuredangle CAB$ and $\measuredangle BCD = \measuredangle BCA + \measuredangle ACD$. By **triangle sum**, $\measuredangle ABC + \measuredangle BCA + \measuredangle CAB = 0, \measuredangle ABC = -(\measuredangle BCA + \measuredangle CAB)$ and $\measuredangle CDA + \measuredangle DAC + \measuredangle ACD = 0, \measuredangle CDA = -(\measuredangle DAC + \measuredangle ACD)$. Putting this all together, we get $-(\measuredangle BCA + \measuredangle CAB) + \measuredangle BCA + \measuredangle ACD -(\measuredangle DAC + \measuredangle ACD) + \measuredangle BCA + \measuredangle ACD = 0$. Each angle cancels out, so we're done.

**Lemma 1.30: Points $A,B,C$ lie on a circle with center $O$. Show that $\measuredangle OAC = 90^{\circ} - \measuredangle CBA$.**
You cannot take half of a directed angle. Thus, we can't do $\angle OAC = \frac{1}{2}(180^{\circ} - \angle AOC)$ ==idek why tbh==. Thus, we evoke other transitions on directed angles that are true. If we extend $A$ through $O$ to point $A'$ such that $AA'$ is the diameter, we can safely say $\measuredangle CBA = \measuredangle CA'A$. Then by triangle sum, $\measuredangle CA'A + \measuredangle A'AC + \measuredangle ACA' = 0$. We know that $\measuredangle ACA' = 90^{\circ}$, so $\measuredangle CA'A + \measuredangle A'AC = -90^{\circ}=90^{\circ}, \measuredangle A'AC = 90^{\circ} - \measuredangle CA'A$. Since $\measuredangle A'AC = \measuredangle OAC$ and $\measuredangle CBA = \measuredangle CA'A$. Thus, we just substitute to get $\measuredangle OAC = 90^{\circ} - \measuredangle CBA$. 


#### Ch 1.6: Tangent to Circles and Phantom Points
We may imagine a tangent point as the limit of a cyclic quadrilateral.

**Proposition 1.31 (Tangent Criterion): Let $(ABC)$ have center $O$ and $P$ be a point. Then, One of these properties means the other two:**
- **$PA$ is tangent to $(ABC)$**
- $OA \perp AP$
- $\measuredangle PAB = \measuredangle ACB$.
![[Pasted image 20241020161501.png]]

Phantom point technique is the act of reverse reconstructing the question (if and only if). We assume the answer, then prove that at this answer, there is only one construction such that the conditions are satisfied and it's this one. 

**Example 1.32: Let $\triangle ABC$ be acute with circumcenter $O$, and let $K$ be a point such that $KA$ is tangent to $(ABC)$ and $\angle KCB = 90^{\circ}$. Point $D$ lies on $BC$ such that $KD \parallel AB$. Show line $DO$ passes through $A$.**
![[Pasted image 20241020165321.png]]


Instead, we rephrase this problem by first letting $D'$ be the intersection of $AO$ and $BC$, then proving that $KD' \parallel AB$. Since there must only one point on $BC$ that satisfies these conditions, we are allowed to make the argument in reverse, so it must be that $D' = D$. 
We thus turn this problem into the following:

**Problem 1.33: Let $\triangle ABC$ be acute and $AO$ meets $BC$ at $D'$. Point $K$ is a point such that $KA$ is tangent to $(ABC)$ and $\angle KCB = 90^{\circ}$. Prove $KD' \parallel AB$. 

Since $\angle KAD' = \angle KCD' = 90^{\circ}$, $KD'CA$ is concyclic. Thus, $\angle KD'C = \angle KAC = \frac{1}{2} \widehat{AC} = \angle ABC$. Thus, $\angle KD'C = \angle ABC$ which means they're $KD' \parallel AB$.

**Problem 1.34: In scalene triangle ABC, let $K$ be intersection of angle bisector of $\angle A$ and perpendicular bisector of $BC$. Prove points $A,B,C,K$ are concyclic.** 

There must be only one point $K$ that satisfies both conditions, so we can try phantom point (reverse construction). Let $K'$ be the intersection of the perpendicular bisector and $(ABC)$. It is then sufficient to prove that $AK'$ is also the angle bisector of $\angle A$.  

We want to prove $\angle BAK' = \angle K'AB$. Note that since $K'D$ perpendicularly bisects chord $BC$, $\widehat{BK'} = \widehat{K'C}$. Thus, this must mean $\angle BAK' = \angle K'AB$ as well. Thus $K'$ is the angle bisector of $\angle A$.


### 1.7 IMO Shortlist Problem

**Example 1.35 (Shortlist 2010 G1): Let $ABC$ be acute triangle with the feet of the altitudes $D,E,F$ lying on $BC, CA, AB$ respectively. Let one of the intersection points of line $EF$ and circumcircle be $P$. The lines $BP$ and $DF$ meet at point $Q$. Prove $AP = AQ$.**
![[Pasted image 20241020172029.png]]

We have to prove this for both $P$ choices/configurations, denoted as $P_1$ and $P_2$ above. Let's focus on solving for $P_2$ first.
We thus want to prove $\measuredangle AQ_2P_2 = \measuredangle Q_2P_2A$. 
First, by directed angles $\measuredangle Q_2P_2A = \measuredangle BP_2A = \measuredangle BCA$ since $ACBP_2$ is a cyclic quadrilateral.

We don't know a way to get to $\measuredangle AQ_2P_2$, so we do wishful thinking and try to prove $Q_2P_2FA$ is a cyclic quadrilateral. We do angle chasing to prove $\measuredangle Q_2P_2A = \measuredangle Q_2FA$. Note $FDCA$ is a cyclic quadrilateral so $\measuredangle BCA = \measuredangle DCA = \measuredangle DFA = \measuredangle Q_2FA$, which means $Q_2P_2FA$ is a cyclic quadrilateral.
Thus, we have $\measuredangle AQ_2P_2 = \measuredangle AFP_2 = \measuredangle AFE$. Since $AFHE$ is a cyclic quadrilateral, $\measuredangle AFE = \measuredangle AHE = \measuredangle DHE = \measuredangle DCE = \measuredangle BCA$. 
Thus, we've proven $\measuredangle Q_2P_2A = \measuredangle AQ_2P_2$. 

Since we're using directed angles, we've also solved the $P_1$ and $Q_1$ case ==why?== 

An important technique is drawing a scaled diagram using ruler + compass so we can get inspired as well as allowing us to catch mistakes.