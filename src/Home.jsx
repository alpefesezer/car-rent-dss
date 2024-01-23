import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import SelectBrand from "./SelectBrand";
import SelectModel from "./SelectModel";
import SelectIsNew from "./SelectIsNew";
import SelectYear from "./SelectYear";
import SelectFuelType from "./SelectFuelType";
import SelectCarType from "./SelectCarType";
import SelectGearType from "./SelectGearType";
import SelectDriveType from "./SelectDriveType";
import { getCarsWithOptions } from "./carsDb/testDb";

const steps = [
  {
    label: "Select your budget",
    description: `First, specify your budget`,
  },
  {
    label: "Is there a specific brand do you want?",
    description:
      "If there is, please select from below. If there is not, click SKIP",
  },
  {
    label: "Do you want a brand-new car or used one?",
    description: `Choose the one according to your preferences.`,
  },
  {
    label: "Would you like to choose a vehicle released in any year?",
    description: "Choose the year you prefer, if you don't you can click SKIP",
  },
  {
    label: "Would you like to choose the fuel type you prefer.",
    description: "Choose the fuel type you prefer.",
  },
  {
    label: "Would you like to choose car type?",
    description: "Choose the car type. You can SKIP if you don't want to.",
  },
  {
    label: "Would you like to choose gear type?",
    description: "Choose the gear type. You can SKIP if you don't want to.",
  },
  {
    label: "Would you like to choose drive type?",
    description: "Choose the drive type. You can SKIP if you don't want to.",
  },
];

