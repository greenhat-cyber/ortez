import Avatar from "../Avatar/Avatar";

const Header: React.FC = () => {
  const HeaderNav = ["Front Office", "POS", "House Keeping", "Laundry"];

  return (
    <div className="w-full h-[3rem] bg-white shadow-sm flex items-center justify-between px-4">
      <div className=" w-full flex items-center justify-start gap-4">
        {HeaderNav.map((items, idx) => {
          return (
            <div
              key={idx}
              className=" w-auto px-4 h-[25px] rounded-full flex items-center justify-center text-black outline outline-primary outline-1 hover:bg-primary hover:text-white cursor-pointer"
            >
              <p className="text-[13px] m-0 p-0">{items}</p>
            </div>
          );
        })}
        <p>General Master Settings</p>
      </div>
      <div>
        <Avatar proPic="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>
    </div>
  );
};

export default Header;
