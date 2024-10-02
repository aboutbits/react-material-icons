import React from 'react'
import { IconProps } from './types'

export const IconForwardToInboxRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M767-160H640q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240h127l-36-36q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l104 104q6 6 9 13t3 15q0 8-3 15t-9 13L788-68q-11 11-27.5 11.5T732-68q-11-11-11-28t11-28l35-36Zm-607 0q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v260q0 18-15.5 28t-32.5 3q-17-5-35.5-8t-36.5-3q-100 0-170 70t-70 170q0 17-11.5 28.5T480-160H160Zm320-360L212-688q-17-11-34.5-1T160-659q0 9 4 16.5t12 12.5l283 177q10 6 21 6t21-6l283-177q8-5 12-12.5t4-16.5q0-20-17.5-30t-34.5 1L480-520Z" />
  </svg>
)
