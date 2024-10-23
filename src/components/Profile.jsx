const Profile = () => {
  return (
    <div className="w-[350px] h-[350px] md:w-[300px] md:h-[300px]">
      <img
        src="/profile-photo.jpeg"
        alt="vishal kumar profile photo"
        className="w-full h-auto rounded-full shadow-md shadow-slate-400 md:shadow"
      />
    </div>
  );
};

export default Profile;
