import React from 'react'
import Chat from '../../view/components/Chat/Chat'
import Contacts from '../../view/components/Contacts/Contacts'
import Sidebar from '../../view/components/Sidebar'
import "./Main.css"

const Main = (): JSX.Element => {
    return (
        <div className='main'>
            <Sidebar />
            <Contacts />
            <Chat />
        </div>
    )
}
export default Main