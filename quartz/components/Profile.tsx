import React from "react";
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
interface ProfileCardProps {
  name: string;
  bio: string;
  profileImage: string;
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

const Profile: React.FC = () => {
  return (
    <div>
      <ProfileCard
        name="John Doe"
        bio="Software Developer at Tech Corp. Passionate about coding and coffee."
        profileImage="https://via.placeholder.com/100"
      />
    </div>
  );
};
export default (() => Profile) satisfies QuartzComponentConstructor
