import {
  Select,
  Switch,
  ListBox,
  Label,
  Separator,
  Button,
  Popover,
} from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@heroui/react";
import { languages } from "../../i18n";
import type { Key } from "@heroui/react";
import { NamePage } from "../icons/NamePage";
type Links = {
  name: string;
  href: string;
};

function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme("dark");

  const LanguajeSelect = () => {
    return (
      <Select
        placeholder="Languaje"
        className="w-40"
        onChange={(value: Key | Key[] | null) =>
          i18n.changeLanguage(value as string)
        }
      >
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            {languages.map((lang) => (
              <ListBox.Item
                key={lang.code}
                id={lang.code}
                textValue={lang.name}
              >
                {lang.name}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>
    );
  };
  const ThemeSwitch = () => {
    return (
      <Select
        placeholder="Theme"
        className="w-40"
        selectedKey={theme}
        onChange={(value) => setTheme(value as string)}
      >
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item key={"light"} id={"light"} textValue={"Light"}>
              {"Light"}
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item key={"dark"} id={"dark"} textValue={"Dark"}>
              {"Dark"}
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    );
  };
  const SettingsPopover = () => {
    return (
      <div className="flex items-center gap-5 p-safe m-safe">
        <Popover>
          <Button>Settings</Button>
          <Popover.Content>
            <Popover.Dialog>
              <div className="flex flex-col gap-5 justify-center items-center">
                <ThemeSwitch />
                <LanguajeSelect />
              </div>
            </Popover.Dialog>
          </Popover.Content>
        </Popover>
      </div>
    );
  };

  const navLinks: Links[] = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Editor", href: "/editor" },
  ];

  return (
    <nav className="w-full border-b border-border bg-background px-10 py-3">
      <div className="flex flex-row items-center justify-between gap-5">
        <NamePage/>
        <div className="flex gap-5">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:underline">
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex justify-center">
          <SettingsPopover />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
