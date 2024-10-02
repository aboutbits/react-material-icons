import React from 'react'
import { IconProps } from './types'

export const IconGridOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m819-28-92-92h-74v-74l-80-80v154H387v-187h153l-80-80h-73v-74l-80-80v154H120v-186h155l-80-80h-75v-75l-92-92 56-56L876-84l-57 56Zm-699-92v-187h187v187H120Zm720-116-71-71h71v71ZM689-387l-36-36v-150h187v186H689ZM573-503l-70-70h70v70ZM423-653l-36-36v-151h186v187H423Zm230 0v-187h187v187H653ZM307-769l-71-71h71v71Z" />
  </svg>
)
