import React, { Component } from "react";
import SortableTree, {
  addNodeUnderParent,
  getNodeAtPath,
  removeNodeAtPath,
  changeNodeAtPath
} from "react-sortable-tree";
import "react-sortable-tree/style.css"; // This only needs to be imported once in your app
import Panel from "./Components/UI/Panel";
import { Button } from "react-bootstrap";

export default class Tree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        {
          title: "Parent1",
          children: [{ title: "Child1" }, { title: "Child2" }]
        },
        {
          title: "Parent2",
          children: [{ title: "Child1" }, { title: "Child2" }]
        }
      ]
    };
  }

  render() {
    const getNodeKey = ({ treeIndex }) => treeIndex;

    return (
      <div style={{ height: 400 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          generateNodeProps={({ node, path }) => ({
            title: !node.needsTitle ? (
              node.title
            ) : (
              <form
                onSubmit={event => {
                  event.preventDefault();
                  const { needsTitle, ...nodeWithoutNeedsTitle } = node;
                  this.setState(state => ({
                    treeData: changeNodeAtPath({
                      treeData: state.treeData,
                      path,
                      getNodeKey,
                      newNode: nodeWithoutNeedsTitle
                    })
                  }));
                }}
              >
                <input
                  autoFocus
                  value={node.title}
                  onChange={event => {
                    const title = event.target.value;

                    this.setState(state => ({
                      treeData: changeNodeAtPath({
                        treeData: state.treeData,
                        path,
                        getNodeKey,
                        newNode: { ...node, title }
                      })
                    }));
                  }}
                />
              </form>
            ),
            buttons: [
              <button
                className="btn"
                id={path.length === 1 ? "btn_add_parent" : "btn_add_children"}
                onClick={() =>
                  this.setState(state => ({
                    treeData: addNodeUnderParent({
                      treeData: state.treeData,
                      parentKey: path[path.length - 1],
                      expandParent: true,
                      getNodeKey,
                      newNode: {
                        title: "",
                        needsTitle: true
                      }
                    }).treeData
                  }))
                }
              >
                <p>add</p>
              </button>
            ]
          })}
        />
      </div>
    );
  }
}
