import { useEffect, useState } from "react";
import axios from "axios";
import "./SampleBody.css"
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
}

export default function SampleBody() {
  const [data, setData] = useState<UserData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ users: UserData[] }>(
          `https://dummyjson.com/users`
        );
        setData(response.data.users);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderTable = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (!data) {
      return <div>No data available</div>;
    }

    if (error) {
      <p>Error fetching data {error.message};</p>;
    }

    return (
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="user table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Maiden Name</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.maidenName}</TableCell>
                <TableCell style={{ color: user.age >= 40 ? 'orange' : 'green'}}>{user.age}</TableCell>
                {/* <TableCell className={user.age >= 40 ? 'adult':'yong'}>
                  {user.age}
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return <div>{renderTable()}</div>;
}
