import React from "react";
import TodoList from "./TodoList";
import { FcInspection } from "react-icons/fc";
import { GrActions } from "react-icons/gr";

function Layout() {
  return (
    <div className="row me-0">
      <div className="col-md-2" style={{ backgroundColor: "beige" }}>
        <div className="head">
          <h3
            className="p-3"
            style={{ color: "#013456", fontWeight: 700, fontSize: "35px" }}
          >
            <FcInspection /> To Do
          </h3>
        </div>
        <div>
          <div className="d-flex" style={{ justifyContent: "space-evenly" }}>
            <span>
              <GrActions />
            </span>
            <span>My Day</span>
          </div>
        </div>
      </div>
      <div className="col-md-10">
        {" "}
        <TodoList />{" "}
      </div>
    </div>
  );
}

export default Layout;
