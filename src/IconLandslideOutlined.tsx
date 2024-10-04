import React from 'react'
import { IconProps } from './types'

const IconLandslideOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80h800L640-400l-200-80-120-160H80v560Zm80-80v-64l80 26 361-120 119 158H160Zm80-122-80-27v-75l80 26 158-52 96 43-254 85Zm500-118 180-80v-160l-180-40-100 80v120l100 80Zm-500-42-80-27v-91h120l65 83-105 35Zm512-51-32-25v-44l40-32 80 18v44l-88 39ZM480-640l200-80v-200l-200-40-120 80v160l120 80Zm9-90-49-33v-74l57-38 103 21v80l-111 44Z" />
  </svg>
)

export { IconLandslideOutlined as default }
