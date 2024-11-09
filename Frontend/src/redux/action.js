import * as types from "./actionTypes";
import axios from "axios";
import GLOBAL_CONSTANTS from "../../GlobalConstants.js";

// utils
import { toast } from "react-toastify";



  export const ask_question = (data, callback) => {
    return function () {
      var headers = {
        "Content-type": "application/json",
      };
      axios
        .post(`${GLOBAL_CONSTANTS.backend_url}bot/answer_question`, JSON.stringify(data), {
          headers,
        })
        .then((resp) => {
          if(resp?.data?.error)
          {
            // toast.error(resp?.data?.error);  
          }
          else
          {
            // toast.success("User Created Sucessfully");  

          }
          callback(resp?.data);
        })
        .catch((error) => {
          toast.error(
            error ?? "Something went wrong",
            {
              autoClose: 2000,
            }
          );
        });
    };
  };


  const getConversation = (data) => ({
    type: types.CONVERSATION,
    payload: data,
  });
  
  export const loadConversation = () => {
    return function (dispatch) {
      var headers = {
        "Content-type": "application/json",
        };
        axios.get(`${GLOBAL_CONSTANTS?.backend_url}bot/load_conversation?start_index=0&stop_index=10`, {headers})
        .then((resp) => {
          dispatch(getConversation(resp?.data?.data));
        })
        .catch((error) => console.log(error));
    };
  };
