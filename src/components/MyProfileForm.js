import React from "react";
import { useForm } from "react-hook-form";
import { errorMessages } from "../utils/formErrorMessage";

const MyProfileForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  const genderData = [
    {
      value: "MALE",
      title: "Male",
    },
    {
      value: "FEMALE",
      title: "Female",
    },
    {
      value: "OTHER",
      title: "Other",
    },
  ];

  return (
    <section className="lg:max-w-5xl lg:mx-auto px-5 py-5">
      <div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-10 lg:items-start">
              {/* PERSONAL INFORMATION */}
              <div className="border-b border-gray-400 pb-14">
                <div>
                  <h1 className="font-bold text-2xl text-gray-800 pb-5">
                    Personal Information
                  </h1>
                </div>
                <div className="grid gap-y-10 lg:grid-cols-3 gap-x-14">
                  <div className="form_section_container">
                    {/* firstName */}
                    <div className="form_input_container">
                      <label className="form_label">First Name</label>
                      <input
                        className="form_text_field"
                        type="text"
                        {...register("firstName", {
                          required: true,
                          maxLength: 50,
                        })}
                      />
                      {errors?.firstName?.type === "required" && (
                        <span className="form_input_error">
                          {errorMessages.firstName}
                        </span>
                      )}
                      {errors?.firstName?.type === "maxLength" && (
                        <span className="form_input_error">
                          {errorMessages.firstNameMaxlength}
                        </span>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div className="form_input_container">
                      <label className="form_label">Email Id</label>
                      <input
                        className="form_text_field"
                        type="email"
                        {...register("email", {
                          required: true,
                        })}
                      />
                      {errors?.email?.type === "required" && (
                        <span className="form_input_error">
                          {errorMessages.email}
                        </span>
                      )}
                    </div>

                    {/* WEIGHT */}
                    <div className="form_input_container">
                      <label className="form_label">Weight</label>
                      <input
                        className="form_text_field"
                        type="text"
                        {...register("weight", {
                          required: true,
                        })}
                      />
                      {errors?.weight?.type === "required" && (
                        <span className="form_input_error">
                          {errorMessages.weight}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* SECOND GRID */}
                  <div className="form_section_container">
                    {/* LAST NAME */}
                    <div className="form_input_container">
                      <label className="form_label">Last name</label>
                      <input
                        className="form_text_field"
                        type="text"
                        {...register("lastName")}
                      />
                    </div>

                    {/* DOB */}

                    <div className="form_input_container">
                      <label className="form_label">Date of birth</label>
                      <input
                        className="form_text_field"
                        type="date"
                        {...register("dob", { required: true })}
                      />
                      {errors?.dob?.type === "required" && (
                        <span className="form_input_error">
                          {errorMessages.date}
                        </span>
                      )}
                    </div>

                    {/* CITY */}
                    <div className="form_input_container">
                      <label className="form_label">City / Town</label>
                      <input
                        className="form_text_field"
                        type="text"
                        {...register("city", { required: true })}
                      />
                      {errors?.dob?.type === "required" && (
                        <span className="form_input_error">
                          {errorMessages.cityOrTown}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* THIRD GRID */}
                  <div className="form_section_container">
                    {/* MOBILE NUMBER */}
                    <div className="form_input_container">
                      <label className="form_label">Mobile Number</label>
                      <input
                        className="form_text_field"
                        type="text"
                        {...register("mobileNumber", { required: true })}
                      />
                      {errors?.dob?.type === "required" && (
                        <span className="form_input_error">
                          {errorMessages.mobileNumber}
                        </span>
                      )}
                    </div>

                    {/* GENDER */}
                    <div className="form_input_container">
                      <label className="form_label">Gender</label>
                      <div className="flex items-center space-x-3">
                        {genderData.map((item) => (
                          <input
                            key={item.title}
                            className="form_text_field cursor-pointer"
                            type="button"
                            value={item.title}
                            {...register("gender", { required: true })}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MEDICAL INFORMATION */}
              <div className="border-b border-gray-400 pb-14">
                <div className="pb-10">
                  <h1 className="font-bold text-2xl text-gray-800">
                    Medical Information
                  </h1>
                  <p className="text-gray-500 text-sm font-semibold">
                    This information will help Oncobuddy doctors in
                    understandinbg your medical case better
                  </p>
                </div>
                <div className="grid gap-y-10 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-14">
                  <div className="form_section_container">
                    {/* firstName */}
                    <div className="form_input_container">
                      <label className="form_label">Cancer Type</label>
                      <select
                        name="cancer"
                        id="cancer"
                        className="form_text_field"
                      >
                        <option value="" className=" text-[14px] ">
                          Select your option here
                        </option>
                        <option value="Lung Cancer">Lung Cancer</option>
                        <option value="Brain Cancer">Brain Cancer</option>
                        <option value="Blood Cancer">Blood Cancer</option>
                      </select>
                    </div>

                    {/* EMAIL */}
                    <div className="form_input_container">
                      <label className="form_label">Do you smoke?</label>
                      <div className="flex items-center space-x-5">
                        {genderData.map((item) => (
                          <button
                            key={item.title}
                            className="w-full border border-gray-700 py-1"
                          >
                            {item.title}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* WEIGHT */}
                  </div>

                  {/* SECOND GRID */}
                  <div className="form_section_container">
                    {/* LAST NAME */}
                    <div className="form_input_container">
                      <label className="form_label">Cancer Stage</label>
                      <div className="flex items-center space-x-5">
                        {genderData.map((item) => (
                          <button
                            key={item.title}
                            className="w-full border border-gray-700 py-1"
                          >
                            {item.title}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* DOB */}

                    <div className="form_input_container">
                      <label className="form_label">Any Allergies?</label>
                      <textarea
                        {...register("anyAllergies")}
                        className="form_textarea_field"
                      ></textarea>
                    </div>
                  </div>

                  {/* THIRD GRID */}
                  <div className="form_section_container">
                    {/* MOBILE NUMBER */}
                    <div className="form_input_container">
                      <label className="form_label">Blood Group</label>
                      <select
                        name="cancer"
                        id="cancer"
                        className="form_text_field"
                      >
                        <option value="" className=" text-[14px] ">
                          Select your option here
                        </option>
                        <option value="Lung Cancer">Lung Cancer</option>
                        <option value="Brain Cancer">Brain Cancer</option>
                        <option value="Blood Cancer">Blood Cancer</option>
                      </select>
                    </div>

                    {/* GENDER */}
                    <div className="form_input_container">
                      <label className="form_label">Family History</label>
                      <textarea
                        {...register("familyHistory")}
                        className="form_textarea_field"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              {/* MEDICAL INSURENCE */}
              <div className=" pb-14">
                <div>
                  <h1 className="font-bold text-2xl text-gray-800 pb-5">
                    Medical Insurence
                  </h1>
                </div>
                <div className="grid gap-y-10 lg:grid-cols-3 gap-x-14">
                  <div className="form_section_container">
                    {/* firstName */}
                    <div className="form_input_container">
                      <label className="form_label">Cancer Stage</label>
                      <div className="flex items-center space-x-5">
                        {genderData.map((item) => (
                          <button
                            key={item.title}
                            className="w-full border border-gray-700 py-1"
                          >
                            {item.title}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* POLICY NUMBER */}
                    <div className="form_input_container">
                      <label className="form_label">Policy Number</label>
                      <input
                        className="form_text_field"
                        type="email"
                        {...register("plicyNumber")}
                      />
                    </div>
                  </div>

                  {/* SECOND GRID */}
                  <div className="form_section_container">
                    {/* LAST NAME */}
                    <div className="form_input_container">
                      <label className="form_label">
                        Type of Medical Insurance
                      </label>
                      <select
                        name="cancer"
                        id="cancer"
                        className="form_text_field"
                      >
                        <option value="" className=" text-[14px] ">
                          Select your option here
                        </option>
                        <option value="Lung Cancer">Lung Cancer</option>
                        <option value="Brain Cancer">Brain Cancer</option>
                        <option value="Blood Cancer">Blood Cancer</option>
                      </select>
                    </div>
                  </div>

                  {/* THIRD GRID */}
                  <div className="form_section_container">
                    {/* GENDER */}
                    <div className="form_input_container">
                      <label className="form_label">
                        Medical Insurance Company
                      </label>
                      <input
                        type="text"
                        className="form_text_field"
                        {...register("insurenceComponey")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MyProfileForm;
