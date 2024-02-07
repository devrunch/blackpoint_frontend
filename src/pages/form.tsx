import { useState } from "react";

const Form = () => {
  const [cars, setCars] = useState([{ number: '', type: '', disposition: '', loadCondition: '', trafficViolation: '',mechanicalFaliure:'' }]);

  const handleChange = (index: number, e: any) => {
    const { name, value } = e.target;
    const newCars: any = [...cars];
    newCars[index][name] = value;
    setCars(newCars);
  };

  const addCar = () => {
    setCars([...cars, { number: '', type: '', disposition: '', loadCondition: '', trafficViolation: '',mechanicalFaliure:'' }]);
  };

  const removeCar = (index: number) => {
    const newCars = [...cars];
    newCars.splice(index, 1);
    setCars(newCars);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending the data to a server or processing it further
    console.log("Submitted car details:", cars);
    // Reset form fields after submission
    setCars([{ number: '', type: '', disposition: '', loadCondition: '', trafficViolation: '',mechanicalFaliure:'' }]);
  };

  return (
    <>
      <form className="w-full max-w-xl m-auto">
        <div className='my-5 uppercase flex text-gray-900 font-black text-3xl'>
          Accident Identification Detail
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-first-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              id="grid-first-name"
              type="text"
              placeholder="First Name"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-3 mx-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />

          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="grid-last-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              id="grid-last-name"
              type="text"
              placeholder="Last Name"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label htmlFor="grid-text" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Police Station
            </label>
            <input
              id="grid-text"
              type="text"
              placeholder="Address"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />

          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-city" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              City
            </label>
            <input
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-state" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              State
            </label>
            <div className="relative">
              <select
                id="grid-state"
                className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-zip" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              FIR number
            </label>
            <input
              id="grid-zip"
              type="text"
              placeholder="90210"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <div className='mb-5 uppercase flex text-gray-900 font-black text-3xl'>

        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-first-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Time of Accident
            </label>
            <input
              id="grid-first-name"
              type="text"
              placeholder="HH:MM:SS /24 Hour"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-3 mx-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />

          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="grid-last-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Date Of Accident
            </label>
            <input
              id="grid-last-name"
              type="text"
              placeholder="DD/MM/YY"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-state" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Type Of Accident
            </label>
            <div className="relative">
              <select
                id="grid-state"
                className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>Fatal</option>
                <option>Injury Needing hospitalization</option>
                <option>Injury not Needing hospitalization</option>
                <option>Damage to Property</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-state" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Type of Area
            </label>
            <div className="relative">
              <select
                id="grid-state"
                className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>Urban</option>
                <option>Rural</option>
                <option>Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-state" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Type of Weather
            </label>
            <div className="relative">
              <select
                id="grid-state"
                className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>Fine/Clear</option>
                <option>Rainy</option>
                <option>Foggy</option>
                <option>Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
        <div className="flex flex-wrap -mx-3 mb-2">

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-state" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Hit And Run
            </label>
            <div className="relative">
              <select
                id="grid-state"
                className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-state" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Ongoing Road Works
            </label>
            <div className="relative">
              <select
                id="grid-state"
                className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>Yes</option>
                <option>No</option>
                {/* <option>Other</option> */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-state" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Type of Collision
            </label>
            <div className="relative">
              <select
                id="grid-state"
                className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>Hit Pedestrian</option>
                <option>Head on collision</option>
                <option>Hit from Back</option>
                <option>Hit form Side</option>
                <option>Hit fix/Stationary object </option>
                <option>Overturn </option>
                <option>Run of the road </option>
                <option>Other </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
        <div className="flex flex-wrap -mx-3 mb-2 justify-normal">
          <div className="w-full md:w-1/5 mx-3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-zip" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Vehicles involved
            </label>
            <input
              id="grid-zip"
              type="text"
              placeholder="90210"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>

          <div className="w-full md:w-1/5 mx-3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-zip" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Number of fatalities
            </label>
            <input
              id="grid-zip"
              type="text"
              placeholder="90210"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/5 mx-3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-zip" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Hospitilazation needed
            </label>
            <input
              id="grid-zip"
              type="text"
              placeholder="90210"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/5 mx-2 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-zip" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              No hospitalization
              needed
            </label>
            <input
              id="grid-zip"
              type="text"
              placeholder="90210"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>

        </div>
        <div className='my-7 uppercase flex text-gray-900 font-black text-3xl'>
          Details Of accident loacation
        </div>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full px-3">
            <label htmlFor="grid-text" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              City / District / Village
            </label>
            <input
              id="grid-text"
              type="text"
              placeholder="Address"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full px-3">
            <label htmlFor="grid-text" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Road Name
            </label>
            <input
              id="grid-text"
              type="text"
              placeholder="Address"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-5 justify-around">

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
            <label htmlFor="grid-zip" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Road number
            </label>
            <input
              id="grid-zip"
              type="text"
              placeholder="902-10"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
            <label htmlFor="grid-zip" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Number of lanes
            </label>
            <input
              id="grid-zip"
              type="text"
              placeholder="2"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-state" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Road Type
            </label>
            <div className="relative">
              <select
                id="grid-state"
                className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>Expressway</option>
                <option>National Highway</option>
                <option>State Highway</option>
                <option>Other Rural highways</option>
                <option>Urban Aterial</option>
                <option>Other Urban Roads </option>
                <option>Unkown </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-state" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Physical Divider
            </label>
            <div className="relative">
              <select
                id="grid-state"
                className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>Present</option>
                <option>Absent</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-state" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Type of Road Surface
            </label>
            <div className="relative">
              <select
                id="grid-state"
                className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>Paved</option>
                <option>Unpaved</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-state" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Accident Spot
            </label>
            <div className="relative">
              <select
                id="grid-state"
                className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>Road Section</option>
                <option>Near At junction</option>
                <option>Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0 ">
            <label htmlFor="grid-zip" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Road Chainage
            </label>
            <input
              id="grid-zip"
              type="text"
              placeholder="---KM ---M"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-5 justify-around">

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
            <label htmlFor="grid-zip" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Longitude
            </label>
            <input
              id="grid-zip"
              type="text"
              placeholder="910.123"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
            <label htmlFor="grid-zip" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Latitude
            </label>
            <input
              id="grid-zip"
              type="text"
              placeholder="212.22343"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <div className='my-7 uppercase flex text-gray-900 font-black text-3xl'>
          Damage to Property
        </div>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-state" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Accident Spot
            </label>
            <div className="relative">
              <select
                id="grid-state"
                className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>Public</option>
                <option>Private</option>
                <option>Damage to vehicle</option>
                <option>Others</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
        <div className='my-7 uppercase flex text-gray-900 font-black text-3xl'>
          Details Of Vehicles involved in Accident
        </div>
        <form onSubmit={handleSubmit} >
        {cars.map((car, index) => (
          <>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Car {index + 1}</h3>
          <div key={index} className="border rounded p-4 mb-4 flex flex-wrap">
            <div className="mb-2">
              <label className="block mb-1 text-gray-900">Vehicle Number:</label>
              <input type="text" name="number" value={car.number} onChange={(e) => handleChange(index, e)} className="w-full border rounded px-3 py-2 bg-gray-100 border-gray-200 text-gray-700 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-100" />
            </div>
            <div className="mb-2">
              <label className="block mb-1 text-gray-900">Vehicle Type:</label>
              <input type="text" name="type" value={car.type} onChange={(e) => handleChange(index, e)} className="w-full border rounded px-3 py-2  bg-gray-100 border-gray-200 text-gray-700 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-100" />
            </div>
            <div className="mb-2">
              <label className="block mb-1 text-gray-900">Disposition After Accident:</label>
              <input type="text" name="disposition" value={car.disposition} onChange={(e) => handleChange(index, e)} className="w-full border rounded px-3 py-2  bg-gray-100 border-gray-200 text-gray-700 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-100" />
            </div>
            <div className="mb-2">
              <label className="block mb-1 text-gray-900">Load Condition:</label>
              <input type="text" name="loadCondition" value={car.loadCondition} onChange={(e) => handleChange(index, e)} className="w-full border rounded px-3 py-2  bg-gray-100 border-gray-200 text-gray-700 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-100" />
            </div>
            <div className="mb-2">
              <label className="block mb-1 text-gray-900">Traffic Violation:</label>
              <input type="text" name="trafficViolation" value={car.trafficViolation} onChange={(e) => handleChange(index, e)} className="w-full border rounded px-3 py-2  bg-gray-100 border-gray-200 text-gray-700 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-100" />
            </div>
            <div className="mb-2">
              <label className="block mb-1 text-gray-900">Mechanical Faliure:</label>
              <input type="text" name="trafficViolation" value={car.mechanicalFaliure} onChange={(e) => handleChange(index, e)} className="w-full border rounded px-3 py-2  bg-gray-100 border-gray-200 text-gray-700 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-100" />
            </div>
            <button type="button" onClick={() => removeCar(index)} className="text-white bg-red-600 p-2 rounded">Remove Vehicle</button>
          </div>
          </>
        ))}
          <br />
          <button type="button" className="text-white bg-green-600 p-2 rounded" onClick={addCar}>Add Car</button> <br/>
          <button type="submit" className="text-white bg-blue-600 p-2 rounded m-3 self-center">Submit</button>
        </form>
      </form>
      </>
      )
    }

export default Form