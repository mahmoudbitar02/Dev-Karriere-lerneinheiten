import { useContext, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Task } from "@/types/board.type";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { UserNameContext } from "@/context/UserNameContext";

function TaskDialog({
  open,
  handleOpenChange,
  onSubmitUpdate,
  title,
  description,
  task,
}: {
  open: boolean;
  handleOpenChange: (open: boolean) => void;
  onSubmitUpdate: (task: Task) => void;
  title: string;
  description: string;
  task: Task;
}) {
  const context = useContext(UserNameContext);
  const [taskTitle, setTaskTitle] = useState<string>(task.title);
  const [taskDescription, setTaskDescription] = useState<string>(task.description ?? "");
  const [selectedPerson, setSelectedPerson] = useState<string>(task.assignedTo ?? " ");

  const [date, setDate] = useState<Date | undefined>(task.deadLine ? new Date(task.deadLine) : undefined);

  function handleSubmitUpdate() {
    const updatedTask: Task = {
      ...task,
      title: taskTitle,
      description: taskDescription,
      assignedTo: selectedPerson,
      deadLine: date?.toISOString(),
    };
    onSubmitUpdate(updatedTask);
  }
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
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
                <SelectItem value=" ">Keine Zuweisung</SelectItem>
                <SelectItem value={context?.userName ?? "undefined"}>{context?.userName ?? "undefined"}</SelectItem>
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
                  {date ? format(date, "dd.MM.yyyy") : <span>Pick a date</span>}
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
              <Button onClick={handleSubmitUpdate} disabled={taskTitle === ""} className="mt-4">
                Speichern
              </Button>
            }
          ></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default TaskDialog;
