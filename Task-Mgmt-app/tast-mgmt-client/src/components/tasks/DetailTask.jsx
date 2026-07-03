import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {getTaskWithUsers} from "../../api/assignTask";
import "./DetailTask.css"

const DetailTask = () => {
  const { ID } = useParams();

  const [task, setTask] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTaskDetails = async (ID) => {
    try {
      const res = await getTaskWithUsers(ID);

      if (res.success) {
        setTask(res.details.tasks);
        setUsers(res.details.users);
      }
    } catch (error) {
      console.log(error);
      alert(error.response?.msg || "Failed to fetch task details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTaskDetails(ID);
  }, [ID]);

  if (loading) {
    return <h3 className="text-center mt-5">Loading task...</h3>;
  }

  if (!task) {
    return <h3 className="text-center mt-5 text-danger">Task not found</h3>;
  }

  const status = task.status?.toLowerCase();

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-header bg-dark text-white text-center rounded-top-4">
          <h3>Task Details</h3>
        </div>

        <div className="card-body p-4">
          <h4 className="text-primary">{task.title}</h4>

          <p className="text-muted">
            {task.description || "No description available"}
          </p>

          <hr />

          <div className="row">
            <div className="col-md-6 mb-3">
              <strong>Status:</strong>{" "}
              <span className="badge bg-info">{task.status}</span>
            </div>

            <div className="col-md-6 mb-3">
              <strong>Start Date:</strong>{" "}
              {task.startDate
                ? new Date(task.startDate).toLocaleDateString()
                : "N/A"}
            </div>

            <div className="col-md-6 mb-3">
              <strong>End Date:</strong>{" "}
              {task.endDate
                ? new Date(task.endDate).toLocaleDateString()
                : "N/A"}
            </div>
          </div>

          <hr />

          <h5 className="mb-3">Assigned Users</h5>

          {users.length > 0 ? (
            <div className="row">
              {users.map((user) => (
                <div className="col-md-4 mb-3" key={user.id}>
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body text-center">
                      <div
                        className="rounded-circle bg-primary text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                        style={{
                          width: "55px",
                          height: "55px",
                          fontSize: "22px",
                          fontWeight: "bold",
                        }}
                      >
                        {user.name?.charAt(0).toUpperCase()}
                      </div>

                      <h6 className="mb-1">{user.name}</h6>
                      <small className="text-muted">{user.email}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted">No users assigned to this task.</p>
          )}

          <hr />

          <h5 className="mb-4">Task Timeline</h5>

          <div className="timeline">
            <div
              className={`timeline-step ${
                ["started", "inprogress", "completed"].includes(status)
                  ? "active started"
                  : ""
              }`}
            >
              <div className="circle">1</div>
              <p>Started</p>
            </div>

            <div
              className={`timeline-step ${
                ["inprogress", "completed"].includes(status)
                  ? "active inprogress"
                  : ""
              }`}
            >
              <div className="circle">2</div>
              <p>In Progress</p>
            </div>

            <div
              className={`timeline-step ${
                status === "completed" ? "active completed" : ""
              }`}
            >
              <div className="circle">3</div>
              <p>Completed</p>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link to="/dashboard/all-tasks" className="btn btn-secondary">
              Back to Tasks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTask;