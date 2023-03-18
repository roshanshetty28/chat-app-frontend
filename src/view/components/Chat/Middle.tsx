import React, { useEffect, useContext } from 'react'
import { ChatContext } from '../../../constants/Chat'
import "./Middle.css"

const Middle = () => {
    const chat = useContext(ChatContext)
    useEffect(() => {
        if (chat?.chat.name !== "") {
            console.log(chat?.chat.name);
        }
    }, [chat?.chat.name])
    return (
        <div className="middle">
            <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
            <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
            <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
            <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
            <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
            <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
            <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
            <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p><p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
            <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
            <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
            <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
            <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
            <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
            <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
            <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
        </div>
    )
}

export default Middle