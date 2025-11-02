import { Image } from "lucide-react";

const Messageinput = ({ messageInput, onMessageChange, onSendMessage }) => {
  return (
    <div className="p-4 border-t bg-background">
      <div className="flex items-center">
        <textarea
          type="text"
          className="flex-1 border bg-background outline-none rounded-lg px-4 py-2 resize-none"
          placeholder="Type your message...."
          value={messageInput}
          onChange={(e) => onMessageChange(e.target.value)}
        />
        <label htmlFor="image-upload">
          <input
            type="file"
            id="image-upload"
            className="hidden"
            accept="image/*"
            name="image-send"
          />
          <Image className="ml-4 cursor-pointer text-muted-foreground" />
        </label>
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
