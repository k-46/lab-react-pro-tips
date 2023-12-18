import React, { useEffect, useState } from "react";

export const Registration = () => {
  const [field, setField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [submit, setSubmitted] = useState(false);

  const [validate, setValidate] = useState(false);

  useEffect(() => {
    setValidate(false);
  }, [field]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmitted(true)
    if (field.firstName && field.lastName && field.phone && field.email) {
      setValidate(true);
      // setSubmitted(false)
      // console.log(submit)
    }
    setSubmitted(true);
  };

  return (
    <div className="content">
      {/* <h1>Form</h1> */}
      <form>
        {submit && validate ? (
          <div className="reg-success">
            <h2>Registration Successfull</h2>
          </div>
        ) : null}

        <input
          type="text"
          placeholder="firstName"
          value={field.firstName}
          onChange={(e) => setField({ ...field, firstName: e.target.value })}
        />

        {submit && !field.firstName ? (
          <div className="err-msg">Enter your FirstName</div>
        ) : null}

        <input
          type="text"
          placeholder="LastName"
          value={field.lastName}
          onChange={(e) => setField({ ...field, lastName: e.target.value })}
        />

        {submit && !field.lastName ? (
          <div className="err-msg">Enter your Lastname</div>
        ) : null}

        <input
          type="email"
          placeholder="email"
          value={field.email}
          onChange={(e) => setField({ ...field, email: e.target.value })}
        />

        {submit && !field.email ? (
          <div className="err-msg">Enter your email</div>
        ) : null}

        <input
          type="number"
          placeholder="phoneNumber"
          value={field.phone}
          onChange={(e) => setField({ ...field, phone: e.target.value })}
        />

        {submit && !field.phone ? (
          <div className="err-msg">Enter your number</div>
        ) : null}

        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Register Here
        </button>
      </form>
    </div>
  );
};
