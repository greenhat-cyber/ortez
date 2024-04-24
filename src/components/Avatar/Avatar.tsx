import React from 'react';

interface AvatarProps {
  proPic: string;
}

const Avatar: React.FC<AvatarProps> = ({ proPic }) => {
  return (
    <div className="flex gap-2">
      <p>Profile</p>
      <img
        className="border-2 border-primary rounded-full w-[30px] h-[30px] object-cover"
        src={proPic}
        alt="profile"
      />
    </div>
  );
};

export default Avatar;