import homeImg from "../assets/homeWomanArt.png";

export default function Home() {
  return (
    <div className="h-screen relative overflow-hidden">
      <h1>Let your stories shine.</h1>
      <p>Parloir helps others read, write, and deepen their understanding.</p>
      <button>Start reading</button>
      <img
        src={homeImg}
        alt="Women Day Flower Abstract Art"
        className="absolute -right-40 h-5/6 -translate-y-8 object-cover"
      />
    </div>
  );
}
