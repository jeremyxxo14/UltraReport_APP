export const db = [
  {
    id: 1,
    name: "Reporte-J.Alfredo",
    num: "3547654",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
  },
];

<Formik
  initialValues={{ email: "", password: "" }}
  validate={(values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Requiere";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  }}
  onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }}
>
  {({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    /* and other goodies */
  }) => (
    <form className="input flex flex-col w-fit static" onSubmit={handleSubmit}>
      <label className="text-zinc-950  text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-[#D9D9D9] rounded-[5px] w-fit border-2 border-zinc-950">
        <div className="my-3 left-[0.1px]  absolute w-32 bg-[#D9D9D9] h-2"></div>
        Rut:
      </label>
      <input
        type="email"
        className="border-zinc-950 text-zinc-950 Inputs-Login input px-[10px] py-[15px] hover:border-zinc-50 text-sm bg-[#D9D9D9] border-2 rounded-[15px] w-[240px] focus:outline-none placeholder:text-black/25"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {errors.email && touched.email && errors.email}
      <label className="text-zinc-950  text-xs font-semibold  after:shadow-red-600 relative top-2 ml-[7px] px-[3px] bg-[#D9D9D9] rounded-[5px] w-fit border-2 border-zinc-950">
        <div className="my-3 left-[0.1px]  absolute w-32  bg-[#D9D9D9] h-2"></div>
        Contraseña:
      </label>
      <input
        type="password"
        name="password"
        className="border-zinc-950 text-zinc-950 Inputs-Login input px-[10px] py-[15px] text-sm hover:border-zinc-50 bg-[#D9D9D9] border-2 rounded-[15px] w-[240px] focus:outline-none placeholder:text-black/25"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      {errors.password && touched.password && errors.password}
      <div className="m-10 flex flex-col justify-center items-center">
        <button
          className="button-ini p-3  rounded-full border-2 border-solid border-stone-950 text-zinc-50 borde transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1  hover:bg-red-700"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </div>
    </form>
  )}
</Formik>;
