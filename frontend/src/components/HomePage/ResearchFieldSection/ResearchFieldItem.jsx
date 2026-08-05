import "./ResearchFieldSection.scss";

export default function ResearchFieldItem({
    title,
    year,
    image
}) {

    return (

        <article className="research-book">

            <div className="research-book-image">

                {
                    image &&
                    <img src={image} alt={title}/>
                }

            </div>

            <h3>{title}</h3>

            <span>{year}</span>

        </article>

    );

}