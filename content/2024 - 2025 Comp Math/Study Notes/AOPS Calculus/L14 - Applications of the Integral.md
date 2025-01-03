Other than area under the curve, we can also use them to compute **volumes**.

We can estimate the volume of non-trivial cylindrical shapes. 
      
We can imagine the 3d shape as a 2d curve rotated about the $x$-axis. We can then split the shape into small cylinders (similar to how we split the area under the curve into small rectangles). 

We can partition the interval as $a = x_0 < x_1 < x_2 < \cdots < x_n = b$ (on the 2d graph). For each cylinder in range $(x_i,x_{i+1})$, the height is $x_{i+1}-x_i$ (width of rectangle) and the radius is $f(w_i)$ where $w_i$ is a point in the interval ($w_i \in [x_i,x_{i+1}]$). 
![[Pasted image 20250103123128.png]]
The volume of one of the circular cylinders is thus $\pi (f(w_i))^2(x_{i+1}-x_i)$. The sum of the volumes of the circular cylinders is
$$
\sum_{0}^{n-1}\pi(f(w_i))^2(x_{i+1}-x_i) = \sum_{0}^{n-1}\pi (f(w_i))^2 \triangle x_i.
$$
We have an approximation of volume of figure wen the height $\triangle x_i$ gets smaller ($n$ approaches $\infty$). The Riemann sum has function $g(x) = \pi(f(x))^2$. As height $\triangle x_i$ gets smaller, we can write the limit as an integral. 
The volume of the object resulting when we rotate the portion of the curve $y = f(x)$ over the interval $[a,b]$ around the $x$-axis is thus
$$
\pi \int_a^b (f(x))^2dx.
$$
Here, the cylinder at position $x$ has radius $f(x)$ and height $dx$, so its volume is $\pi(f(x))^2dx$.











