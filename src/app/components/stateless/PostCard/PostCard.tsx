interface PostCardProps {
    title: string;
    body: string;
}

const PostCard: React.FC<PostCardProps> = ({title, body}) => {

    return (
        <div className="p-3 flex flex-col gap-1">
            <h2 className="font-semibold text-lg">{title}</h2>
            <hr />
            <div>{body}</div>
        </div>
    );
}

export default PostCard;