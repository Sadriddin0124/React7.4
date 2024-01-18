import React, { useState } from "react";
import axiosClient from "../plugins/axiosClient";
import ModalApp from "./ModalApp";
import Video from '../Videos/city.mp4'
const Auth = () => {
  const [roles, setRoles] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    let username = e.target[0].value;
    let password = e.target[1].value;
    axiosClient
      .post("/admins/login", {
        username,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res?.data?.token);
        setRoles(res?.data?.roles);
        if (res?.status === 202) {
          setModalVisible(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="">
        <video className="h-[729px] w-full object-cover" muted loop autoPlay>
            <source src={Video} type="video/mp4"/>
        </video>
      <ModalApp
        open={modalVisible}
        toggle={() => setModalVisible(false)}
        roles={roles}
      />
      <div className=" position-absolute top-[20%] left-[28%] w-[400px]">
        <div className="col-6 offset-3 mt-5">
          <div className="flex flex-col justify-between w-[400px] backdrop-blur-md p-[20px] rounded-2xl h-[400px]">
            <div className="card-header mt-[40px]">
              <h1 className="text-center text-white">Authentification</h1>
            </div>
            <div className="card-body mt-[50px]">
              <form id="form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control my-[20px]"
                  placeholder="Username"
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </form>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button className="btn btn-primary" form="form" type="submit">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;

