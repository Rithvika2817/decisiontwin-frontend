import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatWindow from "../components/chat/ChatWindow";

function ChatPage() {

  return (

    <div className="min-h-screen bg-[#050816] text-white">

      <Navbar />

      <div className="p-10 max-w-[900px] mx-auto">

        <h1 className="text-3xl md:text-5xl font-bold mb-8">

          AI Copilot

        </h1>

        <ChatWindow />

      </div>

      <Footer />

    </div>

  );

}

export default ChatPage;