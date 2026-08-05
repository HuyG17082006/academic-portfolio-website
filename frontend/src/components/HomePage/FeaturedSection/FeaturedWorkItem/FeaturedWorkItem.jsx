import { FaRegFilePdf } from "react-icons/fa6";

import "./FeaturedWorkItem.scss";

export default function FeaturedWorkItem({
    id,
    title,
    from,
    year,
    doi,
    url,
    pdf,
    image
}) {

    return (

        <div className="featured-work-item" id={id} href={`/research/${id}`}>

            <div className="featured-item-image work-image">
                {image && <img src={image} alt={title} />}
            </div>

            <div className="featured-item-content">

                <h3>{title}</h3>

                <p>{from}</p>

                <small>

                    {year}

                    {doi && (
                        <>
                            {" | "}
                            DOI: {doi}
                        </>
                    )}

                </small>

            </div>



            <div className="featured-pdf-download">



                <a
                    href={pdf || url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={pdf ? "Tải PDF" : "Xem bài báo"}
                >
                    <FaRegFilePdf />
                </a>



            </div>



        </div>

    );

}