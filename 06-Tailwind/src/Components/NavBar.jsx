import { CornerDownRight } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between uppercase px-30 pt-16">
      <p className="bg-black text-white p-2 rounded-full px-4 tracking-wider">
        Target Audience
      </p>

      <div className="flex uppercase">
        <span className="p-2 tracking-wider">
          <CornerDownRight />
        </span>
        <p className="p-2 tracking-wider">Digital banking platform</p>
      </div>
    </div>
  );
};

export default Navbar;
