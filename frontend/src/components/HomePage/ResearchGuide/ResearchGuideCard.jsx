import "./ResearchGuide.scss";

export default function ResearchGuideCard({
    title,
    icon: Icon,
    items,
    button
}) {

    return (

        <article className="research-guide-card">

            <div className="research-guide-header">

                <Icon className="research-guide-icon"/>

                <h3>{title}</h3>

            </div>

            <ul className="research-guide-list">

                {
                    items.map((item) => (
                        <li key={item}>
                            {item}
                        </li>
                    ))
                }

            </ul>

            <button className="research-guide-btn">

                {button}

            </button>

        </article>

    );

}