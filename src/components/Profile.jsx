const Profile = () => {
  return (
    <div className="w-[350px] h-[350px] p-2 md:p-0 border border-slate-700/90 rounded-lg shadow md:border-none md:w-[300px] md:h-[300px]">
      <img
        src="/profile-photo.jpeg"
        alt="vishal kumar profile photo"
        className="w-full h-auto rounded-full shadow-md shadow-slate-400 md:shadow"
      />
    </div>
  );
};

export default Profile;
