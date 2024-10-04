import React from 'react'
import { IconProps } from './types'

const IconMotorcycleRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-200q-83 0-141.5-58.5T0-400q0-83 58.5-141.5T200-600h464l-80-80H480q-17 0-28.5-11.5T440-720q0-17 11.5-28.5T480-760h103q16 0 30.5 6t25.5 17l139 139q78 6 130 63t52 135q0 83-58.5 141.5T760-200q-83 0-141.5-58.5T560-400q0-18 2.5-35.5T572-470l-98 98q-6 6-13.5 9t-15.5 3h-49q-14 70-69 115t-127 45Zm560-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-560 0q38 0 68.5-22t43.5-58h-72q-17 0-28.5-11.5T200-400q0-17 11.5-28.5T240-440h72q-13-36-43.5-58T200-520q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
  </svg>
)

export { IconMotorcycleRoundedFilled as default }
