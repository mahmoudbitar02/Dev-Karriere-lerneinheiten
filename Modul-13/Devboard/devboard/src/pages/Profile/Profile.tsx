import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function Profile() {
  const [username, setUsername] = useState("Mahmoud");
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Profil</h1>
      <Card>
        <CardHeader>
          <CardTitle>Benutzername ändern</CardTitle>
          <CardDescription>Ändere deinen Anzeigenamen für das Kanban-Board</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-1 flex-col">
            <label>Benutzername</label>
            <Input id="username" value={username} />
            <Button className="w-fit">Speichern</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Profile;
