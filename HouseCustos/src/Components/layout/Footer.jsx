import React from "react";
import "./Footer.css"
import { GithubOutlined, FacebookOutlined, LinkedinOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="main_footer">
                    <ul className="midias_list">
                        <li>
                            <GithubOutlined /> Github <Link to={"https://github.com/sDouglasgonc"}>  </Link>
                        </li>
                        <li>
                    <FacebookOutlined />Facebook<Link to={"https://www.facebook.com/profile.php?id=100005975162268"}>  </Link>
                        </li>
                        <li>
                            <LinkedinOutlined /> Linkedn  <Link to={"https://www.linkedin.com/in/douglas-silva-894065233/"}> </Link>
                        </li>
                        <div className="span">
                            House Custos &copy; 2023
                        </div>
                    </ul>
                        
                </div>
            </div>
        </>
    )
}
export default Footer