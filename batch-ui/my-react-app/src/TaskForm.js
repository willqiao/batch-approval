import React, { Component } from "react";
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskname: "",
      taskTypes: { backend: false, batch: false, approval: false }
    };
    this.handleRadio = this.handleRadio.bind(this);
  }

  handleRadio(event) {
    let temp = { backend: false, batch: false, approval: false };
    temp[event.target.value] = event.target.checked;
    console.log(temp);
    this.setState({ taskTypes: temp });
  }

  render() {
    console.log(this.state);
    return (
      <form>
        <div className="row">
          <div className="input-field col s6">
            <input
              type="text"
              name="taskname"
              value={this.state.taskname}
              onChange={e => {
                this.setState({ taskname: e.target.value.toUpperCase() });
              }}
            />
            <label htmlFor="taskname">Task Name</label>
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <p>
              <label>
                <input
                  name="radioGroup"
                  type="radio"
                  value="backend"
                  checked={this.state.taskTypes["backend"]}
                  onChange={this.handleRadio}
                />
                <span>Backend</span>
              </label>
            </p>

            <p>
              <label>
                <input
                  name="radioGroup"
                  type="radio"
                  value="batch"
                  checked={this.state.taskTypes["batch"]}
                  onChange={this.handleRadio}
                />
                <span>Batch</span>
              </label>
            </p>

            <p>
              <label>
                <input
                  name="radioGroup"
                  type="radio"
                  value="approval"
                  checked={this.state.taskTypes["approval"]}
                  onChange={this.handleRadio}
                />
                <span>Approval</span>
              </label>
            </p>
          </div>
        </div>

        <br />

        {/* <input
          type="checkbox"
          name="checkGroup"
          value="Backend"
          checked={this.state.taskTypes["backend"]}
        />
        <input
          type="checkbox"
          name="checkGroup"
          value="Batch"
          checked={this.state.taskTypes["batch"]}
        />
        <input
          type="checkbox"
          name="checkGroup"
          value="Approval"
          checked={this.state.taskTypes["approval"]}
        /> */}
      </form>
    );
  }
}

export default TaskForm;
