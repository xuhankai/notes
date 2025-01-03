### 6.1 Definitions
A **complex number** is a number in the form of $z = a+bi$ where $a$ and $b$ are real numbers and $i = \sqrt{-1}$. The real part is denoted as $a = Re(z) = \frac{z + \overline{z}}{2}$ and the imaginary part is denoted as $b = Im(z) = \frac{z-\overline{z}}{2i}$. 
**Every** complex number can be expressed in **polar form** as 
$$
z = r(\cos{\theta}+i\sin{\theta}) = re^{i\theta}
$$
for some nonnegative real $r$ (by **Euler's formula** which states $e^{i\theta} = \cos{\theta}+i\sin{\theta}$). Thus, **every** complex number can be plotted on the complex plane as point $(a,b)$.

![[Pasted image 20241123110209.png]]
The **magnitude** of $z = a+bi = re^{i\theta}$, denoted as $|z|$ is equal to 
$$
|z| = r = \sqrt{a^2+b^2}.
$$
The angle in radius $\theta$ is the **argument** of $z$, denoted as $\arg{z}$. We use $\theta \pmod{360^{\circ}}$ as that is the period of $\sin$ and $\cos$ functions, so $30^{\circ} \equiv 390^{\circ} \pmod{360^{\circ}}$ makes no difference in calculations.
The **complex conjugate** of $z$ is the number
$$
\overline{z} = a-bi = re^{-i\theta}.
$$
It is the reflection of $z$ over the real (x) axis. For complex numbers $w$ and $z$, the following properties hold:
$$
\begin{align}
\overline{w+z} &= \overline{w} + \overline{z}, \\
\overline{w-z} &= \overline{w} - \overline{z}, \\
\overline{w\cdot z} &= \overline{w} \cdot \overline{z}, \\
\overline{w\div z} &= \overline{w} \div \overline{z},
\end{align}
$$
so essentially just we can separate conjugates. Thus, we may use these rules to write things like $\overline{\left(\frac{z-a}{b-a}\right)} = \frac{\overline{z} - \overline{a}}{\overline{b} - \overline{a}}$. Also 
$$
|z|^2 = z\overline{z}
$$
since $a^2+b^2 = (a+bi)(a-bi) = a^2 - (-b^2)$. 

For this chapter, We denote a point on the complex plane with an upper case letter (For ex: $A$) that corresponds to the complex number denoted by the corresponding lowercase letter (For ex: $a$). 

### 6.2 Adding and Multiplying Complex Numbers
Complex number can be viewed as vectors $(u,v)$ as the corresponding complex number is $u+vi$. Thus, properties of vector addition (Appendix A.3) can also be applied to complex numbers. Thus, the following are true for complex numbers:
- The midpoint $M$ of $AB$ is $m = \frac{1}{2}(a+b)$.
- Three points $A,B,C$ are collinear if and only if $c = \lambda a + (1-\lambda)b$ for some real number $\lambda$. 
- Centroid $G$ of triangle $ABC$ is $g = \frac{1}{3}(a+b+c)$. 
- Quadrilateral $ABCD$ is a parallelogram if and only if $a+c = b+d$.
Similar to vectors, adding complex numbers corresponds to translation.
Complex numbers can also be multiplied. If $z_1 = r_1e^{i\theta_1}$ and $z_2 = r_2e^{i \theta_2}$, then $z_1z_2 = r_1r_2e^{i(\theta_1 + \theta_2)}$. Thus,
$$
|z_1z_2| = |z_1||z_2|, \arg{z_1}+\arg{z_2}, \textnormal{ for all }z_1,z_2 \in \mathbb{C}.
$$
Note that since we are taking $\arg{z}$ mod $360^{\circ}$, $\arg{z_1z_2} \equiv \arg{z_1}+\arg{z_2} \pmod{360^{\circ}}$. Thus, multiplication means we essentially add the angles and multiply the lengths.

**Summarize:** This means adding complex numbers corresponds to translations, multiplication corresponds to rotation and dilation.


**Example 6.1: Multiplying a complex number $z$ by $i$ is equivalent t rotating by $90^{\circ}$ counterclockwise around the origin.**
We have $i = 0 + i\sin{\theta}, \sin{\theta} = 1, \arg{i} = \theta = \frac{\pi}{2} = 90^{\circ}$. Let $z_2 = i = e^{90^{\circ}i}$. We have $z_1z_2 = r_1e^{i(\theta_1+90^{\circ})}$ which is just the original scale factor of $z_1$, but $90^{\circ}$ is added to the angle meaning it rotated $90^{\circ}$ counterclockwise.
Moreover, we can also think about multiplying $i$ as just going from $a+bi$ to $-b,ai$, so from point $(a,b)$ to $(-b,a)$ on the complex plane.
![[Pasted image 20241123220051.png]]

If we want to rotate a point $90^{\circ}$ counterclockwise about some other point $w$, we must translate the original diagram so that $w \rightarrow 0$, apply the $90^{\circ}$ rotation by multiplying $i$, then translation the whole thing back. To apply translation $w\rightarrow 0$, the new coordinates for $z$ is $(a_z-a_w,b_z-b_w)$ which corresponds to $z-w$. Similarly, translating back is $z+w$. Thus, the point after rotating $z$ about $w$ by $90^{\circ}$ counterclockwise is
$$
z \rightarrow (z-w)i + w.
$$
We can then generalize for any complex (non-zero) number as the degree. For any complex number $w$ and non-zero $\alpha$, the mapping
$$
z \rightarrow \alpha(z-w)+w
$$
	is a **spiral similarity** that rotates $z$ by $\arg{a}$ and dilates by $|\alpha|$. 



**Lemma 6.2 (Complex Reflection): Let $W$ be the reflection of $Z$ over line $AB$. Then,
$$
w = \frac{(a-b)\overline{z} + \overline{a}b - a\overline{b}}{\overline{a}-\overline{b}}.
$$
![[Pasted image 20241212221142.png]]

We want to perform transformations so it becomes simpler to work with. Specifically we want to make AB as the real/x-axis. First, map $a$ to the origin so that $a \rightarrow 0, z \rightarrow z-a, w \rightarrow w-a, b \rightarrow b-a$ (shown above from image 1 to 2). By spiral similarity, multiplying everything by the same complex number will maintain homothety while rotating the angle. We can thus map $b-a$ onto the real axis by multiplying everything by $\frac{1}{b-a}$. This is because $b-a \cdot \frac{1}{b-a} = 1$ which is on the x axis (from image 2 to 3).
This then becomes simple, as $\frac{w-a}{b-a}$ is just the reflection of $\frac{z-a}{b-a}$ about the $x$ axis, which means $\frac{w-a}{b-a} = \overline{\left(\frac{z-a}{b-a}\right)} = \frac{\overline{z}-\overline{a}}{\overline{b}-\overline{a}}$. Then we can do simple algebra to get $w$:
$$
\begin{align}
w &= (b-a)\frac{\overline{z}-\overline{a}}{\overline{b}-\overline{a}}+a \\
&= \frac{(b-a)(\overline{z}-\overline{a}) + a(\overline{b}-\overline{a})}{\overline{b}-\overline{a}} \\
&= \frac{(a-b)(\overline{z}-\overline{a}) - a(\overline{b}-\overline{a})}{\overline{a}-\overline{b}} \\
&= \frac{(a-b)\overline{z} - a\overline{a}+\overline{b}a - a\overline{b}+a\overline{a}}{\overline{a}-\overline{b}} \\
&= \frac{(a-b)\overline{z} +a\overline{b} - a\overline{b}}{\overline{a}-\overline{b}}.
\end{align}
$$

**Lemma 6.3: Show that the foot of the altitude from $Z$ to $AB$ is given by**
$$
\frac{(\overline{a}-\overline{b})z + (a-b)\overline{z}+\overline{a}b - a\overline{b}}{2(\overline{a}-\overline{b})}.
$$
Let $w$ be the foot of altitude from $Z$ to $AB$ (what we're looking for). We can map $AB$ to the x axis. First map $a$ to $0$ so $a\rightarrow 0, b \rightarrow b-a, z \rightarrow z-a, w \rightarrow w-a$, Then, map $AB$ to $x$ axis by multiplying $\frac{1}{b-a}$. So the current mapping is $a\rightarrow 0, b \rightarrow 1, z \rightarrow \frac{z-a}{b-a}, w \rightarrow \frac{w-a}{b-a}$. Note that the coordinate for $\frac{w-a}{b-a}$ is just $(Re(\frac{z-a}{b-a}),0)$. Thus, $\frac{w-a}{b-a} = \frac{\frac{z-a}{b-a} + \overline{\left(\frac{z-a}{b-a}\right)}}{2}$. We then use simple algebra to get 
$$
\begin{align}
w &= (b-a)\frac{\frac{z-a}{b-a} + \overline{\left(\frac{z-a}{b-a}\right)}}{2} + a \\
&= \frac{z-a + (b-a) \left(\frac{\overline{z}-\overline{a}}{\overline{b}-\overline{a}}\right) +2a}{2} \\
&= \frac{(z+a)(\overline{b}-\overline{a}) + (b-a) (\overline{z}-\overline{a})}{2(\overline{b}-\overline{a})} \\
&= \frac{(\overline{a}-\overline{b})z + (a-b)\overline{z} +a\overline{a}-a\overline{b} - a\overline{a} + \overline{a}b}{2(\overline{a}-\overline{b})} \\
&= \frac{(\overline{a}-\overline{b})z + (a-b)\overline{z} -a\overline{b} + \overline{a}b}{2(\overline{a}-\overline{b})}.
\end{align}
$$


### 6.3 Collinearity and Perpendicularity

**Proposition 6.4 (Properties of Complex Conjugates): Let $z$ be a complex number. Then,
- $z = \overline{z}$ if and only if $z$ is a real number.
- $z + \overline{z} = 0$ if and only if $z$ is pure imaginary; that is, $z = ri$ for some real number $r$ ($Re(z) = 0$).

**Lemma 6.5 (Perpendicularity Criterion): The complex numbers $a,b,c,d$ have the property $AB \perp CD$ if and only if**
$$
\frac{d-c}{b-a} + \overline{\left(\frac{d-c}{b-a}\right)} = 0.
$$
Translations preserve angles, so we want to map $AB$ onto the x axis. We can translate $DC$ to $d-c$ and $AB$ to $b-a$ so that both lines stem from the origin. Then, map line $b-a$ to the x-axis by multiplying $\frac{1}{b-a}$, so $CD \rightarrow \frac{d-c}{b-a}$. For $AB \perp CD$, it must be that $\frac{d-c}{b-a}$ is parallel to the y-axis. Also, since $\frac{d-c}{b-a}$ stems for the origin, it must mean $\frac{d-c}{b-a}$ is on the y-axis. Thus, $z = \frac{d-c}{b-a}$ is a pure imaginary number meaning $z + \overline{z} = 0$ by Proposition 6.4. Thus, $\frac{d-c}{b-a} + \overline{\left(\frac{d-c}{b-a}\right)} = 0$. 

**Lemma 6.6: Complex numbers $z,a,b$ are collinear if and only if**
$$
\frac{z-a}{z-b} = \overline{\left(\frac{z-a}{z-b}\right)}
$$
**Problem 6.8: Prove Lemma 6.6.**
Mapping $z$ to the original preserves angles. Thus, we can do $AZ \rightarrow a-z$ and $BZ \rightarrow b-z$. Two lines are collinear if their angle is $0^{\circ}$ or $180^{\circ}$. Moreover, rotating by $0^{\circ}$ or $180^{\circ}$ means multiplying $z$ by $w = r(\cos{180^{\circ}x} + i \sin{180^{\circ}x}) = r(\cos{180^{\circ}x}) \in \mathbb{R}$. Thus, it must mean that $a-z = w(b-z), \frac{a-z}{b-z} = w \in \mathbb{R}$. Thus by Proposition 6.4, $\frac{z-a}{z-b} \in \mathbb{R} \iff \frac{z-a}{z-b} = \overline{\left(\frac{z-a}{z-b}\right)}$.


**Theorem 6.7 (Complex Shoelace Formula): If $a,b,c$ are complex numbers, then the signed area of triangle $ABC$ is given by**
$$
\frac{i}{4}
\begin{bmatrix}  
a & \overline{a} & 1 \\  
b & \overline{b} & 1 \\
c & \overline{c} & 1
\end{bmatrix}.
$$
#todo

### 6.4 The Unit Circle
The **unit circle** is the set of complex numbers $z$ with $|z| = 1$ (the circle centered at $(0,0)$ with radius $1$). 

**Proposition 6.9: For any $z$ on the unit circle, $\overline{z} = \frac{1}{z}$.**
Note that in this case, $1 = |z|^2 = z\overline{z} = z \cdot \frac{1}{z}$. Thus, $\overline{z} = \frac{1}{z}$. 

**Example 6.10: If $a,b,c,x$ lie on the unit circle, then $ax + bc = 0$ if and only if $AX \perp BC$.**
![[Pasted image 20241213211930.png]]
By Lemma 6.5, $AX \perp BC$ if and only if $\frac{x-a}{b-c} + \overline{\left(\frac{x-a}{b-c}\right)} = \frac{x-a}{b-c} + \frac{\overline{x}-\overline{a}}{\overline{b}-\overline{c}} = 0.$ Then, we use the fact that $\overline{z} = \frac{1}{z}$ (Proposition 6.9) to get
$$
\begin{align}
0 &= \frac{x-a}{b-c} + \frac{\overline{x}-\overline{a}}{\overline{b}-\overline{c}} \\
&= \frac{x-a}{b-c} + \frac{\frac{1}{x}-\frac{1}{a}}{\frac{1}{b}-\frac{1}{c}} \\
& = \frac{x-a}{b-c} + \frac{\frac{a-x}{ax}}{\frac{c-b}{bc}} \\
& = \frac{x-a}{b-c} + \frac{x-a}{b-c} \cdot \frac{bc}{ax} \\
& = \frac{x-a}{b-c}\left(1+\frac{bc}{ax}\right).
\end{align}
$$
Since $x \neq a$ it must be that $1+\frac{bc}{ax} = 0, \frac{bc}{ax} = -1, bc = -ax$. Thus, $ax+bc = ax -ax = 0$. 

**Lemma 6.11 (Complex Foot): If $a$ and $b$, $a \neq b$, are on the unit circle and $z$ is an arbitrary complex number, then the foot from $Z$ to $AB$ is given by**
$$
\frac{1}{2}(a+b+z - ab\overline{z}).
$$
Referring to Lemma 6.3 and using $\overline{z} = \frac{1}{z}$, we have  
$$
\begin{align}
w &= \frac{(\overline{a}-\overline{b})z + (a-b)\overline{z}+\overline{a}b - a\overline{b}}{2(\overline{a}-\overline{b})} \\
&= \frac{1}{2}\left(z + \frac{(a-b)\overline{z}+\overline{a}b - a\overline{b}}{\overline{a}-\overline{b}}\right) \\
&= \frac{1}{2}\left(z + \frac{(a-b)\overline{z}+\frac{b}{a} - \frac{a}{b}}{\frac{1}{a} - \frac{1}{b}}\right) \\
&= \frac{1}{2}\left(z + \frac{(a-b)\overline{z}}{\frac{b-a}{ab}}+\frac{\frac{b^2-a^2}{ab}}{\frac{b-a}{ab}}\right) \\
&= \frac{1}{2}\left(z -ab\overline{z} + (a+b) \right).
\end{align}
$$


**Lemma 6.12 (Complex Euler Line): Let $ABC$ be a triangle, and assume $a,b,c$ lie on the unit circle. Then,**
- The circumcenter is $o = 0$.
- The centroid is $g = \frac{1}{3}(a+b+c)$.
- The orthocenter is $h = a+b+c$. 
**Moreover, points $O,G,H$ are collinear in a $OG : GH = 1:2$ ratio.**

Since $a,b,c$ lie on the unit circle, by definition the circumcircle is the origin, so $o = 0$. 

### 6.5 Useful Formulas



### 6.6 Complex Incenter and Circumcenter








