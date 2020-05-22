
//Stacks
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
        console.log(data);
    }
}

class starTrek {
    constructor() {
        this.top = null;
        var items = []
    }


//Stacks for like a stack of dishes, top is added last and gets removed first from the stack
//push(): places data on top of the stack //constant time 0(1)
//pop(): removes data from the top of the stack //constant time 0(1)

push(data) {
    //if the stack is empty, then the node will be the top of the stack
    if(this.top === null) {
        this.top = new _Node(data, null);
        return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
        //console.log(data);
    }
    pop() {
        //In order to remove the top of the stack , you have to point the pointer to the next item and that next item becomes the top of the stack
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
    peek() {
        const node = this.head;
       return node;
        
    }
    isEmpty() {
        const node = this.data
        if(node === null) {
            return;
        } else {
            return('The stack is not empty')
        }
    }
    is_palindrome() {
        //s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
        var letters = [];
        var word = "hello"
        var rword = "";

        for( var i = 0; i < word.length; i++) {
            letters.push(word[i]);
        }
        for(var  i = 0; i < word.length; i++) {
            rword += letters.pop();
        }
        if(rword === word) {
            return true;
        } else {
            return false;
        }
    }
    
}


//Queues are like a fast food line, the first person in line gets served first and so on

//Queues
//class _Node {
    //constructor(value) {
        //this.value = value;
        //this.next = null;
    //}
//}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    
    //enqueue(data): adds data to the queue (insertion) //constant time 0(1)
    //dequeue(): removes the oldest data added to the queue(deletion) // constant time 0(1)
    
    enqueue(data) {
        const node = new _Node(data);

        if(this.first === null) {
            this.first = node;
        }
        if(this.last) {
            this.last.node = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    dequeue() {
        //if the query is empty, there is nothing to return 
        if(this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        //if this is the last item in the queue
        if(node === node.last) {
            this.last = null;
        }
        return node.value;
    }
}


const ns = new starTrek()
const nq = new Queue()

ns.push('Kirk');
ns.push('Spock');
ns.push('McCoy');
ns.push('Scotty');
console.log('this is the peek' +  + ns.peek());
console.log(ns.isEmpty());
//console.log(ns.display());
console.log(ns.is_palindrome());






