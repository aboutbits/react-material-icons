import React from 'react'
import { IconProps } from './types'

export const IconWatchWakeRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-280q-17 0-28.5-11.5T760-320q0-17 11.5-28.5T800-360q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280Zm0-160q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h40q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440h-40Zm0-160q-17 0-28.5-12T760-641q0-17 12-28.5t29-11.5h79q17 0 28.5 11.5T920-641q0 17-11.5 29T880-600h-80ZM400-280q83 0 141.5-58.5T600-480q0-83-58.5-141.5T400-680q-83 0-141.5 58.5T200-480q0 83 58.5 141.5T400-280ZM340-80q-26 0-47.5-15.5T263-137l-23-77q-6-20-18.5-40.5T189-297q-34-37-51.5-84T120-480q0-51 17.5-98t51.5-85q20-23 32.5-43t18.5-40l23-77q8-26 29.5-41.5T340-880h120q26 0 47.5 15.5T537-823l23 77q6 20 18.5 40.5T611-663q34 37 51.5 84t17.5 99q0 51-17.5 98T611-297q-20 23-32.5 43T560-214l-23 77q-8 26-29.5 41.5T460-80H340Zm0-720h120-120Zm0 640h120-120Zm-16-590q20-5 38.5-8t37.5-3q19 0 37.5 3t38.5 8l-16-50H340l-16 50Zm16 590h120l16-50q-20 5-38.5 7.5T400-200q-19 0-37.5-2.5T324-210l16 50Z" />
  </svg>
)
