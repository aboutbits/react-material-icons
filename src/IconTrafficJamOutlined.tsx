import React from 'react'
import { IconProps } from './types'

const IconTrafficJamOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80q-17 0-28.5-11.5T40-120v-320l85-203q7-17 22-27t33-10h360q18 0 33 10t22 27l85 203v320q0 17-11.5 28.5T640-80h-40q-17 0-28.5-11.5T560-120v-40H160v40q0 17-11.5 28.5T120-80H80Zm72-440h415l-33-80H186l-34 80Zm-32 280h480v-200H120v200Zm100-40q25 0 42.5-17.5T280-340q0-25-17.5-42.5T220-400q-25 0-42.5 17.5T160-340q0 25 17.5 42.5T220-280Zm280 0q25 0 42.5-17.5T560-340q0-25-17.5-42.5T500-400q-25 0-42.5 17.5T440-340q0 25 17.5 42.5T500-280Zm220 80v-344l-73-176H227l18-43q7-17 22-27t33-10h360q18 0 33 10t22 27l85 203v320q0 17-11.5 28.5T760-200h-40Zm120-120v-344l-73-176H347l18-43q7-17 22-27t33-10h360q18 0 33 10t22 27l85 203v320q0 17-11.5 28.5T880-320h-40Zm-480-20Z" />
  </svg>
)

export { IconTrafficJamOutlined as default }