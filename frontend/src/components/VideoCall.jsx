import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const VideoCall = () => {
    const { joinKey, userName } = useParams();

    useEffect(() => {
        // Initialize ZegoUIKit here
        const element = document.querySelector("#meeting-container");
        const appID = 173409983;
        const serverSecret = "0c38febbfb35f1575fac29d6519afc89";
        console.log("username", userName)
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, joinKey, Date.now().toString(),userName);
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            showPreJoinView: false,
            videoResolutionList: [
                ZegoUIKitPrebuilt.VideoResolution_360P,
                ZegoUIKitPrebuilt.VideoResolution_180P,
                ZegoUIKitPrebuilt.VideoResolution_480P,
                ZegoUIKitPrebuilt.VideoResolution_720P,
            ],
            videoResolutionDefault: ZegoUIKitPrebuilt.VideoResolution_360P,
            sharedLinks: [
                {
                    name: 'Personal link',
                    url: `https://innerisland.netlify.app/room/${joinKey}`
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: false,
            turnOnCameraWhenJoining: false,
        });

        // Clean up any resources (e.g., disconnect) when the component unmounts
        return () => {
            // Clean up ZegoUIKit or any other resources if needed
            window.location.reload()
        };
    }, [joinKey, userName]);

    return (
        <div>
            <div id="meeting-container" style={{ height: "600px" }} />
        </div>
    );
};

export default VideoCall;