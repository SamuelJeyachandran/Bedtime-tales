import './App.css';
import { useState } from 'react';
import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import {TextField, Button, Container, FormControl, InputLabel, MenuItem, Select, Typography, Hidden } from '@mui/material';
import Donut from './Donut';

function Homepage() {
    const [characterName, setCharacterName] = useState("")
    const [sidekick, setSidekick] = useState("")
    const [location, setLocation] = useState("")
    const [storyType, setStoryType] = useState("")
    const [story, setStory] = useState("")
    const [loading, setLoading] = useState(false)
    const randomNames = ["John", "Bob", "Mary", "Lily", "Martha", "David"]
    const randomSidekick = ["dog", "cat", "kangaroo", "pony"]
    const randomLocation = ["space", "the beach", "an old attic", "a dungeon"]
    const randomStoryType = ["funny", "dramatic", "adventure", "fantasy", "romantic"]
    function getRandomValue(options) {
      const random = Math.floor(Math.random() * options.length)
      return options[random]
    }
    function randomStory() {
      setCharacterName(getRandomValue(randomNames))
      setSidekick(getRandomValue(randomSidekick))
      setLocation(getRandomValue(randomLocation))
      setStoryType(getRandomValue(randomStoryType))
    }
    const onSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
      console.log(`Generate a short ${storyType} Bedtime Story with the main character called ${characterName} and a ${sidekick} as a sidekick. set in ${location}`)
      const prompt = `Generate a short ${storyType} Bedtime Story with the main character called ${characterName} and a ${sidekick} as a sidekick. set in ${location}`
      const body = await fetch("https://d033drc8v9.execute-api.us-east-1.amazonaws.com/dev/", {
        method: "POST",
        body: JSON.stringify({ prompt }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then(response => JSON.parse(response.body))
  
      console.log(body.message.content)
      setStory(body.message.content.replace(/\n/g, '<br />'))
      setLoading(false)
    }
    return (
      <Container maxWidth='sm'>
        <Typography variant="h2" sx={{my:2}}>Bedtime Tales!!!</Typography>
        <form onSubmit={onSubmit}>
          <Button onClick={randomStory} variant="outlined" sx={{ mb: 2 }}>Random Story</Button>
          <TextField fullWidth value={characterName} id="character-name" label="Name of character" variant="outlined" sx={{ mb: 2 }} onChange={(e) => setCharacterName(e.target.value)} />
          <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label">What animal will be the sidekick</InputLabel>
            <Select
              value={sidekick}
              onChange={(e) => setSidekick(e.target.value)}
              id="sidekick"
              label="What animal will be the sidekick?"
              sx={{ mb: 2 }}
            >
              <MenuItem value="dog">Dog</MenuItem>
              <MenuItem value="cat">Cat</MenuItem>
              <MenuItem value="kangaroo">Kangaroo</MenuItem>
              <MenuItem value="pony">Pony</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">What will be the location of the story?</InputLabel>
            <Select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              id="location"
              label="What is the location?"
              sx={{ mb: 2 }}
            >
              <MenuItem value="space">Space</MenuItem>
              <MenuItem value="the beach">The Beach</MenuItem>
              <MenuItem value="an old attic">An Old attic</MenuItem>
              <MenuItem value="a dungeon">A Dungeon</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label">What type of story?</InputLabel>
            <Select
              value={storyType}
              onChange={(e) => setStoryType(e.target.value)}
              id="storyType"
              label="What type of story"  
              sx={{ mb: 2 }}
            >
              <MenuItem value="funny">Funny</MenuItem>
              <MenuItem value="dramatic">Dramatic</MenuItem>
              <MenuItem value="adventure">Adventurous</MenuItem>
              <MenuItem value="fantasy">Fantasy</MenuItem>
              <MenuItem value="romantic">Romantic</MenuItem>
            </Select>
          </FormControl>
          <LoadingButton type="submit" loading={loading} variant="contained">Create Story</LoadingButton>
        </form>
        <br/>
        <div dangerouslySetInnerHTML={{ __html: story }} />
        <br/>
      </Container>
    );
  }
  
  export default Homepage;
  