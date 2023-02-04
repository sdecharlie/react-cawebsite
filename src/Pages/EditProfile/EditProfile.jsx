import React, { useEffect, useState } from "react";

const EditProfile = () => {
  const [Email, SetEmail] = useState("");
  const [Mobile, SetMobile] = useState("");
  const [FirstName, SetFirstName] = useState("");
  const [Address, SetAddress] = useState("");
  const [LastName, SetLastName] = useState("");
  const [Country, SetCountry] = useState("");
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("res"));
    SetEmail(data.emailId);
    SetMobile(data.mobile);
  }, []);
  return (
    <div class="container rounded bg-white mt-5">
      <div class="row">
        <div class="col-md-4 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle mt-5"
              src="https://i.imgur.com/0eg0aG0.jpg"
              width="90"
            />
            <span class="font-weight-bold">
              {FirstName}
              {LastName}
            </span>
            <span class="text-black-50">{Email}</span>
            <span>{Mobile}</span>
          </div>
        </div>
        <div class="col-md-8">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="d-flex flex-row align-items-center back">
                <i class="fa fa-long-arrow-left mr-1 mb-1"></i>
                <h6>Back to Profile</h6>
              </div>
              <h6 class="text-right">Edit Profile</h6>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="first name"
                  value={FirstName}
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  value={LastName}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  value={Email}
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  value={Mobile}
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="address"
                  value={Address}
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  value={Country}
                  placeholder="Country"
                />
              </div>
            </div>
            <div class="mt-5 text-right">
              <button class="btn btn-primary profile-button" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
