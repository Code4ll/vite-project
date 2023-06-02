import "./App.css";
import { Greet } from "./components/prop/Greet.tsx";
import { Person } from "./components/prop/Person.tsx";
import { PersonList } from "./components/prop/PersonList.tsx";
import { Heading } from "./components/prop/Heading.tsx";
import { Status } from "./components/prop/Status.tsx";
import { Oscar } from "./components/prop/Oscar.tsx";
import { Button } from "./components/prop/Button.tsx";
import { Input } from "./components/prop/Input.tsx";
import { Container } from "./components/prop/Container.tsx";
import { ThemeContextProvider } from "./components/context/ThemeContext.tsx";
import { Box } from "./components/context/Box.tsx";

function App() {
  const personName = {
    first: "Khaira",
    last: "Farzana",
  };

  const nameList = [
    {
      first: "Bart",
      last: "Simpson",
    },
    {
      first: "Mikail",
      last: "Rahman",
    },
    {
      first: "Jeon",
      last: "Jungkook",
    },
  ];

  return (
    <div className="App">
      <Greet name="Khaira" notifications={48} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />

      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to OMG!</Heading>
      </Oscar>
      <Greet name="Khaira" notifications={48} isLoggedIn={false} />

      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)}/>

      <Container styles={{ border: '1px solid black',padding:'1rem'}} />
       <ThemeContextProvider>
        <Box/>
       </ThemeContextProvider>   
    
    </div>
  );
}

export default App;
