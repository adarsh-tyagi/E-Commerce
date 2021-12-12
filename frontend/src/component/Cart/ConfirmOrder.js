import React, { Fragment } from 'react'
import "./Shipping.css"
import CheckoutSteps from './CheckoutSteps'
import {useSelector} from "react-redux"
import MetaData from '../layout/MetaData'
import {Link} from "react-router-dom"

function ConfirmOrder() {
    return (
        <Fragment>
            <MetaData title="Confirm Order" />
            
        </Fragment>
    )
}

export default ConfirmOrder
