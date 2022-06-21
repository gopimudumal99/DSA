// linked list implimentation

function  LinkedListFactory () {
    let head = null;
    let length = 0;

    return {
        append,
        indexOf,
        insertAt,
        remove,
        removeAt,
        toString,
    }
    
    // adding a element at the end of linkedList
    function append(element){
        const node = {
            element,
            next:null
        }
    
        if(head ===null){
            head = node
        }else {
            let currentNode = head;
            
            while(currentNode.next !==null){
                currentNode= currentNode.next
            }
            currentNode.next = node;
        }
        length++
    }
    
    //
    function indexOf(element){
        let nodeIndex = 0;
        let currentNode = head;
    
        while(currentNode){
            if(element === currentNode.element){
                return nodeIndex
            }
            nodeIndex++
    
            currentNode = currentNode.next;
        }
    
      return -1 //if element is not match
    }
    
    //
    function insertAt(element,position){
        const isPositionRage = position >-1 && position <=length
        if(!isPositionRage){
            return false
        }
    
        const node = {
            element,
            next:null
        }
    
        let currentNode = head;
        const isHeadPosition = position === 0
    
        if(isHeadPosition){
            node.next = currentNode
            head = node
        }else{
            let prevNode = null;
            let index =0;
    
            while(index++<position){
                prevNode = currentNode
                currentNode = currentNode.next
            }
            prevNode.next = node;
            node.next = currentNode;
        }
        length++;
        return true
    }
    
    function removeAt(position){
        let isPositionRage = position >-1 && position<length
        
        if(!isPositionRage){
            return null
        }
        let currentNode = head
        let isHeadPosition = position === 0
        if(isHeadPosition){
            head = currentNode.next
        }else{
            let prevNode= null
            let index = 0;
            while(index++<position){
                prevNode = currentNode
                currentNode = currentNode.next
            }
            prevNode.next = currentNode.next
        }
        length--
        return currentNode.element
    }
    
    // remove a element
    
    function remove(element){
        const elementIndex = indexOf(element)
        return removeAt(elementIndex)
    }
    
    function toString(){
        let result = "";
        let current = head;
    
        while(current){
            result +=`${current.element}${current.next?",":""}`
            current = current.next
        }
        return result
    }

}



const linkedList =  LinkedListFactory();

linkedList.append(1);
linkedList.append(10);
linkedList.append(-1);
linkedList.append(40);
linkedList.append(-123);

console.log(linkedList.toString()); // 1, 10, -1, 40, -123

console.log(linkedList.removeAt(3)); // 40

console.log(linkedList.toString()); // 1, 10, -1, -123

console.log(linkedList.indexOf(1)); // 0

console.log(linkedList.remove(1)); // 1

console.log(linkedList.toString()); //