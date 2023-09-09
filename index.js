const Notification = (props) => {
  const { className, notificationUrl, logo, text } = props;
  return (
    <div className={`notification ${className}`}>
      <img className={logo} src={notificationUrl} />
      <p> {text} </p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      className="notification-info"
      notificationUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      logo="logo"
      text="Information Message"
    />
    <Notification
      className="notification-success"
      notificationUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      logo="logo"
      text="Information Message"
    />
    <Notification
      className="notification-warning"
      notificationUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      logo="logo"
      text="Information Message"
    />
    <Notification
      className="notification-error"
      notificationUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      logo="logo"
      text="Information Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
