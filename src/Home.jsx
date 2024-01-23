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

const buttons = [
  <Button key="under20k">Under 20K$</Button>,
  <Button key="under40k">Under 40K$</Button>,
  <Button key="under60k">Under 60K$</Button>,
  <Button key="under80k">Under 80K$</Button>,
  <Button key="under100k">Under 100K$</Button>,
];

export default function Home() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isBudget, setIsBudget] = React.useState(true);
  const [isBrand, setIsBrand] = React.useState(false);
  const [brand, setBrand] = React.useState("");
  const [isNew, setIsNew] = React.useState(false);
  const [isYear, setIsYear] = React.useState(false);
  const [isFuelType, setIsFuelType] = React.useState(false);
  const [isCarType, setIsCarType] = React.useState(false);
  const [isGearType, setIsGearType] = React.useState(false);
  const [isDriveType, setIsDriveType] = React.useState(false);

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

  const handleReset = () => {
    setActiveStep(0);
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
                {isBrand && <SelectBrand setBrand={setBrand} />}
                {isBrand && <SelectModel brand={brand} />}
                {isNew && <SelectIsNew />}
                {isYear && <SelectYear />}
                {isFuelType && <SelectFuelType />}
                {isCarType && <SelectCarType />}
                {isGearType && <SelectGearType />}
                {isDriveType && <SelectDriveType />}
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Search" : "Continue"}
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
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  );
}
