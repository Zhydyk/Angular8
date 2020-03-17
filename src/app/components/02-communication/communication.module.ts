import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {
  TaskFormComponent,
  TaskListComponent,
  ParentChildCommunication
} from "./01-parent-child-communication";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    TaskFormComponent,
    TaskListComponent,
    ParentChildCommunication
  ],
  providers: [],
  exports: [TaskFormComponent, TaskListComponent, ParentChildCommunication]
})
export class CommunicationModule {}
