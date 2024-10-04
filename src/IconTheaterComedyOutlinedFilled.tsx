import React from 'react'
import { IconProps } from './types'

const IconTheaterComedyOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-80q-100 0-170-70T40-320v-280h480v280q0 100-70 170T280-80Zm-80-300q17 0 28.5-11.5T240-420q0-17-11.5-28.5T200-460q-17 0-28.5 11.5T160-420q0 17 11.5 28.5T200-380Zm80 136q39 0 69.5-20.5T380-320H180q0 35 30.5 55.5T280-244Zm80-136q17 0 28.5-11.5T400-420q0-17-11.5-28.5T360-460q-17 0-28.5 11.5T320-420q0 17 11.5 28.5T360-380Zm320 20q-26 0-51.5-5.5T580-382v-278H440v-220h480v280q0 100-70 170t-170 70Zm-80-300q17 0 28.5-11.5T640-700q0-17-11.5-28.5T600-740q-17 0-28.5 11.5T560-700q0 17 11.5 28.5T600-660Zm-20 136h200q0-35-30.5-55.5T680-600q-34 0-67 18t-33 58Zm180-136q17 0 28.5-11.5T800-700q0-17-11.5-28.5T760-740q-17 0-28.5 11.5T720-700q0 17 11.5 28.5T760-660Z" />
  </svg>
)

export { IconTheaterComedyOutlinedFilled as default }
