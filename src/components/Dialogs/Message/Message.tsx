
import React from "react";

type MessageType = {
    mess: string
}

export const Message = (p:MessageType) => {
    return (
        <div>{p.mess}</div>
    )
}