import React from 'react'
import { IconProps } from './types'

export const IconBeachAccessRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M758-148 560-346q-11-11-11-28t11-28q11-11 28-11t28 11l198 198q11 11 11 28t-11 28q-11 11-28 11t-28-11Zm-453-65q-28 28-65.5 26.5T182-219q-60-93-63.5-201.5T168-625q3 34 17 76.5t38.5 89.5q24.5 47 58.5 96.5t75 97.5l-52 52Zm107-107q-48-48-84-104.5T271.5-534q-20.5-53-23-96.5T267-695q21-22 64.5-20t97 22.5q53.5 20.5 110 57T643-551L412-320Zm330-459q31 20 33 57t-26 65l-51 51q-47-41-96.5-74t-96-58q-46.5-25-89-39.5T340-795q95-49 203-45t199 61Z" />
  </svg>
)
