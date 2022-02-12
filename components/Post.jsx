import React from 'react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/outline"
// import { ChatIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon, DotsHorizontalIcon, BookmarkIcon } from "react-icons/fa"

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

// import Moment from 'react-moment';
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const Post = ({ id, username, userImg, img, caption }) => {
    return (
        <div className='posts'>

            {/* HEADER */}

            <div className='post'>

                <img src={userImg} className='userimg' />
                <p className='p'> {username} </p>

            </div>

            {/* IMG */}  

            <img src={img} className='img' />

            {/* BUTTONS */}

            <div>
                <HeartIcon className='post__btn'/>
                <ChatIcon className='post__btn'/>
            </div>

            {/* CAPTIONS */}
            <p className='captions'>
                <span className="caption__user">{username} </span>{caption}
            </p>

            {/* COMMENTS */}

            {/* INPUT BOX */}
            <form className='post__form'> 
                <EmojiHappyIcon className='form__img'/>
                <input 
                type="text"
                placeholder='Reply to comment'
                className='post__input'
                />
                <button className='post__button'>Post</button>
            </form>

        </div>
    )
}

export default Post
