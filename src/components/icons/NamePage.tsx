import { Link } from "@heroui/react";

function NamePage() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 justify-centers items-center">
        <h1 className="text-2xl">Theo Town</h1>
        <Link className="text-sm" href="https://github.com/SrBolilloStudios/Theotown-plugin-edit.git">1.0
        <Link.Icon/>
        </Link>
      </div>
      <p className="text-sm">Plugin editor</p>
    </div>
  );
}

export {NamePage}