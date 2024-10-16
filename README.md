# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

In mergeInplace function, the while loop iterate through both subarrays, it continues as long as the the elements in both subarrays are compared. The time complaxity is $n+n$. The for loop shifts the elements of the first subarray to the right for the small element, in the worst case, if the first element of the second subarry is smaller than all elements of the first subarry, this will shift all the element in the first subarry, which lead a time complexity $n^2$. In this function, the time complexity is dominated by the for loop, which can be represent as $(n^2)$

In mergesort, the outerloop doubles the size of subarrys each time, results the complexity $log_2n$; the innerloop calls the mergeInplace function to processes the array of the doubled size. Combine this nested loop, the run time complexity is $(n^2log_2n)$

Therefore, the worst-case time complexity for this implementation is $\Theta(n^2log_2n)$


“I certify that I have listed all sources used to complete this exercise,
 including the use of any Large Language Models. 
 All of the work is my own, except where stated otherwise. 
 I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, 
 charges may be filed against me without prior notice.” --Doris Yan
