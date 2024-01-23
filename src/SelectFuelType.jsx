import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectFuelType({ setSelectedFuelType }) {
  const [fuelType, setFuelType] = React.useState("");

  const handleChange = (event) => {
    setFuelType(event.target.value);
    setSelectedFuelType(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Fuel Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={fuelType}
          onChange={handleChange}
          autoWidth
          label="FuelType"
        >
          <MenuItem value="electric">Electric</MenuItem>
          <MenuItem value="diesel">Diesel</MenuItem>
          <MenuItem value="gasoline">Gasoline</MenuItem>
          <MenuItem value="hybrid">Hybrid</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
