import styled from "@emotion/styled";
import THEME from "./theme/theme";
import UserUpdateModal from "./components/UserUpdateModal";

const ModalWrapper = styled.div(({ theme }) => ({
  [theme.mediaQueries.tablet]: {
    display: "fixed",
    top: 0,
    left: 0,
    minWidth: "100vw",
    minHeight: "100vh",
    backgroundColor: theme.colors.grayLight,
    zIndex: 0,
  },
}));

function App() {
  return (
    <ModalWrapper theme={THEME}>
      {/* The username is hardcoded in this example. In a real-world application, we would fetch the user data from an API or retrieve it from UserContext (useContext).*/}
      <UserUpdateModal userName="Erika Musterfrau" />
    </ModalWrapper>
  );
}

export default App;
