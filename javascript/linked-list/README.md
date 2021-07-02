# Single linked list
-------------------------------------------------------------------
##### A singly linked list is a type of linked list that is unidirectional, it can be traversed in only one direction from head to the last node (tail).
##### A single node contains data and a pointer to the next node which helps in maintaining the structure of the list.

----------------------------------------------
# Challenge
**Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.****Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.**



---------------------------------------------------------------

# API
* Method insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
* Method includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
* Method toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"
* methode.append(value) which adds a new node with the given value to the end of the list.
* .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node.
* .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node.


# Whitboard Process
 #### YOU CAN SEE IT IN THIS LINK :
 --------------------------------------------------------
 [Whitboard-linkedList](https://app.mural.co/t/linkedlist8916/m/linkedlist8916/1625127882907/7e2af347ced12feaece2c7667ec0f7241995aea3?sender=ud5e9721dc2df00862ec99522)


## Approah & Efficieny
---------------------------------------

search for middle index element , change the search boundary on each iteration , while loop is running and well break if the search failed,
