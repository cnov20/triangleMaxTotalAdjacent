# triangleMaxTotalAdjacent
Triangle Max Total (Top to Bottom) via Adjacent Elements -- Coding Exercise

By starting at the top of the triangle and moving to adjacent numbers on the row below, the maximum total from top to bottom is 27. 

	     5 
	   9  6 
	4   6   8 
       0    7   1   5
   
   I.e. 5 + 9 + 6 + 7 = 27

Write a program in a language of your choice to find the maximum total from top to bottom in triangle.txt, a text file containing a triangle with 100 rows. 

Test Cases — 

# 1 — Different Order of “traversal” than above, provided example case

Input : 
   3
  7 4
 2 4 6
8 5 9 3

Output : 23

Explanation : 3 + 7 + 4 + 9 = 23 

# 2 — Negatives Included — and elements that are equal in value

Input :
   8
 -4 4
 2 2 6
1 1 1 1

Output : 19

Explanation : 8 + 4 + 6 + 1 = 19 



# Problem-Solving Approach / Process

1. Review problem and identify / re-read Daniela’s framing of the purpose of the exercise.
2. Deduce what exactly the overarching problem is.
3. Narrow down the “problem” into more tangible, quantifiable, sub-problems to solve the overall problem/task at hand.
4. Identify / brainstorm / whiteboard possible approaches, first steps, and partial solutions to the problem.
5. Write pseudocode, based on the above, in an effort 
6. Utilize example/test/simple case to start with and 
7. Add further test cases to account for 
8. Start coding
9. Review and reflect on what is working, what isn’t, and why.


# Solution / Identified sub-tasks to solve the Triangle Problem — 

1. Define what exactly “adjacent” means in the context of this specific exercise/program
2. Place numbers in some sort of organized, sortable(?) data structure for parsing through data, looping, comparing of values, etc.
3. Figure out how to codify the adjacency of one number to the next, especially considering the triangle structure of the data.
4. Identify pattern(s) in how the max values on each line compare with one another
5. See if this can/should be into first-version and/or subsequent versions of the algorithm — or is it specific to this data set / an outlier / irrelevant? Does it scale?
6. If yes to most/all of the above, incorporate into algorithm or make note to incorporate later for greater efficiency, reusability, etc.
7. Compare current value with previous value (previous line’s max?) to determine if they are “adjacent” to one another
8. Find max on each line of values or within each set of values, determine if this is your current value.
9. If both steps 7 and 8 hold true — ADD TO runningMaxTotal variable
10. Figure out how to determine if you have reached the end of a line / end of a set of values
11. If true — then move to next line / set of numbers
12. Repeat steps 6 through 11
13. Determine if you are at the end of the final line / at the final value of your data set
14. If so, terminate loop, terminate program, etc.
15. Return finalMaxTotal variable value (e.g. 27, in this instance)

# Pseudocode — 

1. Initialize chosen data structure for storing, organizing, sorting(?) data-set.
2. Start with initial max sum equal to the first value in your data set / data structure
3. Set up a loop to iterate, line by line / item by item
4. Possible multiple levels of loops / multiple levels of array-dimensions needed for items within each line
5. Run through steps 4-11 or 6-11 above

# Test Cases(s) / Edge Cases
1. Account for “0” values
2. Account for negatives
3. Account for “bad” data / “bad” user input
4.  Identify invalid elements of data — Add helper function to validate data-set (numbers only, no strings, no objects, etc.)
5.  “Clean” / scrub data — Add helper function to remove invalid elements/data and re-arrange elements to keep original/triangle structure in place, and original order of elements — both line by line and within each line

# Possible Data Structures to use:
	1. Array (sorted / unsorted / key-value pairs)
	2. Object
	3. Hash Table
	4. Tree — Binary-tree

# Possible Approaches to use:
1. Brute-force — iterate through all possible paths and keep running total based on adding of elements, keep max total as well, compare the two, until end of the data set / text file, and finally — return (what should be) the max value of the data set.
2. Binary Search — for each line to find max of each line/set of numbers within overall data set (?)
3. Recursion — given the triangle’s tree-like structure, this may help to assemble this as a binary-tree/binary-search-tree to parse
4. Dynamic Programming — “Sliding-window” type of approach of determining max of adjacent elements and repeating the process as you make your way through the data-set / text-file.
- [ ] Dynamic Programming — slice/delete/remove values from data-set as they are accounted for / added to the running and/or max total, in conjunction with or to facilitate the “sliding window” approachmfiemfewfew

# Simple Case / Example Provided
1. Initialize array to give the data some structure 
2. Initialize maxTotalSum variable
3. Set maxTotalSum var to first number of triangle / array — maxSumTotal = array[0] (e.g. 5, in the example provided)
4. Run through steps 4-11 or 6-11 above
