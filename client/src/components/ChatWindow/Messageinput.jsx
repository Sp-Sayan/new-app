const Messageinput = ({ messageInput, onMessageChange, onSendMessage }) => {
  return (
    <div className="p-4 border-t bg-background">
      <div className="flex items-center">
        <input
          type="text"
          className="flex-1 border bg-background outline-none rounded-lg px-4 py-2"
          placeholder="Type your message...."
          value={messageInput}
          onChange={(e) => onMessageChange(e.target.value)}
        />
        <button
          className="ml-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-destructive cursor-pointer"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSendMessage();
            }
          }}
          onClick={onSendMessage}
          disabled={!messageInput.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Messageinput;
