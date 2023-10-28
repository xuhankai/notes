#### Basic idea for 2 sets
> [!QUESTION]
> Ohio State Academy offers 2 courses English and French. We know that 420 students took English, 69 students took French, and 8 students took both. How many students took at least one language course?

**Solution:**
The number of English students + The number of French students = 420 + 69 = 489. This is **not** the number of students that took English or French. Note that ==some students are taking both English and French==. We counted those students once in English students and once in French students. Thus, we have to subtract the number of bilingual students once to adjust for **overcounting**. 
The answer is 420 + 69 - 8 = 481.


> [!GENERALIZE]
> Given 2 sets A and B. Given the number of elements in set **A**, the number of elements in set **B**, and the number of elements in both set **A and B**, ==count the number of elements in **A or B**.==


- Sometimes it is easier to overcount, then subtract what we don't want.

The number of elements in A or B[^1] is equal to **the number of elements in A** + **the number of elements in B** - **the number of elements in A and B**[^2] since we counted the elements in that set twice( once in A and once in B). Thus,
$$
n(A \cup B) = n(A) + n(B) - n(A \cap B). 
$$

Heres a diagram for visualizaton:

![[Pasted image 20231027212501.png]]

[^1]: denoted as $n(A\cup B)$ 
[^2]: denoted as $n(A\cap B)$

#### PIE with 3 or more sets

Thus,
$$
n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B)-n(A \cap C)-n(B \cap C) + n(A \cap B \cap C). 
$$

