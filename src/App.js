import React, { useState } from "react";
import "./App.css";

function App() {
  const [tree, setTree] = useState([
    {
      title: "Home",
      childrens: [
        {
          title: "View 1",
          type: "view",
        },
        {
          title: "View 2",
          type: "view",
          childrens: [
            {
              title: "Widget 1",
              type: "widget",
              childrens: [
                {
                  title: "Widget 1.1",
                  type: "widget",
                  childrens: [
                    {
                      title: "Widget 1.1.1",
                      type: "widget",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "View 3",
          type: "view",
          childrens: [
            {
              title: "Widget 2",
              type: "widget",
            },
            {
              title: "Widget 3",
              type: "widget",
              childrens: [
                {
                  title: "Widget 3.1",
                  type: "widget",
                },
              ],
            },
          ],
        },
        {
          title: "View 4",
          type: "view",
          childrens: [
            {
              title: "Widget 4",
              type: "widget",
            },
          ],
        },
        {
          title: "View 5",
          type: "view",
          childrens: [
            {
              title: "Widget 5",
              type: "widget",
              childrens: [
                {
                  title: "Widget 5.1",
                  type: "widget",
                },
                {
                  title: "Widget 5.2",
                  type: "widget",
                },
                {
                  title: "Widget 5.3",
                  type: "widget",
                },
                {
                  title: "Widget 5.4",
                  type: "widget",
                  childrens: [
                    {
                      title: "Task 5.4.1",
                      type: "task",
                    },
                    {
                      title: "Task 5.4.2",
                      type: "task",
                    },
                    {
                      title: "Task 5.4.3",
                      type: "task",
                    },
                    {
                      title: "Task 5.4.4",
                      type: "task",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  const buildTree = (node) => {
    return (
      <li>
        <span className={node.type ? "type-" + node.type : ""}>
          {node.title}
        </span>
        {node.childrens && (
          <ul key={Date.now() + Math.floor(Math.random() * 1000)}>
            {node.childrens.map((children) => buildTree(children))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="App">
      <ul className="tree">{tree && tree.map((node) => buildTree(node))}</ul>
    </div>
  );
}

export default App;
