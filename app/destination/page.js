"use client";

import { useState } from "react";
import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetWishlistItem from "./PlanetWishlistItem";
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

          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>

          <PlanetCard
            name={"Europa"}
            description={"Lorem ipsum..."}
            thumbnail={"/destination/image-europa.png"}
            isSelected={isPlanetSelected["Europa"]}
            onAddOrRemovePlanet={() => onAddOrRemovePlanet("Europa", 1)}
          />
          <PlanetCard
            name={"Moon"}
            description={"Lorem ipsum..."}
            thumbnail={"/destination/image-europa.png"}
            isSelected={isPlanetSelected["Moon"]}
            onAddOrRemovePlanet={() => onAddOrRemovePlanet("Moon", 2)}
          />

          <PlanetCard
            name={"Mars"}
            description={"Lorem ipsum..."}
            thumbnail={"/destination/image-europa.png"}
            isSelected={isPlanetSelected["Mars"]}
            onAddOrRemovePlanet={() => onAddOrRemovePlanet("Mars", 3)}
          />

          <PlanetCard
            name={"Titan"}
            description={"Lorem ipsum..."}
            thumbnail={"/destination/image-europa.png"}
            isSelected={isPlanetSelected["Titan"]}
            onAddOrRemovePlanet={() => onAddOrRemovePlanet("Titan", 4)}
          />
        </section>
      </main>
    </div>
  );
};

export default Destinations;
