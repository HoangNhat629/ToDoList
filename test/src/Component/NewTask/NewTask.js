import React, { useState, useContext } from "react";
import "./NewTask.css";
import { Data } from "../GlobalState";
import Task from "../ListToDo/Task";
export default function NewTask() {
  const state = useContext(Data);
  const [datas, setDatas] = useState(state.data);
  const [data, setData] = useState({
    id: 0,
    newTask: "",
    description: "",
    due_date: "",
    piority: "",
    checked: false,
  });
  const [isCheck, setIsCheck] = useState(false);
  //console.log(datas.length);
  const date = new Date();
  const futureDate = date.getDate();
  date.setDate(futureDate);
  const defaultValue = date.toLocaleDateString("en-CA");
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };
  const handleChangeInputDate = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value.toString() });
    console.log(data);
  };
  const Submit = (e) => {
    setData({ ...data, id: datas.length });
    datas.push(data);
    setData({
      id: 0,
      newTask: "",
      description: "",
      due_date: "",
      piority: "",
      checked: false,
    });
    e.preventDefault();
  };
  const hanldeCheck = (id) => {
    datas.forEach((data) => {
      if (data.id === id) {
        data.checked = !data.checked;
      }
    });
    setDatas([...datas]);
  };
  const CheckAll = () => {
    datas.forEach((data) => {
      data.checked = !isCheck;
    });
    setDatas(datas);
    setIsCheck(!isCheck);
  };
  const Delete = (id) => {
    setDatas((dt) =>
      dt.filter((a) => {
        return a.id !== id;
      })
    );
  };
  const DeleteAll = () => {
    datas.forEach((data) => {
      if (data.checked) {
        Delete(data.id);
      }
    });
  };
  const filter = (event) => {
    const { value } = event.target;
    if (value !== "") {
      const updateData = datas.filter((i) => {
        return i.newTask.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      });
      setDatas(updateData);
    } else {
      setDatas(state.data);
    }
  };
  const handleUpdate = (id) => {
    let i = datas.findIndex((dt) => {
      return dt.id === id;
    });
    setData({ ...data, id: i });
    setDatas((dt) =>
      dt.filter((a) => {
        return a.id !== id;
      })
    );
    datas.push(data);
  };
  return (
    <div className="form">
      <div className="new-task">
        <form onSubmit={Submit}>
          <h2>New Task</h2>
          <input
            type="text"
            required
            name="newTask"
            placeholder="Add new task..."
            onChange={handleChangeInput}
          />
          <label>
            Description
            <textarea
              id="description"
              name="description"
              onChange={handleChangeInput}
            />
          </label>
          <div className="two-cols">
            <label>
              Due Date
              <input
                type="date"
                name="due_date"
                defaultValue={defaultValue}
                onChange={handleChangeInputDate}
              />
            </label>
            <label>
              Piority
              <select
                className="replaced"
                value="normal"
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
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
      <div className="new-task">
        <form>
          <h2>To Do List</h2>
          <input
            type="text"
            id="search"
            placeholder="Search..."
            onChange={filter}
          />
          {datas.map((data, key) => {
            //console.log(data);
            return (
              <Task
                key={key}
                data={data}
                hanldeCheck={hanldeCheck}
                Delete={Delete}
                handleChangeInputDate={handleChangeInputDate}
                handleChangeInput={handleChangeInput}
                handleUpdate={handleUpdate}
              />
            );
          })}
          <div className="footer">
            <h5>Buil Action:</h5>
            <div className="group-buttons">
              <button id="done" type="button" onClick={CheckAll}>
                Done
              </button>
              <button id="remove" type="button" onClick={DeleteAll}>
                Remove
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
