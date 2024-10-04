import React from 'react'
import { IconProps } from './types.js'

export const IconEcgRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-480ZM160-800h640q33 0 56.5 23.5T880-720v200q0 17-11.5 28.5T840-480q-17 0-28.5-11.5T800-520v-200H160v80q0 17-11.5 28.5T120-600q-17 0-28.5-11.5T80-640v-80q0-33 23.5-56.5T160-800Zm0 640q-33 0-56.5-23.5T80-240v-80q0-17 11.5-28.5T120-360q17 0 28.5 11.5T160-320v80h240q17 0 28.5 11.5T440-200q0 17-11.5 28.5T400-160H160Zm360-130q0-45 32-77.5t78-32.5q26 0 49.5 12t40.5 35q16-23 39.5-35t50.5-12q45 0 77.5 32.5T920-290q0 36-26 69.5T780-112l-34 29q-5 5-12 7.5T720-73q-7 0-13.5-2T694-82l-35-30q-88-75-113.5-108.5T520-290Zm200 124 28-23q56-48 74-67.5t18-33.5q0-12-9-21t-21-9q-8 0-14.5 3.5T780-305l-60 57-61-57q-9-8-15.5-11.5T630-320q-13 0-21.5 9t-8.5 21q0 14 17.5 33.5T691-189l29 23ZM280-280q-12 0-21.5-5.5T244-302l-69-138h-55q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h80q11 0 20.5 6t14.5 16l45 89 124-249q5-10 15-15t21-5q11 0 21 5t15 15l68 138h96q17 0 28.5 11.5T680-480q0 17-11.5 28.5T640-440H520q-12 0-21.5-5.5T484-462l-44-88-125 248q-5 11-14.5 16.5T280-280Zm440 37Z" />
  </svg>
)
