 A **limit** describes what happens to the output of a function as its input "approaches" some value in $\mathbb{R}$. 

Let $g(x)=x^2-1, h(x) = x-1, f(x) = \frac{g(x)}{h(x)}$. The domain of $f$ is $\{x | x \neq 1, x \in \mathbb{R} \}$. Since $f(x) = \frac{(x-1)(x+1)}{x-1}$, the graph of $f$ is $f(x) = x+1$ except with a hole at when $x = 1, y = x+1 = 2$ at point $(1,2)$. We can say the the graph get *arbitrarily* close to point $(1,2)$, though never reaching $(1,2)$. 

We can write as $\lim_{x\rightarrow 1}f(x) = 2$, the limit of $f(x)$ as $x$ approaches $1$ is $2$. 

Note that for small number $\delta>0$ and some value $a$, if $|x-a|< \delta$, then $a-\delta < x < a+\delta$.   

Definitions:
- Epsilon $\epsilon$ usually denotes a small positive number. 
- $P \implies Q$ means $P$ implies  $Q$ (if $P$ is true, $Q$ is true).

Let $f$ be a real-values function.
We say that $\lim_{x \rightarrow a}f(x) = L$ if for every $\epsilon > 0$, there exists $\delta > 0$ such that
$$
0 < |x-a| < \delta \implies |f(x)-L|<\epsilon.
$$

That is, if (for every $\epsilon$ there is a $\delta$ such that (if $x$ is within $\delta$ of $a$ but not equal to $a$, then $f(x)$ is within $\epsilon$ of $L$)), then the limit of $f(x)$ as $x$ approaches $a$ is $L$.
![[Pasted image 20241231164557.png]]

confusing #todo 

This means that no matter how close you squeeze the blue lines to $y = L$ ($\epsilon$ closer to $0$), you can still pick vertical red lines (pick $\delta$ ) that are close to the vertical line $x=a$ such that the region bounded by the red and blue lines contains some part of the graph $y = f(x)$.

Choosing $\epsilon$ sets the width of the horizontal blue lines. If limit exists, we can always choose red lines that cut off a piece of the function (graphically) in between the horizontal blue lines.

If we choose any positive distance $L$ (called $\epsilon$), we are able to find an interval of $x$ values around $a$ of the form $(a-\delta, a+\delta)$ such that $f(x)$ lies in interval $(L-\epsilon, L+\epsilon)$ for every $x \neq a$ in interval $(a-\delta, a+\delta)$.

Since $\epsilon$ is any positive value, we take it as close to $0$ as possible (but not equal to $0$). No matter how small $\epsilon$ is, we can find interval $(a-\delta, a+\delta)$ around $a$ for some positive number $\delta$.

If we can do this, we say $\lim_{x\rightarrow a}f(x) = L$.


#### Sets
A **set** is a collection of objects. The "objects" can be anything (or nothing, empty set). The objects are called **elements** of the set.
Sets don't count the same thing multiple times (otherwise called multisets). Something is either in the set once, or not in the set.
Order in sets doesn't matter.

To define a set, we can 
- List out the set: $S = \{1,2,3,...\}$.
- Provide properties $S = \{x \mid x \neq 1, x \in \mathbb{R}\}$. Here, $\mid$ means "such as".

If an object $x$ is an element of set $S$, we write $x \in S$ ("x in S"). If $x$ is not an element of $S$, we write $x \notin S$. By definition, for any object $x$ and any set $S$, either $x \in S$ or $x \notin S$, but never both.

The set with the smallest size is an empty set (no elements inside), denoted by $\{\} = \emptyset$. For example $\{x \mid x^2<0, x \in \mathbb{R}\} = \emptyset$. 

If $S$ is a finite set, then $|S|$ or $\#(S)$ denote the size of $S$. We say $|S|$ is the **cardinality** of $S$.
Since $\emptyset$ has $0$ elements, $|\emptyset| = 0$. 

A set $A$ is a **subset** of set $B$ if every element of $A$ is also an element of $B$. This is denoted by $A \subseteq B$. 
A set $A$ is a **proper subset** of set $B$ if $A$ is a subset of $B$, but $A \neq B$. This is denoted by $A \subset B$ or $A \subsetneq B$. 
Note every set is a subset of itself. That is $S \subseteq S$.
If $A$ is not a subset of $B$, we say $A \not\subseteq B$.

A **power set** of $S$ denoted as $P(S)$ is a set whose elements are all of the subsets of $S$. Thus, $P(S) = \{T \mid T \subseteq S\}$.
Thus, $P(\emptyset) = \{\{\}\}$, so $|P(\emptyset)| = 1$. 
For any set $S$, if $|S| = n$, then $|P(S)| = 2^n$ since when choosing a subset, for each element we either choose it or don't, so $2$ choices.

The **union** of two sets $A$ and $B$, denoted by $A \cup B$, is the set of all objects that are elements of at least one of $A$ or $B$. Thus, $A \cup B = \{x \mid x \in A \textnormal{ or } x\in B\}$. 

The **intersection** of two sets $A$ and $B$, denoted by $A \cap B$, is the set of all objects that are elements of both $A$ and $B$. Thus, $A \cap B = \{x \mid x\in A \textnormal{ and } x \in B\}$.

Let $A$ and $B$ be sets such that $A \subseteq B$. Then, $A \cup B = B$ and $A \cap B = A$.

Union and Intersection are distributive. That is, if $A,B,C$ are sets, then
$$
\begin{align}
A \cap (B \cup C) &= (A \cap B) \cup (A \cap C) \\
A \cup (B \cap C) &= (A \cup B) \cap (A \cup C).
\end{align}
$$


