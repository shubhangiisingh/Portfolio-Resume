import { Typography } from "@mui/material";
import React from "react";
import "./Profile.css";
import resumeData from "../utils/resumeData";
import CustomButton from "./Button";
import CustomTimeline, { CustomTimelineSeparator } from "./Timeline";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { TimelineContent, TimelineItem } from "@mui/lab";
import GetAppIcon from "@mui/icons-material/GetApp";

const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem className={"timeline_item"}>
        <CustomTimelineSeparator />
        <TimelineContent className="timeline_content">
            {link ? (
                <Typography className="timelineItem_text">
                    <span>{title}:</span> <a href={link} target="_blank">{text}</a>
                </Typography>
            ) : (
                <Typography className="timelineItem_text">
                    <span>{title}:</span> {text}
                </Typography>
            )}
        </TimelineContent>
    </TimelineItem>
);

const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>
            </div>
            <figure className="profile_image">
                <img src={require("../assetss/images/shubhangis.jpg")} alt="" />
            </figure>
            <div className="profile_info">
                <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
                    <CustomTimelineItem title="Name" text={resumeData.name} />
                    <CustomTimelineItem title="Title" text={resumeData.title} />
                    <CustomTimelineItem title="Email" text={resumeData.email} />
                    {Object.keys(resumeData.socials).map((key) => (
                        <CustomTimelineItem
                            key={key}
                            title={key}
                            text={resumeData.socials[key].text}
                            link={resumeData.socials[key].link}
                        />
                    ))}
                </CustomTimeline>
                <div className="btn_container">
                    <a href="/ResumeUpdated.pdf" download="Shubhangi-Resume.pdf">
                        <CustomButton text={"Download Resume"} icon={<GetAppIcon />} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile;

