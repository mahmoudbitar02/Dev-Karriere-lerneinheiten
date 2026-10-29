import { Card, CardTitle, CardContent, CardHeader, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

function BoardColumn({ title }: { title: string }) {
  return (
    <div className="border border-black rounded-lg bg-gray-50">
      <div className="flex items-center justify-between border-b border-black p-4">
        <h3 className="font-bold">{title}</h3>

        <Button variant={"ghost"} size={"icon-lg"}>
          <Plus />
        </Button>
      </div>
      <div className="p-4 ">Inhalt</div>
    </div>
  );
}

export default BoardColumn;
