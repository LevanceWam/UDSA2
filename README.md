<h1 id=home>Ultimate Data Structures & Algorithms 2 Course</h1>
<p>Welcome to the Ultimate Data Structures & Algorithms 2 Tutorial!</p>

<p>In this course we are going to be looking at Non-Linear Data Structures. That include Binary Trees, AVL Trees, Heaps, Tries, and Graphs. These data structures and algorithms are a little more complex than the ones from part one. All of the data structures from part one can be classified as linear data structures.</p>


<h2>Table of Contents</h2>
<li><a href='#section1'>Binary Trees</a></li>
<li><a href='#section2'>AVL Trees</a></li>

<h2 id=section1>Binary Trees</h2>

<p>In computer science we have a lot of non-linear data structures. The most important of them are trees. Tree structures have tons of applications in the real world. Things like Databases, Websites, Graphical User Interfaces and etc. They tend to be the trickiest interview questions so this section has nice exercises that can help us work with tress better.</p>

<p>In binary trees a root can have up to 2 children. A node with out any children is called a leaf. the height of a leaf node is 0 as we go up in the tree the height increases. The height of a tree is the height of the root node which is the longest path to the leaf. The depth of a root node is 0 as we go down this number increases. The depth of a node is more accurately the number of edges from the root to the node.</p>

<p>A binary search tree is a special kind of binary tree in which all the values in the left subtree is less than the root and the right subtree is greater than the root.</p>

<p>We have a couple of different algorithms for travesing binary trees this algorithm falls into 2 catergories. Breadth First which is also known as level order traversal. Then we have Depth first we have 3 depth first algorithms Pre-order, In-order, and Post-order. The different between these algorithms is in the order in which we visit the root node along with the right and left subtrees.</p>

<h3>What are trees?</h3>

<p>A tree is a data structure that stores elements in a hierarchy these element are referred to as nodes and the lines that connect them as edges. Each node contains a value or data. We can have trees full of intergers or object. We can have personal objects in a tree these objects would be a part of an organization or a family. The top node in the tree is called the root. The root has 2 children and the root is the parent of these nodes. These nodes also have 2 children each if the nodes on the bottom of of the tree these are known as leaf nodes.</p>

<p>The current tree we are referencing above the nodes have a maximum of two children. This is a special kind of tree called a Binary Tree and just like wwe have different keys in the real world we have different kinds in the world of computer science. They are fundamentally the same, but slightly different in terms of the number of children each node can have and how the values in these nodes can be arranged.</p>

<p>This section we are going to focus on Binary trees because they are easy to understand and they come up in interviews frequently. Once we learn about binary trees we will quickly learn about the other kinds of trees.</p>

<h3>Application of trees</h3>

<p>We use trees anywhere we ant to represent hierarchical data. Such as a tree of people in our organization, family, or flies and folders on your desk. Next, we have databases database management systems use trees for indexing so they can quickly look up data. Another great application of trees is implementing auto completion. For example chrome stores all of our previous web searches in a tree so whenever we are typing a query it tries to match it with previously stored queries. They are also used in compliers, compliers use a special type of tree called syntax tree to parse expression. They are also used in compression algorithms such as those used by JPEG and MP3 file formats </p>

<h4>Tree Operations & Runtime Complexities</h4>

<ul>
    <li>Insert O(log n)</li>
    <li>Lookup O(log n)</li>
    <li>Delete O(log n)</li>
</ul>

<a href="#home">Top</a>

<h2 id=section1>AVL Trees</h2>

<h3>What are AVL trees?</h3>

<p>AVL trees are a self-balancing binary search tree. It was the first such data structure to be invented. In an AVL tree, the heights of the two child subtrees of any node differ by at most one; if at any time they differ by more than one, rebalancing is done to restore this property.<p>

<p>Our tree can be in one or two states balanced or unbalanced. In a balanced tree the difference between the height of the left and right subtrees. Should be less than or equal to 1. Remember that binary search trees run in logarithmic time this is only if the tree is balanced.<p>

<p>As a tree becomes more unbalance their operations slow down and in the worst case scencario. Where a tree looks like a linked list so it will be running in O(n). Self balancing trees solve this problem they automatically balance themselves as we add or remove nodes.</p>

<h3>Rotations</h3>

<p>In AVL trees we have four types of rotations:</p>

<ul>
    <li>Left Rotation</li>
    <li>Right Rotation</li>
    <li>Left Right Rotation</li>
    <li>Right Left Rotation</li>
</ul>

<a href="#home">Top</a>

<h2 id=section1>Heaps</h2>

<p>Heaps are another type of binary tree. Heaps have many applications that are used in sorting. They're used in many graph algorithms and other things.</p>

<p>A heap is a special type of tree with 2 properties. The first property is that it is a complete tree which means that every level, expect potentially the last level is completely filled, and the level are filled from left to the right. This leaves us with a completed tree because every level is completely filled with nodes.</p>

<p>The second property of a heap is that the value of every node is greater than or equal to it's children. This is called the heat property. For example if we have 20 as the root, the child should be less than or equal to the root. So we can have nodes like 15 and 10 because this follows the rule of the tree. The same rule would apply to the children of 10 and 15. Now let's say we had the value of 21 in the tree. Now we don't have a valid tree because 21 is greater than 20.</p>

<p>When the Main root node holds the largest value and has smaller values as we go down. We call this a max heap. We also have min heaps where the main root stores the smallest value.</p>

<p>We can use heaps for sorting (heapsort),They are also used in implementing graph algorithms, We can use graphs to find the shortest path between 2 nodes in a graph. This is the algorithm that powers our gps. Heaps are also used for priority queues. We can also use them to find the kth smallest or largest value which is a popular interview question.</p>

<h4>Heaps Operations & Runtime Complexities</h4>

<ul>
    <li>Bubbling Up O(log n)</li>
    <li>Bubbling down O(log n)</li>
</ul>