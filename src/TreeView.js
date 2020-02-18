import React, { Component } from "react";
import SortableTree, {
  getNodeAtPath,
  addNodeUnderParent,
  removeNodeAtPath,
  changeNodeAtPath
} from "react-sortable-tree";
import "react-sortable-tree/style.css"; // This only needs to be imported once in your app

export default class Tree extends Component {
  state = {
    treeData: [
      { title: "Mexico", children: [{ title: "G" }] },
      { title: "USA", children: [{ title: "fingerline" }] }
    ],
    inputValue: ""
  };

  updateTreeData(treeData) {
    this.setState({ treeData });
  }

  addNode(rowInfo) {
    const NEW_NODE = {
      title: "Another Node",
      isDirectory: true,
      expanded: true
    };
    const newTree = addNodeUnderParent({
      treeData: this.state.treeData,
      newNode: NEW_NODE,
      expandParent: true,
      parentKey: rowInfo ? rowInfo.treeIndex : undefined,
      getNodeKey: ({ treeIndex }) => treeIndex
    });

    this.updateTreeData(newTree.treeData);
  }

  removeNode(rowInfo) {
    const { path } = rowInfo;
    const newTree = removeNodeAtPath({
      treeData: this.state.treeData,
      path,
      getNodeKey: ({ treeIndex }) => treeIndex
    });
    this.updateTreeData(newTree);
  }

  changeNode(rowInfo) {
    const { path } = rowInfo;
    const newTree = changeNodeAtPath({
      treeData: this.state.treeData,
      path,
      getNodeKey: ({ treeIndex }) => treeIndex,
      newNode: { title: this.state.inputValue }
    });
    this.updateTreeData(newTree);
  }

  inputChangeHandler = (e) => {

    this.setState({ inputValue: e.target.value });
    console.log(this.state.inputValue);
  };
  render() {
    return (
      <div style={{ height: "100%" }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          generateNodeProps={rowInfo =>
            // console.log(rowInfo),
            ({
              buttons: [
                <div style={{ display: "inline-flex" }}>
                  <input
                    type="text"
                    value={rowInfo.title}
                    onChange={(e , rowInfo) => this.inputChangeHandler(e, rowInfo)}
                  />
                  <br />
                  <button
                    label="Delete"
                    onClick={() => this.removeNode(rowInfo)}
                  >
                    Remove
                  </button>
                  <button label="Add" onClick={() => this.addNode(rowInfo)}>
                    Add
                  </button>
                  <button label="Add" onClick={() => this.changeNode(rowInfo)}>
                    Change
                  </button>
                </div>
              ],
              style: {
                height: "50px"
              }
            })
          }
        />
      </div>
    );
  }
}
