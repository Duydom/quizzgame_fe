import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Settings from './pages/Settings';
import FinalScreen from "./pages/FinalScreen";
import Questions from "./pages/Questions";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFWV66yiX10sH0Hsz9iw8KotqVGwkpEh8",
  authDomain: "quizzapp-b1dae.firebaseapp.com",
  projectId: "quizzapp-b1dae",
  storageBucket: "quizzapp-b1dae.appspot.com",
  messagingSenderId: "36242158584",
  appId: "1:36242158584:web:83f17860ab33c58dd75c0d",
  measurementId: "G-7RVKD61324"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

function App() {


  return (

    <Router >
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Typography variant="h1" fontWeight="bold"> Quiz App "npm i"</Typography>
                  <Settings />
                </>
              }
            />
            <Route path="/questions" element={<Questions />} />
            <Route path="/score" element={<FinalScreen />} />
          </Routes>
        </Box>
      </Container>
    </Router >
  );
}

export default App;