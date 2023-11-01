- We continuously adjust for over and undercoutning until we've counted each case exactly once 
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
> [!QUESTION]
> 4 students from Oakland School of Arts, 3 students form Lake Ontario High School, and 2 students from Eastern Canada Academy are seated together in a row. Every student is **distinct**. If there are no instances where every student from the same school are all sit consectively next to each other( seated as a block), how many ways to seat the students?

We can use complementary counting. Count the number of seatings such that **at least 1** school has all of its students seated as a block. Then, we subtract this from the total number of ways to seat students.

The total number of seatings is 9! since every student is distinct.

Let A = Oakland School of Arts, B = Lake Ontario High School, C = Eastern Canada Academy.
The total number of ways to have the students from school A seated together is 4! * 6!
	We envision school A as 1 block since they're all going to be next to each other anyway. We also envision the other students as a individual block
	Thus, we have 1 + 3 + 2 = 6 blocks to order, so 6! ways. For each way, there are 4! ways to permute the students within the block of school A. Thus, we have 4!6! ways in total

Similarily, total number of ways to have the students from school B seated together is 3! * 7!
The total number of ways to have the students from school C seated together is 2! * 8!

We have now counted $n(A) + n(B) + n(C) = 4!6! + 3!7! + 2!8!$

However, we overcounted the cases where two schools have their students seated in a block.
For the case where both A and B have all their students seated in a block, we counted them once when counting $n(A)$ and once in $n(B)$. We only want to count this case once, but we have counted this case twice so far. Thus, we must subtract this case once to adjust for overcounting. 
$n(A \cap B)$ - both A and B have all their students in a block is 4! * 3! * 4!
	Again envision both A and B as a block, and every other student as an individual block, thus there are 1 + 1 + 2 = 4 blocks to permute. Again, for each permutation we have 4! ways to permute the students within block A and 3! ways to permute the students within block B. 

Similarily, $n(A \cap C) = 4! * 2! * 5!$ and $n(B \cap C) = 3! * 2! * 6!$

We have now counted $n(A) + n(B) + n(C) + n(A \cap B) + n(A \cap C) + n(B \cap C) = 4!6! + 3!7! + 2!8! + 4!3!4! + 4!2!5! + 3!2!6!$ 
Finally, we know that we might've over or undercounted the last case where all 3 schools have their students seated in a block - $n(A \cap B \cap C)$. We counted this case once for each of the individual schools, so once in each $n(A), n(B), n(C)$.
We also counted this once in each pair of schools, so once in $n(A \cap B), n(A \cap C), n(B \cap C).$
Thus, everything cancels out so we have counted $n(A \cap B \cap C)$ 0 times. We must now add it once to count it once. 
	We now have 3 blocks for a total of 3! ways to arrange blocks. For block A, we have 4! ways. For block B, we have 3! ways. For block C, we have 2! ways. Thus, total ways is 3! * 4! * 3! * 2!

We have now counted $n(A) + n(B) + n(C) - n(A \cap B)-n(A \cap C)-n(B \cap C) + n(A \cap B \cap C) = 4!6! + 3!7! + 2!8! + 4!3!4! + 4!2!5! + 3!2!6! + 3!4!3!2! = 147744$
This counts every case in the set of $A \cup B \cup C$ exactly once, as depicted by the diagram:

![[Pasted image 20231028125551.png]]

Thus we have the generlization
$$
n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B)-n(A \cap C)-n(B \cap C) + n(A \cap B \cap C). 
$$

> [!WARNING]- So the answer is 147744 right? 
> >[!DANGER]- No, remember that we are using complementary counting
> > > We must **subtract** this from the total ways, which is 9! = 362880


> [!QUESTION]
> How many positive integers smaller or equal to 420 are relatively prime to 420?

Sol 1: use Eulers Totient function( appeared on COMC)

Sol2: use PIE 420 = 2^2 * 3 * 5 * 7
rephrase problem: how many integers up to 420 are not divisible by 2,3,5, or 7.



> [!QUESTION]
> You are given 6 Letters, 9 O Letters, 4 S Letters, and 2 A Letters.
> How many ways can you form a word using all letters that have at least 5 LO blocks( 5 instances where a L letter is followed by a O letter)
> 

Try 1: Messy casework

Try 2: Use PIE.




