const EventCapture = () => {
  return (
    <div
      style={{
        backgroundColor: "blue",
        height: "100px",
        width: "100px",
        margin: "20px",
      }}
      onClickCapture={() => console.log("capturing...")}
      onClick={() => console.log("out div clicked")}
    >
      <button
        style={{
          backgroundColor: "skyblue",
          height: "50px",
          width: "50px",
          margin: "20px",
        }}
        onClick={() => console.log("button clicked....")}
      >
        Click
      </button>
    </div>
  );
};

export default EventCapture;
