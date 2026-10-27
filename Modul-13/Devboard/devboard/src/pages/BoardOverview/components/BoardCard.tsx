import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

function BoardCard() {
  return (
    <Link to={`/boards/${1}`}>
      <Card className="hover:shadow-md transition-shadow border border-black">
        <CardHeader>
          <CardTitle>Name von Board</CardTitle>
          <CardDescription>3 Spalten - 0 Tasks</CardDescription>
          <CardAction>
            <Button className="hover:text-destructive text-muted-foreground" size="icon" variant="ghost">
              <Trash2 />
            </Button>
          </CardAction>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default BoardCard;
