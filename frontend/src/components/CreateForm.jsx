import React from "react";

const CreateForm = ({ formData, handleChange, handleSubmit, fields }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-none mt-20 p-6 w-80 justify-center items-center bg-gray-800"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Add Item</h2>
      {fields.map((field, index) => (
        <div className="form-control mb-4" key={index}>
          <label>{field.label}:</label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className="input input-bordered"
            required={field.required}
          />
        </div>
      ))}
      <button type="submit" className="btn">Simpan</button>
    </form>
  );
};

export default CreateForm;
