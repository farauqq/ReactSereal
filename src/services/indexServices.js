import React from "react";
import axios from "axios";

export const eksploreServices = {
  getIndexList,
};

async function getIndexList() {
  return axios
    .get("https://635272a4ffbb7da0f2d8983d.mockapi.io/api/v1/ucup")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return console.log(error.message);
    });
}