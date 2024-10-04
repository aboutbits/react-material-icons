import React from 'react'
import { IconProps } from './types'

const IconSourceEnvironmentRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-590q0-10 4-18t12-14l160-120q11-8 24-8t24 8l160 120q8 6 12 14t4 18v70h360q17 0 28.5 11.5T880-640v480q0 17-11.5 28.5T840-120H120q-17 0-28.5-11.5T80-160Zm80-40h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 0h80v-80h-80v80Zm0 480h480v-400H320v400Zm280-320h80q17 0 28.5 11.5T720-480q0 17-11.5 28.5T680-440h-80q-17 0-28.5-11.5T560-480q0-17 11.5-28.5T600-520Zm0 160h80q17 0 28.5 11.5T720-320q0 17-11.5 28.5T680-280h-80q-17 0-28.5-11.5T560-320q0-17 11.5-28.5T600-360ZM480-480q0 17-11.5 28.5T440-440q-17 0-28.5-11.5T400-480q0-17 11.5-28.5T440-520q17 0 28.5 11.5T480-480Zm-40 200q-17 0-28.5-11.5T400-320q0-17 11.5-28.5T440-360q17 0 28.5 11.5T480-320q0 17-11.5 28.5T440-280Z" />
  </svg>
)

export { IconSourceEnvironmentRoundedFilled as default }
