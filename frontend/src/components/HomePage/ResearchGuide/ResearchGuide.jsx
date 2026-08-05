import {
    LuLibrary,
    LuFileSearch,
    LuUsers,
    LuLightbulb,
    LuBookOpen
} from "react-icons/lu";

import ResearchGuideCard from "./ResearchGuideCard";
import "./ResearchGuide.scss";

const data = [

    {
        title: "Phương pháp nghiên cứu & viết luận văn, luận án",
        icon: LuLibrary,
        button: "Khám phá ngay",
        items: [
            "Phương pháp nghiên cứu pháp lý",
            "Kỹ thuật viết luận văn, luận án",
            "Xây dựng đề cương nghiên cứu",
            "Trích dẫn và tài liệu tham khảo",
            "Bộ tài liệu, mẫu biểu, checklist"
        ]
    },

    {
        title: "Hướng dẫn thực hiện công trình nghiên cứu",
        icon: LuFileSearch,
        button: "Xem hướng dẫn",
        items: [
            "Quy trình nghiên cứu khoa học",
            "Thu thập & phân tích dữ liệu pháp lý",
            "Viết bài báo khoa học",
            "Công bố trên tạp chí quốc tế",
            "Đạo đức nghiên cứu"
        ]
    },

    {
        title: "Hướng dẫn luận văn, luận án",
        icon: LuUsers,
        button: "Tìm hiểu thêm",
        items: [
            "Hướng dẫn luận văn thạc sĩ",
            "Hướng dẫn luận án tiến sĩ",
            "Nghiên cứu khoa học sinh viên",
            "Kỹ năng học thuật & phản biện",
            "Seminar & workshop học thuật"
        ]
    },

    {
        title: "Giá trị học tập & nghiên cứu",
        icon: LuLightbulb,
        button: "Truyền cảm hứng",
        items: [
            "Vì sao nghiên cứu lại quan trọng?",
            "Tư duy học thuật của người học luật",
            "Động lực & kỷ luật trong học tập",
            "Hành trình trở thành nhà nghiên cứu"
        ]
    },

    {
        title: "Lĩnh vực nghiên cứu",
        icon: LuBookOpen,
        button: "Xem chi tiết",
        items: [
            "Luật Đất đai",
            "Quản trị đất đai",
            "Luật Hành chính",
            "Lý luận nhà nước & pháp luật",
            "Chính sách công",
            "Các ngành luật khác"
        ]
    }

];

export default function ResearchGuide() {

    return (

        <section className="research-guide">

            <div className="research-guide-container">

                {
                    data.map((item) => (
                        <ResearchGuideCard
                            key={item.title}
                            {...item}
                        />
                    ))
                }

            </div>

        </section>

    );

}