type GreetProps = {
  name: string;
  notifications?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { notifications = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? "Welcome {props. name}! You have {props.notifications} unread messages"
          : "Welcome Guest"}
      </h2>
    </div>
  );
};
