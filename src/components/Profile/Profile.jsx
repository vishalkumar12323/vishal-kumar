import { Card } from "../";

const Profile = () => {
  return (
    <>
      <section className="py-4 px-5 md:py-2 md:px-4 flex flex-col-reverse md:flex-row md:justify-between items-center gap-5 md:gap-3">
        <div className="flex flex-col gap-2 md:gap-3">
          <Card>
            <h1 className="text-5xl md:text-6xl">vishal kumar</h1>
          </Card>
          <Card>
            <span className="text-[1.3rem] md:text-[1.4rem] text-slate-800/90 pl-2">
              I,m a web developer
            </span>
          </Card>
        </div>

        <div className="w-full md:w-1/3 bg-[#f8f8f85d] border rounded-xl shadow p-3 md:p-2">
          <img
            src="/profile-photo.jpeg"
            alt="vishal kumar profile"
            className="w-full h-auto rounded-full"
          />
        </div>
      </section>
    </>
  );
};

export default Profile;
