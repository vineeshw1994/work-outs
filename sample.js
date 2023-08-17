class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(child) {
      this.children.push(child);
    }
  }
  
  function generateTreeRepresentation(root, prefix = '', isLast = true) {
    let representation = prefix;
    representation += isLast ? '└── ' : '├── ';
    representation += root.value + '\n';
  
    const childPrefix = prefix + (isLast ? '    ' : '│   ');
  
    for (let i = 0; i < root.children.length - 1; i++) {
      representation += generateTreeRepresentation(root.children[i], childPrefix, false);
    }
  
    if (root.children.length > 0) {
      representation += generateTreeRepresentation(root.children[root.children.length - 1], childPrefix, true);
    }
  
    return representation;
  }
  
  // Example usage:
  const root = new TreeNode('A');
  const nodeB = new TreeNode('B');
  const nodeC = new TreeNode('C');
  const nodeD = new TreeNode('D');
  const nodeE = new TreeNode('E');
  const nodeF = new TreeNode('F');
  const nodeG = new TreeNode('G');
  const nodeH = new TreeNode('H');
  
  root.addChild(nodeB);
  root.addChild(nodeC);
  root.addChild(nodeD);
  nodeB.addChild(nodeE);
  nodeB.addChild(nodeF);
  nodeD.addChild(nodeG);
  nodeD.addChild(nodeH);
  
  const treeRepresentation = generateTreeRepresentation(root);
  console.log(treeRepresentation);
  