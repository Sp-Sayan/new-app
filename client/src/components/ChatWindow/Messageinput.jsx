const Messageinput = ({ messageInput, onMessageChange, onSendMessage }) => {
    return (
        <div className="p-4 border-t bg-gray-50">
            <div className="flex items-center">
                <input
                type="text"
                className="flex-1 border rounded-lg px-4 py-2"
                placeholder="Type your message...."
                value={messageInput}
                onChange={(e) => onMessageChange(e.target.value)}
                />
                <button
                className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
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
