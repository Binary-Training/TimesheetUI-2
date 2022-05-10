import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SelectTextFields(props) {
  const [task, setTask] = React.useState("Other");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: 70 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency-native"
          select
          size="small"
          value={task}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        >
          {props.data.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
