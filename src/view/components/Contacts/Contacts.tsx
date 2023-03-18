import React, { useState } from 'react'
import "./Contacts.css"
import { Search } from "react-feather"
import SingleContact from './SingleContact'
import Image from "../../../assets/logo512.png"
import Favourites from './Favourites'
import rosh from "../../../assets/rosh.jpg"
import SearchResult from './SearchResult'

const data = [{ name: 'rosh', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: rosh }, { name: 'hb', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jb', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'hihb', lastMessage: 'jgvikvikgogolhgujkujollujhljuhvkhvoolbolboljlojblohutgt', icon: Image }, { name: 'jhb', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'gf', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'ugv', lastMessage: 'jgvikvikgogolhgujkujollujhljuhvkhvoolbolboljlojblohutgt', icon: Image }, { name: 'yg', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'fiu', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'hg', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'iu', lastMessage: 'jgvikvikgogolhgujkujollujhljuhvkhvoolbolboljlojblohutgt', icon: Image }]

const favourites = [{ name: 'jgvkjllllhlpihpihpdic', icon: rosh }, { name: 'yfc', icon: Image }, { name: 'ugu', icon: Image }, { name: 'jgviydic', icon: Image }]

const Contacts = (): JSX.Element => {
    const [searchContact, setSearchContact] = useState<string>("")
    return (
        <div className='contact'>
            <div className='title'>
                <span className='chats'>Chats</span>
            </div>
            <div className='searchsection'>
                <div className="searchinput">
                    <Search className='search-icon' />
                    <input value={searchContact} onChange={(e) => setSearchContact(e.target.value)} className="serchinputelem" type="search" placeholder='Search users' />
                </div>
            </div>
            {searchContact !== "" ? <div className="search-result-container">{favourites.map((user, index) => <SearchResult data={user} key={index} />)} </div> : <><div className="favourites">
                <div className='favContainer'>
                    {favourites.map((user, index) => <Favourites data={user} key={index} />)}
                </div>
            </div>
                <div className='recent'>
                    <span className='recent-header'><strong>Recent</strong></span>
                    <div className="recentContacts">
                        <span>{data.map((user, index) => <SingleContact data={user} key={index} />)}</span>
                    </div>
                </div></>}
        </div>
    )
}

export default Contacts