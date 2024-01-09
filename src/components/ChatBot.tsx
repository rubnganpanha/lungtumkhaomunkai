// import React, { useRef, useEffect } from "react";

// const ChatBot = () => {
//   const MessengerRef = useRef();
//   useEffect(() => {
//     var chatbox = document.getElementById("fb-customer-chat");
//     chatbox.setAttribute("page_id", "100462874827002");
//     chatbox.setAttribute("attribution", "biz_inbox");

//     window.fbAsyncInit = function () {
//       FB.init({
//         xfbml: true,
//         version: "v18.0",
//       });
//     };

//     (function (d, s, id) {
//       var js,
//         fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) return;
//       js = d.createElement(s);
//       js.id = id;
//       js.src = "https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js";
//       fjs.parentNode.insertBefore(js, fjs);
//     })(document, "script", "facebook-jssdk");
//   }, []);

//   return (
//     <>
//       <div id="fb-root"></div>
//       <div id="fb-customer-chat" className="fb-customerchat"></div>
//     </>
//   );
// };
// export default ChatBot;
