import { ChatEngine } from "react-chat-engine";
import './App.css'
import ChatFeed from "./components/ChatFeed";

const App = () => {
  return(
    <ChatEngine 
      height="100vh"
      projectID="00a4a1d1-a407-43d0-bfc0-2a3592af4aac"
      userName="Param"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
    />
  )
}

export default App;