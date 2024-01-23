import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectIsNew({ setSelectedIsNew }) {
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
    setSelectedIsNew(event.target.value);
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
          <MenuItem value="false">Brand New</MenuItem>
          <MenuItem value="true">Used</MenuItem>
          <MenuItem value="">Doesn't matter</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
