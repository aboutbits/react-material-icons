import React from 'react'
import { IconProps } from './types.js'

export const IconTimerOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-60 18.5-115.5T192-656L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11l-68-68q-48 35-103.5 53.5T480-80Zm-80-760q-17 0-28.5-11.5T360-880q0-17 11.5-28.5T400-920h160q17 0 28.5 11.5T600-880q0 17-11.5 28.5T560-840H400Zm348 516L520-552v-48q0-17-11.5-28.5T480-640q-10 0-18.5 4T448-624l-85-85q-18-18-13-43t29-33q24-8 49.5-11.5T480-800q60 0 117.5 20T706-722l28-28q11-11 28-11t28 11q11 11 11 28t-11 28l-28 28q38 51 58 108.5T840-440q0 26-3.5 51T825-339q-8 24-33 29t-44-14Z" />
  </svg>
)
