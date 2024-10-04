import React from 'react'
import { IconProps } from './types.js'

export const IconWebhookRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-120q-83 0-141.5-58.5T80-320q0-56 27-101.5t72-71.5q21-12 41 .5t20 34.5q0 11-4.5 20T223-425q-28 15-45.5 43T160-320q0 50 35 85t85 35q50 0 85-35t35-85q0-17 9.5-28.5T436-360h199q8-9 19.5-14.5T680-380q25 0 42.5 17.5T740-320q0 25-17.5 42.5T680-260q-14 0-25.5-5.5T635-280H476q-14 69-68.5 114.5T280-120Zm0-140q-25 0-42.5-17.5T220-320q0-22 14-38t34-21l94-156q-29-27-45.5-64.5T300-680q0-83 58.5-141.5T500-880q70 0 123.5 42.5T694-730q5 19-7 34.5T655-680q-13 0-24.5-9.5T615-713q-11-38-42-62.5T500-800q-50 0-85 35t-35 85q0 33 16.5 60.5T439-576q14 8 17.5 20t-3.5 24L337-338q2 5 2.5 9t.5 9q0 25-17.5 42.5T280-260Zm400 140q-26 0-50.5-6.5T584-144q-27-15-21.5-45.5T603-220q5 0 11 2t11 5q13 7 26.5 10t28.5 3q50 0 85-35t35-85q0-50-35-85t-85-35q-10 0-19 1.5t-18 4.5q-16 5-30 .5T592-449L489-621q-21-4-35-20t-14-39q0-25 17.5-42.5T500-740q25 0 42.5 17.5T560-680v8.5q0 3.5-2 8.5l87 146q8-2 17-2.5t18-.5q83 0 141.5 58.5T880-320q0 83-58.5 141.5T680-120Z" />
  </svg>
)