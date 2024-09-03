import React from 'react'
import { IconProps } from './types'

const IconBikeScooterSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0-200v-80h164q11-68 56.5-119T332-470l-58-250H120v-80h218l92 400h-30q-66 0-113 47t-47 113v40H0Zm400 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T440-240q0-17-11.5-28.5T400-280q-17 0-28.5 11.5T360-240q0 17 11.5 28.5T400-200Zm360-40q-72 0-126.5-44.5T564-400h-94l-18-80h112q5-23 13.5-43t22.5-37H434l-18-80h226l-44-120H494v-80h161l73 198h32q83 0 141.5 58.5T960-442q0 85-58.5 143.5T760-240Zm0-80q51 0 85.5-35t34.5-85q0-51-34.5-85.5T760-560h-4l40 106-76 28-38-106q-20 17-31 40t-11 52q0 50 34.5 85t85.5 35Zm-360 80Zm360-200Z" />
  </svg>
)

export { IconBikeScooterSharp as default }
