import { Grid } from "@mui/material";
import BasicCard from "../BasicCard";
import Footer from "../Footer";
import Nav from "../Nav";
import SampleBody from "../SampleBody/SampleBody";

function HomePage() {
  return (
    <div>
      <Nav></Nav>
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      <Grid container spacing={2}>
        <Grid item>
          <SampleBody></SampleBody>
        </Grid>
        <Grid item>
          <BasicCard></BasicCard>
        </Grid>
      </Grid>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
