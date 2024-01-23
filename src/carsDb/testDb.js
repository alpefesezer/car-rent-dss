import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP7O4Pk7hlle1Y5nP-UfWioXb1god_tDM",
  authDomain: "cars-6384f.firebaseapp.com",
  projectId: "cars-6384f",
  storageBucket: "cars-6384f.appspot.com",
  messagingSenderId: "68464753660",
  appId: "1:68464753660:web:d222019e42e2eaf0e61079",
  measurementId: "G-MQ9SX87Q05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function getAllCars() {
    const cars = [];
  
    // Create a reference to the cars collection
    const carsCollection = collection(db, 'cars');
  
    try {
      // Execute the query to get all documents in the collection
      const querySnapshot = await getDocs(carsCollection);
  
      // Loop through the documents and extract cars
      querySnapshot.forEach((doc) => {
        const car = doc.data();
        cars.push(car);
      });
  
      console.log(cars);
      return cars;
    } catch (error) {
      console.error('Error getting all cars:', error);
      return [];
    }
  }


export async function getCarsWithOptions(options) {
  const cars = [];

  // Create a reference to the cars collection
  const carsCollection = collection(db, 'cars');

  // Start with a base query
  let baseQuery = query(carsCollection);

  // Add conditions based on user-selected options
  if (options.carBrand !== undefined) {
    baseQuery = query(baseQuery, where('carBrand', '==', options.carBrand));
  }

  if (options.carType !== undefined) {
    baseQuery = query(baseQuery, where('carType', '==', options.carType));
  }

  if (options.carModel !== undefined) {
    baseQuery = query(baseQuery, where('carModel', '==', options.carModel));
  }

  if (options.driveType !== undefined) {
    baseQuery = query(baseQuery, where('driveType', '==', options.driveType));
  }

  if (options.fuelType !== undefined) {
    baseQuery = query(baseQuery, where('fuelType', '==', options.fuelType));
  }

  if (options.gearType !== undefined) {
    baseQuery = query(baseQuery, where('gearType', '==', options.gearType));
  }

  if (options.maxPrice !== undefined) {
    baseQuery = query(baseQuery, where('price', '<=', options.maxPrice));
  }

  if (options.carYear !== undefined) {
    baseQuery = query(baseQuery, where('carYear', '==', options.carYear));
  }

  if (options.isUsed !== undefined) {
    baseQuery = query(baseQuery, where('isUsed', '==', options.isUsed));
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
    console.error('Error getting cars with options:', error);
    return [];
  }
}

