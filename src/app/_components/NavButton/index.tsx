"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function NavButton() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        width: "100%", // Ocupa toda a largura da tela
        maxWidth: 1520, // Máximo de 600px para evitar esticar demais
        position: "fixed", // Fixa no final da tela
        bottom: 0, // Posiciona no final da tela
        left: "50%", // Centraliza horizontalmente
        transform: "translateX(-50%)", // Ajuste fino para centralização
        bgcolor: "white", // Usa a cor de fundo do tema
        boxShadow: 3, // Adiciona sombra para destacar
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        sx={{
            bgcolor: "#212121",
            color: "white",
          display: "flex 100%",
          justifyContent: "space-around",
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