export default function Home() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isBudget, setIsBudget] = React.useState(true);
  const [isBrand, setIsBrand] = React.useState(false);
  const [brand, setBrand] = React.useState("");
  const [selectedModel, setSelectedModel] = React.useState("");
  const [selectedIsNew, setSelectedIsNew] = React.useState("");
  const [selectedYear, setSelectedYear] = React.useState("");
  const [selectedFuelType, setSelectedFuelType] = React.useState("");
  const [selectedCarType, setSelectedCarType] = React.useState("");
  const [selectedDriveType, setSelectedDriveType] = React.useState("");
  const [selectedGearType, setSelectedGearType] = React.useState("");
  const [isNew, setIsNew] = React.useState(false);
  const [isYear, setIsYear] = React.useState(false);
  const [isFuelType, setIsFuelType] = React.useState(false);
  const [isCarType, setIsCarType] = React.useState(false);
  const [isGearType, setIsGearType] = React.useState(false);
  const [isDriveType, setIsDriveType] = React.useState(false);
  const [userOptions, setUserOptions] = React.useState({});
  const [selectedButton, setSelectedButton] = React.useState(null);

  // userOptions = {
  //   carBrand: "BMW",
  //   carModel: "i3",
  //   carType: "Hatchback",
  //   fuelType: "Electric",
  //   gearType: "Automatic",
  //   driveType: "All-Wheel Drive",
  //   isUsed: false,
  //   price: 70000,
  //   carYear: 2024,
  // };

  async function handlePrice(event) {
    let maxPrice;
    switch (event.target.id) {
      case "20k":
        maxPrice = 20000;
        break;
      case "40k":
        maxPrice = 40000;
        break;
      case "60k":
        maxPrice = 60000;
        break;
      case "80k":
        maxPrice = 80000;
        break;
      case "100k":
        maxPrice = 100000;
        break;
      default:
        return;
    }

    setUserOptions((prevOptions) => ({ ...prevOptions, maxPrice }));
    setSelectedButton(event.target.id);
  }

  React.useEffect(() => {
    const fetchData = async () => {
      //await getCarsWithOptions(userOptions);
    };

    fetchData();
  }, [userOptions]);

  const buttons = [
    <Button
      id="20k"
      onClick={handlePrice}
      style={{
        backgroundColor: selectedButton === "20k" ? "pink" : "defaultColor",
      }}
    >
      Under 20K$
    </Button>,
    <Button
      id="40k"
      onClick={handlePrice}
      style={{
        backgroundColor: selectedButton === "40k" ? "pink" : "defaultColor",
      }}
    >
      Under 40K$
    </Button>,
    <Button
      id="60k"
      onClick={handlePrice}
      style={{
        backgroundColor: selectedButton === "60k" ? "pink" : "defaultColor",
      }}
    >
      Under 60K$
    </Button>,
    <Button
      id="80k"
      onClick={handlePrice}
      style={{
        backgroundColor: selectedButton === "80k" ? "pink" : "defaultColor",
      }}
    >
      Under 80K$
    </Button>,
    <Button
      id="100k"
      onClick={handlePrice}
      style={{
        backgroundColor: selectedButton === "100k" ? "pink" : "defaultColor",
      }}
    >
      Under 100K$
    </Button>,
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      const newStep = prevActiveStep + 1;
      if (newStep !== 0) {
        setIsBudget(false);
      }
      if (newStep !== 1) {
        setIsBrand(false);
      } else {
        setIsBrand(true);
      }
      if (newStep !== 2) {
        setIsNew(false);
      } else {
        setIsNew(true);
      }
      if (newStep !== 3) {
        setIsYear(false);
      } else {
        setIsYear(true);
      }
      if (newStep !== 4) {
        setIsFuelType(false);
      } else {
        setIsFuelType(true);
      }
      if (newStep !== 5) {
        setIsCarType(false);
      } else {
        setIsCarType(true);
      }
      if (newStep !== 6) {
        setIsGearType(false);
      } else {
        setIsGearType(true);
      }
      if (newStep !== 7) {
        setIsDriveType(false);
      } else {
        setIsDriveType(true);
      }
      return newStep;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      const newStep = prevActiveStep - 1;
      if (newStep !== 0) {
        setIsBudget(false);
      } else {
        setIsBudget(true);
      }
      if (newStep !== 1) {
        setIsBrand(false);
      } else {
        setIsBrand(true);
      }
      if (newStep !== 2) {
        setIsNew(false);
      } else {
        setIsNew(true);
      }
      if (newStep !== 3) {
        setIsYear(false);
      } else {
        setIsYear(true);
      }
      if (newStep !== 4) {
        setIsFuelType(false);
      } else {
        setIsFuelType(true);
      }
      if (newStep !== 5) {
        setIsCarType(false);
      } else {
        setIsCarType(true);
      }
      if (newStep !== 6) {
        setIsGearType(false);
      } else {
        setIsGearType(true);
      }
      if (newStep !== 7) {
        setIsDriveType(false);
      } else {
        setIsDriveType(true);
      }
      return newStep;
    });
  };

  const handleFilter = () => {
    getCarsWithOptions(userOptions);
    setActiveStep(0);
  };

  const handleBrandChange = (brand) => {
    const carBrand = brand;
    setBrand(brand);
    setUserOptions((prevOptions) => ({ ...prevOptions, carBrand }));
  };

  const handleModelChange = (selectedModel) => {
    const carModel = selectedModel;
    setSelectedModel(selectedModel);
    setUserOptions((prevOptions) => ({ ...prevOptions, carModel }));
    console.log(userOptions);
  };

  const handleIsNew = (selectedIsNew) => {
    const isUsed = selectedIsNew;
    setSelectedIsNew(selectedIsNew);
    setUserOptions((prevOptions) => ({ ...prevOptions, isUsed }));
    console.log(selectedIsNew);
  };

  const handleYearChange = (selectedYear) => {
    const carYear = selectedYear;
    setSelectedYear(selectedYear);
    setUserOptions((prevOptions) => ({ ...prevOptions, carYear }));
    console.log(selectedYear);
  };

  const handleFuelTypeChange = (selectedFuelType) => {
    const fuelType = selectedFuelType;
    setSelectedFuelType(selectedFuelType);
    setUserOptions((prevOptions) => ({ ...prevOptions, fuelType }));
  };

  const handleCarTypeChange = (selectedCarType) => {
    const carType = selectedCarType;
    setSelectedCarType(selectedCarType);
    setUserOptions((prevOptions) => ({ ...prevOptions, carType }));
  };

  const handleGearTypeChange = (selectedGearType) => {
    const gearType = selectedGearType;
    setSelectedGearType(selectedGearType);
    setUserOptions((prevOptions) => ({ ...prevOptions, gearType }));
  };

  const handleDriveTypeChange = (selectedDriveType) => {
    const driveType = selectedDriveType;
    setSelectedDriveType(selectedDriveType);
    setUserOptions((prevOptions) => ({ ...prevOptions, driveType }));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
      <Box sx={{ maxWidth: 700, minWidth: 700 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 7 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                {isBudget && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      "& > *": {
                        m: 1,
                      },
                    }}
                  >
                    <ButtonGroup
                      size="large"
                      aria-label="large button group"
                      color="secondary"
                    >
                      {buttons}
                    </ButtonGroup>
                  </Box>
                )}
                {isBrand && <SelectBrand setBrand={handleBrandChange} />}
                {isBrand && (
                  <SelectModel
                    brand={brand}
                    setSelectedModel={handleModelChange}
                  />
                )}
                {isNew && <SelectIsNew setSelectedIsNew={handleIsNew} />}
                {isYear && <SelectYear setSelectedYear={handleYearChange} />}
                {isFuelType && (
                  <SelectFuelType setSelectedFuelType={handleFuelTypeChange} />
                )}
                {isCarType && (
                  <SelectCarType setSelectedCarType={handleCarTypeChange} />
                )}
                {isGearType && (
                  <SelectGearType setSelectedGearType={handleGearTypeChange} />
                )}
                {isDriveType && (
                  <SelectDriveType
                    setSelectedDriveType={handleDriveTypeChange}
                  />
                )}
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Continue
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                    {(isBrand ||
                      isYear ||
                      isFuelType ||
                      isCarType ||
                      isGearType ||
                      isDriveType) && (
                      <Button sx={{ mt: 1, mr: 1 }} onClick={handleNext}>
                        Skip
                      </Button>
                    )}
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>
              All steps completed - Now you can filter and see the best cars for
              you!
            </Typography>
            <Button
              variant="contained"
              onClick={handleFilter}
              sx={{ mt: 1, mr: 1 }}
            >
              Filter
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  );
}
