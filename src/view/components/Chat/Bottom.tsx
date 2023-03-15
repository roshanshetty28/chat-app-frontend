import React, { useRef, useState } from 'react'
import { Send, Paperclip, Smile } from "react-feather"
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import "./Bottom.css"

const Bottom = (): JSX.Element => {
    const fileInput=useRef<HTMLInputElement>(null)
    const [message, setMessage] = useState('')
    const [show, setShow] = useState(false);
    const handleEmoji = (emojiData: EmojiClickData, event: MouseEvent) => {
        setMessage((msg) => msg + emojiData.emoji)
        console.log(message);
    }
    const handleFileInput=()=>{
        fileInput.current?.click()
    }
    return (
        <div className='complete-bottom'>
            <div>{show && (
                <EmojiPicker width="99.8%" height="300px" onEmojiClick={handleEmoji} />
            )}</div>
            <div className="bottom">
                <div className="bottom-left"><button onClick={(e) => setShow(!show)} className='emoji-input'><Smile style={{ color: '#7269ef' }} /></button></div>
                <div className="bottom-center"><input value={message} className='inputelem' placeholder='Type your message...' onChange={(e) => setMessage(e.target.value)} /></div>
                <div className="bottom-right">
                    <button onClick={handleFileInput} className='chat-attach-btn'>
                        <input ref={fileInput} type="file"/>
                        <div className='chat-attach-btn-cont'>
                            <Paperclip color='#7269ef' />
                        </div>
                    </button>
                    <button className='chat-send-btn'><Send style={{ color: '#7269ef' }} /></button>
                </div>
            </div>
        </div>
    )
}

export default Bottom