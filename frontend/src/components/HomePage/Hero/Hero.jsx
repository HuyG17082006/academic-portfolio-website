import "./Hero.scss";

import test from '../../../../public/test.png'
import ts from '../../../../public/ts.png'

import { LuMail,LuMoveRight } from "react-icons/lu";

export default function Hero() {

    const owner = {
        "name": "Phan Trung Hiền",
        "title": "PGS. TS. | Giảng viên cao cấp ngành Luật",
        "roles": [
            "Nhà nghiên cứu",
            "Diễn giả",
            "Người hướng dẫn học thuật"
        ],
        "description": "Nghiên cứu, giảng dạy và tư vấn về luật đất đai, quản lý đất đai, luật hành chính, lý luận nhà nước, pháp luật và một số ngành luật khác, kết hợp giảng lý luận và thực tiễn nhằm đóng góp cho sự phát triển công bằng, minh bạch và bền vững.",
        "buttons": [
            {
                "className" : "b1",
                "label": "XEM CÔNG TRÌNH",
                "link": "#",
                "icon": <LuMoveRight/>
            },
            {
                "className" : "b2",
                "label": "LIÊn HỆ HỌC THUẬT",
                "link": "#",
                "icon": <LuMail/>
            }
        ]
    }


    return (

        <div className="hero-wrapper">

            <section className="hero">

                <div className="hero-background">
                    {/* Sau này đặt ảnh ở đây */}
                </div>

                <div className="hero-overlay">

                    <h1 className="hero-name">
                        Phan Trung Hiền
                    </h1>

                    <div className="hero-info">

                        <div className="hero-role">
                            <span>
                                {owner["title"]}
                            </span>
                            <span>
                                {owner["roles"].join(" | ")}
                            </span>
                        </div>

                        <p className="hero-description">
                            {owner["description"]}
                        </p>

                        <div className="hero-actions">

                            {owner["buttons"].map(({ label, link, className, icon }) => <button className={className}  key={label}> {label} {icon}</button>)}

                        </div>
                        
                    </div>

                </div>

            </section>
        </div>

    );

}