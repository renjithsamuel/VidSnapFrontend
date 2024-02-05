import { Box } from "@mui/material";
import { useTopNavBarStyles } from "./TopNavBar.styles";
import Image from "next/image";
import Link from "next/link";
import { themeValues } from "@/constants/ThemeConstants";

type TopNavBarProps = {};

export const TopNavBar = ({}: TopNavBarProps) => {
  const classes = useTopNavBarStyles();
  return (
    <Box className={classes.topNavBarRoot}>
      <Box className={classes.topNavBarIconLeft}>
        <Image
          src={"/logo.svg"}
          width={80}
          height={50}
          alt={`snap`}
          className={classes.logoImage}
        />
      </Box>
      <Box className={classes.topNavBarRight}>
        <Link
          href={"/about"}
          style={{ textDecoration: "none", color: themeValues.color.violet }}
        >
          <Box className={classes.topNavBarAboutUs}>About Us</Box>
        </Link>
        <Link
          href={"/downloads"}
          style={{ textDecoration: "none", color: themeValues.color.violet }}
        >
          <Box className={classes.topNavBarDownloads}>Downloads</Box>
        </Link>
      </Box>
    </Box>
  );
};
