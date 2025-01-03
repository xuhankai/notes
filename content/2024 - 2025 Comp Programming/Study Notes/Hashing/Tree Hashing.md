**Source:** 
- https://codeforces.com/blog/entry/113465

We want to check if two rooted trees are isomorphic (can be arranged into the same structure). 
Since vertex numbers doesn't matter, we may only operate based on the structure of the tree.

We can hash in the following way:
- If a vertex is a leaf, assign some constant $c$ as its value
- Else, use some function that uses the sorted list of the hash values of its children (sorted since same structure must have same order of children)
Then, the hash of the tree is the hash value of the root.

We can use some hash functions such as $h(v) = \sum_{u \in \textnormal{sorted by hash}}(child(v)) h(u)^2 + h(u)p^i + c) \pmod{2^{64}}$ or something like that. However, this may lead to collisions through hacks.

We can instead use a **no collisions** hash approach.
We simply maintain a  ``map<vi,int>val``, where each distinct "array of hash values of children" is mapped to a hash value.

For vertex $v$, first sort the hash array of all children $u$. Then, if we've never seen this sorted array before in ``val``, we assign a distinct hash value $c$ to this specific configuration and pass in this array as the key. This $c$ will then be the hash value of current vertex $v$

For time complexity: The total size of all arrays is the sum of all edges, which is $n-1$. Thus, total time of accessing the arrays in map for all nodes is $O(n\log(n))$. Similarly, comparing a subtree with array size $sz$ takes $O(sz)$ time and doing so in a map takes total $O(sz \log(n))$ times. Since sum of $sz$ is $n-1$, comparing each subtree into the map also takes $O(n\log(n))$.

Thus, we can safely perform this hash without worrying about collisions or TLE.



**Example 1:** https://codeforces.com/contest/1800/problem/G

First hash the tree so that we can get the hash value of every subtree. We then check by recursing down the tree. For each node $v$, the tree is symmetric if for every children but at most 1, its structure (hash value) matches some other children of $v$. Thus, we store $cnt[x]$ to count the number of times the hash value appears in children of $v$. Then, we can eliminate everything of that structure if $cnt[x]$ is even. If it's odd, we must have one child with that structure left at the end.
If the number of odds > 1, we have two subtrees with different structures left, so the tree isn't symmetrical and return false.
If the number of odds = 1, we have exactly one subtree left, so we just go down to this child and recurse to see if this subtree child is symmetrical.
If the number of odds = 0, we have canceled everything out, so we just return true.

**Source:** https://peehs-moorhsum.blog.uoj.ac/blog/7891