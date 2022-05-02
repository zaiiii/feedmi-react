import React, { useState } from 'react';
import { Button, Tooltip } from 'antd';
import classNames from 'classnames';
import './emoji-console.scss';
import { reactionFeedback } from '../../../utils/counter-service';
import { IconFont } from '../../../component/icon-font';

function confusedReact() {
    console.log("confused")
    reactionFeedback("confused")
}

function boredReact() {
    console.log("bored")
    reactionFeedback("bored")
}

function interestedReact() {
    console.log("interested")
    reactionFeedback("interested")
}



const EmojiConsole = () => {
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(prev => !prev);
  };


  const consoleItems = () => {
    return (
      <div className={classNames('console')}>
        <Tooltip
          title={"confused"}
        >
          <Button
            className={classNames('emoji-console-button', {
            })}
            
            ghost={true}
            shape="circle"
            size="small"
            onClick={confusedReact}
            onMouseEnter={()=>{setIsHover(true)}}
            onMouseLeave={()=>{setIsHover(false)}}
          >&#x1F615;</Button>
        </Tooltip>
        <Tooltip
          title={"bored"}
        >
          <Button
            className={classNames('emoji-console-button', {
            })}
            
            ghost={true}
            shape="circle"
            size="small"
            onClick={boredReact}
            onMouseEnter={()=>{setIsHover(true)}}
            onMouseLeave={()=>{setIsHover(false)}}
          >&#x1F61E;</Button>
        </Tooltip>
  
        <Tooltip
          title={"interested"}
        >
          <Button
            className={classNames('emoji-console-button', {
            })}
            
            ghost={true}
            shape="circle"
            size="small"
            onClick={interestedReact}
            onMouseEnter={()=>{setIsHover(true)}}
            onMouseLeave={()=>{setIsHover(false)}}
          >&#x1F603;</Button>
        </Tooltip>
      </div>
    );
  };

  return (<Tooltip
    title={consoleItems}
  >
    <Button
    className={classNames('feedback-button', {
    })}
      icon={<IconFont type={'icon-feedback'} />}
      // eslint-disable-next-line react/jsx-boolean-value
      ghost={true}
      shape="circle"
      size="large"
      onClick={onClick}
      onMouseEnter={()=>{setIsHover(true)}}
      onMouseLeave={()=>{setIsHover(false)}}
    />
  </Tooltip>);
};


export {EmojiConsole};
    

