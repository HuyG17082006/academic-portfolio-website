import {

    FaGoogle,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaLinkedin

} from "react-icons/fa";

import {

    SiOrcid,
    SiResearchgate,
    SiSsrn,
    SiAcademia

} from "react-icons/si";

import { NavLink } from "react-router";

import "./Footer.scss";

export default function Footer() {

    return (

        <footer className="footer">

            <div className="footer-top">

                <div className="footer-column">

                    <h3 className="owner-name">PHAN TRUNG HIỀN</h3>

                    <p>PGS. TS. | Giảng viên cao cấp ngành Luật</p>

                    <p>Nhà nghiên cứu | Diễn giả | Người hướng dẫn học thuật</p>

                    <p>Kết nối nghiên cứu pháp lý với thực tiễn vì một xã hội công bằng, minh bạch và phát triển bền vững</p>

                    <button>
                        Xem hồ sơ đầy đủ
                    </button>

                </div>

                <div className="footer-column">

                    <h3>Liên kết nhanh</h3>

                    <div className="footer-links">

                        <div>

                            <NavLink to="/about">
                                Giới thiệu
                            </NavLink>

                            <NavLink to="/research">
                                Nghiên cứu
                            </NavLink>

                            <NavLink to="/publications">
                                Công trình
                            </NavLink>

                            <NavLink to="/methods">
                                Phương pháp nghiên cứu
                            </NavLink>

                            <NavLink to="/academic">
                                Hướng dẫn học thuật
                            </NavLink>

                        </div>

                        <div>

                            <NavLink to="/speaker">
                                Diễn giả
                            </NavLink>

                            <NavLink to="/legal">
                                Bình luận pháp lý
                            </NavLink>

                            <NavLink to="/inspiration">
                                Truyền cảm hứng
                            </NavLink>

                            <NavLink to="/media">
                                Media
                            </NavLink>

                            <NavLink to="/contact">
                                Liên hệ
                            </NavLink>

                        </div>

                    </div>

                </div>

                <div className="footer-column">

                    <h3>Kết nối học thuật</h3>

                    <a href="/">
                        <FaGoogle />
                        Google Scholar
                    </a>

                    <a href="/">
                        <SiOrcid />
                        ORCID
                    </a>

                    <a href="/">
                        <SiResearchgate />
                        ResearchGate
                    </a>

                    <a href="/">
                        <SiSsrn />
                        SSRN
                    </a>

                    <a href="/">
                        <SiAcademia />
                        Academia.edu
                    </a>

                    <a href="/">
                        <FaLinkedin />
                        LinkedIn
                    </a>

                </div>

                <div className="footer-column contact">

                    <h3>Liên hệ</h3>

                    <p>
                        <FaEnvelope />
                        phantrunghien@example.com
                    </p>

                    <p>
                        <FaPhoneAlt />
                        (+84) 912 345 678
                    </p>

                    <p>
                        <FaMapMarkerAlt />
                        Hà Nội, Việt Nam
                    </p>

                    <button>
                        Gửi email
                    </button>

                </div>

                <div className="footer-column">

                    <h3>Đăng ký nhận tin</h3>

                    <p>
                        Nhận bài viết mới, tài liệu và thông tin hoạt động học thuật.
                    </p>

                    <input
                        type="email"
                        placeholder="Email của bạn"
                    />

                    <button className="subscrice">
                        Đăng ký
                    </button>

                </div>

            </div>

            <div className="footer-bottom">

                <span>
                    © 2024 Phan Trung Hiền. All rights reserved.
                </span>

                <div>

                    <NavLink to="/privacy">
                        Chính sách bảo mật
                    </NavLink>

                    <NavLink to="/terms">
                        Điều khoản sử dụng
                    </NavLink>

                </div>

            </div>

        </footer>

    );

}