/**
 * Given the pointer to the head node of a linked list and an integer to insert at a certain position, create a new node with the given integer as its data attribute, 
 * insert this node at the desired position and return the head node.
   A position of 0 indicates head, a position of 1 indicates one node away from the head and so on. 
   The head pointer given may be null meaning that the initial list is empty.

   Example: 
    head = 1 -> 2 -> 3
    data = 4
    position = 2
    final result = 1 -> 2 -> 4 -> 3
 */ 

const insertNodeAtPosition = (head, data, position) => {
    let current = head

    let newNode = new SinglyLinkedListNode()
    newNode.data = data

    let i = 0
    while( current !== null ){
        if( i == (position - 1)){
            let next  = current.next
            current.next = newNode
            current = current.next
            current.next = next
        } else
            current = current.next
        i++
    }
    return head 
}