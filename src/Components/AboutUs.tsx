import React, { useEffect, useState } from "react";
import "./AboutUs.css";

const weddingEpochTime = 1641760200000;
const secondsInADay = 86400;
const secondsInAnHour = 3600;
const secondsInAMinute = 60;

export const AboutUs: React.FC = () => {
  const initialTimeLeft = Math.floor(
    (weddingEpochTime - Date.now()) / 1000
  );
  const [countdown, setCountdown] = useState<number>(initialTimeLeft);

  const daysLeft = Math.floor(countdown / secondsInADay);

  const hoursLeft = Math.floor(
    (countdown - daysLeft * secondsInADay) / secondsInAnHour
  );

  const minutesLeft = Math.floor(
    (countdown -
      daysLeft * secondsInADay -
      hoursLeft * secondsInAnHour) /
      secondsInAMinute
  );

  const secondsLeft = Math.floor(
    countdown -
      daysLeft * secondsInADay -
      hoursLeft * secondsInAnHour -
      minutesLeft * secondsInAMinute
  );

  useEffect(() => {
    setInterval(() => {
      const newTimeLeft = Math.floor(
        (weddingEpochTime - Date.now()) / 1000
      );
      setCountdown(newTimeLeft);
    }, 1000);
  });

  return (
    <main>
      <div className="countdown">
        <p>
          {daysLeft} days {hoursLeft} hours {minutesLeft} minutes{" "}
          {secondsLeft} seconds
          <br />
          and counting
        </p>
      </div>
      <div className="image-container">
        <h1 className="hero-header header">
          We&apos;re getting married!
        </h1>
        <sub>#hellyeahgeson</sub>
      </div>

      <h2 className="about-us-header header">About Us</h2>
      <h6 className="about-us-mini-header header">How We Met</h6>
      <p className="about-us-text">
        When the world paused, things got a little boring during the
        COVID-19 pandemic! But that didn&apos;t stop this couple. Both
        jumped on dating apps to see what could happen when lo and
        behold, they connected! God knew what he was doing when He
        brought them together: He created a bright spot in a dark
        time.
      </p>
      <h6 className="about-us-mini-header header">The First Date</h6>
      <p className="about-us-text">
        The two met up at Sergio&apos;s restaurant for tacos in
        downtown Geneva. After dinner, they went for a stroll along
        the riverwalk where a connection sparked as they joked around
        and chatted about their families, the enneagram, and love
        languages. Josh was a perfect gentleman the entire night,
        something Kristi wasn&apos;t used to! Although she had a two
        hour limit for first dates (something Josh learned later), she
        knew right away she wanted to see him again and was so giddy
        when he asked!
      </p>
      <h6 className="about-us-mini-header header">The Proposal</h6>
      <p className="about-us-text">
        Fast forward a year later. To celebrate their one year
        anniversary, the two headed north for a camping trip to
        Devil&apos;s Lake. At the end of the second day of camping,
        after a long hike and swimming at the beach, Josh suggested a
        hike up the bluff to catch a good view of the sunset. Kristi
        had thought before the trip that it would be a good time for a
        proposal, but after two days without one and Josh acting so
        calm (seriously, he wasn&apos;t weird even once!), she
        didn&apos;t think it would happen! They sat on the edge of the
        bluff and peacefully watched the sun dip. As Kristi got up to
        walk back to the trail, Josh whispered &quot;psst.&quot; She
        turned and there he was: on one knee with a gorgeous ring out,
        the sunset and bluffs behind him. After what Josh calls a
        &quot;happy attack,&quot; she said yes!
      </p>
      <h6 className="about-us-mini-header header">Favorite Dates</h6>
      <p className="about-us-text">
        Day trip to Devil&apos;s lake for the 4th date, a spontaneous
        road trip to visit three states in one day, cinnamon roll test
        tasting date, homemade pizza cook off against Kristi&apos;s
        parents, stargazing and drive in theaters
      </p>
      <h6 className="about-us-mini-header header">
        Random facts about Josh
        <br /> from Kristi&apos;s perspective
      </h6>
      <p className="about-us-text">
        He has a hobby of refurbishing baseball gloves. He&apos;s
        really good at it!!! He even paid his way through college by
        selling gloves 😀 He is a big ole sports fan, particularly
        baseball and softball. He plays up to three softball teams a
        year PLUS basketball PLUS flag football. He can fix or build
        anything with his creative problem solving and skilled hands.
        He says his favorite food is pizza but it&apos;s really
        chocolate chip banana bread. His best quality is that he is
        consistent- he shows up everyday, loves me well, keeps his
        faith first, and has an unwavering calmness about him!
      </p>
      <h6 className="about-us-mini-header header">
        Random facts about Kristi
        <br /> from Josh&apos;s perspective
      </h6>
      <p className="about-us-text">
        She has SO MANY friends -- which is a good problem to have!
        She is very caring in every phase of her life (family,
        friends, work, me, and her faith). She has so many cute
        sayings, laughs, and little quips which start our banter in a
        loving way. She is very invested in the sustainability of
        products, such as fashion, and how people are treated during
        the manufacturing process. She has an amazing personality,
        which is why I love EVERYTHING about her ❤️
      </p>
      <h6 className="about-us-mini-header header">As A Couple</h6>
      <p className="about-us-text">
        Right before proposing, Josh bought a house in the country of
        Sycamore! They are having a blast building their own house
        with a strong foundation. Their faith is important to them and
        they are involved in their church. They love visiting state
        parks, playing with their nephews, and movie dates.
      </p>
      <footer className="footer">
        <p className="signature">Joshua & Kristi</p>
      </footer>
    </main>
  );
};
