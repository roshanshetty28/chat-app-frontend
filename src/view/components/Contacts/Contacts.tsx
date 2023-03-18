import React from 'react'
import "./Contacts.css"
import { Search } from "react-feather"
import SingleContact from './SingleContact'
import Image from "../../../assets/logo512.png"
import Favourites from './Favourites'
import rosh from "../../../assets/rosh.jpg"

const data = [{ name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: rosh }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhvkhvoolbolboljlojblohutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhvkhvoolbolboljlojblohutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhvkhvoolbolboljlojblohutgt', icon: Image }]

const favourites = [{ name: 'jgvkjllllhlpihpihpdic', icon: rosh }, { name: 'jgvdic', icon: Image }, { name: 'jgvdic', icon: Image }, { name: 'jgvdic', icon: Image }]

const Contacts = (): JSX.Element => {
    return (
        <div className='contact'>
            <div className='title'>
                <span className='chats'>Chats</span>
            </div>
            <div className='searchsection'>
                <div className="searchinput">
                    <Search className='search-icon'/>
                    <input className="serchinputelem" type="search" placeholder='Search users' />
                </div>
            </div>
            <div className="favourites">
                <div className='favContainer'>
                    {favourites.map((user, index) => <Favourites data={user} key={index} />)}
                </div>
            </div>
            <div className='recent'>
                <span className='recent-header'><strong>Recent</strong></span>
                <div className="recentContacts">
                    <span>{data.map((user, index) => <SingleContact data={user} key={index} />)}</span>
                </div>
            </div>
        </div>
    )
}

export default Contacts