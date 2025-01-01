import {Button} from "@chef-workspace/slushy";

const App = () => {
  return (
    <div>
     <h1>Welcome to Chef!!</h1>
      <Button size="small" variant="success" onClick={()=>{alert("Happy New Year!!")}}> Are you sure? </Button>
    </div>
  );
}

export default App;