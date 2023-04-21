import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import React, { useEffect, useState } from "react";
import MapPicker from 'react-google-map-picker'
import haversine from 'haversine-distance'
import Card from '@mui/material/Card';

function App() {

  const DefaultLocation = { lat: 35.7023, lng: 139.7745};
  const [question, setQuestion] = useState(0);
  const answers = [ 
    [35.68507674045671, 139.72333322179782], 
    [47.5576, 10.7498],
    [44.816736715134624, 3.321983007334546],
    [40.7580, 73.9855]
  ]
  const explanations = [
    "The fateful ending of Your Name takes place on the stairway leading to the Suga Shrine.",
    "This famous castle's towers inspired many works of fiction, including the Cinderella Castle. While Spy X Family mostly takes place in not-Berlin, I mean Berlin't, the location Loid rents for Anya's celebration is Germany's Neuschwanstein Castle.",
    "Vanitas references the historical province of Gevaudan, France. The here is the now ruined Chateau d'Apchier.",
    "Yeah, tough one I know. But you know what's wild? The Copilot AI just suggested this explanation as New York so it knows these explanations are related to the coordinates!"
  ]

  const [state, setState] = useState(0);
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
  const [location, setLocation] = useState(defaultLocation);
  const [result, setResult] = useState("")

  function handleChangeLocation (lat, lng){
    setLocation({lat:lat, lng:lng});
  }

  function handleSubmit(){
    setResult("You are " + Math.round(haversine(answers[question], [location.lat, location.lng])) + " meters away from the actual location.")
    setState(1)
  }

  function handleNext(){
    if(question < answers.length - 1)
      setQuestion(question + 1);
    else
      setQuestion(0);
    setState(0)
  }

  useEffect(() => {}, [result, question, state]);

  return (
    <Box sx={{display: "flex", justifyContent: "center"}}>
      <Card sx={{padding: "1em", maxWidth: "600px"}} raised>
          <Typography variant="h3">
            AnimeGuessr
          </Typography>
          <Typography variant='h6'>
            We show you the scene, you pick the real life location.
          </Typography>
          {state === 0 &&
            <>
              {question === 0 &&
                <iframe width="560" height="315" src="https://www.youtube.com/embed/h0Dh1k9tciY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              }
              {question === 1 &&
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xO4wvvAz9Xw?start=162" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              }
              {question === 2 &&
                <iframe width="560" height="315" src="https://www.youtube.com/embed/a0tyVyhH_YY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              }
              {question === 3 &&
                <iframe width="560" height="315" src="https://www.youtube.com/embed/RrKQWmtV8Ps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            
              }
              <MapPicker defaultLocation={defaultLocation}
                mapTypeId="roadmap"
                style={{width: "560px", height:"315px"}}
                onChangeLocation={handleChangeLocation} 
                apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8'/>
              <Typography>Currently Selected Location: </Typography>
              <label>Latitute:</label><input type='text' value={location.lat} disabled/>
              <label>Longitute:</label><input type='text' value={location.lng} disabled/>
              <Box sx={{display: "flex", justifyContent: "center", marginTop: "1em"}}>
                <Button variant='contained' onClick={handleSubmit}>Submit</Button>
              </Box>
            </>
          }
          {state === 1 &&
            <>
              {question === 0 &&
                <iframe src="https://www.google.com/maps/embed?pb=!4v1682110671185!6m8!1m7!1sCAoSLEFGMVFpcE1pZjZlWEpsbllHYzFaNFVqVklxc3pkeEl2cTMwYnR3d2hMamYy!2m2!1d35.6850083!2d139.7232883!3f26.301143716306555!4f-3.761273775276578!5f0.7820865974627469" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              }
              {question === 1 &&
                <iframe src="https://www.google.com/maps/embed?pb=!4v1682110916207!6m8!1m7!1sCAoSLEFGMVFpcE5QNnhTeFgzeFJPbFlESHZPbGRYaENlQ3RLRFo0R2hsQ01EeW00!2m2!1d47.5573169!2d10.749126!3f354.6988686518419!4f-18.740052319151587!5f1.594730273780665" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              }
              {question === 2 &&
                <iframe src="https://www.google.com/maps/embed?pb=!4v1682114461379!6m8!1m7!1sCAoSLEFGMVFpcE1ZMVY1TVpsRktUNlpqdGwteHlqZkRpR2pLZVBuYTEwT1loSGhs!2m2!1d44.8167655!2d3.3223184!3f305.1450526970971!4f30.36287694862257!5f0.4000000000000002" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              }
              {question === 3 &&
                <iframe src="https://www.google.com/maps/embed?pb=!4v1682115884844!6m8!1m7!1sCAoSLEFGMVFpcE1Ebm9DV3VIZVNHeEx3UFJRbmtEeG1yNXZYM0daQ3J3UFdXXy1E!2m2!1d40.75795272!2d-73.98560286!3f258.3470538263665!4f23.852479317631605!5f0.7820865974627469" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              }
              <Typography> {result} </Typography>
              <Typography> {explanations[question]} </Typography>
              <Box sx={{display: "flex", justifyContent: "center", marginTop: "1em"}}>
                <Button variant='contained' onClick={handleNext}>Next Question</Button>
              </Box>
            </>
          }
      </Card>
    </Box>
  );
}

export default App;
