import { Avatar, Card, CardHeader, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Paper from '@mui/material/Paper';

const card = () =>{
    return(
        
     <Card 
     sx={{
         background:"primary.main", 
         borderRadius:0,
          color:"primary.contrastText",
          }}
          >
      <CardHeader
        avatar={
          <Avatar>
            R
          </Avatar>
        }
        action={
          <IconButton 
          aria-label="settings"
          sx={{ color: "primary.contrastText" }}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title="Whatever"
        subheader={
          <Typography variant="caption">
            UI Frontend Developer
          </Typography>
        }
        />
        <Paper square elevation={0} sx={{width:"100vh"}}>

        </Paper>
        
    
      </Card> 
      
        

    );
};