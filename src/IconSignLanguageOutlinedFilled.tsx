import React from 'react'
import { IconProps } from './types'

const IconSignLanguageOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-40q-17 0-28.5-11.5T160-80q0-17 11.5-28.5T200-120h160v-40H120q-17 0-28.5-11.5T80-200q0-17 11.5-28.5T120-240h240v-40H80q-17 0-28.5-11.5T40-320q0-17 11.5-28.5T80-360h280v-40H160q-17 0-28.5-11.5T120-440q0-17 11.5-28.5T160-480h244l-34-60q-12-21-9.5-44.5T380-625l28-28 264 197q23 17 35.5 42t12.5 54v200q0 50-35 85t-85 35H200Zm70-493-14-10q-14-10-16.5-26t7.5-30q10-14 26-16t30 8l1 1q-5 18-3.5 36.5T308-533h-38Zm-15-210q10-14 26-16t30 8l63 47-36 37q-5 5-9.5 10.5T320-645l-57-42q-14-10-16-26t8-30Zm609 254-85 113q-4-38-22.5-71.5T708-504L477-677 303-807q-14-10-16-26t8-30q10-14 26-16.5t30 7.5l223 168 25-32-160-120q-14-10-16.5-26t7.5-30q10-14 26-16t30 8l196 146 9-69q3-24 19-41t39-21l40-6 94 316q8 27 3 55t-22 51Z" />
  </svg>
)

export { IconSignLanguageOutlinedFilled as default }
