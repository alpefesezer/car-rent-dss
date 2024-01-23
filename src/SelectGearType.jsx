import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectGearType({ setSelectedGearType }) {
  const [gearType, setGearType] = React.useState("");

  const handleChange = (event) => {
    setGearType(event.target.value);
    setSelectedGearType(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Gear Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={gearType}
          onChange={handleChange}
          autoWidth
          label="GearType"
        >
          <MenuItem value="manuel">Manuel</MenuItem>
          <MenuItem value="automatic">Automatic</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
