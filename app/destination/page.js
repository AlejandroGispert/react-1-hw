"use client";

import { useState } from "react";
import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import { PlanetWishlistItem } from "./PlanetWishlistItem";
import { PlanetCard } from "./PlanetCard";

export const Destinations = () => {
  //state
  const [selectedPlanets, onAddPlanet] = useState([]);
  const [numberOfPlanets, setNumberOfPlanets] = useState(0);
  const [isPlanetSelected, setIsPlanetSelected] = useState(false);

  const onAddOrRemovePlanet = (name, index) => {
    if (selectedPlanets.includes(name)) {
      const updatedPlanets = selectedPlanets.filter(
        (planet) => planet !== name
      );
      onAddPlanet(updatedPlanets);

      setNumberOfPlanets(updatedPlanets.length);
      setIsPlanetSelected((prevState) => ({
        ...prevState,
        [name]: false,
      }));
    } else {
      // If the planet is not selected, add it to the array
      const updatedPlanets = [...selectedPlanets, name];
      onAddPlanet(updatedPlanets);

      setNumberOfPlanets(updatedPlanets.length);
      setIsPlanetSelected((prevState) => ({
        ...prevState,
        [name]: true,
      }));
    }

    console.log(
      `You selected the following planet: ${name}, with the index of ${index}`
    );
  };

  const planetCardArr = [
    {
      title: "Europa",
      description:
        "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
      thumbnail: "/destination/image-europa.png",
      isSelected: isPlanetSelected["Europa"],
      onAddOrRemovePlanet: () => onAddOrRemovePlanet("Europa", 1),
    },
    {
      title: "Moon",
      description:
        "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",

      thumbnail: "/destination/image-moon.png",
      isSelected: isPlanetSelected["Moon"],
      onAddOrRemovePlanet: () => onAddOrRemovePlanet("Moon", 2),
    },
    {
      title: "Mars",
      description:
        "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
      thumbnail: "/destination/image-mars.png",
      isSelected: isPlanetSelected["Mars"],
      onAddOrRemovePlanet: () => onAddOrRemovePlanet("Mars", 3),
    },
    {
      title: "Titan",
      description:
        "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
      thumbnail: "/destination/image-titan.png",
      isSelected: isPlanetSelected["Titan"],
      onAddOrRemovePlanet: () => onAddOrRemovePlanet("Titan", 4),
    },
  ];

  const removeFromWishlist = (name) => {
    if (selectedPlanets.includes(name)) {
      const updatedPlanets = selectedPlanets.filter(
        (planet) => planet !== name
      );
      onAddPlanet(updatedPlanets);

      setNumberOfPlanets(updatedPlanets.length);
      setIsPlanetSelected((prevState) => ({
        ...prevState,
        [name]: false,
      }));
    }
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>

          {numberOfPlanets > 0 ? (
            <p>You have {numberOfPlanets} in your wishlist</p>
          ) : (
            <p>No planets in wishlist :(</p>
          )}
          <b>List coming soon after lesson 3!</b>

          <AddWishlistItem />

          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {selectedPlanets.map((value) => {
              console.log(value + " value");
              return (
                <PlanetWishlistItem
                  name={value}
                  onRemove={() => removeFromWishlist(value)}
                  thumbnail="/destination/image-europa.png"
                />
              );
            })}
          </div>
        </section>

        <section className="card">
          <h2>Possible destinations</h2>
          {planetCardArr.map((value) => {
            return (
              <PlanetCard
                name={value.title}
                description={value.description}
                thumbnail={value.thumbnail}
                isSelected={value.isSelected}
                onAddOrRemovePlanet={value.onAddOrRemovePlanet}
              >
                {" "}
              </PlanetCard>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
