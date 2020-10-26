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

    addElement(element){
        let node = new Node (element) 
        let current 

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

    removeElement(element){
        let current = this.head
        let previous = null

        while(current !== null){
            if(current.element === element){
                if(previous.next === null){
                    this.head = current.next
                } else {
                    previous.next = current.next
                }
                this.size--
                return current.element
            }
            previous = current
            current = current.next
        }
        return - 1
    }
   
}