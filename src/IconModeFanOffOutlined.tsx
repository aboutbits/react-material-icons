import React from 'react'
import { IconProps } from './types.js'

export const IconModeFanOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M880-424q0 51-32 77.5T777-320q-6 0-12-.5t-12-2.5L459-618q8-42 31-78t59-60q6-4 8.5-10.5T560-781q0-8-6.5-13.5T536-800q-38 0-86 16t-50 65q0 16 5 31t13 30l-94-94q13-54 66.5-91T536-880q51 0 77.5 30.5T640-781q0 26-11.5 51T593-689q-22 14-35.5 36T539-606l12 6q6 3 11 7l92-34q17-6 32.5-9.5T719-640q81 0 121 67t40 149ZM819-28 637-211q-13 54-66.5 92.5T424-80q-51 0-77.5-30.5T320-180q0-26 11.5-50.5T367-271q22-14 35.5-36t18.5-47l-12-6q-6-3-11-7l-92 33q-17 6-33 10t-33 4q-63 0-111.5-55T80-536q0-51 30.5-77.5T179-640q8 0 16.5 1t16.5 3L27-820l57-57L876-85l-57 57Zm-42-372q9 0 16-5t7-19q0-38-16-86.5T719-560q-9 0-17 1.5t-15 4.5l-75 28q2 6 3.5 12.5T618-501q42 8 78 30.5t60 59.5q3 5 9 8t12 3Zm-537 0q10 0 18.5-2.5T273-407l75-27q-2-6-3.5-12.5T342-459q-42-8-76.5-29.5T212-538q-9-14-17-18t-16-4q-9 0-14 6t-5 18q0 54 20.5 95t59.5 41Zm184 240q62 0 100-24.5t36-63.5q0-10-4-26t-14-32l-37-37q-11 42-34 78t-60 61q-5 3-8 10t-3 14q2 9 7.5 14.5T424-160Zm194-341Zm-276 42Zm163 116Zm-46-275Z" />
  </svg>
)
