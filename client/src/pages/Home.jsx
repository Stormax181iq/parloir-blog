import MainButton from "../components/MainButton";

import homeImg from "../assets/homeWomanArt.png";

export default function Home() {
  return (
    <div className="h-[85vh] flex flex-row relative overflow-hidden px-64 items-center">
      <div className="ml-16">
        <h1 className="text-8xl pb-14 font-h">Let your stories shine.</h1>
        <p className="text-2xl mb-14 font-sans">
          Parloir helps others read, write, and deepen their understanding.
        </p>
        <MainButton className="px-10 py-4 rounded-full text-2xl font-sans">
          Start reading
        </MainButton>
      </div>
      <img
        src={homeImg}
        alt="Women Day Flower Abstract Art"
        className="absolute -right-40 h-full object-cover"
      />
    </div>
  );
}
