import React from 'react'
import { IconProps } from './types'

export const IconMarkEmailReadRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v141q0 16-6 30.5T857-523L639-305l-58-58q-23-23-57-23t-57 23l-55 55q-24 24-19.5 59t27.5 62q7 8 3 17.5t-15 9.5H160Zm320-360L212-688q-17-11-34.5-1T160-659q0 9 4 16.5t12 12.5l283 177q10 6 21 6t21-6l283-177q8-5 12-12.5t4-16.5q0-20-17.5-30t-34.5 1L480-520Zm158 328 198-198q11-11 28-11t28 11q11 11 11 28t-11 28L666-108q-6 6-13 9t-15 3q-8 0-15-3t-13-9L496-222q-11-11-11-28t11-28q11-11 28-11t28 11l86 86Z" />
  </svg>
)
