import React, { Component } from "react";
import SortableTree, {
  addNodeUnderParent,
  getNodeAtPath,
  removeNodeAtPath
} from "react-sortable-tree";
import "react-sortable-tree/style.css"; // This only needs to be imported once in your app
import Panel from "./Components/UI/Panel";
import { Button } from "react-bootstrap";

export default class Treesss extends Component {
  constructor(props) {
    super(props);
    this.updateTreeData = this.updateTreeData.bind(this);
    this.addNode = this.addNode.bind(this);
    this.removeNode = this.removeNode.bind(this);
    this.state = {
      treeData: [
        { title: "Chicken", children: [{ title: "Egg" }] },
        { title: "Fish", children: [{ title: "fingerline" }] }
      ],
      inputValue: ""
    };
  }

  addNode(rowInfo, event) {
    console.log(event);
    console.log(rowInfo);
    let NEW_NODE = { title:"" };
    let { node, treeIndex, path } = rowInfo;


    path.pop();
    let parentNode = getNodeAtPath({
      treeData: this.state.treeData,
      path: path,
      getNodeKey: ({ treeIndex }) => treeIndex,
      ignoreCollapsed: true
    });
    let getNodeKey = ({ node: object, treeIndex: number }) => {
      return number;
    };
    let parentKey = getNodeKey(parentNode);
    if (parentKey == -1) {
      parentKey = null;
    }

    
    let newTree = addNodeUnderParent({
      treeData: this.state.treeData,
      newNode: NEW_NODE,
      expandParent: true,
      parentKey: parentKey,
      getNodeKey: ({ treeIndex }) => treeIndex
    });
    this.setState({ treeData: newTree.treeData });
  }

  removeNode(rowInfo) {
    let { node, treeIndex, path } = rowInfo;
    
    this.setState({
      treeData: removeNodeAtPath({
        treeData: this.state.treeData,
        path: path, // You can use path from here
        getNodeKey: ({ node: TreeNode, treeIndex: number }) => {
          // console.log(number);
          return number;
        },
        ignoreCollapsed: false
      })
    });
  }
  inputChangeHandler = e => {
    this.setState({ inputValue: e.target.value });
  };
  updateTreeData(treeData) {
    this.setState({ treeData });
  }

  render() {
    console.log(this.state.treeData);
    return (
      <div style={{ height: 600 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={this.updateTreeData}
          generateNodeProps={rowInfo => ({
            buttons: [
              <div>
                <input
                  type="text"
                  hintText=""
                  multiLine={true}
                  rows={1}
                  rowsMax={4}
                  value={this.state.inputValue}
                  onChange={this.inputChangeHandler}
                />
                <br />
                <button
                  label="Delete"
                  onClick={event => this.removeNode(rowInfo)}
                >
                  Remove
                </button>
                <button label="Add" onClick={event => this.addNode(rowInfo)}>
                  Add
                </button>
              </div>
            ],
            style: {
              height: "50px"
            }
          })}
        />
      </div>
    );
  }
}
