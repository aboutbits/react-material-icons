import React from 'react'
import { IconProps } from './types.js'

export const IconUsbOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M791-55 526-320h-6v92q19 10 29.5 28.5T560-160q0 33-23.5 56.5T480-80q-33 0-56.5-23.5T400-160q0-21 11-39t29-29v-92H320q-33 0-56.5-23.5T240-400v-92q-19-10-29.5-28.5T200-560q0-17 6.5-32.5T227-619L55-791l57-57 736 736-57 57Zm-80-308-71-71v-46h-40v-160h160v160h-40v80q0 10-2 19.5t-7 17.5Zm-391-37h120v-6L339-507q-4 5-9 8.5t-10 6.5v92Zm200-154-80-80v-86h-80l120-160 120 160h-80v166Z" />
  </svg>
)