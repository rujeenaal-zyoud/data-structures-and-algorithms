# PseudoQueue
  do a queue methods without create queue we will create from stack Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects.


  # API
* enqueue(value) : inserts value into the PseudoQueue, using a first-in, first-out approach.
* dequeue() : extracts a value from the PseudoQueue, using a first-in, first-out approach.



# Whitboard Process
 #### YOU CAN SEE IT IN THIS LINK :
 --------------------------------------------------------
 [Whitboard-linkedList](https://app.mural.co/t/linkedlist8916/m/linkedlist8916/1625915726901/15f4e1124e8f34dcd8b89d7b0a69997ce16a9a2f?sender=ud5e9721dc2df00862ec99522)


 
# Approach & Efficiency
1. enqueue (value) :
using the push method to the main stack

**big O**
time :O ( 1 )
space :O ( 1 )



2. dequeue () :
push its content to the secand  stack
pop the last pushed node from the secand stack and store its value in a variable
(while )
push its content to the originl  stack
return the the popped value that is stored in the variable .


**big O**
time :O( n )
space :O ( n )