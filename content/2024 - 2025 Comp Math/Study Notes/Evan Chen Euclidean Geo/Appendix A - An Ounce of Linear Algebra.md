### A.1 - Matrices and Determinants
A **matrix** is rectangular array of numbers such as
$$
\begin{bmatrix}  
1 & 2 & 3\\  
a & b & c  
\end{bmatrix}.
$$
A **determinant** of a matrix $A$ is denoted as $\det{A}$ or $|A|$. It is a special value associated with matrix $A$.
For 2x2 and 3x3 matrix, the determinant is
$$
\begin{bmatrix}  
a & b \\  
c & d  
\end{bmatrix} = ad-bc.
$$
and
$$
\begin{bmatrix}  
a_1 & a_2 & a_3 \\  
b_1 & b_2 & b_3 \\
c_1 & c_2 & c_3
\end{bmatrix} = a_1\begin{bmatrix}  b_2 & b_3 \\  c_2 & c_3 \\ \end{bmatrix}+a_2\begin{bmatrix}  b_3 & b_1 \\  c_3 & c_1 \\ \end{bmatrix}+a_3\begin{bmatrix}  b_1 & b_2 \\  c_1 & c_2 \\ \end{bmatrix}.
$$
The 2x2 sub-matricies are called **minors**. There are some properties of determinants:
**Proposition A.1: (Swapping Rows or Columns):** Let $A$ be a matrix and let $B$ be a matrix formed by swapping a pair of rows or a pair of columns of $A$. Then, $\det A = - \det B$.

**Proposition A.2 (Factoring):** For any real number $k$,
$$
\begin{bmatrix}  
ka_1 & a_2 & a_3 \\  
kb_1 & b_2 & b_3 \\
kc_1 & c_2 & c_3
\end{bmatrix} = k \cdot \begin{bmatrix}  
a_1 & a_2 & a_3 \\  
b_1 & b_2 & b_3 \\
c_1 & c_2 & c_3
\end{bmatrix}
$$
and the same holds for other rows or columns.

**Theorem A.3 (Elementary Row Operations):** For any real number $k$,
$$
\begin{bmatrix}  
a_1 & a_2 & a_3 \\  
b_1 & b_2 & b_3 \\
c_1 & c_2 & c_3
\end{bmatrix} = 
\begin{bmatrix}  
a_1+kb_1 & a_2+kb_2 & a_3+kb_3 \\  
b_1 & b_2 & b_3 \\
c_1 & c_2 & c_3
\end{bmatrix}.
$$
In other words, we can subtract multiple rows or columns from each other

### A.2 Cramer's Rules
A method for converting system of equations into determinant.

