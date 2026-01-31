import { Input } from "antd";

const Header = () => {
  return (
    <header className="flex justify-between items-center min-h-12">
      <h1 className="text-4xl text-[#ffffff] font-bold ">Anonime</h1>
      <a className="text-[#868686] text-[18px] py-2" href="#">
        Home
      </a>
      <a className="text-[#868686] text-[18px] py-2" href="#">
        List aninme
      </a>
      <Input
        className="max-w-92.5 border-none! rounded-full! py-2.5! bg-[#374151]! text-[#868686]! placeholder:text-[#868686]! placeholder:ps-2.5!"
        placeholder="Search anime or movie"
      />
    </header>
  );
};

export default Header;
