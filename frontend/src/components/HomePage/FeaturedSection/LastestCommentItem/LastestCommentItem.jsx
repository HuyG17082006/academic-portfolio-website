import "./LastestCommentItem.scss";

export default function LatestCommentItem({
    id,
    title,
    date,
    image
}) {

    return (

        <article className="lastest-item">

            <div className="lastest-item-image lastest-image">
                {image && <img src={image} alt={title} />}
            </div>

            <div className="lastest-item-content">

                <h3>{title}</h3>

                <small>{date}</small>

            </div>

        </article>

    );

}