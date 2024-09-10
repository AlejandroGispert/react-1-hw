"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { RoverPhoto } from "./RoverPhoto";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
        (response) => response.json()
      );
      setRoverPhoto(roverPhotoResponse);
    };

    fetchRoverPhotos();
  }, []);

  useEffect(() => {
    const fetchDailyPhotos = async () => {
      const DailyPhotosResponse = await fetch(
        NASA_URLs.astronomyPicOfTheDay
      ).then((response) => response.json());
      setDailyImg(DailyPhotosResponse);
    };

    fetchDailyPhotos();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>

          <div>
            <h3>{dailyImg.title}</h3>
            <p>{dailyImg.explanation}</p>
            <img src={dailyImg.url} className={styles.nasaPicOfTheDayImg} />
          </div>
        </section>
        <section className="card">
          <h2>Rover Photos</h2>

          {roverPhoto?.photos?.length ? (
            <>
              {roverPhoto?.photos?.map((e) => {
                return (
                  <RoverPhoto
                    roverName={e.rover.name}
                    date={e.earth_date}
                    src={e.img_src}
                    alt={e.camera.full_name}
                  />
                );
              })}
            </>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
