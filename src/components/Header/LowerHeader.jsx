import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css";

function LowerHeader() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <AiOutlineMenu />

          <p>All</p>
        </li>
        < li>Amazon Haul </li>
        <li>Medical Care</li>
        <li>Saks</li>
        <li>Best Sellers</li>
        <li>Amazon Basics</li>
        <li>Today's Deals</li>
        <li>New Releases</li>
        <li>Registry </li>
        <li>Best Sellers</li>
        <li>Amzon Basics</li>
        <li>Registry</li>
        <li>Groceries</li>
        <li>Prime</li>
        <li>Gift Cards</li>
        <li>Smart Home </li>
        <li>Customer service</li>
        <li>Music </li>
        <li>Pharmacy </li>



      </ul>
    </div>
  );
}

export default LowerHeader;
