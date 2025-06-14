import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { StarIcon } from "@heroicons/react/24/outline";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20 shadow-sm">
      <div>
        <h1 className="font-semibold text-xl py-6">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-x-5 ">
        <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div>
              <img
                src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/492831521_1218364990300411_6239936837857007233_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Dw_Ii82Vc9wQ7kNvwE8ER4U&_nc_oc=AdkFeyRFUcCeoxmZQsvr-nvJjvjHMCN1zvMZrf5Ccu8Hhni68p0oqI05IWPv6bRElsKzQYBtUgO-pVq6XByaeVQy&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=vgYZPtpx8wQiWwbn0HBaLA&oh=00_AfP5y790NTZH-5FSfekxBnWCS8UmlqFmjb1kVFKcMB7_tA&oe=6852CD03"
                alt=""
                className="w-[5rem] h-[5rem] object-cover object-top "
              />
              <div className="space-y-2 ml-5">
                <p>Women's Dhaka Top</p>
                <p className="space-x-5">
                  <span>Color:Pink</span>
                  <span>Size:M</span>
                </p>
                <p>Seller:Chaubisedhaka</p>
                <p>रू4000</p>
              </div>
            </div>
          </Grid>
          <Grid item >
            <Box sx={{ color: deepPurple[500] }}>
              <StarIcon sx={{ fontSize: "1rem" }} className="px-2 text-5xl" />
              <span>Rate and Review Product</span>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderDetails;
