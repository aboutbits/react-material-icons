import React from 'react'
import { IconProps } from './types'

const IconTimer3RoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-200H380q-25 0-42.5-17.5T320-260q0-25 17.5-42.5T380-320h180v-100H420q-25 0-42.5-17.5T360-480q0-25 17.5-42.5T420-540h140v-100H380q-25 0-42.5-17.5T320-700q0-25 17.5-42.5T380-760h180q50 0 85 35t35 85v76q0 35-24.5 59.5T596-480q35 0 59.5 24.5T680-396v76q0 50-35 85t-85 35Z" />
  </svg>
)

export { IconTimer3RoundedFilled as default }
