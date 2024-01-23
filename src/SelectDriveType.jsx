import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectDriveType() {
  const [driveType, setDriveType] = React.useState("");

  const handleChange = (event) => {
    setDriveType(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Drive Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={driveType}
          onChange={handleChange}
          autoWidth
          label="GearType"
        >
          <MenuItem value="rear">Rear-Wheel Drive</MenuItem>
          <MenuItem value="front">Front-Wheel Drive</MenuItem>
          <MenuItem value="all-wheel">All-Wheel Drive</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
