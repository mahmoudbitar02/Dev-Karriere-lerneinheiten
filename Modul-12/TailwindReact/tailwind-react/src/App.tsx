import { Button } from "@/components/ui/button";
import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster, toast } from "./components/ui/toast";
function App() {
  function handleClick() {
    toast.add({
      title: "create Todo",
      description: "heute, 15:23",
    });
  }

  function handleCheck(checked: boolean) {
    if (checked) console.log("Switch: " + checked);
    else {
      console.log(1 + 1);
    }
  }

  function hand() {
    const product: number = 1;
    if (product === 2) {
      toast.add({
        type: "warning",
        description: "The event cannot start before 8:00 AM.",
      });
    } else {
      toast.add({
        type: "error",
        description: "The event could not be created.",
        priority: "high",
      });
    }
  }

  return (
    <>
      <h1 className="bg-slate-500">test</h1>
      <Button className="bg-slate-400 hover:cursor-pointer transition:all-3 " onClick={handleClick}>
        Click me
      </Button>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>

      <Toaster />
      <br />
      <br />

      <div className="flex flex-wrap gap-2">
        <Button className="w-60 py-10 hover:bg-slate-600 transition duration-900" variant="outline" onClick={hand}>
          Add
        </Button>
      </div>
      <br />
      <br />

      <hr />
      <br />
      <br />

      <Field orientation="horizontal" className="max-w-sm">
        <FieldContent>
          <FieldLabel htmlFor="switch-focus-mode">Share across devices</FieldLabel>
          <FieldDescription>Focus is shared across devices, and turns off when you leave the app.</FieldDescription>
        </FieldContent>
        <Switch onCheckedChange={handleCheck} id="switch-focus-mode" />
      </Field>
    </>
  );
}

export default App;
