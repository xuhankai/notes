
### Path Counting
> [!QUESTION]
> Given a n x m grid, we want to move from bottomr left corner (0,0) to top right corner (n,m). If we can only go up or right, how many paths are there from (0,0) to (n,m)?


This seems rlly hard, until you realize that ==we must go n times to the right and m times up.==

The only thing that differs two paths is when we go right and when we go up. Consider a sequence of moves that form a path RURUU...RUR.

This is a string of length n+m with n 'R' letters and m 'U' letters. Each path can be represented as unique string( each string gives a unique set of directions we have to follow to go from (0,0) to (n,m)) and each string represents a unique path. Thus, there is a bijection between the number of strings/directions and the number of paths.

So it is left to find out the number of distinct strings. We know that there are n+m characters in this string and n characters have to be 'R' and the rest m characters have to be 'U'.
Thus there are $\binom{n+m}{n}$ ways to construct a string and thus $\binom{n+m}{n}$ unique paths.

- The power of bijections is that we can turn seemingly complicated problems into ones that are easier for us to count by proving that the two sets have the same number of elements.

