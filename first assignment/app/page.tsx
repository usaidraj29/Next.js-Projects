export default function Home() {
  return (
    <div className="bg-red h-screen flex items-center">
      <div className="flex flex-col gap-4 justify-center px-4 w-1/2 h-48">
      <h1 className="font-bold text-[44px]">Welcome To Usaid's Website</h1>
      <p className="font-normal text-[32px]">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard
      </p>
      <button className="text-white w-[237px] h-[66px] p-4 bg-black ">Contact US</button>
      </div>
      <div><img src="/images/my-image.jpg" alt="Description" className="w-[502px] h-[456px] top-[183px] left-[731px]" />
      </div>
    </div>
  );
}