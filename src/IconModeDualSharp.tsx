import React from 'react'
import { IconProps } from './types'

const IconModeDualSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M176-316q0 39 20 75.5t65 81.5l-58 55q-57-56-82-106T96-315q0-41 11.5-85.5T144-504q23-54 32-86.5t9-61.5q0-36-21.5-69.5T94-797l54-59q61 52 89 101t28 103q0 38-11 80.5T219-473q-23 54-33 89.5T176-316Zm160-1q0 39 20 76t65 82l-58 55q-57-56-82-106t-25-105q0-41 11.5-85.5T304-504q23-54 32-86.5t9-61.5q0-36-21.5-69.5T254-797l54-59q61 52 89 101t28 103q0 38-11 80t-35 98q-23 54-33 89.5T336-317ZM480-80v-800h80v166l130-129 56 57-186 186v80h80l186-186 56 56-128 130h166v80H754l129 129-57 57-186-186h-80v80l186 186-56 56-130-128v166h-80Z" />
  </svg>
)

export { IconModeDualSharp as default }
