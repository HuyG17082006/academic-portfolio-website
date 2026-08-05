import "./SpeakerActivityItem.scss";

export default function SpeakerActivityItem({
    title,
    location,
    date,
    icon
}) {

    return (

        <article className="speaker-item">

            <div className="speaker-item-image activity-icon">
                {icon}
            </div>

            <div className="speaker-item-content">

                <h3>{title}</h3>

                <p>{location}, <small>{date}</small></p>

            </div>

        </article>

    );

}