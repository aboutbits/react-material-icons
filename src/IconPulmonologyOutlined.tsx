import React from 'react'
import { IconProps } from './types.js'

export const IconPulmonologyOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-51 0-85.5-34.5T80-240v-167l105-281q12-33 42-52.5t65-19.5q45 0 76.5 32.5T400-649v49h-80v-49q0-13-9-22t-21-9q-10 0-18.5 5.5T260-660L160-392v152q0 17 11.5 28.5T200-200h120q17 0 28.5-11.5T360-240v-80h80v80q0 51-35 85.5T320-120H200Zm559 0H639q-50 0-85-34.5T519-240v-80h80v80q0 17 11.5 28.5T639-200h120q17 0 28.5-11.5T799-240v-152L699-660q-4-9-12-14.5t-18-5.5q-13 0-21.5 9t-8.5 22v49h-80v-49q0-46 31.5-78.5T667-760q35 0 64.5 19.5T774-688l105 281v167q0 51-35 85.5T759-120ZM320-456Zm319 0Zm-159-47L376-400l-56-56 120-120v-304h80v304l120 120-57 56-103-103Z" />
  </svg>
)
