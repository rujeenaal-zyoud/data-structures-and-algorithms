# Stacks and Queue 
Stack is a container of objects that are inserted and removed according to the last-in first-out (LIFO) principle.

Queue is a container of objects (a linear collection) that are inserted and removed according to the first-in first-out (FIFO) principle.
 
 ### HERE WE WILL IMPLMENTAION IT USING SINGLY LINKED LIST 

 ## Whiteboard Process  in this Link :
   

 [my Whiteboard](https://miro.com/app/board/o9J_l78LlbY=/)

 -----------------------------------------------

 ## Approach & Efficiency
----------------------------------------------------

**STACK**::

**push (value)** :
create a new node
point the new node to the top
point the top to be the new node

**big O**
* time :O( 1 )
* space :O ( 1 )

-------------------------------------------

**pop**:
       1- will check if there stack linked list
       2-  create pointer that equal top of stack 
       3-  make the next of pointer = null to remove it from stack 
        4-     pointer.next = null;
        5- then make the top in that node that removed next to the next node  
        6- then make -- for length stack to empty function 
        7- return the removed node value

**big O**
* time :O( 1 )
* space :O ( 1 )


--------------------------------------

**peek**:

1- sure there data in first element
2- if yes return true
3-if not return false

**big O**
* time :O( 1 )
* space :O ( 1 )


**IsEmpty**

1- by find size the linked list by each operation -1 or +1 by needed
2- return if ===0 true  if not false (return boolen)
**big O**
* time :O( 1 )
* space :O ( 1 )


*the same for queue with same operation and same BIG o for all but different in pointer and the queue FIFO*


---------------------------------------------
## API
1. push: Takes in a value of any type and make add it to the top of the stack .
2. pop: removes a node from the top
3. peek: returns the top value of a stack
4. isEmpty: indicates if the stack is empty or not
5. enqueue: Takes in a value of any type and make add it to the rear of the queue .
6. dequeue: removes a node from the front
7. peek: returns the front value of a queue
8. isEmpty: indicates if the queue is empty or not