import React from 'react'
import { IconProps } from './types'

const IconProcedureOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-520q-38 0-81-21.5T599-601q-37-38-58.5-81T519-762q0-17 5-31t15-24q26-26 105.5-45.5T794-879q25 2 41.5 6t24.5 12q7 7 11.5 21.5T878-803q5 69-14 152t-46 110q-10 10-25.5 15.5T760-520Zm35-200q2-18 3-38t2-42q-20-1-40.5.5T719-796q11 8 21.5 17t19.5 18q10 10 18.5 20t16.5 21Zm-35 120q1-20-15-49.5T703-704q-25-25-53.5-40.5T601-760q2 23 17 52t37 51q24 24 52.5 39.5T760-600Zm92 388L664-400H264L52-612l56-56 188 188h400l212 212-56 56ZM320-80v-160q0-33 23.5-56.5T400-320h160q33 0 56.5 23.5T640-240v160H320Zm80-80h160v-80H400v80Zm0 0v-80 80Z" />
  </svg>
)

export { IconProcedureOutlined as default }