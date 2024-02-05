import { makeStyles } from "@mui/styles";

export const useTopNavBarStyles = makeStyles((theme) => ({
  topNavBarRoot: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topNavBarIconLeft: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {},
  topNavBarRight: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  topNavBarAboutUs: {},
  topNavBarDownloads: {},
}));
