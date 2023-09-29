import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import cabeza from "../../img/cabeza.png";

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);

      props.addFav(props);
    }
  };
  useEffect(() => {
    props.allCharecters.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.allCharecters]);

  return (
    <div className={style.card}>
      <Link to={`/detail/${props.id}`}>
        <div className={style.content}>
          <div className={style.back}>
            <img
              className={style.back_img}
              src={props.image}
              alt={props.name}
            />
          </div>
          <div className={style.front}>
            <div class={style.img}>
              <img class={style.circle} src={cabeza} alt="" />
              <img
                class={`${style.circle} ${style.right}`}
                src={cabeza}
                alt=""
              />
              <img
                class={`${style.circle} ${style.bottom}`}
                src={cabeza}
                alt=""
              />
            </div>
            {/* <img className={style.front_img} src={props.image} alt={props.name} /> */}
            <div className={style.front_content}>
              <button
                className={style.closeButton}
                onClick={() => props.onClose(props.id)}
              >
                Remove
              </button>
              <div className={style.description}>
                <div className={style.title}>
                  <h2 className={style.name}>{props.name}</h2>
                  {isFav ? (
                    <button
                      onClick={handleFavorite}
                      className={style.favoriteButton}
                    >
                      💚
                    </button>
                  ) : (
                    <button
                      onClick={handleFavorite}
                      className={style.favoriteButton}
                    >
                      🤍
                    </button>
                  )}
                </div>
                <div className={style.card_footer}>
                  <h3 className={style.status}>{props.status}</h3>
                  <h3 className={style.gender}>{props.gender}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    allCharecters: state.allCharecters,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
