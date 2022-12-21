import React,{ useState } from 'react';

const LikeButton = () => {
    const [like,setLike] = useState(100);
    const [clickData, setClickData] = useState(false);
    
    const handleClick = () =>{
        if(clickData){
            setLike(like-1);
        }
        else{
            setLike(like+1);
        }
        setClickData(!clickData);
    }
    return (  
        <>
            <button className={clickData? `like-button ${clickData && 'liked'}`:'like-button'} onClick={handleClick}>
                <span className="likes-counter">{`Like|${like}`}</span>
            </button>
        </>
    );
}
 
export default LikeButton;
