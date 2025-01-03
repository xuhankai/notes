
### 3.1 Extended Law of Sines

Another way to relate angles and lengths (other than similar triangles) is **law of sines**. 

**Theorem 3.1 (The Extended Law of Sines): In triangle $ABC$ with circumradius $R$, we have**
$$
	\frac{a}{\sin{A}} = \frac{b}{\sin{B}} = \frac{c}{\sin{C}} = 2R.
$$

Normal sin law (trivial proof) but with $2R$ at the end. We prove $\frac{a}{\sin{A}} = 2R$ and the rest follows. $2R$ suggests drawing the circumcircle. Let $BX$ be a diameter of circumcircle $(ABC)$. The directed angle $\measuredangle BXC = \measuredangle BAC$. Moreover, $\triangle BXC$ is right at $\angle C$. $BC = a, BX = 2R$, and $\angle BXC = A \textnormal{ or } 180^{\circ} - A$. Since it must be that $\angle A  < 180^{\circ}$ to for a non-degenerate triangle, $\sin{A} = \sin{BXC} = \frac{a}{2R}$.  

**Theorem 3.2 (Angle Bisector Theorem): Let $ABC$ be a triangle and point $D$  on $BC$ such that $AD$ is the internal angle bisector of $\angle BAC$. Then,**
$$
\frac{AB}{AC} = \frac{BD}{CD}.
$$
Evoke sin law on $\triangle ABD$ and $\triangle ACD$. Note $\sin{\angle ADB} = \sin{\angle ADC}$ as $\angle ADB = 180^{\circ} - \angle ADC$ (supplementary identity of sin, think of unit circle). Thus, 
$$
\begin{align}
\frac{\sin(\angle BAD)}{DB} &= \frac{\sin(\angle ADB)}{AB} \rightarrow \frac{\sin(\angle BAD)}{\sin(\angle ADB)} = \frac{DB}{AB},\\ 
\frac{\sin(\angle CAD)}{DC} &= \frac{\sin(\angle ADC)}{AC} \rightarrow \frac{\sin(\angle CAD)}{\sin(\angle ADC)} = \frac{DC}{AC},\\ 
\angle{BAD} &= \angle CAD, \sin(\angle ADB) = \sin(\angle ADC), \\ 
\frac{DB}{AB} &= \frac{DC}{AC} \rightarrow \frac{AB}{AC} = \frac{DB}{DC}.
\end{align}
$$

