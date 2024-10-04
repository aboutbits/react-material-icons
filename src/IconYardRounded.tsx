import React from 'react'
import { IconProps } from './types.js'

export const IconYardRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-200q0-48-18-92t-52-78q-29-29-67-47t-80-21q-9-1-15.5 5.5T242-417q3 42 21.5 79.5T311-271q34 34 77.5 52.5T480-200Zm0-202q26 0 44-18t18-44v-6q8 6 16.5 9t19.5 3q26 0 44-18t18-44q0-20-9.5-35T604-576q17-6 26.5-21t9.5-35q0-26-18-44t-44-18q-11 0-19.5 3t-16.5 9v-6q0-26-18-44t-44-18q-26 0-44 18t-18 44v6q-8-6-16.5-9t-19.5-3q-26 0-44 18t-18 44q0 20 9.5 35t26.5 21q-17 6-26.5 21t-9.5 35q0 26 18 44t44 18q11 0 19.5-3t16.5-9v6q0 26 18 44t44 18Zm0-112q-26 0-44-17.5T418-576q0-26 18-44t44-18q26 0 44 18t18 44q0 27-18 44.5T480-514Zm0 314q48 0 92-18t78-52q29-29 47-67t21-80q1-9-5.5-15.5T697-438q-42 3-79.5 21T551-370q-34 34-52.5 78T480-200ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Zm0-80h640v-640H160v640Zm0 0v-640 640Z" />
  </svg>
)
