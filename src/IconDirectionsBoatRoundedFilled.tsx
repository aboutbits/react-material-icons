import React from 'react'
import { IconProps } from './types'

const IconDirectionsBoatRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M158-200 82-468q-3-12 2.5-28t23.5-22l52-18v-184q0-33 23.5-56.5T240-800h120v-80q0-17 11.5-28.5T400-920h160q17 0 28.5 11.5T600-880v80h120q33 0 56.5 23.5T800-720v184l52 18q21 8 25 23.5t1 26.5l-76 268q-40 0-74-15.5T666-255q-11-11-26-11t-26 11q-28 24-62 39.5T480-200q-10 0-19-1t-18-3q-29-6-55-21t-48-35q-8-8-20.5-8t-20.5 8q-28 27-65 43.5T158-200ZM480-40q-41 0-81.5-10T320-80q-38 20-78 30t-82 10h-40q-17 0-28.5-11.5T80-80q0-17 11.5-28.5T120-120h40q36 0 72-10t67-29q10-6 21-6t21 6q22 14 50.5 23t54.5 12q8 1 17 1.5t17 .5q36 0 72-9t67-28q10-6 21-6t21 6q31 20 67 29.5t72 9.5h40q17 0 28.5 11.5T880-80q0 17-11.5 28.5T840-40h-40q-42 0-82-10t-78-30q-38 20-78.5 30T480-40ZM240-562l215-70q12-4 25-4t25 4l215 70v-158H240v158Z" />
  </svg>
)

export { IconDirectionsBoatRoundedFilled as default }
