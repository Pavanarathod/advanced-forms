import React from "react";
import { useForm } from "react-hook-form";

const CustomForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log("checking renders");
  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        {errors?.firstName?.type === "required" && (
          <span>firstName is required</span>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <span>Max length is 20</span>
        )}
        {errors.firstName && <span>firstName is required</span>}
        <input {...register("lastName", { maxLength: 20 })} />
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>Email is required</span>}

        <input type="number" {...register("age", { min: 18, max: 99 })} />
        {errors?.age?.type === "min" && <span>Min age is 18</span>}
        {errors?.age?.type === "max" && <span>Max age is 99</span>}

        {/* select */}
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        {errors.lastName && <span>this field is required</span>}
        <button>submit</button>
      </form>
    </div>
  );
};

export default CustomForm;
