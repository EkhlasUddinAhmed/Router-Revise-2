import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../components/Context/UserContext";

const addAppointmentMethod = (newAppointment) => {
  return axios.post("https://router-revise-2-server.vercel.app/user", newAppointment);
};

const getAllAppointMentMethod = ({ queryKey }) => {
  const email = queryKey[1];
  return axios.get(`https://router-revise-2-server.vercel.app/user/all?email=${email}`,{
    headers:{
        'authorization':`Bearer ${localStorage.getItem("Token")}`
    }
  });
};
export const useGetAllAppointment = (email) => {
  return useQuery({
    queryKey: ["All-Appointment", email],
    queryFn: getAllAppointMentMethod,
    enabled: !!email,
  });
};

export const useAddAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addAppointmentMethod,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["All-Appointment"],
      });
    },
  });
};

const deleteAppointmentHandler = (deleteID) => {
  return axios.delete(`https://router-revise-2-server.vercel.app/user/${deleteID}`);
};
export const useDeleteAppointment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAppointmentHandler,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["All-Appointment"],
      });
    },
  });
};
