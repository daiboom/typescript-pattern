class CompositeNode {
  public children: string[]
  public nodeName: string
  public getChild: (i: any) => any
  public hasChildren: () => boolean
  public remove: (child: any) => void
  public add: (child: any) => void

  constructor(nodeName: string) {
    this.children = []
    this.nodeName = nodeName
  }
}

CompositeNode.prototype = {
  ...CompositeNode.prototype,
  add: function (child) {
    this.children.push(child)
  },
  remove: function (child) {
    let length = this.children.length
    for (let i = 0; i < length; i++) {
      if (this.children[i] === child) {
        this.children.splice(i, 1)
        return
      }
    }
  },
  getChild: function (i) {
    return this.children[i]
  },
  hasChildren: function () {
    return this.children.length > 0
  },
}

// recursively traverse a (sub)tree
function traverse(indent: number, node: CompositeNode) {
  console.log(Array(indent++).join('──') + node.nodeName)

  for (let i = 0, len = node.children.length; i < len; i++) {
    traverse(indent, node.getChild(i))
  }
}

const tree = new CompositeNode('root')
const left = new CompositeNode('left')
const right = new CompositeNode('right')
const leftleft = new CompositeNode('leftleft')
const leftright = new CompositeNode('leftright')
const rightleft = new CompositeNode('rightleft')
const rightright = new CompositeNode('rightright')

tree.add(left)
tree.add(right)
tree.remove(right) // note: remove
tree.add(right)

left.add(leftleft)
left.add(leftright)

right.add(rightleft)
right.add(rightright)

traverse(1, tree)
