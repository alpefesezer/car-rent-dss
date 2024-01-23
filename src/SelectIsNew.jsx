import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectIsNew() {
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={status}
          onChange={handleChange}
          autoWidth
          label="Status"
        >
          <MenuItem value="brandNew">Brand New</MenuItem>
          <MenuItem value="used">Used</MenuItem>
          <MenuItem value="nothing">Doesn't matter</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
