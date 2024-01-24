import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectCarType({ setSelectedCarType }) {
  const [carType, setCarType] = React.useState("");

  const handleChange = (event) => {
    setCarType(event.target.value);
    setSelectedCarType(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Car Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={carType}
          onChange={handleChange}
          autoWidth
          label="CarType"
        >
          <MenuItem value="Sedan">Sedan</MenuItem>
          <MenuItem value="Coupe">Coupe</MenuItem>
          <MenuItem value="SUV">SUV</MenuItem>
          <MenuItem value="Convertible">Convertible</MenuItem>
          <MenuItem value="Hatchback">Hatchback</MenuItem>
          <MenuItem value="Pickup">Pickup</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