### 3.2 Ceva's Theorem
A **cevian** is a line joining a vertex of a triangle to it the opposite side through the triangle's interior. 
![[Pasted image 20241121204509.png]]
**Theorem 3.3 (Ceva's Theorem): Let $AX,BY,CZ$ be cevians of a triangle $ABC$. They concur (meet at same point) if and only if**
$$
\frac{BX}{XC} \cdot \frac{CY}{YA} \cdot \frac{AZ}{ZB} = 1. 
$$
The ratios of the bases are essentially a ratio of their triangle areas, since they share an altitude. We proving using a technique where we use same areas to "cancel out terms" from top and bottom, as shown below.
First prove the inverse: If they concur at $P$, then the ratios must multiply to $1$. Note $\triangle BAX$ and $\triangle XAC$ have the same altitude. Same idea for $\triangle BPX$ and $\triangle XPC$. Thus, the ratios areas is the same as the base, so $\frac{BX}{XC} = \frac{[BAX]}{[XAC]} = \frac{[BPX]}{[XPC]}$. We then apply the algebraic trick "if $\frac{a}{b} = \frac{c}{d}$, then $\frac{a}{b} = \frac{c}{d} = \frac{a+c}{b+d}$. We thus have 
$$
\frac{BX}{XC} = \frac{[BAX]-[BPX]}{[XAC]-[XPC]} = \frac{[BAP]}{[ACP]}.
$$
By similar logic, $\frac{CY}{YA} = \frac{[CBP]}{[BAP]}$ and $\frac{AZ}{ZB} = \frac{[ACP]}{[CBP]}$. Thus,
$$
\frac{BX}{XC} \cdot \frac{CY}{YA} \cdot \frac{AZ}{ZB} = \frac{[BAP]}{[ACP]} \cdot \frac{[CBP]}{[BAP]} \cdot \frac{[ACP]}{[CBP]} = 1 
$$
since all areas cancels out. 
To prove the other direction (that three cevians must be concurrent if the equality is satisfied), we use Phantom Points. Let $AX,BY,CZ$ be cevians satisfying the equality. Then, let $BY$ and $CZ$ intersect at $P'$, and let ray $AP'$ meet $BC$ at $X'$. To prove concurrency, we may now only prove $X = X'$. By our proof above, since $BY,CZ,AX'$ is concurrent at $p'$, we know that $\frac{BX'}{X'C} \cdot \frac{CY}{YA} \cdot \frac{AZ}{ZB} = 1$. Since $AX,BY,CZ$ also satisfies the equality, this must mean $\frac{BX}{XC} = \frac{BX'}{X'C}$, so $X = X'$. 

**Theorem 3.4 (Trigonometric Form of Ceva's Theorem): Let $AX,BY,CZ$ be cevians of triangle $ABC$. They concur if and only if**
$$
\frac{\sin(\angle BAX)\sin(\angle CBY)\sin(\angle ACZ)}{\sin(\angle XAC)\sin(\angle YBA)\sin(\angle ZCB)} = 1.
$$
**Problem 3.5: Prove this.**
We apply sin law on $\triangle APB$. We get $\frac{\sin(\angle BAX)}{BP} = \frac{\sin(\angle YBA)}{AP}, \frac{\sin(\angle BAX)}{\sin(\angle YBA)} = \frac{BP}{AP}$. Similarly, we apply sin law on $\triangle APC$ and $\triangle BPC$, getting $\frac{\sin(\angle ACZ)}{\sin(\angle XAC)} = \frac{AP}{PC}$ and $\frac{\sin(\angle CBY)}{\sin(\angle ZCB)} = \frac{PC}{BP}$ respectively. Thus,
$$
\frac{\sin(\angle BAX)\sin(\angle CBY)\sin(\angle ACZ)}{\sin(\angle XAC)\sin(\angle YBA)\sin(\angle ZCB)} = \frac{BP}{AP} \cdot \frac{AC}{PC} \cdot \frac{PC}{BP} = 1.
$$

We can thus prove the existence orthocenter, incenter, and centroid. Let the triangle be $ABC$ with angles $A,B,C$.

For orthocenter, since it's the intersection of the altitudes, each angle is just $90^{\circ}$ minus the other angle (which is one of $A,B,C$). Thus, we use trig form to get
$$
\frac{\sin(90^{\circ}-B)\sin(90^{\circ}-C)\sin(90^{\circ}-A)}{\sin(90^{\circ}-C)\sin(90^{\circ}-A)\sin(90^{\circ}-B)} = 1.
$$

For incenter, since angle bisector produces the same angle, we use trig form to get
$$
\frac{\sin(\frac{1}{2}A)\sin(\frac{1}{2}B)\sin(\frac{1}{2}C)}{\sin(\frac{1}{2}A)\sin(\frac{1}{2}B)\sin(\frac{1}{2}C)} = 1.
$$

For centroid, since the lengths of sides are the same, we use standard form to get 
$$
\frac{1}{1} \cdot \frac{1}{1} \cdot \frac{1}{1} = 1. 
$$

**Problem 3.6: Let $AM,BE,CF$ be concurrent cevians of triangle $ABC$. Prove $EF \parallel BC$ if and only if $BM = MC$.**

We first prove if $BM = MC$, then $EF \parallel BC$. By Ceva's Theorem, $\frac{BM}{MC} \cdot \frac{CE}{AE} \cdot \frac{AF}{BF} = \frac{CE}{AE} \cdot \frac{AF}{BF} = 1$. Thus, $\frac{AE}{CE} = \frac{AF}{BF}$. We now have $\frac{AE}{AF} = \frac{CE}{BF} = \frac{AE+CE}{AF+BF} =\frac{AC}{AB}$ by algebra trick. Since $\frac{AE}{AF} = \frac{AC}{AB}$, by SAS similarity $\triangle AFE \sim \triangle ABC$ meaning $\angle AFE = \angle ABC, \angle AEF = \angle ACB$, so it must be that $EF \parallel BC$. 
To prove the inverse, we just work backwards from the above proof since all steps are reversible. By similarity, we first get to the fraction part, then prove by doing algebra trick (but subtracting) that $\frac{AE}{AF} = \frac{CE}{BF}, \frac{AE}{CE} = \frac{AF}{BF}$. Then, we note that $\frac{CE}{AE} \cdot \frac{AF}{BF} = 1$ so by Ceva's Theorem $\frac{BM}{MC} = 1, BM = MC$.

### 3.3 Directed Lengths and Menelaus's Theorem

**Theorem 3.7 (Menelaus's Theorem): Let $X,Y,Z$ be points on lines $BC,CA,AB$ respectively in triangle $ABC$ (or the extension of the lines, outside the triangle), but distinct from its vertices. Then $X,Y,Z$ are collinear if and only if
$$
\frac{BX}{XC} \cdot \frac{CY}{YA} \cdot \frac{AZ}{ZB} = -1
$$
where lengths are directed.**

For **directed lengths**, given collinear points $A,Z,B$, $\frac{AZ}{ZB}$ is positive if $Z$ lies between $A$ and $B$, and negative otherwise. Note in Menelaus's Theorem, the product will be negative only if one or all three of $X,Y,Z$ lie on the outside of it's corresponding side.
![[Pasted image 20241122201632.png]]

First, suppose points $X,Y,Z$ lie on sides of triangle in such a way that $\frac{BX}{XC} \cdot \frac{CY}{YA} \cdot \frac{AZ}{ZB} = -1$. Then, there must exist real numbers $p,q,r,$ such that $\frac{q}{r} = -\frac{BX}{XC}, \frac{r}{p} = -\frac{CY}{YA}, \frac{p}{q} = -\frac{AZ}{ZB}$. 
Now we view this in 3D. Let $P$ be the plane triangle $ABC$ lies on in a 3D space. We construct $A_1$ such that $A_1A \perp P$ and $AA_1= |p|$. Then, we put $A_1$ above the plane $P$ if $p>0$ in our equations, and below the page if $p<0$. We define $B_1$ and $C_1$ similarly, so $BB_1 = |q|$ and $CC_1 = |r|$.

![[Pasted image 20241122202600.png]]

Since $\frac{BX}{XC} = \frac{|q|}{|r|} = \frac{BB_1}{CC_1}$ (disregard negative as it only denotes direction), by HL similarity for right triangles $\triangle B_1BX \sim \triangle C_1CX$, so $\angle B_1XB = \angle C_1XC$. Moreover, since $B,X,C$ are collinear and $B_1$ and $C_1$ are both on the plane of $B,X,C$, it must mean that $B_1,C_1,X$ are collinear. Similarly, $A_1,C_1,Y$ are collinear and $B_1,A_1,Z$ are collinear. 
Consider the plane $Q$ containing triangle $A_1B_1C_1$. Note that the intersection of two planes in 3D space (considering they are not parallel, like in this case) must be a line. Since $X,Y,Z$ is a point on both plane, they are on it intersection, which means they are all on some line. Thus,
$X,Y,Z$ are collinear.
To prove the inverse, we use phantom points.
#todo

**Theorem 3.8 (Ceva's Theorem with Directed Lengths): Let $ABC$ be triangle and $X,Y,Z$ be points on lines $BC,CA,AB$ respectively in triangle $ABC$ (or the extension of the lines, outside the triangle), but distinct from its vertices. Then lines $AX,BY,CZ$ are concurrent if and only if
$$
\frac{AZ}{ZB} \cdot \frac{BX}{XC} \cdot \frac{CY}{YA} = 1
$$
where lengths are directed.**

Note in this case, either exactly one or three of $X,Y,Z$ lie strictly inside sides $BC,CA,AB$ in order to make it positive. Thus, this is the full form of Ceva's theorem as we have now accounted for the obtuse triangle case.
#todo

### 3.4 The Centroid and the Medial Triangle

Since $BM = MC$, we have $1 = \frac{BM}{MC} = \frac{[GMB]}{[GMC]}$. Thus, we let $x = [GMB] = [GMC]$ and define $y$ and $z$ similarly as shown.

![[Pasted image 20241122213457.png]]

By similar logic, $1 = \frac{BM}{MC} = \frac{[AMB]}{[AMC]} = \frac{x+2z}{x+2y}$, which means $y=z$. Similarly, we can show $x=y$ and $x = z$. Thus, the six areas of the triangle divided by the medians are all equal.

**Lemma 3.9 (Centroid Division): The centroid of a triangle divides the median into a $2:1$ ratio.**
By above, we have $\frac{AG}{GM} = \frac{[AGB]}{[MGB]} = \frac{2z}{x} = 2$. 

### 3.5 Homothety and the Nine-Point Circle

**Homothety** or **dilation** is when we dilate a figure from some center to create another figure similar to it. 

![[Pasted image 20241122220029.png]]

Formally, a homothety $h$ is a transformation defined by center $O$ and a real number $k$. It sends a point $P$ of the figure to another point $h(P)$, multiplying the distance from $O$ to $P$ by $k$. The number $k$ is thus called the **scale factor**. Note that $k$ can be negative, in which case we have a **negative homothety**. 

![[Pasted image 20241122220223.png]]

Thus, this is just a special case of similar triangle. Homothety preserves many things such as tangency, angles (both directed and non-directed), circles, etc. They do not preserve length (similarity), though homothety length is just scaled by $k$.  
Note that for two non congruent (different) parallel lines $AB$ and $XY$, we label the intersection point of lines $AX$ and $BY$ as $O$, then $O$ is the center of a homothety sending one segment to the other. Thus, parallel lines often indicate homothety. We can carry this idea to the following lemma.

**Lemma 3.10 (Homothetic Triangles): Let $ABC$ and $XYZ$ be non-congruent triangles such that $AB \parallel XY, BC \parallel YZ, CA \parallel ZX$. Then lines $AX,BY,CZ$ concur at some point $O$, and this $O$ is the center of a homothety mapping $\triangle ABC$ to $\triangle XYZ$.**
Reference: http://users.math.uoc.gr/~pamfilos/eGallery/problems/Similarities.pdf.
Let's take a homothety $h$ such that $X = h(A)$ and $Y = h(B)$. This is distinct because for every distinct parallel lines $AB$ and $XY$, there may exist exactly one $h$ such that the homothety translation is satisfied going from $AB$ to $XY$. Let $O$ be the intersection of $AX$ and $BY$. By Basic Proportionality Theorem, we have $h= \frac{|AB|}{|XY|} = \frac{|OA|}{|OX|} = \frac{|OB|}{|OY|}$. Consider a phantom point $Z'$ on line $OC$ such that $\frac{OC}{OZ'} = h$. Thus, $\triangle XYZ'$ is the homothety mapping of $\triangle ABC$ with center $O$ and scale factor $h$. This means by SSS that $\triangle XYZ' \sim \triangle ABC$. Since 3 lines are all parallel to each other, this must mean $\angle ZXY = \angle CAB = Z'XY$ and $\angle ZYX = \angle CBA = Z'YX$. Moreover, $\triangle XYZ$ and $\triangle XYZ'$ share side $AB$. Thus by ASA, $\triangle XYZ \cong \triangle XYZ'$ which means $Z = Z'$. Thus, $Z$ is on $OC$ and $O$ maps $\triangle ABC$ to $\triangle XYZ$.
==proof kinda sus==

**Lemma 3.11 (Nine-Point Circle): Let $ABC$ be triangle with circumcenter $O$ and orthocenter $H$. Let the midpoint of $OH$ be $N_9$, then the midpoints of $AB,BC,CA,AH,BH,CH$, and the feet of the altitudes of $\triangle ABC$, lie on a circle centered at $N_9$. Moreover, the radius of this circle is half the radius of $(ABC)$.**
![[Pasted image 20241123142140.png]]
Since homothety preserves circles, we take a homothety $h$ at (with respect to) $H$ with a scale factor of $\frac{1}{2}$. We proven in Lemma 1.17 that the reflection of the orthocenter over $AB,BC,CA$ and over its medians all lie on $(ABC)$. Since it's a reflection, the distance from $H$ to $BC$ and $BC$ to $(ABC)$ is the same. Thus, if we take homothety with a scale factor of $\frac{1}{2}$, it must be that all six points lie on $AB,BC,CA$, forming the foots of the altitudes and the midpoints of the sides. Then since we took the homothety with respect to $H$ with a scale factor of $\frac{1}{2}$, the center of the new circle must be the midpoint of $OH$, which we call $N_9$. Moreover, the length of the new circle centered at $N_9$ must be the original length times the scale factor. Thus, radius is half of original circle $(ABC)$.


**Problem 3.12: Give an alternative proof of Lemma 3.9 by taking a negative homothety.**
Let $D,E,F$ be the median for $AB,BC,CA$ of $\triangle ABC$ respectively. Note medial triangle $DEF$ is similar to triangle $ABC$ by a factor of $\frac{1}{2}$. This is because $AD = DB, BE = EC$, so by SAS $\triangle DBE \sim \triangle ABC$ where the side lengths have a $1:2$ ratio with $\triangle ABC$. Similarly, $\triangle FEC \sim \triangle ABC$ and $\triangle ADF \sim \triangle ABC$ and their side lengths all have a $1:2$ ratio with $\triangle ABC$. Moreover, by angle chasing, we get $\triangle DEF \sim \triangle ABC$ and since all sides of $DEF$ have $1:2$ ratio with the sides of $\triangle ABC$, it means the the scale factor mapping $\triangle ABC$ to $\triangle DEF$ is $|h| = \frac{1}{2}$. 
Since all sides of $\triangle DEF$ are parallel to $\triangle ABC$, by Lemma 3.10 the intersection of $CD, AE, BF$ is the center of homothety. This is just the intersection of the three medians which is the centroid $G$. There thus exists a homothety with scale factor $h = -2$, mapping $D$ to $C$, $E$ to $A$, and $F$ to $B$. Thus, the lines for mapping that connects to $G$ has a $2:1$ ratio. These lines are the medians, thus $G$ as the center of homothety must divide the median lines into a $2:1$ ratio.

**Lemma 3.13 (Euler Line): In triangle $ABC$, prove that $O,G,H$ (circumcenter, centroid, orthocenter) are collinear and that $G$ divides $OH$ in a $2:1$ ratio.**
![[Pasted image 20241123154315.png]]
By Nine-Point Circle, we know $H,N_9,O$ are collinear and that $OH : ON_9 = 2:1$. Note for any chord $XY$ in a circle with midpoint $M$, $OM$ is the perpendicular bisector of $XY$. Let $D,E,F$ be the medians of $AB,BC,CA$ respectively. We thus have, $OD \perp AB, OE, \perp BC, OF \perp CA$. Since $DE \parallel CA, DF \parallel BC, EF \parallel AB$, we have $OD \perp EF, OE, \perp DF, OF \perp DE$, which means $O$ is the orthocenter of $\triangle DEF$. By 3.12, a homothety with center $G$ and scale factor $-2$ can map $\triangle DEF$ to $\triangle ABC$. Thus, $O$ can be mapped to $H$. Since all homothety mappings must pass through it's center $G$, it must be that $O,G,H$ are collinear. Moreover, since the scale factor is $-2$ going from $O$ to $H$ with respect to $G$, it must be that $HG : GO = 2:1$.

### 3.6 Example Problems

**Example 3.14 (EGMO 2012/7): Let $ABC be acute-angled triangle with circumcenter $T$ and orthocenter $H$. Let $K$ be a point of $T$, on the other side of $BC$ from $A$. Let $L$ be the reflection of $K$ across $AB$, and let $M$ be the reflection of $K$ across $BC$. Let $E$ be the second point of intersection of $T$ with the circumcircle of triangle $BLM$. Show that lines $KH, EM,$ and $BC$ are concurrent. 
![[Pasted image 20241123162159.png]]


