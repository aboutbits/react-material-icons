import React from 'react'
import { IconProps } from './types'

export const IconTimer3SelectOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-200v-120h240v-100H160v-120h240v-100H160v-120h240q50 0 85 35t35 85v76q0 35-24.5 59.5T436-480q35 0 59.5 24.5T520-396v76q0 50-35 85t-85 35H160Zm440 0v-80h160v-40H654q-23 0-38.5-15.5T600-374v-92q0-23 15.5-38.5T654-520h186v80H680v40h106q23 0 38.5 15.5T840-346v92q0 23-15.5 38.5T786-200H600Z" />
  </svg>
)
