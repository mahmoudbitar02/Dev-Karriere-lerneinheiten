import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UserNameContext } from "@/context/UserNameContext";
import { useContext, useState } from "react";

function Profile() {
  const context = useContext(UserNameContext);

  const [username, setUsername] = useState(context?.userName ?? "");
  function handleSubmit() {
    // Speichere in context
    // Speichere in localStorage
    context?.setUserName(username);
    localStorage.setItem("kanban-user-name", username);
  }
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
            <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Button className="w-fit" onClick={handleSubmit}>
              Speichern
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Profile;
