import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteForm, updateForm } from "../redux/slices/crud-slice";

const ReadDeleteForm = () => {
  const formData = useSelector((state) => state.form.value);
  const dispatch = useDispatch()
  console.log(formData);

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            First Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Last Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Password
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            City
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            State
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Zip
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {formData.map((value, i) => (
          <tr key={i}>
            <td className="px-6 py-4 whitespace-nowrap">{value.fname}</td>
            <td className="px-6 py-4 whitespace-nowrap">{value.lname}</td>
            <td className="px-6 py-4 whitespace-nowrap">*</td>
            <td className="px-6 py-4 whitespace-nowrap">{value.city}</td>
            <td className="px-6 py-4 whitespace-nowrap">{value.state}</td>
            <td className="px-6 py-4 whitespace-nowrap">{value.zip}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button onClick={()=>dispatch(updateForm(value))} className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                Edit
              </button>
              <button onClick={()=>dispatch(deleteForm(value))} className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReadDeleteForm;

// formData.map((value) => (  ));
