import s from './Post.module.css';


type PostType = {
    message: string
    likes: number
}

export const Post = ({message, likes}: PostType) => {
    return (
        <div>
            <img
                className={s.img}
                src='https://media.istockphoto.com/vectors/cat-dog-yin-yang-vector-id1148649846?k=20&m=1148649846&s=612x612&w=0&h=-3UMn6I-dylWcP5WYtHIowCqfMEfXTdJO_Nr1IgpSVw='
                alt="#"
            />
            {message}
            <div>
                <span>likes: {likes}</span>
            </div>

        </div>
    )
}