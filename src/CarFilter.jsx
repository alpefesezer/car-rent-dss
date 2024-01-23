import { useState } from 'react';
import React from 'react';
import cars from "./data"

export default function CarFilter(){
  const [transmission, setTransmission] = useState('');
  const [color, setColor] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [price, setPrice] = useState('');
  const [capacity, setCapacity] = useState(0);
  const [filteredCars, setFilteredCars] = useState([]);

  const handleFilter = () => {
    // Filter cars based on selected criteria
    const filteredCars = cars.filter((car) => {
      return (
        (!transmission || car.transmission === transmission) &&
        (!color || car.color === color) &&
        (!fuelType || car.fuelType === fuelType) &&
        (!bodyType || car.bodyType === bodyType) &&
        (!price || car.price === price) &&
        (capacity === 0 || car.capacity === capacity)
      );
    });

    // Update the state with the filtered cars
    setFilteredCars(filteredCars);
  };

  return (
    <div>
      <h3>Filter</h3>
      <label>
        Transmission:
        <select value={transmission} onChange={(e) => setTransmission(e.target.value)}>
          <option value=""></option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
      </label>
      <label>
        Color:
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value=""></option>
          <option value="Red">Red</option>
          <option value="White">White</option>
          <option value="Black">Black</option>
        </select>
      </label>
      <label>
        Fuel Type:
        <select value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
          <option value=""></option>
          <option value="Gasoline">Gasoline</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Diesel">Diesel</option>
        </select>
      </label>
      <label>
        Body Type:
        <select value={bodyType} onChange={(e) => setBodyType(e.target.value)}>
          <option value=""></option>
          <option value="SUV">SUV</option>
          <option value="Coupe">Coupe</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Sedan">Sedan</option>
        </select>
      </label>
      <label>
        Price:
        <select value={price} onChange={(e) => setPrice(e.target.value)}>
          <option value=""></option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
      </label>
      <label>
        Capacity:
        <select value={capacity} onChange={(e) => setCapacity(e.target.value)}>
          <option value="0">0</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="7">7</option>
        </select>
      </label>
      <button onClick={handleFilter}>Filter</button>
      <ul>
        {filteredCars.map((car) => (
          <li key={`${car.brand}-${car.model}`}>
            {car.brand} {car.model} - {car.transmission} - {car.color} - {car.fuelType} - {car.bodyType} - {car.price} - {car.capacity}
          </li>
        ))}
      </ul>
    </div>
  );
};

