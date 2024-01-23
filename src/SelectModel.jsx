import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const models = {
  Mercedes: ["C-Class", "E-Class", "S-Class"],
  BMW: ["3 Series", "5 Series", "7 Series"],
  Ford: ["Fiesta", "Focus", "Mustang"],
};

export default function SelectModel({ brand }) {
  const [model, setModel] = React.useState("");

  const handleChange = (event) => {
    setModel(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 3, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Model</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={model}
          onChange={handleChange}
          autoWidth
          label="Model"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {models[brand] &&
            models[brand].map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
