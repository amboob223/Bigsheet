//in this shit here we are going to make a big notes for our refrence that way we can try new things daily
//js

//reduce // this method esas the 1st el is a parameter is the first ele of the array and the second parameter sis the last ele in the array
const numbers = [3, 4, 5, 6, 4]

const sum = numbers.reduce((acc, el) => {
    return el + acc
})
console.log(sum)

//sort also takes in a comparator call back. it got to be a-b and if its positive or negative it go  a certain way

let nums = [300, 40, 5, 99, 7]

let sorted = nums.sort((a, b) => a - b
) // that ab is the comparator

console.log(sorted)

//read enough oapers and try to replicate the process and he sugges 20-50 papers about machine learnings


//data structures
// stack,queues,random forest, 

// data structures

//the reason why you would use certain data structure is becaus eyou want to be able to acces the data the correct way 
// the diffrence between array and linked list is arrays are better for indexing data and linked list are better for updating and indesting and deleting data
//Binary tree
function treeNode(val, left, right) {
    this.val(val === undefined ? 0 : val);
    this.left(left === undefined ? null : left);
    this.right(right === undefined ? null : right)
}

//singly linked list

function listnode(val, next) { //sobasically the tree is an objext and the node is the functopn and value
    this.val(val === undefined ? 0 : val)//if the value is undefined the val is zero id not its the val
    this.next(next === undefined ? null : next)
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

//we fist make a dummys to remove when head of linked list and its null 
// the after that we got to make the pointgers basically shift the way we want and mobve though the list with this function below
var removeElements = function (head, val) {

    const dummy = new ListNode(0, head) // the head here is next

    //now we fix the poiner to 
    let current = dummy;
    let next = head

    //now we travese the tree
    //if the val is equal to the val in the remove method we 
    while (next != null) {
        if (next.val == val) {
            current.next = next.next
        } else {
            current = next
        }
        next = current.next
    }

    return dummy.next
};

// Arrays: An array is a collection of elements that are stored in a contiguous block of memory and can be accessed using an integer index.
// Linked lists: A linked list is a collection of elements that are stored as a series of nodes, each of which contains a value and a reference(called a "pointer") to the next node in the list.
//     Stacks: A stack is a data structure that allows you to store and retrieve elements in a last -in, first - out(LIFO) order.
//         Queues: A queue is a data structure that allows you to store and retrieve elements in a first -in, first - out(FIFO) order.
//             Trees: A tree is a data structure that consists of nodes organized into a hierarchy.Each node in a tree has zero or more child nodes, and the node at the top of the hierarchy is called the root.
//                 Graphs: A graph is a data structure that consists of a set of nodes(called "vertices") and a set of edges that connect the vertices.
// Hash tables: A hash table is a data structure that allows you to store and retrieve elements using keys.It works by using a hash function to map the keys to indices in an array, allowing you to access the elements quickly.
//     Sets: A set is a collection of elements that does not allow duplicates and does not have a specific order.
//         Maps: A map is a collection of key - value pairs that allows you to store and retrieve elements using keys.
// These are just a few examples of the many different data structures that are available.The best choice for your needs will depend on the specific requirements of your application.

//loops for loops allow yuo to iterate through the indices
//for of is for the values of an objects
//for in is for the keys to be loop through
//how to populate the hash
let friends = ["monk", "monk", "abdul", "wings", "chill"]
let hash = {}
//cider
for (let i = 0; i < friends.length; i++) {
    if (hash[friends[i]]) {
        hash[friends[i]] += 1// if we dont give it values it will be {}
    } else {
        hash[friends[i]] = 1
    }
}
console.log(hash)

//for of is for looping through values
//for of // can be used on objects an arrays and strings data types

const mar = [4, 34, 3, 3, 3]
for (let key of mar) {
    console.log(key)

}
// in js to interpolate `${}`
//for in in for the objects
//for in for looping through the keys

const girls = { "dumb": 3, "sexy": 4, "fat": 9, "smart": 3 }
//in is for the keys in the keys in the dope in the triap keys

for (const g in girls) {
    console.log(g)
}


