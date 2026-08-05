import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import ResearchFieldItem from "./ResearchFieldItem";
import { books, categories } from "./data";

import "./ResearchFieldSection.scss";

export default function ResearchFieldSection() {

    return (

        <div className="research-field-wrapper">

            <section className="research-field">

                <div className="research-field-header">

                    <h2>
                        CÔNG TRÌNH NGHIÊN CỨU THEO LĨNH VỰC
                    </h2>

                </div>

                <div className="research-field-filter">

                    <div className="research-field-tabs">

                        {
                            categories.map(category => (

                                <button
                                    key={category}
                                    className={category === "Tất cả" ? "active" : ""}
                                >
                                    {category}
                                </button>

                            ))
                        }

                    </div>

                    <button className="view-all">
                        Xem tất cả công trình →
                    </button>

                </div>

                <div className="research-slider-wrapper">

                    <button className="slider-btn">

                        <FaChevronLeft />

                    </button>

                    <div className="research-slider">

                        <div className="inside">

                            {
                                books.map(book => (

                                    <ResearchFieldItem
                                        key={book.id}
                                        {...book}
                                    />

                                ))
                            }
                        </div>

                    </div>

                    <button className="slider-btn">

                        <FaChevronRight />

                    </button>

                </div>

            </section>
        </div>


    );

}