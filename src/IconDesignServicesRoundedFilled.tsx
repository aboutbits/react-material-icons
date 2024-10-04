import React from 'react'
import { IconProps } from './types.js'

export const IconDesignServicesRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m352-522 86-87-56-57-16 16q-11 11-27.5 11.5T310-650q-12-12-12-28.5t12-28.5l15-15-45-45-87 87 159 158Zm328 329 87-87-45-45-16 15q-12 12-28 12t-28-12q-12-12-12-28t12-28l15-16-57-56-86 86 158 159Zm-31-510 56 56 56-56-57-57-55 57ZM160-120q-17 0-28.5-11.5T120-160v-113q0-8 3-15.5t9-13.5l163-163-173-173q-17-17-17-42t17-42l116-116q17-17 42-16.5t42 17.5l174 173 151-152q12-12 27-18t31-6q16 0 31 6t27 18l53 54q12 12 18 27t6 31q0 16-6 30.5T816-647L665-495l173 173q17 17 17 42t-17 42L722-122q-17 17-42 17t-42-17L465-295 302-132q-6 6-13.5 9t-15.5 3H160Z" />
  </svg>
)