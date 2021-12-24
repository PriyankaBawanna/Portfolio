import { useEffect } from "react";
import HomePageforLink from "./HomePage";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <main style={{ padding: "5 px" }}>
      <HomePageforLink />
      <h2> Contact Us</h2>
      <p>
        {" "}
        Connect with me via phone: 9165286815 or <br></br>email:
        priyankabawanna123@gmail.com
      </p>
    </main>
  );
}
