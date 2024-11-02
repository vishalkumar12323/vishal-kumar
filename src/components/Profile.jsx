const Profile = ({ isDarkTheme }) => {
  return (
    <div className="w-[300px] h-[300px] p-2 md:p-0 mt-8">
      {!isDarkTheme ? (
        <img
          src="/profile-photo-dark.png"
          alt="vishal kumar profile photo"
          className="w-full h-auto rounded-full border border-slate-900/85 shadow shadow-slate-800"
        />
      ) : (
        <img
          src="/profile-photo-light.png"
          alt="vishal kumar profile photo"
          className="w-full h-auto rounded-full border border-slate-900/85 shadow shadow-slate-800"
        />
      )}
    </div>
  );
};

export default Profile;
