import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent-child-communication",
  templateUrl: "./parent-child-communication.component.html"
})
export class ParentChildCommunication implements OnInit {
  tasks: Task[];
  constructor(public taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  onCompleteTask(task: Task) {
    console.log("onCompleteTask", task);
    task.done = true;
  }

  onAddTask(task: Task) {
    console.log("onAddTask", task);
    this.tasks.push(task);
  }
}
