import { Drawer, Sidebar } from "flowbite-react";
import { useState } from "react";
import { NavigationData } from "../../utils/constants";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Drawer open={isOpen} onClose={handleClose} className="mt-16 bg-darkBlue">
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0 "
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    {NavigationData.map((item) => (
                      <div key={item?.id} className="">
                        {" "}
                        {/* Adjusted to a valid Tailwind margin */}
                        <div className="flex items-center gap-3 p-4">
                          {" "}
                          {/* Added padding for better layout */}
                          <div className="text-white">{item?.icon}</div>
                          <div className="text-white">{item?.name}</div>
                        </div>
                      </div>
                    ))}
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default MobileNav;
