import { BrowserRouter } from "react-router-dom";

<<<<<<< HEAD
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
=======
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
>>>>>>> 636a77075ddbdf0d236ab4fc94a86c8d9063a83a

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
<<<<<<< HEAD
        <Feedbacks />
=======
        {/*<Feedbacks />*/}
>>>>>>> 636a77075ddbdf0d236ab4fc94a86c8d9063a83a
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 636a77075ddbdf0d236ab4fc94a86c8d9063a83a
