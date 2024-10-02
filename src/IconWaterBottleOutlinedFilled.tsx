import React from 'react'
import { IconProps } from './types'

export const IconWaterBottleOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M393-80q-31 0-54-20.5T313-152l-31-346q-1-10 3.5-18.5T299-530q8-5 14-12t6-17q0-9-4-16.5T303-588q-10-5-15-15.5t-2-21.5l26-105q3-14 14-22t25-8h109v-40h-60v-80h200v80h-60v40h109q14 0 24.5 8t13.5 22l27 105q3 11-2 21.5T697-588q-8 4-12.5 11t-4.5 16q0 11 5.5 18.5T700-530q9 5 14 13.5t4 18.5l-31 345q-3 31-26 52t-54 21H393Z" />
  </svg>
)
