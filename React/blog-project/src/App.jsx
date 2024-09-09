import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
import { useEffect, useState } from "react";
import supabase from "./lib/helper/supabaseClient";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      //destructuracion -> Nos permite obtener la propiedad deseada, van entre llaves

      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      } else {
        setUser(data?.session?.user);
      }
    };

    getSession();
  }, [user]);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signWithOAuth({
      provider: "github",
    });
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };

  return (
    <>
      <Header />
      <button onClick={handleLogin}>Inicio de sesion con GitHub</button>
      <Post
        titulo={"titulo de ej"}
        link={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmyc4SRtcqPPJBgBEci3rzPAj-_yZU02gw_A&s"
        }
        descripcion={"desc foto"}
        parrafo={"parrafo de ej"}
      />

      <Footer />
    </>
  );
}
