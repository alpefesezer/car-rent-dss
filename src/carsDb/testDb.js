import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  getDoc,
} from "firebase/firestore";

// Cars2 Config
// const firebaseConfig = {
//   apiKey: "AIzaSyCusoLFmPQf-6JWMmFFI3ToS9k6RDm4kP8",
//   authDomain: "cars2-488f3.firebaseapp.com",
//   projectId: "cars2-488f3",
//   storageBucket: "cars2-488f3.appspot.com",
//   messagingSenderId: "979830295690",
//   appId: "1:979830295690:web:594354e05a9463e773f173",
//   measurementId: "G-16C956WWYG",
// };

//cars3 config
const firebaseConfig = {
  apiKey: "AIzaSyCcBsG5KWCwwkXHk93SGDAU7KpSBa6vcOo",
  authDomain: "cars3-53cea.firebaseapp.com",
  projectId: "cars3-53cea",
  storageBucket: "cars3-53cea.appspot.com",
  messagingSenderId: "154765012332",
  appId: "1:154765012332:web:d3ee56d19d45f9e4591749",
  measurementId: "G-8GYC25L5QT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getAllCars() {
  const cars = [];

  // Create a reference to the cars collection
  const carsCollection = collection(db, "cars");

  try {
    // Execute the query to get all documents in the collection
    const querySnapshot = await getDocs(carsCollection);

    // Loop through the documents and extract cars
    querySnapshot.forEach((doc) => {
      const car = doc.data();
      cars.push(car);
    });

    return cars;
  } catch (error) {
    console.error("Error getting all cars:", error);
    return [];
  }
}

export async function getCarsWithOptions(options) {
  const cars = [];

  // Create a reference to the cars collection
  const carsCollection = collection(db, "cars");

  // Start with a base query
  let baseQuery = query(carsCollection);

  // Add conditions based on user-selected options
  if (options.carBrand !== undefined) {
    baseQuery = query(baseQuery, where("carBrand", "==", options.carBrand));
  }

  if (options.carType !== undefined) {
    baseQuery = query(baseQuery, where("carType", "==", options.carType));
  }

  if (options.carModel !== undefined) {
    baseQuery = query(baseQuery, where("carModel", "==", options.carModel));
  }

  if (options.driveType !== undefined) {
    baseQuery = query(baseQuery, where("driveType", "==", options.driveType));
  }

  if (options.fuelType !== undefined) {
    baseQuery = query(baseQuery, where("fuelType", "==", options.fuelType));
  }

  if (options.gearType !== undefined) {
    baseQuery = query(baseQuery, where("gearType", "==", options.gearType));
  }

  if (options.maxPrice !== undefined) {
    baseQuery = query(baseQuery, where("price", "<=", options.maxPrice));
  }

  if (options.carYear !== undefined) {
    baseQuery = query(baseQuery, where("carYear", "==", options.carYear));
  }

  if (options.isUsed !== undefined) {
    baseQuery = query(baseQuery, where("isUsed", "==", options.isUsed));
  }

  try {
    // Execute the final query
    const querySnapshot = await getDocs(baseQuery);

    // Loop through the documents and extract cars
    querySnapshot.forEach((doc) => {
      const car = doc.data();
      cars.push(car);
    });

    console.log(cars);
    return cars;
  } catch (error) {
    console.error("Error getting cars with options:", error);
    return [];
  }
}
