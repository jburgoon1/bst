class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
if(this.root===null){
this.root=new Node(val)
return this
}
var current = this.root

while(true){
  if(val < current.val){
    if(current.left === null){
      current.left = new Node(val)
      return this
    }else{
      current = current.left
    }
    
  }else if(val > current.val){
    if(current.right===null){
      current.right = new Node(val)
      return this
    }else{
      current = current.right
    }
    
  }
}
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current=this.root) {
  if(this.root === null){
    this.root = new Node(val) 
    return this
  } 
  if(val > current.val) {
    if(current.right===null){
      current.right = new Node(val)
      return this
    }
    return this.insertRecursively(val, current.right)
  }else{
    if(current.left === null) {
      current.left = new Node(val)
      return this
    }
    return this.insertRecursively(val, current.left)

  }
  
}


  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
let current = this.root
let isFound = false
if(val === current.val) return current
while(!isFound&&current){
  if(val > current.val){
      current = current.right
  }else if(val < current.val){
    current= current.left
  }else{
    isFound=true
  }
}
if(!isFound) return undefined

return current
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current=this.root) {
    if(this.root === null) return undefined
    if(val === current.val) return current
      if(val < current.val){
        if(current.left === null) return undefined
        return this.findRecursively(val, current.left)
      }else if(val > current.val){
        if(current.right===null) return undefined
        return this.findRecursively(val, current.right)
      }
    return current
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
let visited = [];
let current = this.root;

function sweep(node){
  visited.push(node.val)
  if(node.left) sweep(node.left)
  if(node.right) sweep(node.right)

}
sweep(current)
return visited
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visited = [];
    let current = this.root;
    
    function sweep(node){
      
      if(node.left) sweep(node.left)
      visited.push(node.val)
      if(node.right) sweep(node.right)
    
    }
    sweep(current)
    return visited
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visited = [];
    let current = this.root;
    
    function sweep(node){
      
      if(node.left) sweep(node.left)
      
      if(node.right) sweep(node.right)
      visited.push(node.val)
    }
    sweep(current)
    return visited
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
let current = this.root;
let toVisit = [];
let visited = [];

toVisit.push(current)
while(toVisit.length){
  current=toVisit.shift()
  visited.push(current.val)
  if(current.left){
    toVisit.push(current.left)
  }
  if(current.right){
    toVisit.push(current.right)
  }
}
return visited
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
