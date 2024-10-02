import React from 'react'
import { IconProps } from './types'

export const IconCurrencyRupeeCircleRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M571-270q11-10 12-25t-10-26L462-438l1-3h10q54 0 89.5-33t43.5-77h17q10 0 16.5-7t6.5-17q0-10-6.5-16.5T623-598h-18q-3-15-10.5-28.5T576-653h47q10 0 16.5-7t6.5-17q0-10-6.5-16.5T623-700H343q-12 0-20.5 8.5T314-671q0 12 8.5 20t20.5 8h127q26 0 42.5 13t22.5 32H337q-10 0-16.5 7t-6.5 17q0 10 6.5 16.5T337-551h199q-6 20-23 34.5T467-502h-68q-13 0-22.5 6T362-479q-5 11-3 22.5t11 21.5l150 164q10 11 25 11t26-10ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)
