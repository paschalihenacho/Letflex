import React, { useEffect, useState } from "react";
import axios from "axios";
import { Label, Icon } from "semantic-ui-react";
import { useSelector } from "react-redux";

function Favorite(props) {
  const user = useSelector((state) => state.user);
  const movieId = props.movieId;
  const userFrom = props.userFrom;
  const movieTitle = props.title;
  const moviePost = props.backdrop_path;
  const movieRunTime = props.runtime;

  const [FavoriteNumber, setFavoriteNumber] = useState(0);
  const [Favorited, setFavorited] = useState(false);
  const variables = {
    movieId: movieId,
    userFrom: userFrom,
    movieTitle: movieTitle,
    moviePost: moviePost,
    movieRunTime: movieRunTime,
  };

  const onClickFavorite = () => {
    if (user.userData && !user.userData.isAuth) {
      return alert("Please Log in first");
    }

    if (Favorited) {
      //when we are already subscribed
      axios
        .post("/api/favorite/removeFromFavorite", variables)
        .then((response) => {
          if (response.data.success) {
            setFavoriteNumber(FavoriteNumber - 1);
            setFavorited(!Favorited);
          } else {
            alert("Failed to Remove From Favorite");
          }
        });
    } else {
      // when we are not subscribed yet

      axios.post("/api/favorite/addToFavorite", variables).then((response) => {
        if (response.data.success) {
          setFavoriteNumber(FavoriteNumber + 1);
          setFavorited(!Favorited);
        } else {
          alert("Failed to Add To Favorite");
        }
      });
    }
  };

  useEffect(() => {
    axios.post("/api/favorite/favoriteNumber", variables).then((response) => {
      if (response.data.success) {
        setFavoriteNumber(response.data.subscribeNumber);
      } else {
        alert("Failed to get Favorite Number");
      }
    });

    axios.post("/api/favorite/favorited", variables).then((response) => {
      if (response.data.success) {
        setFavorited(response.data.subcribed);
      } else {
        alert("Failed to get Favorite Information");
      }
    });
  }, []);

  return (
    <Label
      as="a"
      color="red"
      ribbon="right"
      style={{ color: "black", fontWeight: "bold" }}
      onClick={onClickFavorite}
    >
      <Icon name="heart" color="white" />{" "}
      {!Favorited ? "Add to Favorite" : "Not Favorite"} {FavoriteNumber}
    </Label>
  );
}

export default Favorite;
