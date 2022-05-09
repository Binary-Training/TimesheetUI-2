import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const page = [
  {
    value: 5,
    label: "Five",
  },
  {
    value: "10",
    label: "Ten",
  },
  {
    value: "20",
    label: "Twenty",
  },
  {
    value: "All",
    label: "All",
  },
];

export default function SelectTextFields() {
  const [task, setTask] = React.useState("Other");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: 182 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency-native"
          select
          value={task}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        >
          {page.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
