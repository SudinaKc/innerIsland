import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from "react-router-dom";
const VideoCall = () => {
    const { joinKey } = useParams();
    const { userName } = useParams();

    const myMeeting = async (element) => {
        const appID = 1595951050;
        const serverSecret = "f0c6d49c3107597cf61dd8fa0eb23ec2";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, joinKey, Date.now().toString(), userName);
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
                    url: `http://localhost:5173/room/${joinKey}`
                },
            ],

            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
            showScreenSharingButton: false,
            turnOnCameraWhenJoining: false,

        });

    }
    return (
        <div>
            <div ref={myMeeting} style={{height:"600px"}} />
        </div>
        
    )
}

export default VideoCall