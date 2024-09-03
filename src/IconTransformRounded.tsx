import React from 'react'
import { IconProps } from './types'

const IconTransformRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-600H120q-17 0-28.5-11.5T80-640q0-17 11.5-28.5T120-680h160v-86l-35 35q-12 12-28.5 11.5T188-732q-11-12-11.5-28t11.5-28l104-104q12-12 28-12t28 12l104 104q12 12 11.5 28T452-732q-12 12-28.5 12.5T395-731l-35-35v406h480q17 0 28.5 11.5T880-320q0 17-11.5 28.5T840-280H680v86l35-35q12-12 28.5-11.5T772-228q11 12 11.5 28T772-172L668-68q-12 12-28 12t-28-12L508-172q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T565-229l35 35v-86H360q-33 0-56.5-23.5T280-360v-240Zm320 160v-160H440v-80h160q33 0 56.5 23.5T680-600v160h-80Z" />
  </svg>
)

export { IconTransformRounded as default }
