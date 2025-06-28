const BackButton = () => {
  window.onpopstate = function (event) {
    alert(
      "location: " +
        document.location +
        ", state: " +
        JSON.stringify(event.state)
    );
  };
  return <div>BackButton</div>;
};

export default BackButton;
