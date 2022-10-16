import React, { useState } from "react";
import "./Task.css";
export default function Task(props) {
  const {
    data,
    hanldeCheck,
    Delete,
    handleChangeInputDate,
    handleChangeInput,
    handleUpdate,
  } = props;
  const [detail, setDetail] = useState(false);
  const dt = new Date(data.due_date).toLocaleDateString("en-CA");
  //console.log(data.data.piority);
  const Change = () => {
    setDetail(!detail);
  };
  // console.log(data.checked);
  return (
    <>
      <div className="task">
        <input
          type="checkbox"
          id="check"
          defaultChecked={data.checked}
          onClick={() => hanldeCheck(data.id)}
        />
        <h5>{data.newTask}</h5>
        <div className="group-buttons">
          <button id="detail" type="button" onClick={Change}>
            Detail
          </button>
          <button id="delete" type="button" onClick={() => Delete(data.id)}>
            Remove
          </button>
        </div>
      </div>
      {detail ? (
        <div className="detail-action">
          <form>
            <input
              type="text"
              name="newTask"
              placeholder={data.newTask}
              onChange={handleChangeInput}
            />
            <label>
              Description
              <textarea
                id="description"
                name="description"
                placeholder={data.description}
                onChange={handleChangeInput}
              />
            </label>
            <div className="two-cols">
              <label>
                Due Date
                <input
                  type="date"
                  name="due_date"
                  defaultValue={dt}
                  onChange={handleChangeInputDate}
                />
              </label>
              <label>
                Piority
                <select
                  className="replaced"
                  value={data.piority}
                  name="piority"
                  onChange={handleChangeInput}
                >
                  <option value="high">High</option>
                  <option value="normal">Normal</option>
                  <option value="low">Low</option>
                </select>
              </label>
            </div>
            <div className="row_id">
              <button type="button" onClick={() => handleUpdate(data.id)}>
                Update
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
