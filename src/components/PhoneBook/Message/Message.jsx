import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  message: {
    textAlign: "center",
  },
  contactsTitle: {
    textAlign: "center",
  },
});
const Message = () => {
  const classes = useStyles();
  return (
    <>
      <h2 className={classes.contactsTitle}>contacts:</h2>
      <p className={classes.message}>You haven't any contacts </p>
    </>
  );
};

export default Message;
