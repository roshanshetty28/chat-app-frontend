import { createContext, useState } from "react";

export type contactType = {
    name: String,
    profile: string,
}

export type ChatContextType = {
    chat: contactType,
    setChat: (name: String, icon: string) => void;
};

export const ChatContext = createContext<ChatContextType | null>(null)