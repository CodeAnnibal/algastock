import React from 'react'
import './Button.css'

declare interface ButtonProps {
    content?: string // Colocar ? após o nome do atributo informa que o mesmo é opicional
    onClick?: () => void
    appendIcon?: JSX.Element
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button 
            className="AppButton"
            onClick={props.onClick}>
        { props.children || 'Nameless button' }
        { props.appendIcon }
    </button>
}

export default Button