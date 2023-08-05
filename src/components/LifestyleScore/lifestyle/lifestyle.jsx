import "./lifestyle.css";
const Lifestyle = ({
  showLifestyle,
  setshowLifestyle,
  showRunning,
  setshowRunning,
}) => {
  return (
    <div>
      <h1 className="heading">Lifestyle Score</h1>
      <div class="tiles-container">
        <div class="tile">
          <img src="https://hips.hearstapps.com/hmg-prod/images/young-woman-walking-dog-royalty-free-image-1603229590.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*" />
          <div
            class="tile-text"
            onClick={() => {
              setshowRunning(!showRunning);
              setshowLifestyle(!showLifestyle);
            }}
          >
            Walking
          </div>
        </div>
        <div class="tile">
          <img
            src="https://media.istockphoto.com/id/973722408/photo/silhouette-of-cyclist-on-the-background-of-beautiful-sunset.jpg?s=612x612&w=0&k=20&c=WiFWuNZkBHEY_7wdUMAxfTbonIFlR1z64QQhB5jZOQ8="
            alt="Cycling"
          />
          <div class="tile-text">Cycling</div>
        </div>
        <div class="tile">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            alt="Workout"
          />
          <div class="tile-text">Workout</div>
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;
