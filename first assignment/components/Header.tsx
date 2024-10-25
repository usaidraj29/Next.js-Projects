const Header = () => {
    return (
      <div className="flex justify-between px-4 shadow-2xl bg-gray-500 h-10">
        <div className="p-2 font-bold">LOGO</div>
        
        <div className="flex gap-4">
          <div className="cursor-pointer p-2 text-white">Home</div>
          <div className="cursor-pointer p-2 text-white">About</div>
          <div className="cursor-pointer p-2 text-white">Services</div>
          <div className="cursor-pointer p-2 text-white">Contact us</div>
        </div>
      </div>
    );
  };
  
  export default Header