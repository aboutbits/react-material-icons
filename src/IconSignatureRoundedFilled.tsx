import React from 'react'
import { IconProps } from './types'

const IconSignatureRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M563-491q73-54 114-118.5T718-738q0-32-10.5-47T679-800q-47 0-83 79.5T560-541q0 14 .5 26.5T563-491ZM164-308q-11 11-28 11t-28-11q-11-11-11-28t11-28l36-36-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l36 36 36-36q11-11 28-11t28 11q11 11 11 28t-11 28l-36 36 36 36q11 11 11 28t-11 28q-11 11-28 11t-28-11l-36-36-36 36Zm454-12q-30 0-55-11.5T520-369q-16 8-33 16l-34 16q-16 7-31.5.5T400-359q-6-16 1.5-31t23.5-22q17-8 33-15.5t31-15.5q-5-22-7.5-48t-2.5-56q0-144 57-238.5T679-880q52 0 85 38.5T797-734q0 86-54.5 170T591-413q7 7 14.5 10.5T621-399q21 0 49-23t54-62q10-14 25.5-19.5T780-502q15 8 22 23.5t4 32.5q-2 12-2 23t3 21q5-2 11.5-6.5T832-420q12-11 28.5-12.5T890-424q14 11 15 27t-10 27q-23 23-48.5 36.5T798-320q-21 0-37.5-12.5T733-371q-28 25-57 38t-58 13ZM160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200q17 0 28.5 11.5T200-160q0 17-11.5 28.5T160-120Zm160 0q-17 0-28.5-11.5T280-160q0-17 11.5-28.5T320-200q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120Zm160 0q-17 0-28.5-11.5T440-160q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120Zm160 0q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200q17 0 28.5 11.5T680-160q0 17-11.5 28.5T640-120Zm160 0q-17 0-28.5-11.5T760-160q0-17 11.5-28.5T800-200q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120Z" />
  </svg>
)

export { IconSignatureRoundedFilled as default }
