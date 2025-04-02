import React from 'react'
import { IoSend } from "react-icons/io5";

function MessageType() {
  return (
    <div className="fixed bottom-0 left-[375px] right-0 flex space-x-2 p-2.5 bg-slate-600 z-10 rounded-4xl mr-5 mb-2">
      <div className="flex flex-1 items-center">
        <input type="text" placeholder="Type here" className="input w-full flex-1 p-2 rounded-4xl outline-none" />
      </div>
      <button className="button button-primary text-3xl cursor-pointer mr-3 text-green-500">
        <IoSend />
      </button>
    </div>
  )
}

export default MessageType