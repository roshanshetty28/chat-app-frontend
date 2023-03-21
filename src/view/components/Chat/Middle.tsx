import React, { useEffect, useContext, useRef } from 'react'
import { ChatContext } from '../../../constants/Chat'
import Message from './Message'
import "./Middle.css"

const messages = [{ id: 1, content: 'rxtfcfc' }, { id: 2, content: 'uyvh' }, { id: 1, content: 'ienijniefv' }, { id: 2, content: 'ieniibbibjbibjniefvloremieniibbibjbibjniefvloremieniibbibjbibjniefvloremieniibbibjbibjniefvloremieniibbibjbibjniefvloremvvvieniibbibjbibjniefvloremieniibbibjbibjniefvloremieniibbibjbibjniefvlorem' }, { id: 2, content: 'ienijniefv' }, { id: 1, content: 'ienijivikhobjllniefv' },{ id: 1, content: 'rxtfcfc' }, { id: 2, content: 'uyvh' }, { id: 1, content: 'ienijniefv' }, { id: 2, content: 'ieniibbibjbibjniefvloremieniibbibjbibjniefvloremieniibbibjbibjniefvloremieniibbibjbibjniefvloremieniibbibjbibjniefvloremvvvieniibbibjbibjniefvloremieniibbibjbibjniefvloremieniibbibjbibjniefvlorem' }, { id: 2, content: 'ienijniefv' }, { id: 1, content: 'ienijivikhobjllniefv' },{ id: 1, content: 'rxtfcfc' }, { id: 2, content: 'uyvh' }, { id: 1, content: 'ienijniefv' }, { id: 2, content: 'ieniibbibjbibjniefvloremieniibbibjbibjniefvloremieniibbibjbibjniefvloremieniibbibjbibjniefvloremieniibbibjbibjniefvloremvvvieniibbibjbibjniefvloremieniibbibjbibjniefvloremieniibbibjbibjniefvlorem' }, { id: 2, content: 'ienijniefv' }, { id: 1, content: 'ienijivikhobjllniefv' }]

const Middle = () => {
    const bottomRef = useRef<HTMLInputElement>(null);
    const chat = useContext(ChatContext)
    useEffect(() => {
        if (chat?.chat.name !== "") {
            console.log(chat?.chat.name);
        }
    }, [chat?.chat.name])
    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        bottomRef.current?.scrollIntoView();
      }, [messages]);
    return (
        <div className="middle">
            {messages.map((message, index) => <Message data={message} key={index} />)}
            <div ref={bottomRef} />
        </div>
    )
}

export default Middle