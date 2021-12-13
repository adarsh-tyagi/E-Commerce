import React, { Fragment, useRef } from 'react'
import CheckoutSteps from './CheckoutSteps'
import MetaData from '../layout/MetaData'
import {useDispatch, useSelector} from "react-redux"
import { Typography } from '@mui/material'
import { useAlert } from 'react-alert'
import {CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements} from "@stripe/react-stripe-js"
import axios from "axios"
import "./Payment.css"
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EventIcon from "@mui/icons-material/Event";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

function Payment() {
    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"))
    const payBtn = useRef(null)

    const submitHandler = (e) => {

    }


    return (
      <Fragment>
        <MetaData title="Payment" />
        <CheckoutSteps activeStep={2} />

        <div className="paymentContainer">
          <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
            <Typography>Card Info</Typography>

            <div>
              <CreditCardIcon />
              <CardNumberElement className="paymentInput" />
            </div>
            <div>
              <EventIcon />
              <CardExpiryElement className="paymentInput" />
            </div>
            <div>
              <VpnKeyIcon />
              <CardCvcElement className="paymentInput" />
            </div>

            <input type="submit" value={`Pay - ${orderInfo && orderInfo.totalPrice}`} className="paymentFormBtn" ref={payBtn} />
          </form>
        </div>
      </Fragment>
    );
}

export default Payment
