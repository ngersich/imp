import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack, Link } from '@mui/material';
import DonMoyerImage from '../ImageGroup/Images/Overview/4-ae7211524b.jpg';
import DrWilliamsImage from '../ImageGroup/Images/Overview/4-d9ff10b320.jpg';
import ThomasPaineImage from '../ImageGroup/Images/Overview/tpnew.jpg';
import './SiteCard.css';


export default function SiteCard(props) {
    const [flipped, setFlipped] = useState(false);
    const handleCardFlip = () => {
        setFlipped((prev) => !prev);
    };

  const [siteName, setSiteName] = useState("");
  const [siteImage, setSiteImage] = useState("");
  const [siteDescription, setSiteDescription] = useState("");
  const [siteDescriptionEx, setSiteDescriptionEx] = useState("");
  const [linkName, setLinkName] = useState("");

  useEffect(() => {
    switch(props.siteNum) {
      case 0: 
        setSiteName("Don Moyer Boys & Girls Club");
        setSiteImage(DonMoyerImage);
        setSiteDescription("(Saturday Program)");
        setSiteDescriptionEx("Saturday (9:45 a.m. – 12:00 noon)\nMentees: 8-10 y/o\n201 E. Park Street, P.O. Box 1396\nChampaign, IL 61824\nPhone: (217) 355-5437");
        setLinkName("https://www.dmbgc-cu.org/");
        break;
      case 1:
        setSiteName("Dr. Williams Elementary");
        setSiteImage(DrWilliamsImage);
        setSiteDescription("(Tue & Wed Program)");
        setSiteDescriptionEx("Tue and Wed (2:45 p.m. – 5:00 p.m.)\nMentees: 3rd-5th grade\n2102 E. Washington St\nUrbana, IL 61802\nPhone: (217) 384-3628");
        setLinkName("https://drwilliams.usd116.org/");
        break;
      case 2:
        setSiteName("Thomas Paine Elementary");
        setSiteImage(ThomasPaineImage);
        setSiteDescription("(Wednesday Program)");
        setSiteDescriptionEx("Wednesday (2:45 p.m. - 5:00 p.m)\nMentees: 3rd-5th grade\n1801 James Cherry Dr\nUrbana, IL 61802\nPhone: (217) 384-3602​");
        setLinkName("https://tmspaine.usd116.org/");
        break;
      default:
        break;
    }
    return;
  }, [props.siteNum]);


  return (
    <div className='main'>
    <div className={flipped ? 'flipped' : ''}>
    <Card sx={{width: 350, height: 310, backgroundColor: "#e8e8e8", borderRadius: '10px'}} className='regular-card'>
      <CardActionArea onClick={handleCardFlip}>
        <Stack alignItems="center">
            <Typography gutterBottom variant="h5" color="secondary" component="div" sx={{fontWeight: 'bold', marginTop: '10px'}}>
                    {siteName}
            </Typography>
            
            <CardMedia
            component="img"
            image={siteImage}
            alt="green iguana"
            sx={{maxWidth: '270px', maxHeight: '200px', borderRadius: '10px'}}
            />
            <CardContent>
            
            <Typography variant="body1" sx={{margin: 0}} >
                {siteDescription}
            </Typography>
            </CardContent>
        </Stack>
      </CardActionArea>
    </Card>

    <Card sx={{ width: 350, height: 310, backgroundColor: "#e8e8e8", borderRadius: '10px'}} className='flipped-card'>
      <CardActionArea onClick={handleCardFlip} sx={{height: '100%'}}>
        <Stack alignItems="center" sx={{margin: 0, height: '100%'}}>
            <Typography gutterBottom variant="h5" color="secondary" component="div" sx={{fontWeight: 'bold', marginTop: '10px'}}>
                    {siteName}
            </Typography>

            <CardContent>            
            <Typography variant="body1" sx={{margin: 0, whiteSpace: 'pre-line', lineHeight: '2rem'}} >
              {siteDescriptionEx}
            </Typography>
            <Link variant="body1" href={linkName} underline="always" target="_blank" rel="noopener" onClick={(e) => e.preventPropagation()}>{linkName}</Link>
            </CardContent>
        </Stack>
      </CardActionArea>
    </Card>


    </div>
    </div>
  );
}
