import "./Overview.scss";

export default function Overview({
    title,
    description,
    icon,
}) {

    return (

        <article className="overview">

            <div className="overview-icon">

                {icon && (
                    icon
                )}

            </div>

            <div className="overview-content">

                <h3 className="overview-title">
                    {title}
                </h3>

                <p className="overview-description">
                    {description}
                </p>

            </div>

            <div className="overview-border"></div>

        </article>

    );

}