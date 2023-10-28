**Problem D**
Let the optimal solution involve a connection that does not connect with A first.
Let CC x connect with y with sizes Ax and Ay. This must mean Ax + Ay >= xyc.
So either Ax >= xyc/2 or Ay >= xyc/2. WLOG let Ax >= xyc/2. It is definately 
more optimal then to first connect x and 1, since min(A1) = 0, and Ax + 0 >= xc/2 
must satisfy since xyc >= xc. Then, we can connect Ay with 1 since Ax + A1 = min(Ax),
Ax + A1 + Ay >= xyc >= yc.
Thus, the optimal solution involved connecting as many things with 1 as possible. 
To do this, we sort by the lowest people size needed to connect 1 with x, then simply
loop through by sorted order and add people to guarantee as many people in the CC
of 1 as possible in any point in time. 