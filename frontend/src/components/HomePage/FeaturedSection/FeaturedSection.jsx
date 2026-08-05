import "./FeaturedSection.scss";

import FeaturedWorkItem from "./FeaturedWorkItem/FeaturedWorkItem.jsx";
import LatestCommentItem from "./LastestCommentItem/LastestCommentItem";
import SpeakerActivityItem from "./SpeakerActivityItem/SpeakerActivityItem";


import banner from '../../../../public/images.jpg'
import book from '../../../../public/book.jpg'
import land from '../../../../public/land.jpg'

import {
    LuCamera,
    LuPresentation,
    LuClipboardList,
    LuMic
} from "react-icons/lu";

export default function FeaturedSection() {

    const data = {
        "featuredWorks": [
            {
                "id" : 1,
                "title": "Legal Issues in Land Acquisition and Compensation in Vietnam",
                "from": "Journal of Asian law and Society",
                "year": 2025,
                "doi": "10.1016/j.landusepol.2025.12",
                "image": book
            },
            {
                "id" : 2,
                "title": "Organizational Structure of Land Development Organizations in Vietnam",
                "from": "Vietnam Law & legal forum",
                "year": 2024,
                "doi": "",
                "image": book
            },
            {
                "id" : 3,
                "title": "Multi-Level Governance and Land Administration in Vietnam",
                "from": "Land Use Policy",
                "year": 2023,
                "doi": "10.1016/j.landusepol.2023.107618",
                "image": book
            }
        ],
        "latestComments": [
            {
                "id" : 1,
                "title": "Những điểm mới quan trọng của Luật Đất đai 2024",
                "date": "2024-05-16",
                "image": land
            },
            {
                "id" : 2,
                "title": "Vấn đề giá đất và thị trường bất động sản tại Việt Nam",
                "date": "2024-02-28",
                "image": land
            },
            {
                "id" : 3,
                "title": "Cơ chế thu hồi đất vì mục đích phát triển kinh tế – xã hội: Góc nhìn pháp lý",
                "date": "2024-01-10",
                "image": land
            },
            {
                "id" : 4,
                "title": "Tổ chức phát triển quỹ đất: Kinh nghiệm quốc tế và khuyến nghị cho Việt Nam",
                "date": "2023-11-12",
                "image": land
            }
        ],
        "speakerActivities": [
            {
                "title": "Vietnam Land Law Forum 2024",
                "location": "Hà Nội",
                "date": "2024-10",
                "icon": <LuCamera className="icon"/>
            },
            {
                "title": "Workshop: Land Governance and Sustainable Development",
                "location": "TP. Hồ Chí Minh",
                "date": "2024-08",
                "icon": <LuPresentation className="icon"/>
            },
            {
                "title": "Tập huấn: Kỹ năng nghiên cứu và viết bài khoa học ngành luật",
                "location": "Hà Nội",
                "date": "2024-06",
                "icon": <LuClipboardList className="icon"/>
            },
            {
                "title": "Tọa đàm: Luật Đất đai 2024 – Nhìn từ thực tiễn thực thi",
                "location": "Đà Nẵng",
                "date": "2024-04",
                "icon": <LuMic className="icon"/>
            }
        ]
    }


    return (

        <section className="featured-section">

            <div className="featured-container">

                {/* Công trình nổi bật */}
                <div className="featured-column">

                    <div className="featured-header">

                        <h2>Công trình nổi bật</h2>

                        <button>Xem tất cả →</button>

                    </div>

                    <div className="featured-body">

                        {
                            data.featuredWorks.map((item) => (
                                <FeaturedWorkItem
                                    key={item.title}
                                    {...item}
                                />
                            ))
                        }

                    </div>

                </div>

                {/* Bình luận pháp lý mới nhất */}
                <div className="featured-column">

                    <div className="featured-header">

                        <h2>Bình luận pháp lý mới nhất</h2>

                        <button>Xem tất cả →</button>

                    </div>

                    <div className="featured-body">

                        {
                            data.latestComments.map((item) => (
                                <LatestCommentItem
                                    key={item.title}
                                    {...item}
                                />
                            ))
                        }

                    </div>

                </div>

                {/* Diễn giả & Hoạt động */}
                <div className="featured-column">

                    <div className="featured-header">

                        <h2>Diễn giả & Hoạt động</h2>

                    </div>

                    <div className="featured-body">

                        {
                            data.speakerActivities.map((item) => (
                                <SpeakerActivityItem
                                    key={item.title}
                                    {...item}
                                />
                            ))
                        }

                    </div>

                </div>

                {/* Truyền cảm hứng */}
                <div className="featured-column inspiration-column">

                    <div className="featured-header">

                        <h2>Truyền cảm hứng</h2>

                        <button>Xem tất cả →</button>

                    </div>

                    <div className="featured-body">

                        <img src={banner} alt="" />

                    </div>

                </div>

            </div>

        </section>

    );

}