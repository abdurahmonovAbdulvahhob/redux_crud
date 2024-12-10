import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addForm } from "../redux/slices/crud-slice";

const CreateForm = () => {
  const [formData, setFormData] = useState({
    id: Date.now(), // Har bir ma'lumotga unikal ID qo'shing
    fname: "",
    lname: "",
    password: "",
    city: "",
    state: "New Mexico",
    zip: "",
  });

  const dispatch = useDispatch();
  const formDate = useSelector(state=> state.form.value)
  console.log(formDate) 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addForm(formData)); // Ma'lumotni Redux store'ga qo'shish
    setFormData({
      id: Date.now(),
      fname: "",
      lname: "",
      password: "",
      city: "",
      state: "New Mexico",
      zip: "",
    }); // Formni tozalash
   window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <div className="grid place-items-center h-screen">
      <form className="max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="fname"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="fname"
              name="fname"
              type="text"
              placeholder="Jane"
              onChange={handleChange}
              value={formData.fname}
              required
            />
            <p className="hidden text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="lname"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lname"
              name="lname"
              type="text"
              placeholder="Doe"
              onChange={handleChange}
              value={formData.lname}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="password"
              name="password"
              type="password"
              placeholder="******************"
              onChange={handleChange}
              value={formData.password || ""}
              required
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="city"
              name="city"
              type="text"
              placeholder="Albuquerque"
              onChange={handleChange}
              value={formData.city}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="state"
            >
              State
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="state"
                name="state"
                onChange={handleChange}
                value={formData.state}
              >
                <option >New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="zip"
            >
              Zip
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="zip"
              name="zip"
              type="text"
              placeholder="90210"
              onChange={handleChange}
              value={formData.zip}
            />
          </div>
        </div>
        <div className="border-red-900 w-full">
          <button className="bg-blue-400 w-full py-2 text-xl mt-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
