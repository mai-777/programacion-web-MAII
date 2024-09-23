import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
import { useEffect, useState } from "react";
import { supabase } from "./lib/helper/supabaseClient";
export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession;
    setUser(session?.user);

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case "SIGNED_IN":
          setUser(session?.user);
          break;
        case "SIGNED_OUT":
          setUser(null);
          break;
        default:
          console.log("caso no estimado");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <Header />
      <div>
        {user ? (
          <div>
            <h2>Authenticated</h2>
            <button onClick={handleLogout}>logout</button>
          </div>
        ) : (
          <button onClick={handleLogin}>login Github</button>
        )}
      </div>
      <div>
        <Post
          titulo={"titulo de ej"}
          link={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmyc4SRtcqPPJBgBEci3rzPAj-_yZU02gw_A&s"
          }
          descripcion={"desc foto"}
          parrafo={"parrafo de ej"}
        />
      </div>
      <Footer />
    </>
  );
}
