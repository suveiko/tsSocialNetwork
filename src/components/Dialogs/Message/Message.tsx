import React from "react";

type MessageType = {
    message: string
}

export const Message = ({message}: MessageType) => {
    return (
        <div>{message}</div>
    )
}