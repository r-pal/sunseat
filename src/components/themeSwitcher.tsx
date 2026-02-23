import Palette from "@mui/icons-material/Palette";
import { Button, Menu, MenuItem } from "@mui/material";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../themeContext/context";
import { IThemeMode, type IThemeContext } from "../themeContext/types";

const ThemeSwitcher: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { themeMode, switchThemeMode } = useContext(
    ThemeContext,
  ) as IThemeContext;

  const handleOpen = () => {
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  const handleSwitchTheme = (mode: IThemeMode) => {
    switchThemeMode(mode);
    handleClose();
  };

  const themesArray = Object.keys(IThemeMode) as Array<IThemeMode>;

  const menuItemMap = themesArray.map((element) => (
    <MenuItem
      key={`${element}_key`}
      onClick={() => handleSwitchTheme(element)}
      selected={themeMode === element}
    >
      {element}
    </MenuItem>
  ));

  return (
    <>
      <Button variant="contained" onClick={handleOpen} startIcon={<Palette />}>
        Switch Theme
      </Button>
      <Menu open={openMenu} anchorEl={buttonRef.current} onClose={handleClose}>
        {menuItemMap}
      </Menu>
    </>
  );
};

export default ThemeSwitcher;
