import React from 'react';

const Post = ({name, nickname, photo, content, postPhoto}) => {
    return (
        <div className='postItem'>
            <div className='postItemPhoto'>
                <img src={photo} alt=''/>   
            </div> 
            <div className='postItemContainer'>
                <div className='postItemInfo'>
                    <div className='itemInfoAboutPerson'>
                        <div className='personName'>{name}</div>
                        <div className='personNickname'>{nickname}</div>    
                    </div> 
                    <div className='itemContent'>{content}</div>   
                </div>
                <div className='postPhoto'>
                    <img src={postPhoto} alt=''/>
                </div> 
            </div>
        </div>
    );
}

export default Post;