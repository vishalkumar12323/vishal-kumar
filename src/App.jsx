import { Layout, Contact, Profile, Project, Skills } from "./components";

export const App = () => {
  return (
    <>
      <Layout width={"100vw"} height={"100vh"}>
        <Layout width={"100px"} height={"50px"} className="">
          <Profile />
        </Layout>
        <Project />
        <Skills />
        <Contact />
      </Layout>
    </>
  );
};