To prove two sets $A$ and $B$ are equal, we must show every element of the first set is also an element of the second, AND show that every element of the second set is also an element of the first. In other words, we want to show $A \subseteq B$ and $B \subseteq A$ (called **double inclusion**). 
Thus, set $A$ and $B$ are equal if and only if $A \subseteq B$ and $B \subseteq A$.



#### Real Numbers and Intervals

**Positive integers**: $\{1,2,3,...\}$.
**Integers**: $\mathbb{Z} = \{...,-3,-2,-1,0,1,2,3,...\}$.
Addition of integers are:
- *commutative*: $a+b = b+a$.
- *associative*: $a+(b+c) = (a+b)+c$.
- has *identity element* $0$: $a+0 = 0+a = a$. 
- has *inverse*: $a+(-a) = (-a)+a = 0$.
**Rational Numbers:** $\mathbb{Q} = \{\frac{m}{n} \mid m,n \in \mathbb{Z} \textnormal{ and } n\neq 0\}$.

Defining real numbers: $\mathbb{R} = \{\textnormal{rational numbers}\} \cup \{ \textnormal{irrational numbers} \}$.

Let $S$ be a subset of $\mathbb{R}$. 
A number $x \in \mathbb{R}$ is called an *upper bound* for $S$ if for all $y \in S$, we have $y \le x$.
A *upper bound* $x \in \mathbb{R}$ for $SS$ is called a *least upper bound* (**supremum**) of $S$ if for every $y \in \mathbb{R}$ such that $y$ is an upper bound of $S$, we have $x \le y$.
In other words, an upper bound of $S$ is a number that's at least as large as every number in $S$. The smallest such number (upper bound if it exists) is the *least upper bound*.

A *lower bound* and *greatest lower bound* (**infimum**) is defined similarly.

We denote the **supremum** of $S$ by $\sup S$ and the **infimum** of $S$ by $\inf S$.

**Real Numbers:** Every nonempty subset $S$ of $\mathbb{R}$ with an upper bound has a least upper bound. This is the property that distinguishes $\mathbb{Q}$ from $\mathbb{R}$. 
Note this is not true for $\mathbb{Q}$ since set $A = \{x \in \mathbb{Q} \mid x^2 < 2\}$ has upper bounds such as $x = 1.5,2,...$, but no least upper bound since it always approaches $\sqrt{2}$, but never reaching since $\sqrt{2}$ is irrational.

more rigorous proof? #todo 

Let $a\le b$ be any two real numbers. 
The *open* interval $(a,b)$ is defined as $(a,b) = \{x \in \mathbb{R} \mid a<x<b\}$.
The *closed* interval $[a,b] = \{x \in \mathbb{R} \mid a\le x \le b\}$. 
We then have $[a,b) = \{x \in\mathbb{R} \mid a \le x < b\}$ and $(a,b] = \{x \in \mathbb{R} \mid a < x \le b\}$.

We say $I \subseteq \mathbb{R}$ is an interval if for any $a,b \in I$ with $a<b$ and any $c \in \mathbb{R}$ with $a<c<b$, we have $c \in I$. That is, if $a$ and $b$ are in $I$, then all points in $[a,b]$ are in $I$ as well.

The intersection of two intervals is always an interval, but the union is not always an interval (if the two intervals are disjoint, union is two non-consecutive segments such as $[1,2] \cup [3,4]$).

For intervals $[a,b]$ and $(a,b)$, we have $\sup[a,b] = \sup(a,b) = b$. This is because for $[a,b]$, the least upper bound is obviously $b$. Interval $(a,b)$ goes infinitely close to $b$ on the right, but never reaching $b$. Thus, the least upper bound is also $b$. 

Let $S$ be a subset of $\mathbb{R}$. 
If $\sup{S} \in S$, $\sup S$ is ta maximal element of $S$. 
If $\inf S \in S$, $\inf S$ is a minimal element of $S$.
This is not the maximum or minimum. An subset of $\mathbb{R}$ must have a supremum and infimum, but doesn't need to have a maximum or minimum. For example, $(a,b)$ has $\sup(a,b) = b, \inf(a,b) = a$, but doesn't have a maximum or minimum (since both side infinitely approaches, but never reaches $a$ and $b$).

$[a,\infty) = \{x \in \mathbb{R} \mid a \le x\}$ and $(a, \infty) = \{x \in \mathbb{R} \mid a < x\}$. However, $\sup(a,\infty)$ is undefined since there is no upper bound. Since $\infty$ is not a real number, this doesn't disprove our definition that every subset in $\mathbb{R}$ must have a supremum. 

#### Functions

A device that associates an input with a unique output.
The input is denoted by a *dummy variables*.

A function $f$ from set $A$ to set $B$, denoted as $f: A \rightarrow B$, associates each $a \in A$ to an element $f(a) \in B$. The set $A$ is the **domain** of $f$, denoted as $Dom(f)$. The set $B$ is the **codomain** of $f$, denoted as $Cod(f)$.

The **range**, denoted by $Rng(f)$ is the set of numbers we *actually* arrive at for $f(a)$. The codomain is a *potentially* larger set that the range *may* belong to. That is, $Rng(f) = \{y \in \mathbb{R} \mid y = f(x) \textnormal{ for some } x \in Dom(f)\}$.
In other words, the codomain is the set of values the function is allowed to output, but the range is the set of values the function actually outputs.

A common codomain is $\mathbb{R}$, but range can vary based on the function. For example $f(x) = \sqrt{x}$ can output all real numbers, but the actual range is $[0,\infty)$.





























