import React from "react";
import {
  Card,
  Grid,
  Image,
  Icon,
  Rating,
  Transition,
  Segment,
  Divider,
  Header,
  Menu,
} from "semantic-ui-react";
import "./AboutPage.css";
import IntroNavbar from "../NavBar/IntroNavbar";

function About() {
  return (
    <div>
      <IntroNavbar />
      <Grid centered className="bgAbout" padded>
        <br />
        <Transition
          transitionOnMount="true"
          animation="fly right"
          duration="2000"
        >
          <Header
            className="letflex"
            style={{
              color: "#E50914",
              fontSize: "3.5rem",
              fontFamily: "Roboto",
              fontWeight: "bold",
              textShadow: "2px 2px 2px darkslategray",
            }}
          >
            Netflix
          </Header>
        </Transition>
        <Transition
          transitionOnMount="true"
          animation="fly down"
          duration="2000"
        >
          <Header
            classname="letflex"
            style={{
              color: "#E50914",
              fontSize: "3.5rem",
              fontFamily: "Roboto",

              fontWeight: "bold",
              textShadow: "2px 2px 2px darkslategray",
            }}
          >
            or
          </Header>
        </Transition>
        <Transition
          transitionOnMount="true"
          animation="fly left"
          duration="2000"
        >
          <Header
            classname="letflex"
            style={{
              color: "#E50914",
              fontSize: "3.5rem",
              fontFamily: "Roboto",

              fontWeight: "bold",
              textShadow: "2px 2px 2px darkslategray",
            }}
          >
            Letflex?
          </Header>
        </Transition>
        <Grid.Row>
          <Segment inverted padded style={{ width: "70%" }} size="large">
            <p>
              Our Netflix clone app will allow users to sign up in the app or
              login directly via their google account plus features!
            </p>
            <Divider />
            <p>
              The user will have the option to search films, shows, etc. using
              the name or keywords on our search bar.The app will then display
              relevant results. It will also contain a filter option, where you
              can search content based on genre.
            </p>
            <Divider />
            <p>
              The user will also be able to manage their profile and watch-list,
              they can update their name/picture or remove/add content from
              their watch-list. Our app will come with a rate and review
              feature, where the user can comment on a specific video and other
              users can view and comment on it, reactions will also be
              incorporated.
            </p>
            <p>
              What are you waiting for? Sign up! and start your relaxation and
              binge watching journey with us! <Icon name="tv" />
              <Icon name="film" />
            </p>
          </Segment>
        </Grid.Row>
        <Divider inverted />
        <Grid.Row>
          <Card.Group>
            <Card
              className="our-team"
              style={{
                backgroundColor: "rgb(34, 34, 34,0.856)",
                color: "white",
                width: "auto",
                padding: "1rem",
              }}
            >
              <Card.Header
                as="h2"
                style={{
                  fontFamily: "'Cinzel', serif",
                  // color: "#E50914",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "1.5rem",
                }}
              >
                Paschal Ihenacho
              </Card.Header>
              <Transition
                animation="horizontal flip"
                transitionOnMount
                duration="1500"
              >
                <Image
                  className="imageAbout"
                  src="data:image/jpeg;base64,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"
                  size="small"
                  centered
                  rounded
                />
              </Transition>
              <Card.Content style={{ fontFamily: "'Raleway', sans-serif" }}>
                Full Stack Web Developer
              </Card.Content>
              <Card.Content className="ratingAbout">
                Rating:{" "}
                <Rating icon="star" defaultRating={5} maxRating={5} disabled />
              </Card.Content>
              <Card.Content className="socialAbout">
                View More:{" "}
                <Menu.Item
                  target="_blank"
                  href="https://github.com/paschalihenacho"
                >
                  <Icon name="github" size="big" inverted />
                </Menu.Item>
                <Menu.Item
                  target="_blank"
                  href="https://www.linkedin.com/in/paschal-ihenacho/"
                >
                  <Icon name="linkedin" color="blue" size="big" />
                </Menu.Item>
              </Card.Content>
            </Card>
            <Card
              fluid
              style={{
                backgroundColor: "rgb(34, 34, 34,0.856)",
                color: "white",
                width: "auto",
                padding: "1rem",
              }}
            >
              <Card.Header
                as="h2"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Carina Reyes
              </Card.Header>
              <Transition
                animation="horizontal flip"
                transitionOnMount
                duration="1500"
              >
                <Image
                  className="imageAbout"
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQH2YZZOrtEnqA/profile-displayphoto-shrink_800_800/0?e=1601510400&v=beta&t=fxcCQL0JBk9C_lRBM3c9ONYjh2MVPwiEaEwhpI6u6KQ"
                  size="small"
                  centered
                  rounded
                />
              </Transition>
              <Card.Content style={{ fontFamily: "'Raleway', sans-serif" }}>
                Full Stack Web Developer
              </Card.Content>
              <Card.Content className="ratingAbout">
                Rating:{" "}
                <Rating icon="star" defaultRating={5} maxRating={5} disabled />
              </Card.Content>
              <Card.Content className="socialAbout">
                View More:{" "}
                <Menu.Item target="_blank" href="https://github.com/Creyes17e">
                  <Icon name="github" size="big" inverted />
                </Menu.Item>
                <Menu.Item
                  target="_blank"
                  href="https://www.linkedin.com/in/carina-reyes-21b6701a2/"
                >
                  <Icon name="linkedin" color="blue" size="big" />
                </Menu.Item>
              </Card.Content>
            </Card>
            <Card
              style={{
                backgroundColor: "rgb(34, 34, 34,0.856)",
                color: "white",
                width: "auto",
                padding: "1rem",
              }}
            >
              <Card.Header
                as="h2"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Svitlana Zaster
              </Card.Header>
              <Transition
                animation="horizontal flip"
                transitionOnMount
                duration="1500"
              >
                <Image
                  className="imageAbout"
                  src="https://avatars0.githubusercontent.com/u/41549193?s=460&u=db37f111050f68541fbc9518cb365aa225e070f7&v=4"
                  size="small"
                  centered
                  rounded
                />
              </Transition>
              <Card.Content style={{ fontFamily: "'Raleway', sans-serif" }}>
                Full Stack Web Developer
              </Card.Content>
              <Card.Content className="ratingAbout">
                Rating:{" "}
                <Rating icon="star" defaultRating={5} maxRating={5} disabled />
              </Card.Content>
              <Card.Content className="socialAbout">
                View More:{" "}
                <Menu.Item
                  target="_blank"
                  href="https://github.com/szasterhttps://github.com/szaster"
                >
                  <Icon name="github" size="big" inverted />
                </Menu.Item>
                <Menu.Item
                  target="_blank"
                  href="https://www.linkedin.com/in/svitlana-zaster-77a9a06b/"
                >
                  <Icon name="linkedin" color="blue" size="big" />
                </Menu.Item>
              </Card.Content>
            </Card>
            <Card
              className="our-team"
              style={{
                backgroundColor: "rgb(34, 34, 34,0.856)",
                color: "white",
                width: "auto",
                padding: "1rem",
              }}
            >
              <Card.Header
                as="h2"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Elizabeth Sosa
              </Card.Header>
              <Transition
                animation="horizontal flip"
                transitionOnMount
                duration="1500"
              >
                <Image
                  className="imageAbout"
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQHvexUSRIW1vQ/profile-displayphoto-shrink_400_400/0?e=1605139200&v=beta&t=59SXiGVIcss5w6QK4RMuZbCEznGjwIlpKLydGQG_LSY"
                  size="small"
                  centered
                  rounded
                />
              </Transition>

              <Card.Content
                style={{
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                Full Stack Web Developer
              </Card.Content>
              <Card.Content className="ratingAbout">
                Rating:{" "}
                <Rating icon="star" defaultRating={5} maxRating={5} disabled />
              </Card.Content>
              <Card.Content className="socialAbout">
                View More:{" "}
                <Menu.Item target="_blank" href="https://github.com/lisasosa">
                  <Icon name="github" size="big" inverted />
                </Menu.Item>
                <Menu.Item
                  target="_blank"
                  href="https://www.linkedin.com/in/elizabeth-sosa-43977a58/"
                >
                  <Icon name="linkedin" color="blue" size="big" />
                </Menu.Item>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default About;
