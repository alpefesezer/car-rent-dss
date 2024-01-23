import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectCarType() {
  const [carType, setCarType] = React.useState("");

  const handleChange = (event) => {
    setCarType(event.target.value);
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
          <MenuItem value="sedan">Sedan</MenuItem>
          <MenuItem value="coupe">Coupe</MenuItem>
          <MenuItem value="suv">SUV</MenuItem>
          <MenuItem value="convertible">Convertible</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
