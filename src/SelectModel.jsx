import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const models = {
  Mercedes: [
    "a_class",
    "b_class",
    "c_class",
    "e_class",
    "s_class",
    "gla",
    "glc",
    "gle",
    "gls",
    "sls_amg",
    "slc",
    "cls",
    "amg_gt",
    "v_class",
    "x_class",
  ],
  BMW: [
    "1 Series",
    "2 Series",
    "3 Series",
    "4 Series",
    "5 Series",
    "6 Series",
    "7 Series",
    "8 Series",
    "X1",
    "X2",
    "X3",
    "X4",
    "X5",
    "X6",
    "X7",
    "Z4",
    "i3",
    "i8",
  ],
  Audi: [
    "A1",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "Q2",
    "Q3",
    "Q4",
    "Q5",
    "Q6",
    "Q7",
    "Q8",
    "TT",
    "R8",
    "S3",
    "S5",
    "S7",
    "S8",
  ],
  Volkswagen: [
    "Polo",
    "Golf",
    "Passat",
    "Jetta",
    "Arteon",
    "Touareg",
    "Atlas",
    "ID.4",
    "Up!",
    "Amarok",
    "Caddy",
    "California",
    "Vento",
    "Terramont",
    "Arteon Shooting Brake",
    "ID.3",
    "Golf Alltrack",
    "Multivan",
    "Caravelle",
    "Crafter",
    "Amarok V6",
    "Arteon R",
    "ID. Buzz",
    "Amarok Black Edition",
  ],
  Porsche: [
    "911",
    "718_cayman",
    "718_boxster",
    "panamera",
    "cayenne",
    "macan",
    "taycan",
    "cayman_gt4",
    "911_turbo",
    "911_gt3",
    "911_targa",
    "718_cayman_gt4",
    "718_boxster_gt4",
    "panamera_turbo",
    "cayenne_turbo",
    "macan_turbo",
    "taycan_turbo",
    "911_carrera",
    "911_turbo_s",
  ],
  Opel: [
    "astra",
    "corsa",
    "insignia",
    "cascada",
    "mokka",
    "grandland_x",
    "crossland_x",
    "karl",
    "vivaro",
    "zafira",
    "ampera",
    "gt",
    "speedster",
    "signum",
    "ascona",
    "meriva",
    "antara",
    "tigra",
    "calibra",
    "kadett",
  ],
};

export default function SelectModel({ brand, setSelectedModel }) {
  const [model, setModel] = React.useState("");

  const handleChange = (event) => {
    setModel(event.target.value);
    setSelectedModel(event.target.value);
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
