import React from 'react'
import { IconProps } from './types.js'

export const IconMediationOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-40q-50 0-85-35t-35-85q0-50 35-85t85-35q27 0 52 12.5t42 33.5q59-32 96-86t46-120H312q-12 36-43 58t-69 22q-50 0-85-35t-35-85q0-50 35-85t85-35q38 0 69 22t43 58h124q-9-66-46-120t-96-86q-17 21-42 33.5T200-680q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 84 34t36 84q81 42 134 116t64 166h210l-64-64 56-56 160 160-160 160-56-56 64-64H518q-11 92-63 166.5T320-158q-2 50-36 84t-84 34Z" />
  </svg>
)