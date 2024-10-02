import React from 'react'
import { IconProps } from './types'

export const IconLocalPostOfficeRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80q-17 0-28.5-11.5T80-120v-320q0-17 11.5-28.5T120-480h120v-160q0-100 70-170t170-70h160q100 0 170 70t70 170v520q0 17-11.5 28.5T840-80q-17 0-28.5-11.5T800-120v-80H640v80q0 17-11.5 28.5T600-80H120Zm520-200h160v-360q0-66-47-113t-113-47H480q-66 0-113 47t-47 113v160h280q17 0 28.5 11.5T640-440v160Zm-280-6 200-114H160l200 114ZM160-160h400v-170l-160 91q-9 5-19 8t-21 3q-11 0-21-3t-19-8l-160-91v170Zm0-240v26-1 54-9 170-170 9-54 1-26Zm280-160q-17 0-28.5-11.5T400-600q0-17 11.5-28.5T440-640h240q17 0 28.5 11.5T720-600q0 17-11.5 28.5T680-560H440Z" />
  </svg>
)
