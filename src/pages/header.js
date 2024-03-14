export default function Header() {
  return (
    <div className="dark:bg-slate-900 bg-white/80">
      <div className=" items-start flex lg:px-[5rem] sm:px-[1rem]  justify-between">
        <div className="flex">
          <img
            src="https://www.ulger.mn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0ae41116.png&w=96&q=75"
            className="w-14 h-14 mt-3 "
          ></img>
          <h1 className="text-amber-400 font-semibold text-lg pt-6 ml-3">
            ULGER.MN
          </h1>
        </div>
        <div className="lg:flex hidden mt-6">
          <h1 className="text-semibold dark:text-white/40 text-black mr-3 mt-1">
            Төслийн баг
          </h1>
          <h1 className="text-semibold dark:text-white/40 text-black mr-3 mt-1">
            Аппын тухай
          </h1>
          <h1 className="text-semibold dark:text-white/40 text-black mr-3 mt-1">
            Холбоо барих
          </h1>
          <button className="bg-violet-500 text-white  font-bold rounded-full w-24 h-8 ml-4">
            Нэвтрэх
          </button>
        </div>
        <div className="lg:hidden mt-6 sm:flex hidden">
          Hamburger menu
        </div>
      </div>
      <div className="lg:flex grid grid-cols-1 lg:p-[5rem] sm:p-[1rem] justify-between items-center">
        <div>
          <h1 className="my-4 dark:text-white/60 text-black lg:text-start text-center">
            Nest Family хайраар урлав
          </h1>
          <h1 className="2xl:text-6xl text-4xl lg:text-start text-center font-[900] uppercase dark:text-white text-black">
            ҮҮЛЭН ҮЛГЭРИЙГ
          </h1>
          <h1 className="text-amber-400 2xl:text-6xl text-4xl lg:text-start text-center font-[900] uppercase">
            ULGER.MN
            <p className="2xl:text-6xl text-4xl lg:text-start text-center font-[900] uppercase dark:text-white text-black">
              -ээс
            </p>
          </h1>
          <h1 className="my-4 lg:text-start text-center dark:text-white/80 text-black">
            Монголын хамгийн олон үлгэрийн сантай үүлэн платформ
          </h1>
          <div className="font-semibold text-green-400 text-2xl lg:flex grid grid-cols-1 lg:p-[5rem] sm:p-[1rem]">
            Download for MAC
          </div>
        </div>
        <img
          className="lg:w-1/2 w-3/4 aspect-square"
          src="https://www.ulger.mn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview.b68e2c7d.png&w=2048&q=75"
        ></img>
      </div>
    </div>
  );
}
