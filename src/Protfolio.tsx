import { useEffect } from "react";
import HomePageforLink from "./HomePage";

export default function Protfolio() {
  useEffect(() => {
    document.title = "Protfolio";
  }, []);
  return (
    <main style={{ padding: "5 px" }}>
      <HomePageforLink />

      <h1>My Latest Project</h1>
      <ul>FlipKart Clone</ul>
      <ul>Hotstar Clone</ul>
      <ul>GitHub User Details</ul>
      <ul>Information about the film</ul>
    </main>
  );
}