**Theorem A.4 (Cramer's Rule):** Consider the system of equations
$$
\begin{align}
a_xx + a_yy + a_zz &= a \\
b_xx + b_yy + b_zz &= b \\
c_xx + c_yy + c_zz &= c 
\end{align}.
$$
Then the solution for $x$ is
$$
x = 
\begin{bmatrix}  
a & a_y & a_z \\  
b & b_y & b_z \\
c & c_y & c_z
\end{bmatrix} \div  
\begin{bmatrix}  
a_x & a_y & a_z \\  
b_x & b_y & b_z \\
c_x & c_y & c_z
\end{bmatrix}
$$
where the denominator is non-zero. Similar ideas hold for $y$ and $z$. 

Proof: Using only the rules of matrix, we have
$$
\begin{bmatrix}  
a & a_y & a_z \\  
b & b_y & b_z \\
c & c_y & c_z
\end{bmatrix} =
\begin{bmatrix}  
a_xx + a_yy + a_zz & a_y & a_z \\  
b_xx + b_yy + b_zz & b_y & b_z \\
c_xx + c_yy + c_zz & c_y & c_z
\end{bmatrix} =
\begin{bmatrix}  
a_xx & a_y & a_z \\  
b_xx & b_y & b_z \\
c_xx & c_y & c_z
\end{bmatrix} = x \cdot
\begin{bmatrix}  
a_x & a_y & a_z \\  
b_x & b_y & b_z \\
c_x & c_y & c_z
\end{bmatrix}
$$
by first subbing in the equation for $a$, then erasing $y$ times the 2nd column and $z$ times the 3rd column from the first column, then taking out the $x$. Thus, we can miraculously isolate the $x$.


### A.3 Vectors and the Dot Product
A **vector** is an arrow with both magnitude( length, written as $|\vec{v}|$) and direction. A vector pointing from point $A$ to $B$ is denoted as $\overrightarrow{AB}$. 
We usually define some point $O$ as the origin, called a **zero vector.** Then we can associate every point $P$ with the vector $\overrightarrow{OP}$, abbreviated as $\vec{P}$. 
Vectors can be used to represent coordinates. In the $xy$ plane, a vector pointing from $(0,0)$ to $(x,y)$ is denoted as $\langle x,y \rangle$. The zero vector is then $\langle 0,0 \rangle$.

We can perform **vector addition**: $\langle x_1,y_1 \rangle + \langle x_2,y_2 \rangle = \langle x_1+x_2,y_1+y_2 \rangle$ (based on [Error at p. 218][https://web.evanchen.cc/upload/geombook-errata.pdf]). 
![[Pasted image 20241014010116.png]]
Vectors can also be scaled by real numbers:
![[Pasted image 20241014010230.png]]
so we can find the midpoint $M$ of segment $AB$ by doing $\vec{M} = \frac{1}{2}(\vec{A}+\vec{B})$.

The **dot product** of two vectors $v$ and $w$ is 
$$
\vec{v} \cdot \vec{w} = |\vec{v}||\vec{w}|\cos(\theta)
$$
where $\theta$ is the angle in between the two vectors. We also have
$$
\langle a,b \rangle \cdot \langle x,y \rangle = ax + by.
$$
The dot product has the following properties:
- It is distributive and commutative.
- $|\vec{v}|^2 = \vec{v} \cdot \vec{v}$.
- Two (nonzero) vectors $\vec{v}$ and $\vec{w}$ are perpendicular if and only if $\vec{v} \cdot \vec{w} = 0$.

Let $\triangle ABC$ have circumcenter $O$. If we set $O$ as the zero vector, then 
$$
|\vec{A}| = |\vec{B}| = |\vec{C}| = R
$$
where $R$ is circumradius. Then by definition $|\vec{A}|\cdot|\vec{A}|=R^2$.
![[Pasted image 20241014012723.png]]

Moreover, $\vec{A} \cdot \vec{B} = R^2\cos(2C)$. We also have $\cos(2C) = 1-2\sin^2(C) = 1-2(\frac{c}{2R})^2 = 1-\frac{c^2}{2R^2}$. Thus,
$$
\vec{A} \cdot \vec{B} = R^2\left(1-\frac{c^2}{2R^2}\right) = R^2 - \frac{1}{2}c^2.
$$
Similarly, $\vec{B} \cdot \vec{C} = R^2 - \frac{1}{2}a^2$ and $\vec{C} \cdot \vec{A} = R^2 - \frac{1}{2}b^2$. In ==Chapter 6== #todo, let $H$ be the orthocenter, then $\vec{H} = \vec{A} + \vec{B} + \vec{C}$. By this, we can compute $OH$ through dot product:
$$
\begin{align}
OH^2 = |\overrightarrow{OH}|^2 &= |\vec{H}|^2 \\
&= \vec{H}\cdot\vec{H}\\
&= (\vec{A} + \vec{B} + \vec{C}) \cdot (\vec{A} + \vec{B} + \vec{C}) \\
&= \vec{A} \cdot \vec{A} + \vec{B} \cdot \vec{B} + \vec{C} \cdot \vec{C} + 2(\vec{A}\cdot\vec{B}+\vec{B}\cdot\vec{C}+\vec{A}\cdot\vec{C}) \\
&=  2R^2+2\left(R^2 - \frac{1}{2}a^2+R^2 - \frac{1}{2}b^2+R^2 - \frac{1}{2}c^2\right) \\ 
&=  9R^2 - a^2-b^2-c^2.
\end{align}
$$




