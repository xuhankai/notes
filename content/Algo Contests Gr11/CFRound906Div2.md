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



**Problem E1**
Since k = 2, we only need to worry about days that have 2 intervals of rain or fewer. This is because if there are 3 or more intervals, then no way eliminating 2 days can prevent rain. 
If k = 0, there is no need to eliminating anything, so we can just add that to ans
We want to stop rain on as many days as possible by eliminating 2 intervals. 

We call a day one if the day is contained by only 1 interval. We call a day two if the day is contained by only 2 intervals
Let $one_i$ be the number of ones contained by interval $i$ and $two_i$ be the number of twos contained by interval $i$ 

If the optimal 2 intervals we eliminate $i$ and $j$  **do not intersect**, we can only eliminate the ones in both intervals since we cant eliminate twos cause intervals dont intersect. So we can eliminate $one_i + one_j$ days. 

If the two intervals do intersect, we know the answer must be the number of twos in the intersection + $ones_i + ones_j$.

The max of the two cases is the answer.

10-31-2023 Note: is clist broken? Why all purple problems ez af?