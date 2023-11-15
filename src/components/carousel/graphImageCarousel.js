import { Grid } from "@mui/material";

const images = [
 {
  url: "calciumimages/graph1.png"
 },
 {
  url: "calciumimages/graph2.png"
 },
 {
  url: "calciumimages/graph3.png"
 },
 {
  url: "calciumimages/graph4.png"
 },
 {
  url: "calciumimages/graph5.png"
 },
 {
  url: "calciumimages/graph6.png"
 }
];

export const GraphImageCarousel = (image, width, height) => {
  return (
    <>
      <Grid>
        <img
          // src={`https://gsalunkhe.egnyte.com/opendocument.do?entryId=${image.entry_id}&forceDownload=false&preview=true&prefetch=true?timestamp=${image.uploaded}`}
          src={image.url}
          alt="image"
          width={width}
          height={height}
        />
      </Grid>
    </>
  );
};
export { images };
