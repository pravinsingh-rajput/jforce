import React from "react";

const Header = ({ title }) => {
  return (
    <div>
      <div class="flex flex-col">
        <div class="border border-gray-300 py-3 flex gap-1 items-center justify-center text-2xl font-semibold shadow-xl rounded-md">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Header;
