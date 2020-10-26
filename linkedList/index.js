class Node {
    constructor(element){
        this.element = element // holds data of the node
        this.next = null // holds pointer to next node
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    add(element){
        let node = new Node (element) // create new node
        let current // store current node

        if(this.head === null){
            this.head = node 
        } else {
            current = this.head 
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
   
}