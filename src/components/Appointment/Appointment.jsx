import React, { useContext, useState } from "react";
import useUserDetails from "../../hooks/useUserDetails";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import {
  useAddAppointment,
  useDeleteAppointment,
  useGetAllAppointment,
} from "../../hooks/useAppointment";
import AppointCard from "../AppointCard/AppointCard";
import Swal from "sweetalert2";

const Appointment = () => {
  const { activeUser } = useContext(AuthContext);
  const { data: allAppointmentData } = useGetAllAppointment(activeUser?.email);
  const {mutate:deleteAppoint}=useDeleteAppointment();

  
  const [userName, setUserName] = useState(activeUser?.displayName);
  const [userEmail, setUserEmail] = useState(activeUser?.email);
  const [appointDate, setAppointDate] = useState("");

  const { id } = useParams();
  const { isLoading, isError, error, data } = useUserDetails(id);

  const { mutate: addAppointment,data:getNewAppointedData } = useAddAppointment();

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
if(getNewAppointedData?.data){
    Swal.fire({
        title: 'Custom animation with Animate.css',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}
  const appointmentMethod = (e) => {
    e.preventDefault();
    const newAppointment = {
      pName: userName,
      pEmail: userEmail,
      dName: data?.data.name,
      aDate: appointDate,
    };
    console.log("New Appointment is:", newAppointment);
    addAppointment(newAppointment);
  };

const deleteMethodHandler=(id)=>{
    console.log("Deleted Item is:",id);
    deleteAppoint(id);
}

  return (
    <div>
      <h1 className="text-info">
        Appoint Ur Schedule with Dr:{data?.data.name}
      </h1>
      <hr />
      <div className=" form-section bg-white ">
        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form onSubmit={appointmentMethod}>
                  <div className="mb-3">
                    <label htmlFor="userName" className="form-label">
                      <h5 className="fw-normal"> Name</h5>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="userName"
                      required
                      defaultValue={activeUser?.displayName}
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">
                      <h5 className="fw-normal"> Email</h5>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="userEmail"
                      required
                      defaultValue={activeUser?.email}
                      readOnly
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="DrName" className="form-label">
                      <h5 className="fw-normal"> Dr Name</h5>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="DrName"
                      required
                      defaultValue={data?.data.name}
                      // value={userName}
                      // onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Appointment" className="form-label">
                      <h5 className="fw-normal"> Appointment Date</h5>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="Appointment"
                      required
                      value={appointDate}
                      onChange={(e) => setAppointDate(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary mt-3 w-100 text-white fs-4"
                  >
                    Submit Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h1>Number Of Apppointment:{allAppointmentData?.data.length}</h1>
      <div className="container">
        <div className="row gy-2 gx-2">
          {allAppointmentData?.data.map((appoint) => (
            <AppointCard key={Math.random()} appoint={appoint}
            deleteMethodHandler={deleteMethodHandler}
            
            ></AppointCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
