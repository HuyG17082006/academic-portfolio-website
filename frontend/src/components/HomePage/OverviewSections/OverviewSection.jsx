import Overview from "./Overview/Overview.jsx";

import "./OverviewSection.scss";

import {
    LuScale,
    LuMic,
    LuBookOpen,
    LuGraduationCap,
    LuLandmark
} from "react-icons/lu";

const overviewData = [
    {
        title: "Nhà Nghiên Cứu",
        description: "Nghiên cứu chuyên sâu về luật đất đai, quản trị đất đai, luật hành chính và nhiều lĩnh vực pháp luật khác.",
        icon: <LuScale className="icon"/>
    },
    {
        title: "Diễn Giả",
        description: "Thường xuyên trình bày tại các hội thảo, tọa đàm, khóa tập huấn và diển đàn học thuật, chính sách.",
        icon: <LuMic className="icon"/>
    },
    {
        title: "Người Hướng Dẫn",
        description: "Hướng dẫn luận văn, luận án và công trình nghiên cứu khoa học cho học viên, nghiên cứu sinh và sinh viên.",
        icon: <LuBookOpen className="icon"/>
    },
    {
        title: "Người Truyền Cảm Hứng",
        description: "Truyền cảm hứng học tập, nghiên cứu và phát triển tư duy học thuật cho sinh viên, học viên và những người quan tâm đến nghiên cứu pháp lý.",
        icon: <LuGraduationCap className="icon"/>
    },
    {
        title: "Học Giả Đa Ngành",
        description: "Công bố các công trình nghiên cứu về lý luận nhà nước pháp luật, luật hành chính và một số ngành luật khác.",
        icon: <LuLandmark className="icon"/>
    }
];

export default function OverviewSection() {

    return (
        <section className="overview-section">
            
            
            <div className="overview-container">

                {
                    overviewData.map((item) => (
                        <>
                            <Overview
                                key={item.title}
                                {...item}
                            />
                        </>

                    ))
                }
                
            </div>

        </section>

    );

}