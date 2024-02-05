import { TopNavBar } from "@/components/TopNavBar/TopNavBar";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useLandingPageStyles } from "./LandingPage.styles";
import { CiLink } from "react-icons/ci";

type LandingPageProps = {};

export const LandingPage = ({}: LandingPageProps) => {
  const classes = useLandingPageStyles();
  return (
    <>
      <TopNavBar />
      <Box className={classes.landingPageRoot}>
        <Image
          src={"/purple_curved_shape_clear.svg"}
          width={270}
          height={240}
          alt={``}
          className={classes.abstractImageClear}
        />
        <Image
          src={"/purple_curved_blur.svg"}
          width={430}
          height={440}
          alt={``}
          className={classes.abstractBlur}
        />
        <Box className={classes.videoLinkPasteContainer}>
          <Image
            src={"/purple_curved_small.svg"}
            width={70}
            height={80}
            alt={``}
            className={classes.abstractSmall}
          />
          <Typography
            className={classes.textBoxMain}
          >{`Paste Instagram URL here!`}</Typography>
          <Typography
            className={classes.textBoxSecond}
          >{`Paste the URL of Insta video,
photo, stories or IGTV link to download .`}</Typography>
          <Box className={classes.linkBox}>
            <Box className={classes.inputWrap}>
              <CiLink />
              <input
                type="text"
                className={classes.linkinp}
                placeholder="Paste link here"
              />
              <Button variant="contained" className={classes.linkSearchBtn}>
                Search
              </Button>
            </Box>
            <Typography
              className={classes.textBoxInInp}
            >{`See previous downloads...`}</Typography>
          </Box>
          <Typography
            className={classes.textBoxLast}
          >{`Couldn’t download from Instagram?, we have got you covered`}</Typography>
        </Box>
      </Box>
    </>
  );
};
