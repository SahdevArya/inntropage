import React from 'react'
import { Card, CardContent,CardActionArea,Typography,AppBar, Container,Grid,Toolbar } from "@mui/material";
import Image1 from "../Images/image1.jpeg";
import Image2 from "../Images/image2.jpeg";
import Image3 from "../Images/image3.jpeg";
import Image4 from "../Images/image4.jpeg";
import Apple from "../Images/appstore.png";
import New from "../Images/44.jpg";
import Google from "../Images/googleplay.png";
export default function Index() {
    return (
        <>
           <AppBar position='relative'><Toolbar style={{display:"flex",flexDirection:"row",justifyContent:"center",}}><Typography variant="h4" style={{fontWeight:"bold"}}>Sweep</Typography></Toolbar></AppBar> 
          <div style={{backgroundImage:`url(${New})`,height:"1000px",display:"flex",flexDirection:"row",justifyContent:"center"}}>
          <Typography variant="h3" style={{fontWeight:"bold",color:"white"}}>Get Your House Cleaned With a Single Click</Typography>
          </div>
           <Container style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"2%"}}>
           
           <Typography  style={{fontWeight:"bold",color:"grey",fontSize:15,marginTop:"3%"}}>Some Thing</Typography>
          


           </Container>
           <Grid container justifyContent={"center"} spacing={4} style={{marginTop:"2%"}}>
               <Grid item>
                   <img src={Image2} height={450}></img>
               </Grid>
               <Grid item>
                   <img src={Image4} height={450}></img>
               </Grid>
                <Grid item>
                   <img src={Image3} height={450}></img>
               </Grid>
             

           </Grid>
           <Grid container justifyContent={"center"} spacing={2} style={{marginTop:"2%"}}>
              
               <Grid item>
                   <img src={Apple} height={100}></img>
               </Grid>
                <Grid item>
                   <img src={Google} height={120}></img>
               </Grid>
             

           </Grid>

        </>
    )
}
