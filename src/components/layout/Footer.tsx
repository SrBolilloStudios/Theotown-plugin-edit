import { Link } from "@heroui/react";
import { NamePage } from "../icons/NamePage";
import { Icon, SrBolilloIcon } from "../icons/Icon";

function Footer() {
  return (
    <footer className="w-full mt-auto border-t border-divider">
      <div className="flex flex-row justify-between gap-10 m-5 px-10">
        <div className="flex items-center">
          <NamePage />
        </div>
        <div className="flex flex-col gap-3 justify-center items-start">
          <div className="flex flex-row gap-3 items-center">
            <SrBolilloIcon className="w-8 h-8"/>
            <p className="text-xl font-medium">SrBolillo Studios</p>
          </div>

          <div className="flex flex-col gap-1">
            <Link
              href="https://github.com/SrBolilloStudios"
              className="flex items-center gap-1.5 text-sm hover:opacity-80"
            >
              <Icon id="github-icon" size={16} />
              GitHub
            </Link>
            <Link
              href="https://forum.theotown.com/memberlist.php?mode=viewprofile&u=990072"
              className="flex items-center gap-1.5 text-sm hover:opacity-80"
            >
              <Icon id="social-icon" size={16} />
              TheoTown Forum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
