type MessageType = {
    message: string
}

export const Message = ({message}: MessageType) => {
    return (
        <div>{message.trim()}</div>
    )
}