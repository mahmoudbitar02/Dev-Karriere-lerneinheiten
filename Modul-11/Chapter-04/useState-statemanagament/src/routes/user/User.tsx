import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type RandomUser = {
  name: { first: string; last: string };
  email: string;
  picture: { large: string; medium: string };
  dob: { age: number };
  gender: string;
};

function User() {
  const [user, setUser] = useState<RandomUser | null>(null);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const { data, status, statusText } = await axios.get<{ results: RandomUser[] }>("https://randomuser.me/api/");
      if (status === 200 && data.results.length > 0) {
        setUser(data.results[0]);
      } else {
        setUser(null);
        setErrorText(statusText);
      }
    } catch (error) {
      setErrorText("an Error occurred");
      setUser(null);
      console.log(error);
    }
  }

  function displayUser() {
    if (user) {
      return (
        <>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 345 }} image={user.picture.large} title="User Profile"></CardMedia>
            <CardContent>
              <Typography variant="h5">
                {user.name.first} {user.name.last}
              </Typography>
              <Typography variant="body2">
                {user.email} {user.gender}
              </Typography>
            </CardContent>
          </Card>
          <div>
            <img src={user.picture.large} alt={`user ${user.name.first} profile`} />
            <p>
              Firstname: {user.name.first}, Lastname: {user.name.last}
            </p>
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
            <p>Age: {user.dob.age}</p>
          </div>
        </>
      );
    } else {
      return <p>{errorText}</p>;
    }
  }

  return <div>{displayUser()}</div>;
}

export default User;
