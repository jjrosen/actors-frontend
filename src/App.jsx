import { act } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ActorsPage } from "./ActorsPage";

function App() {
  return (
    <div>
      <Header />
      <ActorsPage />
      <Footer />
    </div>
  );
}

export default App;
