import Image from "next/image";

export default function Projects() {
  return (
    <section className="bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen flex justify-center" id="projects">
      <div className="text-white text-center text-5xl p-20">
        <h1 className="mb-10">My Projects</h1>
        <div className="text-2xl bg-blue-800 rounded-2xl shadow-md p-2 pb-5">
          <Image src="/assets/aldenaire-school.png" alt="aldenaire-school" title="aldenaire-school" width={1000} height={600} className="rounded-xl"/>
          <h1 className="text-3xl mt-5">SD Teknologi Aldenaire</h1>
          <p>Fullstack Website</p>
          <a href="https://web-school-fe.vercel.app/" target="blank">
            <button className="border-white border-2 p-2 mt-2 rounded-xl hover:bg-white hover:text-blue-800 hover:scale-110 duration-300 cursor-pointer">
              Link Project
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}