import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectBrand({ setBrand }) {
  const [brand, setInternalBrand] = React.useState("");

  const handleChange = (event) => {
    setInternalBrand(event.target.value);
    setBrand(event.target.value); // Add this line
  };

  return (
    <div>
      <FormControl sx={{ m: 3, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Brand</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={brand}
          onChange={handleChange}
          autoWidth
          label="Model"
        >
          <MenuItem value={undefined}>
            <em>None</em>
          </MenuItem>
          <MenuItem value="Mercedes">Mercedes</MenuItem>
          <MenuItem value="BMW">BMW</MenuItem>
          <MenuItem value="Audi">Audi</MenuItem>
          <MenuItem value="Volkswagen">Volkswagen</MenuItem>
          <MenuItem value="Porsche">Porsche</MenuItem>
          <MenuItem value="Opel">Opel</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
