import { Button } from "@/components/ui/button";
import { ChevronDownIcon, Plus } from "lucide-react";
import TaskCard from "./TaskCard";
import type { Task } from "@/types/board.type";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function BoardColumn({
  title,
  tasks,
  draggedColumn,
  setDraggedColumn,
  onAddTask,
  onDeleteTask,
}: {
  title: "ToDo" | "Progress" | "Done";
  tasks: Task[];
  draggedColumn: string | null;
  setDraggedColumn: (column: string | null) => void;
  onAddTask: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
}) {
  const [isDragHover, setIsDragHover] = useState(false);
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [selectedPerson, setSelectedPerson] = useState<string>("");

  const [date, setDate] = useState<Date>();

  function handleDragHover(event: React.DragEvent<HTMLDivElement>) {
    if (draggedColumn === title) {
      setIsDragHover(false);
    } else {
      setIsDragHover(true);
    }
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    if (draggedColumn === title) {
      setIsDragHover(false);
    } else {
      // call function to move task to this column
    }
  }

  function handleAddNewTask() {
    const newTask: Task = {
      id: String(Math.random()),
      title: taskTitle,
      description: taskDescription ?? "",
      column: title,
      deadLine: date?.toISOString() ?? undefined,
    };
    onAddTask(newTask);
    setTaskTitle("");
    setTaskDescription("");
    setSelectedPerson("");
    setDate(undefined);
  }

  return (
    <div
      className={`border border-black rounded-lg bg-gray-50 ${isDragHover && " border-primary border"}`}
      onDrop={handleDrop}
      onDragEnter={handleDragHover}
      onDragOver={handleDragHover}
      onDragLeave={() => setIsDragHover(false)}
    >
      <div className="flex items-center justify-between border-b border-black p-4">
        <h3 className="font-bold">{title}</h3>
        <Dialog>
          <DialogTrigger
            render={
              <Button variant={"ghost"} size={"icon-lg"}>
                <Plus />
              </Button>
            }
          ></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Neue Task erstellen</DialogTitle>
              <DialogDescription>Erstelle eine neue Aufgabe für diese Spalte.</DialogDescription>
            </DialogHeader>
            <div>
              <span>Title</span>
              <Input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
            </div>
            <div>
              <span>Description</span>
              <Textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
            </div>

            <div>
              <span>zugewiesen an</span>
              <Select onValueChange={(value) => setSelectedPerson(value ?? "")} value={selectedPerson}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="hi">hi</SelectItem>
                    <SelectItem value="test">test</SelectItem>
                    <SelectItem value="halo">halo</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col ">
              <span>Deadline</span>
              <Popover>
                <PopoverTrigger
                  render={
                    <Button
                      variant={"outline"}
                      data-empty={!date}
                      className="w-full justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                    >
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                      <ChevronDownIcon data-icon="inline-end" />
                    </Button>
                  }
                />
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={date} onSelect={setDate} defaultMonth={date} />
                </PopoverContent>
              </Popover>
            </div>
            <DialogFooter>
              <DialogClose
                render={
                  <Button variant="outline" className="mt-4">
                    Abbrechen
                  </Button>
                }
              ></DialogClose>

              <DialogClose
                render={
                  <Button onClick={handleAddNewTask} className="mt-4">
                    Speichern
                  </Button>
                }
              ></DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="p-4 ">
        <div className={`border-2 border-primary border-dashed text-primary text-center p-2 rounded-lg bg-primary/10 ${!isDragHover && "hidden"}`}>
          Hier ablegen
        </div>
        {tasks.map((task) => {
          return <TaskCard task={task} onDeleteTask={onDeleteTask} setDraggedColumn={setDraggedColumn} />;
        })}
      </div>
    </div>
  );
}

export default BoardColumn;
