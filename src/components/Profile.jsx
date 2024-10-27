const Profile = ({ isDarkTheme }) => {
  return (
    <div className="w-[350px] h-[350px] p-2 md:p-0 border border-slate-700/90 rounded-lg shadow md:border-none md:w-[300px] md:h-[300px] mt-8">
      {!isDarkTheme ? (
        <img
          src="/profile-photo-dark.png"
          alt="vishal kumar profile photo"
          className="w-full h-auto rounded-full border border-slate-900 shadow shadow-slate-800"
        />
      ) : (
        <img
          src="/profile-photo-light.png"
          alt="vishal kumar profile photo"
          className="w-full h-auto rounded-full border border-slate-900 shadow shadow-slate-800"
        />
      )}
    </div>
  );
};

export default Profile;
