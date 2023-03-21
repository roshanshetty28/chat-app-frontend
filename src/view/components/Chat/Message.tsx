import React, { useEffect, useState } from 'react'
import "./Message.css"

interface MessageProps {
    data: {
        content: string,
        id: number
    }
}

const Message = (props: MessageProps) => {
    const { data } = props
    const { content, id } = data
    const [own, setOwn] = useState(false)
    useEffect(() => {
        if (id == 1) {
            setOwn(true)
        }
    }, [])
    return (
        <div className={own === true ? "outgoing message-container" : "incoming message-container"}>{content}</div>
    )
}

export default Message