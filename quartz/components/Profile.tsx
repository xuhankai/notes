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
      <div style={imageContainerStyle}>
        <img
          src={profileImage}
          alt={`${name}'s profile`}
          style={{
            ...imageStyle,
            objectPosition: "50% 70%", // Adjust focus (50% horizontal, 30% vertical)
          }}
        />
      </div>
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

const imageContainerStyle: React.CSSProperties = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  overflow: "hidden", // Ensures the image stays within the circular boundary
  margin: "0 auto 12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover", // Ensures the image fills the circular container
};

const Profile: React.FC = () => {
  return (
    <div>
      <ProfileCard
        name="Kevin Xu"
        bio="CS @, Webdev, Competitive Programming"
        profileImage="https://i.pinimg.com/736x/61/24/f2/6124f203430984848ac82f117684d8e1.jpg"
      />
    </div>
  );
};
export default (() => Profile) satisfies QuartzComponentConstructor
