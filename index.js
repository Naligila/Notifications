const Notification = (props) => {
  const { className, icon, message } = props;
  const containerelement = `notification-container ${className}`;
  return (
    <div className={containerelement}>
      <img className="icon-size" src={icon} />
      <p className="name">{message}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notification-list-container">
      <Notification
        className="bg-color"
        icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information message"
      />
      <Notification
        className="green"
        icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success message"
      />
      <Notification
        className="yellow"
        icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning message"
      />
      <Notification
        className="red"
        icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
