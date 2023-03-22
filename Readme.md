ToDo List

 ![1](https://user-images.githubusercontent.com/54109017/196136965-dc3a1879-75e2-46a5-9444-0ec0409e66e3.JPG)
 ![2](https://user-images.githubusercontent.com/54109017/196137049-f6f0c465-81a7-49d7-b0bd-6529fc7ca288.JPG)
 ## Build Setup

``` bash
# install dependencies
npm install

# server at localhost:3000
npm start
```
 ## Functions:
 - Create new task: User can enter information and create new tasks in the form.
  <The created tasks will be sorted bt due date from the near future to far future>.
  	+ Task title is a required field,
  	+ Due Date hasa default value Which is today,
  	+ Priority field has three values: low, normal, high. The default value is normal.
 - When you click Done button, all checkbox will be ticked. When you click Remove, all tasks will be deleted.
 - When you tick Detail button, the task item will display detailed information.
  + The users can update task data in this form (Fill full informations in all fields to be able to update).
  + When you click the Remove button, this task will be deleted.
 - Users can search tasks by task title. Each time the user enters text, the task list will be filtered and displayed.
 --------------------
 ***Implement app base on Reactjs.
