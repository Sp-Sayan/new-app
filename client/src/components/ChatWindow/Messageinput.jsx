import { cn } from "@/lib/utils";
import { sendMessages } from "@/store/slices/userChatSlice";
import { Image, X } from "lucide-react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";

const Messageinput = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const messageRef = useRef(null);
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.userChat.selectedUser);
  const isSendingMessage = useSelector(
    (state) => state.userChat.isSendingMessage
  );

  const handleImagePreviewClose = () => {
    setImagePreview(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };
  const handleMessageSend = async () => {
    const text = messageRef.current.value;
    //check for empty message and image
    if (!text.trim() && !imagePreview) return;

    //send message
    await dispatch(
      sendMessages({
        userId: selectedUser._id,
        messages: {
          text: text,
          image: imagePreview,
        },
      })
    );

    //clear form
    if (messageRef.current) messageRef.current.value = "";
    setImagePreview(null);
  };

  return (
    <div className="p-4 border-t bg-background">
      <div className={cn("w-full h-fit py-2 ", imagePreview ? "" : "hidden")}>
        <div className="preview-image-container h-[12vh] aspect-square  relative ">
          <img
            className="h-fit aspect-square rounded-lg"
            src={imagePreview}
            alt=""
          />
          <X
            onClick={handleImagePreviewClose}
            className="absolute top-0 right-0 cursor-pointer bg-black/40 rounded-full"
          />
        </div>
      </div>
      <div className="flex items-center">
        <textarea
          ref={messageRef}
          type="text"
          className="flex-auto border bg-background outline-none rounded-lg px-4 py-2 resize-none"
          placeholder="Type your message...."
        />
        <label htmlFor="image-upload">
          <input
            type="file"
            id="image-upload"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <Image className="ml-4 cursor-pointer text-muted-foreground" />
        </label>
        <button
          className="ml-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-destructive cursor-pointer"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
            }
          }}
          onClick={handleMessageSend}
        >
          {isSendingMessage ? <Loader size="20" /> : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Messageinput;
