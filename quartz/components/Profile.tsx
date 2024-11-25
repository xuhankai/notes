import React from "react";
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
interface ProfileCardProps {
  name: "Kevin Xu";
  bio: string;
  profileImage: "https://i.pinimg.com/736x/61/24/f2/6124f203430984848ac82f117684d8e1.jpg";
}


const ProfileCard: React.FC<ProfileCardProps> = ({ name, bio, profileImage }) => {
  return (
    <div style={cardStyle}>
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        style={imageStyle}
      />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "16px",
  textAlign: "center",
  maxWidth: "300px",
  margin: "16px auto",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const imageStyle: React.CSSProperties = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "12px",
};

export default (() => ProfileCard) satisfies QuartzComponentConstructor
